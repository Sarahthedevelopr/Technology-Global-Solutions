import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Activity,
  AlertTriangle,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  Clock3,
  Code2,
  Database,
  GitBranch,
  Layers3,
  LockKeyhole,
  Network,
  Radio,
  RefreshCw,
  Route,
  Server,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Workflow,
  Zap,
} from "lucide-react";

import "./ForexLiquidityBridge.css";

const WHATSAPP_URL =
  "https://wa.me/358823711153?text=Hello%20TGS%2C%20I%20would%20like%20to%20discuss%20Forex%20Liquidity%20Bridge%20requirements.";

const TELEGRAM_URL = "https://t.me/whitelabelmetatraderfx";

const reveal = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const viewportSettings = {
  once: true,
  amount: 0.15,
};

const scopeItems = [
  {
    number: "01",
    icon: Network,
    title: "Execution topology",
    subtitle: "Understand the connected environment",
    description:
      "Map the trading platform, bridge, downstream execution endpoints and their dependencies before defining the deployment.",
    tags: ["Platform", "Bridge", "Endpoints"],
  },
  {
    number: "02",
    icon: SlidersHorizontal,
    title: "Instrument mapping",
    subtitle: "Align instruments across systems",
    description:
      "Document symbols, price precision, contract sizes, quantity steps and trading sessions for every connected instrument.",
    tags: ["Symbols", "Contracts", "Sessions"],
  },
  {
    number: "03",
    icon: GitBranch,
    title: "Execution routing",
    subtitle: "Define supported workflows",
    description:
      "Configure supported routing workflows around the brokerage's operational model and the capabilities of the connected systems.",
    tags: ["Routes", "Rules", "Execution"],
  },
  {
    number: "04",
    icon: Activity,
    title: "Connectivity monitoring",
    subtitle: "Observe sessions and exceptions",
    description:
      "Track connection states, rejection patterns, request turnaround and inconsistencies between platform and downstream records.",
    tags: ["Sessions", "Events", "Alerts"],
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Risk interfaces",
    subtitle: "Connect required risk systems",
    description:
      "Identify and integrate supported exposure or risk systems where the broker's architecture and requirements call for them.",
    tags: ["Exposure", "Risk", "Interfaces"],
  },
  {
    number: "06",
    icon: RefreshCw,
    title: "Deployment control",
    subtitle: "Plan testing and rollback",
    description:
      "Validate execution paths, failure scenarios and recovery procedures before releasing configuration changes into production.",
    tags: ["Testing", "Release", "Rollback"],
  },
];

const mappingFields = [
  {
    title: "Platform symbol",
    description: "The instrument identifier used by the trading platform.",
  },
  {
    title: "Downstream symbol",
    description: "The corresponding identifier on the connected system.",
  },
  {
    title: "Price precision",
    description: "The required decimal precision for the instrument.",
  },
  {
    title: "Contract size",
    description: "The contract parameters associated with the instrument.",
  },
  {
    title: "Quantity step",
    description: "The permitted increments for order quantities.",
  },
  {
    title: "Trading sessions",
    description: "The relevant trading schedule and session boundaries.",
  },
];

const lifecycleSteps = [
  {
    number: "01",
    title: "Request",
    description:
      "A trading request enters the configured execution workflow.",
    icon: ArrowUpRight,
  },
  {
    number: "02",
    title: "Validation",
    description:
      "The request is checked against supported parameters and rules.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Acknowledgement",
    description:
      "The connected system returns an acknowledgement or rejection.",
    icon: Radio,
  },
  {
    number: "04",
    title: "Final outcome",
    description:
      "The final status and supported execution details are reconciled.",
    icon: CheckCircle2,
  },
];

const operationalChecks = [
  "Confirm the supported endpoints and instrument coverage.",
  "Validate symbol mapping and contract parameters.",
  "Test acceptance, rejection, timeout and connection interruption.",
  "Verify partial fills wherever supported by the route and venue.",
  "Define reconciliation for uncertain execution outcomes.",
  "Retain the previous configuration for controlled rollback.",
];

const architectureLayers = [
  {
    number: "01",
    name: "Trading platform",
    detail: "MT4 / MT5 environment",
    icon: Layers3,
  },
  {
    number: "02",
    name: "Market data",
    detail: "Pricing sources and symbols",
    icon: Database,
  },
  {
    number: "03",
    name: "Execution bridge",
    detail: "Connectivity and routing",
    icon: GitBranch,
  },
  {
    number: "04",
    name: "Broker operations",
    detail: "Client systems and support",
    icon: Server,
  },
];

const relatedResources = [
  {
    category: "PLATFORM",
    title: "MT5 White Label",
    description:
      "Explore the platform environment and requirements for a branded brokerage setup.",
    href: "/mt5-white-label",
    icon: Layers3,
  },
  {
    category: "INFRASTRUCTURE",
    title: "Market Data Feed",
    description:
      "Understand pricing sources, symbol coverage, mapping and monitoring requirements.",
    href: "/price-feed",
    icon: Database,
  },
  {
    category: "INTEGRATION",
    title: "Broker CRM",
    description:
      "Plan the client, account and back-office workflows around your trading environment.",
    href: "/broker-crm",
    icon: Workflow,
  },
  {
    category: "ARCHITECTURE",
    title: "Brokerage Technology",
    description:
      "Explore the wider technology stack connecting platforms, data and operations.",
    href: "/brokerage-technology",
    icon: Network,
  },
];

const faqs = [
  {
    question: "What does a Forex liquidity bridge do?",
    answer:
      "A liquidity bridge connects a trading platform to a supported downstream execution environment. Its scope can include connectivity, routing workflows, instrument mapping and the handling of execution responses. The exact capabilities depend on the bridge and connected endpoints.",
  },
  {
    question: "Is a liquidity bridge the same as a market data feed?",
    answer:
      "No. A market data feed distributes market prices, while a bridge connects trading requests to a supported execution environment. They may share instrument metadata, but they address different operational requirements. Define which system owns pricing, route selection, order acceptance and final execution records.",
  },
  {
    question: "Does a bridge automatically provide access to liquidity?",
    answer:
      "No. A bridge does not itself establish a liquidity relationship. Counterparty permissions, commercial arrangements, instrument coverage and supported interfaces must be confirmed separately. Only authorised and technically supported endpoints should be included in the architecture.",
  },
  {
    question: "What should an instrument mapping register contain?",
    answer:
      "Document the platform symbol, downstream symbol, price precision, contract size, quantity step, trading session and any other required parameters. Also specify how unsupported symbols or invalid quantity increments are handled. Keep the mapping version aligned with the production configuration.",
  },
  {
    question: "What should be tested before production deployment?",
    answer:
      "Test the supported request types and expected acknowledgements, rejections and final outcomes. Include timeout and connection interruption scenarios. Verify partial fills where supported, and define reconciliation procedures for uncertain outcomes before enabling automated recovery.",
  },
  {
    question: "How should bridge connectivity be monitored?",
    answer:
      "Monitor connection state, request turnaround, rejection patterns and discrepancies between platform and downstream records. Retain sufficient event context to investigate incidents, but never place passwords or credentials in logs. Define when operators should suspend a route or investigate manually.",
  },
  {
    question: "Can execution quality be guaranteed by technical connectivity?",
    answer:
      "No. Technical connectivity and execution quality are different commitments. The outcome depends on the supported route, connected systems, counterparties, market conditions and applicable commercial arrangements.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <motion.div
      className={`flb-section-heading ${
        centered ? "flb-section-heading-center" : ""
      }`}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      {eyebrow && <span className="flb-eyebrow">{eyebrow}</span>}

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </motion.div>
  );
}

function BridgeArchitectureVisual() {
  return (
    <motion.div
      className="flb-architecture"
      initial={{ opacity: 0, scale: 0.94, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
    >
      <div className="flb-architecture-top">
        <div className="flb-live-indicator">
          <span className="flb-live-dot" />
          SYSTEM ARCHITECTURE
        </div>

        <span className="flb-architecture-code">TGS / FLB-01</span>
      </div>

      <div className="flb-architecture-grid">
        <span className="flb-grid-line flb-grid-line-one" />
        <span className="flb-grid-line flb-grid-line-two" />
        <span className="flb-grid-line flb-grid-line-three" />

        <motion.div
          className="flb-flow-node flb-flow-node-platform"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flb-flow-node-icon">
            <Layers3 size={22} />
          </div>
          <span className="flb-node-label">01 / PLATFORM</span>
          <strong>MT4 / MT5</strong>
          <small>Trading environment</small>
        </motion.div>

        <div className="flb-flow-connector flb-flow-connector-top">
          <span className="flb-flow-line" />
          <motion.span
            className="flb-flow-particle"
            animate={{ x: [0, 56, 0] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <ArrowRight size={14} />
        </div>

        <motion.div
          className="flb-flow-node flb-flow-node-bridge"
          animate={{
            boxShadow: [
              "0 0 18px rgba(224,0,232,.10)",
              "0 0 36px rgba(224,0,232,.25)",
              "0 0 18px rgba(224,0,232,.10)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="flb-bridge-symbol">
            <GitBranch size={28} />
          </div>
          <span className="flb-node-label">03 / EXECUTION</span>
          <strong>Liquidity Bridge</strong>
          <small>Connectivity · Routing</small>
          <div className="flb-bridge-status">
            <span />
            ROUTE CONFIGURATION
          </div>
        </motion.div>

        <div className="flb-flow-connector flb-flow-connector-bottom">
          <span className="flb-flow-line" />
          <motion.span
            className="flb-flow-particle"
            animate={{ x: [0, 56, 0] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <ArrowRight size={14} />
        </div>

        <motion.div
          className="flb-flow-node flb-flow-node-endpoint"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flb-flow-node-icon flb-endpoint-icon">
            <Network size={22} />
          </div>
          <span className="flb-node-label">DOWNSTREAM</span>
          <strong>Execution</strong>
          <small>Supported endpoints</small>
        </motion.div>
      </div>

      <div className="flb-architecture-bottom">
        <div className="flb-architecture-stat">
          <span className="flb-stat-icon">
            <Database size={15} />
          </span>
          <div>
            <small>DATA LAYER</small>
            <strong>Instrument mapping</strong>
          </div>
        </div>

        <div className="flb-architecture-stat">
          <span className="flb-stat-icon">
            <Activity size={15} />
          </span>
          <div>
            <small>CONTROL LAYER</small>
            <strong>Monitoring & recovery</strong>
          </div>
        </div>
      </div>

      <div className="flb-architecture-glow" />
    </motion.div>
  );
}

function ScopeCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.article
      className="flb-scope-card"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: "easeOut",
      }}
      whileHover={{ y: -7 }}
    >
      <div className="flb-scope-card-top">
        <span className="flb-scope-number">{item.number}</span>

        <motion.div
          className="flb-scope-icon"
          whileHover={{ rotate: -8, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 280 }}
        >
          <Icon size={22} />
        </motion.div>
      </div>

      <h3>{item.title}</h3>
      <h4>{item.subtitle}</h4>
      <p>{item.description}</p>

      <div className="flb-tag-list">
        {item.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="flb-scope-card-line" />
    </motion.article>
  );
}

function ExecutionLifecycle() {
  return (
    <div className="flb-lifecycle">
      {lifecycleSteps.map((step, index) => {
        const Icon = step.icon;

        return (
          <React.Fragment key={step.number}>
            <motion.div
              className="flb-lifecycle-step"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
              }}
            >
              <div className="flb-lifecycle-step-top">
                <span>{step.number}</span>

                <div className="flb-lifecycle-icon">
                  <Icon size={23} />
                </div>
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>

            {index !== lifecycleSteps.length - 1 && (
              <motion.div
                className="flb-lifecycle-arrow"
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportSettings}
                transition={{ delay: index * 0.12 + 0.2 }}
              >
                <ArrowRight size={20} />
              </motion.div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      className={`flb-faq-item ${isOpen ? "flb-faq-open" : ""}`}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      transition={{ duration: 0.45, delay: index * 0.04 }}
    >
      <button
        type="button"
        className="flb-faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="flb-faq-question-number">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span>{item.question}</span>

        <motion.span
          className="flb-faq-chevron"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <motion.div
        className="flb-faq-answer-wrap"
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <p className="flb-faq-answer">{item.answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default function ForexLiquidityBridge() {
  const [openFaq, setOpenFaq] = useState(0);
  const [checkedItems, setCheckedItems] = useState([]);

  const completedCount = checkedItems.length;
  const progress = (completedCount / operationalChecks.length) * 100;

  const toggleChecklistItem = (index) => {
    setCheckedItems((previous) =>
      previous.includes(index)
        ? previous.filter((item) => item !== index)
        : [...previous, index]
    );
  };

  return (
    <main className="flb-page">
      {/* HERO */}
      <section className="flb-hero">
        <div className="flb-hero-orb flb-hero-orb-one" />
        <div className="flb-hero-orb flb-hero-orb-two" />
        <div className="flb-hero-grid" />

        <div className="flb-container flb-hero-layout">
          <motion.div
            className="flb-hero-copy"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            <motion.div className="flb-breadcrumb" variants={reveal}>
              <span>RESOURCES</span>
              <span className="flb-breadcrumb-divider">/</span>
              <span>BROKER TECHNOLOGY GUIDE</span>
            </motion.div>

            <motion.div className="flb-hero-badge" variants={reveal}>
              <span className="flb-badge-pulse" />
              MT4 & MT5 EXECUTION INFRASTRUCTURE
            </motion.div>

            <motion.h1 variants={reveal}>
              Forex Liquidity
              <br />
              Bridge for <span>Brokers.</span>
            </motion.h1>

            <motion.p className="flb-hero-description" variants={reveal}>
              Design the execution-connectivity layer between your trading
              platform and supported downstream liquidity or execution
              infrastructure.
            </motion.p>

            <motion.div className="flb-hero-actions" variants={reveal}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flb-button flb-button-primary"
              >
                Discuss requirements
                <ArrowUpRight size={18} />
              </a>

              <a href="#flb-scope" className="flb-button flb-button-secondary">
                Explore the scope
                <ArrowDown size={17} />
              </a>
            </motion.div>

            <motion.div className="flb-hero-footnote" variants={reveal}>
              <span>
                <ShieldCheck size={16} />
                Architecture-led planning
              </span>

              <span>
                <CircleDot size={15} />
                Scope-specific connectivity
              </span>
            </motion.div>
          </motion.div>

          <BridgeArchitectureVisual />
        </div>

        <div className="flb-container">
          <motion.div
            className="flb-hero-bottom"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
          >
            <span>01 / PLATFORM</span>
            <span className="flb-hero-bottom-line" />
            <span>02 / PRICING</span>
            <span className="flb-hero-bottom-line" />
            <span>03 / EXECUTION</span>
            <span className="flb-hero-bottom-line" />
            <span>04 / OPERATIONS</span>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="flb-overview">
        <div className="flb-container flb-overview-grid">
          <motion.div
            className="flb-overview-intro"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            transition={{ duration: 0.65 }}
          >
            <span className="flb-eyebrow">CONNECTED BROKER TECHNOLOGY</span>

            <h2>
              More than a connection.
              <br />
              <span>A defined execution workflow.</span>
            </h2>

            <p>
              A bridge must be planned around the platform, instrument
              conventions, supported endpoints and operational processes it
              connects. Start by identifying the dependencies and defining how
              requests, responses and exceptions will be handled.
            </p>

            <a href="#flb-scope" className="flb-text-link">
              Explore the requirements <ArrowRight size={17} />
            </a>
          </motion.div>

          <div className="flb-layer-stack">
            {architectureLayers.map((layer, index) => {
              const Icon = layer.icon;

              return (
                <motion.div
                  key={layer.number}
                  className={`flb-layer-row ${
                    index === 2 ? "flb-layer-row-highlight" : ""
                  }`}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ x: 6 }}
                >
                  <span className="flb-layer-number">{layer.number}</span>

                  <span className="flb-layer-icon">
                    <Icon size={19} />
                  </span>

                  <div className="flb-layer-copy">
                    <strong>{layer.name}</strong>
                    <span>{layer.detail}</span>
                  </div>

                  {index === 2 ? (
                    <span className="flb-layer-active">CORE LAYER</span>
                  ) : (
                    <ArrowUpRight size={17} className="flb-layer-arrow" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section className="flb-scope section-space" id="flb-scope">
        <div className="flb-container">
          <SectionHeading
            eyebrow="SCOPE & DECISIONS"
            title={
              <>
                Six areas to define
                <br />
                <span>before deployment.</span>
              </>
            }
            description="A clear scope makes technical dependencies easier to understand, test and manage throughout implementation."
            centered
          />

          <div className="flb-scope-grid">
            {scopeItems.map((item, index) => (
              <ScopeCard item={item} index={index} key={item.number} />
            ))}
          </div>
        </div>
      </section>

      {/* PRICE PATH VS ORDER PATH */}
      <section className="flb-path-section section-space">
        <div className="flb-container">
          <div className="flb-path-panel">
            <div className="flb-path-copy">
              <motion.div
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
              >
                <span className="flb-eyebrow">A CRITICAL DISTINCTION</span>

                <h2>
                  Separate the
                  <br />
                  <span>quote path</span> from the
                  <br />
                  order path.
                </h2>

                <p>
                  A price feed distributes market prices. A bridge connects
                  trading requests to a supported execution environment.
                  Related instrument metadata does not make them the same
                  system.
                </p>
              </motion.div>

              <motion.div
                className="flb-path-note"
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
              >
                <AlertTriangle size={21} />

                <div>
                  <strong>Define system ownership first.</strong>
                  <p>
                    Identify which system owns pricing, route selection, order
                    acceptance and final execution records.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="flb-path-visual">
              <motion.div
                className="flb-path-system"
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                transition={{ duration: 0.55 }}
              >
                <div className="flb-path-system-icon flb-path-data-icon">
                  <Database size={22} />
                </div>

                <div>
                  <span>DATA PATH</span>
                  <strong>Market data feed</strong>
                  <small>Price distribution</small>
                </div>

                <span className="flb-path-system-status">PRICING</span>
              </motion.div>

              <div className="flb-path-separator">
                <span />
                <span>DIFFERENT RESPONSIBILITIES</span>
                <span />
              </div>

              <motion.div
                className="flb-path-system flb-path-system-bridge"
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                transition={{ duration: 0.55, delay: 0.12 }}
              >
                <div className="flb-path-system-icon flb-path-exec-icon">
                  <GitBranch size={22} />
                </div>

                <div>
                  <span>ORDER PATH</span>
                  <strong>Liquidity bridge</strong>
                  <small>Execution connectivity</small>
                </div>

                <span className="flb-path-system-status">EXECUTION</span>
              </motion.div>

              <div className="flb-path-foot">
                <LockKeyhole size={16} />
                <span>
                  Use authorised, technically supported endpoints.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAPPING */}
      <section className="flb-mapping section-space">
        <div className="flb-container flb-mapping-grid">
          <motion.div
            className="flb-mapping-copy"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            transition={{ duration: 0.6 }}
          >
            <span className="flb-eyebrow">INSTRUMENT CONFIGURATION</span>

            <h2>
              Build an instrument
              <br />
              <span>mapping register.</span>
            </h2>

            <p>
              Each connected instrument needs a documented relationship
              between its platform identifier and downstream representation.
              Do not assume that a symbol suffix or quantity convention can be
              applied globally.
            </p>

            <div className="flb-mapping-callout">
              <div className="flb-callout-icon">
                <Code2 size={20} />
              </div>

              <div>
                <strong>Example: EURUSD</strong>
                <p>
                  A broker-facing EURUSD symbol with a suffix may require a
                  different downstream identifier. Verify the complete
                  mapping instead of removing suffixes globally.
                </p>
              </div>
            </div>

            <div className="flb-mapping-footer">
              <ShieldCheck size={18} />
              <span>
                Keep the mapping version aligned with the production
                configuration.
              </span>
            </div>
          </motion.div>

          <div className="flb-mapping-card">
            <div className="flb-mapping-card-header">
              <div>
                <span className="flb-eyebrow">CONFIGURATION REGISTER</span>
                <h3>Instrument specification</h3>
              </div>

              <span className="flb-register-icon">
                <SlidersHorizontal size={19} />
              </span>
            </div>

            <div className="flb-register-columns">
              <span>FIELD</span>
              <span>REQUIRED DETAIL</span>
            </div>

            {mappingFields.map((field, index) => (
              <motion.div
                className="flb-register-row"
                key={field.title}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportSettings}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <div className="flb-register-check">
                  <Check size={13} />
                </div>

                <strong>{field.title}</strong>
                <p>{field.description}</p>
              </motion.div>
            ))}

            <div className="flb-register-footer">
              <span className="flb-register-footer-dot" />
              <span>DOCUMENTED CONFIGURATION</span>
              <span className="flb-register-footer-right">
                {mappingFields.length} FIELDS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTION LIFECYCLE */}
      <section className="flb-lifecycle-section section-space">
        <div className="flb-container">
          <SectionHeading
            eyebrow="EXECUTION LIFECYCLE"
            title={
              <>
                Test the complete
                <br />
                <span>request-to-outcome path.</span>
              </>
            }
            description="For each supported request type, document the expected acknowledgement and final result, including failure and interruption scenarios."
            centered
          />

          <ExecutionLifecycle />

          <motion.div
            className="flb-lifecycle-warning"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            transition={{ duration: 0.55 }}
          >
            <div className="flb-warning-icon">
              <AlertTriangle size={23} />
            </div>

            <div>
              <strong>
                A timeout does not always mean an order was not accepted.
              </strong>

              <p>
                The downstream system may have accepted a request before the
                connection failed. Define reconciliation procedures and
                identifiers for resolving uncertain outcomes before enabling
                automated recovery.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="flb-checklist-section section-space">
        <div className="flb-container flb-checklist-grid">
          <motion.div
            className="flb-checklist-copy"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            transition={{ duration: 0.6 }}
          >
            <span className="flb-eyebrow">PRODUCTION READINESS</span>

            <h2>
              Prepare the route
              <br />
              <span>before release.</span>
            </h2>

            <p>
              Use this interactive checklist to track the operational
              scenarios that should be considered before a bridge
              configuration is released.
            </p>

            <div className="flb-checklist-stat">
              <div className="flb-checklist-stat-icon">
                <CheckCircle2 size={23} />
              </div>

              <div>
                <strong>
                  {completedCount} of {operationalChecks.length}
                </strong>
                <span>Checks completed in this session</span>
              </div>
            </div>

            <div
              className="flb-progress-track"
              role="progressbar"
              aria-label="Checklist progress"
              aria-valuemin={0}
              aria-valuemax={operationalChecks.length}
              aria-valuenow={completedCount}
            >
              <motion.div
                className="flb-progress-fill"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.35 }}
              />
            </div>

            <span className="flb-progress-caption">
              {Math.round(progress)}% of checklist completed
            </span>
          </motion.div>

          <div className="flb-checklist-card">
            <div className="flb-checklist-card-head">
              <div>
                <span>DEPLOYMENT CHECKLIST</span>
                <h3>Operational validation</h3>
              </div>

              <span className="flb-checklist-head-icon">
                <CheckCircle2 size={21} />
              </span>
            </div>

            <div className="flb-checklist-items">
              {operationalChecks.map((item, index) => {
                const checked = checkedItems.includes(index);

                return (
                  <button
                    type="button"
                    key={item}
                    className={`flb-check-item ${
                      checked ? "flb-check-item-done" : ""
                    }`}
                    onClick={() => toggleChecklistItem(index)}
                    aria-pressed={checked}
                  >
                    <span className="flb-custom-checkbox">
                      {checked && <Check size={14} />}
                    </span>

                    <span>{item}</span>
                  </button>
                );
              })}
            </div>

            <div className="flb-checklist-card-footer">
              <span>
                <LockKeyhole size={15} />
                Local session checklist
              </span>

              <button
                type="button"
                onClick={() => setCheckedItems([])}
                disabled={completedCount === 0}
              >
                Reset checklist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MONITORING */}
      <section className="flb-monitoring-section section-space">
        <div className="flb-container">
          <div className="flb-monitoring-panel">
            <div className="flb-monitoring-copy">
              <span className="flb-eyebrow">MONITORING & CHANGE CONTROL</span>

              <h2>
                Release safely.
                <br />
                <span>Maintain operational visibility.</span>
              </h2>

              <p>
                A production route needs more than a successful initial
                connection. Monitoring, event context and a controlled
                rollback plan help operators investigate issues and manage
                configuration changes.
              </p>

              <div className="flb-monitoring-points">
                <div>
                  <CheckCircle2 size={18} />
                  <span>Track connection state and exceptions.</span>
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  <span>Review turnaround and rejection patterns.</span>
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  <span>Reconcile platform and downstream records.</span>
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  <span>Retain a controlled rollback configuration.</span>
                </div>
              </div>
            </div>

            <div className="flb-monitor-visual">
              <div className="flb-monitor-topbar">
                <div className="flb-monitor-window-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <span>OPERATIONS / ROUTE STATUS</span>

                <span className="flb-monitor-topbar-icon">
                  <Settings2 size={16} />
                </span>
              </div>

              <div className="flb-monitor-status">
                <div>
                  <span>CONNECTIVITY OVERVIEW</span>
                  <strong>Operational visibility</strong>
                </div>

                <div className="flb-monitor-status-icon">
                  <Activity size={21} />
                </div>
              </div>

              <div className="flb-monitor-metrics">
                <div>
                  <span>01</span>
                  <strong>Connection</strong>
                  <small>Session state</small>
                </div>

                <div>
                  <span>02</span>
                  <strong>Requests</strong>
                  <small>Turnaround</small>
                </div>

                <div>
                  <span>03</span>
                  <strong>Exceptions</strong>
                  <small>Rejections</small>
                </div>
              </div>

              <div className="flb-monitor-event">
                <div className="flb-monitor-event-icon">
                  <Clock3 size={17} />
                </div>

                <div>
                  <strong>Event context</strong>
                  <span>Preserve relevant diagnostic details.</span>
                </div>

                <CheckCircle2 size={18} className="flb-monitor-event-check" />
              </div>

              <div className="flb-monitor-event">
                <div className="flb-monitor-event-icon">
                  <RefreshCw size={17} />
                </div>

                <div>
                  <strong>Controlled rollback</strong>
                  <span>Keep a previous route configuration.</span>
                </div>

                <CheckCircle2 size={18} className="flb-monitor-event-check" />
              </div>

              <div className="flb-monitor-security-note">
                <LockKeyhole size={15} />
                Never include passwords or credentials in logs.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED RESOURCES */}
      <section className="flb-related-section section-space">
        <div className="flb-container">
          <div className="flb-related-heading">
            <SectionHeading
              eyebrow="RELATED TECHNOLOGY"
              title={
                <>
                  Continue with the
                  <br />
                  <span>connected technology layers.</span>
                </>
              }
              description="Explore the wider broker stack around your platform, market data, execution and client operations."
            />

            <a href="/resources" className="flb-text-link">
              Browse resources <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="flb-related-grid">
            {relatedResources.map((resource, index) => {
              const Icon = resource.icon;

              return (
                <motion.a
                  href={resource.href}
                  className="flb-related-card"
                  key={resource.title}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -6 }}
                >
                  <div className="flb-related-card-top">
                    <span className="flb-related-icon">
                      <Icon size={22} />
                    </span>

                    <ArrowUpRight
                      size={19}
                      className="flb-related-arrow"
                    />
                  </div>

                  <span className="flb-related-category">
                    {resource.category}
                  </span>

                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>

                  <span className="flb-related-link">
                    Explore resource <ArrowRight size={15} />
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="flb-faq-section section-space" id="flb-faq">
        <div className="flb-container flb-faq-layout">
          <motion.div
            className="flb-faq-intro"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            transition={{ duration: 0.6 }}
          >
            <span className="flb-eyebrow">COMMON QUESTIONS</span>

            <h2>
              Understand the
              <br />
              <span>bridge architecture.</span>
            </h2>

            <p>
              Key considerations for brokers planning execution connectivity
              between their trading platform and supported downstream
              systems.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flb-button flb-button-primary"
            >
              Discuss your setup <ArrowUpRight size={18} />
            </a>

            <div className="flb-faq-support">
              <span className="flb-faq-support-icon">
                <Radio size={18} />
              </span>

              <div>
                <strong>Have a specific requirement?</strong>
                <span>Discuss your architecture with TGS.</span>
              </div>
            </div>
          </motion.div>

          <div className="flb-faq-list">
            {faqs.map((item, index) => (
              <FAQItem
                key={item.question}
                item={item}
                index={index}
                isOpen={openFaq === index}
                onToggle={() =>
                  setOpenFaq(openFaq === index ? -1 : index)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="flb-final-cta-section">
        <div className="flb-cta-orb flb-cta-orb-one" />
        <div className="flb-cta-orb flb-cta-orb-two" />

        <div className="flb-container flb-final-cta-content">
          <motion.div
            className="flb-final-cta-icon"
            initial={{ opacity: 0, scale: 0.75, rotate: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.6 }}
          >
            <GitBranch size={30} />
          </motion.div>

          <motion.span
            className="flb-cta-eyebrow"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            PLAN YOUR BROKER INFRASTRUCTURE
          </motion.span>

          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            Connect your platform
            <br />
            <span>with a clearly defined execution scope.</span>
          </motion.h2>

          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            Share your target platform, existing systems, connectivity
            requirements and operational workflows with the TGS technical
            team.
          </motion.p>

          <motion.div
            className="flb-cta-actions"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flb-button flb-button-white"
            >
              Discuss your infrastructure
              <ArrowUpRight size={18} />
            </a>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="flb-button flb-button-cta-outline"
            >
              Contact via Telegram
              <ArrowRight size={17} />
            </a>
          </motion.div>

          <div className="flb-cta-bottom-note">
            <span>
              <CheckCircle2 size={16} />
              Platform requirements
            </span>

            <span>
              <CheckCircle2 size={16} />
              Connectivity planning
            </span>

            <span>
              <CheckCircle2 size={16} />
              Operational controls
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}