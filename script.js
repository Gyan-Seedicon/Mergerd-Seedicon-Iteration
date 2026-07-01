/* =========================================================================
   SEEDICON WORKSPACE INTERACTIVE BEHAVIORS
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
  initFabSwitcher();
  initMobileMenus();
  initSearchFeedback();
  initStickyBanner();
  initProductAccordion();
  initSlideshows();
  initCardsDeck();
  initMegaMenuTabs();
  initWhoItForInteractive();
  initNavbarScrollHide();
  initHowItWorksScroll();
});

/**
 * 1. FAB SWITCHER BEHAVIOR
 * Manages the floating action button and dropup switcher display.
 */
function initFabSwitcher() {
  const fabBtn = document.getElementById('fabBtn');
  const fabDropup = document.getElementById('fabDropup');
  
  if (fabBtn && fabDropup) {
    const defaultIcon = fabBtn.querySelector('.fab-icon-default');
    const closeIcon = fabBtn.querySelector('.fab-icon-close');

    fabBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      fabDropup.classList.toggle('open');
      defaultIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });

    // Close menu when clicking anywhere else
    document.addEventListener('click', (e) => {
      if (fabDropup.classList.contains('open') && !fabBtn.contains(e.target) && !fabDropup.contains(e.target)) {
        fabDropup.classList.remove('open');
        defaultIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    });
  }
}

/**
 * 2. MOBILE INTERACTIVE MENUS
 * Manages responsive slide-out menus per layout structure.
 */
function initMobileMenus() {
  const wrappers = document.querySelectorAll('.iteration-wrapper');

  wrappers.forEach(wrap => {
    const toggleBtn = wrap.querySelector('.mobile-toggle-btn');
    const navDrawer = wrap.querySelector('.mobile-nav-drawer');

    if (toggleBtn && navDrawer) {
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navDrawer.classList.toggle('open');
      });

      // Close if clicking outside the drawer
      document.addEventListener('click', (e) => {
        if (navDrawer.classList.contains('open') && !navDrawer.contains(e.target) && !toggleBtn.contains(e.target)) {
          navDrawer.classList.remove('open');
        }
      });
    }
  });
}

/**
 * 3. INTERACTIVE SEARCH BAR
 * Provides custom active state behaviors and search feedback prompts.
 */
function initSearchFeedback() {
  const searchInputs = document.querySelectorAll('.search-input');
  
  searchInputs.forEach(input => {
    const wrapper = input.closest('.search-bar-wrapper');
    const searchBtn = wrapper ? wrapper.querySelector('.search-btn-right, .dark-btn') : null;

    // Trigger mock feedback on enter or button click
    const executeSearch = () => {
      const query = input.value.trim();
      if (query !== "") {
        // Create premium notification alert
        showFeedbackToast(`Searching Seedicon Database for: "${query}"...`);
      } else {
        input.focus();
      }
    };

    if (searchBtn) {
      searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        executeSearch();
      });
    }

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        executeSearch();
      }
    });
  });
}

/**
 * Helper: Floating feedback toast for interactive elements
 */
function showFeedbackToast(message) {
  // Remove existing toast if it is visible
  const existingToast = document.querySelector('.feedback-toast');
  if (existingToast) {
    existingToast.remove();
  }

  // Create toast elements
  const toast = document.createElement('div');
  toast.className = 'feedback-toast';
  toast.innerHTML = `
    <div class="toast-content">
      <svg class="toast-spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10" stroke-dasharray="16"></path>
      </svg>
      <span>${message}</span>
    </div>
  `;

  // Dynamic inline styling for the toast notification
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '24px',
    left: '50%',
    transform: 'translateX(-50%) translateY(20px)',
    backgroundColor: '#0f172a',
    color: '#ffffff',
    padding: '12px 24px',
    borderRadius: '30px',
    fontSize: '14px',
    fontWeight: '600',
    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)',
    zIndex: '10001',
    opacity: '0',
    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
  });

  // Inject into document body
  document.body.appendChild(toast);

  // Apply spinner animation styling
  const styleSheet = document.createElement("style");
  styleSheet.innerText = `
    .feedback-toast {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .toast-content {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .toast-spinner {
      animation: toast-spin 0.8s linear infinite;
    }
    @keyframes toast-spin {
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(styleSheet);

  // Animate toast entry
  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(0)';
    toast.style.opacity = '1';
  }, 50);

  // Animate toast exit after 3 seconds
  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(20px)';
    toast.style.opacity = '0';
    setTimeout(() => {
      toast.remove();
      styleSheet.remove();
    }, 300);
  }, 3000);
}

/**
 * 5. STICKY BANNER BEHAVIOR
 * Closes the top announcement banner when clicked.
 */
function initStickyBanner() {
  const closeBtn = document.getElementById('closeTopBannerBtn');
  const banner = document.getElementById('topBanner');
  if (closeBtn && banner) {
    closeBtn.addEventListener('click', () => {
      banner.style.display = 'none';
    });
  }
}

/**
 * 6. PRODUCT ACCORDION BEHAVIOR
 * Handles panels sizing transition and active meta update on click.
 */
function initProductAccordion() {
  const panels = document.querySelectorAll('.accordion-panel');
  const titleEl = document.getElementById('activeProductTitle');
  const descEl = document.getElementById('activeProductDesc');
  const ctaEl = document.getElementById('activeProductCta');
  const ctaTextEl = document.getElementById('activeProductCtaText');

  if (panels.length > 0 && titleEl && descEl && ctaEl && ctaTextEl) {
    panels.forEach(panel => {
      panel.addEventListener('click', () => {
        // If already active, do nothing
        if (panel.classList.contains('active')) return;

        // Remove active state from others
        panels.forEach(p => p.classList.remove('active'));

        // Add active state to clicked panel
        panel.classList.add('active');

        // Extract metadata values
        const title = panel.getAttribute('data-title');
        const desc = panel.getAttribute('data-desc');
        const cta = panel.getAttribute('data-cta');
        const link = panel.getAttribute('data-link');

        // Soft fade transition on update
        const textElements = [titleEl, descEl, ctaEl];
        textElements.forEach(el => {
          el.style.opacity = '0';
          el.style.transform = 'translateY(4px)';
          el.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        });

        setTimeout(() => {
          titleEl.textContent = title;
          descEl.textContent = desc;
          ctaTextEl.textContent = cta;
          ctaEl.setAttribute('href', link);

          textElements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          });
        }, 200);
      });
    });
  }
}

/**
 * 7. PRODUCT SLIDESHOW CYCLE (3 Seconds)
 * Automatically cycles through product images with a sliding transition.
 */
function initSlideshows() {
  const slideshows = document.querySelectorAll('.panel-image-wrapper.slideshow');
  slideshows.forEach(slideshow => {
    const slides = slideshow.querySelectorAll('.slide');
    if (slides.length <= 1) return;
    let currentIndex = 0;

    setInterval(() => {
      // Find current slide
      const currentSlide = slides[currentIndex];
      currentSlide.classList.remove('active');
      currentSlide.classList.add('exit');

      // Increment
      currentIndex = (currentIndex + 1) % slides.length;

      // Next slide
      const nextSlide = slides[currentIndex];
      nextSlide.classList.remove('exit');
      nextSlide.classList.add('active');

      // Clean up exit class after slide transition completes (800ms)
      setTimeout(() => {
        currentSlide.classList.remove('exit');
      }, 800);
    }, 3000);
  });
}

/**
 * 8. CARDS DECK SLIDER CONTROLLER
 * Manages 3D stacked deck offsets and dynamic pagination dots active highlight.
 */
function initCardsDeck() {
  const deck = document.getElementById('cardsDeck');
  const dots = document.querySelectorAll('#deckPagination .pagination-dot');
  if (!deck || dots.length === 0) return;

  const cards = deck.querySelectorAll('.deck-card');
  const total = cards.length;
  let activeIndex = 0;
  let cycleInterval = null;

  function updateDeckState() {
    cards.forEach((card, i) => {
      // Clean up classes
      card.classList.remove('stack-0', 'stack-1', 'stack-2', 'stack-hidden', 'stack-exit');

      // Calculate relative position relative to active index
      let relative = (i - activeIndex + total) % total;

      if (relative === 0) {
        card.classList.add('stack-0');
      } else if (relative === 1) {
        card.classList.add('stack-1');
      } else if (relative === 2) {
        card.classList.add('stack-2');
      } else if (relative === total - 1) {
        card.classList.add('stack-exit');
      } else {
        card.classList.add('stack-hidden');
      }
    });

    // Update dots
    dots.forEach((dot, idx) => {
      if (idx === activeIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function startAutoCycle() {
    if (cycleInterval) clearInterval(cycleInterval);
    cycleInterval = setInterval(() => {
      activeIndex = (activeIndex + 1) % total;
      updateDeckState();
    }, 5000);
  }

  // Click handler on dots
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'));
      activeIndex = idx;
      updateDeckState();
      startAutoCycle(); // Reset timer on interaction
    });
  });

  // Click handler on the cards themselves to cycle forward
  cards.forEach(card => {
    card.addEventListener('click', () => {
      if (card.classList.contains('stack-0')) {
        activeIndex = (activeIndex + 1) % total;
        updateDeckState();
        startAutoCycle(); // Reset timer on interaction
      }
    });
  });

  // Initialize
  updateDeckState();
  startAutoCycle();
}

/**
 * 9. MEGA DROPDOWN MENU — FULL WIDTH + DYNAMIC POSITIONING
 * Uses JS to position the fixed mega menu exactly below the header,
 * regardless of whether the announcement banner is visible or not.
 */
function initMegaMenuTabs() {
  const navDropdowns = document.querySelectorAll('.nav-dropdown');
  const header        = document.querySelector('.main-header');

  navDropdowns.forEach(navDropdown => {
    const megaMenu = navDropdown.querySelector('.dropdown-menu.mega-menu');
    if (!megaMenu) return;

    const sidebarItems  = megaMenu.querySelectorAll('.mega-sidebar-item');
    const tabContents   = megaMenu.querySelectorAll('.mega-tab-content');

    // ── Position the fixed menu directly below the header bar ──────────────
    function positionMenu() {
      if (!header) return;
      const rect = header.getBoundingClientRect();
      megaMenu.style.top = rect.bottom + 'px';
    }

    // ── Show / hide on wrapper hover ────────────────────────────────────────
    let hideTimer = null;

    function showMenu() {
      clearTimeout(hideTimer);
      positionMenu();
      megaMenu.classList.add('mega-open');
    }

    function hideMenu() {
      // Small delay so cursor can travel from trigger → menu without flicker
      hideTimer = setTimeout(() => {
        megaMenu.classList.remove('mega-open');
      }, 120);
    }

    // Trigger on the nav-dropdown wrapper
    navDropdown.addEventListener('mouseenter', showMenu);
    navDropdown.addEventListener('mouseleave', hideMenu);

    // Keep open when cursor is inside the menu panel itself
    megaMenu.addEventListener('mouseenter', () => clearTimeout(hideTimer));
    megaMenu.addEventListener('mouseleave', hideMenu);

    // Re-position on scroll
    window.addEventListener('scroll', () => {
      if (megaMenu.classList.contains('mega-open')) positionMenu();
    }, { passive: true });

    // Re-position on resize
    window.addEventListener('resize', () => {
      if (megaMenu.classList.contains('mega-open')) positionMenu();
    }, { passive: true });

    // ── Tab switching on sidebar hover scoped to this menu ──────────────────
    if (sidebarItems.length > 0 && tabContents.length > 0) {
      sidebarItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
          const targetTab = item.getAttribute('data-tab');

          sidebarItems.forEach(sib => sib.classList.remove('active'));
          item.classList.add('active');

          tabContents.forEach(content => {
            if (content.id === targetTab) {
              content.classList.add('active');
            } else {
              content.classList.remove('active');
            }
          });
        });
      });
    }
  });
}

/**
 * 10. INTERACTIVE WHO IT'S FOR CONNECTIONS
 * Activates connection lines and node glows when hovering role cards or nodes.
 */
function initWhoItForInteractive() {
  const cards = document.querySelectorAll('.who-role-card');
  const nodes = document.querySelectorAll('.hub-node');
  const svgPaths = {
    founder: document.getElementById('path-founder'),
    partner: document.getElementById('path-partner'),
    investor: document.getElementById('path-investor'),
    ma: document.getElementById('path-ma')
  };

  if (!cards.length) return;

  function activateRole(role) {
    // Reset cards active state
    cards.forEach(c => {
      if (c.getAttribute('data-role') === role) {
        c.classList.add('active');
      } else {
        c.classList.remove('active');
      }
    });

    // Reset outer nodes active state
    nodes.forEach(n => {
      if (n.getAttribute('data-role') === role) {
        n.classList.add('active');
      } else {
        n.classList.remove('active');
      }
    });

    // Reset SVG paths glow state
    for (const key in svgPaths) {
      if (svgPaths[key]) {
        if (key === role) {
          svgPaths[key].classList.add('glow-active');
        } else {
          svgPaths[key].classList.remove('glow-active');
        }
      }
    }
  }

  // Set default active to founder
  activateRole('founder');

  // Hover triggers on role cards
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const role = card.getAttribute('data-role');
      activateRole(role);
    });
  });

  // Hover triggers on center outer nodes
  nodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
      const role = node.getAttribute('data-role');
      activateRole(role);
    });
  });
}

/**
 * 11. NAVBAR SHOW/HIDE ON SCROLL
 * Hides the sticky navbar when scrolling down, reveals it instantly when scrolling up.
 */
function initNavbarScrollHide() {
  const header = document.querySelector('.main-header');
  if (!header) return;

  let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
  let scrollThreshold = 10; // min scroll change before trigger
  let navbarHeight = 80;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
    
    // Ignore small scrolls
    if (Math.abs(currentScrollY - lastScrollY) < scrollThreshold) {
      return;
    }

    if (currentScrollY > lastScrollY && currentScrollY > navbarHeight) {
      // Scroll Down - Hide Navbar
      header.classList.add('nav-hidden');
    } else {
      // Scroll Up - Show Navbar
      header.classList.remove('nav-hidden');
    }

    lastScrollY = currentScrollY;
  }, { passive: true });
}

/**
 * 12. VERTICAL TIMELINE HOW IT WORKS BEHAVIOR
 * Calculates timeline progress and activates vertical step highlights on scroll.
 */
function initHowItWorksScroll() {
  const section = document.getElementById('howItWorks');
  const steps = document.querySelectorAll('.hiw-step');
  const fillBar = document.getElementById('hiwFill');
  
  if (!section || steps.length === 0) return;

  const stepsCol = document.querySelector('.hiw-steps-col');

  function updateStepsOnScroll() {
    const viewportHeight = window.innerHeight;
    const triggerPoint = viewportHeight * 0.65; // Trigger state change when step reaches 65% height
    
    let activeIndex = -1;

    steps.forEach((step, idx) => {
      const rect = step.getBoundingClientRect();
      // If the top of the step rises past the trigger point, activate it
      if (rect.top < triggerPoint) {
        step.classList.add('active');
        activeIndex = idx;
      } else {
        step.classList.remove('active');
      }
    });

    // Calculate percentage fill of the vertical bar tracker if it exists
    if (fillBar && stepsCol) {
      const colRect = stepsCol.getBoundingClientRect();
      const totalHeight = colRect.height - 200; // Account for padding bounds
      const scrolledHeight = -colRect.top + (viewportHeight * 0.5);
      
      let progress = 0;
      if (scrolledHeight > 0) {
        progress = (scrolledHeight / totalHeight) * 100;
      }
      
      // Clamp progress between 0 and 100
      progress = Math.max(0, Math.min(100, progress));
      fillBar.style.height = `${progress}%`;
    }
  }

  // Bind listener and fire once to set initial layout state
  window.addEventListener('scroll', updateStepsOnScroll, { passive: true });
  updateStepsOnScroll();
}
