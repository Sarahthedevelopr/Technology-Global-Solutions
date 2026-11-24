import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Database,
  Layers3,
  Network,
  Workflow,
  Server,
  ShieldCheck,
  Activity,
  Settings2,
  Users,
  ChartNoAxesCombined,
  Cable,
  Boxes,
  RefreshCw,
  ClipboardCheck,
  Search,
  Gauge,
  Headphones,
  LockKeyhole,
  GitBranch,
  Building2,
  Radio,
  FileCheck2,
  CircleHelp,
  Zap,
  MoveRight,
} from "lucide-react";

import "./ForexBrokerTechnology.css";

const architectureLayers = [
  {
    number: "01",
    title: "Trading Platform",
    shortTitle: "Platform",
    subtitle: "MT4 / MT5",
    description:
      "MT4 or MT5 provides the trading environment and broker-side workflows. It connects to pricing, execution, client systems and operational infrastructure.",
    details: [
      "Trading environment selection",
      "Platform configuration and integrations",
      "Broker-side workflow requirements",
      "Platform connectivity planning",
    ],
    icon: Layers3,
    color: "violet",
  },
  {
    number: "02",
    title: "Market Data",
    shortTitle: "Pricing",
    subtitle: "Market Data",
    description:
      "Connect supported pricing sources and plan how instruments, symbols and market data are normalized and distributed across the trading environment.",
    details: [
      "Pricing source connectivity",
      "Instrument and symbol mapping",
      "Data normalization",
      "Distribution requirements",
    ],
    icon: Database,
    color: "pink",
  },
  {
    number: "03",
    title: "Liquidity Bridge",
    shortTitle: "Routing",
    subtitle: "Bridge Connectivity",
    description:
      "The bridge layer connects supported systems and routes trading requests according to the agreed execution architecture.",
    details: [
      "Platform connectivity",
      "Execution routing requirements",
      "Instrument mapping",
      "Connectivity monitoring",
    ],
    icon: Network,
    color: "blue",
  },
  {
    number: "04",
    title: "Execution Connectivity",
    shortTitle: "Execution",
    subtitle: "Liquidity",
    description:
      "Plan the supported downstream execution endpoints and liquidity connectivity required by the broker's operating model.",
    details: [
      "Liquidity connectivity",
      "Supported execution endpoints",
      "Routing dependencies",
      "Execution-path validation",
    ],
    icon: Cable,
    color: "cyan",
  },
  {
    number: "05",
    title: "CRM & Client Systems",
    shortTitle: "Client Ops",
    subtitle: "CRM / APIs",
    description:
      "Connect client onboarding, account management, payments, reporting and support workflows with the wider brokerage technology stack.",
    details: [
      "Client onboarding workflows",
      "Account management",
      "Payments and reporting",
      "CRM and API integrations",
    ],
    icon: Users,
    color: "orange",
  },
  {
    number: "06",
    title: "Infrastructure & Operations",
    shortTitle: "Runtime",
    subtitle: "Hosting & Operations",
    description:
      "Plan hosting, network connectivity, monitoring, backups, access controls, recovery and the responsibilities required to operate production systems.",
    details: [
      "Hosting and network planning",
      "Monitoring and alerting",
      "Access and change control",
      "Backup and recovery procedures",
    ],
    icon: Server,
    color: "green",
  },
];

const scopeCards = [
  {
    number: "01",
    title: "Trading Platform",
    description:
      "Use MT4 or MT5 as the trading layer around the broker's target client and product model.",
    icon: Layers3,
    points: ["Platform scope", "Trading environment", "Broker workflows"],
  },
  {
    number: "02",
    title: "Market Data",
    description:
      "Connect and normalize supported pricing sources for the required instruments.",
    icon: Database,
    points: ["Pricing sources", "Symbol mapping", "Data distribution"],
  },
  {
    number: "03",
    title: "Execution Connectivity",
    description:
      "Integrate supported bridge and downstream execution systems where required.",
    icon: Network,
    points: ["Bridge connectivity", "Execution routing", "Liquidity mapping"],
  },
  {
    number: "04",
    title: "CRM & Back Office",
    description:
      "Connect onboarding, accounts, payments, reporting and support workflows.",
    icon: Users,
    points: ["Client onboarding", "Account workflows", "APIs and reporting"],
  },
  {
    number: "05",
    title: "Hosting & Network",
    description:
      "Plan compute, connectivity, monitoring, backups and access controls.",
    icon: Server,
    points: ["Hosting environment", "Network connectivity", "System monitoring"],
  },
  {
    number: "06",
    title: "Operations",
    description:
      "Define ownership, escalation, change control and production support.",
    icon: Settings2,
    points: ["Access ownership", "Incident escalation", "Change management"],
  },
];

const deliveryStages = [
  {
    number: "01",
    title: "Requirements Mapping",
    label: "DISCOVERY",
    description:
      "Document platform scope, instruments, integrations, connectivity, access and operational responsibilities.",
    icon: Search,
    deliverable: "A documented requirements baseline",
  },
  {
    number: "02",
    title: "Dependency Design",
    label: "ARCHITECTURE",
    description:
      "Map how platform, data, execution, CRM and infrastructure components connect before production changes begin.",
    icon: GitBranch,
    deliverable: "A connected technology architecture",
  },
  {
    number: "03",
    title: "Controlled Implementation",
    label: "DEPLOYMENT",
    description:
      "Configure the agreed environment with defined access, change control and rollback considerations.",
    icon: Boxes,
    deliverable: "An implementation plan and configured scope",
  },
  {
    number: "04",
    title: "Production Testing",
    label: "VALIDATION",
    description:
      "Validate business-critical flows, connectivity, permissions, monitoring and recovery procedures.",
    icon: ClipboardCheck,
    deliverable: "Validated workflows and test results",
  },
  {
    number: "05",
    title: "Operational Handover",
    label: "HANDOVER",
    description:
      "Clarify ownership, escalation paths and recurring operational procedures for the live environment.",
    icon: FileCheck2,
    deliverable: "Documented ownership and procedures",
  },
  {
    number: "06",
    title: "Ongoing Technical Support",
    label: "SUPPORT",
    description:
      "Support agreed infrastructure and integration scope with controlled production changes and troubleshooting.",
    icon: Headphones,
    deliverable: "An agreed support and escalation process",
  },
];

const engineeringPrinciples = [
  {
    title: "Documented Dependencies",
    description:
      "Critical interfaces are mapped so troubleshooting does not depend on guesswork.",
    icon: Network,
  },
  {
    title: "Controlled Access",
    description:
      "Administrative privileges and production responsibilities should be explicit and limited to operational need.",
    icon: LockKeyhole,
  },
  {
    title: "Monitoring & Recovery",
    description:
      "Health checks, escalation and recovery procedures are treated as part of the architecture, not an afterthought.",
    icon: Activity,
  },
];

const brokerRequirements = [
  {
    title: "Platform & Product Scope",
    description:
      "Target platform, instruments, client groups and required broker-side workflows.",
    icon: Layers3,
  },
  {
    title: "Existing Technology Estate",
    description:
      "Current CRM, payments, market data, execution, APIs and infrastructure dependencies.",
    icon: Building2,
  },
  {
    title: "Connectivity Requirements",
    description:
      "Supported data, execution and third-party endpoints that must be part of the production design.",
    icon: Radio,
  },
  {
    title: "Operational Responsibilities",
    description:
      "Who owns access, monitoring, incidents, changes and day-to-day platform operations.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "What technology does a forex broker need?",
    answer:
      "Typical layers include a trading platform, market data, execution connectivity, CRM or client systems, hosting and operational controls. The exact scope depends on the broker's operating model, instruments, integrations and production requirements.",
  },
  {
    question: "Can the stack use multiple vendors?",
    answer:
      "Yes. Different supported systems can be combined if interfaces and operational ownership are clearly designed. Their dependencies should be mapped before implementation so integration and support responsibilities are understood.",
  },
  {
    question: "Can an existing broker stack be upgraded?",
    answer:
      "Yes. Work can focus on integration, migration, stability, monitoring or operational improvements. Individual layers may be changed in stages, provided dependencies and operational risks are mapped first.",
  },
  {
    question: "How should the stack be planned?",
    answer:
      "Start from the broker's operating model and map dependencies before selecting or changing individual systems. Review platform, data, execution, client systems, hosting and operational responsibilities together.",
  },
  {
    question: "How do MT4 and MT5 fit into broker technology?",
    answer:
      "MT4 or MT5 is the trading platform layer. It connects to pricing, execution, client systems and infrastructure around it. Platform selection should be evaluated alongside the wider technology requirements.",
  },
  {
    question: "Why design the whole stack before deployment?",
    answer:
      "Dependencies between platform, data, execution, CRM and hosting can create operational issues if they are selected independently. Architecture planning helps identify integration gaps, clarify responsibilities and prepare production validation.",
  },
];

const relatedResources = [
  {
    title: "MT5 White Label",
    description:
      "Explore core MT5 white-label infrastructure and deployment scope.",
    icon: Layers3,
    href: "/mt5-white-label",
    tag: "PLATFORM",
  },
  {
    title: "MT5 Server",
    description:
      "Understand runtime architecture, monitoring and operational continuity.",
    icon: Server,
    href: "/mt5-server",
    tag: "INFRASTRUCTURE",
  },
  {
    title: "Market Data Feed",
    description:
      "Review source connectivity, normalization and distribution.",
    icon: Database,
    href: "/pricefeed",
    tag: "MARKET DATA",
  },
  {
    title: "Liquidity Bridge",
    description:
      "Explore execution connectivity, routing and mapping.",
    icon: Network,
    href: "/liquidity-bridge",
    tag: "EXECUTION",
  },
  {
    title: "Broker CRM",
    description:
      "Connect client operations, accounts, APIs and workflows.",
    icon: Users,
    href: "/broker-crm",
    tag: "CLIENT SYSTEMS",
  },
  {
    title: "Brokerage Technology",
    description:
      "Explore end-to-end architecture across the entire stack.",
    icon: Workflow,
    href: "/brokerage-technology",
    tag: "ARCHITECTURE",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
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

function SectionHeading({ eyebrow, title, highlight, description, light = false }) {
  return (
    <motion.div
      className={`fbt-section-heading ${light ? "fbt-heading-light" : ""}`}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className="fbt-eyebrow">
        <span className="fbt-eyebrow-dot" />
        {eyebrow}
      </span>

      <h2>
        {title} <span>{highlight}</span>
      </h2>

      {description && <p>{description}</p>}
    </motion.div>
  );
}

function ArchitectureMap({ selectedLayer, onSelectLayer }) {
  return (
    <div className="fbt-architecture">
      <div className="fbt-architecture-top">
        <div>
          <span className="fbt-mini-label">INTERACTIVE INFRASTRUCTURE MAP</span>
          <h3>One brokerage stack. Six connected layers.</h3>
          <p>Select a layer to explore its role in the architecture.</p>
        </div>

        <div className="fbt-architecture-status">
          <span className="fbt-status-pulse" />
          CONNECTED ARCHITECTURE
        </div>
      </div>

      <div className="fbt-map-layout">
        <div className="fbt-map-nodes">
          <div className="fbt-map-connection" aria-hidden="true" />

          {architectureLayers.map((layer, index) => {
            const Icon = layer.icon;
            const active = selectedLayer === index;

            return (
              <motion.button
                type="button"
                key={layer.number}
                className={`fbt-map-node fbt-color-${layer.color} ${
                  active ? "is-active" : ""
                }`}
                onClick={() => onSelectLayer(index)}
                whileHover={{ y: -3, scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                aria-pressed={active}
              >
                <span className="fbt-map-node-number">{layer.number}</span>

                <span className="fbt-map-node-icon">
                  <Icon size={21} strokeWidth={1.8} />
                </span>

                <span className="fbt-map-node-copy">
                  <strong>{layer.shortTitle}</strong>
                  <small>{layer.subtitle}</small>
                </span>

                <ChevronRight
                  className="fbt-map-node-arrow"
                  size={17}
                />
              </motion.button>
            );
          })}
        </div>

        <div className="fbt-map-detail-wrap">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedLayer}
              className={`fbt-map-detail fbt-color-${architectureLayers[selectedLayer].color}`}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.25 }}
            >
              {(() => {
                const layer = architectureLayers[selectedLayer];
                const Icon = layer.icon;

                return (
                  <>
                    <div className="fbt-detail-top">
                      <span className="fbt-detail-icon">
                        <Icon size={25} />
                      </span>

                      <span className="fbt-detail-index">
                        LAYER / {layer.number}
                      </span>
                    </div>

                    <span className="fbt-mini-label">SELECTED LAYER</span>

                    <h4>{layer.title}</h4>

                    <p>{layer.description}</p>

                    <div className="fbt-detail-checklist">
                      {layer.details.map((detail) => (
                        <div key={detail}>
                          <CheckCircle2 size={16} />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>

                    <div className="fbt-detail-status-grid">
                      <div>
                        <span>Architecture</span>
                        <strong>Connected stack</strong>
                      </div>
                      <div>
                        <span>Deployment</span>
                        <strong>Controlled scope</strong>
                      </div>
                      <div>
                        <span>Operations</span>
                        <strong>Defined ownership</strong>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="fbt-map-footer">
        <span>
          <Activity size={15} />
          PLATFORM + DATA + EXECUTION + CLIENT SYSTEMS
        </span>

        <span>01—06 / TECHNOLOGY LAYERS</span>
      </div>
    </div>
  );
}

function ResourceCard({ resource, index }) {
  const Icon = resource.icon;

  return (
    <motion.a
      href={resource.href}
      className="fbt-related-card"
      variants={reveal}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22 }}
    >
      <div className="fbt-related-card-top">
        <span className="fbt-related-icon">
          <Icon size={22} strokeWidth={1.8} />
        </span>

        <span className="fbt-related-index">
          0{index + 1}
        </span>
      </div>

      <span className="fbt-related-tag">{resource.tag}</span>

      <h3>{resource.title}</h3>

      <p>{resource.description}</p>

      <span className="fbt-related-link">
        Explore solution
        <ArrowUpRight size={17} />
      </span>
    </motion.a>
  );
}

export default function ForexBrokerTechnology() {
  const [selectedLayer, setSelectedLayer] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="fbt-page">
      {/* HERO */}
      <section className="fbt-hero">
        <div className="fbt-hero-grid" aria-hidden="true" />
        <div className="fbt-hero-glow fbt-hero-glow-one" aria-hidden="true" />
        <div className="fbt-hero-glow fbt-hero-glow-two" aria-hidden="true" />

        <div className="fbt-container fbt-hero-layout">
          <motion.div
            className="fbt-hero-copy"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span className="fbt-eyebrow">
              <span className="fbt-eyebrow-dot" />
              FOREX BROKER TECHNOLOGY
            </span>

            <h1>
              Forex Broker
              <span> Technology Stack.</span>
            </h1>

            <p>
              Connect the major technology layers behind a forex brokerage
              into one operating architecture: platform, market data,
              execution connectivity, client systems and infrastructure.
            </p>

            <div className="fbt-hero-actions">
              <a
                className="fbt-button fbt-button-primary"
                href="https://wa.me/358823711153?text=Hello%20TGS%2C%20I%20would%20like%20to%20discuss%20forex%20broker%20technology%20requirements."
                target="_blank"
                rel="noreferrer"
              >
                Discuss requirements
                <ArrowUpRight size={18} />
              </a>

              <a
                className="fbt-button fbt-button-secondary"
                href="#fbt-infrastructure"
              >
                Explore infrastructure
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="fbt-hero-proof">
              <span>
                <CheckCircle2 size={16} />
                Connected architecture
              </span>

              <span>
                <CheckCircle2 size={16} />
                Defined dependencies
              </span>

              <span>
                <CheckCircle2 size={16} />
                Operational clarity
              </span>
            </div>
          </motion.div>

          {/* HERO VISUAL */}
          <motion.div
            className="fbt-hero-visual"
            initial={{ opacity: 0, scale: 0.94, x: 18 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <div className="fbt-hero-orbit fbt-hero-orbit-one" />
            <div className="fbt-hero-orbit fbt-hero-orbit-two" />

            <div className="fbt-hero-dashboard">
              <div className="fbt-dashboard-top">
                <div className="fbt-window-dots">
                  <i />
                  <i />
                  <i />
                </div>

                <span>TECHNOLOGY ARCHITECTURE</span>

                <span className="fbt-dashboard-live">
                  <i />
                  LIVE MODEL
                </span>
              </div>

              <div className="fbt-dashboard-heading">
                <div>
                  <span className="fbt-mini-label">BROKERAGE INFRASTRUCTURE</span>
                  <h2>Connected by design.</h2>
                  <p>Six layers. One operating architecture.</p>
                </div>

                <span className="fbt-dashboard-heading-icon">
                  <Workflow size={24} />
                </span>
              </div>

              <div className="fbt-dashboard-stack">
                {architectureLayers.map((layer, index) => {
                  const Icon = layer.icon;

                  return (
                    <motion.button
                      type="button"
                      key={layer.number}
                      className={`fbt-stack-row fbt-color-${layer.color} ${
                        selectedLayer === index ? "is-active" : ""
                      }`}
                      onClick={() => {
                        setSelectedLayer(index);

                        document
                          .getElementById("fbt-infrastructure")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      whileHover={{ x: 4 }}
                    >
                      <span className="fbt-stack-number">
                        {layer.number}
                      </span>

                      <span className="fbt-stack-icon">
                        <Icon size={17} />
                      </span>

                      <span className="fbt-stack-copy">
                        <strong>{layer.shortTitle}</strong>
                        <small>{layer.subtitle}</small>
                      </span>

                      <CheckCircle2 size={16} className="fbt-stack-check" />
                    </motion.button>
                  );
                })}
              </div>

              <div className="fbt-dashboard-bottom">
                <span>
                  <ShieldCheck size={15} />
                  DEPENDENCIES MAPPED
                </span>

                <span>ARCHITECTURE / 01</span>
              </div>
            </div>

            <motion.div
              className="fbt-floating-card fbt-floating-card-one"
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="fbt-floating-icon">
                <Network size={19} />
              </span>

              <div>
                <strong>Connected systems</strong>
                <small>Mapped dependencies</small>
              </div>
            </motion.div>

            <motion.div
              className="fbt-floating-card fbt-floating-card-two"
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="fbt-floating-icon">
                <Activity size={19} />
              </span>

              <div>
                <strong>Production readiness</strong>
                <small>Monitoring & recovery</small>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="fbt-container fbt-hero-bottom">
          <span>PLATFORM</span>
          <MoveRight size={16} />
          <span>MARKET DATA</span>
          <MoveRight size={16} />
          <span>EXECUTION</span>
          <MoveRight size={16} />
          <span>CLIENT SYSTEMS</span>
          <MoveRight size={16} />
          <span>INFRASTRUCTURE</span>
        </div>
      </section>

      {/* INTERACTIVE ARCHITECTURE */}
      <section className="fbt-section fbt-architecture-section" id="fbt-infrastructure">
        <div className="fbt-container">
          <SectionHeading
            eyebrow="INTERACTIVE INFRASTRUCTURE MAP"
            title="One brokerage stack."
            highlight="Six connected layers."
            description="Select a layer to see how the technology fits into the production architecture."
          />

          <ArchitectureMap
            selectedLayer={selectedLayer}
            onSelectLayer={setSelectedLayer}
          />
        </div>
      </section>

      {/* TECHNOLOGY ENTITIES */}
      <section className="fbt-section fbt-entities-section">
        <div className="fbt-container">
          <SectionHeading
            eyebrow="TECHNOLOGY ENTITIES"
            title="How the pieces fit into"
            highlight="your technology stack."
            description="Explore the technology categories that shape a connected brokerage environment."
          />

          <motion.div
            className="fbt-entity-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {[
              {
                title: "Trading Platforms",
                description: "MT4, MT5 and the trading environment.",
                icon: Layers3,
                number: "01",
              },
              {
                title: "Market Data",
                description:
                  "Pricing sources, price feeds, symbol mapping and normalization.",
                icon: Database,
                number: "02",
              },
              {
                title: "Execution",
                description:
                  "Liquidity bridges, connectivity, routing and supported endpoints.",
                icon: Cable,
                number: "03",
              },
              {
                title: "Client Systems",
                description:
                  "Broker CRM, back office, APIs and client onboarding.",
                icon: Users,
                number: "04",
              },
              {
                title: "Infrastructure",
                description:
                  "Hosting, monitoring, backup, recovery and network connectivity.",
                icon: Server,
                number: "05",
              },
              {
                title: "Operations",
                description:
                  "Access control, change control, support and incident response.",
                icon: Settings2,
                number: "06",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="fbt-entity-card"
                  key={item.number}
                  variants={reveal}
                  whileHover={{ y: -5 }}
                >
                  <div className="fbt-entity-card-top">
                    <span className="fbt-entity-icon">
                      <Icon size={22} />
                    </span>

                    <span className="fbt-entity-number">{item.number}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <span className="fbt-entity-line" />
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* COMMERCIAL SCOPE */}
      <section className="fbt-section fbt-scope-section">
        <div className="fbt-container">
          <div className="fbt-scope-intro">
            <div>
              <span className="fbt-eyebrow">
                <span className="fbt-eyebrow-dot" />
                COMMERCIAL SCOPE
              </span>

              <h2>
                Evaluate the full
                <span> brokerage environment.</span>
              </h2>
            </div>

            <p>
              Each technology layer can affect implementation, operations
              and long-term scalability. Plan the components together before
              committing to a production architecture.
            </p>
          </div>

          <motion.div
            className="fbt-scope-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {scopeCards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.article
                  className="fbt-scope-card"
                  key={card.number}
                  variants={reveal}
                  whileHover={{ y: -6 }}
                >
                  <div className="fbt-scope-card-top">
                    <span className="fbt-scope-icon">
                      <Icon size={23} />
                    </span>

                    <span>{card.number}</span>
                  </div>

                  <h3>{card.title}</h3>
                  <p>{card.description}</p>

                  <div className="fbt-scope-points">
                    {card.points.map((point) => (
                      <span key={point}>
                        <CheckCircle2 size={15} />
                        {point}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* RELATED INFRASTRUCTURE */}
      <section className="fbt-section fbt-related-section">
        <div className="fbt-container">
          <SectionHeading
            eyebrow="RELATED INFRASTRUCTURE"
            title="Continue through the"
            highlight="brokerage technology stack."
            description="Explore individual infrastructure components and understand how they fit into the wider architecture."
          />

          <motion.div
            className="fbt-related-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {relatedResources.map((resource, index) => (
              <ResourceCard
                key={resource.title}
                resource={resource}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* PLANNING CTA */}
      <section className="fbt-planning-section">
        <div className="fbt-container fbt-planning-layout">
          <motion.div
            className="fbt-planning-copy"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="fbt-eyebrow">
              <span className="fbt-eyebrow-dot" />
              PLANNING
            </span>

            <h2>
              Define scope
              <span> before deployment.</span>
            </h2>

            <p>
              Commercial and technical decisions should be mapped together
              so infrastructure, integrations and operating responsibilities
              are clear before production launch.
            </p>

            <a
              className="fbt-button fbt-button-primary"
              href="https://wa.me/358823711153?text=Hello%20TGS%2C%20I%20would%20like%20to%20discuss%20my%20brokerage%20technology%20scope."
              target="_blank"
              rel="noreferrer"
            >
              Discuss your requirements
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          <motion.div
            className="fbt-planning-visual"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="fbt-planning-visual-head">
              <span>
                <Gauge size={17} />
                SCOPE CONTROL
              </span>

              <span className="fbt-planning-status">
                <i />
                IN FOCUS
              </span>
            </div>

            {[
              ["01", "Technology requirements", "Defined scope"],
              ["02", "System dependencies", "Mapped interfaces"],
              ["03", "Operational ownership", "Assigned responsibilities"],
              ["04", "Production validation", "Tested workflows"],
            ].map(([number, title, status]) => (
              <div className="fbt-planning-row" key={number}>
                <span className="fbt-planning-row-number">{number}</span>

                <div>
                  <strong>{title}</strong>
                  <small>{status}</small>
                </div>

                <CheckCircle2 size={18} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DELIVERY FRAMEWORK */}
      <section className="fbt-section fbt-delivery-section">
        <div className="fbt-container">
          <SectionHeading
            eyebrow="DELIVERY FRAMEWORK"
            title="From requirements to"
            highlight="controlled production deployment."
            description="Infrastructure work is structured around explicit scope, dependencies, validation and operational ownership."
          />

          <div className="fbt-delivery-timeline">
            <div className="fbt-timeline-line" aria-hidden="true" />

            {deliveryStages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <motion.article
                  key={stage.number}
                  className={`fbt-delivery-card ${
                    index % 2 === 0 ? "fbt-delivery-left" : "fbt-delivery-right"
                  }`}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -22 : 22,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45 }}
                >
                  <div className="fbt-timeline-marker">
                    <span>{stage.number}</span>
                  </div>

                  <div className="fbt-delivery-content">
                    <div className="fbt-delivery-top">
                      <span>{stage.label}</span>
                      <Icon size={21} />
                    </div>

                    <h3>{stage.title}</h3>

                    <p>{stage.description}</p>

                    <div className="fbt-delivery-result">
                      <CheckCircle2 size={16} />
                      <span>{stage.deliverable}</span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENGINEERING PRINCIPLES */}
      <section className="fbt-section fbt-principles-section">
        <div className="fbt-container">
          <SectionHeading
            eyebrow="ENGINEERING PRINCIPLES"
            title="Designed for"
            highlight="operational clarity."
            description="Technology planning should account for the systems, access and procedures needed to operate the environment."
          />

          <motion.div
            className="fbt-principles-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {engineeringPrinciples.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <motion.article
                  key={principle.title}
                  className="fbt-principle-card"
                  variants={reveal}
                  whileHover={{ y: -5 }}
                >
                  <span className="fbt-principle-number">
                    0{index + 1}
                  </span>

                  <span className="fbt-principle-icon">
                    <Icon size={24} />
                  </span>

                  <h3>{principle.title}</h3>

                  <p>{principle.description}</p>

                  <span className="fbt-principle-bottom">
                    <CheckCircle2 size={16} />
                    Architecture consideration
                  </span>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* BEFORE DEPLOYMENT */}
      <section className="fbt-section fbt-requirements-section">
        <div className="fbt-container fbt-requirements-layout">
          <motion.div
            className="fbt-requirements-intro"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="fbt-eyebrow">
              <span className="fbt-eyebrow-dot" />
              BEFORE DEPLOYMENT
            </span>

            <h2>
              What we need
              <span> from the broker.</span>
            </h2>

            <p>
              A clear picture of the current environment helps define
              the technology scope, integrations and responsibilities
              that need to be addressed.
            </p>

            <div className="fbt-requirements-note">
              <span>
                <ClipboardCheck size={21} />
              </span>

              <div>
                <strong>Start with the full picture.</strong>
                <p>
                  Share existing systems and target requirements before
                  making production changes.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="fbt-requirements-list"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {brokerRequirements.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  className="fbt-requirement-item"
                  variants={reveal}
                >
                  <span className="fbt-requirement-number">
                    0{index + 1}
                  </span>

                  <span className="fbt-requirement-icon">
                    <Icon size={21} />
                  </span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <ChevronRight size={18} className="fbt-requirement-arrow" />
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="fbt-section fbt-faq-section">
        <div className="fbt-container fbt-faq-layout">
          <div className="fbt-faq-intro">
            <span className="fbt-eyebrow">
              <span className="fbt-eyebrow-dot" />
              COMMON QUESTIONS
            </span>

            <h2>
              Frequently asked
              <span> questions.</span>
            </h2>

            <p>
              Understand the key considerations behind a connected forex
              brokerage technology stack.
            </p>

            <div className="fbt-faq-help">
              <span>
                <CircleHelp size={22} />
              </span>

              <div>
                <strong>Need to discuss your setup?</strong>

                <a
                  href="https://wa.me/358823711153?text=Hello%20TGS%2C%20I%20have%20questions%20about%20forex%20broker%20technology."
                  target="_blank"
                  rel="noreferrer"
                >
                  Talk to our team
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>

          <div className="fbt-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  className={`fbt-faq-item ${isOpen ? "is-open" : ""}`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="fbt-faq-question"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="fbt-faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{faq.question}</span>

                    <ChevronDown
                      size={19}
                      className="fbt-faq-chevron"
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="fbt-faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="fbt-final-cta">
        <div className="fbt-final-grid" aria-hidden="true" />
        <div className="fbt-final-glow" aria-hidden="true" />

        <div className="fbt-container fbt-final-layout">
          <motion.div
            className="fbt-final-copy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="fbt-eyebrow fbt-final-eyebrow">
              <span className="fbt-eyebrow-dot" />
              BROKER TECHNOLOGY CONSULTATION
            </span>

            <h2>
              Map the right infrastructure
              <span> for your brokerage.</span>
            </h2>

            <p>
              Discuss platform, market data, connectivity, integrations
              and operational requirements with TGS.
            </p>

            <div className="fbt-final-actions">
              <a
                className="fbt-button fbt-button-white"
                href="https://wa.me/358823711153?text=Hello%20TGS%2C%20I%20would%20like%20to%20review%20my%20current%20broker%20technology%20infrastructure."
                target="_blank"
                rel="noreferrer"
              >
                Discuss your infrastructure
                <ArrowUpRight size={18} />
              </a>

              <a
                className="fbt-button fbt-button-glass"
                href="https://t.me/whitelabelmetatraderfx"
                target="_blank"
                rel="noreferrer"
              >
                Contact on Telegram
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="fbt-final-points">
              <span>
                <CheckCircle2 size={15} />
                Requirements review
              </span>

              <span>
                <CheckCircle2 size={15} />
                Architecture planning
              </span>

              <span>
                <CheckCircle2 size={15} />
                Defined next steps
              </span>
            </div>
          </motion.div>

          <motion.div
            className="fbt-final-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="fbt-final-orbit fbt-final-orbit-one" />
            <div className="fbt-final-orbit fbt-final-orbit-two" />

            <div className="fbt-final-core">
              <Workflow size={31} />
              <strong>TGS</strong>
              <small>BROKER TECHNOLOGY</small>
            </div>

            <span className="fbt-final-node fbt-final-node-one">
              <Layers3 size={19} />
            </span>

            <span className="fbt-final-node fbt-final-node-two">
              <Database size={19} />
            </span>

            <span className="fbt-final-node fbt-final-node-three">
              <Network size={19} />
            </span>

            <span className="fbt-final-node fbt-final-node-four">
              <Server size={19} />
            </span>
          </motion.div>
        </div>
      </section>
    </main>
  );
}