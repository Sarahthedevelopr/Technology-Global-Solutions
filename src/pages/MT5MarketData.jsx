import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  CircleHelp,
  Database,
  Gauge,
  GitBranch,
  Layers3,
  Network,
  RadioTower,
  RefreshCw,
  Search,
  Server,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import "./MT5MarketData.css";

const marketLayers = [
  {
    id: "sources",
    number: "01",
    title: "Pricing sources",
    subtitle: "Where market prices originate",
    icon: RadioTower,
    description:
      "Identify the required price sources and the responsibilities attached to each connection before data is distributed into the trading environment.",
    points: ["Source and provider requirements", "Supported instruments and sessions", "Connectivity ownership"],
  },
  {
    id: "symbols",
    number: "02",
    title: "Symbols & specifications",
    subtitle: "Consistent instrument definitions",
    icon: SlidersHorizontal,
    description:
      "Document symbol naming, contract specifications and trading-session assumptions so instruments can be reviewed consistently across connected systems.",
    points: ["Symbol naming and mapping", "Digits, contract size and tick settings", "Trading sessions and exceptions"],
  },
  {
    id: "distribution",
    number: "03",
    title: "Data distribution",
    subtitle: "Moving prices to the platform",
    icon: Network,
    description:
      "Map how market data reaches the relevant platform environment and identify dependencies, access requirements and distribution boundaries.",
    points: ["Platform-side data flow", "Network and access dependencies", "Distribution scope and ownership"],
  },
  {
    id: "quality",
    number: "04",
    title: "Quality & monitoring",
    subtitle: "Visibility into data behaviour",
    icon: Activity,
    description:
      "Agree on the checks and operational signals used to review data availability, price behaviour and connectivity health.",
    points: ["Connection and availability checks", "Price and symbol validation", "Escalation and recovery expectations"],
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Discover",
    text: "Record asset classes, instruments, provider requirements and the target MT5 environment.",
    icon: Search,
  },
  {
    number: "02",
    title: "Map",
    text: "Document source connections, symbol specifications, data paths and dependencies.",
    icon: GitBranch,
  },
  {
    number: "03",
    title: "Validate",
    text: "Review instrument definitions, connectivity behaviour and agreed acceptance checks.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Operate",
    text: "Confirm monitoring, ownership, change handling and escalation procedures.",
    icon: RefreshCw,
  },
];

const capabilityCards = [
  {
    number: "01",
    title: "Multi-asset instrument planning",
    text: "Organise instrument requirements by asset class and document the specifications needed for the intended MT5 setup.",
    icon: BarChart3,
  },
  {
    number: "02",
    title: "Provider connectivity mapping",
    text: "Record the required provider connections, access prerequisites and technical responsibilities.",
    icon: Network,
  },
  {
    number: "03",
    title: "Symbol configuration review",
    text: "Review symbol names, contract details, digits, sessions and other agreed instrument settings.",
    icon: SlidersHorizontal,
  },
  {
    number: "04",
    title: "Data flow visibility",
    text: "Make the path from source to platform understandable, including the systems and teams involved.",
    icon: Workflow,
  },
  {
    number: "05",
    title: "Validation planning",
    text: "Define checks for availability, expected price behaviour and symbol consistency before production use.",
    icon: Gauge,
  },
  {
    number: "06",
    title: "Operational ownership",
    text: "Clarify who reviews incidents, manages changes and coordinates with providers when issues occur.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "What does MT5 market data connectivity include?",
    answer:
      "The scope can include provider and source requirements, instrument and symbol mapping, connectivity dependencies, platform-side distribution, validation and operational ownership. Exact inclusions depend on the selected provider and the broker's environment.",
  },
  {
    question: "Does market data automatically include liquidity or execution?",
    answer:
      "No. Pricing data and execution connectivity are related but distinct technical layers. Liquidity arrangements, bridge connectivity and execution endpoints should be confirmed separately for the intended setup.",
  },
  {
    question: "Can existing symbol specifications be retained?",
    answer:
      "Existing specifications can be reviewed as part of discovery. Compatibility, provider requirements and the intended trading setup should be checked before retaining or changing symbol definitions.",
  },
  {
    question: "Which asset classes can be planned?",
    answer:
      "The planning process can document the asset classes and instruments required for the project. Availability, data rights, provider support and platform configuration must be confirmed for each intended market.",
  },
  {
    question: "How are data issues monitored?",
    answer:
      "Monitoring expectations should be agreed around connection health, availability, validation signals, escalation paths and operational responsibilities. The actual monitoring capability depends on the connected systems and service scope.",
  },
  {
    question: "What information should we prepare before starting?",
    answer:
      "Prepare the target MT5 environment, required asset classes and symbols, existing provider details, symbol specifications, current connectivity diagram and the people responsible for technical operations.",
  },
];

const relatedLinks = [
  {
    number: "01",
    title: "MT5 Server Infrastructure",
    text: "Plan hosting, runtime access, monitoring and continuity around the trading environment.",
    href: "/mt5-server",
    icon: Server,
  },
  {
    number: "02",
    title: "Liquidity Bridge",
    text: "Explore the execution-routing layer that sits alongside market data connectivity.",
    href: "/liquidity-bridge",
    icon: GitBranch,
  },
  {
    number: "03",
    title: "Broker CRM",
    text: "Review the client and back-office systems that may depend on platform data and workflows.",
    href: "/broker-crm",
    icon: Layers3,
  },
  {
    number: "04",
    title: "MT5 White Label",
    text: "Connect market data planning with the wider MT5 platform and brokerage setup.",
    href: "/mt5-white-label",
    icon: Database,
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 22 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <motion.div
      className={`md-section-heading ${centered ? "md-section-heading--center" : ""}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <span className="md-eyebrow"><i />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

function MarketDataVisual() {
  const bars = [28, 44, 36, 57, 48, 67, 52, 76, 61, 86, 69, 96, 79, 108, 89, 120, 100, 132];
  return (
    <div className="md-visual" aria-label="Illustration of market data flowing into a trading platform">
      <div className="md-visual-glow" />
      <div className="md-visual-orbit md-visual-orbit--one" />
      <div className="md-visual-orbit md-visual-orbit--two" />
      <motion.div className="md-floating-card md-floating-card--source" animate={{ y: [0, -7, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
        <span className="md-mini-icon"><RadioTower size={17} /></span>
        <span><small>DATA SOURCE</small><strong>Provider feed</strong></span>
        <i className="md-live-dot" />
      </motion.div>
      <motion.div className="md-floating-card md-floating-card--platform" animate={{ y: [0, 7, 0] }} transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}>
        <span className="md-mini-icon"><Layers3 size={17} /></span>
        <span><small>DESTINATION</small><strong>MT5 environment</strong></span>
      </motion.div>
      <svg className="md-flow-lines" viewBox="0 0 520 330" fill="none" aria-hidden="true">
        <path d="M65 90 C160 90 145 165 235 165 S340 82 455 110" />
        <path d="M70 225 C165 225 160 165 235 165 S345 245 455 218" />
        <circle cx="235" cy="165" r="5" />
      </svg>
      <div className="md-chart-panel">
        <div className="md-chart-head">
          <div><span className="md-chart-dot" /><small>MARKET DATA FLOW</small></div>
          <span className="md-chart-status"><i /> CONNECTED VIEW</span>
        </div>
        <div className="md-chart-meta"><strong>Price distribution</strong><span>MT5 / DATA</span></div>
        <div className="md-chart">
          <div className="md-chart-grid"><i /><i /><i /><i /></div>
          <div className="md-chart-bars">
            {bars.map((height, index) => (
              <motion.span
                key={index}
                initial={{ height: 0, opacity: 0.3 }}
                animate={{ height, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.025, duration: 0.55, ease: "easeOut" }}
              />
            ))}
          </div>
          <svg className="md-chart-line" viewBox="0 0 360 140" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 108 L24 92 L42 101 L63 70 L83 81 L105 57 L127 72 L148 48 L171 61 L193 34 L215 50 L236 26 L257 44 L279 18 L301 33 L324 12 L360 20" />
          </svg>
        </div>
        <div className="md-chart-foot"><span><i /> Source mapped</span><span><i /> Symbols reviewed</span><span><i /> Flow documented</span></div>
      </div>
      <div className="md-visual-caption"><Sparkles size={13} /> SOURCE → SYMBOLS → PLATFORM <b>01—03</b></div>
    </div>
  );
}

export default function MT5MarketData() {
  const [activeLayer, setActiveLayer] = useState("sources");
  const [openFaq, setOpenFaq] = useState(0);
  const active = marketLayers.find((layer) => layer.id === activeLayer) || marketLayers[0];
  const ActiveIcon = active.icon;

  const scrollToContact = () => {
    const contact = document.getElementById("md-contact");
    if (contact) contact.scrollIntoView({ behavior: "smooth", block: "center" });
    else window.location.href = "/contact";
  };

  return (
    <main className="md-page">
      <section className="md-hero">
        <div className="md-hero-grid" aria-hidden="true" />
        <div className="md-container md-hero-layout">
          <motion.div className="md-hero-copy" initial={{ opacity: 0, x: -22 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }}>
            <span className="md-eyebrow"><i /> MT5 MARKET DATA CONNECTIVITY</span>
            <h1>Market data built around <span>your MT5 environment.</span></h1>
            <p className="md-hero-description">
              Map pricing sources, instrument specifications and data distribution before connecting market data to your brokerage platform. TGS helps define the dependencies, validation checks and operational responsibilities for the agreed scope.
            </p>
            <div className="md-hero-actions">
              <button className="md-button md-button--primary" onClick={scrollToContact}>Discuss Data Requirements <ArrowUpRight size={17} /></button>
              <a className="md-button md-button--secondary" href="#md-architecture">Explore Data Layers <ArrowRight size={16} /></a>
            </div>
            <div className="md-hero-proof">
              <span><Check size={14} /> Source requirements</span>
              <span><Check size={14} /> Symbol mapping</span>
              <span><Check size={14} /> Data-flow clarity</span>
            </div>
          </motion.div>
          <motion.div className="md-hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.12 }}>
            <MarketDataVisual />
          </motion.div>
        </div>
        <div className="md-container md-highlight-strip">
          {[
            ["01", "Pricing sources", "Provider requirements"],
            ["02", "Instrument scope", "Symbols & specifications"],
            ["03", "Data distribution", "Connectivity dependencies"],
            ["04", "Operational visibility", "Validation & ownership"],
          ].map(([number, title, subtitle]) => (
            <div className="md-highlight" key={number}><span>{number}</span><div><strong>{title}</strong><small>{subtitle}</small></div></div>
          ))}
        </div>
      </section>

      <section className="md-section md-architecture-section" id="md-architecture">
        <div className="md-container">
          <SectionHeading
            eyebrow="CONNECTED DATA ARCHITECTURE"
            title="Four layers. One documented data flow."
            description="Select a layer to explore the role it plays in the market-data setup."
            centered
          />
          <div className="md-architecture">
            <div className="md-layer-list" role="tablist" aria-label="Market data layers">
              {marketLayers.map((layer) => {
                const Icon = layer.icon;
                const selected = layer.id === activeLayer;
                return (
                  <button
                    type="button"
                    className={`md-layer-tab ${selected ? "is-active" : ""}`}
                    key={layer.id}
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveLayer(layer.id)}
                  >
                    <span className="md-layer-number">{layer.number}</span>
                    <span className="md-layer-icon"><Icon size={20} /></span>
                    <span className="md-layer-copy"><strong>{layer.title}</strong><small>{layer.subtitle}</small></span>
                    <ArrowUpRight className="md-layer-arrow" size={17} />
                  </button>
                );
              })}
            </div>
            <div className="md-layer-detail" role="tabpanel">
              <div className="md-detail-topline"><span>SELECTED DATA LAYER</span><span className="md-detail-live"><i /> SCOPE VIEW</span></div>
              <AnimatePresence mode="wait">
                <motion.div
                  className="md-detail-content"
                  key={active.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.24 }}
                >
                  <div className="md-detail-icon"><ActiveIcon size={25} /></div>
                  <span className="md-detail-index">LAYER {active.number}</span>
                  <h3>{active.title}</h3>
                  <p>{active.description}</p>
                  <ul>{active.points.map((point) => <li key={point}><Check size={15} />{point}</li>)}</ul>
                </motion.div>
              </AnimatePresence>
              <div className="md-detail-footer">
                <span><small>ARCHITECTURE</small><strong>Mapped dependencies</strong></span>
                <span><small>VALIDATION</small><strong>Agreed checks</strong></span>
                <span><small>OPERATIONS</small><strong>Clear ownership</strong></span>
              </div>
              <div className="md-detail-circuit" aria-hidden="true"><i /><i /><i /></div>
            </div>
          </div>
          <p className="md-note"><CircleHelp size={16} /> Provider availability, data rights, instrument support and implementation responsibilities must be confirmed for the intended project.</p>
        </div>
      </section>

      <section className="md-marquee" aria-label="Market data capabilities">
        <div className="md-marquee-track">{[0, 1].map((copy) => (
          <div className="md-marquee-group" key={copy} aria-hidden={copy === 1}>
            {["PRICE SOURCES", "SYMBOL MAPPING", "DATA CONNECTIVITY", "INSTRUMENT SCOPE", "VALIDATION", "OPERATIONAL MONITORING"].map((item) => <span key={item}><i />{item}</span>)}
          </div>
        ))}</div>
      </section>

      <section className="md-section md-capabilities-section">
        <div className="md-container">
          <SectionHeading
            eyebrow="MARKET DATA SCOPE"
            title="Plan the details that keep data connected."
            description="A practical market-data scope makes provider dependencies, instrument definitions and operational responsibilities visible before implementation."
          />
          <div className="md-capability-grid">
            {capabilityCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Reveal className="md-capability-card" key={card.number} delay={(index % 3) * 0.06}>
                  <div className="md-capability-top"><span>{card.number}</span><Icon size={22} /></div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <div className="md-card-bottom"><span />Scope item<ArrowUpRight size={15} /></div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="md-section md-workflow-section">
        <div className="md-container">
          <SectionHeading
            eyebrow="FROM DISCOVERY TO OPERATIONS"
            title="A clear path from source to platform."
            description="Use a structured sequence to reduce ambiguity around data dependencies and acceptance expectations."
            centered
          />
          <div className="md-workflow-grid">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal className="md-workflow-card" key={step.number} delay={index * 0.08}>
                  <div className="md-workflow-head"><span>{step.number}</span><Icon size={22} /></div>
                  <div className="md-workflow-line"><i /></div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  {index < workflowSteps.length - 1 && <ArrowRight className="md-workflow-arrow" size={18} />}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="md-section md-checklist-section">
        <div className="md-container md-checklist-layout">
          <div className="md-checklist-intro">
            <SectionHeading
              eyebrow="BEFORE IMPLEMENTATION"
              title="What should be confirmed first?"
              description="Starting with a shared requirements list helps identify dependencies early and keeps the delivery scope realistic."
            />
            <button className="md-text-link" onClick={scrollToContact}>Review your requirements <ArrowUpRight size={16} /></button>
          </div>
          <div className="md-checklist">
            {[
              ["01", "Target MT5 environment", "Platform version, environment access and relevant operating constraints."],
              ["02", "Required asset classes", "Markets, instruments and any provider-specific requirements."],
              ["03", "Provider & symbol details", "Current sources, symbol names, specifications and session assumptions."],
              ["04", "Operational ownership", "Who handles monitoring, incidents, changes and provider coordination."],
              ["05", "Acceptance checks", "How availability, symbol configuration and data behaviour will be reviewed."],
            ].map(([number, title, text], index) => (
              <Reveal className="md-check-item" key={number} delay={index * 0.04}>
                <span className="md-check-number">{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <Check size={17} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="md-section md-faq-section">
        <div className="md-container md-faq-layout">
          <div className="md-faq-intro">
            <span className="md-eyebrow"><i /> QUESTIONS, ANSWERED</span>
            <h2>Clear data plans start with clear answers.</h2>
            <p>Explore common questions about provider connectivity, symbols, data distribution and operational readiness.</p>
            <button className="md-text-link" onClick={scrollToContact}>Ask a technical question <ArrowUpRight size={16} /></button>
            <div className="md-faq-mark"><CircleHelp size={76} strokeWidth={0.8} /><span>MT5 / DATA / CONNECTIVITY</span></div>
          </div>
          <div className="md-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div className={`md-faq-item ${isOpen ? "is-open" : ""}`} key={faq.question}>
                  <button type="button" className="md-faq-question" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                    <span><small>{String(index + 1).padStart(2, "0")}</small>{faq.question}</span>
                    <ChevronDown size={18} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div className="md-faq-answer-wrap" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.24 }}>
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

      <section className="md-section md-related-section">
        <div className="md-container">
          <div className="md-related-heading">
            <SectionHeading
              eyebrow="CONTINUE BUILDING"
              title="Connect the rest of your brokerage stack."
              description="Explore related technology layers that may sit alongside your market-data environment."
            />
            <span className="md-related-count">01 — 04</span>
          </div>
          <div className="md-related-grid">
            {relatedLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal className="md-related-card" key={item.number} delay={index * 0.06}>
                  <a href={item.href} className="md-related-link">
                    <div className="md-related-top"><span>{item.number}</span><Icon size={22} /></div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <span className="md-related-cta">Explore service <ArrowUpRight size={15} /></span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="md-contact-section" id="md-contact">
        <div className="md-contact-grid" aria-hidden="true" />
        <div className="md-container md-contact-layout">
          <div>
            <span className="md-eyebrow"><i /> LET'S MAP YOUR DATA REQUIREMENTS</span>
            <h2>Build a clearer market-data connection.</h2>
            <p>Share your target MT5 environment, instrument requirements and existing provider setup. We can help map the dependencies and define the next technical steps.</p>
          </div>
          <div className="md-contact-actions">
            <a className="md-button md-button--white" href="/contact">Discuss Your Project <ArrowUpRight size={16} /></a>
            <a className="md-button md-button--outline-white" href="/mt5-server">Explore MT5 Infrastructure <ArrowRight size={16} /></a>
            <small>Technical discovery · Scope-led planning · Defined responsibilities</small>
          </div>
        </div>
      </section>
    </main>
  );
}
