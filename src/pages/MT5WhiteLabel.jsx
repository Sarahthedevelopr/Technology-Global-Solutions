import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Clock3,
  Cloud,
  Code2,
  Database,
  FileCheck2,
  FileText,
  Globe2,
  Layers3,
  LifeBuoy,
  Link2,
  Network,
  Radio,
  Settings2,
  ShieldCheck,
  Workflow,
  Zap,
  MessageCircle,
  Send,
  Server,
  Activity,
} from "lucide-react";

import "./MT5WhiteLabel.css";

/* -------------------------------------------------------
   CONTACT CONFIGURATION

   Replace these example contact details with your actual
   TGS contact links before publishing.
------------------------------------------------------- */

const WHATSAPP_URL = "https://wa.me/";
const TELEGRAM_URL = "https://t.me/";

/* -------------------------------------------------------
   ANIMATION CONFIGURATION
------------------------------------------------------- */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

/* -------------------------------------------------------
   PROJECT SCOPE
------------------------------------------------------- */

const projectScope = [
  {
    number: "01",
    title: "Platform",
    subtitle: "Trading environment",
    description:
      "Define the MT5 environment, platform arrangement and required account workflows.",
    icon: Layers3,
    color: "purple",
  },

  {
    number: "02",
    title: "Pricing",
    subtitle: "Market data sources",
    description:
      "Identify price sources, instrument specifications and the data required by your brokerage.",
    icon: Activity,
    color: "pink",
  },

  {
    number: "03",
    title: "Execution",
    subtitle: "Supported connectivity",
    description:
      "Review the required gateways, bridge connectivity and order-handling workflows.",
    icon: Zap,
    color: "violet",
  },

  {
    number: "04",
    title: "Operations",
    subtitle: "Client systems & support",
    description:
      "Plan account provisioning, reporting, CRM integrations and ongoing operational responsibilities.",
    icon: Workflow,
    color: "orange",
  },
];

/* -------------------------------------------------------
   DEPLOYMENT PLANNING
------------------------------------------------------- */

const deploymentCards = [
  {
    number: "01",
    title: "Account-model planning",
    description:
      "MT5 supports both netting and hedging models. Define the required model, test workflows and validate how orders, deals and positions are represented in client systems.",
    icon: Settings2,
  },

  {
    number: "02",
    title: "Asset-class configuration",
    description:
      "Define instruments, trading sessions, contract specifications, margin rules and required price sources. Multi-asset support does not automatically include every market access requirement.",
    icon: BarChart3,
  },

  {
    number: "03",
    title: "Execution and pricing interfaces",
    description:
      "Identify supported gateways, define quote sources, align symbol metadata and test rejected orders, connectivity failures and execution workflows.",
    icon: Network,
  },

  {
    number: "04",
    title: "CRM and post-trade workflows",
    description:
      "Connect account provisioning, balance operations and reporting reconciliation with the coordination of orders, deals and positions across CRM and back-office systems.",
    icon: Database,
  },

  {
    number: "05",
    title: "Infrastructure topology",
    description:
      "Plan runtime components, client access paths, monitoring, recovery responsibilities and capacity. Define who can make production configuration changes.",
    icon: Server,
  },

  {
    number: "06",
    title: "Production acceptance",
    description:
      "Validate client logins, price updates, account rules, trade execution, CRM actions and operational reports before approving the operating scope.",
    icon: ShieldCheck,
  },
];

/* -------------------------------------------------------
   PLATFORM ARRANGEMENT
------------------------------------------------------- */

const platformPoints = [
  "Permitted platform use and administrative responsibilities",
  "Branding scope and client access requirements",
  "Third-party services and connectivity dependencies",
  "Representative instruments and account workflows",
];

/* -------------------------------------------------------
   ACCEPTANCE WORKFLOW
------------------------------------------------------- */

const acceptanceSteps = [
  {
    number: "01",
    title: "Configure",
    description:
      "Define expected results for the selected position-accounting model and trading workflows.",
    icon: Settings2,
  },

  {
    number: "02",
    title: "Test",
    description:
      "Validate prices, order execution, commissions, session boundaries and unavailable symbols.",
    icon: FileText,
  },

  {
    number: "03",
    title: "Reconcile",
    description:
      "Check positions and trades against CRM and back-office reports. Detect missing or duplicated actions.",
    icon: BarChart3,
  },

  {
    number: "04",
    title: "Approve",
    description:
      "Document testing results, confirm system behaviour and finalise the handover for production.",
    icon: CheckCircle2,
  },
];

/* -------------------------------------------------------
   FAQ
------------------------------------------------------- */

const faqItems = [
  {
    question: "Can MT5 support both netting and hedging?",

    answer:
      "MT5 supports both netting and hedging position-accounting systems. The appropriate configuration and the expected order, deal and position workflows should be defined and tested for the selected deployment.",
  },

  {
    question:
      "Does a multi-asset platform include every market connection?",

    answer:
      "No. Market-data rights, exchange access, liquidity arrangements and execution gateways can involve separate dependencies. Required markets and connectivity should be confirmed as part of the project scope.",
  },

  {
    question:
      "What affects the price of an MT5 White Label project?",

    answer:
      "Pricing depends on the platform arrangement, runtime infrastructure, required instruments, price sources, execution connectivity, integrations and agreed support responsibilities. The final scope should be reviewed with the provider.",
  },

  {
    question: "Can an existing CRM be retained?",

    answer:
      "An existing CRM may be retained when the required interfaces, compatibility and permissions are available. Account provisioning, balance operations, reporting and integration requirements should be assessed before deployment.",
  },
];

/* -------------------------------------------------------
   COMPONENT: SECTION EYEBROW
------------------------------------------------------- */

function SectionEyebrow({ children }) {
  return (
    <div className="mt5-eyebrow">
      <span className="mt5-eyebrow-dot" />
      <span>{children}</span>
    </div>
  );
}

/* -------------------------------------------------------
   COMPONENT: SECTION HEADING
------------------------------------------------------- */

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <motion.div
      className={`mt5-section-heading ${
        centered ? "mt5-heading-centered" : ""
      }`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <SectionEyebrow>{eyebrow}</SectionEyebrow>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </motion.div>
  );
}

/* -------------------------------------------------------
   COMPONENT: PRIMARY BUTTON
------------------------------------------------------- */

function PrimaryButton({
  href = "#contact",
  children,
  external = false,
  variant = "primary",
}) {
  return (
    <a
      className={`mt5-button mt5-button-${variant}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <span>{children}</span>

      <ArrowUpRight size={17} />
    </a>
  );
}

/* -------------------------------------------------------
   COMPONENT: HERO TRADING VISUAL
------------------------------------------------------- */

function TradingVisual() {
  const chartBars = [
    28, 40, 33, 52, 45, 61, 49, 72, 58, 80, 66, 89, 73, 94,
    76, 102, 85, 112, 96, 122, 105, 116, 98, 129, 110, 138,
    119, 145,
  ];

  return (
    <div className="mt5-trading-visual">
      <div className="mt5-visual-glow" />

      <motion.div
        className="mt5-orbit mt5-orbit-one"
        animate={{ rotate: 360 }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="mt5-orbit mt5-orbit-two"
        animate={{ rotate: -360 }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="mt5-terminal"
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.65 }}
      >
        <div className="mt5-terminal-topbar">
          <div className="mt5-terminal-brand">
            <span className="mt5-terminal-brand-icon">
              <Activity size={15} />
            </span>

            <span>Trading Infrastructure</span>
          </div>

          <div className="mt5-terminal-dots">
            <i />
            <i />
            <i />
          </div>
        </div>

        <div className="mt5-terminal-content">
          <div className="mt5-terminal-heading">
            <div>
              <span className="mt5-terminal-label">
                MULTI-ASSET OVERVIEW
              </span>

              <h3>Market activity</h3>
            </div>

            <span className="mt5-market-status">
              <span />
              Live interface concept
            </span>
          </div>

          <div className="mt5-market-summary">
            <div>
              <span>Trading platform</span>
              <strong>MT5</strong>
            </div>

            <div>
              <span>Market data</span>
              <strong>Connected</strong>
            </div>

            <div>
              <span>Infrastructure</span>
              <strong>Multi-layer</strong>
            </div>
          </div>

          <div className="mt5-chart-area">
            <div className="mt5-chart-grid">
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className="mt5-chart-labels">
              <span>MARKET MOVEMENT</span>
              <span>ILLUSTRATIVE DATA</span>
            </div>

            <svg
              className="mt5-chart-line"
              viewBox="0 0 460 190"
              preserveAspectRatio="none"
              role="img"
              aria-label="Illustrative market chart"
            >
              <defs>
                <linearGradient
                  id="mt5ChartFill"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#d946ef"
                    stopOpacity="0.3"
                  />

                  <stop
                    offset="100%"
                    stopColor="#d946ef"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>

              <path
                d="M0 150 L24 132 L42 143 L62 112 L82 126 L104 95 L122 107 L144 77 L166 91 L188 64 L210 79 L230 49 L250 63 L272 39 L294 56 L314 28 L337 46 L359 22 L380 38 L401 17 L422 32 L442 9 L460 20 L460 190 L0 190 Z"
                fill="url(#mt5ChartFill)"
              />

              <path
                d="M0 150 L24 132 L42 143 L62 112 L82 126 L104 95 L122 107 L144 77 L166 91 L188 64 L210 79 L230 49 L250 63 L272 39 L294 56 L314 28 L337 46 L359 22 L380 38 L401 17 L422 32 L442 9 L460 20"
                fill="none"
                stroke="#d946ef"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M0 166 L45 154 L90 161 L135 141 L180 147 L225 128 L270 139 L315 115 L360 125 L405 98 L460 110"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="2"
                strokeDasharray="5 6"
                opacity="0.75"
              />
            </svg>

            <div className="mt5-chart-axis">
              <span>09:00</span>
              <span>11:00</span>
              <span>13:00</span>
              <span>15:00</span>
              <span>17:00</span>
            </div>
          </div>

          <div className="mt5-terminal-footer">
            <span>
              <span className="mt5-status-dot" />
              Platform layer
            </span>

            <span>
              <span className="mt5-status-dot mt5-status-pink" />
              Pricing layer
            </span>

            <span>
              <span className="mt5-status-dot mt5-status-orange" />
              Operations
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt5-floating-card mt5-floating-platform"
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="mt5-floating-icon">
          <Layers3 size={18} />
        </span>

        <div>
          <strong>MT5 Platform</strong>
          <small>Trading environment</small>
        </div>
      </motion.div>

      <motion.div
        className="mt5-floating-card mt5-floating-data"
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="mt5-floating-icon mt5-icon-pink">
          <Radio size={18} />
        </span>

        <div>
          <strong>Market Data</strong>
          <small>Pricing sources</small>
        </div>
      </motion.div>

      <motion.div
        className="mt5-floating-card mt5-floating-execution"
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="mt5-floating-icon mt5-icon-violet">
          <Zap size={18} />
        </span>

        <div>
          <strong>Execution</strong>
          <small>Supported connectivity</small>
        </div>
      </motion.div>

      <div className="mt5-visual-orb mt5-orb-top">
        <Network size={22} />
      </div>

      <div className="mt5-visual-orb mt5-orb-bottom">
        <Database size={22} />
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   COMPONENT: FAQ ACCORDION
------------------------------------------------------- */

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mt5-section mt5-faq-section" id="faq">
      <div className="mt5-container">
        <div className="mt5-faq-layout">
          <div className="mt5-faq-intro">
            <SectionEyebrow>FREQUENTLY ASKED QUESTIONS</SectionEyebrow>

            <h2>
              Questions about
              <span> MT5 White Label.</span>
            </h2>

            <p>
              Understand the key technical considerations before
              planning your brokerage infrastructure.
            </p>

            <a
              href="#contact"
              className="mt5-text-link"
            >
              Discuss your requirements
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="mt5-faq-list">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  className={`mt5-faq-item ${
                    isOpen ? "mt5-faq-open" : ""
                  }`}
                  key={item.question}
                >
                  <button
                    className="mt5-faq-question"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                  >
                    <span className="mt5-faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="mt5-faq-question-text">
                      {item.question}
                    </span>

                    <span className="mt5-faq-chevron">
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="mt5-faq-answer"
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                      >
                        <p>{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------
   MAIN PAGE
------------------------------------------------------- */

export default function MT5WhiteLabel() {
  return (
    <main className="mt5-page">

      {/* ==================================================
          1. HERO
      ================================================== */}

      <section className="mt5-hero" id="mt5-home">
        <div className="mt5-hero-background">
          <div className="mt5-hero-grid" />
          <div className="mt5-hero-glow mt5-hero-glow-one" />
          <div className="mt5-hero-glow mt5-hero-glow-two" />

          <div className="mt5-hero-ring mt5-hero-ring-one" />
          <div className="mt5-hero-ring mt5-hero-ring-two" />
        </div>

        <div className="mt5-container mt5-hero-container">
          <div className="mt5-hero-grid-layout">

            <motion.div
              className="mt5-hero-copy"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp}>
                <SectionEyebrow>
                  TRADING PLATFORM INFRASTRUCTURE
                </SectionEyebrow>
              </motion.div>

              <motion.h1 variants={fadeUp}>
                MT5 White Label
                <span className="mt5-gradient-text">
                  {" "}for a connected
                </span>
                <span className="mt5-gradient-text">
                  {" "}multi-asset brokerage.
                </span>
              </motion.h1>

              <motion.p
                className="mt5-hero-description"
                variants={fadeUp}
              >
                Build an MT5 operating environment with explicit
                platform, instrument, account, connectivity and
                support requirements. TGS connects the agreed
                technology layers and validates the workflows
                needed for production.
              </motion.p>

              <motion.div
                className="mt5-hero-actions"
                variants={fadeUp}
              >
                <PrimaryButton href="#contact">
                  Discuss Requirements
                </PrimaryButton>

                <a
                  className="mt5-button mt5-button-outline"
                  href="#project-scope"
                >
                  <span>Explore the Scope</span>
                  <ArrowDown size={17} />
                </a>
              </motion.div>

              <motion.div
                className="mt5-hero-benefits"
                variants={fadeUp}
              >
                <span>
                  <CheckCircle2 size={16} />
                  Platform Setup
                </span>

                <span>
                  <CheckCircle2 size={16} />
                  Multi-Asset Support
                </span>

                <span>
                  <CheckCircle2 size={16} />
                  Connected Infrastructure
                </span>
              </motion.div>
            </motion.div>

            <div className="mt5-hero-art">
              <TradingVisual />
            </div>
          </div>

          {/* ==================================================
              2. PROJECT SCOPE STRIP
          ================================================== */}

          <motion.div
            className="mt5-scope-panel"
            id="project-scope"
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              delay: 0.25,
            }}
          >
            <div className="mt5-scope-panel-heading">
              <SectionEyebrow>
                MT5 WHITE LABEL PROJECT SCOPE
              </SectionEyebrow>
            </div>

            <div className="mt5-scope-grid">
              {projectScope.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    className="mt5-scope-item"
                    href={`#scope-${item.number}`}
                    key={item.number}
                  >
                    <div
                      className={`mt5-scope-icon mt5-scope-${item.color}`}
                    >
                      <Icon size={21} />
                    </div>

                    <div className="mt5-scope-content">
                      <span className="mt5-scope-number">
                        {item.number}
                      </span>

                      <strong>{item.title}</strong>

                      <small>{item.subtitle}</small>
                    </div>

                    <span className="mt5-scope-arrow">
                      <ArrowRight size={15} />
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          3. DEPLOYMENT PLANNING
      ================================================== */}

      <section
        className="mt5-section mt5-deployment-section"
        id="deployment-planning"
      >
        <div className="mt5-container">
          <SectionHeading
            eyebrow="DEPLOYMENT PLANNING"
            title="Define your MT5 White Label deployment."
            description="An MT5 White Label project involves several technical and operational considerations. These are the key areas to define and validate before deployment."
          />

          <div className="mt5-deployment-top-action">
            <a
              href="https://www.metatrader5.com/en/brokers"
              target="_blank"
              rel="noopener noreferrer"
              className="mt5-small-link"
            >
              View MT5 Documentation
              <ArrowUpRight size={15} />
            </a>
          </div>

          <motion.div
            className="mt5-deployment-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
          >
            {deploymentCards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.article
                  className="mt5-deployment-card"
                  id={`scope-${card.number}`}
                  key={card.number}
                  variants={fadeUp}
                >
                  <div className="mt5-deployment-card-top">
                    <span className="mt5-card-number">
                      {card.number}
                    </span>

                    <span className="mt5-deployment-icon">
                      <Icon size={21} />
                    </span>

                    <span className="mt5-card-corner">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  <h3>{card.title}</h3>

                  <p>{card.description}</p>

                  <a
                    href="#contact"
                    className="mt5-card-link"
                    aria-label={`Discuss ${card.title}`}
                  >
                    Discuss this requirement
                    <ArrowRight size={15} />
                  </a>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          4. PLATFORM ARRANGEMENT
      ================================================== */}

      <section
        className="mt5-section mt5-arrangement-section"
        id="platform-arrangement"
      >
        <div className="mt5-container">
          <div className="mt5-arrangement-layout">

            <motion.div
              className="mt5-arrangement-copy"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionEyebrow>
                PLATFORM ARRANGEMENT
              </SectionEyebrow>

              <h2>
                Define the platform arrangement
                <span> before deployment.</span>
              </h2>

              <p>
                MT5 White Label is more than a platform installation.
                The commercial arrangement should clearly define
                permitted platform use, administrative responsibilities,
                branding scope, client access and third-party dependencies.
              </p>

              <p>
                TGS reviews infrastructure requirements as an
                independent technology provider. Representative
                instruments and account workflows should be tested
                before launch.
              </p>

              <div className="mt5-platform-points">
                {platformPoints.map((point) => (
                  <div
                    className="mt5-platform-point"
                    key={point}
                  >
                    <span>
                      <Check size={14} />
                    </span>

                    <p>{point}</p>
                  </div>
                ))}
              </div>

              <PrimaryButton href="#contact">
                Discuss Your Platform Setup
              </PrimaryButton>
            </motion.div>

            <motion.div
              className="mt5-architecture-card"
              initial={{
                opacity: 0,
                x: 24,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.55,
              }}
              viewport={{ once: true }}
            >
              <div className="mt5-architecture-header">
                <span>INFRASTRUCTURE ARCHITECTURE</span>

                <span className="mt5-architecture-status">
                  <span />
                  Connected layers
                </span>
              </div>

              <div className="mt5-architecture-visual">
                <div className="mt5-architecture-grid" />

                <div className="mt5-architecture-center">
                  <div className="mt5-architecture-center-icon">
                    <Activity size={34} />
                  </div>

                  <strong>MT5</strong>

                  <small>Trading platform</small>
                </div>

                <div className="mt5-architecture-node mt5-node-top">
                  <span>
                    <Radio size={19} />
                  </span>

                  <div>
                    <strong>Market Data</strong>
                    <small>Price sources</small>
                  </div>
                </div>

                <div className="mt5-architecture-node mt5-node-left">
                  <span>
                    <Layers3 size={19} />
                  </span>

                  <div>
                    <strong>Trading Platform</strong>
                    <small>MT5 server</small>
                  </div>
                </div>

                <div className="mt5-architecture-node mt5-node-right">
                  <span>
                    <Zap size={19} />
                  </span>

                  <div>
                    <strong>Execution</strong>
                    <small>Liquidity bridge</small>
                  </div>
                </div>

                <div className="mt5-architecture-node mt5-node-bottom">
                  <span>
                    <Database size={19} />
                  </span>

                  <div>
                    <strong>Client Systems</strong>
                    <small>CRM & back-office</small>
                  </div>
                </div>

                <svg
                  className="mt5-architecture-lines"
                  viewBox="0 0 600 400"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M300 200 L300 95" />
                  <path d="M300 200 L115 200" />
                  <path d="M300 200 L485 200" />
                  <path d="M300 200 L300 315" />
                </svg>
              </div>

              <div className="mt5-architecture-footer">
                <span>
                  <ShieldCheck size={16} />
                  Defined project scope
                </span>

                <span>
                  <Network size={16} />
                  Integration planning
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================================================
          5. ACCEPTANCE PLAN
      ================================================== */}

      <section
        className="mt5-section mt5-acceptance-section"
        id="acceptance-plan"
      >
        <div className="mt5-container">
          <SectionHeading
            eyebrow="TESTING AND HANDOVER"
            title="Build an acceptance plan around trading workflows."
            description="Test and validate your MT5 environment to ensure the platform, connectivity and client systems work as expected."
          />

          <motion.div
            className="mt5-acceptance-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >
            {acceptanceSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  className="mt5-acceptance-card"
                  variants={fadeUp}
                  key={step.number}
                >
                  <div className="mt5-acceptance-card-top">
                    <span className="mt5-card-number">
                      {step.number}
                    </span>

                    <span className="mt5-acceptance-icon">
                      <Icon size={21} />
                    </span>

                    <ArrowUpRight
                      className="mt5-acceptance-corner"
                      size={18}
                    />
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                  {index < acceptanceSteps.length - 1 && (
                    <div className="mt5-acceptance-connector">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </motion.article>
              );
            })}
          </motion.div>

          <div className="mt5-acceptance-note">
            <span>
              <FileCheck2 size={20} />
            </span>

            <p>
              <strong>Production readiness matters.</strong>
              {" "}Document test results, recovery behaviour,
              integrations and operational responsibilities
              before the final handover.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          6. FAQ
      ================================================== */}

      <FAQSection />

      {/* ==================================================
          7. RELATED READING
      ================================================== */}

      <section
        className="mt5-section mt5-related-section"
        id="related-reading"
      >
        <div className="mt5-container">
          <div className="mt5-related-heading">
            <div>
              <SectionEyebrow>
                RELATED READING
              </SectionEyebrow>

              <h2>
                Continue with the connected technology layers.
              </h2>
            </div>

            <a
              className="mt5-small-link"
              href="https://www.metatrader5.com/en/brokers"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore documentation
              <ArrowUpRight size={15} />
            </a>
          </div>

          <a
            className="mt5-documentation-card"
            href="https://www.metatrader5.com/en/brokers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="mt5-documentation-icon">
              <FileText size={24} />
            </div>

            <div className="mt5-documentation-content">
              <span>PLATFORM DOCUMENTATION</span>

              <h3>MetaTrader 5 for Brokers</h3>

              <p>
                Official MetaQuotes information about MT5 for brokers.
              </p>
            </div>

            <div className="mt5-documentation-action">
              <span>Open documentation</span>
              <ArrowUpRight size={19} />
            </div>
          </a>
        </div>
      </section>

      {/* ==================================================
          8. FINAL CTA

          Navbar and Footer are handled by App.jsx.
          This is the page's CTA section, not a second footer.
      ================================================== */}

      <section
        className="mt5-final-cta"
        id="contact"
      >
        <div className="mt5-cta-grid" />

        <div className="mt5-cta-glow" />

        <div className="mt5-container">
          <div className="mt5-cta-layout">

            <motion.div
              className="mt5-cta-copy"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionEyebrow>GET STARTED</SectionEyebrow>

              <h2>
                Discuss your infrastructure
                <span> requirements.</span>
              </h2>

              <p>
                Share your target platform, current systems and
                required workflows with the TGS technical team.
              </p>

              <div className="mt5-cta-actions">
                <PrimaryButton
                  href={WHATSAPP_URL}
                  external
                >
                  <MessageCircle size={17} />
                  Chat on WhatsApp
                </PrimaryButton>

                <PrimaryButton
                  href={TELEGRAM_URL}
                  external
                  variant="outline-light"
                >
                  <Send size={17} />
                  Contact on Telegram
                </PrimaryButton>
              </div>

              <p className="mt5-cta-disclaimer">
                Contact links must be configured with the correct
                TGS business account before publishing.
              </p>
            </motion.div>

            <motion.div
              className="mt5-cta-visual"
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="mt5-cta-orbit mt5-cta-orbit-one" />
              <div className="mt5-cta-orbit mt5-cta-orbit-two" />

              <div className="mt5-cta-globe">
                <Globe2 size={112} strokeWidth={0.8} />
              </div>

              <div className="mt5-cta-chip mt5-chip-platform">
                <Layers3 size={14} />
                Platform
              </div>

              <div className="mt5-cta-chip mt5-chip-market">
                <Radio size={14} />
                Market Data
              </div>

              <div className="mt5-cta-chip mt5-chip-operations">
                <Workflow size={14} />
                Operations
              </div>

              <div className="mt5-cta-chip mt5-chip-execution">
                <Zap size={14} />
                Execution
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}