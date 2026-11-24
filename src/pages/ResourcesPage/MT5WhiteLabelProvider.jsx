import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Check,
  ChevronDown,
  CircleHelp,
  Cloud,
  Database,
  GitBranch,
  Layers3,
  LockKeyhole,
  Network,
  RadioTower,
  ShieldCheck,
  SlidersHorizontal,
  Workflow,
  Wrench,
  Activity,
} from "lucide-react";
import "./MT5WhiteLabelProvider.css";

const stackLayers = [
  { number: "01", label: "Platform", title: "Trading Platform", detail: "MT4 / MT5 trading environment and broker operations", icon: Layers3 },
  { number: "02", label: "Pricing", title: "Market Data", detail: "Source connectivity and symbol distribution", icon: Database },
  { number: "03", label: "Routing", title: "Bridge", detail: "Execution routing and platform connectivity", icon: GitBranch },
  { number: "04", label: "Execution", title: "Liquidity", detail: "Supported downstream execution endpoints", icon: RadioTower },
  { number: "05", label: "Client Ops", title: "CRM / API", detail: "Accounts, onboarding and integrations", icon: Workflow },
  { number: "06", label: "Runtime", title: "Operations", detail: "Hosting, monitoring and continuity", icon: Cloud },
];

const scopeCards = [
  { title: "Platform Scope", text: "Define groups, symbols, access, branding and broker-side operational requirements.", icon: SlidersHorizontal, tag: "Configuration" },
  { title: "Infrastructure", text: "Plan hosting, network connectivity, monitoring, backup and controlled administrative access.", icon: Cloud, tag: "Runtime" },
  { title: "Market Data", text: "Connect supported pricing sources, normalize symbols and configure platform distribution.", icon: Database, tag: "Pricing" },
  { title: "Liquidity Connectivity", text: "Integrate supported bridge and execution connectivity where required by the operating model.", icon: Network, tag: "Execution" },
  { title: "CRM & APIs", text: "Connect client onboarding, account workflows, payments and reporting through supported interfaces.", icon: Workflow, tag: "Integrations" },
  { title: "Operations", text: "Define ownership, escalation and change-control procedures for the production environment.", icon: Activity, tag: "Continuity" },
];

const related = [
  { title: "MT5 White Label", text: "Core MT5 White Label infrastructure and deployment scope.", href: "/mt5-white-label", number: "01" },
  { title: "MT5 Server", text: "Runtime architecture, monitoring and operational continuity.", href: "/mt5-server", number: "02" },
  { title: "Market Data Feed", text: "Source connectivity, normalization and distribution.", href: "/pricefeed", number: "03" },
  { title: "Liquidity Bridge", text: "Execution connectivity, routing and mapping.", href: "/liquidity-bridge", number: "04" },
  { title: "Broker CRM", text: "Client operations, accounts, APIs and workflows.", href: "/broker-crm", number: "05" },
  { title: "Brokerage Technology", text: "End-to-end architecture across the entire stack.", href: "/brokerage-technology", number: "06" },
];

const delivery = [
  { number: "01", title: "Requirements Mapping", label: "DISCOVERY", text: "Document platform scope, instruments, integrations, connectivity, access and operational responsibilities.", icon: CircleHelp },
  { number: "02", title: "Dependency Design", label: "ARCHITECTURE", text: "Map how platform, data, execution, CRM and infrastructure components connect before production changes begin.", icon: Boxes },
  { number: "03", title: "Controlled Implementation", label: "DEPLOYMENT", text: "Configure the agreed environment with defined access, change control and rollback considerations.", icon: Wrench },
  { number: "04", title: "Production Testing", label: "VALIDATION", text: "Validate business-critical flows, connectivity, permissions, monitoring and recovery procedures.", icon: ShieldCheck },
  { number: "05", title: "Operational Handover", label: "HANDOVER", text: "Clarify ownership, escalation paths and recurring operational procedures for the live environment.", icon: GitBranch },
  { number: "06", title: "Ongoing Technical Support", label: "SUPPORT", text: "Support agreed infrastructure and integration scope with controlled production changes and troubleshooting.", icon: Activity },
];

const principles = [
  { title: "Documented dependencies", text: "Critical interfaces are mapped so troubleshooting does not depend on guesswork.", icon: Boxes },
  { title: "Controlled access", text: "Administrative privileges and production responsibilities should be explicit and limited to operational need.", icon: LockKeyhole },
  { title: "Monitoring and recovery", text: "Health checks, escalation and recovery procedures are treated as part of the architecture, not an afterthought.", icon: Activity },
];

const brokerInputs = [
  { title: "Platform and product scope", text: "Target platform, instruments, client groups and required broker-side workflows." },
  { title: "Existing technology estate", text: "Current CRM, payments, market data, execution, APIs and infrastructure dependencies." },
  { title: "Connectivity requirements", text: "Supported data, execution and third-party endpoints that must be part of the production design." },
  { title: "Operational responsibilities", text: "Who owns access, monitoring, incidents, changes and day-to-day platform operations." },
];

const faqs = [
  { q: "What should an MT5 White Label provider include?", a: "The scope should be evaluated beyond branding alone and may include infrastructure, data, connectivity, integrations and operational support." },
  { q: "Can an MT5 White Label connect to an existing CRM?", a: "Yes, where supported APIs and interfaces are available. Confirm the required workflows and interface compatibility as part of the technical discovery." },
  { q: "Can market data and execution connectivity be integrated?", a: "Supported pricing and execution components can be integrated as part of the brokerage architecture. The specific endpoints and connectivity requirements should be confirmed during planning." },
  { q: "Is hosting included in the technical architecture?", a: "Hosting, network access, monitoring, backup and operational controls should be planned as part of the production environment. Confirm which responsibilities are included in the provider's agreed scope." },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] } },
};

function SectionEyebrow({ children, light = false }) {
  return <div className={`wl-eyebrow${light ? " is-light" : ""}`}><span />{children}</div>;
}

export default function MT5WhiteLabelProvider() {
  const [activeLayer, setActiveLayer] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const selected = stackLayers[activeLayer];
  const SelectedIcon = selected.icon;

  return (
    <main className="wl-provider-page">
      <section className="wl-hero">
        <div className="wl-hero-grid" aria-hidden="true" />
        <div className="wl-hero-orb wl-orb-one" aria-hidden="true" />
        <div className="wl-hero-orb wl-orb-two" aria-hidden="true" />
        <div className="wl-container wl-hero-layout">
          <motion.div className="wl-hero-copy" initial="hidden" animate="visible" variants={reveal}>
            <div className="wl-hero-badge"><span className="wl-pulse-dot" /> BROKERAGE INFRASTRUCTURE / MT5</div>
            <h1>MT5 White Label Provider <span>for Brokerage Infrastructure</span></h1>
            <p className="wl-hero-lead">Deploy an MT5 White Label environment as part of a broader brokerage stack that can include hosting, market data, connectivity, CRM integrations and operational support.</p>
            <div className="wl-hero-actions">
              <a className="wl-btn wl-btn-primary" href="/contact">Discuss requirements <ArrowUpRight size={17} /></a>
              <a className="wl-btn wl-btn-ghost" href="#wl-stack">Explore infrastructure <ArrowDownRight size={17} /></a>
            </div>
            <div className="wl-hero-footnote"><span className="wl-footline" /> A connected technology stack, planned around your operating model.</div>
          </motion.div>

          <motion.div className="wl-hero-visual" initial={{ opacity: 0, scale: 0.94, x: 24 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.85, delay: 0.15 }}>
            <div className="wl-visual-top"><div><span className="wl-live-dot" /> INFRASTRUCTURE MAP</div><span>LIVE MODEL / 06 LAYERS</span></div>
            <div className="wl-stack-visual">
              {stackLayers.map((layer, index) => {
                const Icon = layer.icon;
                return <motion.button key={layer.number} type="button" className={`wl-stack-node ${activeLayer === index ? "is-active" : ""}`} onClick={() => setActiveLayer(index)} whileHover={{ x: 5 }} whileTap={{ scale: 0.985 }} style={{ "--node-index": index }}>
                  <span className="wl-node-number">{layer.number}</span><span className="wl-node-icon"><Icon size={18} /></span><span className="wl-node-copy"><strong>{layer.title}</strong><small>{layer.detail}</small></span><ArrowUpRight className="wl-node-arrow" size={16} />
                </motion.button>;
              })}
            </div>
            <div className="wl-visual-bottom"><span><i /> CONNECTED STACK</span><span>SELECT A LAYER ↗</span></div>
            <div className="wl-visual-glow" aria-hidden="true" />
          </motion.div>
        </div>
        <div className="wl-hero-bottomline"><span>TGS / TECHNOLOGY GLOBAL SOLUTIONS</span><span>PLATFORM · DATA · EXECUTION · OPERATIONS</span></div>
      </section>

      <section className="wl-stack-section" id="wl-stack">
        <div className="wl-container">
          <motion.div className="wl-section-heading wl-heading-row" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={reveal}>
            <div><SectionEyebrow>INTERACTIVE INFRASTRUCTURE MAP</SectionEyebrow><h2>One brokerage stack.<br /><span>Six connected layers.</span></h2></div>
            <p>Select a layer to see how the technology fits into the production architecture.</p>
          </motion.div>
          <div className="wl-interactive-stack">
            <div className="wl-layer-list" role="tablist" aria-label="Brokerage infrastructure layers">
              {stackLayers.map((layer, index) => {
                const Icon = layer.icon;
                return <button type="button" role="tab" aria-selected={activeLayer === index} className={`wl-layer-tab ${activeLayer === index ? "is-active" : ""}`} key={layer.number} onClick={() => setActiveLayer(index)}>
                  <span className="wl-layer-no">{layer.number}</span><Icon size={19} /><span className="wl-layer-name"><strong>{layer.label}</strong><small>{layer.title}</small></span><ArrowRight size={16} className="wl-layer-arrow" />
                </button>;
              })}
            </div>
            <AnimatePresence mode="wait">
              <motion.div className="wl-layer-detail" key={selected.number} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: 0.24 }}>
                <div className="wl-detail-top"><span>SELECTED LAYER</span><span>{selected.number} / 06</span></div>
                <div className="wl-detail-icon"><SelectedIcon size={28} /></div>
                <div className="wl-detail-kicker">{selected.label.toUpperCase()}</div>
                <h3>{selected.title}</h3>
                <p>{selected.number === "01" ? "MT4/MT5 is the trading layer, connected to data, execution, CRM and operational infrastructure." : selected.detail + ". This layer should be mapped against the platform, operating model and agreed production scope."}</p>
                <div className="wl-detail-statuses"><span><Check size={14} /> Architecture <b>Connected stack</b></span><span><Check size={14} /> Deployment <b>Controlled</b></span><span><Check size={14} /> Monitoring <b>Operational</b></span><span><Check size={14} /> Support <b>Defined scope</b></span></div>
                <div className="wl-detail-watermark">{selected.number}</div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <div className="wl-marquee" aria-label="Related brokerage technology"><div className="wl-marquee-track">{Array.from({ length: 2 }).map((_, group) => <div className="wl-marquee-group" key={group}>{["MT5 WHITE LABEL", "MARKET DATA", "LIQUIDITY BRIDGE", "BROKER CRM", "SERVER INFRASTRUCTURE", "PROP FIRM TECHNOLOGY"].map((label, i) => <span key={label + i}>{label}<i>✳</i></span>)}</div>)}</div></div>

      <section className="wl-scope-section">
        <div className="wl-container">
          <motion.div className="wl-section-heading wl-centered-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={reveal}>
            <SectionEyebrow>COMMERCIAL SCOPE</SectionEyebrow><h2>Evaluate the full <span>brokerage environment.</span></h2><p>Each layer can affect implementation, operations and long-term scalability.</p>
          </motion.div>
          <div className="wl-scope-grid">{scopeCards.map((card, index) => { const Icon = card.icon; return <motion.article className="wl-scope-card" key={card.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reveal} transition={{ delay: index * 0.055 }} whileHover={{ y: -6 }}>
            <div className="wl-card-top"><span className="wl-scope-icon"><Icon size={21} /></span><span className="wl-card-tag">{card.tag}</span></div><h3>{card.title}</h3><p>{card.text}</p><div className="wl-card-line" /><span className="wl-card-index">0{index + 1}</span>
          </motion.article>; })}</div>
        </div>
      </section>

      <section className="wl-related-section">
        <div className="wl-container">
          <div className="wl-section-heading wl-heading-row"><div><SectionEyebrow>RELATED INFRASTRUCTURE</SectionEyebrow><h2>Continue through the<br /><span>brokerage technology stack.</span></h2></div><p>Explore the connected components that may form part of a brokerage deployment.</p></div>
          <div className="wl-related-grid">{related.map((item, index) => <motion.a href={item.href} className="wl-related-card" key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reveal} transition={{ delay: index * 0.04 }} whileHover={{ y: -5 }}><span className="wl-related-number">/{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><span className="wl-related-link">Explore service <ArrowUpRight size={16} /></span></motion.a>)}</div>
        </div>
      </section>

      <section className="wl-planning-section">
        <div className="wl-container wl-planning-layout">
          <motion.div className="wl-planning-copy" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}><SectionEyebrow light>PLANNING</SectionEyebrow><h2>Define scope <span>before deployment.</span></h2><p>Commercial and technical decisions should be mapped together so infrastructure, integrations and operating responsibilities are clear before production launch.</p><a href="/contact" className="wl-btn wl-btn-light">Plan your requirements <ArrowUpRight size={17} /></a><div className="wl-planning-decoration" aria-hidden="true"><div /><div /><div /></div></motion.div>
          <div className="wl-planning-checklist">{[{ n: "01", title: "Platform scope", text: "Agree the target platform, products and broker-side workflows." }, { n: "02", title: "Dependencies", text: "Map data, execution, CRM, API and infrastructure requirements." }, { n: "03", title: "Ownership", text: "Define access, operational responsibilities and escalation paths." }].map((item, i) => <motion.div className="wl-planning-row" key={item.n} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}><span>{item.n}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><Check size={17} /></motion.div>)}</div>
        </div>
      </section>

      <section className="wl-delivery-section">
        <div className="wl-container"><div className="wl-section-heading wl-centered-heading"><SectionEyebrow>DELIVERY FRAMEWORK</SectionEyebrow><h2>From requirements to <span>controlled production deployment.</span></h2><p>Infrastructure work is structured around explicit scope, dependencies, validation and operational ownership.</p></div>
          <div className="wl-delivery-grid">{delivery.map((item, index) => { const Icon = item.icon; return <motion.article className="wl-delivery-card" key={item.number} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reveal} transition={{ delay: index * 0.055 }}><div className="wl-delivery-top"><span>{item.number}</span><Icon size={20} /></div><small>{item.label}</small><h3>{item.title}</h3><p>{item.text}</p><div className="wl-delivery-progress"><span style={{ width: `${((index + 1) / 6) * 100}%` }} /></div></motion.article>; })}</div>
        </div>
      </section>

      <section className="wl-principles-section"><div className="wl-container wl-principles-layout"><div className="wl-section-heading"><SectionEyebrow>ENGINEERING PRINCIPLES</SectionEyebrow><h2>Designed for <span>operational clarity.</span></h2><p>Build the production environment around transparent dependencies, appropriate access and planned recovery.</p></div><div className="wl-principle-list">{principles.map((item, index) => { const Icon = item.icon; return <motion.article className="wl-principle" key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}><span className="wl-principle-icon"><Icon size={20} /></span><div><h3>{item.title}</h3><p>{item.text}</p></div><span className="wl-principle-num">0{index + 1}</span></motion.article>; })}</div></div></section>

      <section className="wl-inputs-section"><div className="wl-container wl-inputs-layout"><div className="wl-section-heading"><SectionEyebrow>BEFORE DEPLOYMENT</SectionEyebrow><h2>What we need <span>from the broker.</span></h2><p>Clear inputs help map dependencies and define an achievable deployment scope before production work begins.</p><a href="/contact" className="wl-text-link">Discuss your setup <ArrowRight size={16} /></a></div><div className="wl-inputs-grid">{brokerInputs.map((item, index) => <div className="wl-input-card" key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><ArrowUpRight size={16} /></div>)}</div></div></section>

      <section className="wl-faq-section"><div className="wl-container wl-faq-layout"><div className="wl-section-heading"><SectionEyebrow>FAQ</SectionEyebrow><h2>Common <span>questions.</span></h2><p>Practical points to clarify when evaluating an MT5 White Label provider and the surrounding technology stack.</p><div className="wl-faq-note"><CircleHelp size={18} /><span>Provider scope and compatibility should be confirmed against your specific requirements.</span></div></div><div className="wl-faq-list">{faqs.map((faq, index) => <div className={`wl-faq-item ${openFaq === index ? "is-open" : ""}`} key={faq.q}><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span className="wl-faq-index">0{index + 1}</span><strong>{faq.q}</strong><ChevronDown size={18} className="wl-faq-chevron" /></button><AnimatePresence initial={false}>{openFaq === index && <motion.div className="wl-faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}><p>{faq.a}</p></motion.div>}</AnimatePresence></div>)}</div></div></section>

      <section className="wl-cta-section"><div className="wl-cta-grid" aria-hidden="true" /><div className="wl-container wl-cta-inner"><div className="wl-cta-orbit" aria-hidden="true"><span /><span /><span /><div><Layers3 size={35} /></div></div><div className="wl-cta-copy"><SectionEyebrow light>BROKER TECHNOLOGY CONSULTATION</SectionEyebrow><h2>Map the right infrastructure <span>for your brokerage.</span></h2><p>Discuss platform, market data, connectivity, integrations and operational requirements with TGS.</p><div className="wl-cta-actions"><a className="wl-btn wl-btn-light" href="/contact">Discuss your requirements <ArrowUpRight size={17} /></a><a className="wl-cta-secondary" href="https://wa.me/358823711153" target="_blank" rel="noreferrer">Contact via WhatsApp <ArrowRight size={16} /></a></div></div></div><div className="wl-cta-bottom"><span>TGS / TECHNICAL CONSULTATION</span><span>DEFINE · CONNECT · VALIDATE · OPERATE</span></div></section>

      <section className="wl-final-contact"><div className="wl-container wl-final-contact-inner"><div><SectionEyebrow>TECHNICAL CONSULTATION</SectionEyebrow><h2>Send us your current <span>infrastructure requirements.</span></h2><p>We can review the target platform, data, connectivity, CRM and hosting scope and define the next technical steps.</p></div><div className="wl-final-contact-actions"><a href="https://wa.me/358823711153" target="_blank" rel="noreferrer" className="wl-contact-chip"><span className="wl-contact-chip-icon">↗</span><span><small>WHATSAPP</small><strong>+358 82 371 1153</strong></span><ArrowUpRight size={16} /></a><a href="https://t.me/whitelabelmetatraderfx" target="_blank" rel="noreferrer" className="wl-contact-chip"><span className="wl-contact-chip-icon">↗</span><span><small>TELEGRAM</small><strong>@whitelabelmetatraderfx</strong></span><ArrowUpRight size={16} /></a></div></div></section>
    </main>
  );
}
