import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  Code2,
  Database,
  FileCheck2,
  GitBranch,
  Globe2,
  KeyRound,
  Layers3,
  Network,
  RefreshCw,
  Server,
  ShieldCheck,
  Workflow,
  Users,
  WalletCards,
  ChartNoAxesCombined,
} from "lucide-react";

import "./BrokerCRM.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
};

const architectureLayers = [
  {
    n: "01",
    title: "Trading Platform",
    short: "MT4 / MT5",
    icon: Layers3,
    text: "The trading layer connects to client, data, execution and operational systems. Integration scope depends on supported platform interfaces and available access.",
  },
  {
    n: "02",
    title: "Market Data",
    short: "Pricing",
    icon: ChartNoAxesCombined,
    text: "Price sources, symbol mapping and normalisation need to align with the broker's instrument catalogue and platform configuration.",
  },
  {
    n: "03",
    title: "Liquidity Bridge",
    short: "Routing",
    icon: GitBranch,
    text: "Execution routing and platform connectivity are mapped around supported endpoints, order flows and the broker's operating model.",
  },
  {
    n: "04",
    title: "Execution Endpoints",
    short: "Liquidity",
    icon: Network,
    text: "Supported downstream execution endpoints are documented with their connectivity, permissions and operational dependencies.",
  },
  {
    n: "05",
    title: "CRM / API",
    short: "Client Operations",
    icon: Users,
    text: "Client onboarding, account states, payments and back-office workflows connect through the selected CRM and supported APIs.",
  },
  {
    n: "06",
    title: "Runtime Operations",
    short: "Continuity",
    icon: Server,
    text: "Hosting, monitoring, access, backup, recovery and incident responsibilities are considered as part of the production architecture.",
  },
];

const operatingFactors = [
  {
    n: "01",
    tag: "CLIENT",
    title: "Client Lifecycle",
    icon: Users,
    text: "Connect onboarding, profile data and account-state workflows with supporting systems.",
  },
  {
    n: "02",
    tag: "PLATFORM",
    title: "Trading Accounts",
    icon: Layers3,
    text: "Coordinate account creation and supported platform operations across MT4 or MT5 environments.",
  },
  {
    n: "03",
    tag: "PAYMENTS",
    title: "Payment Workflows",
    icon: WalletCards,
    text: "Integrate supported payment and balance workflows with the broker's operating model.",
  },
  {
    n: "04",
    tag: "API",
    title: "API Integration",
    icon: Code2,
    text: "Connect internal and third-party systems through documented interfaces and controlled credentials.",
  },
  {
    n: "05",
    tag: "REPORTING",
    title: "Operational Reporting",
    icon: Database,
    text: "Structure data flows for support, dealing, finance and management reporting requirements.",
  },
  {
    n: "06",
    tag: "GOVERNANCE",
    title: "Access & Change Control",
    icon: KeyRound,
    text: "Separate operational roles, credentials and production-change responsibilities.",
  },
];

const stackEntities = [
  {
    title: "Trading Platforms",
    detail: "MT4, MT5 and MetaTrader environments.",
    icon: Layers3,
  },
  {
    title: "Market Data",
    detail: "Price feeds, pricing sources, symbol mapping and normalisation.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Execution",
    detail: "Liquidity bridge, execution connectivity, routing and liquidity.",
    icon: GitBranch,
  },
  {
    title: "Client Systems",
    detail: "Broker CRM, back office, API integration and client onboarding.",
    icon: Users,
  },
  {
    title: "Infrastructure",
    detail: "Hosting, monitoring, backup, recovery and network connectivity.",
    icon: Server,
  },
  {
    title: "Operations",
    detail: "Access control, change control, support and incident response.",
    icon: ShieldCheck,
  },
];

const approach = [
  {
    n: "01",
    title: "Workflow Mapping",
    icon: Workflow,
    text: "Document onboarding, account, funding, support and reporting flows before integration begins.",
  },
  {
    n: "02",
    title: "System Interfaces",
    icon: Network,
    text: "Identify APIs, webhooks, file exchanges and platform-side access required by each workflow.",
  },
  {
    n: "03",
    title: "Integration & Testing",
    icon: ClipboardCheck,
    text: "Build and validate data flows, error handling, permissions and operational edge cases.",
  },
  {
    n: "04",
    title: "Production Support",
    icon: RefreshCw,
    text: "Maintain integration documentation and coordinate changes as upstream systems evolve.",
  },
];

const delivery = [
  {
    n: "01",
    tag: "DISCOVERY",
    title: "Requirements Mapping",
    text: "Document platform scope, instruments, integrations, connectivity, access and operational responsibilities.",
  },
  {
    n: "02",
    tag: "ARCHITECTURE",
    title: "Dependency Design",
    text: "Map how platform, data, execution, CRM and infrastructure components connect before production changes begin.",
  },
  {
    n: "03",
    tag: "DEPLOYMENT",
    title: "Controlled Implementation",
    text: "Configure the agreed environment with defined access, change control and rollback considerations.",
  },
  {
    n: "04",
    tag: "VALIDATION",
    title: "Production Testing",
    text: "Validate business-critical flows, connectivity, permissions, monitoring and recovery procedures.",
  },
  {
    n: "05",
    tag: "HANDOVER",
    title: "Operational Handover",
    text: "Clarify ownership, escalation paths and recurring operational procedures for the live environment.",
  },
  {
    n: "06",
    tag: "SUPPORT",
    title: "Ongoing Technical Support",
    text: "Support agreed infrastructure and integration scope with controlled production changes and troubleshooting.",
  },
];

const principles = [
  {
    title: "Documented Dependencies",
    icon: FileCheck2,
    text: "Critical interfaces are mapped so troubleshooting does not depend on guesswork.",
  },
  {
    title: "Controlled Access",
    icon: ShieldCheck,
    text: "Administrative privileges and production responsibilities should be explicit and limited to operational need.",
  },
  {
    title: "Monitoring & Recovery",
    icon: Activity,
    text: "Health checks, escalation and recovery procedures are treated as part of the architecture, not an afterthought.",
  },
];

const brokerInputs = [
  {
    title: "Platform & Product Scope",
    icon: Layers3,
    text: "Target platform, instruments, client groups and required broker-side workflows.",
  },
  {
    title: "Existing Technology Estate",
    icon: Blocks,
    text: "Current CRM, payments, market data, execution, APIs and infrastructure dependencies.",
  },
  {
    title: "Connectivity Requirements",
    icon: Network,
    text: "Supported data, execution and third-party endpoints required by the production design.",
  },
  {
    title: "Operational Responsibilities",
    icon: BriefcaseBusiness,
    text: "Who owns access, monitoring, incidents, changes and day-to-day platform operations.",
  },
];

const related = [
  {
    title: "MT5 White Label",
    text: "Connect client and account workflows to the MT5 platform layer.",
    href: "/mt5-white-label",
    icon: Layers3,
  },
  {
    title: "MT4 White Label",
    text: "Integrate CRM operations with established MT4 environments.",
    href: "/mt4-white-label",
    icon: Layers3,
  },
  {
    title: "Market Data",
    text: "Coordinate operational systems with instrument and symbol configuration.",
    href: "/pricefeed",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Forex Broker Infrastructure",
    text: "Map CRM, platform, payments and connectivity into a launch architecture.",
    href: "/forex-brokers",
    icon: Globe2,
  },
  {
    title: "Liquidity Bridge",
    text: "Connect execution routing and platform connectivity.",
    href: "/liquidity-bridge",
    icon: GitBranch,
  },
  {
    title: "Brokerage Technology",
    text: "Explore the wider architecture, deployment and operational stack.",
    href: "/brokerage-technology",
    icon: Network,
  },
];

const faqs = [
  {
    q: "Can you integrate an existing CRM with MT4 or MT5?",
    a: "Yes, where the CRM and platform environment expose supported interfaces and the required technical access is available.",
  },
  {
    q: "Do you provide a specific CRM product?",
    a: "TGS focuses on brokerage technology architecture and integrations. The exact CRM component can be selected or integrated based on the project scope.",
  },
  {
    q: "Can payment systems be connected?",
    a: "Supported payment providers can be integrated when suitable APIs and compliance requirements are available.",
  },
  {
    q: "How do you handle API credentials?",
    a: "Credential handling and operational access should be designed with least-privilege access, environment separation and documented ownership.",
  },
  {
    q: "What does a broker CRM integrate with?",
    a: "A broker CRM can connect client onboarding, trading accounts, payments, reporting and back-office workflows to the trading platform and other supported systems.",
  },
  {
    q: "What should be planned before CRM integration?",
    a: "Plan client lifecycle stages, account creation, permissions, payments, reporting, API responsibilities and operational ownership.",
  },
  {
    q: "Is CRM integration separate from the trading platform?",
    a: "Yes. The CRM is a client and operational workflow layer, while MT4 or MT5 is the trading platform layer. They are connected but serve different roles.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  text,
  centered = false,
}) {
  return (
    <motion.div
      className={`bcrm-heading ${centered ? "is-centered" : ""}`}
      variants={fadeUp}
    >
      <span className="bcrm-eyebrow">
        <i />
        {eyebrow}
      </span>

      <h2>{title}</h2>

      {text && <p>{text}</p>}
    </motion.div>
  );
}

function ArchitectureExplorer() {
  const [active, setActive] = useState(0);

  const selected = architectureLayers[active];
  const SelectedIcon = selected.icon;

  return (
    <div className="bcrm-architecture">
      <div className="bcrm-architecture-visual">
        <div className="bcrm-arch-orbit bcrm-arch-orbit-a" />
        <div className="bcrm-arch-orbit bcrm-arch-orbit-b" />

        <motion.div
          className="bcrm-arch-core"
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="bcrm-arch-core-icon">
            <Network size={27} />
          </span>

          <strong>BROKERAGE</strong>
          <span>INTEGRATION LAYER</span>
        </motion.div>

        {architectureLayers.map((layer, index) => {
          const Icon = layer.icon;

          return (
            <motion.button
              key={layer.n}
              type="button"
              className={`bcrm-arch-node bcrm-node-${index + 1} ${
                active === index ? "is-active" : ""
              }`}
              onClick={() => setActive(index)}
              aria-label={`Explore ${layer.title}`}
              aria-pressed={active === index}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={19} />
              <span>{layer.short}</span>
            </motion.button>
          );
        })}

        <span className="bcrm-arch-connection bcrm-connection-one" />
        <span className="bcrm-arch-connection bcrm-connection-two" />
        <span className="bcrm-arch-connection bcrm-connection-three" />
      </div>

      <div className="bcrm-architecture-info">
        <span className="bcrm-info-label">
          ARCHITECTURE LAYER / {selected.n}
        </span>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected.n}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <span className="bcrm-info-icon">
              <SelectedIcon size={24} />
            </span>

            <h3>{selected.title}</h3>
            <p>{selected.text}</p>
          </motion.div>
        </AnimatePresence>

        <div className="bcrm-layer-progress">
          {architectureLayers.map((layer, index) => (
            <button
              type="button"
              key={layer.n}
              className={active === index ? "is-active" : ""}
              onClick={() => setActive(index)}
              aria-label={`Select layer ${layer.n}`}
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
      className={`bcrm-faq-item ${open ? "is-open" : ""}`}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.035 }}
    >
      <button
        className="bcrm-faq-question"
        type="button"
        onClick={onClick}
        aria-expanded={open}
      >
        <span>{item.q}</span>

        <span className="bcrm-faq-chevron">
          <ChevronDown size={19} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="bcrm-faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p>{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function BrokerCRM() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="bcrm-page">
      {/* 01 — HERO */}
      <section className="bcrm-hero">
        <div className="bcrm-hero-glow bcrm-hero-glow-one" />
        <div className="bcrm-hero-glow bcrm-hero-glow-two" />
        <div className="bcrm-hero-grid" />

        <div className="bcrm-container bcrm-hero-layout">
          <motion.div
            className="bcrm-hero-content"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.span className="bcrm-eyebrow" variants={fadeUp}>
              <i />
              BROKERAGE TECHNOLOGY / CRM INTEGRATION
            </motion.span>

            <motion.h1 variants={fadeUp}>
              Broker CRM, API &{" "}
              <span>Operational Integrations.</span>
            </motion.h1>

            <motion.p variants={fadeUp}>
              Connect client onboarding, back-office workflows and trading
              platform operations through a structured integration layer
              designed around your brokerage technology stack.
            </motion.p>

            <motion.div className="bcrm-hero-actions" variants={fadeUp}>
              <a href="/contact" className="bcrm-btn bcrm-btn-primary">
                Discuss Your Requirements
                <ArrowUpRight size={18} />
              </a>

              <a href="#bcrm-architecture" className="bcrm-btn bcrm-btn-ghost">
                Explore Architecture
                <ArrowRight size={17} />
              </a>
            </motion.div>

            <motion.div className="bcrm-hero-proof" variants={fadeUp}>
              <div>
                <CheckCircle2 size={17} />
                <span>Structured Integration</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Defined Dependencies</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Operational Clarity</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="bcrm-hero-visual"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bcrm-dashboard">
              <div className="bcrm-dashboard-top">
                <div className="bcrm-window-dots">
                  <i />
                  <i />
                  <i />
                </div>

                <span>Broker Operations</span>
                <span className="bcrm-live-label">
                  <i /> SYSTEM MAP
                </span>
              </div>

              <div className="bcrm-dashboard-title">
                <div>
                  <small>INTEGRATION OVERVIEW</small>
                  <h3>Brokerage Ecosystem</h3>
                </div>

                <span className="bcrm-dashboard-icon">
                  <Network size={21} />
                </span>
              </div>

              <div className="bcrm-dashboard-stats">
                <div>
                  <span>PLATFORM</span>
                  <strong>MT4 / MT5</strong>
                  <small>Trading layer</small>
                </div>

                <div>
                  <span>CONNECTIVITY</span>
                  <strong>API / FIX</strong>
                  <small>Interface layer</small>
                </div>

                <div>
                  <span>OPERATIONS</span>
                  <strong>CRM / BO</strong>
                  <small>Client workflows</small>
                </div>
              </div>

              <div className="bcrm-dashboard-flow">
                <div className="bcrm-flow-line" />

                <div className="bcrm-flow-item">
                  <span><Users size={18} /></span>
                  <div>
                    <strong>Client CRM</strong>
                    <small>Onboarding & accounts</small>
                  </div>
                  <CheckCircle2 size={17} />
                </div>

                <div className="bcrm-flow-item">
                  <span><Layers3 size={18} /></span>
                  <div>
                    <strong>Trading Platform</strong>
                    <small>MT4 / MT5 connectivity</small>
                  </div>
                  <CheckCircle2 size={17} />
                </div>

                <div className="bcrm-flow-item">
                  <span><Database size={18} /></span>
                  <div>
                    <strong>Operational Systems</strong>
                    <small>Data & reporting flows</small>
                  </div>
                  <CheckCircle2 size={17} />
                </div>
              </div>

              <div className="bcrm-dashboard-footer">
                <span><Activity size={15} /> INTEGRATION VIEW</span>
                <span>Illustrative architecture</span>
              </div>
            </div>

            <motion.div
              className="bcrm-float-chip bcrm-float-chip-one"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span><ShieldCheck size={18} /></span>
              <div>
                <strong>Controlled Access</strong>
                <small>Operational governance</small>
              </div>
            </motion.div>

            <motion.div
              className="bcrm-float-chip bcrm-float-chip-two"
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
            >
              <span><GitBranch size={18} /></span>
              <div>
                <strong>Connected Systems</strong>
                <small>Defined dependencies</small>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="bcrm-hero-bottom">
          <div className="bcrm-container bcrm-hero-bottom-inner">
            <span>BUILT AROUND YOUR TECHNOLOGY STACK</span>
            <div>TRADING PLATFORMS</div>
            <div>MARKET DATA</div>
            <div>EXECUTION</div>
            <div>CRM & APIs</div>
            <div>INFRASTRUCTURE</div>
          </div>
        </div>
      </section>

      {/* 02 — INTRODUCTION */}
      <section className="bcrm-section bcrm-intro-section">
        <div className="bcrm-container bcrm-intro-layout">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="BROKER CRM INTEGRATION"
              title="Connect client operations with your trading environment."
              text="A brokerage CRM sits between client-facing workflows and the wider operational stack. Integration planning makes the relationships between systems, data and responsibilities explicit."
            />
          </motion.div>

          <motion.div
            className="bcrm-intro-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bcrm-intro-panel-icon">
              <Workflow size={25} />
            </span>

            <span className="bcrm-info-label">THE INTEGRATION OBJECTIVE</span>

            <h3>One coordinated operating environment.</h3>

            <p>
              Plan how onboarding, accounts, payments, reporting and platform
              operations exchange information across supported interfaces.
            </p>

            <div className="bcrm-mini-points">
              <span><CheckCircle2 size={16} /> Workflow visibility</span>
              <span><CheckCircle2 size={16} /> Clear system boundaries</span>
              <span><CheckCircle2 size={16} /> Defined ownership</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 03 — INTERACTIVE ARCHITECTURE */}
      <section
        className="bcrm-section bcrm-architecture-section"
        id="bcrm-architecture"
      >
        <div className="bcrm-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="INTEGRATION ARCHITECTURE"
              title="Explore the layers behind a connected brokerage."
              text="Select a layer to see how it relates to CRM and operational workflows."
              centered
            />
          </motion.div>

          <ArchitectureExplorer />

          <div className="bcrm-architecture-note">
            <ShieldCheck size={18} />
            <p>
              Actual integration scope depends on platform capabilities,
              third-party interfaces, permissions and agreed project
              requirements.
            </p>
          </div>
        </div>
      </section>

      {/* 04 — OPERATIONAL FACTORS */}
      <section className="bcrm-section bcrm-factors-section">
        <div className="bcrm-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="CORE WORKFLOWS"
              title="The operational details that matter."
              text="A well-planned integration accounts for the workflows that keep a brokerage operating day to day."
            />
          </motion.div>

          <motion.div
            className="bcrm-factors-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={stagger}
          >
            {operatingFactors.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="bcrm-factor-card"
                  key={item.n}
                  variants={fadeUp}
                  whileHover={{ y: -7 }}
                >
                  <div className="bcrm-factor-top">
                    <span>{item.n} / {item.tag}</span>
                    <Icon size={21} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>

                  <span className="bcrm-card-arrow">
                    <ArrowUpRight size={17} />
                  </span>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 05 — TECHNOLOGY STACK */}
      <section className="bcrm-section bcrm-stack-section">
        <div className="bcrm-container bcrm-stack-layout">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="TECHNOLOGY ENTITIES"
              title="How CRM fits into the brokerage technology stack."
              text="CRM is the client and operational workflow layer, connected to—but distinct from—the trading platform."
            />

            <a className="bcrm-inline-link" href="/contact">
              Map Your Current Stack <ArrowRight size={17} />
            </a>
          </motion.div>

          <motion.div
            className="bcrm-stack-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={stagger}
          >
            {stackEntities.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="bcrm-stack-row"
                  key={item.title}
                  variants={fadeUp}
                >
                  <span className="bcrm-stack-icon">
                    <Icon size={19} />
                  </span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>

                  <span className="bcrm-stack-index">
                    0{i + 1}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 06 — DELIVERY APPROACH */}
      <section className="bcrm-section bcrm-approach-section">
        <div className="bcrm-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="PLANNING"
              title="A clear approach from workflow to support."
              text="Integration work is scoped in stages so dependencies and responsibilities are understood before production changes."
              centered
            />
          </motion.div>

          <motion.div
            className="bcrm-approach-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.14 }}
            variants={stagger}
          >
            {approach.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="bcrm-approach-card"
                  key={item.n}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                >
                  <div className="bcrm-approach-number">{item.n}</div>
                  <span className="bcrm-approach-icon">
                    <Icon size={22} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 07 — DELIVERY FRAMEWORK */}
      <section className="bcrm-section bcrm-delivery-section">
        <div className="bcrm-container">
          <motion.div
            className="bcrm-delivery-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="DELIVERY FRAMEWORK"
              title="From requirements to controlled production deployment."
              text="Infrastructure work is structured around explicit scope, dependencies, validation and operational ownership."
            />

            <div className="bcrm-delivery-stamp">
              <CheckCircle2 size={20} />
              <span>
                Defined scope
                <br />
                <strong>Clear handover</strong>
              </span>
            </div>
          </motion.div>

          <div className="bcrm-delivery-list">
            {delivery.map((item, i) => (
              <motion.article
                className="bcrm-delivery-row"
                key={item.n}
                initial={{
                  opacity: 0,
                  x: i % 2 ? 18 : -18,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
              >
                <span className="bcrm-delivery-number">{item.n}</span>
                <span className="bcrm-delivery-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ArrowUpRight
                  size={18}
                  className="bcrm-delivery-arrow"
                />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — ENGINEERING PRINCIPLES */}
      <section className="bcrm-section bcrm-principles-section">
        <div className="bcrm-container bcrm-principles-layout">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="ENGINEERING PRINCIPLES"
              title="Designed for operational clarity."
              text="Reliability is built into the way dependencies, access and recovery are documented."
            />
          </motion.div>

          <motion.div
            className="bcrm-principles-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="bcrm-principle"
                  key={item.title}
                  variants={fadeUp}
                >
                  <span><Icon size={21} /></span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 09 — PRE-DEPLOYMENT CHECKLIST */}
      <section className="bcrm-section bcrm-inputs-section">
        <div className="bcrm-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="BEFORE DEPLOYMENT"
              title="What we need from the broker."
              text="A useful discovery starts with a shared picture of the current systems and the desired operating model."
              centered
            />
          </motion.div>

          <motion.div
            className="bcrm-inputs-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={stagger}
          >
            {brokerInputs.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="bcrm-input-card"
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                >
                  <span className="bcrm-input-number">
                    0{i + 1}
                  </span>

                  <Icon size={23} />

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 10 — RELATED INFRASTRUCTURE */}
      <section className="bcrm-section bcrm-related-section">
        <div className="bcrm-container">
          <motion.div
            className="bcrm-related-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="RELATED INFRASTRUCTURE"
              title="Continue building the brokerage stack."
              text="Explore the components most closely connected to CRM and operational integration."
            />

            <a className="bcrm-inline-link" href="/contact">
              Discuss Your Architecture <ArrowRight size={17} />
            </a>
          </motion.div>

          <motion.div
            className="bcrm-related-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={stagger}
          >
            {related.map((item) => {
              const Icon = item.icon;

              return (
                <motion.a
                  className="bcrm-related-card"
                  href={item.href}
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                >
                  <span className="bcrm-related-icon">
                    <Icon size={21} />
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>

                  <span className="bcrm-related-action">
                    Explore Layer <ArrowUpRight size={16} />
                  </span>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 11 — FAQ */}
      <section className="bcrm-section bcrm-faq-section">
        <div className="bcrm-container bcrm-faq-layout">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <SectionHeading
              eyebrow="COMMON QUESTIONS"
              title="Questions brokers ask."
              text="A quick overview of compatibility, CRM selection and operational integration planning."
            />

            <div className="bcrm-faq-aside">
              <span><CircleDollarSign size={19} /></span>

              <div>
                <strong>Have a specific setup?</strong>
                <p>Share your existing platform, CRM and required workflows.</p>

                <a href="/contact">
                  Talk to the Team <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="bcrm-faq-list">
            {faqs.map((item, index) => (
              <FAQItem
                key={item.q}
                item={item}
                index={index}
                open={openFaq === index}
                onClick={() =>
                  setOpenFaq(openFaq === index ? -1 : index)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* 12 — FINAL CTA */}
      <section className="bcrm-final-cta">
        <div className="bcrm-cta-grid" aria-hidden="true" />

        <div className="bcrm-container bcrm-cta-inner">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <span className="bcrm-eyebrow">
              <i />
              TECHNOLOGY GLOBAL SOLUTIONS
            </span>

            <h2>
              Build the next layer of your{" "}
              <span>brokerage infrastructure.</span>
            </h2>

            <p>
              Review your current platform, data, connectivity, CRM and
              hosting scope — then define the next technical steps with a
              clear integration plan.
            </p>

            <div className="bcrm-hero-actions">
              <a
                className="bcrm-btn bcrm-btn-primary"
                href="/contact"
              >
                Discuss Your Project <ArrowUpRight size={17} />
              </a>

              <a
                className="bcrm-btn bcrm-btn-ghost"
                href="/brokerage-technology"
              >
                Explore Brokerage Technology <ArrowRight size={17} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="bcrm-cta-art"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="bcrm-cta-ring bcrm-ring-one" />
            <div className="bcrm-cta-ring bcrm-ring-two" />

            <div className="bcrm-cta-core">
              <Network size={36} />
              <strong>TGS</strong>
              <small>CONNECTED SYSTEMS</small>
            </div>

            <span className="bcrm-cta-node bcrm-cta-node-one">
              <Users size={19} />
            </span>

            <span className="bcrm-cta-node bcrm-cta-node-two">
              <Database size={19} />
            </span>

            <span className="bcrm-cta-node bcrm-cta-node-three">
              <Layers3 size={19} />
            </span>
          </motion.div>
        </div>
      </section>
    </main>
  );
}