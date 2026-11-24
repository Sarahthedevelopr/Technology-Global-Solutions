import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  CheckCircle2,
  ChevronDown,
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
  Boxes,
  Cable,
  Settings2,
  Headphones,
  Building2,
} from "lucide-react";

import "./BrokerageTechnology.css";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
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

const layers = [
  {
    number: "01",
    name: "Trading Platform",
    label: "MT4 / MT5",
    category: "PLATFORM",
    icon: Layers3,
    description:
      "MT4 and MT5 form the trading environment. Platform connectivity must align with market data, execution, client systems and operational infrastructure.",
    components: [
      "MT4 / MT5 environments",
      "Trading account workflows",
      "Platform connectivity",
    ],
  },
  {
    number: "02",
    name: "Market Data",
    label: "PRICING",
    category: "DATA",
    icon: ChartNoAxesCombined,
    description:
      "The market data layer connects supported price sources, normalises instruments and coordinates symbol distribution across the relevant trading environment.",
    components: [
      "Price source connectivity",
      "Instrument normalisation",
      "Symbol distribution",
    ],
  },
  {
    number: "03",
    name: "Liquidity Bridge",
    label: "ROUTING",
    category: "EXECUTION",
    icon: GitBranch,
    description:
      "Bridge and routing integrations connect supported platform workflows with downstream execution systems using documented mappings and monitoring.",
    components: [
      "Bridge connectivity",
      "Execution routing",
      "Mapping and monitoring",
    ],
  },
  {
    number: "04",
    name: "Execution Layer",
    label: "LIQUIDITY",
    category: "EXECUTION",
    icon: Network,
    description:
      "The execution layer covers supported downstream execution endpoints and their connectivity, routing dependencies and operational requirements.",
    components: [
      "Liquidity connectivity",
      "Supported execution endpoints",
      "Operational dependencies",
    ],
  },
  {
    number: "05",
    name: "Client Operations",
    label: "CRM / API",
    category: "CLIENT",
    icon: Users,
    description:
      "CRM and API integrations coordinate onboarding, account management, payment workflows, reporting and other client-facing operational systems.",
    components: [
      "CRM and back office",
      "Onboarding and accounts",
      "API integrations",
    ],
  },
  {
    number: "06",
    name: "Runtime Operations",
    label: "INFRASTRUCTURE",
    category: "RUNTIME",
    icon: Server,
    description:
      "Hosting, networks, monitoring, access management, backup and recovery help define how the connected brokerage environment is operated.",
    components: [
      "Hosting and networks",
      "Monitoring and access",
      "Backup and recovery",
    ],
  },
];

const technologyLayers = [
  {
    number: "01",
    label: "PLATFORM",
    title: "MT4 & MT5 Platforms",
    icon: Layers3,
    description:
      "Structure white label and server environments around the broker's operating requirements.",
    tags: ["MT4", "MT5", "Trading Environment"],
  },
  {
    number: "02",
    label: "DATA",
    title: "Market Data Layer",
    icon: ChartNoAxesCombined,
    description:
      "Connect sources, normalise instruments and distribute prices consistently.",
    tags: ["Price Sources", "Symbols", "Normalisation"],
  },
  {
    number: "03",
    label: "EXECUTION",
    title: "Liquidity & Routing",
    icon: GitBranch,
    description:
      "Integrate supported bridge and execution connectivity with clear mapping and monitoring.",
    tags: ["Liquidity", "Routing", "Bridge"],
  },
  {
    number: "04",
    label: "CLIENT",
    title: "CRM & APIs",
    icon: Users,
    description:
      "Connect onboarding, payments, accounts, reporting and operational systems.",
    tags: ["CRM", "APIs", "Client Operations"],
  },
  {
    number: "05",
    label: "INFRA",
    title: "Hosting & Networks",
    icon: Server,
    description:
      "Plan runtime infrastructure, connectivity, monitoring, access and recovery.",
    tags: ["Hosting", "Monitoring", "Recovery"],
  },
  {
    number: "06",
    label: "GOVERNANCE",
    title: "Operations & Change Control",
    icon: ShieldCheck,
    description:
      "Define ownership, escalation, production access and change procedures across the full stack.",
    tags: ["Access", "Ownership", "Change Control"],
  },
];

const implementationPrinciples = [
  {
    number: "01",
    title: "Map Dependencies",
    icon: Network,
    description:
      "Document how platform, data, execution, client systems and infrastructure depend on each other.",
  },
  {
    number: "02",
    title: "Define Ownership",
    icon: ShieldCheck,
    description:
      "Make production access, monitoring, change control and escalation responsibilities explicit.",
  },
  {
    number: "03",
    title: "Validate Production Flows",
    icon: ClipboardCheck,
    description:
      "Test business-critical workflows and failure scenarios before relying on them in live operations.",
  },
];

const deliverySteps = [
  {
    number: "01",
    category: "DISCOVERY",
    title: "Requirements Mapping",
    icon: ClipboardCheck,
    description:
      "Document platform scope, instruments, integrations, connectivity, access and operational responsibilities.",
  },
  {
    number: "02",
    category: "ARCHITECTURE",
    title: "Dependency Design",
    icon: Workflow,
    description:
      "Map how platform, data, execution, CRM and infrastructure components connect before production changes begin.",
  },
  {
    number: "03",
    category: "DEPLOYMENT",
    title: "Controlled Implementation",
    icon: Settings2,
    description:
      "Configure the agreed environment with defined access, change control and rollback considerations.",
  },
  {
    number: "04",
    category: "VALIDATION",
    title: "Production Testing",
    icon: CheckCircle2,
    description:
      "Validate business-critical flows, connectivity, permissions, monitoring and recovery procedures.",
  },
  {
    number: "05",
    category: "HANDOVER",
    title: "Operational Handover",
    icon: FileCheck2,
    description:
      "Clarify ownership, escalation paths and recurring operational procedures for the live environment.",
  },
  {
    number: "06",
    category: "SUPPORT",
    title: "Ongoing Technical Support",
    icon: Headphones,
    description:
      "Support the agreed infrastructure and integration scope with controlled production changes and troubleshooting.",
  },
];

const engineeringPrinciples = [
  {
    title: "Documented Dependencies",
    icon: FileCheck2,
    description:
      "Critical interfaces are mapped so troubleshooting does not depend on guesswork.",
  },
  {
    title: "Controlled Access",
    icon: ShieldCheck,
    description:
      "Administrative privileges and production responsibilities should be explicit and limited to operational need.",
  },
  {
    title: "Monitoring & Recovery",
    icon: Activity,
    description:
      "Health checks, escalation and recovery procedures are treated as part of the architecture, not an afterthought.",
  },
];

const brokerRequirements = [
  {
    number: "01",
    title: "Platform & Product Scope",
    icon: Layers3,
    description:
      "Target platform, instruments, client groups and required broker-side workflows.",
  },
  {
    number: "02",
    title: "Existing Technology Estate",
    icon: Blocks,
    description:
      "Current CRM, payments, market data, execution, APIs and infrastructure dependencies.",
  },
  {
    number: "03",
    title: "Connectivity Requirements",
    icon: Cable,
    description:
      "Supported data, execution and third-party endpoints that must be part of the production design.",
  },
  {
    number: "04",
    title: "Operational Responsibilities",
    icon: Building2,
    description:
      "Who owns access, monitoring, incidents, changes and day-to-day platform operations.",
  },
];

const commercialLinks = [
  {
    title: "MT5 White Label Provider",
    description:
      "Explore the infrastructure scope and planning involved in MT5 broker deployment.",
    icon: Layers3,
    href: "/resources/mt5-white-label-provider",
    label: "PLATFORM",
  },
  {
    title: "MetaTrader White Label",
    description:
      "Review white label infrastructure options for brokerage operations.",
    icon: Globe2,
    href: "/mt4-white-label",
    label: "TRADING",
  },
  {
    title: "MT5 Liquidity Bridge",
    description:
      "Explore execution routing and connectivity between trading systems.",
    icon: GitBranch,
    href: "/liquidity-bridge",
    label: "EXECUTION",
  },
  {
    title: "MT5 Data Feed",
    description:
      "Understand price source connectivity and instrument distribution.",
    icon: ChartNoAxesCombined,
    href: "/mt5-market-data",
    label: "MARKET DATA",
  },
  {
    title: "Forex Broker Technology",
    description:
      "Explore the technology layers involved in brokerage operations.",
    icon: Network,
    href: "/resources/forex-broker-technology",
    label: "INFRASTRUCTURE",
  },
  {
    title: "MT5 White Label Pricing",
    description:
      "Review the technology and operational factors involved in deployment planning.",
    icon: Gauge,
    href: "/resources/mt5-white-label-pricing",
    label: "PLANNING",
  },
];

const deploymentGuides = [
  {
    title: "MT5 White Label for Forex Brokers",
    href: "/forex-brokers",
    icon: Layers3,
  },
  {
    title: "MT5 White Label for Prop Firms",
    href: "/prop-firms",
    icon: ChartNoAxesCombined,
  },
  {
    title: "MT5 Server Hosting for Brokers",
    href: "/mt5-server",
    icon: Server,
  },
  {
    title: "MT4 Server Hosting for Brokers",
    href: "/mt4-server",
    icon: Server,
  },
  {
    title: "Forex Market Data Feed for Brokers",
    href: "/mt5-market-data",
    icon: Database,
  },
  {
    title: "Forex Liquidity Bridge for MT4 & MT5",
    href: "/liquidity-bridge",
    icon: GitBranch,
  },
  {
    title: "Broker CRM Integration for MT4 & MT5",
    href: "/broker-crm",
    icon: Users,
  },
  {
    title: "How to Start an MT5 Broker",
    href: "/resources/start-forex-broker",
    icon: ClipboardCheck,
  },
];

const relatedTechnology = [
  {
    title: "MT5 White Label",
    description:
      "Branded trading infrastructure for brokerage requirements.",
    href: "/mt5-white-label",
  },
  {
    title: "Market Data Feed",
    description:
      "Price source connectivity and instrument distribution.",
    href: "/mt5-market-data",
  },
  {
    title: "Liquidity Bridge",
    description:
      "Execution connectivity and routing architecture.",
    href: "/liquidity-bridge",
  },
  {
    title: "Broker CRM",
    description:
      "Client onboarding, accounts and operational integration.",
    href: "/broker-crm",
  },
  {
    title: "Server Infrastructure",
    description:
      "Trading platform hosting and operational requirements.",
    href: "/mt5-server",
  },
  {
    title: "Prop Firm Technology",
    description:
      "Trading and challenge infrastructure for prop firms.",
    href: "/prop-firms",
  },
];

const faqs = [
  {
    question:
      "What is included in brokerage technology infrastructure?",
    answer:
      "Typical layers include a trading platform, market data, execution connectivity, CRM or client systems, hosting, monitoring and operational procedures.",
  },
  {
    question:
      "Can TGS work with an existing technology stack?",
    answer:
      "Yes. Work can begin with the current architecture and focus on integration, stability, migration or operational improvements, depending on the agreed scope.",
  },
  {
    question:
      "Do all components need to come from one provider?",
    answer:
      "No. A brokerage stack can combine multiple supported vendors and systems if interfaces, ownership and operational dependencies are clearly designed.",
  },
  {
    question:
      "Why is architecture documentation important?",
    answer:
      "Documentation makes dependencies, access, failure points and change responsibilities explicit, which helps improve operational control and troubleshooting.",
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
      className={`bt-heading ${centered ? "is-centered" : ""}`}
      variants={fadeUp}
    >
      <span className="bt-eyebrow">
        <i />
        {eyebrow}
      </span>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </motion.div>
  );
}

function ArchitectureExplorer() {
  const [activeLayer, setActiveLayer] = useState(0);

  const selected = layers[activeLayer];
  const SelectedIcon = selected.icon;

  return (
    <div className="bt-architecture">
      <div className="bt-architecture-visual">
        <div className="bt-arch-orbit bt-arch-orbit-one" />
        <div className="bt-arch-orbit bt-arch-orbit-two" />
        <div className="bt-arch-orbit bt-arch-orbit-three" />

        <div className="bt-arch-center">
          <span>
            <Network size={30} />
          </span>
          <strong>BROKERAGE</strong>
          <small>CONNECTED STACK</small>
        </div>

        {layers.map((layer, index) => {
          const Icon = layer.icon;

          return (
            <motion.button
              key={layer.number}
              type="button"
              className={`bt-arch-node bt-arch-node-${index + 1} ${
                activeLayer === index ? "is-active" : ""
              }`}
              onClick={() => setActiveLayer(index)}
              aria-pressed={activeLayer === index}
              aria-label={`Explore ${layer.name}`}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={18} />
              <span>{layer.label}</span>
            </motion.button>
          );
        })}

        <span className="bt-arch-line bt-arch-line-one" />
        <span className="bt-arch-line bt-arch-line-two" />
        <span className="bt-arch-line bt-arch-line-three" />
        <span className="bt-arch-line bt-arch-line-four" />
      </div>

      <div className="bt-architecture-detail">
        <span className="bt-detail-eyebrow">
          SELECTED LAYER / {selected.number}
        </span>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected.number}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <span className="bt-detail-icon">
              <SelectedIcon size={25} />
            </span>

            <span className="bt-layer-category">
              {selected.category}
            </span>

            <h3>{selected.name}</h3>

            <p>{selected.description}</p>

            <div className="bt-component-list">
              {selected.components.map((component) => (
                <div key={component}>
                  <CheckCircle2 size={16} />
                  <span>{component}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="bt-architecture-progress">
          {layers.map((layer, index) => (
            <button
              key={layer.number}
              type="button"
              aria-label={`Select layer ${layer.number}`}
              className={activeLayer === index ? "is-active" : ""}
              onClick={() => setActiveLayer(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FAQItem({ item, index, open, onClick }) {
  return (
    <motion.article
      className={`bt-faq-item ${open ? "is-open" : ""}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.35,
        delay: index * 0.04,
      }}
    >
      <button
        type="button"
        className="bt-faq-question"
        onClick={onClick}
        aria-expanded={open}
      >
        <span>{item.question}</span>

        <span className="bt-faq-chevron">
          <ChevronDown size={19} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="bt-faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p>{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function BrokerageTechnology() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <main className="bt-page">
      {/* =================================================
          01. HERO
      ================================================= */}

      <section className="bt-hero">
        <div className="bt-hero-grid" />
        <div className="bt-hero-glow bt-glow-one" />
        <div className="bt-hero-glow bt-glow-two" />

        <div className="bt-container bt-hero-layout">
          <motion.div
            className="bt-hero-copy"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.span
              className="bt-eyebrow"
              variants={fadeUp}
            >
              <i />
              BROKERAGE TECHNOLOGY / INFRASTRUCTURE
            </motion.span>

            <motion.h1 variants={fadeUp}>
              Brokerage Technology Infrastructure,{" "}
              <span>End to End.</span>
            </motion.h1>

            <motion.p variants={fadeUp}>
              Connect the major technical layers of a brokerage —
              platform, market data, execution connectivity, client
              operations and infrastructure — into one documented
              operating architecture.
            </motion.p>

            <motion.div
              className="bt-hero-actions"
              variants={fadeUp}
            >
              <a
                href="/contact"
                className="bt-btn bt-btn-primary"
              >
                Discuss Your Project
                <ArrowUpRight size={18} />
              </a>

              <a
                href="#bt-architecture"
                className="bt-btn bt-btn-secondary"
              >
                Explore Architecture
                <ArrowRight size={17} />
              </a>
            </motion.div>

            <motion.div
              className="bt-hero-trust"
              variants={fadeUp}
            >
              <div>
                <CheckCircle2 size={17} />
                <span>Documented Architecture</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Modular Infrastructure</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Defined Operations</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Brokerage-specific hero illustration */}

          <motion.div
            className="bt-hero-visual"
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bt-hero-halo" />

            <div className="bt-dashboard">
              <div className="bt-dashboard-top">
                <div className="bt-window-dots">
                  <i />
                  <i />
                  <i />
                </div>

                <span>Brokerage Infrastructure</span>

                <span className="bt-dashboard-status">
                  <i />
                  SYSTEM MAP
                </span>
              </div>

              <div className="bt-dashboard-heading">
                <div>
                  <span>TECHNOLOGY OVERVIEW</span>
                  <h3>Connected Ecosystem</h3>
                </div>

                <span className="bt-dashboard-heading-icon">
                  <Network size={22} />
                </span>
              </div>

              <div className="bt-dashboard-metrics">
                <div>
                  <span>PLATFORM</span>
                  <strong>MT4 / MT5</strong>
                  <small>Trading layer</small>
                </div>

                <div>
                  <span>MARKET DATA</span>
                  <strong>PRICING</strong>
                  <small>Data layer</small>
                </div>

                <div>
                  <span>OPERATIONS</span>
                  <strong>CRM / API</strong>
                  <small>Client layer</small>
                </div>
              </div>

              <div className="bt-dashboard-stack">
                <div className="bt-stack-connector" />

                <div className="bt-stack-item">
                  <span className="bt-stack-item-icon">
                    <Layers3 size={18} />
                  </span>

                  <div>
                    <strong>Trading Platform</strong>
                    <small>MT4 / MT5 environment</small>
                  </div>

                  <CheckCircle2 size={17} />
                </div>

                <div className="bt-stack-item">
                  <span className="bt-stack-item-icon">
                    <ChartNoAxesCombined size={18} />
                  </span>

                  <div>
                    <strong>Data & Execution</strong>
                    <small>Pricing / Bridge / Liquidity</small>
                  </div>

                  <CheckCircle2 size={17} />
                </div>

                <div className="bt-stack-item">
                  <span className="bt-stack-item-icon">
                    <Users size={18} />
                  </span>

                  <div>
                    <strong>Client Operations</strong>
                    <small>CRM / APIs / Back Office</small>
                  </div>

                  <CheckCircle2 size={17} />
                </div>

                <div className="bt-stack-item">
                  <span className="bt-stack-item-icon">
                    <Server size={18} />
                  </span>

                  <div>
                    <strong>Runtime Infrastructure</strong>
                    <small>Hosting / Monitoring / Recovery</small>
                  </div>

                  <CheckCircle2 size={17} />
                </div>
              </div>

              <div className="bt-dashboard-footer">
                <span>
                  <Activity size={15} />
                  CONNECTED ARCHITECTURE
                </span>

                <span>Illustrative system map</span>
              </div>
            </div>

            <motion.div
              className="bt-float-card bt-float-card-one"
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
                <small>Defined ownership</small>
              </div>
            </motion.div>

            <motion.div
              className="bt-float-card bt-float-card-two"
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
                <strong>Connected Layers</strong>
                <small>Documented dependencies</small>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="bt-hero-bottom">
          <div className="bt-container bt-hero-bottom-inner">
            <span>THE BROKERAGE TECHNOLOGY STACK</span>
            <div>MT4 / MT5</div>
            <div>MARKET DATA</div>
            <div>LIQUIDITY</div>
            <div>CRM / APIs</div>
            <div>INFRASTRUCTURE</div>
          </div>
        </div>
      </section>

      {/* =================================================
          02. INTRODUCTION / PAGE FOCUS
      ================================================= */}

      <section className="bt-section bt-intro-section">
        <div className="bt-container bt-intro-layout">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="BROKERAGE TECHNOLOGY"
              title="One brokerage stack. Six connected layers."
              description="This page brings the major technology components together into an umbrella architecture. Explore the individual product pages for detailed platform, data, execution and client-operations requirements."
            />

            <a
              href="#bt-architecture"
              className="bt-text-link"
            >
              Explore the architecture
              <ArrowRight size={17} />
            </a>
          </motion.div>

          <motion.div
            className="bt-intro-panel"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="bt-intro-panel-top">
              <span className="bt-intro-icon">
                <Workflow size={25} />
              </span>

              <span className="bt-status-pill">
                <i />
                ARCHITECTURE FOCUS
              </span>
            </div>

            <h3>Design the connections, not just the products.</h3>

            <p>
              Technology choices become more reliable when dependencies,
              interfaces and operational ownership are designed up front.
            </p>

            <div className="bt-intro-checks">
              <span>
                <CheckCircle2 size={16} />
                Connected technology layers
              </span>

              <span>
                <CheckCircle2 size={16} />
                Defined implementation scope
              </span>

              <span>
                <CheckCircle2 size={16} />
                Clear operational responsibilities
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =================================================
          03. INTERACTIVE ARCHITECTURE
      ================================================= */}

      <section
        className="bt-section bt-architecture-section"
        id="bt-architecture"
      >
        <div className="bt-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="INTERACTIVE INFRASTRUCTURE MAP"
              title="Explore how the brokerage stack connects."
              description="Select any layer in the architecture map to explore its purpose and principal components."
              centered
            />
          </motion.div>

          <ArchitectureExplorer />

          <div className="bt-architecture-note">
            <ShieldCheck size={18} />

            <p>
              The final architecture depends on the selected platforms,
              supported vendor interfaces, connectivity requirements and
              agreed operational scope.
            </p>
          </div>
        </div>
      </section>

      {/* =================================================
          04. TECHNOLOGY ARCHITECTURE
      ================================================= */}

      <section className="bt-section bt-layers-section">
        <div className="bt-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="ARCHITECTURE COMPONENTS"
              title="Build each layer for a clear operating purpose."
              description="Each component has a distinct responsibility. The integration design defines how the individual layers work together."
            />
          </motion.div>

          <motion.div
            className="bt-layers-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {technologyLayers.map((layer) => {
              const Icon = layer.icon;

              return (
                <motion.article
                  className="bt-layer-card"
                  key={layer.number}
                  variants={fadeUp}
                  whileHover={{ y: -7 }}
                >
                  <div className="bt-layer-card-top">
                    <span>{layer.number}</span>
                    <Icon size={22} />
                  </div>

                  <span className="bt-layer-label">
                    {layer.label}
                  </span>

                  <h3>{layer.title}</h3>

                  <p>{layer.description}</p>

                  <div className="bt-layer-tags">
                    {layer.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =================================================
          05. IMPLEMENTATION PRINCIPLES
      ================================================= */}

      <section className="bt-section bt-principles-section">
        <div className="bt-container bt-principles-layout">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="IMPLEMENTATION PRINCIPLES"
              title="Design the interfaces, not only the products."
              description="A clear integration plan establishes the dependencies, responsibilities and validation requirements before production changes begin."
            />

            <a href="/contact" className="bt-text-link">
              Discuss your architecture
              <ArrowRight size={17} />
            </a>
          </motion.div>

          <motion.div
            className="bt-principles-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {implementationPrinciples.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="bt-principle-row"
                  key={item.number}
                  variants={fadeUp}
                >
                  <span className="bt-principle-number">
                    {item.number}
                  </span>

                  <span className="bt-principle-icon">
                    <Icon size={21} />
                  </span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <ArrowUpRight
                    className="bt-principle-arrow"
                    size={18}
                  />
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =================================================
          06. DELIVERY FRAMEWORK
      ================================================= */}

      <section className="bt-section bt-delivery-section">
        <div className="bt-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="DELIVERY FRAMEWORK"
              title="From requirements to controlled production deployment."
              description="Infrastructure work is structured around explicit scope, dependencies, validation and operational ownership."
            />
          </motion.div>

          <div className="bt-delivery-timeline">
            <div className="bt-timeline-line" />

            {deliverySteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  className={`bt-delivery-step ${
                    index % 2 === 0 ? "step-left" : "step-right"
                  }`}
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 25,
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
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                >
                  <span className="bt-timeline-marker">
                    <Icon size={19} />
                  </span>

                  <div className="bt-delivery-card">
                    <div className="bt-delivery-card-top">
                      <span>{step.number}</span>
                      <span>{step.category}</span>
                    </div>

                    <h3>{step.title}</h3>

                    <p>{step.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================
          07. ENGINEERING PRINCIPLES
      ================================================= */}

      <section className="bt-section bt-engineering-section">
        <div className="bt-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="ENGINEERING PRINCIPLES"
              title="Designed for operational clarity."
              description="Monitoring, documentation and access responsibilities are part of the infrastructure design—not afterthoughts."
              centered
            />
          </motion.div>

          <motion.div
            className="bt-engineering-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {engineeringPrinciples.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="bt-engineering-card"
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                >
                  <span className="bt-engineering-icon">
                    <Icon size={23} />
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <span className="bt-engineering-bottom">
                    <CheckCircle2 size={16} />
                    OPERATIONAL PRINCIPLE
                  </span>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =================================================
          08. BEFORE DEPLOYMENT
      ================================================= */}

      <section className="bt-section bt-requirements-section">
        <div className="bt-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="BEFORE DEPLOYMENT"
              title="What we need from the broker."
              description="A useful discovery process begins with the existing technology environment and the required operating model."
              centered
            />
          </motion.div>

          <motion.div
            className="bt-requirements-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {brokerRequirements.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="bt-requirement-card"
                  key={item.number}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                >
                  <div className="bt-requirement-top">
                    <span>{item.number}</span>
                    <Icon size={22} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =================================================
          09. COMMERCIAL TECHNOLOGY LINKS
      ================================================= */}

      <section className="bt-section bt-commercial-section">
        <div className="bt-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="EXPLORE TECHNOLOGY OPTIONS"
              title="Explore MT5 and brokerage infrastructure."
              description="Continue to the specialist pages for the individual platform, data, execution and infrastructure components."
            />
          </motion.div>

          <motion.div
            className="bt-commercial-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {commercialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <motion.a
                  className="bt-commercial-card"
                  href={item.href}
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                >
                  <div className="bt-commercial-card-top">
                    <span className="bt-commercial-icon">
                      <Icon size={21} />
                    </span>

                    <span className="bt-commercial-label">
                      {item.label}
                    </span>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <span className="bt-commercial-link">
                    Explore Details
                    <ArrowUpRight size={17} />
                  </span>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =================================================
          10. DEPLOYMENT GUIDES
      ================================================= */}

      <section className="bt-section bt-guides-section">
        <div className="bt-container">
          <div className="bt-guides-heading">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <SectionHeading
                eyebrow="DEPLOYMENT GUIDES"
                title="Broker technology knowledge base."
                description="Explore specialist guides related to brokerage platforms, connectivity, hosting and integrations."
              />
            </motion.div>

            <a href="/contact" className="bt-text-link">
              Talk to our team
              <ArrowRight size={17} />
            </a>
          </div>

          <motion.div
            className="bt-guides-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {deploymentGuides.map((guide, index) => {
              const Icon = guide.icon;

              return (
                <motion.a
                  href={guide.href}
                  className="bt-guide-item"
                  key={guide.title}
                  variants={fadeUp}
                  whileHover={{ x: 5 }}
                >
                  <span className="bt-guide-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="bt-guide-icon">
                    <Icon size={18} />
                  </span>

                  <span className="bt-guide-title">
                    {guide.title}
                  </span>

                  <ArrowUpRight
                    className="bt-guide-arrow"
                    size={17}
                  />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =================================================
          11. FAQ
      ================================================= */}

      <section className="bt-section bt-faq-section">
        <div className="bt-container bt-faq-layout">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="FREQUENTLY ASKED QUESTIONS"
              title="Common brokerage technology questions."
              description="Understand the main infrastructure components and the considerations behind integration planning."
            />

            <div className="bt-faq-contact">
              <span>
                <Headphones size={21} />
              </span>

              <div>
                <strong>Need to discuss your setup?</strong>

                <p>
                  Share your existing technology stack and target
                  requirements.
                </p>

                <a href="/contact">
                  Discuss Your Project
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="bt-faq-list">
            {faqs.map((item, index) => (
              <FAQItem
                key={item.question}
                item={item}
                index={index}
                open={activeFaq === index}
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

      {/* =================================================
          12. RELATED INFRASTRUCTURE
      ================================================= */}

      <section className="bt-section bt-related-section">
        <div className="bt-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="RELATED INFRASTRUCTURE"
              title="Explore the connected technology ecosystem."
              description="Move from the overall brokerage architecture to the specific components you need to evaluate."
            />
          </motion.div>

          <motion.div
            className="bt-related-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {relatedTechnology.map((item) => (
              <motion.a
                href={item.href}
                className="bt-related-card"
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -5 }}
              >
                <span className="bt-related-icon">
                  <Boxes size={21} />
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <span className="bt-related-action">
                  Explore Technology
                  <ArrowRight size={16} />
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =================================================
          13. FINAL CTA
      ================================================= */}

      <section className="bt-final-cta">
        <div className="bt-cta-grid" />

        <div className="bt-container bt-cta-layout">
          <motion.div
            className="bt-cta-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <span className="bt-eyebrow">
              <i />
              TECHNOLOGY GLOBAL SOLUTIONS
            </span>

            <h2>
              Build the next layer of your{" "}
              <span>brokerage infrastructure.</span>
            </h2>

            <p>
              Review the target platform, data, connectivity, CRM and
              hosting scope, then define the next technical steps with
              a clear architecture and implementation plan.
            </p>

            <div className="bt-hero-actions">
              <a
                href="/contact"
                className="bt-btn bt-btn-primary"
              >
                Discuss Your Infrastructure
                <ArrowUpRight size={18} />
              </a>

              <a
                href="/broker-crm"
                className="bt-btn bt-btn-secondary"
              >
                Explore Broker CRM
                <ArrowRight size={17} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="bt-cta-visual"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="bt-cta-ring bt-cta-ring-one" />
            <div className="bt-cta-ring bt-cta-ring-two" />

            <div className="bt-cta-core">
              <Network size={36} />
              <strong>TGS</strong>
              <small>CONNECTED SYSTEMS</small>
            </div>

            <span className="bt-cta-node bt-cta-node-one">
              <Layers3 size={19} />
            </span>

            <span className="bt-cta-node bt-cta-node-two">
              <Database size={19} />
            </span>

            <span className="bt-cta-node bt-cta-node-three">
              <Server size={19} />
            </span>
          </motion.div>
        </div>
      </section>

    </main>
  );
}