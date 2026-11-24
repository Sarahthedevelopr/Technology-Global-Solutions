import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Activity, Network, Server,
  RadioTower, Route, ShieldCheck, Database, Workflow, Gauge, Settings2,
  ChartNoAxesCombined, CheckCircle2, ChevronDown, CircleHelp, Cable,
  Layers3, LockKeyhole, RefreshCw, ClipboardCheck, MessagesSquare,
  Boxes, GitBranch, Eye, FileCheck2, Headset, Zap, Globe2, CircleDot
} from "lucide-react";
import "./LiquidityBridge.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

const layers = [
  { id: "platform", number: "01", title: "Trading platform", icon: Server, color: "violet", description: "The broker's MT4 or MT5 environment is the starting point for platform connectivity and trading workflows.", points: ["Platform and account-group scope", "Instrument and order-flow requirements", "Broker-side operational ownership"] },
  { id: "pricing", number: "02", title: "Pricing & symbols", icon: Activity, color: "pink", description: "Price feeds and symbol definitions need to be understood and aligned across the connected environment.", points: ["Price-source requirements", "Symbol and contract mapping", "Data distribution assumptions"] },
  { id: "routing", number: "03", title: "Routing logic", icon: Route, color: "violet", description: "Routing rules define how eligible orders move through the agreed bridge and execution path.", points: ["Account or group-based rules", "Instrument-specific routing", "Documented fallback assumptions"] },
  { id: "execution", number: "04", title: "Execution endpoints", icon: Cable, color: "pink", description: "Supported external liquidity or execution endpoints are integrated according to the broker's requirements and technical compatibility.", points: ["Connectivity and session setup", "Order and execution-flow validation", "Reject and exception handling"] },
  { id: "clients", number: "05", title: "Client systems", icon: Boxes, color: "violet", description: "The bridge can be planned alongside relevant broker systems such as CRM, back office and APIs where required by scope.", points: ["CRM and back-office dependencies", "API and workflow requirements", "Ownership of connected systems"] },
  { id: "operations", number: "06", title: "Runtime operations", icon: Gauge, color: "pink", description: "Monitoring, access, recovery and change processes help teams operate the connected infrastructure consistently.", points: ["Health and connectivity checks", "Controlled access and changes", "Incident and recovery procedures"] },
];

const capabilities = [
  { icon: Cable, n: "01", title: "Execution connectivity", text: "Plan connectivity between the broker's trading environment and supported external liquidity or execution endpoints." },
  { icon: Route, n: "02", title: "Routing logic", text: "Define routing behaviour around instruments, account groups and the broker's agreed execution model." },
  { icon: GitBranch, n: "03", title: "Symbol & contract mapping", text: "Align platform symbols and relevant contract parameters with downstream execution requirements." },
  { icon: ShieldCheck, n: "04", title: "Exposure workflows", text: "Document how exposure and execution workflows should operate within the broker's chosen setup." },
  { icon: Eye, n: "05", title: "Execution monitoring", text: "Plan visibility into connectivity, execution events, rejects and operational exceptions." },
  { icon: ClipboardCheck, n: "06", title: "Controlled deployment", text: "Validate configuration and critical order flows before introducing approved changes into production." },
];

const planningSteps = [
  { n: "01", title: "Map the execution model", text: "Document platform flows, account groups, instruments, counterparties and expected routing behaviour.", icon: Workflow },
  { n: "02", title: "Design connectivity", text: "Confirm supported endpoints, access requirements, sessions, mappings and dependencies.", icon: Network },
  { n: "03", title: "Test & validate", text: "Check symbol mapping, order flows, rejects, edge cases and operational visibility in the agreed test environment.", icon: FileCheck2 },
  { n: "04", title: "Prepare operations", text: "Agree monitoring, escalation, change ownership and recovery procedures for production use.", icon: RefreshCw },
];

const related = [
  { icon: Activity, title: "Market Data Feed", text: "Plan price distribution and symbol alignment alongside execution connectivity.", href: "/mt5-market-data" },
  { icon: Layers3, title: "MT5 White Label", text: "Explore a branded MT5 environment as part of a wider brokerage technology stack.", href: "/mt5-white-label" },
  { icon: Server, title: "MT4 White Label", text: "Connect bridge requirements with an established MT4 operating environment.", href: "/mt4-white-label" },
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
  { q: "What does a forex liquidity bridge connect?", a: "A liquidity bridge generally connects a broker's trading platform with supported external liquidity or execution systems. The exact connections depend on platform compatibility, counterparties and the agreed project scope." },
  { q: "Can routing differ by symbol or account group?", a: "Routing requirements can be planned around supported configuration options, instruments and account groups. The specific rules should be confirmed against the selected bridge and connected systems." },
  { q: "Can a bridge be considered alongside existing broker infrastructure?", a: "Yes. The discovery process should document the current trading platform, data sources, execution endpoints, CRM, APIs and infrastructure dependencies before a solution is finalised." },
  { q: "What should be tested before production deployment?", a: "Testing should cover the agreed connectivity, symbol and contract mapping, order flows, execution responses, rejects, permissions, monitoring and operational recovery procedures." },
  { q: "Is monitoring part of the integration plan?", a: "Monitoring and operational visibility should be defined as part of the delivery scope, including relevant health checks, alert ownership, escalation and incident procedures." },
  { q: "What information should a broker prepare before a discussion?", a: "Prepare the target platform, instruments, account groups, current technology stack, required liquidity or execution endpoints, access constraints and the operational responsibilities of your team." },
];

function SectionHeading({ eyebrow, title, text, centered = false }) {
  return (
    <motion.div className={`lb-section-heading ${centered ? "is-centered" : ""}`} variants={fadeUp}>
      {eyebrow && <span className="lb-eyebrow"><span />{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}

function HeroNetwork() {
  return (
    <div className="lb-hero-visual" aria-label="Illustration of a trading platform connected to liquidity and execution systems">
      <div className="lb-visual-orbit lb-orbit-one" />
      <div className="lb-visual-orbit lb-orbit-two" />
      <div className="lb-visual-glow" />
      <svg className="lb-network-lines" viewBox="0 0 560 470" role="presentation">
        <defs>
          <linearGradient id="lbLineGradient" x1="0" x2="1"><stop offset="0%" stopColor="#8b5cf6"/><stop offset="100%" stopColor="#e000e8"/></linearGradient>
        </defs>
        <path d="M280 230 L120 105 M280 230 L440 105 M280 230 L90 330 M280 230 L470 330 M280 230 L280 55 M280 230 L280 405" />
        <path d="M120 105 L65 170 M440 105 L495 170 M90 330 L145 390 M470 330 L415 390" className="lb-line-secondary" />
        <circle cx="120" cy="105" r="4"/><circle cx="440" cy="105" r="4"/><circle cx="90" cy="330" r="4"/><circle cx="470" cy="330" r="4"/><circle cx="280" cy="55" r="4"/><circle cx="280" cy="405" r="4"/>
      </svg>
      <motion.div className="lb-hero-node lb-node-top" animate={{ y: [0, -7, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}><RadioTower size={21}/><span>Liquidity</span><small>External endpoints</small></motion.div>
      <motion.div className="lb-hero-node lb-node-left" animate={{ y: [0, 6, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}><Database size={20}/><span>Market data</span><small>Prices & symbols</small></motion.div>
      <motion.div className="lb-hero-node lb-node-right" animate={{ y: [0, -5, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}><Route size={20}/><span>Execution</span><small>Routing pathways</small></motion.div>
      <motion.div className="lb-hero-node lb-node-bottom-left" animate={{ y: [0, 5, 0] }} transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut" }}><ShieldCheck size={19}/><span>Controls</span></motion.div>
      <motion.div className="lb-hero-node lb-node-bottom-right" animate={{ y: [0, -6, 0] }} transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut" }}><Activity size={19}/><span>Monitoring</span></motion.div>
      <motion.div className="lb-hero-core" animate={{ boxShadow: ["0 0 28px rgba(139,92,246,.24)", "0 0 46px rgba(224,0,232,.32)", "0 0 28px rgba(139,92,246,.24)"] }} transition={{ duration: 3.5, repeat: Infinity }}>
        <div className="lb-core-icon"><Network size={28}/></div><strong>MT4 / MT5</strong><span>Liquidity Bridge</span><div className="lb-core-status"><i/> Connectivity layer</div>
      </motion.div>
      <div className="lb-floating-tag lb-tag-a"><span className="lb-status-dot"/> Routing layer</div>
      <div className="lb-floating-tag lb-tag-b"><Zap size={14}/> Data in motion</div>
    </div>
  );
}

function InfrastructureMap() {
  const [active, setActive] = useState(layers[2]);
  const ActiveIcon = active.icon;
  return (
    <section className="lb-section lb-map-section" id="infrastructure-map">
      <div className="lb-container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
          <SectionHeading eyebrow="CONNECTED INFRASTRUCTURE" title="One brokerage stack. Six connected layers." text="Explore how platform, pricing, routing and operational dependencies fit together around your liquidity bridge." centered />
          <div className="lb-map-layout">
            <div className="lb-layer-list" role="tablist" aria-label="Infrastructure layers">
              {layers.map((layer) => {
                const Icon = layer.icon;
                const selected = active.id === layer.id;
                return <motion.button variants={fadeUp} key={layer.id} className={`lb-layer-tab ${selected ? "active" : ""}`} onClick={() => setActive(layer)} role="tab" aria-selected={selected}>
                  <span className="lb-layer-number">{layer.number}</span><span className="lb-layer-icon"><Icon size={19}/></span><span className="lb-layer-name">{layer.title}</span><ArrowUpRight size={16} className="lb-layer-arrow"/>
                </motion.button>;
              })}
            </div>
            <div className="lb-map-detail" role="tabpanel">
              <div className="lb-map-detail-top"><span className="lb-detail-icon"><ActiveIcon size={24}/></span><span className="lb-detail-kicker">INFRASTRUCTURE LAYER {active.number}</span><span className="lb-detail-live"><i/> Layer overview</span></div>
              <AnimatePresence mode="wait"><motion.div key={active.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}>
                <h3>{active.title}</h3><p className="lb-map-description">{active.description}</p>
                <ul className="lb-check-list">{active.points.map((point) => <li key={point}><CheckCircle2 size={17}/>{point}</li>)}</ul>
              </motion.div></AnimatePresence>
              <div className="lb-map-footer"><span><CircleDot size={15}/> Connected system view</span><span>Interactive layer map <ArrowDownRight size={15}/></span></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function LiquidityBridge() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <main className="liquidity-bridge-page">
      {/* HERO: deliberately different from the other service pages */}
      <section className="lb-hero">
        <div className="lb-hero-grid" />
        <div className="lb-hero-glow lb-hero-glow-one"/><div className="lb-hero-glow lb-hero-glow-two"/>
        <div className="lb-container lb-hero-inner">
          <motion.div className="lb-hero-copy" initial="hidden" animate="visible" variants={stagger}>
            <motion.div className="lb-hero-pill" variants={fadeUp}><span className="lb-pill-pulse"/> EXECUTION INFRASTRUCTURE <span className="lb-pill-divider"/> MT4 & MT5</motion.div>
            <motion.h1 variants={fadeUp}>Forex Liquidity Bridge <span>for MT4 & MT5 Brokers</span></motion.h1>
            <motion.p className="lb-hero-description" variants={fadeUp}>Connect broker trading operations with supported external liquidity and execution environments through a carefully planned routing, mapping and monitoring layer.</motion.p>
            <motion.div className="lb-hero-actions" variants={fadeUp}>
              <a href="/contact" className="lb-btn lb-btn-primary">Discuss Your Project <ArrowRight size={17}/></a>
              <a href="#infrastructure-map" className="lb-btn lb-btn-outline">Explore Infrastructure <ArrowDownRight size={17}/></a>
            </motion.div>
            <motion.div className="lb-hero-trust-row" variants={fadeUp}>
              <span><CheckCircle2 size={16}/> Integration planning</span><span><CheckCircle2 size={16}/> Routing & mapping</span><span><CheckCircle2 size={16}/> Operational visibility</span>
            </motion.div>
          </motion.div>
          <motion.div className="lb-hero-art-wrap" initial={{ opacity: 0, scale: 0.94, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.18 }}><HeroNetwork/></motion.div>
        </div>
        <div className="lb-hero-bottom"><span>CONNECTIVITY</span><span className="lb-bottom-line"/><span>ROUTING</span><span className="lb-bottom-line"/><span>OPERATIONS</span></div>
      </section>

      <InfrastructureMap />

      <section className="lb-section lb-stack-section">
        <div className="lb-container"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
          <SectionHeading eyebrow="THE BROKERAGE ECOSYSTEM" title="How the bridge fits into your technology stack" text="The bridge is one layer of a wider operating environment. Mapping the dependencies early helps teams define the right integration scope." />
          <div className="lb-stack-grid">
            {[{icon:Server,title:"Trading platforms",text:"MT4 / MT5 environments, account groups and broker-side order workflows."},{icon:Database,title:"Market data",text:"Price sources, symbol definitions and data-distribution assumptions."},{icon:Route,title:"Execution connectivity",text:"Bridge routing, supported counterparties and downstream execution paths."},{icon:Boxes,title:"Client systems",text:"CRM, back office, APIs and connected broker workflows where in scope."},{icon:Globe2,title:"Infrastructure",text:"Hosting environment, network access, availability and environment dependencies."},{icon:Gauge,title:"Operations",text:"Monitoring, access control, change ownership and incident procedures."}].map((item,i)=>{const Icon=item.icon;return <motion.article variants={fadeUp} className="lb-stack-card" key={item.title}><div className="lb-card-icon"><Icon size={21}/></div><span className="lb-card-index">0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p><div className="lb-card-bottom"><span>Technology layer</span><ArrowUpRight size={16}/></div></motion.article>})}
          </div>
        </motion.div></div>
      </section>

      <section className="lb-section lb-capabilities-section">
        <div className="lb-container"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={stagger}>
          <SectionHeading eyebrow="CORE CAPABILITIES" title="Built around the real operating requirement" text="Focus the integration on the decisions and controls that matter to your brokerage's execution workflow." centered />
          <div className="lb-capability-grid">{capabilities.map((item)=>{const Icon=item.icon;return <motion.article variants={fadeUp} className="lb-capability-card" key={item.n}><div className="lb-capability-top"><span className="lb-capability-icon"><Icon size={22}/></span><span>{item.n}</span></div><h3>{item.title}</h3><p>{item.text}</p><div className="lb-capability-line"/></motion.article>})}</div>
        </motion.div></div>
      </section>

      <section className="lb-section lb-planning-section">
        <div className="lb-container"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.14 }} variants={stagger}>
          <SectionHeading eyebrow="PROJECT APPROACH" title="From execution model to operational readiness" text="A structured process makes requirements, dependencies and responsibilities easier to validate before production." />
          <div className="lb-planning-timeline">{planningSteps.map((step,i)=>{const Icon=step.icon;return <motion.article variants={fadeUp} className="lb-planning-step" key={step.n}><div className="lb-step-head"><span className="lb-step-number">{step.n}</span><span className="lb-step-icon"><Icon size={21}/></span>{i!==planningSteps.length-1&&<span className="lb-step-connector"/>}</div><h3>{step.title}</h3><p>{step.text}</p></motion.article>})}</div>
        </motion.div></div>
      </section>

      <section className="lb-section lb-faq-section" id="faq">
        <div className="lb-container lb-faq-layout"><motion.div className="lb-faq-intro" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}><SectionHeading eyebrow="FAQ" title="Questions brokers ask" text="A starting point for discussing compatibility, routing and the practical work involved in a bridge integration."/><div className="lb-faq-note"><span><CircleHelp size={20}/></span><div><strong>Need to discuss a specific setup?</strong><p>Share your platform and integration requirements with the team.</p><a href="/contact">Talk to us <ArrowRight size={15}/></a></div></div></motion.div>
          <div className="lb-faq-list">{faqs.map((faq,i)=><div className={`lb-faq-item ${openFaq===i?"open":""}`} key={faq.q}><button className="lb-faq-question" onClick={()=>setOpenFaq(openFaq===i?-1:i)} aria-expanded={openFaq===i}><span><b>{String(i+1).padStart(2,"0")}</b>{faq.q}</span><span className="lb-faq-toggle"><ChevronDown size={18}/></span></button><AnimatePresence initial={false}>{openFaq===i&&<motion.div className="lb-faq-answer" initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.25}}><p>{faq.a}</p></motion.div>}</AnimatePresence></div>)}</div>
        </div>
      </section>

      <section className="lb-section lb-related-section">
        <div className="lb-container"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.14 }} variants={stagger}>
          <SectionHeading eyebrow="RELATED INFRASTRUCTURE" title="Continue building your brokerage stack" text="Explore related components that may sit alongside your liquidity bridge project." centered />
          <div className="lb-related-grid">{related.map((item,i)=>{const Icon=item.icon;return <motion.a variants={fadeUp} href={item.href} className="lb-related-card" key={item.title}><div className="lb-related-icon"><Icon size={23}/></div><span className="lb-related-index">0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p><span className="lb-related-link">Explore service <ArrowRight size={16}/></span></motion.a>})}</div>
        </motion.div></div>
      </section>

      <section className="lb-delivery-section lb-section">
        <div className="lb-container"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={stagger}>
          <SectionHeading eyebrow="DELIVERY FRAMEWORK" title="A clear path from discovery to support" text="Each stage defines what needs to be understood, implemented and handed over." centered />
          <div className="lb-delivery-grid">{delivery.map((item,i)=><motion.article variants={fadeUp} className="lb-delivery-card" key={item.n}><div className="lb-delivery-top"><span>{item.n}</span>{i<delivery.length-1&&<div className="lb-delivery-connector"/>}</div><h3>{item.title}</h3><p>{item.text}</p></motion.article>)}</div>
        </motion.div></div>
      </section>

      <section className="lb-section lb-principles-section">
        <div className="lb-principles-glow"/><div className="lb-container"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={stagger}>
          <SectionHeading eyebrow="ENGINEERING PRINCIPLES" title="Designed for operational clarity" text="A useful integration is not just connected. Its dependencies, access and recovery expectations are understood." centered />
          <div className="lb-principles-grid">{[{icon:GitBranch,title:"Documented dependencies",text:"Map critical interfaces and ownership so troubleshooting is based on a known system view."},{icon:LockKeyhole,title:"Controlled access",text:"Make production privileges and responsibilities explicit and limited to operational need."},{icon:RefreshCw,title:"Monitoring & recovery",text:"Define health checks, escalation and recovery procedures as part of the operating model."}].map((item,i)=>{const Icon=item.icon;return <motion.article variants={fadeUp} className="lb-principle-card" key={item.title}><span className="lb-principle-icon"><Icon size={23}/></span><span className="lb-principle-num">0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p><div className="lb-principle-bottom"><span>Operational principle</span><ArrowUpRight size={16}/></div></motion.article>})}</div>
        </motion.div></div>
      </section>

      <section className="lb-section lb-requirements-section">
        <div className="lb-container lb-requirements-layout"><motion.div className="lb-requirements-copy" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}><SectionHeading eyebrow="BEFORE DEPLOYMENT" title="What we need from the broker" text="A few details help establish compatibility, define scope and make the first technical discussion more productive."/><a href="/contact" className="lb-text-link">Prepare for a discussion <ArrowRight size={17}/></a><div className="lb-requirements-art"><div className="lb-art-ring ring-one"/><div className="lb-art-ring ring-two"/><div className="lb-art-center"><ClipboardCheck size={35}/><span>Project<br/>readiness</span></div><span className="lb-art-chip chip-one"><Server size={15}/> Platform</span><span className="lb-art-chip chip-two"><Network size={15}/> Connectivity</span><span className="lb-art-chip chip-three"><ShieldCheck size={15}/> Operations</span></div></motion.div>
          <div className="lb-requirement-list">{[{icon:Layers3,title:"Platform & product scope",text:"Target platform, instruments, client groups and required broker-side workflows."},{icon:Boxes,title:"Existing technology estate",text:"Current CRM, payments, market data, execution, APIs and infrastructure dependencies."},{icon:Cable,title:"Connectivity requirements",text:"Supported data, execution and third-party endpoints required for the intended setup."},{icon:Headset,title:"Operational responsibilities",text:"Ownership of access, monitoring, incidents, changes and day-to-day platform operations."}].map((item,i)=>{const Icon=item.icon;return <motion.article initial={{opacity:0,x:18}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.2}} transition={{duration:.45,delay:i*.07}} className="lb-requirement-item" key={item.title}><span className="lb-requirement-icon"><Icon size={21}/></span><div><span className="lb-requirement-num">REQUIREMENT 0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p></div><CheckCircle2 className="lb-requirement-check" size={18}/></motion.article>})}</div>
        </div>
      </section>

      <section className="lb-final-cta">
        <div className="lb-cta-grid"/><div className="lb-cta-glow lb-cta-glow-one"/><div className="lb-cta-glow lb-cta-glow-two"/>
        <div className="lb-container lb-cta-inner"><motion.div initial="hidden" whileInView="visible" viewport={{once:true,amount:.2}} variants={stagger} className="lb-cta-copy"><span className="lb-cta-eyebrow"><span/> LET'S DISCUSS YOUR SETUP</span><h2>Build the next layer of your brokerage infrastructure.</h2><p>Share your current platform, liquidity connectivity and operational requirements to discuss an integration approach for your brokerage.</p><div className="lb-cta-actions"><a href="/contact" className="lb-btn lb-btn-light">Discuss Your Project <ArrowRight size={17}/></a><a href="https://wa.me/" target="_blank" rel="noreferrer" className="lb-btn lb-btn-ghost">Contact on WhatsApp <ArrowUpRight size={16}/></a></div><span className="lb-cta-small"><ShieldCheck size={15}/> Scope and compatibility are confirmed during discovery.</span></motion.div><motion.div className="lb-cta-visual" initial={{opacity:0,scale:.9}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:.65}}><div className="lb-cta-orbit cta-orbit-one"/><div className="lb-cta-orbit cta-orbit-two"/><div className="lb-cta-center"><Network size={34}/><strong>LIQUIDITY</strong><span>CONNECTIVITY</span></div><div className="lb-cta-node cta-node-one"><RadioTower size={18}/></div><div className="lb-cta-node cta-node-two"><Route size={18}/></div><div className="lb-cta-node cta-node-three"><Activity size={18}/></div><div className="lb-cta-node cta-node-four"><Database size={18}/></div></motion.div></div>
      </section>
    </main>
  );
}
