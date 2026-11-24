import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity, ArrowRight, ArrowUpRight, BarChart3, CheckCircle2,
  ChevronDown, CircleHelp, ClipboardCheck, Database, Gauge, GitBranch,
  Layers3, Network, Server, ShieldCheck, SlidersHorizontal, Users,
  WalletCards, Workflow, Cable, FileCheck2, Settings2, Boxes, Globe2
} from "lucide-react";
import "./CFDBroker.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

// Page copy below follows the content available on the official CFD Broker page.
const requirements = [
  { n: "01", title: "Instrument Architecture", category: "INSTRUMENTS", icon: Boxes, text: "Structure CFD symbols, naming, contract specifications, sessions and platform presentation.", points: ["Symbol naming & mapping", "Contract specifications", "Trading sessions"] },
  { n: "02", title: "Multi-Asset Pricing", category: "PRICING", icon: BarChart3, text: "Connect and normalize supported sources across the required CFD asset classes.", points: ["Supported pricing sources", "Price normalization", "Asset-class coverage"] },
  { n: "03", title: "Execution Connectivity", category: "EXECUTION", icon: GitBranch, text: "Map supported routing and downstream execution workflows around the broker's product model.", points: ["Routing workflows", "Supported connectivity", "Product model alignment"] },
  { n: "04", title: "MT4 / MT5 Platform", category: "PLATFORM", icon: Layers3, text: "Configure the trading-platform layer around the required products, groups and operating model.", points: ["Platform configuration", "Product & group setup", "Operating model"] },
  { n: "05", title: "Client Systems", category: "OPERATIONS", icon: Users, text: "Integrate onboarding, accounts, payments, support and reporting workflows.", points: ["Client onboarding", "Accounts & payments", "Support & reporting"] },
  { n: "06", title: "Operational Controls", category: "GOVERNANCE", icon: ShieldCheck, text: "Define monitoring, access, change control and incident ownership across the stack.", points: ["Monitoring & access", "Change control", "Incident ownership"] },
];

const layers = [
  { title: "Platform", subtitle: "MT4 / MT5", icon: Layers3, text: "Configure the trading environment around the broker's products, groups and operating model." },
  { title: "Pricing", subtitle: "Multi-asset data", icon: Database, text: "Connect and normalize supported pricing sources across the required CFD asset classes." },
  { title: "Execution", subtitle: "Routing & connectivity", icon: GitBranch, text: "Map supported execution routing and downstream workflows to the broker's product model." },
  { title: "Operations", subtitle: "Client systems", icon: Users, text: "Connect onboarding, accounts, payments, support and reporting systems." },
  { title: "Infrastructure", subtitle: "Monitoring & access", icon: Server, text: "Define monitoring, production access, change control, escalation and incident ownership." },
  { title: "Instruments", subtitle: "Contract settings", icon: SlidersHorizontal, text: "Keep symbol mapping, contract settings, sessions and trading conditions aligned across connected systems." },
];

const principles = [
  { title: "Map dependencies", icon: Network, text: "Document how platform, data, execution, client systems and infrastructure depend on each other." },
  { title: "Define ownership", icon: ShieldCheck, text: "Make production access, monitoring, change control and escalation responsibilities explicit." },
  { title: "Validate production flows", icon: ClipboardCheck, text: "Test business-critical workflows and failure scenarios before relying on them in live operations." },
];

const faqs = [
  { q: "What is different about CFD broker infrastructure?", a: "CFD infrastructure often places additional emphasis on instrument configuration, contract specifications, asset-class coverage and consistent pricing across a broad symbol set." },
  { q: "Can MT5 support multi-asset CFD operations?", a: "MT5 is commonly positioned for broader multi-asset use, but the exact suitability depends on product, integration and operational requirements." },
  { q: "Can existing CFD symbols be migrated?", a: "Migration can be planned, but symbol mapping, contract settings, client impact and connected systems should be validated carefully." },
  { q: "Do you support custom integrations?", a: "Supported APIs and third-party systems can be integrated where suitable technical interfaces and access are available." },
];

const related = [
  { title: "MT5 White Label", label: "TRADING PLATFORM", icon: Layers3, href: "/mt5-white-label", text: "Branded MT5 platform infrastructure." },
  { title: "MT4 White Label", label: "TRADING PLATFORM", icon: Layers3, href: "/mt4-white-label", text: "Plan an MT4 operating environment." },
  { title: "Market Data", label: "PRICING", icon: Database, href: "/pricefeed", text: "Feed connectivity, mapping and monitoring." },
  { title: "Liquidity Bridge", label: "EXECUTION", icon: GitBranch, href: "/liquidity-bridge", text: "Execution and routing integration scope." },
  { title: "Broker CRM", label: "CLIENT OPERATIONS", icon: Users, href: "/broker-crm", text: "Client, account and back-office workflows." },
  { title: "Brokerage Technology", label: "ARCHITECTURE", icon: Network, href: "/brokerage-technology", text: "Architecture, deployment and technical operations." },
];

function SectionHeading({ eyebrow, title, text, centered = false }) {
  return <motion.div className={`cfd-heading ${centered ? "is-centered" : ""}`} variants={fadeUp}>
    <span className="cfd-eyebrow"><i />{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </motion.div>;
}

function ArchitectureVisual() {
  const [active, setActive] = useState(0);
  const selected = layers[active];
  const SelectedIcon = selected.icon;
  return <div className="cfd-architecture-layout">
    <div className="cfd-architecture-map">
      <div className="cfd-map-grid" />
      <div className="cfd-map-ring ring-one" /><div className="cfd-map-ring ring-two" />
      <div className="cfd-map-core"><Network size={28} /><strong>CFD</strong><small>BROKER STACK</small></div>
      {layers.map((layer, i) => { const Icon = layer.icon; return <motion.button key={layer.title} className={`cfd-map-node node-${i + 1} ${active === i ? "active" : ""}`} onClick={() => setActive(i)} whileHover={{ scale: 1.045 }} whileTap={{ scale: .97 }} aria-pressed={active === i}>
        <Icon size={18} /><span>{layer.subtitle}</span>
      </motion.button>; })}
    </div>
    <div className="cfd-architecture-detail">
      <span className="cfd-detail-kicker">CONNECTED LAYER / 0{active + 1}</span>
      <AnimatePresence mode="wait"><motion.div key={selected.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .22 }}>
        <span className="cfd-detail-icon"><SelectedIcon size={25} /></span>
        <h3>{selected.title}</h3><p>{selected.text}</p>
      </motion.div></AnimatePresence>
      <div className="cfd-layer-pagination">{layers.map((layer, i) => <button key={layer.title} aria-label={`Show ${layer.title}`} className={active === i ? "active" : ""} onClick={() => setActive(i)} />)}</div>
    </div>
  </div>;
}

export default function CFDBroker() {
  const [openFaq, setOpenFaq] = useState(0);
  return <main className="cfd-page">
    <section className="cfd-hero">
      <div className="cfd-hero-grid" /><div className="cfd-hero-glow glow-a" /><div className="cfd-hero-glow glow-b" />
      <div className="cfd-container cfd-hero-layout">
        <motion.div className="cfd-hero-copy" initial="hidden" animate="visible" variants={stagger}>
          <motion.span className="cfd-eyebrow" variants={fadeUp}><i />CFD BROKERAGE TECHNOLOGY</motion.span>
          <motion.h1 variants={fadeUp}>Infrastructure for <span>CFD Brokerage Operations.</span></motion.h1>
          <motion.p variants={fadeUp}>Design a CFD brokerage stack around instrument coverage, contract configuration, pricing, execution connectivity and the operational systems that support client trading.</motion.p>
          <motion.div className="cfd-hero-actions" variants={fadeUp}><a className="cfd-btn primary" href="/contact">Discuss requirements <ArrowUpRight size={18} /></a><a className="cfd-btn secondary" href="#cfd-requirements">Explore the scope <ArrowRight size={17} /></a></motion.div>
          <motion.div className="cfd-hero-points" variants={fadeUp}><span><CheckCircle2 size={16} />Instrument architecture</span><span><CheckCircle2 size={16} />Multi-asset pricing</span><span><CheckCircle2 size={16} />Execution connectivity</span></motion.div>
        </motion.div>
        <motion.div className="cfd-hero-visual" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .75, delay: .12 }}>
          <div className="cfd-visual-orbit orbit-a" /><div className="cfd-visual-orbit orbit-b" />
          <div className="cfd-dashboard">
            <div className="cfd-dashboard-top"><span className="cfd-window-dots"><i/><i/><i/></span><span>CFD BROKERAGE TECHNOLOGY</span><span className="cfd-status"><i/>SYSTEM MAP</span></div>
            <div className="cfd-dashboard-title"><div><small>TECHNOLOGY ARCHITECTURE</small><h3>CFD Broker Ecosystem</h3></div><span><Network size={23}/></span></div>
            <div className="cfd-dashboard-metrics"><div><small>PLATFORM</small><strong>MT4 / MT5</strong></div><div><small>PRICING</small><strong>MULTI-ASSET</strong></div><div><small>INSTRUMENTS</small><strong>CFD CONTRACTS</strong></div></div>
            <div className="cfd-system-list">{[{icon: Layers3,title:"Trading Platform",sub:"MT4 / MT5 environment"},{icon: Database,title:"Pricing Sources",sub:"Normalize supported data"},{icon: GitBranch,title:"Execution Connectivity",sub:"Routing & downstream flows"},{icon: Settings2,title:"Contract Configuration",sub:"Symbols, sessions & conditions"},{icon: ShieldCheck,title:"Operations & Controls",sub:"Monitoring, access & ownership"}].map((item,i)=>{const Icon=item.icon;return <motion.div key={item.title} className="cfd-system-row" initial={{opacity:0,x:i%2?12:-12}} animate={{opacity:1,x:0}} transition={{delay:.25+i*.1}} whileHover={{x:4}}><span className="cfd-row-icon"><Icon size={17}/></span><div><strong>{item.title}</strong><small>{item.sub}</small></div><CheckCircle2 size={16} className="cfd-row-check"/></motion.div>})}</div>
            <div className="cfd-dashboard-foot"><span><Activity size={14}/> CONNECTED TECHNOLOGY LAYERS</span><span>Illustrative architecture</span></div>
          </div>
          <motion.div className="cfd-float-card float-top" animate={{y:[0,-7,0]}} transition={{duration:4,repeat:Infinity,ease:"easeInOut"}}><span><ShieldCheck size={18}/></span><div><strong>Defined Controls</strong><small>Ownership & monitoring</small></div></motion.div>
          <motion.div className="cfd-float-card float-bottom" animate={{y:[0,7,0]}} transition={{duration:4.5,repeat:Infinity,ease:"easeInOut"}}><span><SlidersHorizontal size={18}/></span><div><strong>Contract-aware</strong><small>Consistent symbol settings</small></div></motion.div>
        </motion.div>
      </div>
      <div className="cfd-scope-strip"><div className="cfd-container cfd-strip-inner"><strong>CFD BROKERAGE TECHNOLOGY PROJECT SCOPE</strong><span><b>01</b> PLATFORM</span><span><b>02</b> PRICING</span><span><b>03</b> EXECUTION</span><span><b>04</b> OPERATIONS</span></div></div>
    </section>

    <section className="cfd-section cfd-requirements" id="cfd-requirements"><div className="cfd-container">
      <SectionHeading eyebrow="SCOPE & DECISIONS" title="Plan the requirements for CFD Brokers" text="Define the instrument, pricing, execution, platform and operational requirements, then map how each component connects across the stack." />
      <motion.div className="cfd-requirement-grid" initial="hidden" whileInView="visible" viewport={{once:true,amount:.1}} variants={stagger}>{requirements.map(item=>{const Icon=item.icon;return <motion.article className="cfd-requirement-card" key={item.n} variants={fadeUp} whileHover={{y:-7}}><div className="cfd-card-top"><span>{item.n}</span><span className="cfd-card-icon"><Icon size={22}/></span></div><small className="cfd-card-category">{item.category}</small><h3>{item.title}</h3><p>{item.text}</p><div className="cfd-card-points">{item.points.map(point=><span key={point}><CheckCircle2 size={14}/>{point}</span>)}</div></motion.article>})}</motion.div>
    </div></section>

    <section className="cfd-section cfd-contract-section"><div className="cfd-container cfd-contract-layout">
      <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={stagger}><SectionHeading eyebrow="INSTRUMENT DESIGN" title="Make contract configuration part of the architecture" text="For each intended CFD, define the underlying reference, source mapping, contract size, precision, sessions and required trading conditions."/><p className="cfd-contract-extra">Coordinate price distribution and execution specifications so a symbol represents the same intended contract across connected systems. Test session boundaries, unavailable prices and invalid quantities for representative instruments. Record who approves specification changes and how CRM, platform and reporting teams are notified when the instrument catalogue changes.</p><a className="cfd-text-link" href="/contact">Discuss contract requirements <ArrowRight size={17}/></a></motion.div>
      <motion.div className="cfd-contract-visual" initial={{opacity:0,scale:.96}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:.6}}><div className="cfd-contract-orbit orbit-one"/><div className="cfd-contract-orbit orbit-two"/><div className="cfd-contract-center"><SlidersHorizontal size={30}/><strong>CFD</strong><small>CONTRACT MODEL</small></div><div className="cfd-contract-chip chip-one"><Globe2 size={17}/> Underlying reference</div><div className="cfd-contract-chip chip-two"><Database size={17}/> Source mapping</div><div className="cfd-contract-chip chip-three"><Gauge size={17}/> Precision & sessions</div><div className="cfd-contract-chip chip-four"><FileCheck2 size={17}/> Trading conditions</div></motion.div>
    </div></section>

    <section className="cfd-section cfd-architecture-section"><div className="cfd-container"><SectionHeading centered eyebrow="CONNECTED INFRASTRUCTURE" title="Explore the connected CFD broker stack" text="Select a layer to see how it contributes to the wider brokerage technology architecture."/><ArchitectureVisual/><div className="cfd-architecture-note"><ShieldCheck size={19}/><p>Final architecture depends on the broker's requirements, selected platforms, supported interfaces and agreed technical scope.</p></div></div></section>

    <section className="cfd-section cfd-principles-section"><div className="cfd-container"><SectionHeading centered eyebrow="PRODUCTION READINESS" title="Make dependencies and responsibilities clear" text="Use these implementation principles to prepare critical workflows and operational controls."/><motion.div className="cfd-principles-grid" initial="hidden" whileInView="visible" viewport={{once:true}} variants={stagger}>{principles.map((item,i)=>{const Icon=item.icon;return <motion.article className="cfd-principle-card" key={item.title} variants={fadeUp} whileHover={{y:-6}}><div className="cfd-principle-top"><span>0{i+1}</span><Icon size={25}/></div><h3>{item.title}</h3><p>{item.text}</p><div className="cfd-principle-foot"><CheckCircle2 size={15}/>IMPLEMENTATION PRINCIPLE</div></motion.article>})}</motion.div></div></section>

    <section className="cfd-section cfd-related-section"><div className="cfd-container"><SectionHeading eyebrow="RELATED READING" title="Continue with the connected technology layers" text="Explore related technology areas that can form part of a CFD brokerage environment."/><motion.div className="cfd-related-grid" initial="hidden" whileInView="visible" viewport={{once:true,amount:.1}} variants={stagger}>{related.map(item=>{const Icon=item.icon;return <motion.a className="cfd-related-card" href={item.href} key={item.title} variants={fadeUp} whileHover={{y:-6}}><div className="cfd-related-top"><span><Icon size={22}/></span><ArrowUpRight size={18}/></div><small>{item.label}</small><h3>{item.title}</h3><p>{item.text}</p><span className="cfd-related-link">Explore technology <ArrowRight size={15}/></span></motion.a>})}</motion.div></div></section>

    <section className="cfd-section cfd-faq-section"><div className="cfd-container cfd-faq-layout"><div><SectionHeading eyebrow="QUESTIONS" title="Questions about CFD Brokers" text="Answers to common questions about instrument setup, multi-asset platforms, migration and integrations."/><div className="cfd-faq-help"><span><CircleHelp size={23}/></span><div><strong>Need a technical discussion?</strong><p>Share your target platform, current systems and required workflows with the technical team.</p><a href="/contact">Discuss requirements <ArrowUpRight size={16}/></a></div></div></div><div className="cfd-faq-list">{faqs.map((faq,i)=><motion.article key={faq.q} className={`cfd-faq-item ${openFaq===i?"open":""}`} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.04}}><button type="button" onClick={()=>setOpenFaq(openFaq===i?-1:i)} aria-expanded={openFaq===i}><span>{faq.q}</span><ChevronDown size={19}/></button><AnimatePresence initial={false}>{openFaq===i&&<motion.div className="cfd-faq-answer" initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.24}}><p>{faq.a}</p></motion.div>}</AnimatePresence></motion.article>)}</div></div></section>

    <section className="cfd-final-cta"><div className="cfd-cta-grid"/><div className="cfd-container cfd-cta-layout"><motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={stagger}><span className="cfd-eyebrow"><i/>TECHNOLOGY GLOBAL SOLUTIONS</span><h2>Discuss your CFD brokerage <span>infrastructure requirements.</span></h2><p>Share your target platform, current systems and required workflows with the TGS technical team.</p><div className="cfd-hero-actions"><a className="cfd-btn primary" href="/contact">Discuss your project <ArrowUpRight size={18}/></a><a className="cfd-btn secondary" href="/brokerage-technology">Explore brokerage technology <ArrowRight size={17}/></a></div></motion.div><motion.div className="cfd-cta-visual" animate={{y:[0,-7,0]}} transition={{duration:5,repeat:Infinity,ease:"easeInOut"}}><div className="cfd-cta-ring ring-a"/><div className="cfd-cta-ring ring-b"/><div className="cfd-cta-core"><Network size={34}/><strong>TGS</strong><small>CFD INFRASTRUCTURE</small></div><span className="cta-node cta-node-a"><Layers3 size={19}/></span><span className="cta-node cta-node-b"><Database size={19}/></span><span className="cta-node cta-node-c"><Server size={19}/></span></motion.div></div></section>
  </main>;
}
