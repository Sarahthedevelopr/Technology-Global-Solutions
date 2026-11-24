import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  GitCompareArrows,
  Layers3,
  Network,
  Server,
  ShieldCheck,
  Workflow,
  X,
} from "lucide-react";
import "./MT4vsMT5.css";

const scopeLayers = [
  {
    number: "01",
    title: "Platform",
    subtitle: "Trading environment",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Pricing",
    subtitle: "Market data sources",
    icon: Network,
  },
  {
    number: "03",
    title: "Execution",
    subtitle: "Supported connectivity",
    icon: GitCompareArrows,
  },
  {
    number: "04",
    title: "Operations",
    subtitle: "Client systems & support",
    icon: Workflow,
  },
];

const requirements = [
  {
    number: "01",
    title: "Platform Generation",
    text: "MT4 is an established legacy platform family; MT5 is the newer generation with a broader architecture.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Market Scope",
    text: "MT5 is generally positioned for broader multi-asset use, while many existing MT4 deployments remain forex/CFD focused.",
    icon: Network,
  },
  {
    number: "03",
    title: "Broker Operations",
    text: "Existing workflows, administrator tools, plugins and staff experience can influence the practical choice.",
    icon: Workflow,
  },
  {
    number: "04",
    title: "Integration Estate",
    text: "CRM, bridge, data, reporting and custom integrations should be assessed before any platform change.",
    icon: GitCompareArrows,
  },
  {
    number: "05",
    title: "Migration Effort",
    text: "Moving an established operation is a project involving accounts, symbols, integrations, procedures and client communication.",
    icon: ArrowRight,
  },
  {
    number: "06",
    title: "Long-Term Fit",
    text: "New projects should evaluate current vendor availability, product roadmap and target asset classes rather than choosing only by familiarity.",
    icon: ShieldCheck,
  },
];

const decisionQuestions = [
  {
    number: "01",
    title: "Is this a new launch or an existing estate?",
    answer:
      "A new brokerage can optimize for long-term architecture; an existing MT4 operation must account for migration risk and installed integrations.",
  },
  {
    number: "02",
    title: "Which asset classes matter?",
    answer:
      "Instrument scope and market structure can materially affect platform and connectivity requirements.",
  },
  {
    number: "03",
    title: "What systems already depend on the platform?",
    answer:
      "Inventory CRM, bridge, data, reporting, plugins, automation and operational procedures.",
  },
  {
    number: "04",
    title: "What is the migration cost of change?",
    answer:
      "Evaluate technical work, downtime risk, client communication and operational retraining alongside platform benefits.",
  },
];

const faqs = [
  {
    question: "Is MT5 simply a newer version of MT4?",
    answer:
      "MT5 is a newer platform generation with a different architecture and broader positioning; it should not be treated as a drop-in binary upgrade for every MT4 deployment.",
  },
  {
    question: "Should a new broker choose MT4 or MT5?",
    answer:
      "The decision should consider current vendor availability, asset classes, integrations, operating model and long-term technology plans.",
  },
  {
    question: "Can an existing MT4 broker migrate to MT5?",
    answer:
      "Migration can be possible, but it requires planning around client accounts, instruments, integrations, data, procedures and commercial dependencies.",
  },
  {
    question: "Do MT4 and MT5 use the same integrations?",
    answer:
      "Not always. Existing plugins, bridges, CRM connectors and other components should be verified individually for the target platform.",
  },
];

const relatedLinks = [
  {
    title: "MT5 White Label",
    description: "Branded multi-asset platform infrastructure.",
    href: "/mt5-white-label",
    icon: Layers3,
  },
  {
    title: "MT4 White Label",
    description: "Plan an MT4 operating environment.",
    href: "/mt4-white-label",
    icon: Layers3,
  },
  {
    title: "MT5 Server",
    description: "Hosting, access and recovery requirements.",
    href: "/mt5-server",
    icon: Server,
  },
  {
    title: "Market Data",
    description: "Feed connectivity, mapping and monitoring.",
    href: "/pricefeed",
    icon: Network,
  },
  {
    title: "Liquidity Bridge",
    description: "Execution and routing integration scope.",
    href: "/liquidity-bridge",
    icon: GitCompareArrows,
  },
  {
    title: "Brokerage Technology",
    description: "Architecture, deployment and technical operations.",
    href: "/brokerage-technology",
    icon: Workflow,
  },
];

const sectionLinks = [
  { label: "Plan the requirements", href: "#mt4mt5-requirements" },
  { label: "Evaluate compatibility", href: "#mt4mt5-compatibility" },
  { label: "Transition acceptance matrix", href: "#mt4mt5-transition" },
  { label: "Decision questions", href: "#mt4mt5-decisions" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.075 } },
};

function SectionEyebrow({ children, light = false }) {
  return (
    <span className={`mt4mt5-eyebrow ${light ? "mt4mt5-eyebrow-light" : ""}`}>
      <i />
      {children}
    </span>
  );
}

function ScopeLayer({ layer, index }) {
  const Icon = layer.icon;

  return (
    <motion.div
      className="mt4mt5-scope-layer"
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <span className="mt4mt5-scope-icon"><Icon size={19} /></span>
      <span className="mt4mt5-scope-copy">
        <small>Layer {layer.number}</small>
        <strong>{layer.title}</strong>
        <span>{layer.subtitle}</span>
      </span>
      {index < scopeLayers.length - 1 && (
        <span className="mt4mt5-scope-connector" aria-hidden="true" />
      )}
    </motion.div>
  );
}

function RequirementCard({ item }) {
  const Icon = item.icon;

  return (
    <motion.article
      className="mt4mt5-requirement-card"
      variants={fadeUp}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.22 }}
    >
      <div className="mt4mt5-requirement-card-top">
        <span className="mt4mt5-requirement-number">{item.number}</span>
        <span className="mt4mt5-requirement-icon"><Icon size={20} /></span>
      </div>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
      <span className="mt4mt5-card-bottom-line" />
    </motion.article>
  );
}

export default function MT4vsMT5() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeDecision, setActiveDecision] = useState(0);

  return (
    <main className="mt4mt5-page">
      <section className="mt4mt5-hero">
        <div className="mt4mt5-hero-grid" aria-hidden="true" />
        <div className="mt4mt5-hero-glow mt4mt5-hero-glow-a" aria-hidden="true" />
        <div className="mt4mt5-hero-glow mt4mt5-hero-glow-b" aria-hidden="true" />

        <div className="mt4mt5-container mt4mt5-hero-layout">
          <motion.div
            className="mt4mt5-hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, ease: "easeOut" }}
          >
            <SectionEyebrow>Platform Comparison</SectionEyebrow>
            <h1>
              MT4 vs MT5 for
              <span> Brokerage Infrastructure</span>
            </h1>
            <p>
              Compare MetaTrader 4 and MetaTrader 5 from the perspective of
              brokerage operations, technology planning, integrations and
              long-term platform strategy.
            </p>

            <div className="mt4mt5-hero-actions">
              <a className="mt4mt5-button mt4mt5-button-primary" href="/contact">
                Discuss requirements <ArrowUpRight size={17} />
              </a>
              <a className="mt4mt5-button mt4mt5-button-secondary" href="#mt4mt5-requirements">
                Explore the scope <ArrowDown size={16} />
              </a>
            </div>

            <div className="mt4mt5-hero-note">
              <CheckCircle2 size={16} />
              Compare the full operating scope—not just platform features.
            </div>
          </motion.div>

          <motion.div
            className="mt4mt5-hero-visual"
            initial={{ opacity: 0, scale: 0.94, x: 18 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <div className="mt4mt5-visual-orbit mt4mt5-visual-orbit-one" />
            <div className="mt4mt5-visual-orbit mt4mt5-visual-orbit-two" />

            <div className="mt4mt5-compare-panel">
              <div className="mt4mt5-panel-topbar">
                <span className="mt4mt5-panel-dots"><i /><i /><i /></span>
                <span>PLATFORM SCOPE REVIEW</span>
                <span className="mt4mt5-panel-status"><i /> COMPARISON</span>
              </div>

              <div className="mt4mt5-panel-heading">
                <div>
                  <small>INFRASTRUCTURE PLANNING</small>
                  <h2>Compare the environment</h2>
                </div>
                <span className="mt4mt5-panel-heading-icon"><GitCompareArrows size={22} /></span>
              </div>

              <div className="mt4mt5-platform-compare">
                <div className="mt4mt5-platform-box mt4mt5-platform-box-mt4">
                  <span className="mt4mt5-platform-symbol">4</span>
                  <small>METATRADER</small>
                  <strong>MT4</strong>
                  <span className="mt4mt5-platform-tag">Existing estate</span>
                </div>
                <div className="mt4mt5-vs-divider"><span>VS</span></div>
                <div className="mt4mt5-platform-box mt4mt5-platform-box-mt5">
                  <span className="mt4mt5-platform-symbol">5</span>
                  <small>METATRADER</small>
                  <strong>MT5</strong>
                  <span className="mt4mt5-platform-tag">Newer generation</span>
                </div>
              </div>

              <div className="mt4mt5-panel-checklist">
                {[
                  "Asset classes & market scope",
                  "Existing tools & integrations",
                  "Migration and operating effort",
                ].map((label) => (
                  <div key={label}>
                    <span><Check size={13} /></span>
                    <strong>{label}</strong>
                    <small>REVIEW</small>
                  </div>
                ))}
              </div>

              <div className="mt4mt5-panel-footer">
                <span><ShieldCheck size={14} /> Requirements-led evaluation</span>
                <span>01 / 04</span>
              </div>
            </div>

            <motion.div
              className="mt4mt5-floating-note mt4mt5-floating-note-top"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span><Layers3 size={17} /></span>
              <div><strong>Platform fit</strong><small>Match your target scope</small></div>
            </motion.div>

            <motion.div
              className="mt4mt5-floating-note mt4mt5-floating-note-bottom"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut" }}
            >
              <span><Network size={17} /></span>
              <div><strong>Integration review</strong><small>Check every dependency</small></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="mt4mt5-scope-strip">
        <div className="mt4mt5-container">
          <div className="mt4mt5-scope-strip-heading">
            <span>PLATFORM COMPARISON PROJECT SCOPE</span>
            <span className="mt4mt5-scope-strip-line" />
          </div>
          <motion.div
            className="mt4mt5-scope-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {scopeLayers.map((layer, index) => (
              <ScopeLayer key={layer.number} layer={layer} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mt4mt5-page-index">
        <div className="mt4mt5-container mt4mt5-page-index-inner">
          <strong>On this page</strong>
          <nav aria-label="On this page">
            {sectionLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}<ArrowDownRight size={14} /></a>
            ))}
          </nav>
        </div>
      </section>

      <section className="mt4mt5-section mt4mt5-requirements-section" id="mt4mt5-requirements">
        <div className="mt4mt5-container">
          <motion.div
            className="mt4mt5-section-heading"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <SectionEyebrow>Scope and decisions</SectionEyebrow>
            <h2>Plan the requirements for <span>MT4 vs MT5</span></h2>
            <p>
              Compare the operational requirements, integration estate and
              long-term fit before choosing or changing a platform.
            </p>
          </motion.div>

          <motion.div
            className="mt4mt5-requirements-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {requirements.map((item) => (
              <RequirementCard key={item.number} item={item} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mt4mt5-compatibility-section" id="mt4mt5-compatibility">
        <div className="mt4mt5-container mt4mt5-compatibility-layout">
          <motion.div
            className="mt4mt5-compatibility-copy"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <SectionEyebrow>Technical compatibility</SectionEyebrow>
            <h2>Evaluate compatibility before <span>selecting a platform.</span></h2>
            <p>
              MT4 client tools commonly depend on MQL4; MT5 tools use MQL5.
              Assess the programs actually used by your clients, required
              interfaces and reporting workflows. A change of platform does
              not automatically preserve custom software or historic integrations.
            </p>
            <p>
              MT5 supports netting and hedging position accounting. Choose the
              required workflow and check how downstream systems reconcile the
              platform records. New MT4 licenses are no longer available for
              purchase, so an MT4 requirement also needs an assessment of the
              permitted existing arrangement.
            </p>
            <a className="mt4mt5-inline-link" href="/contact">
              Discuss compatibility requirements <ArrowRight size={17} />
            </a>
          </motion.div>

          <motion.div
            className="mt4mt5-compatibility-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mt4mt5-compatibility-card">
              <div className="mt4mt5-compatibility-card-head">
                <span><Network size={18} /></span>
                <div><small>COMPATIBILITY REVIEW</small><strong>Check the connected systems</strong></div>
              </div>
              {[
                ["Client tools", "MQL4 / MQL5"],
                ["CRM & client workflows", "Connector compatibility"],
                ["Bridge & data", "Interfaces and symbol mapping"],
                ["Reporting & automation", "Records and custom logic"],
              ].map(([label, value], index) => (
                <div className="mt4mt5-compatibility-row" key={label}>
                  <span className="mt4mt5-compatibility-row-icon">
                    {index === 0 ? <Layers3 size={17} /> : index === 1 ? <Workflow size={17} /> : index === 2 ? <Network size={17} /> : <Server size={17} />}
                  </span>
                  <div><strong>{label}</strong><small>{value}</small></div>
                  <span className="mt4mt5-review-pill">Review</span>
                </div>
              ))}
              <div className="mt4mt5-compatibility-card-foot">
                <CircleHelp size={15} />
                <span>Verify each dependency on the target configuration.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mt4mt5-section mt4mt5-transition-section" id="mt4mt5-transition">
        <div className="mt4mt5-container">
          <motion.div
            className="mt4mt5-section-heading"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <SectionEyebrow>Migration planning</SectionEyebrow>
            <h2>Create a transition <span>acceptance matrix.</span></h2>
            <p>
              Record the outcome for each client tool and integration before
              switching the target platform configuration.
            </p>
          </motion.div>

          <div className="mt4mt5-transition-layout">
            <motion.div
              className="mt4mt5-transition-copy"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <p>
                For each client tool and integration, record whether it is
                retained, replaced or reworked. Test account creation, symbol
                metadata, client logins, quotes, execution records and reporting
                on the target configuration. Assign an owner to each unresolved difference.
              </p>
              <p>
                Compare the total operating scope of the two options rather
                than a platform label alone. Include hosting, source permissions,
                connection interfaces, operational access, support and the
                effort required to change the existing stack.
              </p>
              <div className="mt4mt5-transition-note">
                <ShieldCheck size={19} />
                <span><strong>Acceptance principle</strong> Every dependency should have a clear test and an accountable owner.</span>
              </div>
            </motion.div>

            <motion.div
              className="mt4mt5-matrix-card"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mt4mt5-matrix-head">
                <div><small>TRANSITION CHECKLIST</small><strong>Acceptance matrix</strong></div>
                <span><CheckCircle2 size={17} /> Planning view</span>
              </div>
              <div className="mt4mt5-matrix-table">
                <div className="mt4mt5-matrix-row mt4mt5-matrix-table-header">
                  <span>Dependency</span><span>Decision</span><span>Test</span>
                </div>
                {[
                  ["Client accounts", "Retain / rework", "Account checks"],
                  ["Symbols & metadata", "Map / verify", "Symbol checks"],
                  ["Quotes & execution", "Test interface", "Flow checks"],
                  ["Reporting & CRM", "Validate tools", "Output checks"],
                ].map((row) => (
                  <div className="mt4mt5-matrix-row" key={row[0]}>
                    <strong>{row[0]}</strong>
                    <span>{row[1]}</span>
                    <span className="mt4mt5-matrix-status"><Check size={12} /> Plan</span>
                  </div>
                ))}
              </div>
              <small className="mt4mt5-matrix-caption">Illustrative planning checklist based on the article's acceptance criteria.</small>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mt4mt5-decision-section" id="mt4mt5-decisions">
        <div className="mt4mt5-container mt4mt5-decision-layout">
          <motion.div
            className="mt4mt5-decision-intro"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <SectionEyebrow>Decision framework</SectionEyebrow>
            <h2>Ask the right questions <span>before deciding.</span></h2>
            <p>
              The appropriate platform depends on the launch stage, asset
              requirements, installed systems and the real cost of change.
            </p>
            <div className="mt4mt5-decision-mini-stat">
              <span><GitCompareArrows size={20} /></span>
              <div><strong>Compare the full scope</strong><small>Platform, integrations and operations</small></div>
            </div>
          </motion.div>

          <div className="mt4mt5-decision-list">
            {decisionQuestions.map((question, index) => {
              const isActive = activeDecision === index;

              return (
                <motion.button
                  className={`mt4mt5-decision-item ${isActive ? "is-active" : ""}`}
                  key={question.number}
                  type="button"
                  onClick={() => setActiveDecision(isActive ? -1 : index)}
                  aria-expanded={isActive}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  <span className="mt4mt5-decision-number">{question.number}</span>
                  <span className="mt4mt5-decision-content">
                    <strong>{question.title}</strong>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.span
                          className="mt4mt5-decision-answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          {question.answer}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                  <ChevronDown size={18} className="mt4mt5-decision-chevron" />
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt4mt5-section mt4mt5-faq-section" id="mt4mt5-faq">
        <div className="mt4mt5-container">
          <motion.div
            className="mt4mt5-section-heading"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <SectionEyebrow>Questions</SectionEyebrow>
            <h2>Questions about <span>MT4 vs MT5.</span></h2>
            <p>Answers to common platform planning and migration questions.</p>
          </motion.div>

          <div className="mt4mt5-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div className={`mt4mt5-faq-item ${isOpen ? "is-open" : ""}`} key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="mt4mt5-faq-question-number">0{index + 1}</span>
                    <strong>{faq.question}</strong>
                    <ChevronDown size={19} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="mt4mt5-faq-answer"
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

      <section className="mt4mt5-related-section">
        <div className="mt4mt5-container">
          <div className="mt4mt5-related-heading">
            <div>
              <SectionEyebrow>Related reading</SectionEyebrow>
              <h2>Continue with the connected <span>technology layers.</span></h2>
            </div>
            <a href="/resources" className="mt4mt5-related-all">
              All resources <ArrowRight size={16} />
            </a>
          </div>

          <motion.div
            className="mt4mt5-related-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {relatedLinks.map((item) => {
              const Icon = item.icon;

              return (
                <motion.a
                  href={item.href}
                  className="mt4mt5-related-card"
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="mt4mt5-related-icon"><Icon size={19} /></span>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                  <span className="mt4mt5-related-arrow"><ArrowUpRight size={16} /></span>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="mt4mt5-final-cta">
        <div className="mt4mt5-final-grid" aria-hidden="true" />
        <div className="mt4mt5-container mt4mt5-final-layout">
          <motion.div
            className="mt4mt5-final-copy"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <SectionEyebrow light>Discuss your infrastructure requirements</SectionEyebrow>
            <h2>Make your platform decision with <span>the full scope in view.</span></h2>
            <p>
              Share your target platform, current systems and required
              workflows with the TGS technical team.
            </p>
            <div className="mt4mt5-final-actions">
              <a className="mt4mt5-button mt4mt5-button-primary" href="/contact">
                Discuss your project <ArrowUpRight size={17} />
              </a>
              <a className="mt4mt5-button mt4mt5-button-glass" href="/brokerage-technology">
                Explore brokerage technology <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="mt4mt5-final-visual"
            initial={{ opacity: 0, scale: 0.93 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mt4mt5-final-ring mt4mt5-final-ring-one" />
            <div className="mt4mt5-final-ring mt4mt5-final-ring-two" />
            <div className="mt4mt5-final-core">
              <GitCompareArrows size={27} />
              <strong>MT4 / MT5</strong>
              <small>PLATFORM SCOPE</small>
            </div>
            <span className="mt4mt5-final-node mt4mt5-final-node-one"><Layers3 size={18} /></span>
            <span className="mt4mt5-final-node mt4mt5-final-node-two"><Network size={18} /></span>
            <span className="mt4mt5-final-node mt4mt5-final-node-three"><Workflow size={18} /></span>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
