/* ==========================================================================
   TITANSHIELD - APPLICATION DATA STORE
   Services, Blog, Gallery, Pricing, and Inspection Records Data
   ========================================================================== */

const SITE_DATA = {
  // 8 Specific Services
  services: [
    {
      id: "basement-waterproofing",
      title: "Basement Waterproofing",
      shortDesc: "Complete sub-floor drainage, moisture barriers, and continuous hydrostatic pressure relief for perpetually dry basements.",
      image: "assets/images/service-basement-waterproofing.jpg",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
      problems: [
        "Water seeping through foundation floor-wall cove joints during heavy rainfall",
        "Damp concrete slabs damaging flooring, carpeting, and baseboards",
        "Musty organic odors signaling hidden mold spore growth",
        "Hydrostatic pressure cracking basement floors and pushing moisture upward"
      ],
      process: [
        "Floor perimeter trench excavation along footing",
        "Installation of perforated high-flow drain tile enveloped in washed drainage aggregate",
        "Application of heavy-duty semi-rigid vapor shield wall liners",
        "Cast-iron dual sump system discharge and flush-mount concrete repouring"
      ],
      benefits: [
        "Transforms damp, uninhabitable basements into clean, dry living spaces",
        "Relieves destructive hydrostatic pressure against foundation walls",
        "Full 25-Year Transferable Dry Basement Warranty",
        "Increases home resale value and eliminates moisture mold risks"
      ],
      priceEst: "$2,800 - $7,500 depending on linear perimeter footage",
      faqs: [
        { q: "How long does a full basement waterproofing installation take?", a: "Most residential basements are completed within 2 to 3 days with minimal disruption to your daily routine." },
        { q: "Is the warranty transferable if I sell my home?", a: "Yes, our 25-Year Dry Basement Warranty automatically transfers to future homeowners at zero fee." }
      ]
    },
    {
      id: "foundation-crack-repair",
      title: "Foundation Crack Repair",
      shortDesc: "High-pressure poly-injection and aerospace-grade carbon fiber stitching to permanently seal and bond cracked foundation walls.",
      image: "assets/images/service-foundation-crack-repair.jpg",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93"/></svg>`,
      problems: [
        "Vertical and diagonal shrinkage cracks leaking groundwater into the basement",
        "Horizontal cracks caused by lateral soil pressure pushing foundation walls inward",
        "Stair-step cracks along cinder block mortar joints indicating foundation settlement",
        "Expanding fracture lines that widen after freezing winter cycles"
      ],
      process: [
        "Precision surface prep and installation of calibrated dual-port injection tees",
        "Application of high-strength structural surface paste along fracture seam",
        "High-pressure hydraulic injection of hydrophobic expanding polyurethane or epoxy resin",
        "Thermal installation of structural carbon-fiber grid straps across the fissure"
      ],
      benefits: [
        "Restores structural monolithic strength stronger than original concrete",
        "Zero-excavation repair completed directly from the basement interior",
        "Completely stops pressurized water infiltration through wall fractures",
        "Lifetime Structural Bond Guarantee against reopening"
      ],
      priceEst: "$750 - $2,200 per fracture or wall zone",
      faqs: [
        { q: "What is the difference between epoxy and polyurethane injection?", a: "Epoxy provides rigid structural rebonding for structural cracks, while expanding polyurethane flexes with thermal movement and actively stops pressurized water." },
        { q: "Can carbon fiber straps be painted over?", a: "Yes! Once cured, the low-profile carbon-fiber straps sit flush with the wall and can be primed and painted." }
      ]
    },
    {
      id: "foundation-stabilization",
      title: "Foundation Stabilization",
      shortDesc: "Heavy-duty hydraulic steel push piers and helical anchors to arrest foundation settling and lift sinking homes back to grade.",
      image: "assets/images/service-foundation-stabilization.jpg",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
      problems: [
        "Doors and windows sticking or refusing to latch properly throughout the house",
        "Cracks in exterior brickwork, drywall, and chimney separation",
        "Uneven or sloping floors upstairs and sagging center beams",
        "Differential settlement caused by shifting, uncompacted, or drought-contracted soil"
      ],
      process: [
        "Excavation of access points down to load-bearing foundation footings",
        "Heavy-duty galvanized steel foundation brackets mounted to footing perimeter",
        "Hydraulic driving of steel pier sections deep into solid bedrock or load-bearing strata",
        "Calibrated hydraulic lift to level the structure, followed by load transfer and backfill"
      ],
      benefits: [
        "Permanently arrests house settlement and prevents catastrophic collapse",
        "Can lift settled foundation walls back toward their original level position",
        "Engineered stamped calculations compliant with local building safety codes",
        "Transferable Lifetime Structural Foundation Warranty"
      ],
      priceEst: "$1,800 - $3,200 per pier bracket installed",
      faqs: [
        { q: "How deep do foundation push piers go?", a: "Piers are hydraulically driven until they reach refusal in bedrock or load-bearing soil, typically between 15 and 45 feet deep." },
        { q: "Will installing piers damage my home's interior?", a: "Piers gently stabilize and can close existing drywall cracks. Our engineers monitor laser levels to avoid stress." }
      ]
    },
    {
      id: "basement-leak-repair",
      title: "Basement Leak Repair",
      shortDesc: "Rapid-response localized leak detection, cove joint sealing, and pressure-relief conduits to stop active basement water leaks.",
      image: "assets/images/service-basement-leak-repair.jpg",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h8"/></svg>`,
      problems: [
        "Active water trickling through concrete seams and tie-rod holes during storms",
        "Water bubbling up through basement floor joints under pressure",
        "Window well flooding leaking water through basement windows",
        "Pipe penetration leaks around sewer, gas, or electrical service entries"
      ],
      process: [
        "Acoustic and thermal leak source identification",
        "Mechanical chiseling and routing of leaking seam into dovetail channel",
        "High-density hydrophilic polyurethane resin seal injection under active flow",
        "Window well drain connection and gravel bed renewal"
      ],
      benefits: [
        "Immediately stops active water entry, even during active storms",
        "Seals vulnerable tie-rod holes and plumbing pipe wall penetrations",
        "Protects mechanical equipment, boilers, and water heaters from rust",
        "Fast 1-day turnaround with certified leak stop guarantee"
      ],
      priceEst: "$850 - $2,500 depending on leak sources",
      faqs: [
        { q: "Can you stop a leak while water is actively pouring in?", a: "Yes. Our hydrophobic injection resins react with water within 60 seconds, creating an impervious waterproof rubber seal." }
      ]
    },
    {
      id: "sump-pump-installation",
      title: "Sump Pump Installation",
      shortDesc: "Commercial-grade cast-iron dual pump systems with marine battery backup and smart IoT Wi-Fi water-level monitoring.",
      image: "assets/images/service-sump-pump-installation.jpg",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
      problems: [
        "Single pump failure causing catastrophic basement flooding during power outages",
        "Loud, rattling old plastic sump pumps running continuously",
        "Clogged discharge lines freezing in winter and burning out pump motors",
        "Open, unsealed sump pits emitting toxic radon gas and foul odors"
      ],
      process: [
        "Installation of heavy-duty 24-gallon polyethylene sealed sump basin",
        "Dual 1/2 HP commercial cast-iron primary and auxiliary pumps installed with dual check valves",
        "Deep-cycle AGM marine battery backup power inverter wiring",
        "Airtight transparent safety lid with water alarm sensor and freeze-proof discharge line"
      ],
      benefits: [
        "Pumps up to 4,200 gallons per hour even during total blackout power failures",
        "Smart Wi-Fi smartphone alerts before water ever reaches critical levels",
        "Radon-tight gasketed basin lid keeps basement air clean and odor-free",
        "5-Year Full Replacement Equipment & Labor Warranty"
      ],
      priceEst: "$1,600 - $3,400 complete system",
      faqs: [
        { q: "How long does the battery backup run without power?", a: "Our heavy-duty backup batteries provide up to 48 hours of continuous intermittent pumping (over 10,000 gallons pumped)." }
      ]
    },
    {
      id: "drainage-system-installation",
      title: "Drainage System Installation",
      shortDesc: "Engineered exterior curtain drains, downspout conductor burial, and surface swales to direct roof water far away from foundation walls.",
      image: "assets/images/service-drainage-systems.jpg",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 15h18M3 9h18M6 21V3M18 21V3"/></svg>`,
      problems: [
        "Roof downspouts pouring thousands of gallons of water directly next to the foundation",
        "Yard slopes tilting toward the home creating pooling water against basement walls",
        "Soggy lawn areas that never dry out after rainfall",
        "Erosion of foundation backfill soil leading to structural instability"
      ],
      process: [
        "Topographical elevation laser survey of site water flow",
        "Trench excavation with minimum 1% grade away from house structure",
        "Installation of rigid smooth-wall PVC conductor lines and catch basins",
        "Pop-up emitter installation in safe yard runoff zone with river rock bed"
      ],
      benefits: [
        "Eliminates 80% of foundation hydrostatic water before it reaches basement walls",
        "Stops lawn pooling and foundation soil erosion permanently",
        "No unsightly exposed corrugated downspout hoses across walkways",
        "15-Year Clog-Free Underground Performance Warranty"
      ],
      priceEst: "$1,900 - $4,800 depending on yard run",
      faqs: [
        { q: "Why use smooth-wall PVC instead of corrugated black pipe?", a: "Smooth-wall PVC resists crushing, cannot be penetrated by roots, and flushes debris without clogging." }
      ]
    },
    {
      id: "crawl-space-encapsulation",
      title: "Crawl Space Encapsulation",
      shortDesc: "Complete 20-mil antimicrobial vapor barrier encapsulation, structural joist drying, and dedicated commercial dehumidification.",
      image: "assets/images/service-crawl-space.jpg",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
      problems: [
        "Rotting floor joists and sagging subfloors above unsealed dirt crawl spaces",
        "High humidity causing wood rot, pest infestation, and mold under the living room",
        "Cold winter floors and rising energy bills due to uninsulated vented crawl spaces",
        "Radon gas and earthy dirt odors infiltrating into upper living spaces (Stack Effect)"
      ],
      process: [
        "Debris removal and precision soil grading with antimicrobial ground wash",
        "Installation of high-puncture 20-mil reinforced antimicrobial vapor barrier",
        "Continuous airtight wall and support pillar taping with specialized sealing sealant",
        "Installation of dedicated Energy-Star commercial crawl space dehumidifier"
      ],
      benefits: [
        "Lowers home heating and cooling utility bills by up to 18%",
        "Prevents structural floor joist rot and eliminates insect habitats",
        "Drastically improves indoor air quality throughout the entire house",
        "25-Year Vapor Barrier Tear & Moisture Shield Warranty"
      ],
      priceEst: "$4,500 - $9,500 depending on crawl space square footage",
      faqs: [
        { q: "Why should crawl space vents be sealed?", a: "Vents allow humid summer air to enter, which condenses on cold wood joists and causes mold rot. Sealing creates a controlled, conditioned space." }
      ]
    },
    {
      id: "moisture-mold-prevention",
      title: "Moisture & Mold Prevention",
      shortDesc: "EPA-registered botanical antimicrobial remediation, air filtration scrubbers, and permanent commercial humidity regulation.",
      image: "assets/images/service-mold-prevention.jpg",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      problems: [
        "Visible black, green, or white fuzzy mold colonies on basement wood joists",
        "Allergy symptoms, headaches, and respiratory issues when downstairs",
        "Efflorescence white crystalline mineral buildup blooming across foundation blocks",
        "Persistent relative humidity levels in basement exceeding 65%"
      ],
      process: [
        "Laser particulate air quality testing and moisture mapping",
        "HEPA negative air containment isolation of basement workspace",
        "Application of EPA-registered hospital-grade antimicrobial fogging",
        "Permanent installation of automated digital relative humidity control system"
      ],
      benefits: [
        "Kills 99.9% of active mold spores, fungi, and musty odor bacteria",
        "Maintains basement relative humidity safely below 50% year-round",
        "Restores healthy, safe breathing air for kids and pets",
        "10-Year Clean Air & Mold-Free Surface Warranty"
      ],
      priceEst: "$1,200 - $3,800 depending on basement size",
      faqs: [
        { q: "Is your mold treatment safe for pets and children?", a: "Yes, our botanical EPA-registered solutions leave zero toxic fumes and are completely safe once dry." }
      ]
    }
  ],

  // Blog Posts
  blogPosts: [
    {
      id: "foundation-crack-guide-2026",
      title: "The 2026 Homeowner's Diagnostic Guide: Horizontal vs Vertical Foundation Cracks",
      category: "Foundation Structural",
      date: "October 02, 2026",
      author: "David Vance, PE Structural Engineer",
      readTime: "7 min read",
      image: "assets/images/blog-foundation-cracks.jpg",
      excerpt: "Not all foundation cracks are created equal. Discover which cracks indicate harmless concrete shrinkage and which signal dangerous structural shear from soil pressure.",
      content: `
        <p>Discovering a crack in your foundation wall is one of the most unsettling moments for any homeowner. However, understanding the physics behind concrete fracture patterns is the key to protecting both your home's structural integrity and your financial equity.</p>
        
        <h2>Vertical vs. Horizontal Cracks: The Critical Difference</h2>
        <p>Foundation cracks generally fall into two primary mechanical categories based on how soil, water, and structural loads interact with your basement walls:</p>
        
        <div class="article-callout">
          <strong>Key Engineering Fact:</strong> Horizontal cracks indicate lateral hydrostatic soil pressure pushing inward against the middle third of the wall. Vertical cracks are frequently caused by concrete shrinkage during initial curing or mild thermal shifts.
        </div>

        <h3>1. Vertical Foundation Cracks</h3>
        <p>Vertical cracks typically run straight up and down or slightly diagonal across the wall. In 80% of residential inspections, these result from shrinkage: as new concrete cures, water evaporates and the material slightly contracts. While vertical cracks rarely compromise structural stability initially, they frequently become major channels for high-pressure groundwater intrusion.</p>

        <h3>2. Horizontal Foundation Cracks (Immediate Concern)</h3>
        <p>If you see a continuous horizontal fracture running along the middle of your concrete wall or cinder block mortar joint, your foundation is experiencing lateral bowing. Expansive clay soils surrounding your home swell when wet, creating thousands of pounds of hydrostatic pressure. If unreinforced, the wall will bow inward and can ultimately collapse.</p>

        <h2>When Should You Call a Professional Structural Engineer?</h2>
        <p>Look for these warning symptoms immediately:</p>
        <ul>
          <li>Any crack wider than 1/4 inch (6 millimeters)</li>
          <li>A horizontal crack accompanied by wall deflection or bowing</li>
          <li>Cracks that allow pressurized water to pour onto the basement floor during rainfall</li>
          <li>Stair-step cracks across block masonry that continue into the brick facade outside</li>
        </ul>

        <h2>Modern Engineering Solutions</h2>
        <p>Historically, repairing bowing walls required massive yard excavation and concrete demolition. Today, aerospace carbon-fiber straps and adjustable steel I-beams provide permanent stabilization from the inside in a single day, backed by lifetime transferable warranties.</p>
      `
    },
    {
      id: "interior-vs-exterior-french-drains",
      title: "Interior vs Exterior French Drains: Which System Truly Protects Your Basement?",
      category: "Waterproofing Guides",
      date: "September 24, 2026",
      author: "Mark Evans, Master Waterproofing Tech",
      readTime: "6 min read",
      image: "assets/images/service-basement-leak-repair.jpg",
      excerpt: "Compare costs, excavation requirements, and long-term reliability between interior sub-floor drainage tiles and exterior perimeter French drain trenches.",
      content: `
        <p>When high groundwater threatens to flood your basement, choosing between an interior sub-floor drainage system and an exterior perimeter excavation is one of the biggest decisions you will make.</p>

        <h2>How Interior French Drains Work</h2>
        <p>An interior drainage system is installed along the perimeter inside your basement footing. We carefully jackhammer a 12-inch wide trench in the floor slab, insert perforated pipe pitched to a sump pit, cover it with washed drainage rock, and recement the floor flush. Any water rising under the slab or trickling down walls enters the pipe before touching your floor.</p>

        <h2>Why Interior Systems Outperform Exterior Trenches Over Time</h2>
        <ul>
          <li><strong>Zero Yard Destruction:</strong> No excavating through decks, patios, flower beds, or concrete driveways.</li>
          <li><strong>Easy Maintenance:</strong> Interior pipes are protected from outdoor root intrusion, shifting clay, and soil silt clogging.</li>
          <li><strong>All-Weather Installation:</strong> Can be installed in freezing winter or rainy conditions without weather delays.</li>
          <li><strong>Cost Efficiency:</strong> Interior systems generally cost 40% less than full exterior foundation excavations.</li>
        </ul>
      `
    },
    {
      id: "preventing-basement-sump-pump-failure",
      title: "Why Sump Pumps Fail During Severe Storms (And How Dual Smart Backups Prevent Disaster)",
      category: "Drainage & Pumps",
      date: "September 15, 2026",
      author: "Sarah Lindqvist, Diagnostics Lead",
      readTime: "5 min read",
      image: "assets/images/service-sump-pump-installation.jpg",
      excerpt: "Mechanical switches jam, power cuts out during thunder storms, and discharge pipes freeze. Here is how modern dual-pump systems ensure your basement never floods.",
      content: `
        <p>A single sump pump is the single point of failure in millions of homes. When a hurricane or severe thunderstorm strikes, electrical power grid failures occur precisely when groundwater flow peaks. Here is how homeowners ensure complete redundancy.</p>
        
        <h2>The Top Three Reasons Sump Pumps Fail</h2>
        <ol>
          <li><strong>Power Outages:</strong> Without electricity, a standard pump does nothing as storm water rushes in.</li>
          <li><strong>Mechanical Float Switch Jamming:</strong> Cheap mechanical floats get caught on the pit wall or weigh down with mineral gunk.</li>
          <li><strong>Overwhelmed Pumping Capacity:</strong> Flash floods dumping 2 inches of rain per hour often exceed a single 1/3 HP pump's output.</li>
        </ol>

        <h2>The Anatomy of a Bulletproof Dual System</h2>
        <p>Professional installations feature a primary 1/2 HP cast-iron pump paired with an auxiliary DC pump powered by a heavy-duty AGM battery bank. If the primary fails or the power drops, the backup activates automatically and alerts your phone via Wi-Fi.</p>
      `
    },
    {
      id: "crawl-space-encapsulation-benefits",
      title: "The Stack Effect: How a Wet Crawl Space Destroys Upper Living Air Quality",
      category: "Home Maintenance",
      date: "August 30, 2026",
      author: "David Vance, PE Structural Engineer",
      readTime: "8 min read",
      image: "assets/images/service-crawl-space.jpg",
      excerpt: "Up to 50% of the air you breathe on your home's main floor originates from the crawl space. Discover how 20-mil sealed encapsulation protects health and lower bills.",
      content: `
        <p>Warm air in your home rises and escapes through your attic, creating negative pressure that pulls up to 50% of your indoor breathing air straight from your crawl space or basement. If that space has damp soil and mold, that is what your family is inhaling every day.</p>
      `
    },
    {
      id: "hydrostatic-pressure-poured-concrete",
      title: "Hydrostatic Pressure Explained: Why Water Penetrates Solid Poured Concrete",
      category: "Waterproofing Guides",
      date: "August 18, 2026",
      author: "Elena Rostova, PhD Soil Mechanics",
      readTime: "6 min read",
      image: "assets/images/service-basement-waterproofing.jpg",
      excerpt: "Concrete may feel like solid rock, but on a microscopic level it is an open sponge. Understand how subterranean water pressure pushes through solid walls.",
      content: `
        <p>A common misconception among homeowners is that solid poured concrete walls should be impervious to water. Yet during heavy rainstorms, moisture, damp patches, and active trickles frequently appear straight through 8-inch thick walls.</p>
        <h2>Microscopic Capillary Pores in Cured Concrete</h2>
        <p>During the initial curing of concrete, excess water evaporates, leaving behind billions of microscopic interconnected capillary tubes. When saturated clay soil outside creates thousands of pounds of hydrostatic pressure per square foot, water is forced through these microscopic capillaries through capillary action and hydrostatic thrust.</p>
        <h2>Permanent Solution: Hydrostatic Relief</h2>
        <p>You cannot simply paint a waterproof coating on the inside to hold back hundreds of pounds of water pressure. The only engineering solution is relieving the pressure through sub-floor perimeter French drains that collect the water at the footing and discharge it away from the foundation before pressure builds.</p>
      `
    },
    {
      id: "carbon-fiber-vs-steel-beams",
      title: "Carbon Fiber Straps vs Steel I-Beams: Which Foundation Reinforcement Is Best?",
      category: "Foundation Structural",
      date: "August 04, 2026",
      author: "David Vance, PE Structural Engineer",
      readTime: "7 min read",
      image: "assets/images/service-foundation-crack-repair.jpg",
      excerpt: "Explore the engineering pros and cons of aerospace carbon fiber Kevlar grids versus heavy structural steel columns for bowing basement walls.",
      content: `
        <p>When soil pressure pushes a concrete masonry wall inward, homeowners are typically presented with two structural options: aerospace carbon-fiber straps or steel I-beam soldier columns. Both stop wall deflection, but each has distinct engineering advantages.</p>
        <h2>When Carbon Fiber is Optimal</h2>
        <p>Carbon fiber has 10x the tensile strength of steel and bonds directly to the concrete with high-strength structural epoxy. Because it is virtually paper-thin (less than 1/8 inch), it does not reduce basement square footage and can be primed and painted flush with the wall. It is ideal for walls with less than 2 inches of bowing deflection.</p>
        <h2>When Steel I-Beams are Required</h2>
        <p>For severe lateral wall movement exceeding 2 inches, heavy-duty structural steel I-beams anchored into the concrete slab and upper floor joists provide mechanical bracing and can incorporate screw jacks to slowly push the wall back toward vertical alignment over time.</p>
      `
    },
    {
      id: "sump-pump-testing-homeowner-guide",
      title: "How to Test Your Sump Pump in 5 Minutes (Step-by-Step Homeowner Guide)",
      category: "Drainage & Pumps",
      date: "July 22, 2026",
      author: "Marcus Thorne, Master Tech",
      readTime: "5 min read",
      image: "assets/images/service-drainage-systems.jpg",
      excerpt: "Do not wait for a hurricane to discover your sump pump is dead. Follow our quick 5-step test protocol to guarantee flood readiness.",
      content: `
        <p>Your sump pump sits silently in a dark pit until torrential rains strike. Testing it quarterly takes less than five minutes and saves tens of thousands in flood damage.</p>
        <h2>Step 1: Check the Power & GFCI Outlet</h2>
        <p>Ensure the cord is securely plugged into an active GFCI outlet with the indicator light green. Check that cords are not submerged or corroded.</p>
        <h2>Step 2: The Bucket Pour Test</h2>
        <p>Slowly pour a 5-gallon bucket of clean water into the sump basin. Watch the float switch rise. The pump should engage smoothly around the halfway mark, empty the basin within 10 to 15 seconds, and shut off cleanly.</p>
        <h2>Step 3: Verify the Exterior Discharge Line</h2>
        <p>Walk outside to your downspout discharge exit. Confirm that water is freely exiting and not pooling against the foundation or blocked by leaves, rodent nests, or winter ice.</p>
      `
    },
    {
      id: "efflorescence-vs-toxic-mold",
      title: "Efflorescence vs Mold: How to Identify White Powdery Deposits in Basements",
      category: "Home Maintenance",
      date: "July 11, 2026",
      author: "Sarah Lindqvist, Diagnostics Lead",
      readTime: "5 min read",
      image: "assets/images/service-mold-prevention.jpg",
      excerpt: "Is that white fuzzy residue on your basement walls dangerous mold or mineral salt efflorescence? Here is how to test it instantly with water.",
      content: `
        <p>Many homeowners panic when they see white, chalky growth spreading across unfinished basement concrete walls, fearing toxic black mold. In over 70% of inspections, this substance is efflorescence—a harmless mineral salt, but a critical warning sign of moisture intrusion.</p>
        <h2>The 10-Second Water Dissolve Test</h2>
        <p>Efflorescence is inorganic mineral salt (calcium and magnesium) leached out of concrete by migrating water. If you drop a small sample into a glass of water, efflorescence dissolves immediately. Mold is organic fungus and will float on top of the water without dissolving.</p>
        <h2>What Efflorescence Tells You About Your Walls</h2>
        <p>While the white powder itself is non-toxic, its presence proves that moisture is actively evaporating through your walls. Over years, this mineral leaching weakens concrete cohesion, a phenomenon called spalling. Sealing walls with internal drainage stops the moisture cycle permanently.</p>
      `
    }
  ],

  // Before & After Gallery Projects
  galleryProjects: [
    {
      id: "project-1",
      title: "Severe Foundation Wall Bowing & Horizontal Crack Restoration",
      category: "Foundation Repair",
      categoryKey: "foundation",
      beforeImg: "assets/images/gallery-water-damage-before.jpg",
      afterImg: "assets/images/service-foundation-crack-repair.jpg",
      location: "Oakridge Manor, Suburban Estate",
      duration: "2 Days",
      solution: "Installed 6 aerospace-grade carbon fiber structural reinforcement straps and hydraulic epoxy injection ports.",
      warranty: "Lifetime Structural Warranty",
      scope: "Foundation had a 1.5-inch inward deflection caused by hydrostatic clay pressure. Completely arrested and stabilized."
    },
    {
      id: "project-2",
      title: "Flooded Basement Cove Joint Water Seepage to Pristine Living Space",
      category: "Waterproofing",
      categoryKey: "waterproofing",
      beforeImg: "assets/images/gallery-water-damage-before.jpg",
      afterImg: "assets/images/home2-basement-waterproofing.jpg",
      location: "Highland Park Residential Home",
      duration: "3 Days",
      solution: "Full perimeter interior French drain tile, dual cast-iron sump pump system, and thermal vapor barrier wall panels.",
      warranty: "25-Year Transferable Dry Basement Warranty",
      scope: "Basement previously took in 3 inches of water each spring. Now fully dry and converted into a family theater room."
    },
    {
      id: "project-3",
      title: "Settling Corner Foundation Sinking & Hydraulic Push Pier Lift",
      category: "Foundation Repair",
      categoryKey: "foundation",
      beforeImg: "assets/images/service-foundation-stabilization.jpg",
      afterImg: "assets/images/home1-foundation-protection.jpg",
      location: "Riverdale Terrace Single Family Home",
      duration: "4 Days",
      solution: "8 heavy-duty galvanized steel push piers hydraulically driven 34 feet down to load-bearing bedrock.",
      warranty: "Lifetime Foundation Level Warranty",
      scope: "Recovered 1.25 inches of structural settlement, closing exterior brick cracks and leveling stuck doorways."
    },
    {
      id: "project-4",
      title: "Damp Unsealed Dirt Crawl Space to 20-Mil Clean Capsule",
      category: "Crawl Space",
      categoryKey: "crawlspace",
      beforeImg: "assets/images/gallery-water-damage-before.jpg",
      afterImg: "assets/images/service-crawl-space.jpg",
      location: "Summit Ridge Colonial Home",
      duration: "2 Days",
      solution: "Complete ground grading, 20-mil antimicrobial puncture-proof vapor barrier, sealed vents, commercial dehumidifier.",
      warranty: "25-Year Moisture Shield Warranty",
      scope: "Reduced relative crawlspace humidity from 88% down to 42%, eliminating wood decay fungi and musty smells."
    },
    {
      id: "project-5",
      title: "Commercial-Grade Dual Sump Station with Wi-Fi High-Water Alarm",
      category: "Drainage & Sump",
      categoryKey: "drainage",
      beforeImg: "assets/images/service-basement-leak-repair.jpg",
      afterImg: "assets/images/service-sump-pump-installation.jpg",
      location: "Fox Run Creek Home",
      duration: "1 Day",
      solution: "Installed 24-gallon airtight basin, primary 1/2 HP pump, secondary DC battery pump, check valves, and outdoor freeze relief.",
      warranty: "5-Year Equipment & Labor Replacement",
      scope: "Replaced an overflowing 15-year-old plastic pump that burned out during a tropical storm."
    },
    {
      id: "project-6",
      title: "Exterior Yard Drainage Curtain & Downspout Underground Redirection",
      category: "Drainage & Sump",
      categoryKey: "drainage",
      beforeImg: "assets/images/home1-foundation-protection.jpg",
      afterImg: "assets/images/service-drainage-systems.jpg",
      location: "Meadowbrook Valley Home",
      duration: "2 Days",
      solution: "140 linear feet of smooth-wall PVC conductor lines connecting all roof gutters to a decorative river rock discharge bed.",
      warranty: "15-Year Clog-Free Guarantee",
      scope: "Diverted over 15,000 gallons of rainfall runoff 45 feet away from house foundation footings."
    }
  ],

  // Admin Dashboard Sample Data
  dashboardData: {
    stats: {
      totalInspections: 148,
      activeRepairs: 19,
      monthlyRevenue: "$284,500",
      customerRating: "4.96 / 5.0"
    },
    inspections: [
      { id: "INS-2026-104", client: "Robert Sterling", phone: "(555) 234-8901", service: "Basement Waterproofing", date: "2026-10-16", status: "Scheduled", urgency: "High" },
      { id: "INS-2026-103", client: "Eleanor Hughes", phone: "(555) 781-4492", service: "Foundation Crack Repair", date: "2026-10-15", status: "Pending", urgency: "Urgent" },
      { id: "INS-2026-102", client: "Marcus Campbell", phone: "(555) 492-3310", service: "Sump Pump Installation", date: "2026-10-14", status: "Completed", urgency: "Medium" },
      { id: "INS-2026-101", client: "Patricia Wright", phone: "(555) 912-7721", service: "Foundation Stabilization", date: "2026-10-17", status: "Scheduled", urgency: "High" },
      { id: "INS-2026-100", client: "Gregory Davis", phone: "(555) 604-1294", service: "Crawl Space Encapsulation", date: "2026-10-18", status: "Pending", urgency: "Low" },
      { id: "INS-2026-099", client: "Samantha Brooks", phone: "(555) 883-9011", service: "Basement Leak Repair", date: "2026-10-12", status: "Completed", urgency: "Urgent" }
    ],
    messages: [
      { sender: "Jonathan Reed", email: "j.reed@example.com", date: "2 hours ago", subject: "Quote question regarding 25ft bowing wall", preview: "Hi TitanShield team, I had your engineer inspect my foundation on Tuesday..." },
      { sender: "Claire Morris", email: "claire.m@example.com", date: "5 hours ago", subject: "Sump pump battery backup check", preview: "Just following up on our annual maintenance schedule for the dual battery system..." },
      { sender: "Frank Miller", email: "fmiller@example.com", date: "1 day ago", subject: "Transfer of warranty for home sale", preview: "We are closing on our house next week and need the warranty transfer documents..." }
    ]
  }
};
