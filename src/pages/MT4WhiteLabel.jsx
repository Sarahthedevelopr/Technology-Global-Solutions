import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Activity, Network, Server,
  RadioTower, Route, ShieldCheck, Database, Workflow, Gauge, Settings2,
  ChartNoAxesCombined, CheckCircle2, ChevronDown, CircleHelp, Cable,
  Layers3, LockKeyhole, RefreshCw, ClipboardCheck, MessagesSquare,
  Boxes, GitBranch, Eye, FileCheck2, Headset, Zap, Globe2, CircleDot
} from "lucide-react";
import "./MT4WhiteLabel.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

const layers = [
  { id: "platform", number: "01", title: "MT4 platform", icon: Server, color: "violet", description: "The MT4 environment anchors established trading workflows, account structures and broker-side operations.", points: ["Platform and account-group scope", "Instrument and client workflow requirements", "Broker-side operational ownership"] },
  { id: "pricing", number: "02", title: "Market data", icon: Activity, color: "pink", description: "Market data sources and symbol definitions should align with the broker's MT4 product and operating model.", points: ["Price-source requirements", "Symbol definitions and mapping", "Data distribution assumptions"] },
  { id: "routing", number: "03", title: "Broker workflows", icon: Route, color: "violet", description: "Routing rules define how eligible orders move through the agreed bridge and execution path.", points: ["Account or group-based rules", "Instrument-specific routing", "Documented fallback assumptions"] },
  { id: "execution", number: "04", title: "Broker operations endpoints", icon: Cable, color: "pink", description: "Supported external liquidity or execution endpoints are integrated according to the broker's requirements and technical compatibility.", points: ["Connectivity and session setup", "Order and execution-flow validation", "Reject and exception handling"] },
  { id: "clients", number: "05", title: "Client systems", icon: Boxes, color: "violet", description: "The bridge can be planned alongside relevant broker systems such as CRM, back office and APIs where required by scope.", points: ["CRM and back-office dependencies", "API and workflow requirements", "Ownership of connected systems"] },
  { id: "operations", number: "06", title: "Runtime operations", icon: Gauge, color: "pink", description: "Monitoring, access, recovery and change processes help teams operate the connected infrastructure consistently.", points: ["Health and connectivity checks", "Controlled access and changes", "Incident and recovery procedures"] },
];

const capabilities = [
  { icon: Cable, n: "01", title: "Broker operations connectivity", text: "Plan the MT4 environment and supported integrations around existing broker systems and workflows." },
  { icon: Route, n: "02", title: "Broker workflows", text: "Define account groups, instruments and client workflows according to the broker's operating model." },
  { icon: GitBranch, n: "03", title: "Market data & symbols", text: "Review pricing sources and symbol definitions used across the MT4 environment." },
  { icon: ShieldCheck, n: "04", title: "Branding & terminals", text: "Plan the branded terminal experience and configuration requirements for the broker's clients." },
  { icon: Eye, n: "05", title: "Broker operations monitoring", text: "Define monitoring, access ownership and support procedures for the live MT4 environment." },
  { icon: ClipboardCheck, n: "06", title: "Controlled deployment", text: "Validate configuration, connectivity and critical client workflows before production use." },
];

const planningSteps = [
  { n: "01", title: "Define the operating model", text: "Confirm target markets, account structure, instruments, client workflows and the role of the existing MT4 platform.", icon: Workflow },
  { n: "02", title: "Plan the architecture", text: "Define the MT4 environment, market data, hosting, CRM and API dependencies for the agreed setup.", icon: Network },
  { n: "03", title: "Deploy & validate", text: "Complete configuration and integration checks before the environment is introduced into production use.", icon: FileCheck2 },
  { n: "04", title: "Plan ongoing operations", text: "Agree support scope, access, monitoring, change ownership and escalation procedures.", icon: RefreshCw },
];

const related = [
  { icon: Activity, title: "Market Data Feed", text: "Plan price distribution and symbol alignment alongside execution connectivity.", href: "/mt5-market-data" },
  { icon: Layers3, title: "MT5 White Label", text: "Explore a branded MT5 environment as part of a wider brokerage technology stack.", href: "/mt5-white-label" },
  { icon: Server, title: "MT4 White Label", text: "Connect bridge requirements with an established MT4 operating environment.", href: "/mt4-server" },
  { icon: Boxes, title: "Brokerage Technology", text: "Consider execution connectivity within the context of the full brokerage operation.", href: "/brokerage-technology" },
];

const delivery = [
  { n: "01", title: "Requirements mapping", text: "Agree scope, integrations, connectivity requirements and responsibilities." },
  { n: "02", title: "Dependency design", text: "Map platform, data, execution, CRM and infrastructure dependencies." },
  { n: "03", title: "Implementation", text: "Configure the agreed components in the appropriate environment." },
  { n: "04", title: "Testing & validation", text: "Validate critical flows, permissions, monitoring and recovery assumptions." },
  { n: "05", title: "Operational handover", text: "Document ownership, escalation paths and recurring operating procedures." },
  { n: "06", title: "Ongoing support", text: "Support troubleshooting within the agreed technical and service scope." },
];

const faqs = [
  { q: "What is included in an MT4 White Label deployment?", a: "Depending on the agreed scope, a deployment can cover the MT4 trading environment, hosting, market data, broker connectivity, CRM integrations, monitoring, backup and operational support." },
  { q: "When is MT4 still relevant for a brokerage?", a: "MT4 can remain relevant when an existing client base, integrations or operational workflows depend on it. New projects should compare platform requirements and long-term integration needs before deciding." },
  { q: "Can an MT4 environment connect to external market data and execution systems?", a: "Supported market-data and execution systems can be integrated where technical compatibility, access and interfaces are available." },
  { q: "What information is needed to scope an MT4 project?", a: "Define account structure, symbols, hosting, data sources, execution model, CRM or API requirements and operational responsibilities." },
  { q: "Is support available after launch?", a: "Ongoing technical support can be aligned with the agreed deployment and operational scope." },
  { q: "What information should a broker prepare before a discussion?", a: "Prepare the target platform, instruments, account groups, current technology stack, required liquidity or execution endpoints, access constraints and the operational responsibilities of your team." },
];

function SectionHeading({ eyebrow, title, text, centered = false }) {
  return (
    <motion.div className={`mwl-section-heading ${centered ? "is-centered" : ""}`} variants={fadeUp}>
      {eyebrow && <span className="mwl-eyebrow"><span />{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}

function HeroNetwork() {
  return (
    <div className="mwl-hero-visual" aria-label="Illustration of a trading platform connected to liquidity and execution systems">
      <div className="mwl-visual-orbit mwl-orbit-one" />
      <div className="mwl-visual-orbit mwl-orbit-two" />
      <div className="mwl-visual-glow" />
      <svg className="mwl-network-lines" viewBox="0 0 560 470" role="presentation">
        <defs>
          <linearGradient id="lbLineGradient" x1="0" x2="1"><stop offset="0%" stopColor="#8b5cf6"/><stop offset="100%" stopColor="#e000e8"/></linearGradient>
        </defs>
        <path d="M280 230 L120 105 M280 230 L440 105 M280 230 L90 330 M280 230 L470 330 M280 230 L280 55 M280 230 L280 405" />
        <path d="M120 105 L65 170 M440 105 L495 170 M90 330 L145 390 M470 330 L415 390" className="mwl-line-secondary" />
        <circle cx="120" cy="105" r="4"/><circle cx="440" cy="105" r="4"/><circle cx="90" cy="330" r="4"/><circle cx="470" cy="330" r="4"/><circle cx="280" cy="55" r="4"/><circle cx="280" cy="405" r="4"/>
      </svg>
      <motion.div className="mwl-hero-node mwl-node-top" animate={{ y: [0, -7, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}><RadioTower size={21}/><span>MT4 Platform</span><small>Broker environment</small></motion.div>
      <motion.div className="mwl-hero-node mwl-node-left" animate={{ y: [0, 6, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}><Database size={20}/><span>Market data</span><small>Pricing & symbols</small></motion.div>
      <motion.div className="mwl-hero-node mwl-node-right" animate={{ y: [0, -5, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}><Route size={20}/><span>Broker operations</span><small>Client workflows</small></motion.div>
      <motion.div className="mwl-hero-node mwl-node-bottom-left" animate={{ y: [0, 5, 0] }} transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut" }}><ShieldCheck size={19}/><span>Access controls</span></motion.div>
      <motion.div className="mwl-hero-node mwl-node-bottom-right" animate={{ y: [0, -6, 0] }} transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut" }}><Activity size={19}/><span>Monitoring</span></motion.div>
      <motion.div className="mwl-hero-core" animate={{ boxShadow: ["0 0 28px rgba(139,92,246,.24)", "0 0 46px rgba(224,0,232,.32)", "0 0 28px rgba(139,92,246,.24)"] }} transition={{ duration: 3.5, repeat: Infinity }}>
        <div className="mwl-core-icon"><Network size={28}/></div><strong>MT4</strong><span>White Label</span><div className="mwl-core-status"><i/> Connectivity layer</div>
      </motion.div>
      <div className="mwl-floating-tag mwl-tag-a"><span className="mwl-status-dot"/> MT4 operations</div>
      <div className="mwl-floating-tag mwl-tag-b"><Zap size={14}/> Platform connected</div>
    </div>
  );
}

function InfrastructureMap() {
  const [active, setActive] = useState(layers[2]);
  const ActiveIcon = active.icon;
  return (
    <section className="mwl-section mwl-map-section" id="infrastructure-map">
      <div className="mwl-container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
          <SectionHeading eyebrow="CONNECTED INFRASTRUCTURE" title="One brokerage stack. Six connected layers." text="Explore how the MT4 platform connects with market data, execution, client systems and runtime operations." centered />
          <div className="mwl-map-layout">
            <div className="mwl-layer-list" role="tablist" aria-label="Infrastructure layers">
              {layers.map((layer) => {
                const Icon = layer.icon;
                const selected = active.id === layer.id;
                return <motion.button variants={fadeUp} key={layer.id} className={`mwl-layer-tab ${selected ? "active" : ""}`} onClick={() => setActive(layer)} role="tab" aria-selected={selected}>
                  <span className="mwl-layer-number">{layer.number}</span><span className="mwl-layer-icon"><Icon size={19}/></span><span className="mwl-layer-name">{layer.title}</span><ArrowUpRight size={16} className="mwl-layer-arrow"/>
                </motion.button>;
              })}
            </div>
            <div className="mwl-map-detail" role="tabpanel">
              <div className="mwl-map-detail-top"><span className="mwl-detail-icon"><ActiveIcon size={24}/></span><span className="mwl-detail-kicker">INFRASTRUCTURE LAYER {active.number}</span><span className="mwl-detail-live"><i/> Layer overview</span></div>
              <AnimatePresence mode="wait"><motion.div key={active.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}>
                <h3>{active.title}</h3><p className="mwl-map-description">{active.description}</p>
                <ul className="mwl-check-list">{active.points.map((point) => <li key={point}><CheckCircle2 size={17}/>{point}</li>)}</ul>
              </motion.div></AnimatePresence>
              <div className="mwl-map-footer"><span><CircleDot size={15}/> Connected system view</span><span>Interactive layer map <ArrowDownRight size={15}/></span></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function MT4WhiteLabel() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <main className="mt4-white-label-page">
      {/* HERO: deliberately different from the other service pages */}
      <section className="mwl-hero">
        <div className="mwl-hero-grid" />
        <div className="mwl-hero-glow mwl-hero-glow-one"/><div className="mwl-hero-glow mwl-hero-glow-two"/>
        <div className="mwl-container mwl-hero-inner">
          <motion.div className="mwl-hero-copy" initial="hidden" animate="visible" variants={stagger}>
            <motion.div className="mwl-hero-pill" variants={fadeUp}><span className="mwl-pill-pulse"/> MT4 BROKERAGE INFRASTRUCTURE <span className="mwl-pill-divider"/> MT4 & MT5</motion.div>
            <motion.h1 variants={fadeUp}>MT4 White Label <span>for Established Broker Operations</span></motion.h1>
            <motion.p className="mwl-hero-description" variants={fadeUp}>Deploy a branded MetaTrader 4 environment around established brokerage workflows, existing integrations and the needs of your client base.</motion.p>
            <motion.div className="mwl-hero-actions" variants={fadeUp}>
              <a href="/contact" className="mwl-btn mwl-btn-primary">Discuss Your Project <ArrowRight size={17}/></a>
              <a href="#infrastructure-map" className="mwl-btn mwl-btn-outline">Explore Infrastructure <ArrowDownRight size={17}/></a>
            </motion.div>
            <motion.div className="mwl-hero-trust-row" variants={fadeUp}>
              <span><CheckCircle2 size={16}/> Platform integration</span><span><CheckCircle2 size={16}/> Branding & workflows</span><span><CheckCircle2 size={16}/> Operational support</span>
            </motion.div>
          </motion.div>
          <motion.div className="mwl-hero-art-wrap" initial={{ opacity: 0, scale: 0.94, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.18 }}><HeroNetwork/></motion.div>
        </div>
        <div className="mwl-hero-bottom"><span>WHITE LABEL</span><span className="mwl-bottom-line"/><span>ROUTING</span><span className="mwl-bottom-line"/><span>OPERATIONS</span></div>
      </section>

      <InfrastructureMap />

      <section className="mwl-section mwl-stack-section">
        <div className="mwl-container"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
          <SectionHeading eyebrow="THE BROKERAGE ECOSYSTEM" title="How MT4 fits into your brokerage technology stack" text="A branded MT4 environment works alongside your existing data, execution, CRM and infrastructure layers. Mapping dependencies helps define the right deployment scope." />
          <div className="mwl-stack-grid">
            {[{icon:Server,title:"Trading platforms",text:"MT4 environments, account groups and broker-side order workflows."},{icon:Database,title:"Market data",text:"Price sources, symbol definitions and data-distribution assumptions."},{icon:Route,title:"Broker operations connectivity",text:"Bridge routing, supported counterparties and downstream execution paths."},{icon:Boxes,title:"Client systems",text:"CRM, back office, APIs and connected broker workflows where in scope."},{icon:Globe2,title:"Infrastructure",text:"Hosting environment, network access, availability and environment dependencies."},{icon:Gauge,title:"Operations",text:"Monitoring, access control, change ownership and incident procedures."}].map((item,i)=>{const Icon=item.icon;return <motion.article variants={fadeUp} className="mwl-stack-card" key={item.title}><div className="mwl-card-icon"><Icon size={21}/></div><span className="mwl-card-index">0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p><div className="mwl-card-bottom"><span>Technology layer</span><ArrowUpRight size={16}/></div></motion.article>})}
          </div>
        </motion.div></div>
      </section>

      <section className="mwl-section mwl-capabilities-section">
        <div className="mwl-container"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={stagger}>
          <SectionHeading eyebrow="CORE CAPABILITIES" title="Infrastructure designed around established MT4 operations" text="Plan the platform, branding, integrations and operational controls around your existing brokerage model." centered />
          <div className="mwl-capability-grid">{capabilities.map((item)=>{const Icon=item.icon;return <motion.article variants={fadeUp} className="mwl-capability-card" key={item.n}><div className="mwl-capability-top"><span className="mwl-capability-icon"><Icon size={22}/></span><span>{item.n}</span></div><h3>{item.title}</h3><p>{item.text}</p><div className="mwl-capability-line"/></motion.article>})}</div>
        </motion.div></div>
      </section>

      <section className="mwl-section mwl-planning-section">
        <div className="mwl-container"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.14 }} variants={stagger}>
          <SectionHeading eyebrow="PROJECT APPROACH" title="From requirements to an operational MT4 environment" text="A structured process helps align platform scope, branding, integrations and operational responsibilities before launch." />
          <div className="mwl-planning-timeline">{planningSteps.map((step,i)=>{const Icon=step.icon;return <motion.article variants={fadeUp} className="mwl-planning-step" key={step.n}><div className="mwl-step-head"><span className="mwl-step-number">{step.n}</span><span className="mwl-step-icon"><Icon size={21}/></span>{i!==planningSteps.length-1&&<span className="mwl-step-connector"/>}</div><h3>{step.title}</h3><p>{step.text}</p></motion.article>})}</div>
        </motion.div></div>
      </section>

      <section className="mwl-section mwl-faq-section" id="faq">
        <div className="mwl-container mwl-faq-layout"><motion.div className="mwl-faq-intro" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}><SectionHeading eyebrow="FAQ" title="Common MT4 White Label questions" text="Answers to common questions about established MT4 workflows, platform integration and deployment scope."/><div className="mwl-faq-note"><span><CircleHelp size={20}/></span><div><strong>Need to discuss a specific setup?</strong><p>Share your platform and integration requirements with the team.</p><a href="/contact">Talk to us <ArrowRight size={15}/></a></div></div></motion.div>
          <div className="mwl-faq-list">{faqs.map((faq,i)=><div className={`mwl-faq-item ${openFaq===i?"open":""}`} key={faq.q}><button className="mwl-faq-question" onClick={()=>setOpenFaq(openFaq===i?-1:i)} aria-expanded={openFaq===i}><span><b>{String(i+1).padStart(2,"0")}</b>{faq.q}</span><span className="mwl-faq-toggle"><ChevronDown size={18}/></span></button><AnimatePresence initial={false}>{openFaq===i&&<motion.div className="mwl-faq-answer" initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.25}}><p>{faq.a}</p></motion.div>}</AnimatePresence></div>)}</div>
        </div>
      </section>

      <section className="mwl-section mwl-related-section">
        <div className="mwl-container"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.14 }} variants={stagger}>
          <SectionHeading eyebrow="RELATED INFRASTRUCTURE" title="Continue building your brokerage stack" text="Explore related components that support established MT4 brokerage operations." centered />
          <div className="mwl-related-grid">{related.map((item,i)=>{const Icon=item.icon;return <motion.a variants={fadeUp} href={item.href} className="mwl-related-card" key={item.title}><div className="mwl-related-icon"><Icon size={23}/></div><span className="mwl-related-index">0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p><span className="mwl-related-link">Explore service <ArrowRight size={16}/></span></motion.a>})}</div>
        </motion.div></div>
      </section>

      <section className="mwl-delivery-section mwl-section">
        <div className="mwl-container"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={stagger}>
          <SectionHeading eyebrow="DELIVERY FRAMEWORK" title="A clear path from discovery to support" text="Each stage defines what needs to be understood, implemented and handed over." centered />
          <div className="mwl-delivery-grid">{delivery.map((item,i)=><motion.article variants={fadeUp} className="mwl-delivery-card" key={item.n}><div className="mwl-delivery-top"><span>{item.n}</span>{i<delivery.length-1&&<div className="mwl-delivery-connector"/>}</div><h3>{item.title}</h3><p>{item.text}</p></motion.article>)}</div>
        </motion.div></div>
      </section>

      <section className="mwl-section mwl-principles-section">
        <div className="mwl-principles-glow"/><div className="mwl-container"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={stagger}>
          <SectionHeading eyebrow="ENGINEERING PRINCIPLES" title="Designed for operational clarity" text="A useful integration is not just connected. Its dependencies, access and recovery expectations are understood." centered />
          <div className="mwl-principles-grid">{[{icon:GitBranch,title:"Documented dependencies",text:"Map critical interfaces and ownership so troubleshooting is based on a known system view."},{icon:LockKeyhole,title:"Controlled access",text:"Make production privileges and responsibilities explicit and limited to operational need."},{icon:RefreshCw,title:"Monitoring & recovery",text:"Define health checks, escalation and recovery procedures as part of the operating model."}].map((item,i)=>{const Icon=item.icon;return <motion.article variants={fadeUp} className="mwl-principle-card" key={item.title}><span className="mwl-principle-icon"><Icon size={23}/></span><span className="mwl-principle-num">0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p><div className="mwl-principle-bottom"><span>Operational principle</span><ArrowUpRight size={16}/></div></motion.article>})}</div>
        </motion.div></div>
      </section>

      <section className="mwl-section mwl-requirements-section">
        <div className="mwl-container mwl-requirements-layout"><motion.div className="mwl-requirements-copy" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}><SectionHeading eyebrow="BEFORE DEPLOYMENT" title="What we need from the broker" text="A few details help establish compatibility, define scope and make the first technical discussion more productive."/><a href="/contact" className="mwl-text-link">Prepare for a discussion <ArrowRight size={17}/></a><div className="mwl-requirements-art"><div className="mwl-art-ring ring-one"/><div className="mwl-art-ring ring-two"/><div className="mwl-art-center"><ClipboardCheck size={35}/><span>Project<br/>readiness</span></div><span className="mwl-art-chip chip-one"><Server size={15}/> Platform</span><span className="mwl-art-chip chip-two"><Network size={15}/> Connectivity</span><span className="mwl-art-chip chip-three"><ShieldCheck size={15}/> Operations</span></div></motion.div>
          <div className="mwl-requirement-list">{[{icon:Layers3,title:"Platform & product scope",text:"Target platform, instruments, client groups and required broker-side workflows."},{icon:Boxes,title:"Existing technology estate",text:"Current CRM, payments, market data, execution, APIs and infrastructure dependencies."},{icon:Cable,title:"Connectivity requirements",text:"Supported data, execution and third-party endpoints required for the intended setup."},{icon:Headset,title:"Operational responsibilities",text:"Ownership of access, monitoring, incidents, changes and day-to-day platform operations."}].map((item,i)=>{const Icon=item.icon;return <motion.article initial={{opacity:0,x:18}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.2}} transition={{duration:.45,delay:i*.07}} className="mwl-requirement-item" key={item.title}><span className="mwl-requirement-icon"><Icon size={21}/></span><div><span className="mwl-requirement-num">REQUIREMENT 0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p></div><CheckCircle2 className="mwl-requirement-check" size={18}/></motion.article>})}</div>
        </div>
      </section>

      <section className="mwl-final-cta">
        <div className="mwl-cta-grid"/><div className="mwl-cta-glow mwl-cta-glow-one"/><div className="mwl-cta-glow mwl-cta-glow-two"/>
        <div className="mwl-container mwl-cta-inner"><motion.div initial="hidden" whileInView="visible" viewport={{once:true,amount:.2}} variants={stagger} className="mwl-cta-copy"><span className="mwl-cta-eyebrow"><span/> LET'S DISCUSS YOUR MT4 SETUP</span><h2>Keep your established MT4 brokerage workflows moving forward.</h2><p>Share your current MT4 setup, integrations and operational requirements to discuss the right deployment scope for your brokerage.</p><div className="mwl-cta-actions"><a href="/contact" className="mwl-btn mwl-btn-light">Discuss Your Project <ArrowRight size={17}/></a><a href="https://wa.me/" target="_blank" rel="noreferrer" className="mwl-btn mwl-btn-ghost">Contact on WhatsApp <ArrowUpRight size={16}/></a></div><span className="mwl-cta-small"><ShieldCheck size={15}/> Scope and compatibility are confirmed during discovery.</span></motion.div><motion.div className="mwl-cta-visual" initial={{opacity:0,scale:.9}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:.65}}><div className="mwl-cta-orbit cta-orbit-one"/><div className="mwl-cta-orbit cta-orbit-two"/><div className="mwl-cta-center"><Network size={34}/><strong>MT4</strong><span>WHITE LABEL</span></div><div className="mwl-cta-node cta-node-one"><RadioTower size={18}/></div><div className="mwl-cta-node cta-node-two"><Route size={18}/></div><div className="mwl-cta-node cta-node-three"><Activity size={18}/></div><div className="mwl-cta-node cta-node-four"><Database size={18}/></div></motion.div></div>
      </section>
    </main>
  );
}
