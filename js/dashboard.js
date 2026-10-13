/* ==========================================================================
   TITANSHIELD - ADMIN DASHBOARD LOGIC
   Sidebar Navigation, SVG Charts, Live Search, Inspection Management
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initDashboardSidebar();
  initDashboardTabs();
  initInspectionsTable();
  renderPerformanceChart();
});

function initDashboardSidebar() {
  const sidebarToggle = document.getElementById('sidebarToggleMobile');
  const sidebar = document.getElementById('dashboardSidebar');

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target) && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
      }
    });
  }
}

function initDashboardTabs() {
  const links = document.querySelectorAll('.sidebar-link[data-tab]');
  const views = document.querySelectorAll('.dash-tab-view');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = link.getAttribute('data-tab');

      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      views.forEach(v => {
        if (v.id === `tab-${targetTab}`) {
          v.style.display = 'block';
        } else {
          v.style.display = 'none';
        }
      });

      // Close mobile sidebar if open
      const sidebar = document.getElementById('dashboardSidebar');
      if (sidebar && window.innerWidth <= 900) {
        sidebar.classList.remove('open');
      }
    });
  });
}

function initInspectionsTable() {
  const searchInput = document.getElementById('inspectionSearchInput');
  const statusFilter = document.getElementById('inspectionStatusFilter');
  const tableBody = document.getElementById('inspectionsTableBody');

  if (!tableBody || !window.SITE_DATA) return;

  function renderTable(search = '', status = 'all') {
    let list = SITE_DATA.dashboardData.inspections;

    if (status !== 'all') {
      list = list.filter(item => item.status.toLowerCase() === status.toLowerCase());
    }

    if (search) {
      list = list.filter(item => 
        item.client.toLowerCase().includes(search.toLowerCase()) || 
        item.service.toLowerCase().includes(search.toLowerCase()) ||
        item.id.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (list.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 2rem; color: var(--text-muted);">No inspection requests found matching criteria.</td></tr>`;
      return;
    }

    tableBody.innerHTML = list.map(item => `
      <tr>
        <td><strong>${item.id}</strong></td>
        <td>${item.client}</td>
        <td>${item.phone}</td>
        <td>${item.service}</td>
        <td>${item.date}</td>
        <td><span class="status-pill ${item.status.toLowerCase()}">${item.status}</span></td>
        <td>
          <button class="btn btn-outline btn-sm" onclick="alert('Viewing booking record for ${item.client} (${item.id})')">View</button>
        </td>
      </tr>
    `).join('');
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderTable(e.target.value.trim(), statusFilter?.value || 'all');
    });
  }

  if (statusFilter) {
    statusFilter.addEventListener('change', (e) => {
      renderTable(searchInput?.value.trim() || '', e.target.value);
    });
  }

  renderTable();
}

function renderPerformanceChart() {
  const chartSvg = document.getElementById('performanceChartSvg');
  if (!chartSvg) return;

  // Render an ultra crisp SVG multi-series trend line chart
  chartSvg.innerHTML = `
    <defs>
      <linearGradient id="gradInspections" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0284c7" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="#0284c7" stop-opacity="0.0"/>
      </linearGradient>
    </defs>
    <!-- Grid Lines -->
    <line x1="40" y1="30" x2="680" y2="30" stroke="var(--border-color)" stroke-dasharray="4"/>
    <line x1="40" y1="80" x2="680" y2="80" stroke="var(--border-color)" stroke-dasharray="4"/>
    <line x1="40" y1="130" x2="680" y2="130" stroke="var(--border-color)" stroke-dasharray="4"/>
    <line x1="40" y1="180" x2="680" y2="180" stroke="var(--border-color)" stroke-dasharray="4"/>
    
    <!-- Y-Axis Labels -->
    <text x="30" y="35" font-size="11" fill="var(--text-muted)" text-anchor="end">160</text>
    <text x="30" y="85" font-size="11" fill="var(--text-muted)" text-anchor="end">120</text>
    <text x="30" y="135" font-size="11" fill="var(--text-muted)" text-anchor="end">80</text>
    <text x="30" y="185" font-size="11" fill="var(--text-muted)" text-anchor="end">40</text>

    <!-- Fill Area -->
    <polygon points="50,150 140,120 230,135 320,80 410,95 500,45 590,60 680,35 680,210 50,210" fill="url(#gradInspections)"/>

    <!-- Line Path -->
    <polyline points="50,150 140,120 230,135 320,80 410,95 500,45 590,60 680,35" fill="none" stroke="#0284c7" stroke-width="3" stroke-linecap="round"/>

    <!-- Data points -->
    <circle cx="50" cy="150" r="4" fill="#0284c7"/>
    <circle cx="140" cy="120" r="4" fill="#0284c7"/>
    <circle cx="230" cy="135" r="4" fill="#0284c7"/>
    <circle cx="320" cy="80" r="4" fill="#0284c7"/>
    <circle cx="410" cy="95" r="4" fill="#0284c7"/>
    <circle cx="500" cy="45" r="4" fill="#0284c7"/>
    <circle cx="590" cy="60" r="4" fill="#0284c7"/>
    <circle cx="680" cy="35" r="5" fill="#f59e0b"/>

    <!-- X-Axis Labels -->
    <text x="50" y="230" font-size="11" fill="var(--text-muted)" text-anchor="middle">Mar</text>
    <text x="140" y="230" font-size="11" fill="var(--text-muted)" text-anchor="middle">Apr</text>
    <text x="230" y="230" font-size="11" fill="var(--text-muted)" text-anchor="middle">May</text>
    <text x="320" y="230" font-size="11" fill="var(--text-muted)" text-anchor="middle">Jun</text>
    <text x="410" y="230" font-size="11" fill="var(--text-muted)" text-anchor="middle">Jul</text>
    <text x="500" y="230" font-size="11" fill="var(--text-muted)" text-anchor="middle">Aug</text>
    <text x="590" y="230" font-size="11" fill="var(--text-muted)" text-anchor="middle">Sep</text>
    <text x="680" y="230" font-size="11" fill="var(--text-muted)" text-anchor="middle">Oct (Peak)</text>
  `;
}
