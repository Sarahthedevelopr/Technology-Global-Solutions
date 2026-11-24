import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  ClipboardCheck,
  Code2,
  Database,
  FileCheck2,
  GitBranch,
  Globe2,
  Layers3,
  Network,
  RefreshCw,
  Server,
  ShieldCheck,
  Workflow,
  Users,
  WalletCards,
  ChartNoAxesCombined,
  Gauge,
  Cable,
  Settings2,
  Headphones,
  Building2,
  MonitorCog,
  CircleDot,
} from "lucide-react";

import "./ForexBroker.css";

/* =====================================================
   ANIMATION VARIANTS
===================================================== */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

/* =====================================================
   BROKERAGE TECHNOLOGY LAYERS
===================================================== */

const brokerLayers = [
  {
    number: "01",
    title: "Trading Platform",
    subtitle: "MT4 / MT5",
    icon: Layers3,
    category: "PLATFORM",
    description:
      "Choose and configure an MT4 or MT5 environment around the brokerage operating model, client segments and supported integrations.",
    features: [
      "MT4 / MT5 environment",
      "Trading account workflows",
      "Platform connectivity",
    ],
  },
  {
    number: "02",
    title: "Market Data",
    subtitle: "Pricing Sources",
    icon: ChartNoAxesCombined,
    category: "PRICING",
    description:
      "Connect supported pricing sources, normalise instruments and define how market prices are distributed into the trading platform stack.",
    features: [
      "Pricing source connectivity",
      "Symbol mapping",
      "Price distribution",
    ],
  },
  {
    number: "03",
    title: "Liquidity Connectivity",
    subtitle: "Bridge / Routing",
    icon: GitBranch,
    category: "EXECUTION",
    description:
      "Plan supported bridge and execution-routing connectivity around the broker's flow model and downstream execution requirements.",
    features: [
      "Bridge connectivity",
      "Execution routing",
      "Flow mapping",
    ],
  },
  {
    number: "04",
    title: "CRM & Client Operations",
    subtitle: "CRM / APIs",
    icon: Users,
    category: "OPERATIONS",
    description:
      "Connect onboarding, trading accounts, payment workflows and back-office systems through supported integrations.",
    features: [
      "Client onboarding",
      "Account management",
      "Back-office integration",
    ],
  },
  {
    number: "05",
    title: "Hosting & Monitoring",
    subtitle: "Infrastructure",
    icon: Server,
    category: "INFRASTRUCTURE",
    description:
      "Plan runtime infrastructure, network connectivity, monitoring, access controls, backup and continuity requirements.",
    features: [
      "Hosting and networking",
      "Monitoring and alerts",
      "Backup and recovery",
    ],
  },
  {
    number: "06",
    title: "Operational Model",
    subtitle: "Ownership / Support",
    icon: ShieldCheck,
    category: "GOVERNANCE",
    description:
      "Document production access, change control, escalation paths and day-to-day technical responsibilities.",
    features: [
      "Access management",
      "Change control",
      "Operational support",
    ],
  },
];

/* =====================================================
   INFRASTRUCTURE BENEFITS
===================================================== */

const infrastructureBenefits = [
  {
    number: "01",
    icon: Network,
    title: "Map Dependencies",
    description:
      "Document how platform, market data, execution, client systems and infrastructure depend on each other.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Define Ownership",
    description:
      "Make production access, monitoring, change control and escalation responsibilities explicit.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Validate Production Flows",
    description:
      "Test business-critical workflows and failure scenarios before relying on them in live operations.",
  },
];

/* =====================================================
   RELATED TECHNOLOGY LINKS
===================================================== */

const relatedTechnology = [
  {
    title: "MT5 White Label",
    category: "TRADING PLATFORM",
    description:
      "Explore branded MT5 platform infrastructure for forex brokerage operations.",
    icon: Layers3,
    href: "/mt5-white-label",
  },
  {
    title: "MT4 White Label",
    category: "TRADING PLATFORM",
    description:
      "Plan an MT4 operating environment around the brokerage's requirements.",
    icon: MonitorCog,
    href: "/mt4-white-label",
  },
  {
    title: "MT5 Server Hosting",
    category: "INFRASTRUCTURE",
    description:
      "Explore hosting, access, recovery and operational infrastructure requirements.",
    icon: Server,
    href: "/mt5-server",
  },
  {
    title: "Market Data Feed",
    category: "MARKET DATA",
    description:
      "Understand price source connectivity, instrument mapping and monitoring.",
    icon: Database,
    href: "/pricefeed",
  },
  {
    title: "Liquidity Bridge",
    category: "EXECUTION",
    description:
      "Explore supported execution connectivity and routing integration.",
    icon: GitBranch,
    href: "/liquidity-bridge",
  },
  {
    title: "Broker CRM",
    category: "CLIENT OPERATIONS",
    description:
      "Connect onboarding, accounts, payments and back-office workflows.",
    icon: Users,
    href: "/broker-crm",
  },
];

/* =====================================================
   BROKER OPERATING REQUIREMENTS
===================================================== */

const operatingRequirements = [
  {
    icon: ChartNoAxesCombined,
    title: "Intended Instruments",
    description:
      "Identify the instruments and pricing requirements that shape the platform and market data scope.",
  },
  {
    icon: Users,
    title: "Client Groups",
    description:
      "Define client segments, onboarding journeys, account types and relevant operating workflows.",
  },
  {
    icon: Database,
    title: "Data Sources",
    description:
      "Identify supported market data sources, instrument mappings and distribution requirements.",
  },
  {
    icon: Cable,
    title: "Execution Endpoints",
    description:
      "Map supported bridge, routing and downstream execution connectivity.",
  },
  {
    icon: WalletCards,
    title: "Financial Operations",
    description:
      "Map approved payment and account workflows with the relevant client and back-office systems.",
  },
  {
    icon: Activity,
    title: "Operational Continuity",
    description:
      "Plan monitoring, recovery, escalation and change procedures for the operating team.",
  },
];

/* =====================================================
   FAQ CONTENT
===================================================== */

const faqs = [
  {
    question:
      "What technology does a forex broker typically need?",
    answer:
      "A typical stack may include a trading platform, market data, execution connectivity, CRM or client systems, hosting, monitoring and operational support. The final scope depends on the broker's operating model and requirements.",
  },
  {
    question:
      "Can MT4 and MT5 be part of the same brokerage technology strategy?",
    answer:
      "Yes. Some brokerages operate different platform environments in parallel, depending on client segments, integrations and commercial requirements. The architecture should document how the relevant systems and workflows connect.",
  },
  {
    question:
      "Do you integrate market data and liquidity connectivity?",
    answer:
      "Supported market-data and execution-connectivity components can be designed as part of the broader brokerage stack. Integration scope depends on the selected providers, available interfaces and connectivity requirements.",
  },
  {
    question:
      "Can you work with an existing broker rather than a new launch?",
    answer:
      "Yes. The scope can begin with an audit of an existing environment and focus on integration, migration, stability or operational improvements. The work should be based on the current architecture and the broker's priorities.",
  },
];

/* =====================================================
   SECTION HEADING
===================================================== */

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <motion.div
      className={`fb-heading ${centered ? "is-centered" : ""}`}
      variants={fadeUp}
    >
      <span className="fb-eyebrow">
        <i />
        {eyebrow}
      </span>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </motion.div>
  );
}

/* =====================================================
   HERO INFRASTRUCTURE DASHBOARD
===================================================== */

function InfrastructureDashboard() {
  const systemCards = [
    {
      title: "Trading Platform",
      detail: "MT4 / MT5",
      icon: Layers3,
      className: "fb-system-platform",
    },
    {
      title: "Market Data",
      detail: "Pricing / Symbols",
      icon: Database,
      className: "fb-system-data",
    },
    {
      title: "Liquidity",
      detail: "Bridge / Routing",
      icon: GitBranch,
      className: "fb-system-liquidity",
    },
    {
      title: "Client Operations",
      detail: "CRM / APIs",
      icon: Users,
      className: "fb-system-crm",
    },
    {
      title: "Infrastructure",
      detail: "Hosting / Monitoring",
      icon: Server,
      className: "fb-system-infra",
    },
  ];

  return (
    <div className="fb-hero-visual">
      <div className="fb-visual-glow" />

      <div className="fb-visual-orbit fb-orbit-one" />
      <div className="fb-visual-orbit fb-orbit-two" />

      <div className="fb-visual-dashboard">
        <div className="fb-dashboard-header">
          <div className="fb-window-dots">
            <i />
            <i />
            <i />
          </div>

          <span>FOREX BROKER INFRASTRUCTURE</span>

          <span className="fb-dashboard-live">
            <i />
            SYSTEM MAP
          </span>
        </div>

        <div className="fb-dashboard-title">
          <div>
            <span>TECHNOLOGY ARCHITECTURE</span>
            <h3>Broker Ecosystem</h3>
          </div>

          <div className="fb-dashboard-title-icon">
            <Network size={23} />
          </div>
        </div>

        <div className="fb-dashboard-overview">
          <div>
            <span>PLATFORM</span>
            <strong>MT4 / MT5</strong>
          </div>

          <div>
            <span>PRICING</span>
            <strong>MARKET DATA</strong>
          </div>

          <div>
            <span>OPERATIONS</span>
            <strong>CRM / API</strong>
          </div>
        </div>

        <div className="fb-system-map">
          <div className="fb-system-map-line" />

          {systemCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                className={`fb-system-card ${card.className}`}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -12 : 12,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.3 + index * 0.13,
                  duration: 0.45,
                }}
                whileHover={{
                  scale: 1.025,
                  x: 3,
                }}
              >
                <span className="fb-system-card-icon">
                  <Icon size={18} />
                </span>

                <div>
                  <strong>{card.title}</strong>
                  <small>{card.detail}</small>
                </div>

                <CheckCircle2
                  className="fb-system-check"
                  size={16}
                />
              </motion.div>
            );
          })}
        </div>

        <div className="fb-dashboard-footer">
          <span>
            <Activity size={14} />
            CONNECTED TECHNOLOGY LAYERS
          </span>

          <span>Illustrative architecture</span>
        </div>
      </div>

      <motion.div
        className="fb-floating-badge fb-floating-top"
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span>
          <ShieldCheck size={19} />
        </span>

        <div>
          <strong>Controlled Operations</strong>
          <small>Defined responsibilities</small>
        </div>
      </motion.div>

      <motion.div
        className="fb-floating-badge fb-floating-bottom"
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span>
          <GitBranch size={19} />
        </span>

        <div>
          <strong>Connected Systems</strong>
          <small>Documented dependencies</small>
        </div>
      </motion.div>
    </div>
  );
}

/* =====================================================
   INTERACTIVE SIX-LAYER ARCHITECTURE
===================================================== */

function ArchitectureExplorer() {
  const [activeLayer, setActiveLayer] = useState(0);

  const selected = brokerLayers[activeLayer];
  const SelectedIcon = selected.icon;

  return (
    <div className="fb-architecture-layout">
      <div className="fb-architecture-map">
        <div className="fb-architecture-grid" />

        <div className="fb-map-orbit fb-map-orbit-one" />
        <div className="fb-map-orbit fb-map-orbit-two" />
        <div className="fb-map-orbit fb-map-orbit-three" />

        <div className="fb-map-core">
          <Network size={29} />
          <strong>FOREX</strong>
          <small>BROKER STACK</small>
        </div>

        {brokerLayers.map((layer, index) => {
          const Icon = layer.icon;

          return (
            <motion.button
              key={layer.number}
              type="button"
              className={`fb-map-node fb-map-node-${index + 1} ${
                activeLayer === index ? "is-active" : ""
              }`}
              onClick={() => setActiveLayer(index)}
              aria-pressed={activeLayer === index}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
            >
              <Icon size={17} />
              <span>{layer.subtitle}</span>
            </motion.button>
          );
        })}
      </div>

      <div className="fb-architecture-detail">
        <span className="fb-detail-eyebrow">
          INFRASTRUCTURE LAYER / {selected.number}
        </span>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected.number}
            initial={{
              opacity: 0,
              y: 14,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            transition={{ duration: 0.25 }}
          >
            <span className="fb-detail-icon">
              <SelectedIcon size={26} />
            </span>

            <span className="fb-detail-category">
              {selected.category}
            </span>

            <h3>{selected.title}</h3>

            <p>{selected.description}</p>

            <div className="fb-detail-features">
              {selected.features.map((feature) => (
                <div key={feature}>
                  <CheckCircle2 size={16} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="fb-detail-pagination">
          {brokerLayers.map((layer, index) => (
            <button
              key={layer.number}
              type="button"
              aria-label={`Select ${layer.title}`}
              className={activeLayer === index ? "is-active" : ""}
              onClick={() => setActiveLayer(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   FAQ ITEM
===================================================== */

function FAQItem({ item, index, isOpen, onClick }) {
  return (
    <motion.article
      className={`fb-faq-item ${isOpen ? "is-open" : ""}`}
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.35,
        delay: index * 0.04,
      }}
    >
      <button
        className="fb-faq-question"
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>

        <span className="fb-faq-chevron">
          <ChevronDown size={19} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="fb-faq-answer"
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
    </motion.article>
  );
}

/* =====================================================
   MAIN PAGE
===================================================== */

export default function ForexBroker() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <main className="fb-page">

      {/* ================================================
          01. HERO
      ================================================ */}

      <section className="fb-hero">
        <div className="fb-hero-grid" />

        <div className="fb-hero-glow fb-hero-glow-one" />
        <div className="fb-hero-glow fb-hero-glow-two" />

        <div className="fb-container fb-hero-layout">
          <motion.div
            className="fb-hero-content"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.span
              className="fb-eyebrow"
              variants={fadeUp}
            >
              <i />
              FOREX BROKER TECHNOLOGY
            </motion.span>

            <motion.h1 variants={fadeUp}>
              Technology Infrastructure{" "}
              <span>for Forex Brokers.</span>
            </motion.h1>

            <motion.p variants={fadeUp}>
              Build the technical stack behind your forex brokerage
              with trading platforms, market data, execution
              connectivity, client systems and operational
              infrastructure designed as one architecture.
            </motion.p>

            <motion.div
              className="fb-hero-actions"
              variants={fadeUp}
            >
              <a
                href="/contact"
                className="fb-btn fb-btn-primary"
              >
                Discuss Requirements
                <ArrowUpRight size={18} />
              </a>

              <a
                href="#fb-requirements"
                className="fb-btn fb-btn-secondary"
              >
                Explore the Scope
                <ArrowRight size={17} />
              </a>
            </motion.div>

            <motion.div
              className="fb-hero-points"
              variants={fadeUp}
            >
              <div>
                <CheckCircle2 size={17} />
                <span>Platform & Pricing</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Execution Connectivity</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Client Operations</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            <InfrastructureDashboard />
          </motion.div>
        </div>

        <div className="fb-hero-strip">
          <div className="fb-container fb-hero-strip-inner">
            <span>FOREX BROKER INFRASTRUCTURE SCOPE</span>

            <div>
              <span>01</span>
              PLATFORM
            </div>

            <div>
              <span>02</span>
              PRICING
            </div>

            <div>
              <span>03</span>
              EXECUTION
            </div>

            <div>
              <span>04</span>
              OPERATIONS
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          02. REQUIREMENTS PLANNING
      ================================================ */}

      <section
        className="fb-section fb-requirements-section"
        id="fb-requirements"
      >
        <div className="fb-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="SCOPE & DECISIONS"
              title="Plan the requirements for your forex brokerage."
              description="Define the technology layers required for the initial operating scope, then map how each component connects to the rest of the stack."
            />
          </motion.div>

          <motion.div
            className="fb-requirements-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {brokerLayers.map((layer) => {
              const Icon = layer.icon;

              return (
                <motion.article
                  key={layer.number}
                  className="fb-requirement-card"
                  variants={fadeUp}
                  whileHover={{ y: -7 }}
                >
                  <div className="fb-card-top">
                    <span>{layer.number}</span>

                    <span className="fb-card-icon">
                      <Icon size={22} />
                    </span>
                  </div>

                  <span className="fb-card-category">
                    {layer.category}
                  </span>

                  <h3>{layer.title}</h3>

                  <p>{layer.description}</p>

                  <div className="fb-card-features">
                    {layer.features.map((feature) => (
                      <span key={feature}>
                        <CheckCircle2 size={14} />
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================================================
          03. INTERACTIVE ARCHITECTURE
      ================================================ */}

      <section className="fb-section fb-architecture-section">
        <div className="fb-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="CONNECTED INFRASTRUCTURE"
              title="Explore the forex broker technology stack."
              description="Select a layer to understand its responsibility, the integrations involved and its place in the broader brokerage architecture."
              centered
            />
          </motion.div>

          <ArchitectureExplorer />

          <div className="fb-architecture-note">
            <ShieldCheck size={19} />

            <p>
              The final architecture depends on the broker's
              requirements, selected platforms, supported interfaces
              and agreed technical scope.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================
          04. INITIAL OPERATING SCOPE
      ================================================ */}

      <section className="fb-section fb-operating-section">
        <div className="fb-container fb-operating-layout">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="INITIAL OPERATING SCOPE"
              title="Design around how your brokerage will operate."
              description="Start with the intended instruments, client groups, platform access, data sources and supported execution endpoints. Then map the client lifecycle through CRM and approved financial operations."
            />

            <a
              href="/contact"
              className="fb-text-link"
            >
              Discuss your operating model
              <ArrowRight size={17} />
            </a>
          </motion.div>

          <motion.div
            className="fb-operating-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {operatingRequirements.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="fb-operating-card"
                  key={item.title}
                  variants={fadeUp}
                >
                  <span className="fb-operating-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="fb-operating-icon">
                    <Icon size={21} />
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================================================
          05. IMPLEMENTATION PRINCIPLES
      ================================================ */}

      <section className="fb-section fb-principles-section">
        <div className="fb-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="IMPLEMENTATION PRINCIPLES"
              title="A clear plan for production readiness."
              description="Three core activities help make infrastructure dependencies and operational responsibilities explicit."
              centered
            />
          </motion.div>

          <motion.div
            className="fb-principles-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {infrastructureBenefits.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  className="fb-principle-card"
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                >
                  <div className="fb-principle-top">
                    <span>{item.number}</span>

                    <Icon size={25} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="fb-principle-bottom">
                    <CheckCircle2 size={15} />
                    <span>IMPLEMENTATION PRINCIPLE</span>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================================================
          06. RELATED TECHNOLOGY
      ================================================ */}

      <section className="fb-section fb-related-section">
        <div className="fb-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="RELATED TECHNOLOGY"
              title="Explore the components of your broker infrastructure."
              description="Continue to specialist pages for platform environments, market data, execution connectivity and client operations."
            />
          </motion.div>

          <motion.div
            className="fb-related-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {relatedTechnology.map((item) => {
              const Icon = item.icon;

              return (
                <motion.a
                  href={item.href}
                  key={item.title}
                  className="fb-related-card"
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                >
                  <div className="fb-related-top">
                    <span className="fb-related-icon">
                      <Icon size={22} />
                    </span>

                    <ArrowUpRight
                      className="fb-related-arrow"
                      size={19}
                    />
                  </div>

                  <span className="fb-related-category">
                    {item.category}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <span className="fb-related-link">
                    Explore Technology
                    <ArrowRight size={16} />
                  </span>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================================================
          07. FAQ
      ================================================ */}

      <section className="fb-section fb-faq-section">
        <div className="fb-container fb-faq-layout">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="QUESTIONS"
              title="Questions about forex broker infrastructure."
              description="Understand the typical technology stack, platform strategy, integration scope and the requirements of an existing brokerage."
            />

            <div className="fb-faq-help">
              <span>
                <CircleHelp size={23} />
              </span>

              <div>
                <strong>Need a technical discussion?</strong>

                <p>
                  Share your current environment and the workflows
                  you need to support.
                </p>

                <a href="/contact">
                  Discuss Requirements
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="fb-faq-list">
            {faqs.map((item, index) => (
              <FAQItem
                key={item.question}
                item={item}
                index={index}
                isOpen={activeFaq === index}
                onClick={() =>
                  setActiveFaq(
                    activeFaq === index ? -1 : index
                  )
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          08. FINAL CTA
      ================================================ */}

      <section className="fb-final-cta">
        <div className="fb-cta-grid" />

        <div className="fb-container fb-cta-layout">
          <motion.div
            className="fb-cta-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <span className="fb-eyebrow">
              <i />
              TECHNOLOGY GLOBAL SOLUTIONS
            </span>

            <h2>
              Discuss your forex broker{" "}
              <span>infrastructure requirements.</span>
            </h2>

            <p>
              Share your target platform, current systems and
              required workflows with the technical team. Define
              the relevant technology layers and the next steps
              for your brokerage environment.
            </p>

            <div className="fb-hero-actions">
              <a
                href="/contact"
                className="fb-btn fb-btn-primary"
              >
                Discuss Your Project
                <ArrowUpRight size={18} />
              </a>

              <a
                href="/brokerage-technology"
                className="fb-btn fb-btn-secondary"
              >
                Explore Brokerage Technology
                <ArrowRight size={17} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="fb-cta-visual"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="fb-cta-orbit fb-cta-orbit-one" />
            <div className="fb-cta-orbit fb-cta-orbit-two" />

            <div className="fb-cta-core">
              <Network size={34} />
              <strong>TGS</strong>
              <small>FOREX INFRASTRUCTURE</small>
            </div>

            <span className="fb-cta-node fb-cta-node-one">
              <Layers3 size={19} />
            </span>

            <span className="fb-cta-node fb-cta-node-two">
              <Database size={19} />
            </span>

            <span className="fb-cta-node fb-cta-node-three">
              <Server size={19} />
            </span>
          </motion.div>
        </div>
      </section>

    </main>
  );
}