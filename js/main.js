/* ==========================================================================
   TITANSHIELD - CORE LOGIC & INTERACTIVITY
   Theme Switcher, RTL Switcher, Navbar Drawer, Modals, Sliders, Dynamic Pages
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initThemeSystem();
  initDirectionSystem();
  initNavbar();
  initHashNavigation();
  initAccordions();
  initBeforeAfterSliders();
  initInspectionModals();
  initFormValidation();

  // Page specific initializers
  if (document.getElementById('serviceDetailsContainer')) {
    initServiceDetailsPage();
  }
  if (document.getElementById('blogDetailsContainer')) {
    initBlogDetailsPage();
  }
  if (document.getElementById('galleryContainer')) {
    initGalleryPage();
  }
  if (document.getElementById('blogListingContainer')) {
    initBlogListingPage();
  }
});

/* ==========================================================================
   1. GLOBAL THEME SYSTEM (Light / Dark)
   ========================================================================== */
function initThemeSystem() {
  const savedTheme = localStorage.getItem('titanshield-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  const themeToggles = document.querySelectorAll('.toggle-theme-btn, #themeToggle');
  themeToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('titanshield-theme', newTheme);
      showToast(`Switched to ${newTheme.toUpperCase()} mode`, 'info');
    });
  });
}

/* ==========================================================================
   2. GLOBAL LTR / RTL SYSTEM
   ========================================================================== */
function initDirectionSystem() {
  const savedDir = localStorage.getItem('titanshield-dir') || 'ltr';
  document.documentElement.setAttribute('dir', savedDir);

  const dirToggles = document.querySelectorAll('.btn-toggle-dir, .toggle-dir-btn, #rtlToggle');
  updateAllDirButtons(savedDir);

  dirToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      document.documentElement.setAttribute('dir', newDir);
      localStorage.setItem('titanshield-dir', newDir);
      updateAllDirButtons(newDir);
      showToast(`Layout switched to ${newDir.toUpperCase()}`, 'info');
    });
  });
}

function updateAllDirButtons(dir) {
  const dirToggles = document.querySelectorAll('.btn-toggle-dir, .toggle-dir-btn, #rtlToggle');
  dirToggles.forEach(btn => {
    // When in LTR, display 'RTL' (to trigger RTL). When in RTL, display 'LTR' (to trigger LTR).
    btn.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
    btn.setAttribute('title', dir === 'rtl' ? 'Switch layout to LTR' : 'Switch layout to RTL');
    btn.setAttribute('aria-label', dir === 'rtl' ? 'Switch layout to LTR' : 'Switch layout to RTL');
  });
}

/* ==========================================================================
   3. NAVBAR CONTROLS (Hamburger, Home Dropdown, Active Link)
   ========================================================================== */
function initNavbar() {
  const hamburger = document.getElementById('navHamburger');
  const navMenu = document.getElementById('navMenuWrapper');
  const homeDropdown = document.querySelector('.nav-item.dropdown');
  const homeDropdownTrigger = document.getElementById('homeDropdownTrigger');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      hamburger.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Home dropdown toggle on click (desktop & mobile)
  if (homeDropdownTrigger && homeDropdown) {
    homeDropdownTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = homeDropdown.classList.toggle('show');
      homeDropdownTrigger.setAttribute('aria-expanded', isOpen);
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!homeDropdown.contains(e.target)) {
        homeDropdown.classList.remove('show');
        homeDropdownTrigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Highlight active link based on current page path
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .dropdown-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
      // If dropdown link is active, also highlight parent Home link
      if (link.classList.contains('dropdown-link') && homeDropdownTrigger) {
        homeDropdownTrigger.classList.add('active');
      }
    }
  });
}

/* ==========================================================================
   3.5. SMOOTH HASH ANCHOR NAVIGATION & GLOW PULSE
   Jumps directly to matching core service heading and highlights the section
   ========================================================================== */
function initHashNavigation() {
  document.querySelectorAll('a[href*="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#' || href.startsWith('#!')) return;
      const parts = href.split('#');
      const targetHash = parts[1];
      if (!targetHash) return;

      const currentPath = window.location.pathname.split('/').pop() || 'index.html';
      const targetPage = parts[0];
      const isCurrentPage = !targetPage || targetPage === '' || targetPage === currentPath;

      if (isCurrentPage) {
        const targetElement = document.getElementById(targetHash);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
          history.pushState(null, null, `#${targetHash}`);
          targetElement.classList.add('section-highlight-pulse');
          setTimeout(() => {
            targetElement.classList.remove('section-highlight-pulse');
          }, 2000);
        }
      }
    });
  });

  // On page load with hash in URL
  if (window.location.hash) {
    const rawHash = window.location.hash.substring(1);
    const targetElement = document.getElementById(rawHash);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        targetElement.classList.add('section-highlight-pulse');
        setTimeout(() => {
          targetElement.classList.remove('section-highlight-pulse');
        }, 2000);
      }, 350);
    }
  }
}

/* ==========================================================================
   4. BEFORE & AFTER INTERACTIVE SLIDERS
   ========================================================================== */
function initBeforeAfterSliders() {
  const sliders = document.querySelectorAll('.ba-slider-container');
  sliders.forEach(slider => {
    const afterWrap = slider.querySelector('.ba-slider-after-wrap');
    const handle = slider.querySelector('.ba-handle');
    if (!afterWrap || !handle) return;

    let isDown = false;

    const setPosition = (clientX) => {
      const rect = slider.getBoundingClientRect();
      const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
      let x = clientX - rect.left;
      let percent = (x / rect.width) * 100;
      percent = Math.max(0, Math.min(100, percent));

      if (isRtl) {
        afterWrap.style.width = `${100 - percent}%`;
        handle.style.left = `${percent}%`;
      } else {
        afterWrap.style.width = `${percent}%`;
        handle.style.left = `${percent}%`;
      }
    };

    handle.addEventListener('mousedown', () => { isDown = true; });
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      setPosition(e.clientX);
    });

    window.addEventListener('mouseup', () => { isDown = false; });
    window.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      setPosition(e.clientX);
    });

    // Touch Support
    handle.addEventListener('touchstart', () => { isDown = true; }, { passive: true });
    slider.addEventListener('touchstart', (e) => {
      isDown = true;
      if (e.touches[0]) setPosition(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchend', () => { isDown = false; });
    window.addEventListener('touchmove', (e) => {
      if (!isDown || !e.touches[0]) return;
      setPosition(e.touches[0].clientX);
    }, { passive: true });
  });
}

/* ==========================================================================
   5. ACCORDION FAQ
   ========================================================================== */
function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const parentItem = btn.closest('.accordion-item');
      if (!parentItem) return;
      const isAlreadyActive = parentItem.classList.contains('active');
      const accordion = parentItem.closest('.accordion');

      if (accordion) {
        accordion.querySelectorAll('.accordion-item').forEach(item => {
          item.classList.remove('active');
        });
      }

      if (!isAlreadyActive) {
        parentItem.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   6. INSPECTION BOOKING MODAL & NOTIFICATIONS
   ========================================================================== */
function initInspectionModals() {
  const modal = document.getElementById('inspectionModal');
  if (!modal) return;

  const openButtons = document.querySelectorAll('.open-inspection-modal, [data-open-modal="inspection"]');
  const closeButtons = modal.querySelectorAll('.modal-close, [data-close-modal]');

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // If we are already on contact page and clicking the anchor link, let it smooth scroll
      if (window.location.pathname.includes('contact.html') && btn.getAttribute('href')?.startsWith('#')) {
        return;
      }
      e.preventDefault();
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ==========================================================================
   7. FORM VALIDATION & FEEDBACK
   ========================================================================== */
function initFormValidation() {
  // 1. Auto-set minimum date on all date pickers to today's date
  const todayDateStr = new Date().toISOString().split('T')[0];
  document.querySelectorAll('input[type="date"]').forEach(input => {
    if (!input.getAttribute('min')) {
      input.setAttribute('min', todayDateStr);
    }
  });

  const forms = document.querySelectorAll('form.needs-validation');

  function getFieldType(el) {
    const type = (el.type || '').toLowerCase();
    const id = (el.id || '').toLowerCase();
    const name = (el.name || '').toLowerCase();
    const tag = (el.tagName || '').toLowerCase();

    // 1. Password confirmation
    if (type === 'password' && (id.includes('conf') || name.includes('conf'))) return 'confirm_password';
    if (type === 'password') return 'password';

    // 2. Email (type='email' or id/name contains 'email') - MUST be checked before name!
    if (type === 'email' || id.includes('email') || name.includes('email')) return 'email';

    // 3. Phone (type='tel' or id/name contains 'phone')
    if (type === 'tel' || id.includes('phone') || name.includes('phone')) return 'phone';

    // 4. Date picker
    if (type === 'date' || id.includes('date') || name.includes('date')) return 'date';

    // 5. Select dropdown
    if (tag === 'select') return 'select';

    // 6. Address / Street / City / Zip
    if (id.includes('address') || name.includes('address') || id.includes('street') || name.includes('street')) return 'address';

    // 7. Full Name - only text inputs where id or name contains 'name', and NOT username, email, etc.
    // (Never check placeholder, avoiding the name@example.com collision)
    if ((type === 'text' || !type) && (id.includes('name') || name.includes('name')) && !id.includes('user') && !name.includes('user')) {
      return 'name';
    }

    return 'generic';
  }

  function setFieldError(input, message) {
    const group = input.closest('.form-group');
    if (group) {
      group.classList.add('has-error');
      let feedback = group.querySelector('.form-feedback');
      if (!feedback) {
        feedback = document.createElement('span');
        feedback.className = 'form-feedback';
        group.appendChild(feedback);
      }
      feedback.textContent = message;
      feedback.style.display = 'block';
    }
    return false;
  }

  function clearFieldError(input) {
    const group = input.closest('.form-group');
    if (group) {
      group.classList.remove('has-error');
      const feedback = group.querySelector('.form-feedback');
      if (feedback) {
        feedback.style.display = 'none';
      }
    }
    return true;
  }

  function validateField(input) {
    const isRequired = input.hasAttribute('required');
    const val = input.value.trim();
    const fType = getFieldType(input);

    // Required check
    if (isRequired && !val) {
      if (fType === 'name') return setFieldError(input, 'Full name is required (letters only).');
      if (fType === 'email') return setFieldError(input, "Email address is required (e.g. name@example.com).");
      if (fType === 'phone') return setFieldError(input, '10-digit phone number is required (numbers only).');
      if (fType === 'date') return setFieldError(input, 'Please select a preferred inspection date.');
      if (fType === 'select') return setFieldError(input, 'Please select a required service.');
      if (fType === 'address') return setFieldError(input, 'Property address is required.');
      return setFieldError(input, 'This field is required.');
    }

    // Specific input format checks
    if (val) {
      // 1. Name validation (letters, spaces, hyphens, periods, apostrophes only)
      if (fType === 'name') {
        if (!/^[a-zA-Z\s.'-]{2,60}$/.test(val)) {
          return setFieldError(input, 'Name must contain letters only (minimum 2 characters).');
        }
      }

      // 2. Email validation (must contain @ and valid domain)
      if (fType === 'email') {
        if (!val.includes('@')) {
          return setFieldError(input, "Email must include '@' symbol (e.g. name@example.com).");
        }
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(val)) {
          return setFieldError(input, "Please enter a valid email address with a domain (e.g. name@example.com).");
        }
      }

      // 3. Phone validation (exact 10 digits required)
      if (fType === 'phone') {
        const digits = val.replace(/\D/g, '');
        if (digits.length !== 10) {
          return setFieldError(input, `Please enter a complete 10-digit phone number (${digits.length}/10 entered).`);
        }
      }

      // 4. Confirm password check
      if (fType === 'confirm_password') {
        const form = input.closest('form');
        const pass = form ? form.querySelector('input[type="password"]:not([id*="conf" i])') : null;
        if (pass && pass.value !== val) {
          return setFieldError(input, 'Passwords do not match.');
        }
      }
    }

    return clearFieldError(input);
  }

  // Bind live restriction listeners across all inputs in all forms
  forms.forEach(form => {
    const allInputs = form.querySelectorAll('input, select, textarea');

    allInputs.forEach(input => {
      const fType = getFieldType(input);

      // 1. Name Input Restriction: ONLY LETTERS ALLOWED
      if (fType === 'name') {
        input.addEventListener('keydown', (e) => {
          // Allow system/navigation keys
          if (e.key === 'Backspace' || e.key === 'Delete' || e.key === 'Tab' || e.key === 'Enter' ||
              e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Home' || e.key === 'End' ||
              e.ctrlKey || e.metaKey) {
            return;
          }
          // Prevent numbers and special characters
          if (!/^[a-zA-Z\s.'-]$/.test(e.key)) {
            e.preventDefault();
          }
        });

        input.addEventListener('input', (e) => {
          // Strip any non-letters if pasted
          const sanitized = e.target.value.replace(/[^a-zA-Z\s.'-]/g, '');
          if (e.target.value !== sanitized) {
            e.target.value = sanitized;
          }
          validateField(input);
        });
      }

      // 2. Phone Input Restriction: ONLY NUMBERS ALLOWED & AUTO-FORMAT
      if (fType === 'phone') {
        input.addEventListener('keydown', (e) => {
          // Allow system/navigation keys
          if (e.key === 'Backspace' || e.key === 'Delete' || e.key === 'Tab' || e.key === 'Enter' ||
              e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Home' || e.key === 'End' ||
              e.ctrlKey || e.metaKey) {
            return;
          }
          // Block all non-digit keys completely (letters are never printed!)
          if (!/^\d$/.test(e.key)) {
            e.preventDefault();
          }
        });

        input.addEventListener('input', (e) => {
          let digits = e.target.value.replace(/\D/g, '');
          if (digits.length > 10) digits = digits.slice(0, 10);
          
          if (digits.length === 0) {
            e.target.value = '';
          } else if (digits.length > 6) {
            e.target.value = `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`;
          } else if (digits.length > 3) {
            e.target.value = `(${digits.slice(0,3)}) ${digits.slice(3)}`;
          } else {
            e.target.value = `(${digits}`;
          }
          validateField(input);
        });
      }

      // 3. Real-time validation on blur & input
      input.addEventListener('blur', () => validateField(input));
      if (fType !== 'name' && fType !== 'phone') {
        input.addEventListener('input', () => {
          const group = input.closest('.form-group');
          if (group && group.classList.contains('has-error')) {
            validateField(input);
          }
        });
      }
      if (fType === 'select' || input.tagName === 'SELECT') {
        input.addEventListener('change', () => validateField(input));
      }
      if (fType === 'date' || input.type === 'date') {
        input.addEventListener('change', () => validateField(input));
      }
    });

    // Form submission validation
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isFormValid = true;
      let firstInvalid = null;

      const formControls = form.querySelectorAll('input, select, textarea');
      formControls.forEach(input => {
        if (input.type === 'submit' || input.type === 'button' || input.type === 'checkbox') return;
        const valid = validateField(input);
        if (!valid) {
          isFormValid = false;
          if (!firstInvalid) firstInvalid = input;
        }
      });

      if (!isFormValid) {
        if (firstInvalid) firstInvalid.focus();
        showToast('Please correct the highlighted fields before submitting.', 'info');
        return;
      }

      // Specific success routing
      if (form.id === 'loginForm') {
        showToast('Login successful! Redirecting to dashboard...', 'success');
        setTimeout(() => { window.location.href = 'dashboard.html'; }, 900);
      } else if (form.id === 'registerForm') {
        showToast('Account registered successfully! Redirecting...', 'success');
        setTimeout(() => { window.location.href = 'dashboard.html'; }, 900);
      } else if (form.id === 'generalContactForm') {
        showToast('Inquiry sent! Our customer engineering team will contact you shortly.', 'success');
        form.reset();
      } else {
        showToast('Inspection request received! A licensed engineer will contact you within 2 business hours.', 'success');
        form.reset();
        const modal = form.closest('.modal-overlay');
        if (modal) {
          setTimeout(() => {
            modal.classList.remove('open');
            document.body.style.overflow = '';
          }, 850);
        }
      }
    });
  });
}

/* Toast System */
function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      ${type === 'success' 
        ? '<polyline points="20 6 9 17 4 12"></polyline>' 
        : '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>'}
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* ==========================================================================
   8. DYNAMIC SERVICE DETAILS PAGE LOADER
   ========================================================================== */
function initServiceDetailsPage() {
  const container = document.getElementById('serviceDetailsContainer');
  if (!container || !window.SITE_DATA) return;

  const urlParams = new URLSearchParams(window.location.search);
  const serviceId = urlParams.get('service') || 'basement-waterproofing';
  const service = SITE_DATA.services.find(s => s.id === serviceId) || SITE_DATA.services[0];

  // Update Breadcrumb & Page Title
  document.title = `${service.title} | TitanShield Foundation & Waterproofing`;
  const serviceNameEls = document.querySelectorAll('.dynamic-service-name');
  serviceNameEls.forEach(el => el.textContent = service.title);

  // Populate Service Details
  container.innerHTML = `
    <!-- 1. Service Hero -->
    <section class="page-hero hero-service-details" style="${service.image ? `background-image: url('${service.image}');` : ''}">
      <div class="container">
        <div class="breadcrumb">
          <a href="index.html">Home</a> <span>/</span>
          <a href="services.html">Services</a> <span>/</span>
          <span>${service.title}</span>
        </div>
        <span class="badge badge-primary">Comprehensive Engineering Solution</span>
        <h1 class="page-hero-title">${service.title}</h1>
        <p class="page-hero-desc">${service.shortDesc}</p>
        <div class="btn-group" style="justify-content: center; margin-top: 1.5rem;">
          <a href="#quote" class="btn btn-primary open-inspection-modal">Schedule Inspection for ${service.title}</a>
          <a href="services.html" class="btn btn-outline">Explore All 8 Services</a>
        </div>
      </div>
    </section>

    <!-- 2. Main Service Content & Warning Signs -->
    <section class="section">
      <div class="container">
        <div class="grid grid-2" style="align-items: center; gap: var(--space-3xl);">
          <div>
            <span class="badge badge-accent">Diagnostics & Symptoms</span>
            <h2 class="section-title">Common Problems & Warning Signs</h2>
            <p class="section-subtitle" style="margin-bottom: 1.5rem;">Ignoring these initial moisture and structural distress symptoms often leads to exponentially higher foundation repair expenses.</p>
            <ul class="service-features-list">
              ${service.problems.map(prob => `
                <li style="font-size: 1rem; color: var(--text-main); margin-bottom: 0.75rem;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color: var(--color-danger); width: 20px; height: 20px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <span>${prob}</span>
                </li>
              `).join('')}
            </ul>
          </div>
          <div class="hero-image-card">
            <img src="${service.image}" alt="${service.title}" style="aspect-ratio: 16/11; object-fit: cover;">
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Our Step-by-Step Engineering Repair Process -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <span class="badge badge-primary">Proven Protocol</span>
          <h2 class="section-title">Our Certified Repair Process</h2>
          <p class="section-subtitle">Every installation strictly adheres to structural engineering standards and local building codes.</p>
        </div>
        <div class="grid grid-4">
          ${service.process.map((step, idx) => `
            <div class="process-step-card">
              <div class="step-number-tag">0${idx + 1}</div>
              <h3 class="step-title">Phase ${idx + 1}</h3>
              <p class="step-desc">${step}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 4. Key Benefits & 25-Year Warranty Details -->
    <section class="section">
      <div class="container">
        <div class="grid grid-2" style="align-items: center;">
          <div class="card" style="border-inline-start: 4px solid var(--color-primary); padding: 2.5rem;">
            <span class="badge badge-success">Guaranteed Protection</span>
            <h3 style="font-size: 1.6rem; margin-bottom: 1rem;">Lifetime Assurance & Value</h3>
            <ul class="service-features-list">
              ${service.benefits.map(b => `
                <li style="font-size: 0.95rem; color: var(--text-main);">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color: var(--color-success);"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>${b}</span>
                </li>
              `).join('')}
            </ul>
          </div>
          <div class="card" id="quote" style="background: var(--bg-surface-alt); padding: 2.5rem;">
            <span class="badge badge-primary">Transparent Pricing</span>
            <h3 style="font-size: 1.4rem; margin-bottom: 0.5rem;">Indicative Cost Range</h3>
            <p style="font-size: 1.6rem; font-weight: 800; color: var(--color-primary); margin-bottom: 1rem;">${service.priceEst}</p>
            <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.5rem;">*Final pricing is determined after a free 27-point physical site inspection based on soil type, foundation depth, and linear feet required.</p>
            <button class="btn btn-primary btn-lg open-inspection-modal" style="width: 100%;">Book Free 27-Point Inspection</button>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Service Specific FAQs -->
    <section class="section section-alt">
      <div class="container" style="max-width: 860px;">
        <div class="section-header">
          <span class="badge badge-primary">Frequently Asked Questions</span>
          <h2 class="section-title">${service.title} FAQs</h2>
        </div>
        <div class="accordion">
          ${service.faqs.map((faq, i) => `
            <div class="accordion-item ${i === 0 ? 'active' : ''}">
              <button class="accordion-header">
                <span>${faq.q}</span>
                <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div class="accordion-body">
                <div class="accordion-content">${faq.a}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 6. Related Services Navigation -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="badge badge-primary">Complementary Systems</span>
          <h2 class="section-title">Related Structural Services</h2>
        </div>
        <div class="grid grid-3">
          ${SITE_DATA.services.filter(s => s.id !== service.id).slice(0, 3).map(rel => `
            <div class="card service-card card-hover">
              <div class="card-image-wrap">
                <img src="${rel.image}" alt="${rel.title}">
              </div>
              <div class="card-content">
                <h3 class="card-title">${rel.title}</h3>
                <p class="card-desc">${rel.shortDesc}</p>
                <a href="service-details.html?service=${rel.id}" class="btn btn-outline btn-sm">Learn More Details</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  // Re-attach interactive components for this loaded template
  initAccordions();
  initInspectionModals();
}

/* ==========================================================================
   9. DYNAMIC BLOG DETAILS PAGE LOADER
   ========================================================================== */
function initBlogDetailsPage() {
  const container = document.getElementById('blogDetailsContainer');
  if (!container || !window.SITE_DATA) return;

  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('post') || 'foundation-crack-guide-2026';
  const post = SITE_DATA.blogPosts.find(p => p.id === postId) || SITE_DATA.blogPosts[0];

  document.title = `${post.title} | TitanShield Blog`;

  container.innerHTML = `
    <section class="page-hero hero-blog-details" style="text-align: start; padding-block: var(--space-3xl); ${post.image ? `background-image: url('${post.image}');` : ''}">
      <div class="container">
        <div class="breadcrumb">
          <a href="index.html">Home</a> <span>/</span>
          <a href="blog.html">Blog</a> <span>/</span>
          <span>Article Details</span>
        </div>
        <span class="badge badge-primary">${post.category}</span>
        <h1 class="page-hero-title" style="max-width: 900px; font-size: clamp(2rem, 3.5vw, 2.75rem);">${post.title}</h1>
        <div class="blog-meta" style="font-size: 0.95rem; margin-top: 1rem;">
          <span>By <strong>${post.author}</strong></span> •
          <span>${post.date}</span> •
          <span>${post.readTime}</span>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="article-layout">
          <!-- Article Body -->
          <article class="article-body">
            <div class="hero-image-card" style="margin-bottom: 2rem;">
              <img src="${post.image}" alt="${post.title}" style="aspect-ratio: 16/9; width: 100%; object-fit: cover;">
            </div>
            ${post.content}
            <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
              <a href="blog.html" class="btn btn-outline">← Back to All Articles</a>
              <a href="contact.html" class="btn btn-primary open-inspection-modal">Schedule Foundation Inspection</a>
            </div>
          </article>

          <!-- Sidebar -->
          <aside class="article-sidebar">
            <div class="sidebar-card">
              <h3 class="sidebar-title">Recent Engineering Articles</h3>
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                ${SITE_DATA.blogPosts.filter(p => p.id !== post.id).map(p => `
                  <a href="blog-details.html?post=${p.id}" style="color: var(--text-main); font-size: 0.92rem; font-weight: 700; line-height: 1.4;">
                    ${p.title}
                    <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 400; margin-top: 0.2rem;">${p.date} • ${p.readTime}</div>
                  </a>
                `).join('')}
              </div>
            </div>

            <div class="sidebar-card" style="background: linear-gradient(135deg, var(--color-primary-dark), #0f172a); color: #ffffff;">
              <span class="badge badge-accent">24/7 Hotline</span>
              <h3 style="color: #ffffff; font-size: 1.35rem; margin-bottom: 0.5rem;">Have Active Foundation Water?</h3>
              <p style="color: #cbd5e1; font-size: 0.9rem; margin-bottom: 1.25rem;">Our certified diagnostic structural specialists are on call 24/7 for emergency water seepage and wall failure.</p>
              <a href="tel:18005557443" class="btn btn-accent" style="width: 100%;">Call (800) 555-SHIELD</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;

  initInspectionModals();
}

/* ==========================================================================
   10. GALLERY CATEGORY FILTERING & MODAL
   ========================================================================== */
function initGalleryPage() {
  const container = document.getElementById('galleryGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!container || !window.SITE_DATA) return;

  function renderProjects(category = 'all') {
    const list = category === 'all' 
      ? SITE_DATA.galleryProjects 
      : SITE_DATA.galleryProjects.filter(p => p.categoryKey === category);

    container.innerHTML = list.map(p => `
      <div class="gallery-card card-hover">
        <div class="gallery-visual">
          <img src="${p.afterImg}" alt="${p.title}">
          <span class="gallery-badge">${p.category}</span>
        </div>
        <div class="gallery-content">
          <h3 class="gallery-title">${p.title}</h3>
          <div class="gallery-meta">Location: ${p.location} • Duration: ${p.duration}</div>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1rem; flex-grow: 1;">${p.solution}</p>
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-outline btn-sm view-case-study" data-project-id="${p.id}" style="flex: 1;">View Case Study</button>
            <a href="contact.html" class="btn btn-primary btn-sm open-inspection-modal">Quote</a>
          </div>
        </div>
      </div>
    `).join('');

    // Attach case study click
    document.querySelectorAll('.view-case-study').forEach(btn => {
      btn.addEventListener('click', () => {
        const projId = btn.getAttribute('data-project-id');
        const proj = SITE_DATA.galleryProjects.find(item => item.id === projId);
        if (proj) openProjectModal(proj);
      });
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.getAttribute('data-filter'));
    });
  });

  renderProjects('all');
}

function openProjectModal(proj) {
  const modal = document.getElementById('projectDetailsModal');
  if (!modal) return;

  document.getElementById('modalProjectTitle').textContent = proj.title;
  document.getElementById('modalProjectLocation').textContent = `${proj.location} • Duration: ${proj.duration}`;
  document.getElementById('modalProjectScope').textContent = proj.scope;
  document.getElementById('modalProjectSolution').textContent = proj.solution;
  document.getElementById('modalProjectWarranty').textContent = proj.warranty;
  document.getElementById('modalBeforeImg').src = proj.beforeImg;
  document.getElementById('modalAfterImg').src = proj.afterImg;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   11. BLOG LISTING PAGE SEARCH & FILTERS
   ========================================================================== */
function initBlogListingPage() {
  const grid = document.getElementById('blogCardsGrid');
  const searchInput = document.getElementById('blogSearchInput');
  const filterBtns = document.querySelectorAll('.blog-filter-btn');
  if (!grid || !window.SITE_DATA) return;

  function renderArticles(filter = 'all', query = '') {
    let list = SITE_DATA.blogPosts;
    if (filter !== 'all') {
      list = list.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));
    }
    if (query) {
      list = list.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.excerpt.toLowerCase().includes(query.toLowerCase()));
    }

    if (list.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">No articles found matching "${query}". Try another search term.</div>`;
      return;
    }

    grid.innerHTML = list.map(p => `
      <div class="blog-card card-hover">
        <div class="blog-img-wrap">
          <img src="${p.image}" alt="${p.title}">
        </div>
        <div class="blog-content">
          <div class="blog-meta">
            <span class="badge badge-primary" style="margin-bottom: 0;">${p.category}</span>
            <span>${p.readTime}</span>
          </div>
          <h3 class="blog-title"><a href="blog-details.html?post=${p.id}">${p.title}</a></h3>
          <p class="blog-excerpt">${p.excerpt}</p>
          <div class="blog-author">
            <div class="blog-author-avatar">PE</div>
            <div style="display: flex; flex-direction: column;">
              <span class="blog-author-name">${p.author}</span>
              <span style="font-size: 0.72rem; color: var(--text-muted);">${p.date}</span>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const activeFilter = document.querySelector('.blog-filter-btn.active')?.getAttribute('data-filter') || 'all';
      renderArticles(activeFilter, e.target.value.trim());
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderArticles(btn.getAttribute('data-filter'), searchInput?.value.trim() || '');
    });
  });

  renderArticles('all');

  // Interactive Symptom Diagnostic Matrix ("Homeowner Triage")
  initSymptomMatrix();

  // Blog Newsletter Subscription
  initBlogNewsletter();
}

function initSymptomMatrix() {
  const symptomBtns = document.querySelectorAll('.symptom-tab-btn');
  const riskEl = document.getElementById('diagPanelRisk');
  const titleEl = document.getElementById('diagPanelTitle');
  const causeEl = document.getElementById('diagPanelCause');
  const solutionEl = document.getElementById('diagPanelSolution');
  const linkEl = document.getElementById('diagPanelLink');

  if (!symptomBtns.length || !riskEl || !titleEl) return;

  const symptomData = {
    bowing: {
      riskHtml: '<span class="badge badge-danger">Critical Structural Risk</span>',
      title: 'Horizontal Cracks & Inward Wall Bowing',
      cause: 'Lateral expansive soil and hydrostatic groundwater pressure pushing inward against the middle third of the foundation wall. Without immediate stabilization, progressive wall deflection can cause upper framing shear and structural failure.',
      solution: 'Aerospace-grade carbon-fiber Kevlar grid stitching or heavy-duty structural steel I-beam soldier columns anchored to footing and ceiling joists.',
      href: 'blog-details.html?post=foundation-crack-guide-2026',
      linkText: 'Read Crack Diagnostic Guide →'
    },
    cove: {
      riskHtml: '<span class="badge badge-danger">High Seepage Risk</span>',
      title: 'Cove Joint Water Seepage & Floor Cracks',
      cause: 'Hydrostatic water table pressure beneath the concrete basement slab rising until groundwater forces its way through the cold joint between the footing and poured foundation wall.',
      solution: 'Perimeter sub-floor dual-chamber drainage channel with vapor flange tied to a dedicated high-capacity sump basin system.',
      href: 'blog-details.html?post=french-drain-internal-vs-external',
      linkText: 'Read French Drain Guide →'
    },
    pump: {
      riskHtml: '<span class="badge badge-warning">High Risk: Impending Flood</span>',
      title: 'Sump Pit Rattling, Air Locking & Power Tripping',
      cause: 'Mechanical float switch failure, impeller cavitation from silt accumulation, or single-circuit AC power outage during severe storm events.',
      solution: 'Dual cast-iron primary pumps with redundant magnetic solid-state floats, inverter battery backup, and IoT cellular remote telemetry.',
      href: 'blog-details.html?post=sump-pump-failure-storms',
      linkText: 'Read Sump Backup Guide →'
    },
    odor: {
      riskHtml: '<span class="badge badge-accent">Moderate: Air Quality & Rot Risk</span>',
      title: 'Musty Odors, High Humidity & Biological Growth',
      cause: 'Unconditioned crawl space soil evaporation pulled upward into the first and second floor living spaces via thermal chimney Stack Effect.',
      solution: '20-mil virgin poly crawl space encapsulation, conditioned air sealing, and commercial-grade low-temperature dehumidification system.',
      href: 'blog-details.html?post=stack-effect-crawl-space',
      linkText: 'Read Stack Effect Guide →'
    }
  };

  symptomBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      symptomBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const key = btn.getAttribute('data-symptom');
      const item = symptomData[key];
      if (item) {
        riskEl.innerHTML = item.riskHtml;
        titleEl.textContent = item.title;
        causeEl.textContent = item.cause;
        solutionEl.textContent = item.solution;
        linkEl.href = item.href;
        linkEl.textContent = item.linkText;
      }
    });
  });
}

function initBlogNewsletter() {
  const form = document.getElementById('blogNewsletterForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('newsletterEmail');
    if (emailInput && emailInput.value.trim()) {
      showToast(`Thank you! Structural alerts and engineering updates will be sent to ${emailInput.value.trim()}.`, 'success');
      form.reset();
    }
  });
}
