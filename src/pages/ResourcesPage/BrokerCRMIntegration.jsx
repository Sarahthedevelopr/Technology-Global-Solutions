import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Activity,
  ShieldCheck,
  Database,
  CreditCard,
  Users,
  Workflow,
  Code2,
  BarChart3,
  LockKeyhole,
  CheckCircle2,
  RefreshCw,
  CircleAlert,
  ClipboardCheck,
  Server,
  FileCheck2,
  ChevronDown,
  ExternalLink,
  MessageCircle,
  Layers3,
  Zap,
  Menu,
  X,
} from "lucide-react";

import "./BrokerCRMIntegration.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const scopeItems = [
  {
    number: "01",
    title: "Onboarding",
    description:
      "Connect client registration and supported verification workflows.",
    detail:
      "Define registration fields, validation rules, verification states and the point at which a client becomes eligible for account creation.",
    icon: Users,
    tags: ["Registration", "Verification", "Client status"],
  },
  {
    number: "02",
    title: "Trading Accounts",
    description:
      "Coordinate account creation and lifecycle actions with the platform.",
    detail:
      "Map account requests to platform operations. Define account groups, activation, restrictions, credential delivery and closure procedures.",
    icon: Layers3,
    tags: ["Account creation", "Group mapping", "Lifecycle"],
  },
  {
    number: "03",
    title: "Payments",
    description:
      "Integrate supported funding and transaction workflows.",
    detail:
      "Keep payment approval separate from trading-platform balance actions. Establish authorisation, failure handling and reconciliation rules.",
    icon: CreditCard,
    tags: ["Deposits", "Withdrawals", "Reconciliation"],
  },
  {
    number: "04",
    title: "APIs",
    description:
      "Use available interfaces to connect platform and operational systems.",
    detail:
      "Document supported endpoints, authentication, permissions, request validation, response handling and unavailable-service behaviour.",
    icon: Code2,
    tags: ["API mapping", "Authentication", "Error handling"],
  },
  {
    number: "05",
    title: "Reporting",
    description:
      "Coordinate account and operational data across connected systems.",
    detail:
      "Define reporting fields, authoritative records, status mappings and reconciliation reports for pending, completed and unresolved operations.",
    icon: BarChart3,
    tags: ["Operational reports", "Data mapping", "Audit trail"],
  },
  {
    number: "06",
    title: "Access & Audit",
    description:
      "Define privileges, ownership and change controls for integrations.",
    detail:
      "Set role-based permissions, operational ownership, credential-management practices, logging requirements and controlled change procedures.",
    icon: LockKeyhole,
    tags: ["Permissions", "Audit logs", "Change control"],
  },
];

const architectureLayers = [
  {
    number: "01",
    title: "Platform",
    subtitle: "Trading environment",
    description:
      "Trading accounts, groups and account lifecycle actions.",
    icon: Server,
  },
  {
    number: "02",
    title: "Pricing",
    subtitle: "Market data sources",
    description:
      "Pricing sources, symbol mapping and market-data dependencies.",
    icon: Activity,
  },
  {
    number: "03",
    title: "Execution",
    subtitle: "Supported connectivity",
    description:
      "Execution routing and the connectivity required by the trading setup.",
    icon: Workflow,
  },
  {
    number: "04",
    title: "Operations",
    subtitle: "Client systems & support",
    description:
      "CRM workflows, payments, reporting and operational controls.",
    icon: Database,
  },
];

const relatedResources = [
  {
    category: "PLATFORM",
    title: "MT4 vs MT5",
    description:
      "Compare the two trading platforms and understand their different capabilities.",
    href: "/resources/mt4-vs-mt5",
    icon: Layers3,
  },
  {
    category: "CONNECTIVITY",
    title: "Forex Bridge Guide",
    description:
      "Understand platform connectivity, liquidity routing and execution dependencies.",
    href: "/resources/forex-bridge-guide",
    icon: Workflow,
  },
  {
    category: "INFRASTRUCTURE",
    title: "Brokerage Technology",
    description:
      "Explore the wider technology architecture surrounding a brokerage.",
    href: "/brokerage-technology",
    icon: Server,
  },
  {
    category: "MARKET DATA",
    title: "Price Feed",
    description:
      "Explore market-data connectivity, mapping and monitoring requirements.",
    href: "/pricefeed",
    icon: Activity,
  },
];

const faqItems = [
  {
    question: "What does broker CRM integration involve?",
    answer:
      "It connects supported client-facing and back-office workflows with the trading environment. Depending on the available interfaces, the scope may include onboarding, account lifecycle actions, payments, reporting and operational status updates.",
  },
  {
    question: "Can a CRM create trading accounts automatically?",
    answer:
      "That depends on the trading platform, available APIs, permissions and the agreed workflow. The integration should define validation, account-group mapping, error handling and how uncertain results are reconciled before an operation is repeated.",
  },
  {
    question: "How should payment and balance workflows be handled?",
    answer:
      "Payment-provider approval, CRM transaction status and trading-platform balance operations should remain distinguishable steps. Define who can authorise credits or debits and how failed updates, cancellations and corrections are handled.",
  },
  {
    question: "How do you prevent duplicate account creation?",
    answer:
      "Use a stable business-operation identifier and a reconciliation procedure. If a request times out, check whether the platform already completed the operation before sending another creation request.",
  },
  {
    question: "What should be tested before launch?",
    answer:
      "Test valid and invalid account requests, duplicate delivery, unavailable connectivity, delayed responses, insufficient permissions, account-group assignment and account restrictions. Compare the final CRM record with the platform record after each scenario.",
  },
];

function SectionLabel({ children }) {
  return (
    <div className="bcri-section-label">
      <span className="bcri-label-dot" />
      {children}
    </div>
  );
}

function BrokerCRMIntegration() {
  const [activeScope, setActiveScope] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  const checklistItems = [
    "Confirm supported platform APIs and permissions",
    "Document CRM and platform ownership for each record",
    "Define account creation and lifecycle workflows",
    "Agree payment authorisation and reconciliation rules",
    "Design retry handling for uncertain outcomes",
    "Test unavailable connectivity and delayed responses",
    "Document monitoring and manual recovery procedures",
  ];

  const toggleChecklist = (index) => {
    setCheckedItems((previous) =>
      previous.includes(index)
        ? previous.filter((item) => item !== index)
        : [...previous, index]
    );
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileMenuOpen(false);
  };

  return (
    <main className="bcri-page">
      {/* ================= HERO ================= */}

      <section className="bcri-hero">
        <div className="bcri-hero-grid" />

        <div className="bcri-orb bcri-orb-one" />
        <div className="bcri-orb bcri-orb-two" />

        <div className="bcri-container bcri-hero-layout">
          <motion.div
            className="bcri-hero-content"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="bcri-eyebrow">
              <span className="bcri-eyebrow-icon">
                <Workflow size={15} />
              </span>
              BROKER TECHNOLOGY GUIDE
              <span className="bcri-eyebrow-line" />
            </div>

            <h1>
              Broker CRM Integration
              <span>for MT4 & MT5</span>
            </h1>

            <p className="bcri-hero-description">
              Connect client-facing and back-office workflows to your trading
              environment through supported APIs and controlled operational
              processes.
            </p>

            <div className="bcri-hero-actions">
              <a
                className="bcri-button bcri-button-primary"
                href="https://wa.me/358823711153?text=Hi%20TGS%2C%20I%20would%20like%20to%20discuss%20broker%20CRM%20integration."
                target="_blank"
                rel="noreferrer"
              >
                Discuss Requirements
                <ArrowUpRight size={18} />
              </a>

              <button
                className="bcri-button bcri-button-secondary"
                onClick={() => scrollTo("bcri-scope")}
              >
                Explore the Scope
                <ArrowDown size={17} />
              </button>
            </div>

            <div className="bcri-hero-meta">
              <div className="bcri-meta-icon">
                <ShieldCheck size={18} />
              </div>

              <p>
                <strong>Integration-first planning</strong>
                <span>Clear workflows. Controlled operations.</span>
              </p>
            </div>
          </motion.div>

          {/* Hero Architecture Visual */}

          <motion.div
            className="bcri-hero-visual"
            initial={{ opacity: 0, scale: 0.94, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="bcri-visual-topbar">
              <div className="bcri-window-dots">
                <span />
                <span />
                <span />
              </div>

              <span>INTEGRATION ARCHITECTURE</span>

              <Activity size={16} />
            </div>

            <div className="bcri-visual-body">
              <div className="bcri-visual-heading">
                <span className="bcri-visual-heading-icon">
                  <Workflow size={19} />
                </span>

                <div>
                  <strong>Connected Broker Stack</strong>
                  <small>Conceptual system architecture</small>
                </div>

                <span className="bcri-status">
                  <i />
                  FLOW
                </span>
              </div>

              <div className="bcri-architecture">
                <div className="bcri-architecture-node bcri-node-platform">
                  <span className="bcri-node-icon">
                    <Layers3 size={21} />
                  </span>

                  <div>
                    <strong>Trading Platform</strong>
                    <small>MT4 / MT5 environment</small>
                  </div>

                  <ArrowRight size={16} />
                </div>

                <div className="bcri-connector">
                  <span />
                  <span />
                  <span />
                  <ArrowDown size={16} />
                </div>

                <div className="bcri-architecture-node bcri-node-api">
                  <span className="bcri-node-icon">
                    <Code2 size={21} />
                  </span>

                  <div>
                    <strong>Integration Layer</strong>
                    <small>Supported APIs & mapping</small>
                  </div>

                  <Activity size={17} />
                </div>

                <div className="bcri-connector">
                  <span />
                  <span />
                  <span />
                  <ArrowDown size={16} />
                </div>

                <div className="bcri-architecture-node bcri-node-crm">
                  <span className="bcri-node-icon">
                    <Database size={21} />
                  </span>

                  <div>
                    <strong>Broker CRM</strong>
                    <small>Client & operational workflows</small>
                  </div>

                  <ShieldCheck size={17} />
                </div>
              </div>

              <div className="bcri-visual-bottom">
                <div>
                  <CheckCircle2 size={15} />
                  <span>Defined ownership</span>
                </div>

                <div>
                  <RefreshCw size={15} />
                  <span>Controlled retries</span>
                </div>

                <div>
                  <FileCheck2 size={15} />
                  <span>Reconciliation</span>
                </div>
              </div>
            </div>

            <div className="bcri-floating-card bcri-floating-card-top">
              <span>
                <Zap size={15} />
              </span>
              <div>
                <strong>Workflow Mapping</strong>
                <small>Define every operation</small>
              </div>
            </div>

            <div className="bcri-floating-card bcri-floating-card-bottom">
              <span>
                <ShieldCheck size={16} />
              </span>
              <div>
                <strong>Operational Control</strong>
                <small>Permissions & audit trail</small>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="bcri-hero-bottom-line" />
      </section>

      {/* ================= ARCHITECTURE ================= */}

      <section className="bcri-architecture-section">
        <div className="bcri-container">
          <motion.div
            className="bcri-architecture-heading"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <SectionLabel>PROJECT SCOPE</SectionLabel>

              <h2>
                One connected
                <span className="bcri-gradient-text"> broker stack.</span>
              </h2>

              <p>
                Map the data, execution and operational systems around your
                trading platform.
              </p>
            </div>

            <button
              className="bcri-text-link"
              onClick={() => scrollTo("bcri-scope")}
            >
              Explore architecture
              <ArrowDownRight size={18} />
            </button>
          </motion.div>

          <motion.div
            className="bcri-layer-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {architectureLayers.map((layer) => {
              const Icon = layer.icon;

              return (
                <motion.article
                  className="bcri-layer-card"
                  key={layer.number}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                >
                  <div className="bcri-layer-card-top">
                    <span className="bcri-layer-number">
                      {layer.number}
                    </span>

                    <Icon size={21} />
                  </div>

                  <h3>{layer.title}</h3>

                  <span className="bcri-layer-subtitle">
                    {layer.subtitle}
                  </span>

                  <p>{layer.description}</p>

                  <div className="bcri-layer-bottom">
                    <span>TECHNOLOGY LAYER</span>
                    <ArrowUpRight size={16} />
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= ON THIS PAGE ================= */}

      <section className="bcri-toc-section">
        <div className="bcri-container">
          <div className="bcri-toc">
            <div className="bcri-toc-title">
              <span className="bcri-toc-icon">
                <Menu size={18} />
              </span>

              <div>
                <strong>On this page</strong>
                <small>Explore the integration guide</small>
              </div>
            </div>

            <button onClick={() => scrollTo("bcri-scope")}>
              Integration scope
              <ArrowDown size={15} />
            </button>

            <button onClick={() => scrollTo("bcri-source-of-truth")}>
              Source of truth
              <ArrowDown size={15} />
            </button>

            <button onClick={() => scrollTo("bcri-retries")}>
              Retry handling
              <ArrowDown size={15} />
            </button>

            <button onClick={() => scrollTo("bcri-reconciliation")}>
              Reconciliation
              <ArrowDown size={15} />
            </button>

            <button onClick={() => scrollTo("bcri-testing")}>
              Acceptance testing
              <ArrowDown size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* ================= SCOPE ================= */}

      <section
        className="bcri-scope-section"
        id="bcri-scope"
      >
        <div className="bcri-container">
          <motion.div
            className="bcri-centered-heading"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants}>
              <SectionLabel>SCOPE AND DECISIONS</SectionLabel>
            </motion.div>

            <motion.h2 variants={itemVariants}>
              Plan the requirements
              <span className="bcri-gradient-text"> before integration.</span>
            </motion.h2>

            <motion.p variants={itemVariants}>
              Start by defining the workflows, interfaces and operational
              responsibilities that your CRM integration must support.
            </motion.p>
          </motion.div>

          <div className="bcri-scope-layout">
            <motion.div
              className="bcri-scope-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {scopeItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeScope === index;

                return (
                  <motion.button
                    className={`bcri-scope-item ${
                      isActive ? "is-active" : ""
                    }`}
                    key={item.number}
                    variants={itemVariants}
                    onClick={() => setActiveScope(index)}
                    aria-pressed={isActive}
                  >
                    <span className="bcri-scope-item-number">
                      {item.number}
                    </span>

                    <span className="bcri-scope-item-icon">
                      <Icon size={19} />
                    </span>

                    <span className="bcri-scope-item-text">
                      <strong>{item.title}</strong>
                      <small>{item.description}</small>
                    </span>

                    <ArrowRight
                      className="bcri-scope-arrow"
                      size={18}
                    />
                  </motion.button>
                );
              })}
            </motion.div>

            <div className="bcri-scope-detail-wrap">
              <AnimatePresence mode="wait">
                <motion.div
                  className="bcri-scope-detail"
                  key={activeScope}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  {(() => {
                    const item = scopeItems[activeScope];
                    const Icon = item.icon;

                    return (
                      <>
                        <div className="bcri-detail-top">
                          <span className="bcri-detail-icon">
                            <Icon size={25} />
                          </span>

                          <span className="bcri-detail-number">
                            SCOPE {item.number}
                          </span>
                        </div>

                        <h3>{item.title}</h3>

                        <p>{item.detail}</p>

                        <div className="bcri-detail-divider" />

                        <span className="bcri-detail-caption">
                          KEY CONSIDERATIONS
                        </span>

                        <div className="bcri-detail-tags">
                          {item.tags.map((tag) => (
                            <span key={tag}>
                              <CheckCircle2 size={14} />
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="bcri-detail-note">
                          <ShieldCheck size={19} />

                          <p>
                            <strong>Define it before development.</strong>
                            <span>
                              Document the expected behaviour, responsible
                              system and failure-handling process.
                            </span>
                          </p>
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SOURCE OF TRUTH ================= */}

      <section
        className="bcri-content-section bcri-source-section"
        id="bcri-source-of-truth"
      >
        <div className="bcri-container bcri-content-grid">
          <motion.div
            className="bcri-content-copy"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <SectionLabel>01 / RECORD OWNERSHIP</SectionLabel>

            <h2>
              Assign a source of truth
              <span className="bcri-gradient-text"> to each record.</span>
            </h2>

            <p>
              A brokerage CRM integration should define which system owns
              the customer record, trading account, account-group assignment
              and financial-operation status.
            </p>

            <p>
              The CRM and trading platform may both display a balance, but
              each permitted operation still needs an authoritative record.
            </p>

            <div className="bcri-inline-note">
              <ShieldCheck size={21} />

              <div>
                <strong>Clear ownership reduces ambiguity.</strong>
                <span>
                  Specify which system is authoritative for each action
                  and status.
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bcri-record-visual"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="bcri-record-window">
              <div className="bcri-record-window-header">
                <div className="bcri-window-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <span>RECORD OWNERSHIP MAP</span>

                <Database size={16} />
              </div>

              <div className="bcri-record-row">
                <span className="bcri-record-icon">
                  <Users size={19} />
                </span>

                <div>
                  <strong>Customer Record</strong>
                  <small>Client identity & profile</small>
                </div>

                <span className="bcri-record-badge">DEFINE</span>
              </div>

              <div className="bcri-record-row">
                <span className="bcri-record-icon">
                  <Layers3 size={19} />
                </span>

                <div>
                  <strong>Trading Account</strong>
                  <small>Account ID & lifecycle</small>
                </div>

                <span className="bcri-record-badge">DEFINE</span>
              </div>

              <div className="bcri-record-row">
                <span className="bcri-record-icon">
                  <Workflow size={19} />
                </span>

                <div>
                  <strong>Account Group</strong>
                  <small>Assignment & restrictions</small>
                </div>

                <span className="bcri-record-badge">DEFINE</span>
              </div>

              <div className="bcri-record-row">
                <span className="bcri-record-icon">
                  <CreditCard size={19} />
                </span>

                <div>
                  <strong>Financial Operation</strong>
                  <small>Approval & operation status</small>
                </div>

                <span className="bcri-record-badge">DEFINE</span>
              </div>

              <div className="bcri-record-footer">
                <CheckCircle2 size={16} />
                Each record needs an agreed owner.
              </div>
            </div>

            <div className="bcri-visual-decoration bcri-record-decoration">
              <Database size={22} />
            </div>
          </motion.div>
        </div>

        <div className="bcri-container">
          <motion.div
            className="bcri-lifecycle-strip"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="bcri-lifecycle-heading">
              <span>ACCOUNT LIFECYCLE</span>
              <small>Document each permitted state transition.</small>
            </div>

            {[
              "Request",
              "Validation",
              "Creation",
              "Activation",
              "Restriction",
              "Closure",
            ].map((step, index) => (
              <motion.div
                className="bcri-lifecycle-step"
                variants={itemVariants}
                key={step}
              >
                <span className="bcri-lifecycle-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{step}</strong>

                {index < 5 && <ArrowRight size={15} />}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= RETRIES ================= */}

      <section
        className="bcri-content-section bcri-retry-section"
        id="bcri-retries"
      >
        <div className="bcri-container bcri-content-grid bcri-reverse-grid">
          <motion.div
            className="bcri-retry-visual"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="bcri-retry-window">
              <div className="bcri-retry-window-header">
                <div>
                  <span className="bcri-window-dots">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>

                <span>OPERATION CONTROL</span>

                <RefreshCw size={17} />
              </div>

              <div className="bcri-operation-card">
                <div className="bcri-operation-icon">
                  <ClipboardCheck size={21} />
                </div>

                <div>
                  <small>BUSINESS OPERATION</small>
                  <strong>Account Creation Request</strong>
                  <span>Operation ID: CRM-OP-1042</span>
                </div>

                <span className="bcri-operation-status">
                  TRACKED
                </span>
              </div>

              <div className="bcri-operation-path">
                <div className="bcri-operation-path-step">
                  <span className="bcri-path-dot bcri-path-success">
                    <CheckCircle2 size={15} />
                  </span>

                  <div>
                    <strong>Request submitted</strong>
                    <small>Operation identifier recorded</small>
                  </div>
                </div>

                <div className="bcri-operation-path-step">
                  <span className="bcri-path-dot bcri-path-warning">
                    <CircleAlert size={15} />
                  </span>

                  <div>
                    <strong>Response timed out</strong>
                    <small>Final result not yet confirmed</small>
                  </div>
                </div>

                <div className="bcri-operation-path-step">
                  <span className="bcri-path-dot bcri-path-active">
                    <RefreshCw size={15} />
                  </span>

                  <div>
                    <strong>Check recorded result</strong>
                    <small>Reconcile before another request</small>
                  </div>
                </div>
              </div>

              <div className="bcri-retry-callout">
                <ShieldCheck size={18} />

                <p>
                  <strong>Verify before retrying.</strong>
                  <span>
                    An uncertain response is not proof of failure.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bcri-content-copy"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <SectionLabel>02 / RETRY MANAGEMENT</SectionLabel>

            <h2>
              Design for retries
              <span className="bcri-gradient-text">
                {" "}without duplicate operations.
              </span>
            </h2>

            <p>
              Repeated delivery is a normal possibility in an integration.
              Use a stable business-operation identifier and an agreed
              reconciliation method to determine whether an action was
              already performed.
            </p>

            <p>
              A retry should not create a second trading account or duplicate
              a balance operation.
            </p>

            <div className="bcri-retry-principles">
              <div>
                <span className="bcri-principle-icon">
                  <ClipboardCheck size={18} />
                </span>

                <div>
                  <strong>Track each operation</strong>
                  <p>
                    Associate requests with a stable business identifier.
                  </p>
                </div>
              </div>

              <div>
                <span className="bcri-principle-icon">
                  <RefreshCw size={18} />
                </span>

                <div>
                  <strong>Check before repeating</strong>
                  <p>
                    Verify the recorded platform result after a timeout.
                  </p>
                </div>
              </div>

              <div>
                <span className="bcri-principle-icon">
                  <Users size={18} />
                </span>

                <div>
                  <strong>Escalate uncertain outcomes</strong>
                  <p>
                    Use a review queue with an assigned owner when the
                    outcome remains uncertain.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= RECONCILIATION ================= */}

      <section
        className="bcri-reconciliation-section"
        id="bcri-reconciliation"
      >
        <div className="bcri-container">
          <motion.div
            className="bcri-centered-heading"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants}>
              <SectionLabel>03 / FINANCIAL OPERATIONS</SectionLabel>
            </motion.div>

            <motion.h2 variants={itemVariants}>
              Reconcile account and
              <span className="bcri-gradient-text"> payment workflows.</span>
            </motion.h2>

            <motion.p variants={itemVariants}>
              Keep payment-provider approval, CRM status and trading-platform
              balance actions as distinct steps.
            </motion.p>
          </motion.div>

          <motion.div
            className="bcri-payment-flow"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.article
              className="bcri-payment-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <span className="bcri-payment-number">01</span>

              <div className="bcri-payment-icon">
                <CreditCard size={23} />
              </div>

              <span className="bcri-payment-tag">PAYMENT PROVIDER</span>

              <h3>Payment approval</h3>

              <p>
                Record the provider response and the approval or failure
                status of the transaction.
              </p>

              <div className="bcri-payment-footer">
                <CheckCircle2 size={16} />
                <span>Provider outcome</span>
              </div>
            </motion.article>

            <div className="bcri-payment-connector">
              <ArrowRight size={21} />
            </div>

            <motion.article
              className="bcri-payment-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <span className="bcri-payment-number">02</span>

              <div className="bcri-payment-icon">
                <Database size={23} />
              </div>

              <span className="bcri-payment-tag">CRM SYSTEM</span>

              <h3>Transaction status</h3>

              <p>
                Maintain the operational status and track the relationship
                between the transaction and its downstream actions.
              </p>

              <div className="bcri-payment-footer">
                <CheckCircle2 size={16} />
                <span>Recorded status</span>
              </div>
            </motion.article>

            <div className="bcri-payment-connector">
              <ArrowRight size={21} />
            </div>

            <motion.article
              className="bcri-payment-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <span className="bcri-payment-number">03</span>

              <div className="bcri-payment-icon">
                <Layers3 size={23} />
              </div>

              <span className="bcri-payment-tag">TRADING PLATFORM</span>

              <h3>Balance operation</h3>

              <p>
                Apply authorised balance actions and reconcile the resulting
                platform record.
              </p>

              <div className="bcri-payment-footer">
                <CheckCircle2 size={16} />
                <span>Verified result</span>
              </div>
            </motion.article>
          </motion.div>

          <div className="bcri-reconciliation-note">
            <span>
              <ShieldCheck size={20} />
            </span>

            <p>
              <strong>Define the controls, not just the API connection.</strong>

              <small>
                Agree authorisation, cancellations, corrections, failed
                updates and a scheduled report for pending, completed, failed
                and unresolved operations.
              </small>
            </p>
          </div>
        </div>
      </section>

      {/* ================= ACCEPTANCE TESTING ================= */}

      <section
        className="bcri-testing-section"
        id="bcri-testing"
      >
        <div className="bcri-container bcri-testing-layout">
          <motion.div
            className="bcri-testing-copy"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <SectionLabel>04 / INTEGRATION READINESS</SectionLabel>

            <h2>
              Run a complete
              <span className="bcri-gradient-text">
                {" "}integration acceptance test.
              </span>
            </h2>

            <p>
              Validate account creation, duplicate delivery, unavailable
              connectivity, delayed responses and insufficient permissions.
              Compare the final CRM record with the platform record after
              every scenario.
            </p>

            <div className="bcri-testing-points">
              <div>
                <CheckCircle2 size={18} />
                <span>Test valid and invalid account requests.</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Verify group assignment and account restrictions.</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Document monitoring and manual recovery.</span>
              </div>
            </div>

            <a
              className="bcri-inline-link"
              href="https://wa.me/358823711153?text=Hi%20TGS%2C%20I%20would%20like%20to%20discuss%20CRM%20integration%20testing."
              target="_blank"
              rel="noreferrer"
            >
              Discuss integration testing
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          <motion.div
            className="bcri-checklist-panel"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="bcri-checklist-header">
              <div className="bcri-checklist-title-icon">
                <ClipboardCheck size={22} />
              </div>

              <div>
                <span>PROJECT CHECKLIST</span>
                <h3>Integration readiness</h3>
              </div>

              <span className="bcri-checklist-count">
                {checkedItems.length}/{checklistItems.length}
              </span>
            </div>

            <div className="bcri-progress-track">
              <motion.div
                className="bcri-progress-fill"
                animate={{
                  width: `${
                    (checkedItems.length / checklistItems.length) * 100
                  }%`,
                }}
                transition={{ duration: 0.35 }}
              />
            </div>

            <div className="bcri-checklist-items">
              {checklistItems.map((item, index) => {
                const checked = checkedItems.includes(index);

                return (
                  <button
                    key={item}
                    className={`bcri-checklist-item ${
                      checked ? "is-checked" : ""
                    }`}
                    onClick={() => toggleChecklist(index)}
                    aria-pressed={checked}
                  >
                    <span className="bcri-custom-checkbox">
                      {checked && <CheckCircle2 size={17} />}
                    </span>

                    <span>{item}</span>
                  </button>
                );
              })}
            </div>

            <div className="bcri-checklist-footer">
              <span>
                <Activity size={15} />
                INTERACTIVE PROJECT PLANNER
              </span>

              <button onClick={() => setCheckedItems([])}>
                Reset checklist
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= RELATED RESOURCES ================= */}

      <section className="bcri-related-section">
        <div className="bcri-container">
          <motion.div
            className="bcri-related-heading"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <SectionLabel>RELATED READING</SectionLabel>

              <h2>
                Continue with the connected
                <span className="bcri-gradient-text">
                  {" "}technology layers.
                </span>
              </h2>
            </div>

            <a
              href="/resources"
              className="bcri-text-link"
            >
              Browse all guides
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          <motion.div
            className="bcri-related-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {relatedResources.map((resource) => {
              const Icon = resource.icon;

              return (
                <motion.a
                  className="bcri-related-card"
                  href={resource.href}
                  key={resource.title}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                >
                  <div className="bcri-related-card-top">
                    <span className="bcri-related-icon">
                      <Icon size={21} />
                    </span>

                    <ArrowUpRight
                      className="bcri-related-arrow"
                      size={19}
                    />
                  </div>

                  <span className="bcri-related-category">
                    {resource.category}
                  </span>

                  <h3>{resource.title}</h3>

                  <p>{resource.description}</p>

                  <div className="bcri-related-card-footer">
                    Explore resource
                    <ArrowRight size={15} />
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= FAQ ================= */}

      <section className="bcri-faq-section">
        <div className="bcri-container bcri-faq-layout">
          <motion.div
            className="bcri-faq-intro"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <SectionLabel>COMMON QUESTIONS</SectionLabel>

            <h2>
              Broker CRM integration
              <span className="bcri-gradient-text"> explained.</span>
            </h2>

            <p>
              Understand the main decisions involved in connecting a CRM to
              a trading environment.
            </p>

            <div className="bcri-faq-contact">
              <MessageCircle size={19} />

              <div>
                <strong>Have a specific requirement?</strong>
                <span>Discuss your integration scope with TGS.</span>
              </div>

              <a
                href="https://wa.me/358823711153?text=Hi%20TGS%2C%20I%20have%20a%20question%20about%20broker%20CRM%20integration."
                target="_blank"
                rel="noreferrer"
                aria-label="Discuss CRM integration"
              >
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>

          <div className="bcri-faq-list">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  className={`bcri-faq-item ${
                    isOpen ? "is-open" : ""
                  }`}
                  key={item.question}
                >
                  <button
                    className="bcri-faq-question"
                    onClick={() =>
                      setOpenFaq(isOpen ? -1 : index)
                    }
                    aria-expanded={isOpen}
                  >
                    <span className="bcri-faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{item.question}</span>

                    <ChevronDown
                      size={19}
                      className="bcri-faq-chevron"
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="bcri-faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
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
      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="bcri-final-cta">
        <div className="bcri-cta-glow bcri-cta-glow-one" />
        <div className="bcri-cta-glow bcri-cta-glow-two" />

        <div className="bcri-container">
          <motion.div
            className="bcri-cta-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="bcri-cta-content">
              <SectionLabel>LET'S PLAN YOUR INFRASTRUCTURE</SectionLabel>

              <h2>
                Discuss your
                <span> infrastructure requirements.</span>
              </h2>

              <p>
                Share your target platform, current systems and required
                workflows with the TGS technical team.
              </p>

              <div className="bcri-cta-actions">
                <a
                  className="bcri-button bcri-button-white"
                  href="https://wa.me/358823711153?text=Hi%20TGS%2C%20I%20would%20like%20to%20discuss%20my%20broker%20CRM%20integration%20requirements."
                  target="_blank"
                  rel="noreferrer"
                >
                  Discuss Your Project
                  <ArrowUpRight size={18} />
                </a>

                <a
                  className="bcri-button bcri-button-ghost"
                  href="/resources"
                >
                  Explore Resources
                  <ArrowRight size={17} />
                </a>
              </div>

              <div className="bcri-cta-trust">
                <span>
                  <CheckCircle2 size={15} />
                  Platform requirements
                </span>

                <span>
                  <CheckCircle2 size={15} />
                  Integration scope
                </span>

                <span>
                  <CheckCircle2 size={15} />
                  Operational workflows
                </span>
              </div>
            </div>

            <div className="bcri-cta-visual">
              <div className="bcri-cta-ring bcri-cta-ring-one" />
              <div className="bcri-cta-ring bcri-cta-ring-two" />
              <div className="bcri-cta-ring bcri-cta-ring-three" />

              <div className="bcri-cta-center">
                <Workflow size={37} />
              </div>

              <span className="bcri-cta-node bcri-cta-node-one">
                <Database size={19} />
              </span>

              <span className="bcri-cta-node bcri-cta-node-two">
                <Layers3 size={19} />
              </span>

              <span className="bcri-cta-node bcri-cta-node-three">
                <ShieldCheck size={19} />
              </span>

              <span className="bcri-cta-node bcri-cta-node-four">
                <Activity size={19} />
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default BrokerCRMIntegration;