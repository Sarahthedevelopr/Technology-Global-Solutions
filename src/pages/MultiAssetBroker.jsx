import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Boxes,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  Database,
  GitBranch,
  Layers3,
  LifeBuoy,
  Network,
  RadioTower,
  RefreshCw,
  ShieldCheck,
  SlidersHorizontal,
  Workflow,
  Zap,
} from "lucide-react";
import "./MultiAssetBroker.css";

const requirements = [
  {
    number: "01",
    title: "Asset-Class Architecture",
    category: "PRODUCT SCOPE",
    description:
      "Map the required product universe, sessions, symbol conventions and contract specifications.",
    points: ["Product and instrument catalogue", "Session calendars", "Symbol and contract rules"],
    icon: Boxes,
  },
  {
    number: "02",
    title: "Platform Strategy",
    category: "TRADING ENVIRONMENT",
    description:
      "Select platform capabilities around the target market structure and client experience.",
    points: ["Platform capability mapping", "Client trading experience", "Integration requirements"],
    icon: Layers3,
  },
  {
    number: "03",
    title: "Data Coverage",
    category: "MARKET DATA",
    description:
      "Plan supported pricing sources, normalization and distribution across asset classes.",
    points: ["Source and instrument coverage", "Symbol normalization", "Price distribution"],
    icon: Database,
  },
  {
    number: "04",
    title: "Execution Topology",
    category: "CONNECTIVITY",
    description:
      "Connect supported downstream execution venues and routing workflows where required.",
    points: ["Supported execution venues", "Routing dependencies", "Connection monitoring"],
    icon: GitBranch,
  },
  {
    number: "05",
    title: "Unified Client Operations",
    category: "CLIENT SYSTEMS",
    description:
      "Coordinate account, funding, support and reporting workflows across product lines.",
    points: ["Account and client workflows", "Funding operations", "Cross-product reporting"],
    icon: Workflow,
  },
  {
    number: "06",
    title: "Operational Scalability",
    category: "PRODUCTION OPERATIONS",
    description:
      "Design monitoring, access and change control for a broader, more complex brokerage stack.",
    points: ["Monitoring and alerting", "Access and change control", "Escalation planning"],
    icon: SlidersHorizontal,
  },
];

const architectureLayers = [
  {
    title: "Platform",
    label: "Trading environment",
    description:
      "Choose platform capabilities around the instruments, market structure and client experience the brokerage intends to support.",
    icon: Layers3,
  },
  {
    title: "Pricing",
    label: "Market data sources",
    description:
      "Map pricing sources and instrument coverage, then plan normalization and distribution to the systems that consume the data.",
    icon: Database,
  },
  {
    title: "Execution",
    label: "Supported connectivity",
    description:
      "Document the downstream execution venues, supported connections and routing workflows required by the operating model.",
    icon: RadioTower,
  },
  {
    title: "Operations",
    label: "Client systems & support",
    description:
      "Coordinate account, funding, reporting and support workflows, with clear ownership for monitoring and production changes.",
    icon: LifeBuoy,
  },
];

const productionChecks = [
  {
    number: "01",
    title: "Map dependencies",
    description:
      "Document how platform, data, execution, client systems and infrastructure depend on each other.",
    icon: Network,
  },
  {
    number: "02",
    title: "Define ownership",
    description:
      "Make production access, monitoring, change control and escalation responsibilities explicit.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Validate production flows",
    description:
      "Test business-critical workflows and failure scenarios before relying on them in live operations.",
    icon: RefreshCw,
  },
];

const faqs = [
  {
    question: "What makes multi-asset infrastructure more complex?",
    answer:
      "A broader product universe increases requirements around market data, symbol configuration, sessions, execution connectivity and operational coordination.",
  },
  {
    question: "Is MT5 suitable for multi-asset brokerage?",
    answer:
      "MT5 is positioned for broader multi-asset use, but the final architecture should be matched to the target instruments and integrations.",
  },
  {
    question: "Can different data sources be used for different asset classes?",
    answer:
      "Yes, where supported. Source selection and normalization can be structured around the required coverage and downstream platform needs.",
  },
  {
    question: "Can client operations stay unified across asset classes?",
    answer:
      "A properly integrated CRM and back-office layer can help keep client and account workflows consistent across different product lines.",
  },
];

const relatedLinks = [
  { title: "MT5 White Label", category: "PLATFORM", href: "/mt5-white-label", icon: Layers3 },
  { title: "MT4 White Label", category: "PLATFORM", href: "/mt4-white-label", icon: Layers3 },
  { title: "MT5 Server", category: "INFRASTRUCTURE", href: "/mt5-server", icon: RadioTower },
  { title: "MT4 Server", category: "INFRASTRUCTURE", href: "/mt4-server", icon: RadioTower },
  { title: "Market Data", category: "DATA CONNECTIVITY", href: "/pricefeed", icon: Database },
  { title: "Liquidity Bridge", category: "EXECUTION", href: "/liquidity-bridge", icon: GitBranch },
  { title: "Broker CRM", category: "CLIENT SYSTEMS", href: "/broker-crm", icon: Workflow },
  { title: "Brokerage Technology", category: "ARCHITECTURE", href: "/brokerage-technology", icon: Network },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function MultiAssetBroker() {
  const [activeLayer, setActiveLayer] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const ActiveLayerIcon = architectureLayers[activeLayer].icon;

  return (
    <main className="mab-page">
      {/* Hero */}
      <section className="mab-hero" id="top">
        <div className="mab-hero-grid" aria-hidden="true" />
        <div className="mab-hero-glow mab-glow-a" aria-hidden="true" />
        <div className="mab-hero-glow mab-glow-b" aria-hidden="true" />

        <div className="mab-container mab-hero-layout">
          <motion.div
            className="mab-hero-copy"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
            }}
          >
            <motion.div className="mab-eyebrow" variants={reveal}>
              <i /> Multi-Asset Brokerage
            </motion.div>
            <motion.h1 variants={reveal}>
              Technology Infrastructure for <span>Multi-Asset Brokers</span>
            </motion.h1>
            <motion.p variants={reveal}>
              Coordinate platform, pricing, execution and operational systems across multiple asset classes without treating each product line as an isolated technology stack.
            </motion.p>
            <motion.div className="mab-hero-actions" variants={reveal}>
              <a className="mab-btn mab-btn-primary" href="https://wa.me/" target="_blank" rel="noreferrer">
                Discuss requirements <ArrowUpRight size={16} />
              </a>
              <a className="mab-btn mab-btn-secondary" href="#scope">
                Explore the scope <ArrowDown size={16} />
              </a>
            </motion.div>
            <motion.div className="mab-hero-points" variants={reveal}>
              <span><Check size={14} /> Connected technology layers</span>
              <span><Check size={14} /> Clear operating dependencies</span>
              <span><Check size={14} /> Production-flow validation</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="mab-hero-visual"
            initial={{ opacity: 0, x: 28, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.25, ease: "easeOut" }}
          >
            <div className="mab-orbit mab-orbit-one" />
            <div className="mab-orbit mab-orbit-two" />
            <div className="mab-dashboard">
              <div className="mab-dashboard-top">
                <div className="mab-window-dots"><i /><i /><i /></div>
                <span>BROKER TECHNOLOGY MAP</span>
                <span className="mab-status"><i /> CONNECTED SCOPE</span>
              </div>
              <div className="mab-dashboard-title">
                <div>
                  <small>MULTI-ASSET ENVIRONMENT</small>
                  <h3>Connected broker stack</h3>
                </div>
                <span className="mab-title-icon"><Network size={21} /></span>
              </div>
              <div className="mab-metric-grid">
                <div><small>01 / PLATFORM</small><strong>Trading environment</strong></div>
                <div><small>02 / PRICING</small><strong>Market data sources</strong></div>
                <div><small>03 / EXECUTION</small><strong>Connectivity scope</strong></div>
              </div>
              <div className="mab-system-list">
                {architectureLayers.map((layer, index) => {
                  const Icon = layer.icon;
                  return (
                    <motion.div
                      className="mab-system-row"
                      key={layer.title}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.55 + index * 0.12, duration: 0.35 }}
                    >
                      <span className="mab-system-icon"><Icon size={17} /></span>
                      <div><strong>{layer.title}</strong><small>{layer.label}</small></div>
                      <Check className="mab-row-check" size={15} />
                    </motion.div>
                  );
                })}
              </div>
              <div className="mab-dashboard-foot">
                <span><ShieldCheck size={13} /> ARCHITECTURE SCOPE</span>
                <span>PLATFORM · DATA · EXECUTION · OPS</span>
              </div>
            </div>
            <motion.div className="mab-float-card mab-float-top" animate={{ y: [0, -7, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              <span><BarChart3 size={18} /></span><div><strong>Market coverage</strong><small>Asset-class aware</small></div>
            </motion.div>
            <motion.div className="mab-float-card mab-float-bottom" animate={{ y: [0, 6, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
              <span><Workflow size={18} /></span><div><strong>Unified operations</strong><small>Connected workflows</small></div>
            </motion.div>
          </motion.div>
        </div>

        <div className="mab-scope-strip" id="scope">
          <div className="mab-container mab-strip-inner">
            <strong>MULTI-ASSET BROKERAGE PROJECT SCOPE</strong>
            {architectureLayers.map((layer, index) => {
              const Icon = layer.icon;
              return <span key={layer.title}><i><Icon size={16} /></i><b>Layer {String(index + 1).padStart(2, "0")}</b><small>{layer.title}</small></span>;
            })}
          </div>
        </div>
      </section>

      {/* Page contents / requirements */}
      <section className="mab-section mab-requirements" id="requirements">
        <div className="mab-container">
          <motion.div className="mab-section-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
            <div className="mab-eyebrow"><i /> Scope and decisions</div>
            <h2>Plan the requirements for <span>Multi-Asset Brokers</span></h2>
            <p>Define the product universe first, then align platform capabilities, market data, execution connectivity and client operations around the selected markets.</p>
          </motion.div>
          <div className="mab-requirements-grid">
            {requirements.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  className="mab-requirement-card"
                  key={item.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={reveal}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="mab-card-top"><span>{item.number}</span><i><Icon size={21} /></i></div>
                  <small className="mab-card-category">{item.category}</small>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="mab-card-points">
                    {item.points.map((point) => <span key={point}><Check size={13} />{point}</span>)}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Different operating conditions */}
      <section className="mab-section mab-markets-section" id="markets">
        <div className="mab-container mab-markets-layout">
          <motion.div className="mab-markets-copy" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
            <div className="mab-eyebrow"><i /> Coordinate different markets</div>
            <h2>Coordinate markets with different <span>operating conditions</span></h2>
            <p>Maintain an instrument catalogue with asset class, session calendar, pricing source, execution endpoint and required account configuration.</p>
            <p>A shared client portal does not remove differences in how markets provide data or accept requests. Validate reporting and operational permissions across the selected asset classes.</p>
            <p>Plan how the team handles a closed session, an unavailable source or a failed connection without assuming that every market has the same trading schedule or recovery behaviour.</p>
            <a className="mab-text-link" href="#production">Explore production validation <ArrowRight size={16} /></a>
          </motion.div>
          <motion.div className="mab-market-visual" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }}>
            <div className="mab-market-grid" />
            <div className="mab-market-ring mab-ring-a" />
            <div className="mab-market-ring mab-ring-b" />
            <div className="mab-market-core"><Network size={26} /><strong>ONE STACK</strong><small>CONNECTED SYSTEMS</small></div>
            <div className="mab-market-node mab-node-one"><BarChart3 size={17} /><span>Asset catalogue</span></div>
            <div className="mab-market-node mab-node-two"><Clock3 size={17} /><span>Session calendars</span></div>
            <div className="mab-market-node mab-node-three"><Database size={17} /><span>Pricing sources</span></div>
            <div className="mab-market-node mab-node-four"><GitBranch size={17} /><span>Execution endpoints</span></div>
            <div className="mab-market-node mab-node-five"><LifeBuoy size={17} /><span>Operations</span></div>
          </motion.div>
        </div>
      </section>

      {/* Interactive architecture */}
      <section className="mab-section mab-architecture-section" id="architecture">
        <div className="mab-container">
          <motion.div className="mab-section-heading mab-centered" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <div className="mab-eyebrow"><i /> Connected technology layers</div>
            <h2>One connected <span>broker stack</span></h2>
            <p>Map the data, execution and operational systems around your platform. Select a layer to explore its role in the wider architecture.</p>
          </motion.div>
          <div className="mab-architecture-layout">
            <div className="mab-layer-selector" role="tablist" aria-label="Broker technology layers">
              {architectureLayers.map((layer, index) => {
                const Icon = layer.icon;
                return (
                  <button
                    className={`mab-layer-button ${activeLayer === index ? "is-active" : ""}`}
                    key={layer.title}
                    type="button"
                    role="tab"
                    aria-selected={activeLayer === index}
                    onClick={() => setActiveLayer(index)}
                  >
                    <span className="mab-layer-number">0{index + 1}</span>
                    <span className="mab-layer-icon"><Icon size={19} /></span>
                    <span className="mab-layer-label"><strong>{layer.title}</strong><small>{layer.label}</small></span>
                    <ArrowUpRight size={17} className="mab-layer-arrow" />
                  </button>
                );
              })}
            </div>
            <div className="mab-layer-detail" role="tabpanel">
              <div className="mab-layer-detail-top"><span>ARCHITECTURE LAYER 0{activeLayer + 1}</span><span className="mab-detail-status"><i /> SCOPE DEFINITION</span></div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLayer}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                >
                  <div className="mab-detail-icon"><ActiveLayerIcon size={25} /></div>
                  <h3>{architectureLayers[activeLayer].title}</h3>
                  <small>{architectureLayers[activeLayer].label}</small>
                  <p>{architectureLayers[activeLayer].description}</p>
                </motion.div>
              </AnimatePresence>
              <div className="mab-layer-pagination">
                {architectureLayers.map((layer, index) => <button key={layer.title} type="button" aria-label={`Show ${layer.title} layer`} className={activeLayer === index ? "is-active" : ""} onClick={() => setActiveLayer(index)} />)}
              </div>
              <div className="mab-layer-note"><Zap size={17} /><p>Architecture decisions should reflect the selected instruments, supported integrations and the brokerage’s real operating requirements.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Production ownership and validation */}
      <section className="mab-section mab-production-section" id="production">
        <div className="mab-container mab-production-layout">
          <motion.div className="mab-production-intro" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <div className="mab-eyebrow"><i /> Production readiness</div>
            <h2>Make the dependencies and responsibilities <span>explicit</span></h2>
            <p>A multi-asset stack needs more than connected components. Document how systems depend on one another, who owns each operational task and how critical workflows behave when a connection or data source is unavailable.</p>
            <a className="mab-btn mab-btn-primary" href="https://wa.me/" target="_blank" rel="noreferrer">Discuss your requirements <ArrowUpRight size={16} /></a>
          </motion.div>
          <div className="mab-production-list">
            {productionChecks.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article className="mab-production-row" key={item.number} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal} transition={{ delay: index * 0.08 }}>
                  <span className="mab-production-number">{item.number}</span>
                  <div><h3>{item.title}</h3><p>{item.description}</p></div>
                  <span className="mab-production-icon"><Icon size={19} /></span>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related technology */}
      <section className="mab-section mab-related-section" id="related">
        <div className="mab-container">
          <motion.div className="mab-section-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <div className="mab-eyebrow"><i /> Related reading</div>
            <h2>Continue with the connected <span>technology layers</span></h2>
            <p>Explore the platform, data, execution and client systems that can form part of a brokerage technology environment.</p>
          </motion.div>
          <div className="mab-related-grid">
            {relatedLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a className="mab-related-card" href={item.href} key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reveal} transition={{ delay: index * 0.04 }} whileHover={{ y: -4 }}>
                  <div className="mab-related-top"><span><Icon size={20} /></span><ArrowUpRight size={17} /></div>
                  <small>{item.category}</small>
                  <h3>{item.title}</h3>
                  <span className="mab-related-link">Explore technology <ArrowRight size={14} /></span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mab-section mab-faq-section" id="questions">
        <div className="mab-container mab-faq-layout">
          <motion.div className="mab-faq-intro" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <div className="mab-eyebrow"><i /> Questions</div>
            <h2>Questions about <span>Multi-Asset Brokers</span></h2>
            <p>Review the main planning considerations for connecting multiple asset classes into one brokerage technology environment.</p>
            <div className="mab-faq-help"><span><CircleHelp size={21} /></span><div><strong>Planning a multi-asset setup?</strong><p>Share your target instruments, platform and current systems with the TGS team.</p><a href="https://wa.me/" target="_blank" rel="noreferrer">Discuss your project <ArrowUpRight size={14} /></a></div></div>
          </motion.div>
          <div className="mab-faq-list">
            {faqs.map((faq, index) => (
              <div className={`mab-faq-item ${openFaq === index ? "is-open" : ""}`} key={faq.question}>
                <button className="mab-faq-question" type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                  <span><small>0{index + 1}</small>{faq.question}</span><ChevronDown size={18} />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index && <motion.div className="mab-faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}><p>{faq.answer}</p></motion.div>}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mab-final-cta">
        <div className="mab-cta-grid" aria-hidden="true" />
        <div className="mab-container mab-cta-layout">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <div className="mab-eyebrow"><i /> Discuss your infrastructure requirements</div>
            <h2>Plan a connected technology stack for your <span>brokerage</span></h2>
            <p>Share your target platform, current systems and required workflows with the TGS technical team.</p>
            <div className="mab-hero-actions">
              <a className="mab-btn mab-btn-primary" href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={16} /></a>
              <a className="mab-btn mab-btn-secondary" href="https://t.me/" target="_blank" rel="noreferrer">Telegram <ArrowUpRight size={16} /></a>
            </div>
          </motion.div>
          <motion.div className="mab-cta-visual" initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
            <div className="mab-cta-ring mab-cta-ring-a" /><div className="mab-cta-ring mab-cta-ring-b" />
            <div className="mab-cta-core"><Network size={25} /><strong>TGS</strong><small>CONNECTED TECHNOLOGY</small></div>
            <span className="mab-cta-node mab-cta-node-a"><Layers3 size={18} /></span>
            <span className="mab-cta-node mab-cta-node-b"><Database size={18} /></span>
            <span className="mab-cta-node mab-cta-node-c"><Workflow size={18} /></span>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
