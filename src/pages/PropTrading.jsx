import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Database,
  GitBranch,
  Layers3,
  Network,
  Server,
  ShieldCheck,
  Users,
  Workflow,
  Gauge,
  RefreshCw,
  Settings2,
  ChartNoAxesCombined,
  CircleHelp,
} from "lucide-react";
import "./PropTrading.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const requirements = [
  {
    number: "01",
    title: "Account Workflows",
    category: "OPERATIONS",
    icon: Workflow,
    description:
      "Design account creation, stage changes and supported operational transitions around the firm's program.",
    features: ["Account creation", "Stage transitions", "Reset and status workflows"],
  },
  {
    number: "02",
    title: "Trading Environment",
    category: "PLATFORM",
    icon: Layers3,
    description:
      "Configure MT4 or MT5 environments for the required user groups and operating model.",
    features: ["MT4 / MT5 environment", "User groups", "Platform access"],
  },
  {
    number: "03",
    title: "Market Data",
    category: "PRICING",
    icon: Database,
    description:
      "Provide supported pricing connectivity and symbol configuration for the offered instruments.",
    features: ["Pricing connectivity", "Symbol configuration", "Instrument coverage"],
  },
  {
    number: "04",
    title: "Risk & Reporting Integrations",
    category: "INTEGRATIONS",
    icon: ChartNoAxesCombined,
    description:
      "Connect supported systems used for analytics, rules, reporting or internal operations.",
    features: ["Analytics systems", "Reporting workflows", "Risk-system interfaces"],
  },
  {
    number: "05",
    title: "Operational Automation",
    category: "AUTOMATION",
    icon: RefreshCw,
    description:
      "Reduce repetitive provisioning and status-change work through supported interfaces.",
    features: ["Provisioning workflows", "Status updates", "Supported API integrations"],
  },
  {
    number: "06",
    title: "Infrastructure & Monitoring",
    category: "INFRASTRUCTURE",
    icon: Server,
    description:
      "Plan runtime availability, monitoring, access control, backups and operational support.",
    features: ["Availability planning", "Monitoring and access", "Backup and support"],
  },
];

const principles = [
  {
    number: "01",
    title: "Map dependencies",
    icon: Network,
    description:
      "Document how platform, data, execution, client systems and infrastructure depend on each other.",
  },
  {
    number: "02",
    title: "Define ownership",
    icon: ShieldCheck,
    description:
      "Make production access, monitoring, change control and escalation responsibilities explicit.",
  },
  {
    number: "03",
    title: "Validate production flows",
    icon: ClipboardCheck,
    description:
      "Test business-critical workflows and failure scenarios before relying on them in live operations.",
  },
];

const faqs = [
  {
    question: "Can prop firm account workflows be automated?",
    answer:
      "Where supported APIs and interfaces are available, provisioning and status workflows can be integrated or automated.",
  },
  {
    question: "Can a prop firm use MT4 or MT5?",
    answer:
      "Platform choice depends on vendor availability, program requirements, instrument coverage and the surrounding technology stack.",
  },
  {
    question: "Do you provide risk-rule software?",
    answer:
      "TGS focuses on brokerage and trading infrastructure architecture. Supported third-party risk or analytics systems can be integrated where appropriate.",
  },
  {
    question: "Can the infrastructure support multiple program stages?",
    answer:
      "Account groups and supported operational workflows can be structured around different stages, subject to the capabilities of the selected systems.",
  },
];

const relatedLinks = [
  { title: "MT5 White Label", type: "TRADING PLATFORM", href: "/mt5-white-label", icon: Layers3 },
  { title: "MT4 White Label", type: "TRADING PLATFORM", href: "/mt4-white-label", icon: Layers3 },
  { title: "MT5 Server", type: "INFRASTRUCTURE", href: "/mt5-server", icon: Server },
  { title: "Market Data", type: "PRICING", href: "/pricefeed", icon: Database },
  { title: "Liquidity Bridge", type: "EXECUTION", href: "/liquidity-bridge", icon: GitBranch },
  { title: "Broker CRM", type: "CLIENT SYSTEMS", href: "/broker-crm", icon: Users },
];

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <motion.div
      className={`pt-heading ${centered ? "pt-centered" : ""}`}
      variants={fadeUp}
    >
      <span className="pt-eyebrow"><i />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

function InfrastructureVisual() {
  const cards = [
    { title: "Account Operations", detail: "Provisioning / Stages", icon: Workflow },
    { title: "Trading Platform", detail: "MT4 / MT5", icon: Layers3 },
    { title: "Market Data", detail: "Pricing / Symbols", icon: Database },
    { title: "Risk & Reporting", detail: "Rules / Analytics", icon: Gauge },
    { title: "Infrastructure", detail: "Monitoring / Access", icon: Server },
  ];

  return (
    <div className="pt-visual">
      <div className="pt-visual-glow" />
      <div className="pt-orbit pt-orbit-a" />
      <div className="pt-orbit pt-orbit-b" />
      <div className="pt-dashboard">
        <div className="pt-dash-top">
          <span className="pt-window-dots"><i /><i /><i /></span>
          <span>PROP TRADING INFRASTRUCTURE</span>
          <span className="pt-live"><i /> SYSTEM MAP</span>
        </div>
        <div className="pt-dash-title">
          <div><small>TECHNOLOGY ARCHITECTURE</small><h3>Prop Firm Ecosystem</h3></div>
          <span className="pt-title-icon"><Network size={22} /></span>
        </div>
        <div className="pt-stats">
          <div><small>PLATFORM</small><strong>MT4 / MT5</strong></div>
          <div><small>WORKFLOWS</small><strong>ACCOUNT STAGES</strong></div>
          <div><small>OPERATIONS</small><strong>CONNECTED</strong></div>
        </div>
        <div className="pt-system-list">
          <span className="pt-system-line" />
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                className="pt-system-card"
                key={card.title}
                initial={{ opacity: 0, x: index % 2 ? 12 : -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + index * 0.12, duration: 0.4 }}
                whileHover={{ x: 4, scale: 1.015 }}
              >
                <span className="pt-system-icon"><Icon size={18} /></span>
                <span className="pt-system-copy"><strong>{card.title}</strong><small>{card.detail}</small></span>
                <CheckCircle2 className="pt-system-check" size={16} />
              </motion.div>
            );
          })}
        </div>
        <div className="pt-dash-bottom"><span><Activity size={14} /> CONNECTED TECHNOLOGY LAYERS</span><small>Illustrative architecture</small></div>
      </div>
      <motion.div className="pt-float pt-float-top" animate={{ y: [0, -7, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
        <span><ShieldCheck size={18} /></span><div><strong>Controlled workflows</strong><small>Defined responsibilities</small></div>
      </motion.div>
      <motion.div className="pt-float pt-float-bottom" animate={{ y: [0, 7, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
        <span><GitBranch size={18} /></span><div><strong>Connected systems</strong><small>Mapped dependencies</small></div>
      </motion.div>
    </div>
  );
}

function RequirementCard({ item }) {
  const Icon = item.icon;
  return (
    <motion.article className="pt-requirement-card" variants={fadeUp} whileHover={{ y: -6 }}>
      <div className="pt-card-top"><span>{item.number}</span><i><Icon size={22} /></i></div>
      <small className="pt-card-category">{item.category}</small>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className="pt-feature-list">
        {item.features.map((feature) => <span key={feature}><CheckCircle2 size={14} />{feature}</span>)}
      </div>
    </motion.article>
  );
}

function ChallengeRulesSection() {
  const [activeTab, setActiveTab] = useState("rules");
  const panels = {
    rules: {
      label: "Challenge rules",
      title: "Keep business rules explicit",
      text: "Document the rules applied by the challenge or account-management system and define the source of truth for evaluation status, account eligibility and restrictions.",
      points: ["Define the system of record", "Document eligibility and restrictions", "Agree on disputed-result ownership"],
      icon: ClipboardCheck,
    },
    platform: {
      label: "Platform access",
      title: "Configure access to support the program",
      text: "Map the platform settings and user groups required for each program stage. A trading platform alone does not establish the business rules for a challenge.",
      points: ["Map account groups and permissions", "Separate platform settings from evaluation logic", "Confirm supported integration interfaces"],
      icon: Layers3,
    },
    validation: {
      label: "Workflow testing",
      title: "Test changes and exceptions",
      text: "Test account creation, reset, restriction and reporting through connected systems. Agree how delayed data or failed integration actions affect the evaluation workflow.",
      points: ["Test account creation and reset", "Validate restrictions and reporting", "Define investigation and escalation paths"],
      icon: Settings2,
    },
  };
  const selected = panels[activeTab];
  const Icon = selected.icon;

  return (
    <section className="pt-section pt-challenge-section" id="pt-challenge-rules">
      <div className="pt-container pt-challenge-layout">
        <div>
          <SectionHeading
            eyebrow="PROGRAM LOGIC & PLATFORM ACCESS"
            title="Keep challenge rules separate from platform access."
            description="Document the rules applied by the challenge or account-management system and the platform settings required to support them."
          />
          <div className="pt-tabs" role="tablist" aria-label="Challenge workflow topics">
            {Object.entries(panels).map(([key, panel]) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === key}
                className={activeTab === key ? "is-active" : ""}
                onClick={() => setActiveTab(key)}
                key={key}
              >
                {panel.label}<ArrowRight size={15} />
              </button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            className="pt-challenge-panel"
            key={activeTab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.24 }}
            role="tabpanel"
          >
            <span className="pt-panel-icon"><Icon size={26} /></span>
            <small>WORKFLOW DESIGN / {selected.label.toUpperCase()}</small>
            <h3>{selected.title}</h3>
            <p>{selected.text}</p>
            <div className="pt-panel-points">
              {selected.points.map((point) => <span key={point}><CheckCircle2 size={16} />{point}</span>)}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function FAQItem({ item, index, isOpen, onClick }) {
  return (
    <motion.article className={`pt-faq-item ${isOpen ? "is-open" : ""}`} variants={fadeUp}>
      <button type="button" className="pt-faq-question" onClick={onClick} aria-expanded={isOpen}>
        <span><small>0{index + 1}</small>{item.question}</span>
        <ChevronDown size={19} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="pt-faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24 }}
          >
            <p>{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function PropTrading() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <main className="pt-page">
      <section className="pt-hero">
        <div className="pt-hero-grid" />
        <div className="pt-hero-glow pt-hero-glow-a" />
        <div className="pt-hero-glow pt-hero-glow-b" />
        <div className="pt-container pt-hero-layout">
          <motion.div className="pt-hero-copy" initial="hidden" animate="visible" variants={stagger}>
            <motion.span className="pt-eyebrow" variants={fadeUp}><i />PROP TRADING INFRASTRUCTURE</motion.span>
            <motion.h1 variants={fadeUp}>Technology Infrastructure <span>for Prop Trading Firms.</span></motion.h1>
            <motion.p variants={fadeUp}>
              Build the technical environment behind evaluation and funded-account workflows with trading platforms, account operations, market data, integrations and controlled infrastructure.
            </motion.p>
            <motion.div className="pt-hero-actions" variants={fadeUp}>
              <a className="pt-btn pt-btn-primary" href="/contact">Discuss requirements <ArrowUpRight size={17} /></a>
              <a className="pt-btn pt-btn-secondary" href="#pt-requirements">Explore the scope <ArrowRight size={17} /></a>
            </motion.div>
            <motion.div className="pt-hero-points" variants={fadeUp}>
              <span><CheckCircle2 size={16} />Account workflows</span>
              <span><CheckCircle2 size={16} />Platform & pricing</span>
              <span><CheckCircle2 size={16} />Operational controls</span>
            </motion.div>
          </motion.div>
          <motion.div className="pt-hero-visual-wrap" initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <InfrastructureVisual />
          </motion.div>
        </div>
        <div className="pt-scope-strip">
          <div className="pt-container pt-scope-inner">
            <strong>PROP TRADING INFRASTRUCTURE PROJECT SCOPE</strong>
            <span><i>01</i> PLATFORM <small>Trading environment</small></span>
            <span><i>02</i> PRICING <small>Market data sources</small></span>
            <span><i>03</i> EXECUTION <small>Supported connectivity</small></span>
            <span><i>04</i> OPERATIONS <small>Client systems & support</small></span>
          </div>
        </div>
      </section>

      <section className="pt-section pt-requirements-section" id="pt-requirements">
        <div className="pt-container">
          <SectionHeading
            eyebrow="SCOPE & DECISIONS"
            title="Plan the requirements for Prop Firms."
            description="Define the technology layers required for your firm's program, then map how each component supports evaluation and funded-account workflows."
          />
          <motion.div className="pt-requirements-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }} variants={stagger}>
            {requirements.map((item) => <RequirementCard item={item} key={item.number} />)}
          </motion.div>
        </div>
      </section>

      <ChallengeRulesSection />

      <section className="pt-section pt-principles-section" id="pt-dependencies">
        <div className="pt-container">
          <SectionHeading
            eyebrow="PRODUCTION READINESS"
            title="Connect the systems. Clarify the responsibilities."
            description="Plan the relationships between systems and agree on the operational processes needed to support reliable production workflows."
            centered
          />
          <motion.div className="pt-principles-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {principles.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article className="pt-principle-card" variants={fadeUp} whileHover={{ y: -6 }} key={item.number}>
                  <div className="pt-principle-top"><span>{item.number}</span><Icon size={25} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="pt-principle-foot"><CheckCircle2 size={14} /> OPERATIONAL PRINCIPLE</span>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="pt-section pt-validation-section" id="pt-validation">
        <div className="pt-container pt-validation-layout">
          <div className="pt-validation-copy">
            <SectionHeading
              eyebrow="WORKFLOW VALIDATION"
              title="Validate the complete production flow."
              description="Test account creation, reset, restriction and reporting through the connected systems before relying on them in live operations."
            />
            <a href="/contact" className="pt-text-link">Discuss your workflows <ArrowRight size={16} /></a>
          </div>
          <motion.div className="pt-validation-list" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {[
              ["01", "Account creation & provisioning", "Check the account journey across supported interfaces."],
              ["02", "Stage changes & resets", "Verify transitions and reset handling across connected systems."],
              ["03", "Restrictions & reporting", "Confirm that required status and reporting information is available."],
              ["04", "Failure & escalation scenarios", "Agree how delayed data or failed integration actions are handled."],
            ].map(([number, title, description]) => (
              <motion.div className="pt-validation-row" variants={fadeUp} key={number}>
                <span>{number}</span><div><strong>{title}</strong><p>{description}</p></div><ArrowUpRight size={17} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="pt-section pt-related-section">
        <div className="pt-container">
          <SectionHeading
            eyebrow="RELATED READING"
            title="Continue with the connected technology layers."
            description="Explore the platform, pricing, execution and client-operation components that can form part of a prop firm's technical environment."
          />
          <motion.div className="pt-related-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {relatedLinks.map((item) => {
              const Icon = item.icon;
              return (
                <motion.a className="pt-related-card" href={item.href} variants={fadeUp} whileHover={{ y: -5 }} key={item.title}>
                  <div className="pt-related-top"><span><Icon size={22} /></span><ArrowUpRight size={18} /></div>
                  <small>{item.type}</small>
                  <h3>{item.title}</h3>
                  <span className="pt-related-link">Explore technology <ArrowRight size={15} /></span>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="pt-section pt-faq-section">
        <div className="pt-container pt-faq-layout">
          <div className="pt-faq-intro">
            <SectionHeading
              eyebrow="QUESTIONS"
              title="Questions about Prop Firms."
              description="Understand account workflow automation, platform options and how the surrounding technology stack can be integrated."
            />
            <div className="pt-faq-help"><span><CircleHelp size={23} /></span><div><strong>Need a technical discussion?</strong><p>Share your current environment and the workflows you need to support.</p><a href="/contact">Discuss requirements <ArrowUpRight size={15} /></a></div></div>
          </div>
          <motion.div className="pt-faq-list" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {faqs.map((item, index) => (
              <FAQItem
                item={item}
                index={index}
                key={item.question}
                isOpen={activeFaq === index}
                onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="pt-final-cta">
        <div className="pt-cta-grid" />
        <div className="pt-container pt-cta-layout">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span className="pt-eyebrow" variants={fadeUp}><i />TECHNOLOGY GLOBAL SOLUTIONS</motion.span>
            <motion.h2 variants={fadeUp}>Discuss your prop trading <span>infrastructure requirements.</span></motion.h2>
            <motion.p variants={fadeUp}>Share your target platform, current systems and required workflows with the TGS technical team.</motion.p>
            <motion.div className="pt-hero-actions" variants={fadeUp}>
              <a href="/contact" className="pt-btn pt-btn-primary">Discuss your project <ArrowUpRight size={17} /></a>
              <a href="/brokerage-technology" className="pt-btn pt-btn-secondary">Explore brokerage technology <ArrowRight size={16} /></a>
            </motion.div>
          </motion.div>
          <motion.div className="pt-cta-visual" animate={{ y: [0, -7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
            <div className="pt-cta-orbit pt-cta-orbit-one" /><div className="pt-cta-orbit pt-cta-orbit-two" />
            <div className="pt-cta-core"><Network size={32} /><strong>TGS</strong><small>PROP TRADING INFRASTRUCTURE</small></div>
            <span className="pt-cta-node pt-cta-node-one"><Layers3 size={18} /></span>
            <span className="pt-cta-node pt-cta-node-two"><Database size={18} /></span>
            <span className="pt-cta-node pt-cta-node-three"><Server size={18} /></span>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
