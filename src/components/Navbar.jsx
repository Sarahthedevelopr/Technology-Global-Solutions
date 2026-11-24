import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  ChevronDown,
  CircleDollarSign,
  Database,
  FileText,
  Layers3,
  Menu,
  Network,
  Search,
  Server,
  ShieldCheck,
  Workflow,
  X,
} from "lucide-react";

import "./Navbar.css";

const navigation = [
  {
    id: "platforms",
    label: "Platforms",
    eyebrow: "YOUR TRADING ENVIRONMENT",
    title: "Start with the right platform.",
    description:
      "Choose a white-label environment or a server infrastructure scope.",
    featuredLabel: "Compare MT4 and MT5",
    featuredHref: "/resources/mt4-vs-mt5",
    icon: Layers3,

    items: [
      {
        title: "MT5 White Label",
        description: "Branded multi-asset platform infrastructure",
        icon: Layers3,
        href: "/mt5-white-label",
      },
      {
        title: "MT4 White Label",
        description: "Plan an MT4 operating environment",
        icon: Layers3,
        href: "/mt4-white-label",
      },
      {
        title: "MT5 Server",
        description: "Hosting, access and recovery requirements",
        icon: Server,
        href: "/mt5-server",
      },
      {
        title: "MT4 Server",
        description: "Infrastructure for MT4 workloads",
        icon: Server,
        href: "/mt4-server",
      },
    ],
  },

  {
    id: "infrastructure",
    label: "Infrastructure",
    eyebrow: "CONNECT THE TECHNOLOGY LAYERS",
    title: "One connected broker stack.",
    description:
      "Map the data, execution and operational systems around your platform.",
    featuredLabel: "Explore the architecture",
    featuredHref: "/brokerage-technology",
    icon: Network,

    items: [
      {
        title: "MT4 & MT5 Market Data Feeds",
        description: "Feed connectivity, symbol mapping and monitoring",
        icon: BarChart3,
        href: "/pricefeed",
      },
      {
        title: "Liquidity Bridge",
        description: "Execution and routing integration scope",
        icon: Workflow,
        href: "/liquidity-bridge",
      },
      {
        title: "Broker CRM",
        description: "Account, client and back-office workflows",
        icon: Building2,
        href: "/broker-crm",
      },
      {
        title: "Brokerage Technology",
        description: "Architecture, deployment and technical operations",
        icon: Network,
        href: "/brokerage-technology",
      },
    ],
  },

  {
    id: "solutions",
    label: "Solutions",
    eyebrow: "YOUR OPERATING MODEL",
    title: "Technology around your business.",
    description:
      "Start with the workflows and requirements that define your brokerage.",
    featuredLabel: "Find your starting point",
    featuredHref: "/contact",
    icon: Building2,

    items: [
      {
        title: "Forex Brokers",
        description: "Platform, market data and broker operations",
        icon: CircleDollarSign,
        href: "/forex-brokers",
      },
      {
        title: "Prop Firms",
        description: "Connect platform and operational workflows",
        icon: Workflow,
        href: "/prop-firms",
      },
      {
        title: "CFD Brokers",
        description: "Define instruments, pricing and execution scope",
        icon: BarChart3,
        href: "/cfd-brokers",
      },
      {
        title: "Multi-Asset Brokers",
        description: "Plan a connected multi-asset environment",
        icon: Network,
        href: "/multi-asset-brokers",
      },
    ],
  },
];

const resourceColumns = [
  {
    title: "CHOOSE A PLATFORM",
    items: [
      {
        label: "MetaTrader White Label",
        href: "/mt5-white-label",
      },
      {
        label: "MT4 vs MT5",
        href: "/resources/mt4-vs-mt5",
      },
      {
        label: "How to Choose an MT5 White Label Provider",
        href: "/resources/mt5-white-label-provider",
      },
      {
        label: "MT5 White Label Cost",
        href: "/resources/mt5-white-label-cost",
      },
      {
        label: "MT5 White Label Pricing",
        href: "/resources/mt5-white-label-pricing",
      },
    ],
  },

  {
    title: "CONNECT & DEPLOY",
    items: [
      {
        label: "MT5 Server Hosting",
        href: "/mt5-server",
      },
      {
        label: "MT5 Data Feed",
        href: "/pricefeed",
      },
      {
        label: "MT5 Liquidity Bridge",
        href: "/liquidity-bridge",
      },
      {
        label: "Forex Bridge Guide",
        href: "/resources/forex-bridge-guide",
      },
      {
        label: "CRM Integration Guide",
        href: "/resources/crm-integration-guide",
      },
    ],
  },

  {
    title: "PLAN THE OPERATION",
    items: [
      {
        label: "Start a Forex Broker",
        href: "/resources/start-a-forex-broker",
      },
      {
        label: "Broker Infrastructure",
        href: "/brokerage-technology",
      },
      {
        label: "Forex Technology Stack",
        href: "/resources/forex-technology-stack",
      },
    ],
  },
];

/* =========================================
   CURRENT PAGE / ACTIVE NAVIGATION HELPERS
   These helpers only control active-state display.
   Existing navigation destinations are kept unchanged.
========================================= */
const activeRouteGroups = [
  ["/mt5-market-data", [
    "/pricefeed",
    "/price-feed",
    "/market-data",
    "/market-data-feed",
    "/forex-market-data-feed",
    "/infrastructure/market-data.html",
  ]],
  ["/mt5-white-label", ["/provider/mt5-white-label.html"]],
  ["/mt4-white-label", ["/provider/mt4-white-label.html"]],
  ["/mt5-server", ["/provider/mt5-server.html", "/mt5-server-hosting"]],
  ["/mt4-server", ["/provider/mt4-server.html", "/mt4-server-hosting"]],
  ["/liquidity-bridge", ["/mt5-liquidity-bridge", "/resources/forex-bridge-guide", "/resources/forex-liquidity-bridge"]],
  ["/forex-brokers", ["/solutions/forex-broker", "/solutions/forex-brokers"]],
  ["/prop-firms", ["/solutions/prop-firms"]],
  ["/resources/start-forex-broker", ["/start-forex-broker", "/resources/start-a-forex-broker"]],
  ["/resources/forex-broker-technology", ["/resources/forex-technology-stack", "/resources/forex-broker-technology.html"]],
];

function normalizeRoutePath(path = "/") {
  const pathname = String(path).split(/[?#]/)[0];
  const trimmed = pathname.replace(/\/+$/, "");
  return trimmed || "/";
}

function canonicalRoutePath(path = "/") {
  const normalized = normalizeRoutePath(path);
  const group = activeRouteGroups.find(([canonical, aliases]) =>
    canonical === normalized || aliases.includes(normalized)
  );
  return group ? group[0] : normalized;
}

function pathsRepresentSamePage(firstPath, secondPath) {
  return canonicalRoutePath(firstPath) === canonicalRoutePath(secondPath);
}

function Navbar() {
  const location = useLocation();
  const currentPath = normalizeRoutePath(location.pathname);
  const isCurrentPage = (href) => pathsRepresentSamePage(currentPath, href);
  const isResourcesPage = currentPath === "/resources" || currentPath.startsWith("/resources/");
  const isCompanyPage = currentPath === "/about" || currentPath === "/contact";

  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navbarRef = useRef(null);
  const closeTimer = useRef(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMenu = (menuId) => {
    cancelClose();
    setActiveMenu(menuId);
  };

  const scheduleClose = () => {
    cancelClose();

    closeTimer.current = setTimeout(() => {
      setActiveMenu(null);
    }, 160);
  };

  const toggleMenu = (menuId) => {
    cancelClose();

    setActiveMenu((current) =>
      current === menuId ? null : menuId
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleOutsideClick = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setActiveMenu(null);
        setSearchOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
        setSearchOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
      document.removeEventListener("keydown", handleEscape);

      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  const closeNavigation = () => {
    setActiveMenu(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    <header
      className={`tgs-header ${scrolled ? "is-scrolled" : ""}`}
      ref={navbarRef}
    >
      <nav
        className="tgs-navbar"
        aria-label="Main navigation"
        onMouseLeave={scheduleClose}
      >
        {/* LOGO */}

        <a
          href="/"
          className="tgs-logo"
          aria-label="Technology Global Solutions home"
          onClick={closeNavigation}
        >
          <span className="tgs-logo-mark">
            TGS<span>.</span>
          </span>

          <span className="tgs-logo-divider" />

          <span className="tgs-logo-text">
            TECHNOLOGY
            <br />
            GLOBAL SOLUTIONS
          </span>
        </a>

        {/* DESKTOP NAVIGATION */}

        <div className="tgs-desktop-navigation">
          {/* HOME LINK */}
          <a
            href="/"
            className={`tgs-nav-link tgs-home-link ${currentPath === "/" ? "is-route-active" : ""}`}
            aria-current={currentPath === "/" ? "page" : undefined}
            onMouseEnter={() => setActiveMenu(null)}
            onFocus={() => setActiveMenu(null)}
            onClick={closeNavigation}
            aria-label="Go to Home page"
          >
            Home
          </a>

          {navigation.map((menu) => {
            const isActive = activeMenu === menu.id;
            const isRouteActive = menu.items.some((item) => isCurrentPage(item.href));

            return (
              <button
                key={menu.id}
                type="button"
                className={`tgs-nav-link ${
                  isActive ? "active" : ""
                } ${isRouteActive ? "is-route-active" : ""}`}
                aria-current={isRouteActive ? "location" : undefined}
                aria-expanded={isActive}
                aria-controls={`mega-${menu.id}`}
                onMouseEnter={() => openMenu(menu.id)}
                onFocus={() => openMenu(menu.id)}
                onClick={() => toggleMenu(menu.id)}
              >
                <span>{menu.label}</span>

                <ChevronDown
                  size={15}
                  strokeWidth={2.2}
                  className="tgs-chevron"
                />
              </button>
            );
          })}

          {/* RESOURCES */}

          <button
            type="button"
            className={`tgs-nav-link ${
              activeMenu === "resources" ? "active" : ""
            } ${isResourcesPage ? "is-route-active" : ""}`}
            aria-current={isResourcesPage ? "location" : undefined}
            aria-expanded={activeMenu === "resources"}
            aria-controls="mega-resources"
            onMouseEnter={() => openMenu("resources")}
            onFocus={() => openMenu("resources")}
            onClick={() => toggleMenu("resources")}
          >
            <span>Resources</span>

            <ChevronDown
              size={15}
              strokeWidth={2.2}
              className="tgs-chevron"
            />
          </button>

          {/* COMPANY */}

          <button
            type="button"
            className={`tgs-nav-link tgs-company-link ${
              activeMenu === "company" ? "active" : ""
            } ${isCompanyPage ? "is-route-active" : ""}`}
            aria-current={isCompanyPage ? "location" : undefined}
            aria-expanded={activeMenu === "company"}
            aria-controls="mega-company"
            onMouseEnter={() => openMenu("company")}
            onFocus={() => openMenu("company")}
            onClick={() => toggleMenu("company")}
          >
            Company
          </button>
        </div>

        {/* ACTIONS */}

        <div className="tgs-navbar-actions">
          <button
            type="button"
            className={`tgs-search-button ${
              searchOpen ? "active" : ""
            }`}
            aria-label="Toggle search"
            onClick={() => {
              setSearchOpen((current) => !current);
              setActiveMenu(null);
            }}
          >
            {searchOpen ? (
              <X size={19} />
            ) : (
              <Search size={19} />
            )}
          </button>

          <a
            href="/contact"
            className="tgs-project-button"
            onClick={closeNavigation}
          >
            <span>Discuss Your Project</span>
            <ArrowUpRight size={17} />
          </a>

          <button
            type="button"
            className="tgs-mobile-toggle"
            aria-label={
              mobileOpen ? "Close navigation" : "Open navigation"
            }
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((current) => !current);
              setActiveMenu(null);
            }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MEGA MENUS */}

        {navigation.map((menu) => {
          const Icon = menu.icon;

          return (
            <div
              key={menu.id}
              id={`mega-${menu.id}`}
              className={`tgs-mega-menu ${
                activeMenu === menu.id ? "visible" : ""
              }`}
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
              aria-hidden={activeMenu !== menu.id}
              inert={activeMenu !== menu.id}
            >
              <div className="tgs-mega-intro">
                <span className="tgs-eyebrow">
                  <span className="tgs-eyebrow-dot" />
                  {menu.eyebrow}
                </span>

                <h2>{menu.title}</h2>

                <p>{menu.description}</p>

                <a
                  href={menu.featuredHref}
                  className={`tgs-featured-link ${isCurrentPage(menu.featuredHref) ? "is-current-page" : ""}`}
                  aria-current={isCurrentPage(menu.featuredHref) ? "page" : undefined}
                  onClick={closeNavigation}
                >
                  {menu.featuredLabel}
                  <ArrowRight size={17} />
                </a>

                <div className="tgs-intro-decoration">
                  <Icon size={100} strokeWidth={0.8} />
                </div>
              </div>

              <div className="tgs-mega-items">
                {menu.items.map((item, index) => {
                  const ItemIcon = item.icon;

                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      className={`tgs-mega-item ${isCurrentPage(item.href) ? "is-current-page" : ""}`}
                      aria-current={isCurrentPage(item.href) ? "page" : undefined}
                      style={{
                        "--item-index": index,
                      }}
                      onClick={closeNavigation}
                    >
                      <span className="tgs-item-icon">
                        <ItemIcon
                          size={22}
                          strokeWidth={1.8}
                        />
                      </span>

                      <span className="tgs-item-content">
                        <strong>{item.title}</strong>
                        <span>{item.description}</span>
                      </span>

                      <ArrowUpRight
                        size={17}
                        className="tgs-item-arrow"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* RESOURCES MEGA MENU */}

        <div
          id="mega-resources"
          className={`tgs-resources-menu ${
            activeMenu === "resources" ? "visible" : ""
          }`}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          aria-hidden={activeMenu !== "resources"}
          inert={activeMenu !== "resources"}
        >
          {resourceColumns.map((column) => (
            <div className="tgs-resource-column" key={column.title}>
              <h3>{column.title}</h3>

              {column.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`tgs-resource-link ${isCurrentPage(item.href) ? "is-current-page" : ""}`}
                  aria-current={isCurrentPage(item.href) ? "page" : undefined}
                  onClick={closeNavigation}
                >
                  {item.label}

                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          ))}

          <a
            href="/resources"
            className={`tgs-all-resources ${currentPath === "/resources" ? "is-current-page" : ""}`}
            aria-current={currentPath === "/resources" ? "page" : undefined}
            onClick={closeNavigation}
          >
            <span className="tgs-resource-icon">
              <FileText size={23} />
            </span>

            <span>
              <strong>Explore all resources</strong>
              <small>Browse guides and technology insights</small>
            </span>

            <ArrowRight size={18} />
          </a>
        </div>

        {/* COMPANY MENU */}

        <div
          id="mega-company"
          className={`tgs-company-menu ${
            activeMenu === "company" ? "visible" : ""
          }`}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          aria-hidden={activeMenu !== "company"}
          inert={activeMenu !== "company"}
        >
          <a href="/about" className={currentPath === "/about" ? "is-current-page" : ""} aria-current={currentPath === "/about" ? "page" : undefined} onClick={closeNavigation}>
            <Building2 size={20} />
            <span>
              <strong>About Us</strong>
              <small>Discover our company and approach</small>
            </span>
          </a>

          <a href="/contact" className={currentPath === "/contact" ? "is-current-page" : ""} aria-current={currentPath === "/contact" ? "page" : undefined} onClick={closeNavigation}>
            <ShieldCheck size={20} />
            <span>
              <strong>Contact Us</strong>
              <small>Discuss your technology requirements</small>
            </span>
          </a>
        </div>

        {/* SEARCH PANEL */}

        {searchOpen && (
          <form
            className="tgs-search-panel"
            role="search"
            onSubmit={(event) => {
              event.preventDefault();

              const formData = new FormData(event.currentTarget);
              const query = formData.get("q");

              if (query?.trim()) {
                window.location.href =
                  `/resources?q=${encodeURIComponent(query.trim())}`;
              }
            }}
          >
            <Search size={20} />

            <input
              type="search"
              name="q"
              placeholder="Search platforms, services and resources..."
              aria-label="Search website"
              autoFocus
            />

            <button type="submit">Search</button>
          </form>
        )}

        {/* MOBILE MENU */}

        <div
          className={`tgs-mobile-menu ${
            mobileOpen ? "mobile-visible" : ""
          }`}
        >
          {/* MOBILE HOME LINK */}
          <a
            href="/"
            className={`tgs-mobile-link tgs-mobile-home ${currentPath === "/" ? "is-route-active" : ""}`}
            aria-current={currentPath === "/" ? "page" : undefined}
            onClick={closeNavigation}
          >
            Home
          </a>

          {[
            ...navigation,
            {
              id: "resources",
              label: "Resources",
            },
            {
              id: "company",
              label: "Company",
            },
          ].map((menu, index, items) => {
            // Prevent duplicate resource item in the mobile menu.
            if (
              items.findIndex((item) => item.id === menu.id) !== index
            ) {
              return null;
            }

            const expanded = mobileExpanded === menu.id;
            const mobileGroupIsActive = menu.id === "resources"
              ? isResourcesPage
              : menu.id === "company"
                ? isCompanyPage
                : navigation.find((item) => item.id === menu.id)?.items.some((item) => isCurrentPage(item.href)) || false;

            return (
              <div className="tgs-mobile-group" key={menu.id}>
                <button
                  type="button"
                  className={`tgs-mobile-link ${
                    expanded ? "expanded" : ""
                  } ${mobileGroupIsActive ? "is-route-active" : ""}`}
                  aria-current={mobileGroupIsActive ? "location" : undefined}
                  onClick={() =>
                    setMobileExpanded(expanded ? null : menu.id)
                  }
                  aria-expanded={expanded}
                >
                  {menu.label}

                  <ChevronDown
                    size={18}
                    className="tgs-mobile-chevron"
                  />
                </button>

                {expanded && (
                  <div className="tgs-mobile-submenu">
                    {menu.id === "resources" ? (
                      <>
                        {resourceColumns.flatMap((column) =>
                          column.items.map((item) => (
                            <a
                              href={item.href}
                              key={item.label}
                              className={isCurrentPage(item.href) ? "is-current-page" : ""}
                              aria-current={isCurrentPage(item.href) ? "page" : undefined}
                              onClick={closeNavigation}
                            >
                              {item.label}
                            </a>
                          ))
                        )}
                        <a
                          href="/resources"
                          className={`tgs-mobile-all-resources ${currentPath === "/resources" ? "is-current-page" : ""}`}
                          aria-current={currentPath === "/resources" ? "page" : undefined}
                          onClick={closeNavigation}
                        >
                          Explore all resources
                        </a>
                      </>
                    ) : menu.id === "company" ? (
                      <>
                        <a href="/about" className={currentPath === "/about" ? "is-current-page" : ""} aria-current={currentPath === "/about" ? "page" : undefined} onClick={closeNavigation}>
                          About Us
                        </a>

                        <a href="/contact" className={currentPath === "/contact" ? "is-current-page" : ""} aria-current={currentPath === "/contact" ? "page" : undefined} onClick={closeNavigation}>
                          Contact Us
                        </a>
                      </>
                    ) : (
                      navigation
                        .find((item) => item.id === menu.id)
                        ?.items.map((item) => (
                          <a
                            href={item.href}
                            key={item.title}
                            className={isCurrentPage(item.href) ? "is-current-page" : ""}
                            aria-current={isCurrentPage(item.href) ? "page" : undefined}
                            onClick={closeNavigation}
                          >
                            {item.title}
                          </a>
                        ))
                    )}
                  </div>
                )}
              </div>
            );
          })}

          <a
            href="/contact"
            className="tgs-mobile-cta"
            onClick={closeNavigation}
          >
            Discuss Your Project
            <ArrowDownRight size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;