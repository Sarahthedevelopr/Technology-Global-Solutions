import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Activity,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  ClipboardCheck,
  Cloud,
  Code2,
  Database,
  FileCheck2,
  GitBranch,
  Layers3,
  LockKeyhole,
  Network,
  RefreshCw,
  Rocket,
  Server,
  Settings2,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

import "./StartForexBroker.css";

const WHATSAPP_URL =
  "https://wa.me/358823711153?text=" +
  encodeURIComponent(
    "Hi TGS team, I would like to discuss the technology requirements for starting a forex brokerage."
  );

const TELEGRAM_URL = "https://t.me/whitelabelmetatraderfx";

const requirements = [
  {
    number: "01",
    title: "Define the Operating Model",
    subtitle: "Business requirements",
    description:
      "Clarify target clients, instruments, jurisdictions, platform scope and internal responsibilities before selecting the technology stack.",
    icon: Settings2,
    tags: [
      "Target clients",
      "Trading instruments",
      "Jurisdictions",
      "Operating responsibilities",
    ],
  },
  {
    number: "02",
    title: "Select the Platform Layer",
    subtitle: "Trading environment",
    description:
      "Choose a trading-platform environment based on current availability, required integrations and long-term business requirements.",
    icon: Layers3,
    tags: [
      "MT4 / MT5",
      "Platform scope",
      "Integrations",
      "Future requirements",
    ],
  },
  {
    number: "03",
    title: "Plan Market Data",
    subtitle: "Pricing and symbols",
    description:
      "Identify the required instruments, market-data permissions, symbol normalization and fallback requirements.",
    icon: BarChart3,
    tags: [
      "Symbol mapping",
      "Pricing sources",
      "Data permissions",
      "Fallback planning",
    ],
  },
  {
    number: "04",
    title: "Define Execution Connectivity",
    subtitle: "Liquidity and routing",
    description:
      "Map the supported liquidity connections, bridge requirements and routing arrangements around the intended operating model.",
    icon: GitBranch,
    tags: [
      "Liquidity connectivity",
      "Bridge integration",
      "Routing requirements",
      "Execution testing",
    ],
  },
  {
    number: "05",
    title: "Connect Client Systems",
    subtitle: "CRM and workflows",
    description:
      "Plan CRM, onboarding, payment, reporting and account-management workflows so that client operations connect to the trading environment.",
    icon: Workflow,
    tags: [
      "Broker CRM",
      "Client onboarding",
      "Payments",
      "Reporting",
    ],
  },
  {
    number: "06",
    title: "Prepare Production Operations",
    subtitle: "Deployment and support",
    description:
      "Define hosting, monitoring, access control, backups, change management and escalation responsibilities before production.",
    icon: Server,
    tags: [
      "Hosting",
      "Monitoring",
      "Access control",
      "Backups and escalation",
    ],
  },
];

const architectureLayers = [
  {
    number: "01",
    title: "Trading Platform",
    subtitle: "The trading environment",
    description:
      "Establish the intended platform arrangement and the trading workflows it must support.",
    icon: Layers3,
    status: "PLATFORM",
  },
  {
    number: "02",
    title: "Market Data",
    subtitle: "Pricing and instruments",
    description:
      "Define instrument availability, data sources, symbol mapping and fallback behavior.",
    icon: Database,
    status: "PRICING",
  },
  {
    number: "03",
    title: "Execution Layer",
    subtitle: "Liquidity and routing",
    description:
      "Map supported connectivity and validate the execution paths required by the operating model.",
    icon: Network,
    status: "EXECUTION",
  },
  {
    number: "04",
    title: "Client Operations",
    subtitle: "CRM and back office",
    description:
      "Connect account workflows, client onboarding, reporting and operational responsibilities.",
    icon: Workflow,
    status: "OPERATIONS",
  },
];

const launchStages = [
  {
    number: "01",
    title: "Define",
    description: "Operating model and requirements",
  },
  {
    number: "02",
    title: "Configure",
    description: "Platform and technology layers",
  },
  {
    number: "03",
    title: "Integrate",
    description: "Data, execution and client systems",
  },
  {
    number: "04",
    title: "Validate",
    description: "Critical workflows and failure cases",
  },
  {
    number: "05",
    title: "Prepare",
    description: "Monitoring and operational ownership",
  },
];

const initialChecklist = [
  "Operating model and product scope documented",
  "Platform requirements and integrations identified",
  "Market-data sources and symbols mapped",
  "Execution connectivity requirements defined",
  "CRM and client workflows documented",
  "Monitoring, backups and escalation planned",
  "Production test scenarios agreed",
];

const readinessItems = [
  {
    icon: ClipboardCheck,
    title: "Business readiness",
    description:
      "Define the intended operating model and obtain the professional advice required for the markets in which the business will operate.",
    points: [
      "Target clients and product scope",
      "Intended operating jurisdictions",
      "Internal responsibilities",
    ],
  },
  {
    icon: Server,
    title: "Technology readiness",
    description:
      "Translate approved business requirements into platform, instrument, account and client-operation requirements.",
    points: [
      "Platform and integrations",
      "Data and execution dependencies",
      "Production access and monitoring",
    ],
  },
];

const productionTests = [
  {
    title: "Account provisioning",
    description:
      "Verify account creation and the related client-management workflows.",
    icon: UsersIcon,
  },
  {
    title: "Pricing and symbols",
    description:
      "Check instrument mapping, quote availability and unavailable-price scenarios.",
    icon: Activity,
  },
  {
    title: "Trading requests",
    description:
      "Validate the expected execution path and supported trading workflows.",
    icon: GitBranch,
  },
  {
    title: "Balance actions",
    description:
      "Test approved balance-related workflows and their operational controls.",
    icon: RefreshCw,
  },
  {
    title: "Reports and reconciliation",
    description:
      "Confirm that reporting outputs can be checked and reconciled.",
    icon: FileCheck2,
  },
  {
    title: "Operational recovery",
    description:
      "Review monitoring, backup, escalation and failed-integration procedures.",
    icon: ShieldCheck,
  },
];

function UsersIcon(props) {
  return <Workflow {...props} />;
}

const faqs = [
  {
    question: "What should be selected first when starting a forex broker?",
    answer:
      "Start with the operating model and target product scope. Platform, market data, execution and integrations should follow from those requirements.",
  },
  {
    question: "Is a trading platform enough to launch a broker?",
    answer:
      "No. A production brokerage typically also needs market data, connectivity, client systems, infrastructure and operational procedures.",
  },
  {
    question: "How early should integrations be planned?",
    answer:
      "Plan integrations before deployment. CRM, payments, reporting, market data and execution dependencies can materially affect platform and infrastructure design.",
  },
  {
    question: "What should be tested before launch?",
    answer:
      "Validate account workflows, pricing, execution paths, permissions, monitoring, backups and operational escalation procedures before relying on them in live operations.",
  },
];

const relatedResources = [
  {
    category: "PLATFORM",
    title: "MT4 vs MT5",
    description:
      "Compare trading-platform environments before defining your platform scope.",
    icon: Layers3,
    href: "/resources/mt4-vs-mt5",
  },
  {
    category: "INFRASTRUCTURE",
    title: "Forex Liquidity Bridge",
    description:
      "Understand execution connectivity, routing and integration dependencies.",
    icon: Network,
    href: "/resources/forex-liquidity-bridge",
  },
  {
    category: "CLIENT SYSTEMS",
    title: "Broker CRM Integration",
    description:
      "Plan client-facing and back-office workflows around your trading platform.",
    icon: Workflow,
    href: "/resources/crm-integration-guide",
  },
  {
    category: "PRICING",
    title: "MT5 White Label Pricing",
    description:
      "Review the platform and operating requirements behind a white-label setup.",
    icon: BarChart3,
    href: "/resources/mt5-white-label-pricing",
  },
];

const pageLinks = [
  { label: "Launch requirements", id: "launch-requirements" },
  { label: "Business vs technology", id: "readiness" },
  { label: "Initial release", id: "initial-scope" },
  { label: "Dependencies", id: "dependencies" },
  { label: "Ownership", id: "ownership" },
  { label: "Production testing", id: "production-testing" },
  { label: "FAQs", id: "faqs" },
];

function SectionLabel({ children }) {
  return (
    <div className="sfb-section-label">
      <span className="sfb-label-dot" />
      {children}
    </div>
  );
}

function PrimaryButton({ href = WHATSAPP_URL, children }) {
  return (
    <a
      className="sfb-button sfb-button-primary"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <ArrowUpRight size={17} />
    </a>
  );
}

function SecondaryButton({ href = "#launch-requirements", children }) {
  return (
    <a className="sfb-button sfb-button-secondary" href={href}>
      {children}
      <ArrowDown size={17} />
    </a>
  );
}

function ArchitectureVisual() {
  return (
    <motion.div
      className="sfb-architecture-visual"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="sfb-architecture-topbar">
        <div className="sfb-window-dots">
          <span />
          <span />
          <span />
        </div>

        <span>FOREX BROKER TECHNOLOGY STACK</span>

        <Activity size={17} />
      </div>

      <div className="sfb-architecture-body">
        <div className="sfb-architecture-intro">
          <div className="sfb-intro-icon">
            <Network size={22} />
          </div>

          <div>
            <strong>Connected Broker Environment</strong>
            <span>Conceptual launch architecture</span>
          </div>

          <span className="sfb-live-badge">
            <i />
            PLANNING
          </span>
        </div>

        <div className="sfb-architecture-stack">
          {architectureLayers.map((layer, index) => {
            const Icon = layer.icon;

            return (
              <div key={layer.number}>
                <motion.div
                  className={`sfb-stack-node ${
                    index === 2 ? "sfb-stack-node-highlight" : ""
                  }`}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.35 + index * 0.13,
                  }}
                >
                  <div className="sfb-stack-icon">
                    <Icon size={20} />
                  </div>

                  <div className="sfb-stack-copy">
                    <strong>{layer.title}</strong>
                    <span>{layer.subtitle}</span>
                  </div>

                  <span className="sfb-stack-status">{layer.status}</span>

                  <ArrowRight className="sfb-stack-arrow" size={17} />
                </motion.div>

                {index !== architectureLayers.length - 1 && (
                  <div className="sfb-stack-connector">
                    <span />
                    <span />
                    <span />
                    <ArrowDown size={15} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="sfb-architecture-footer">
          <span>
            <CheckCircle2 size={15} />
            Defined dependencies
          </span>

          <span>
            <RefreshCw size={15} />
            Controlled workflows
          </span>

          <span>
            <ShieldCheck size={15} />
            Operational ownership
          </span>
        </div>
      </div>

      <motion.div
        className="sfb-floating-card sfb-floating-card-top"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="sfb-floating-icon">
          <Zap size={17} />
        </span>

        <div>
          <strong>Execution planning</strong>
          <small>Connectivity requirements</small>
        </div>
      </motion.div>

      <motion.div
        className="sfb-floating-card sfb-floating-card-bottom"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="sfb-floating-icon">
          <ShieldCheck size={17} />
        </span>

        <div>
          <strong>Production readiness</strong>
          <small>Monitoring and controls</small>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="sfb-hero">
      <div className="sfb-hero-grid" />
      <div className="sfb-hero-orb sfb-hero-orb-one" />
      <div className="sfb-hero-orb sfb-hero-orb-two" />

      <div className="sfb-container sfb-hero-layout">
        <motion.div
          className="sfb-hero-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="sfb-eyebrow">
            <span className="sfb-eyebrow-icon">
              <Rocket size={17} />
            </span>

            <span>BROKER LAUNCH GUIDE</span>
            <i />
          </div>

          <h1>
            How to Start a
            <br />
            <span>Forex Broker</span>
            <br />
            <span className="sfb-heading-last">
              Technology Checklist
            </span>
          </h1>

          <p className="sfb-hero-description">
            A brokerage launch is not a single software purchase. Connect
            platform, data, execution, client systems, infrastructure and
            operations before production launch.
          </p>

          <div className="sfb-hero-actions">
            <PrimaryButton>Discuss Requirements</PrimaryButton>
            <SecondaryButton>Explore the Scope</SecondaryButton>
          </div>

          <div className="sfb-hero-trust">
            <span className="sfb-trust-icon">
              <ShieldCheck size={20} />
            </span>

            <div>
              <strong>Technology-first launch planning</strong>
              <span>
                Defined dependencies. Controlled workflows. Clear ownership.
              </span>
            </div>
          </div>
        </motion.div>

        <ArchitectureVisual />
      </div>

      <div className="sfb-hero-bottom-line" />
    </section>
  );
}

function LaunchRequirements() {
  const [activeRequirement, setActiveRequirement] = useState(0);
  const selected = requirements[activeRequirement];
  const SelectedIcon = selected.icon;

  return (
    <section className="sfb-requirements-section" id="launch-requirements">
      <div className="sfb-container">
        <motion.div
          className="sfb-section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionLabel>Scope and decisions</SectionLabel>

          <h2>
            Plan the requirements for
            <span className="sfb-gradient-text"> your brokerage</span>
          </h2>

          <p>
            Work through the six technology decisions that shape your
            brokerage launch. Select a requirement to explore its scope.
          </p>
        </motion.div>

        <div className="sfb-requirements-layout">
          <div className="sfb-requirements-list">
            {requirements.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeRequirement === index;

              return (
                <motion.button
                  type="button"
                  key={item.number}
                  className={`sfb-requirement-item ${
                    isActive ? "is-active" : ""
                  }`}
                  onClick={() => setActiveRequirement(index)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="sfb-requirement-number">
                    {item.number}
                  </span>

                  <span className="sfb-requirement-icon">
                    <Icon size={20} />
                  </span>

                  <span className="sfb-requirement-copy">
                    <strong>{item.title}</strong>
                    <small>{item.subtitle}</small>
                  </span>

                  <ArrowRight
                    size={17}
                    className="sfb-requirement-arrow"
                  />
                </motion.button>
              );
            })}
          </div>

          <div className="sfb-requirement-detail-wrap">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.number}
                className="sfb-requirement-detail"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <div className="sfb-detail-top">
                  <span className="sfb-detail-icon">
                    <SelectedIcon size={25} />
                  </span>

                  <span className="sfb-detail-index">
                    REQUIREMENT {selected.number}
                  </span>
                </div>

                <h3>{selected.title}</h3>

                <p>{selected.description}</p>

                <div className="sfb-detail-divider" />

                <span className="sfb-detail-caption">
                  KEY CONSIDERATIONS
                </span>

                <div className="sfb-detail-tags">
                  {selected.tags.map((tag) => (
                    <span key={tag}>
                      <Check size={14} />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="sfb-detail-note">
                  <CircleHelp size={19} />

                  <p>
                    <strong>Planning principle</strong>
                    <span>
                      Define the requirement and its dependencies before
                      treating it as ready for production.
                    </span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReadinessSection() {
  return (
    <section className="sfb-readiness-section" id="readiness">
      <div className="sfb-container">
        <div className="sfb-two-column">
          <motion.div
            className="sfb-content-copy"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionLabel>Before deployment</SectionLabel>

            <h2>
              Separate business readiness from
              <span className="sfb-gradient-text">
                {" "}
                technology readiness
              </span>
            </h2>

            <p>
              Define the intended operating model and obtain the professional
              advice required for the markets in which the business will
              operate.
            </p>

            <p>
              The technical stack does not itself establish permission to
              offer brokerage services. Translate approved business
              requirements into platform, instrument, account and
              client-operation requirements.
            </p>

            <div className="sfb-inline-note">
              <ShieldCheck size={21} />

              <div>
                <strong>Keep responsibilities explicit</strong>
                <span>
                  Technical implementation and legal or regulatory advice
                  are separate responsibilities.
                </span>
              </div>
            </div>
          </motion.div>

          <div className="sfb-readiness-cards">
            {readinessItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="sfb-readiness-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="sfb-card-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>
                        <CheckCircle2 size={16} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function InitialScopeSection() {
  const [checkedItems, setCheckedItems] = useState([]);

  const toggleItem = (item) => {
    setCheckedItems((current) =>
      current.includes(item)
        ? current.filter((entry) => entry !== item)
        : [...current, item]
    );
  };

  const progress = Math.round(
    (checkedItems.length / initialChecklist.length) * 100
  );

  return (
    <section className="sfb-initial-section" id="initial-scope">
      <div className="sfb-container">
        <div className="sfb-two-column sfb-initial-layout">
          <motion.div
            className="sfb-content-copy"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionLabel>Release planning</SectionLabel>

            <h2>
              Release a
              <span className="sfb-gradient-text">
                {" "}
                controlled initial scope
              </span>
            </h2>

            <p>
              Choose representative instruments and client workflows for
              the first release. Validate the essential workflows before
              expanding the technology scope.
            </p>

            <p>
              Test account provisioning, quotes, trading requests, approved
              balance actions and reconciled reports. Record how the team
              will respond to an unavailable price source or failed
              integration.
            </p>

            <div className="sfb-release-principles">
              <div>
                <span>
                  <CheckCircle2 size={19} />
                </span>

                <p>
                  <strong>Test the essential flows</strong>
                  <small>
                    Prioritize representative instruments and client
                    workflows.
                  </small>
                </p>
              </div>

              <div>
                <span>
                  <RefreshCw size={19} />
                </span>

                <p>
                  <strong>Plan failure responses</strong>
                  <small>
                    Define what happens when a price source or integration
                    becomes unavailable.
                  </small>
                </p>
              </div>

              <div>
                <span>
                  <Rocket size={19} />
                </span>

                <p>
                  <strong>Separate future enhancements</strong>
                  <small>
                    Keep optional features from becoming assumed launch
                    dependencies.
                  </small>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="sfb-checklist-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="sfb-checklist-header">
              <div className="sfb-checklist-header-icon">
                <ClipboardCheck size={22} />
              </div>

              <div>
                <span>LAUNCH PLANNING</span>
                <h3>Technology readiness checklist</h3>
              </div>
            </div>

            <div className="sfb-checklist-progress">
              <div>
                <span>Planning progress</span>
                <strong>{progress}%</strong>
              </div>

              <div className="sfb-progress-track">
                <motion.div
                  className="sfb-progress-fill"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.35 }}
                />
              </div>
            </div>

            <div className="sfb-checklist-items">
              {initialChecklist.map((item) => {
                const isChecked = checkedItems.includes(item);

                return (
                  <button
                    key={item}
                    type="button"
                    className={`sfb-checklist-item ${
                      isChecked ? "is-checked" : ""
                    }`}
                    onClick={() => toggleItem(item)}
                  >
                    <span className="sfb-checkbox">
                      {isChecked && <Check size={14} />}
                    </span>

                    <span>{item}</span>
                  </button>
                );
              })}
            </div>

            <div className="sfb-checklist-footer">
              <ShieldCheck size={17} />

              <span>
                Interactive planning aid — not a certification of launch
                readiness.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DependencySection() {
  return (
    <section className="sfb-dependency-section" id="dependencies">
      <div className="sfb-container">
        <motion.div
          className="sfb-section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionLabel>Connected architecture</SectionLabel>

          <h2>
            Map the
            <span className="sfb-gradient-text"> dependencies</span>
          </h2>

          <p>
            Document how platform, market data, execution, client systems
            and infrastructure depend on each other.
          </p>
        </motion.div>

        <div className="sfb-dependency-board">
          <div className="sfb-dependency-board-header">
            <div>
              <span>TECHNOLOGY BLUEPRINT</span>
              <h3>One connected broker stack</h3>
            </div>

            <span className="sfb-blueprint-icon">
              <Network size={21} />
            </span>
          </div>

          <div className="sfb-dependency-grid">
            {architectureLayers.map((layer, index) => {
              const Icon = layer.icon;

              return (
                <motion.div
                  className="sfb-dependency-card"
                  key={layer.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="sfb-dependency-card-top">
                    <span>{layer.number}</span>
                    <Icon size={21} />
                  </div>

                  <h4>{layer.title}</h4>
                  <p>{layer.description}</p>

                  <span className="sfb-dependency-status">
                    <CheckCircle2 size={13} />
                    Dependency to map
                  </span>
                </motion.div>
              );
            })}
          </div>

          <div className="sfb-dependency-bottom">
            <span>
              <GitBranch size={16} />
              Map system relationships
            </span>

            <ArrowRight size={18} />

            <span>
              <ClipboardCheck size={16} />
              Define acceptance conditions
            </span>

            <ArrowRight size={18} />

            <span>
              <ShieldCheck size={16} />
              Validate production flows
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function OwnershipSection() {
  const ownershipItems = [
    {
      icon: LockKeyhole,
      title: "Production access",
      description:
        "Make access permissions and production responsibilities explicit.",
    },
    {
      icon: Activity,
      title: "Monitoring",
      description:
        "Define how important technology dependencies and failures are monitored.",
    },
    {
      icon: RefreshCw,
      title: "Change control",
      description:
        "Agree how production changes are reviewed, communicated and managed.",
    },
    {
      icon: ShieldCheck,
      title: "Escalation",
      description:
        "Document who responds when a critical workflow or dependency fails.",
    },
  ];

  return (
    <section className="sfb-ownership-section" id="ownership">
      <div className="sfb-container">
        <div className="sfb-two-column sfb-ownership-layout">
          <motion.div
            className="sfb-content-copy"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionLabel>Production operations</SectionLabel>

            <h2>
              Define
              <span className="sfb-gradient-text">
                {" "}
                ownership before launch
              </span>
            </h2>

            <p>
              Make production access, monitoring, change control and
              escalation responsibilities explicit.
            </p>

            <p>
              Assign an owner to each critical dependency and define an
              acceptance condition so the team knows what must be verified
              before relying on a workflow in production.
            </p>

            <a className="sfb-inline-link" href="#production-testing">
              Explore production validation
              <ArrowRight size={17} />
            </a>
          </motion.div>

          <div className="sfb-ownership-grid">
            {ownershipItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  className="sfb-ownership-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <span className="sfb-ownership-icon">
                    <Icon size={20} />
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductionTestingSection() {
  return (
    <section
      className="sfb-production-section"
      id="production-testing"
    >
      <div className="sfb-container">
        <div className="sfb-two-column sfb-production-layout">
          <motion.div
            className="sfb-content-copy"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionLabel>Pre-production validation</SectionLabel>

            <h2>
              Validate
              <span className="sfb-gradient-text">
                {" "}
                production flows
              </span>
            </h2>

            <p>
              Test business-critical workflows and failure scenarios before
              relying on them in live operations.
            </p>

            <p>
              The exact acceptance criteria should be defined for your
              platform, supported integrations and operating model.
            </p>

            <div className="sfb-validation-banner">
              <span>
                <ShieldCheck size={22} />
              </span>

              <div>
                <strong>Test before relying on production</strong>
                <small>
                  Include normal workflows and relevant failure scenarios
                  in the release plan.
                </small>
              </div>
            </div>
          </motion.div>

          <div className="sfb-test-grid">
            {productionTests.map((test, index) => {
              const Icon = test.icon;

              return (
                <motion.article
                  className="sfb-test-card"
                  key={test.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="sfb-test-icon">
                    <Icon size={20} />
                  </div>

                  <h3>{test.title}</h3>
                  <p>{test.description}</p>

                  <div className="sfb-test-status">
                    <CheckCircle2 size={14} />
                    <span>Validation point</span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="sfb-launch-timeline">
          <div className="sfb-timeline-heading">
            <span>IMPLEMENTATION FLOW</span>
            <strong>From requirements to production</strong>
          </div>

          <div className="sfb-timeline-steps">
            {launchStages.map((stage, index) => (
              <div className="sfb-timeline-step" key={stage.number}>
                <div className="sfb-timeline-node">
                  {stage.number}
                </div>

                <div>
                  <strong>{stage.title}</strong>
                  <small>{stage.description}</small>
                </div>

                {index !== launchStages.length - 1 && (
                  <ArrowRight
                    className="sfb-timeline-arrow"
                    size={16}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="sfb-faq-section" id="faqs">
      <div className="sfb-container sfb-faq-layout">
        <motion.div
          className="sfb-faq-intro"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <SectionLabel>Questions</SectionLabel>

          <h2>
            Questions about
            <span className="sfb-gradient-text">
              {" "}
              starting a forex broker
            </span>
          </h2>

          <p>
            Review the main technology considerations before planning a
            brokerage launch.
          </p>

          <div className="sfb-faq-help-card">
            <span>
              <CircleHelp size={21} />
            </span>

            <div>
              <strong>Need to discuss your scope?</strong>
              <small>
                Share your platform, systems and workflow requirements.
              </small>

              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Discuss your requirements
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="sfb-faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.article
                className={`sfb-faq-item ${isOpen ? "is-open" : ""}`}
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <button
                  type="button"
                  className="sfb-faq-question"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                >
                  <span className="sfb-faq-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{faq.question}</strong>

                  <span className="sfb-faq-chevron">
                    <ChevronDown size={18} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="sfb-faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RelatedResources() {
  return (
    <section className="sfb-related-section">
      <div className="sfb-container">
        <div className="sfb-related-heading">
          <div>
            <SectionLabel>Related reading</SectionLabel>

            <h2>
              Continue with the
              <span className="sfb-gradient-text">
                {" "}
                connected technology layers
              </span>
            </h2>
          </div>

          <a href="/resources" className="sfb-related-all">
            Browse all guides
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="sfb-related-grid">
          {relatedResources.map((resource, index) => {
            const Icon = resource.icon;

            return (
              <motion.a
                href={resource.href}
                key={resource.title}
                className="sfb-related-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div className="sfb-related-card-top">
                  <span className="sfb-related-icon">
                    <Icon size={21} />
                  </span>

                  <ArrowUpRight
                    className="sfb-related-arrow"
                    size={19}
                  />
                </div>

                <span className="sfb-related-category">
                  {resource.category}
                </span>

                <h3>{resource.title}</h3>

                <p>{resource.description}</p>

                <span className="sfb-related-link">
                  Read guide
                  <ArrowRight size={15} />
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="sfb-final-cta">
      <div className="sfb-cta-orb sfb-cta-orb-one" />
      <div className="sfb-cta-orb sfb-cta-orb-two" />

      <div className="sfb-container sfb-cta-layout">
        <motion.div
          className="sfb-cta-copy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionLabel>Discuss your project</SectionLabel>

          <h2>
            Discuss your
            <br />
            infrastructure requirements
          </h2>

          <p>
            Share your target platform, current systems and required
            workflows with the TGS technical team.
          </p>

          <div className="sfb-cta-actions">
            <PrimaryButton>Discuss Your Project</PrimaryButton>

            <a
              className="sfb-cta-secondary"
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
            >
              Contact on Telegram
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="sfb-cta-visual"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="sfb-cta-visual-top">
            <span>
              <Network size={20} />
            </span>

            <div>
              <strong>Connected technology stack</strong>
              <small>Plan the dependencies before deployment</small>
            </div>
          </div>

          <div className="sfb-cta-visual-list">
            <div>
              <Layers3 size={18} />
              <span>Trading platform</span>
              <CheckCircle2 size={16} />
            </div>

            <div>
              <Database size={18} />
              <span>Market data</span>
              <CheckCircle2 size={16} />
            </div>

            <div>
              <GitBranch size={18} />
              <span>Execution connectivity</span>
              <CheckCircle2 size={16} />
            </div>

            <div>
              <Workflow size={18} />
              <span>Client operations</span>
              <CheckCircle2 size={16} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function StartForexBroker() {
  return (
    <main className="sfb-page">
      <Hero />

      <div className="sfb-page-navigation">
        <div className="sfb-container sfb-page-navigation-inner">
          <div className="sfb-page-navigation-title">
            <span className="sfb-page-navigation-icon">
              <Layers3 size={18} />
            </span>

            <div>
              <strong>On this page</strong>
              <small>Explore the launch requirements</small>
            </div>
          </div>

          <nav aria-label="Page sections">
            {pageLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`}>
                {link.label}
                <ArrowDownRight size={13} />
              </a>
            ))}
          </nav>
        </div>
      </div>

      <LaunchRequirements />

      <ReadinessSection />

      <InitialScopeSection />

      <DependencySection />

      <OwnershipSection />

      <ProductionTestingSection />

      <FAQSection />

      <RelatedResources />

      <FinalCTA />
    </main>
  );
}