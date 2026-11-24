import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  MessageCircle,
  Layers3,
  Database,
  Workflow,
  Server,
  Radio,
  Code2,
  Network,
  Zap,
} from "lucide-react";

import "./Footer.css";

/* =========================================
   FOOTER NAVIGATION
========================================= */

const footerGroups = [
  {
    title: "Platforms",
    links: [
      {
        label: "MT5 White Label",
        href: "/provider/mt5-white-label.html",
      },
      {
        label: "MT4 White Label",
        href: "/provider/mt4-white-label.html",
      },
      {
        label: "MT5 Server",
        href: "/provider/mt5-server.html",
      },
      {
        label: "MT4 Server",
        href: "/provider/mt4-server.html",
      },
    ],
  },
  {
    title: "Infrastructure",
    links: [
      {
        label: "Market Data",
        href: "/infrastructure/market-data.html",
      },
      {
        label: "Liquidity Bridge",
        href: "/infrastructure/liquidity-bridge.html",
      },
      {
        label: "Broker CRM",
        href: "/infrastructure/broker-crm.html",
      },
      {
        label: "Brokerage Technology",
        href: "/infrastructure/brokerage-technology.html",
      },
    ],
  },
  {
    title: "Solutions",
    links: [
      {
        label: "Forex Brokers",
        href: "/solutions/forex-brokers.html",
      },
      {
        label: "Prop Firms",
        href: "/solutions/prop-firms.html",
      },
      {
        label: "CFD Brokers",
        href: "/solutions/cfd-brokers.html",
      },
      {
        label: "Forex Web Development",
        href: "/solutions/forex-web-development.html",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Technology Guides",
        href: "/resources/",
      },
      {
        label: "FAQs",
        href: "/#faq",
      },
      {
        label: "Contact",
        href: "/#contact",
      },
    ],
  },
];

/* =========================================
   CAROUSEL SERVICES
========================================= */

const footerServices = [
  {
    title: "MT5 White Label",
    description: "Trading platform infrastructure",
    icon: Layers3,
    href: "/provider/mt5-white-label.html",
  },
  {
    title: "MT4 White Label",
    description: "Brokerage platform technology",
    icon: Radio,
    href: "/provider/mt4-white-label.html",
  },
  {
    title: "Market Data",
    description: "Pricing and data connectivity",
    icon: Database,
    href: "/infrastructure/market-data.html",
  },
  {
    title: "Liquidity Bridge",
    description: "Execution connectivity",
    icon: Workflow,
    href: "/infrastructure/liquidity-bridge.html",
  },
  {
    title: "Broker CRM",
    description: "Client operations and workflows",
    icon: Network,
    href: "/infrastructure/broker-crm.html",
  },
  {
    title: "Trading Server",
    description: "Platform server infrastructure",
    icon: Server,
    href: "/provider/mt5-server.html",
  },
  {
    title: "Forex Web Development",
    description: "Brokerage website technology",
    icon: Code2,
    href: "/solutions/forex-web-development.html",
  },
  {
    title: "Brokerage APIs",
    description: "Systems integration",
    icon: Zap,
    href: "/infrastructure/brokerage-technology.html",
  },
];

/* =========================================
   REVEAL ANIMATION
========================================= */

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================
   CAROUSEL CARD
========================================= */

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <Link
      to={service.href}
      className="tgs-service-card"
      aria-label={`Explore ${service.title}`}
    >
      <span className="tgs-service-icon">
        <Icon size={20} strokeWidth={1.8} />
      </span>

      <span className="tgs-service-content">
        <strong>{service.title}</strong>
        <small>{service.description}</small>
      </span>

      <ArrowUpRight
        className="tgs-service-arrow"
        size={16}
      />
    </Link>
  );
}

/* =========================================
   MAIN FOOTER
========================================= */

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const footerRef = useRef(null);

  const footerInView = useInView(footerRef, {
    once: true,
    amount: 0.03,
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  // Two separate rows, each duplicated for seamless movement.
  const firstRow = footerServices.slice(0, 4);
  const secondRow = footerServices.slice(4, 8);

  return (
    <footer className="tgs-footer" ref={footerRef}>
      {/* Animated background */}

      <div className="tgs-footer-background" aria-hidden="true">
        <div className="tgs-footer-glow tgs-footer-glow-one" />
        <div className="tgs-footer-glow tgs-footer-glow-two" />
        <div className="tgs-footer-grid" />
      </div>

      <div className="tgs-footer-container">

        {/* =====================================
            COMPANY INFORMATION + NAVIGATION
        ===================================== */}

        <motion.div
          className="tgs-footer-main"
          variants={revealVariants}
          initial="hidden"
          animate={footerInView ? "visible" : "hidden"}
        >
          {/* Company information */}

          <div className="tgs-footer-brand">
            <Link
              to="/"
              className="tgs-footer-logo"
              aria-label="Technology Global Solutions home"
            >
              <span className="tgs-footer-logo-mark">
                <Layers3 size={23} />
              </span>

              <span className="tgs-footer-logo-name">
                <strong>TGS</strong>
                <small>TECHNOLOGY GLOBAL SOLUTIONS</small>
              </span>
            </Link>

            <p className="tgs-footer-description">
              Trading platforms, market data, execution connectivity
              and technology infrastructure for brokerage businesses.
            </p>

            <div className="tgs-footer-contact">
              <a href="mailto:info@technologyglobalsolutions.com">
                <Mail size={15} />
                <span>Email Us</span>
                <ArrowUpRight size={13} />
              </a>

              <Link to="/#contact">
                <MessageCircle size={15} />
                <span>Contact TGS</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>

          {/* Navigation columns */}

          <div className="tgs-footer-links">
            {footerGroups.map((group, index) => (
              <motion.div
                className="tgs-footer-column"
                key={group.title}
                initial={{ opacity: 0, y: 12 }}
                animate={
                  footerInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 12 }
                }
                transition={{
                  duration: 0.4,
                  delay: 0.08 + index * 0.07,
                }}
              >
                <h3>{group.title}</h3>

                <span className="tgs-footer-heading-line" />

                <ul>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.href}>
                        <span>{link.label}</span>
                        <ArrowUpRight size={12} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =====================================
            ANIMATED SERVICE CAROUSEL
        ===================================== */}

        <motion.section
          className="tgs-footer-showcase"
          aria-label="Explore TGS technology services"
          initial={{ opacity: 0, y: 14 }}
          animate={
            footerInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 14 }
          }
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
        >
          <div className="tgs-showcase-heading">
            <div>
              <span className="tgs-footer-eyebrow">
                EXPLORE OUR TECHNOLOGY
              </span>

              <h2>
                Technology built around your brokerage.
              </h2>
            </div>

            <span className="tgs-showcase-label">
              <span className="tgs-showcase-dot" />
              OUR SERVICES
            </span>
          </div>

          {/* First row: moves left */}

          <div className="tgs-carousel-row tgs-carousel-left">
            <div className="tgs-carousel-track">
              {[...firstRow, ...firstRow].map((service, index) => (
                <ServiceCard
                  service={service}
                  key={`row-one-${service.title}-${index}`}
                />
              ))}
            </div>
          </div>

          {/* Second row: moves right */}

          <div className="tgs-carousel-row tgs-carousel-right">
            <div className="tgs-carousel-track">
              {[...secondRow, ...secondRow].map((service, index) => (
                <ServiceCard
                  service={service}
                  key={`row-two-${service.title}-${index}`}
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* =====================================
            COPYRIGHT + LEGAL LINKS
        ===================================== */}

        <div className="tgs-footer-bottom">
          <p>
            © {currentYear} Technology Global Solutions.
            <span> All rights reserved.</span>
          </p>

          <div className="tgs-footer-legal">
            <Link to="/privacy-policy.html">
              Privacy Policy
            </Link>

            <Link to="/terms-and-conditions.html">
              Terms &amp; Conditions
            </Link>

            <button
              type="button"
              onClick={scrollToTop}
            >
              Back to top
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Back-to-Top */}

      <motion.button
        type="button"
        className="tgs-floating-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        initial={false}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          y: showBackToTop ? 0 : 12,
        }}
        style={{
          pointerEvents: showBackToTop ? "auto" : "none",
        }}
        transition={{ duration: 0.25 }}
      >
        <ArrowUp size={19} />
      </motion.button>
    </footer>
  );
}