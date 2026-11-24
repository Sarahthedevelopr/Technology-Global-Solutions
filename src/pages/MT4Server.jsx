import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Activity, ArrowRight, ArrowUpRight, Boxes, Cable, Check, ChevronDown,
  Cloud, Database, Gauge, Layers3, LockKeyhole, Network, RefreshCw,
  Server, ShieldCheck, Workflow, Zap, MessageCircle, Terminal, Cpu,
} from "lucide-react";
import "./MT4Server.css";

const capabilities = [
  { n: "01", tag: "PLATFORM", title: "Trading Platform", icon: Layers3, text: "Configure the trading environment around the broker's operating model and platform requirements." },
  { n: "02", tag: "DATA", title: "Market Data", icon: Activity, text: "Plan pricing connectivity and symbol distribution across the required trading instruments." },
  { n: "03", tag: "EXECUTION", title: "Execution Connectivity", icon: Cable, text: "Connect supported external execution or liquidity environments to the brokerage stack." },
  { n: "04", tag: "OPERATIONS", title: "CRM / API", icon: Workflow, text: "Integrate client-facing and operational systems through supported interfaces and workflows." },
  { n: "05", tag: "INFRA", title: "Hosting", icon: Cloud, text: "Plan runtime infrastructure, network dependencies and monitoring for the agreed environment." },
  { n: "06", tag: "SUPPORT", title: "Technical Operations", icon: ShieldCheck, text: "Coordinate implementation, ongoing changes and technical support within the agreed scope." },
];

const implementation = [
  { n: "01", title: "Discovery", icon: Network, text: "Map target markets, platform requirements, instruments, connectivity and operating workflows." },
  { n: "02", title: "Architecture", icon: Boxes, text: "Define the platform, data, hosting and integration layers around the required operating model." },
  { n: "03", title: "Deployment", icon: Server, text: "Complete configuration, integration and technical validation before production use." },
  { n: "04", title: "Operations", icon: Activity, text: "Align monitoring, ongoing changes and technical support with the agreed deployment scope." },
];

const faqs = [
  { q: "Can these infrastructure components be deployed separately?", a: "Yes. Infrastructure layers can be scoped independently or connected as part of a wider brokerage technology project." },
  { q: "Do you work with existing broker infrastructure?", a: "Projects can integrate with existing systems where technical access and supported interfaces are available. Existing dependencies can be mapped during discovery." },
  { q: "How do we start an MT4 infrastructure project?", a: "Start with your operating model, target platforms, instruments and required integrations. The technical scope and dependencies can then be mapped." },
  { q: "Is support available after launch?", a: "Ongoing support can be included depending on the agreed operational scope, responsibilities and deployment requirements." },
];

const stackItems = [
  { label: "TRADING ENVIRONMENT", title: "MT4 Platform", text: "Platform configuration and broker operating workflows.", icon: Terminal },
  { label: "PRICING LAYER", title: "Market Data", text: "Price-feed connectivity and symbol distribution.", icon: Activity },
  { label: "EXECUTION LAYER", title: "External Connectivity", text: "Supported liquidity and execution interfaces.", icon: Cable },
  { label: "CLIENT SYSTEMS", title: "CRM & APIs", text: "Operational integrations and client workflows.", icon: Workflow },
  { label: "RUNTIME LAYER", title: "Hosting & Network", text: "Runtime environment, access and monitoring.", icon: Cloud },
  { label: "OPERATIONS", title: "Technical Support", text: "Implementation coordination and ongoing changes.", icon: ShieldCheck },
];

function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 24 }} whileInView={reduced ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function SectionHeading({ eyebrow, title, text, center = false }) {
  return <div className={`m4s-heading ${center ? "is-center" : ""}`}><span className="m4s-eyebrow"><i />{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function HeroVisual() {
  return <div className="m4s-hero-visual" aria-label="Illustration of an MT4 server infrastructure network">
    <div className="m4s-orbit m4s-orbit-one" /><div className="m4s-orbit m4s-orbit-two" />
    <div className="m4s-visual-label label-top"><span className="status-dot" /> SERVER STATUS <b>CONNECTED</b></div>
    <svg className="m4s-connection-lines" viewBox="0 0 620 500" aria-hidden="true">
      <defs><linearGradient id="m4sLine" x1="0" x2="1"><stop offset="0%" stopColor="#8b5cf6"/><stop offset="100%" stopColor="#e000e8"/></linearGradient></defs>
      <path d="M310 240 L150 125 M310 240 L470 125 M310 240 L125 335 M310 240 L495 335 M310 240 L310 70 M310 240 L310 420" stroke="url(#m4sLine)" strokeWidth="1.6" fill="none" strokeDasharray="5 8" />
      <circle r="4" fill="#e000e8"><animateMotion dur="3.2s" repeatCount="indefinite" path="M310 240 L150 125" /></circle>
      <circle r="4" fill="#8b5cf6"><animateMotion dur="3.8s" repeatCount="indefinite" path="M310 240 L470 125" /></circle>
      <circle r="4" fill="#e000e8"><animateMotion dur="3.5s" repeatCount="indefinite" path="M310 240 L125 335" /></circle>
      <circle r="4" fill="#8b5cf6"><animateMotion dur="4s" repeatCount="indefinite" path="M310 240 L495 335" /></circle>
    </svg>
    <motion.div className="m4s-core-server" animate={{ y: [0, -7, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
      <div className="m4s-core-icon"><Server size={38} strokeWidth={1.5} /></div><span>TRADING ENVIRONMENT</span><strong>MT4 SERVER</strong><small><i /> Runtime layer active</small>
    </motion.div>
    {[
      { cls: "node-data", icon: Activity, title: "Market Data", sub: "Price feeds" },
      { cls: "node-execution", icon: Cable, title: "Connectivity", sub: "Execution layer" },
      { cls: "node-network", icon: Network, title: "Network", sub: "Infrastructure" },
      { cls: "node-monitor", icon: Gauge, title: "Monitoring", sub: "Health signals" },
      { cls: "node-api", icon: Workflow, title: "CRM / API", sub: "Integrations" },
      { cls: "node-ops", icon: ShieldCheck, title: "Operations", sub: "Continuity" },
    ].map((node, index) => { const Icon = node.icon; return <motion.div key={node.cls} className={`m4s-node ${node.cls}`} animate={{ y: [0, -5, 0] }} transition={{ duration: 3.4, repeat: Infinity, delay: index * 0.12, ease: "easeInOut" }}><span className="m4s-node-icon"><Icon size={18} /></span><div><b>{node.title}</b><small>{node.sub}</small></div></motion.div>; })}
    <div className="m4s-visual-label label-bottom"><span className="pulse-bars"><i/><i/><i/><i/></span> INFRASTRUCTURE MONITOR <b>LIVE</b></div>
    <div className="m4s-glow m4s-glow-a"/><div className="m4s-glow m4s-glow-b"/>
  </div>;
}

export default function MT4Server() {
  const [activeLayer, setActiveLayer] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  return <main className="m4s-page">
    <section className="m4s-hero">
      <div className="m4s-hero-grid" />
      <div className="m4s-container m4s-hero-layout">
        <motion.div className="m4s-hero-copy" initial={{ opacity: 0, x: -26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
          <span className="m4s-eyebrow"><i /> MT4 INFRASTRUCTURE</span>
          <h1>MT4 Server Infrastructure <em>for Established Trading Operations</em></h1>
          <p>Support MetaTrader 4 environments with infrastructure planning for runtime, connectivity, monitoring and operational continuity.</p>
          <div className="m4s-hero-actions"><a className="m4s-btn m4s-btn-primary" href="https://wa.me/358823711153" target="_blank" rel="noreferrer">Discuss your project <ArrowUpRight size={18}/></a><a className="m4s-btn m4s-btn-ghost" href="https://t.me/whitelabelmetatraderfx" target="_blank" rel="noreferrer"><MessageCircle size={17}/> Telegram</a></div>
          <div className="m4s-hero-proof"><div><span className="proof-icon"><Layers3 size={16}/></span><span><b>MT4 / MT5</b><small>Platform infrastructure</small></span></div><div><span className="proof-icon"><Database size={16}/></span><span><b>Multi-asset</b><small>Data & connectivity</small></span></div><div><span className="proof-icon"><Network size={16}/></span><span><b>Modular</b><small>Architecture by requirement</small></span></div></div>
        </motion.div>
        <motion.div className="m4s-hero-art" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}><HeroVisual /></motion.div>
      </div>
      <div className="m4s-hero-bottom"><span>INFRASTRUCTURE / 01</span><span>BUILT AROUND BROKER OPERATIONS <ArrowRight size={14}/></span></div>
    </section>

    <section className="m4s-section m4s-capabilities" id="capabilities"><div className="m4s-container"><Reveal><SectionHeading eyebrow="CAPABILITIES" title="Infrastructure designed around broker operations." text="Technical components can be scoped independently or connected as part of a broader brokerage stack." /></Reveal>
      <div className="m4s-cap-grid">{capabilities.map((item, i) => { const Icon = item.icon; return <Reveal key={item.n} delay={i * 0.055}><article className="m4s-cap-card"><div className="m4s-card-top"><span>{item.n} <i>/</i> {item.tag}</span><span className="m4s-icon-box"><Icon size={21}/></span></div><h3>{item.title}</h3><p>{item.text}</p><div className="m4s-card-line"/></article></Reveal>; })}</div>
    </div></section>

    <section className="m4s-section m4s-stack-section"><div className="m4s-container m4s-stack-layout"><Reveal className="m4s-stack-intro"><SectionHeading eyebrow="CONNECTED TECHNOLOGY" title="One environment. Clearly defined layers." text="Map the components around your existing MT4 operations, then connect only the layers required by your project."/><div className="m4s-stack-note"><span><Check size={17}/></span><p>Modular by design — infrastructure layers can be scoped independently or connected into a wider brokerage stack.</p></div><a className="m4s-text-link" href="https://wa.me/358823711153" target="_blank" rel="noreferrer">Discuss your requirements <ArrowRight size={17}/></a></Reveal>
      <div className="m4s-stack-board"><div className="m4s-stack-board-head"><span>MT4 BROKERAGE STACK</span><span className="m4s-live"><i/> LAYER OVERVIEW</span></div><div className="m4s-stack-list">{stackItems.map((item, i) => { const Icon = item.icon; return <motion.button type="button" key={item.title} className={`m4s-stack-item ${activeLayer === i ? "active" : ""}`} onClick={() => setActiveLayer(i)} whileHover={{ x: 4 }}><span className="m4s-stack-number">0{i + 1}</span><span className="m4s-stack-icon"><Icon size={19}/></span><span className="m4s-stack-copy"><small>{item.label}</small><b>{item.title}</b><em>{item.text}</em></span><ArrowUpRight className="m4s-stack-arrow" size={18}/></motion.button>; })}</div><div className="m4s-stack-footer"><span className="m4s-status-mark"><Check size={13}/></span><span><b>{stackItems[activeLayer].title}</b><small>Selected technology layer</small></span><span className="m4s-stack-footer-index">0{activeLayer + 1} / 06</span></div></div>
    </div></section>

    <section className="m4s-section m4s-process-section"><div className="m4s-container"><Reveal><SectionHeading eyebrow="IMPLEMENTATION" title="From requirements to operational environment." text="A structured delivery path helps align technical scope, dependencies and operational responsibilities before launch." center /></Reveal><div className="m4s-process-line"/><div className="m4s-process-grid">{implementation.map((step, i) => { const Icon = step.icon; return <Reveal key={step.n} delay={i * 0.09}><article className="m4s-process-card"><div className="m4s-process-num"><span>{step.n}</span><Icon size={22}/></div><h3>{step.title}</h3><p>{step.text}</p><div className="m4s-process-bottom"><span>STEP {step.n}</span><ArrowRight size={16}/></div></article></Reveal>; })}</div></div></section>

    <section className="m4s-section m4s-operations-section"><div className="m4s-container m4s-ops-layout"><Reveal className="m4s-ops-copy"><SectionHeading eyebrow="OPERATIONAL CLARITY" title="Keep the moving parts in view." text="Hosting is one part of the environment. Connectivity, system access, monitoring and ongoing changes should be considered together."/><div className="m4s-ops-points"><div><span><LockKeyhole size={18}/></span><p><b>Defined access</b><small>Set responsibilities around operational and technical access.</small></p></div><div><span><Gauge size={18}/></span><p><b>Monitoring visibility</b><small>Identify the service signals and checks relevant to the agreed scope.</small></p></div><div><span><RefreshCw size={18}/></span><p><b>Continuity planning</b><small>Document dependencies, changes and recovery responsibilities.</small></p></div></div></Reveal><Reveal className="m4s-ops-visual"><div className="m4s-console"><div className="m4s-console-head"><div className="m4s-window-dots"><i/><i/><i/></div><span>INFRASTRUCTURE / STATUS</span><span className="m4s-console-live"><i/> MONITORING</span></div><div className="m4s-console-body"><div className="m4s-console-title"><span>Environment overview</span><b>Operational scope</b></div><div className="m4s-console-stats"><div><small>PLATFORM</small><b>MT4</b><span><Check size={12}/> In scope</span></div><div><small>CONNECTIVITY</small><b>Mapped</b><span><Check size={12}/> Dependencies</span></div><div><small>OPERATIONS</small><b>Defined</b><span><Check size={12}/> Responsibilities</span></div></div><div className="m4s-console-graph"><div className="m4s-graph-label"><span>Infrastructure signals</span><span>Illustrative view</span></div><div className="m4s-bars">{[34,50,42,67,48,73,56,62,45,82,60,72,50,88,66,76,57,70,47,81,61,73,55,91].map((h,i)=><i key={i} style={{height:`${h}%`,animationDelay:`${i*45}ms`}}/>)}</div></div><div className="m4s-console-foot"><span><i/> Architecture status</span><span>Based on agreed scope</span></div></div></div></Reveal></div></section>

    <section className="m4s-section m4s-faq-section"><div className="m4s-container m4s-faq-layout"><Reveal><SectionHeading eyebrow="FAQ" title="Common questions." text="A few starting points for planning an MT4 infrastructure project."/><div className="m4s-faq-contact"><span className="m4s-faq-contact-icon"><MessageCircle size={20}/></span><div><b>Need to discuss your setup?</b><p>Share your platform and infrastructure requirements with our team.</p><a href="https://wa.me/358823711153" target="_blank" rel="noreferrer">Talk to the team <ArrowUpRight size={15}/></a></div></div></Reveal><div className="m4s-faq-list">{faqs.map((faq, i)=><div className={`m4s-faq-item ${openFaq === i ? "open" : ""}`} key={faq.q}><button type="button" aria-expanded={openFaq===i} onClick={()=>setOpenFaq(openFaq===i ? -1 : i)}><span><small>0{i+1}</small>{faq.q}</span><span className="m4s-faq-toggle"><ChevronDown size={18}/></span></button><AnimatePresence initial={false}>{openFaq===i && <motion.div className="m4s-faq-answer" initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:0.28}}><p>{faq.a}</p></motion.div>}</AnimatePresence></div>)}</div></div></section>

    <section className="m4s-section m4s-cta-section"><div className="m4s-container"><Reveal><div className="m4s-cta-panel"><div className="m4s-cta-orb"/><div className="m4s-cta-content"><span className="m4s-eyebrow"><i/> TECHNOLOGY GLOBAL SOLUTIONS</span><h2>Build the next layer of your brokerage infrastructure.</h2><p>Discuss your MT4 environment, connectivity requirements and operational scope with our team.</p><div className="m4s-cta-actions"><a className="m4s-btn m4s-btn-light" href="https://wa.me/358823711153" target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp <ArrowUpRight size={16}/></a><a className="m4s-btn m4s-btn-outline-light" href="https://t.me/whitelabelmetatraderfx" target="_blank" rel="noreferrer">Telegram <ArrowUpRight size={16}/></a></div></div><div className="m4s-cta-graphic"><div className="m4s-cta-ring ring-a"/><div className="m4s-cta-ring ring-b"/><div className="m4s-cta-server"><Server size={42}/><span>MT4</span></div><div className="m4s-cta-chip chip-a"><Activity size={16}/> Data</div><div className="m4s-cta-chip chip-b"><Network size={16}/> Network</div><div className="m4s-cta-chip chip-c"><ShieldCheck size={16}/> Operations</div></div></div></Reveal></div></section>
  </main>;
}
