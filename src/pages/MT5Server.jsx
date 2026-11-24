import React, { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Cable,
  Check,
  ChevronDown,
  CircleHelp,
  Cloud,
  Database,
  Gauge,
  GitBranch,
  Layers3,
  LockKeyhole,
  MessageCircle,
  Network,
  RefreshCw,
  Server,
  ShieldCheck,
  SlidersHorizontal,
  Workflow,
  Zap,
} from "lucide-react";
import "./MT5Server.css";

const layers = [
  { id: "platform", number: "01", title: "Trading platform", short: "Platform", icon: Layers3, summary: "The core trading environment and broker-side operating layer.", detail: "Map the MT4/MT5 environment, broker workflows and the operational boundaries that the infrastructure must support.", tags: ["MT4 / MT5", "Broker operations", "Environment scope"] },
  { id: "pricing", number: "02", title: "Market data", short: "Pricing", icon: Activity, summary: "Market-data connectivity and symbol distribution.", detail: "Identify pricing sources, symbol mapping and data-distribution dependencies before connecting the platform runtime.", tags: ["Price feeds", "Symbol mapping", "Data connectivity"] },
  { id: "routing", number: "03", title: "Routing & bridge", short: "Routing", icon: GitBranch, summary: "Bridge interfaces, execution routing and platform connectivity.", detail: "Document the routing path and the interfaces between the trading platform and the supported execution components.", tags: ["Bridge", "Routing path", "Interfaces"] },
  { id: "execution", number: "04", title: "Execution", short: "Execution", icon: Zap, summary: "Liquidity connectivity and supported downstream endpoints.", detail: "Clarify the supported execution endpoints, dependencies and responsibilities required by the intended broker architecture.", tags: ["Liquidity", "Execution endpoints", "Dependencies"] },
  { id: "client-ops", number: "05", title: "Client systems", short: "Client Ops", icon: Boxes, summary: "CRM, APIs, accounts, onboarding and integrations.", detail: "Map client-facing and back-office systems so account, onboarding and API workflows are accounted for in the design.", tags: ["Broker CRM", "Back office", "API integration"] },
  { id: "runtime", number: "06", title: "Runtime & operations", short: "Runtime", icon: Server, summary: "Hosting, monitoring, access and continuity procedures.", detail: "Define the hosting environment, operational access, health monitoring, backup scope and recovery responsibilities.", tags: ["Hosting", "Monitoring", "Continuity"] },
];

const factors = [
  { number: "01", icon: Cloud, label: "HOSTING", title: "Runtime architecture", text: "Plan compute, storage and environment separation around the expected brokerage workload.", metric: "Environment design" },
  { number: "02", icon: Network, label: "NETWORK", title: "Network connectivity", text: "Design reliable connections between platform services, data sources and supported integrations.", metric: "Dependency mapping" },
  { number: "03", icon: LockKeyhole, label: "ACCESS", title: "Operational access", text: "Structure administrator, manager and technical access around defined responsibilities.", metric: "Role clarity" },
  { number: "04", icon: Gauge, label: "MONITOR", title: "Monitoring", text: "Observe service availability, infrastructure health and relevant operational signals.", metric: "Health visibility" },
  { number: "05", icon: RefreshCw, label: "RECOVERY", title: "Backup & recovery", text: "Define backup scope, recovery procedures and configuration-change handling.", metric: "Recovery planning" },
  { number: "06", icon: ShieldCheck, label: "CONTINUITY", title: "Operational continuity", text: "Document dependencies, escalation paths and recovery priorities for production operations.", metric: "Defined ownership" },
];

const planning = [
  ["01", "Capacity & dependencies", "Estimate workloads and map platform, data, integration and network dependencies."],
  ["02", "Environment design", "Define hosting topology, access roles, monitoring and backup responsibilities."],
  ["03", "Deployment validation", "Verify connectivity, access, monitoring and recovery assumptions before production use."],
  ["04", "Ongoing operations", "Coordinate infrastructure changes, health checks and incident response under the agreed scope."],
];

const stages = [
  ["Discovery", "Requirements mapping", "Document platform scope, instruments, integrations, connectivity, access and operational responsibilities."],
  ["Architecture", "Dependency design", "Map platform, data, execution, CRM and infrastructure components before production changes begin."],
  ["Deployment", "Controlled implementation", "Configure the agreed environment with defined access, change control and rollback considerations."],
  ["Validation", "Production testing", "Validate critical flows, connectivity, permissions, monitoring and recovery procedures."],
  ["Handover", "Operational handover", "Clarify ownership, escalation paths and recurring operational procedures for the live environment."],
  ["Support", "Ongoing technical support", "Support the agreed infrastructure and integration scope with controlled changes and troubleshooting."],
];

const faqs = [
  ["What is included in MT5 server infrastructure planning?", "Typical scope includes hosting topology, network connectivity, operational access, monitoring, backup and continuity requirements. The final scope depends on your platform setup and operational responsibilities."],
  ["Can you work with our existing hosting provider?", "Yes, where the provider environment offers the required access, network capabilities and supported deployment options. Existing dependencies can be reviewed during technical discovery."],
  ["Do you provide monitoring and support?", "Monitoring and technical operations can be included depending on the agreed service scope and the responsibilities assigned to each infrastructure party."],
  ["How do you approach backups and recovery?", "Backup frequency, retention and recovery procedures are defined around the platform environment and operational requirements rather than using a generic one-size-fits-all approach."],
  ["Does MT5 server hosting include market data and bridge connectivity?", "Hosting is the runtime environment. Market data and bridge connectivity are separate technology layers that can be integrated according to the broker's architecture and supported endpoints."],
  ["What should be documented before production launch?", "Document access responsibilities, system dependencies, backup scope, monitoring, recovery procedures and controlled change processes before production use."],
];

const related = [
  { number: "01", title: "MT5 White Label", text: "Connect the server layer with platform configuration and branded brokerage operations.", icon: Layers3, href: "/mt5-white-label" },
  { number: "02", title: "MT5 Market Data", text: "Plan reliable data connectivity into the MT5 runtime environment.", icon: Database, href: "/price-feed" },
  { number: "03", title: "MT5 Liquidity Bridge", text: "Add supported execution connectivity and routing to the brokerage stack.", icon: Workflow, href: "/liquidity-bridge" },
  { number: "04", title: "MT5 Cost Planning", text: "Understand how infrastructure choices influence total project scope.", icon: SlidersHorizontal, href: "/mt5-server" },
];

const principles = [
  { icon: GitBranch, title: "Documented dependencies", text: "Critical interfaces are mapped so troubleshooting does not depend on guesswork." },
  { icon: LockKeyhole, title: "Controlled access", text: "Administrator privileges and production responsibilities are explicit and limited to operational need." },
  { icon: Activity, title: "Monitoring & recovery", text: "Health checks, escalation and recovery procedures are part of the architecture—not an afterthought." },
];

const brokerInputs = [
  ["Platform & product scope", "Target platform, instruments, client groups and required broker-side workflows."],
  ["Existing technology estate", "Current CRM, payments, market data, execution, APIs and infrastructure dependencies."],
  ["Connectivity requirements", "Supported data, execution and third-party endpoints needed in the production design."],
  ["Operational responsibilities", "Who owns access, monitoring, incidents, changes and day-to-day operations."],
];

function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 22 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`mt5-section-heading mt5-section-heading--${align}`}>
      {eyebrow && <span className="mt5-eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function OrbitIcon({ className, icon: Icon, label, delay = 0 }) {
  return (
    <motion.div
      className={`mt5-orbit-icon ${className}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6, type: "spring", stiffness: 130 }}
      title={label}
    >
      <Icon size={19} strokeWidth={1.8} />
      <span>{label}</span>
    </motion.div>
  );
}

function HeroServerAnimation() {
  const bricks = [0, 1, 2, 3];
  return (
    <div className="mt5-hero-machine" aria-label="Animated MT5 server stack with orbiting infrastructure icons">
      <div className="mt5-hero-halo mt5-hero-halo--one" />
      <div className="mt5-hero-halo mt5-hero-halo--two" />
      <div className="mt5-hero-orbit mt5-hero-orbit--outer" />
      <div className="mt5-hero-orbit mt5-hero-orbit--inner" />
      <div className="mt5-orbit-path mt5-orbit-path--one" />
      <div className="mt5-orbit-path mt5-orbit-path--two" />

      <motion.div
        className="mt5-orbit-rotator mt5-orbit-rotator--clockwise"
        animate={{ rotate: 360 }}
        transition={{ duration: 26, ease: "linear", repeat: Infinity }}
      >
        <OrbitIcon className="mt5-orbit-market" icon={Activity} label="Market data" delay={0.1} />
        <OrbitIcon className="mt5-orbit-bridge" icon={Cable} label="Liquidity bridge" delay={0.25} />
        <OrbitIcon className="mt5-orbit-crm" icon={Boxes} label="Broker CRM" delay={0.4} />
        <OrbitIcon className="mt5-orbit-monitor" icon={Gauge} label="Monitoring" delay={0.55} />
      </motion.div>

      <motion.div
        className="mt5-orbit-rotator mt5-orbit-rotator--counter"
        animate={{ rotate: -360 }}
        transition={{ duration: 38, ease: "linear", repeat: Infinity }}
      >
        <span className="mt5-orbit-spark mt5-orbit-spark--one" />
        <span className="mt5-orbit-spark mt5-orbit-spark--two" />
        <span className="mt5-orbit-spark mt5-orbit-spark--three" />
      </motion.div>

      <div className="mt5-server-stack-animated">
        <motion.div
          className="mt5-server-cap"
          initial={{ y: -100, opacity: 0, rotateX: 22 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.85, delay: 0.35, type: "spring", stiffness: 85, damping: 13 }}
        >
          <span className="mt5-cap-light" /><span className="mt5-cap-light" /><span className="mt5-cap-label">MT5</span>
        </motion.div>
        <div className="mt5-server-bricks">
          {bricks.map((brick) => (
            <motion.div
              className={`mt5-server-brick mt5-server-brick--${brick + 1}`}
              key={brick}
              initial={{ y: -145 - brick * 16, opacity: 0, rotateX: 18, scale: 0.84 }}
              animate={{ y: 0, opacity: 1, rotateX: 0, scale: 1 }}
              transition={{
                delay: 0.62 + brick * 0.32,
                duration: 0.72,
                type: "spring",
                stiffness: 92,
                damping: 12,
              }}
            >
              <span className="mt5-brick-side" />
              <span className="mt5-brick-front">
                <i /><i /><i />
                <b>{brick === 0 ? "RUNTIME" : brick === 1 ? "NETWORK" : brick === 2 ? "DATA" : "OPS"}</b>
              </span>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt5-server-platform"
          initial={{ opacity: 0, y: 20, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.85, type: "spring" }}
        >
          <span>MT5 SERVER</span>
        </motion.div>
      </div>
      <motion.div className="mt5-hero-signal mt5-hero-signal--left" animate={{ y: [0, -8, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}>
        <Activity size={20} /><div><small>HEALTH SIGNALS</small><b>Visibility by design</b></div>
      </motion.div>
      <motion.div className="mt5-hero-signal mt5-hero-signal--right" animate={{ y: [0, 7, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
        <ShieldCheck size={20} /><div><small>OPERATIONS</small><b>Access · Backup · Recovery</b></div>
      </motion.div>
      <div className="mt5-machine-caption"><span /> STACK ASSEMBLY <b>01—04</b></div>
    </div>
  );
}

function MT5Server() {
  const [selectedLayerId, setSelectedLayerId] = useState("platform");
  const [openFaq, setOpenFaq] = useState(0);
  const selectedLayer = useMemo(() => layers.find((layer) => layer.id === selectedLayerId) || layers[0], [selectedLayerId]);
  const SelectedIcon = selectedLayer.icon;

  const scrollToContact = () => {
    const node = document.getElementById("mt5-contact");
    if (node) node.scrollIntoView({ behavior: "smooth", block: "center" });
    else window.location.href = "/contact";
  };

  return (
    <main className="mt5-page">
      <section className="mt5-hero">
        <div className="mt5-hero-grid" aria-hidden="true" />
        <div className="mt5-container mt5-hero-layout">
          <motion.div className="mt5-hero-copy" initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
            <div className="mt5-hero-kicker"><span className="mt5-status-dot" /> MT5 INFRASTRUCTURE</div>
            <h1>MT5 Server Infrastructure <span>for Brokerage Operations</span></h1>
            <p className="mt5-hero-description">Plan the runtime layer behind MetaTrader 5 environments with hosting architecture, network connectivity, monitoring, operational access and continuity procedures.</p>
            <div className="mt5-hero-actions">
              <button className="mt5-button mt5-button--primary" onClick={scrollToContact}>Discuss Your Project <ArrowUpRight size={17} /></button>
              <a className="mt5-button mt5-button--secondary" href="#mt5-stack">Explore Infrastructure <ArrowRight size={16} /></a>
            </div>
            <div className="mt5-hero-proof"><span><Check size={14} /> Scope-led architecture</span><span><Check size={14} /> Defined dependencies</span><span><Check size={14} /> Operational clarity</span></div>
          </motion.div>
          <motion.div className="mt5-hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.12 }}>
            <HeroServerAnimation />
          </motion.div>
        </div>
        <div className="mt5-container mt5-highlight-strip">
          {[["01", "MT4 / MT5", "Platform infrastructure"], ["02", "Multi-asset", "Data & connectivity"], ["03", "Global delivery", "Technical coordination"], ["04", "Modular", "Architecture by requirement"]].map(([num, title, subtitle]) => (
            <div className="mt5-highlight" key={num}><span className="mt5-highlight-number">{num}</span><div><strong>{title}</strong><small>{subtitle}</small></div></div>
          ))}
        </div>
      </section>

      <section className="mt5-section mt5-map-section" id="mt5-stack">
        <div className="mt5-container">
          <SectionHeading eyebrow="CONNECTED ARCHITECTURE" title="One brokerage stack. Six connected layers." description="Select a layer to explore its role in the wider infrastructure picture." align="center" />
          <div className="mt5-architecture">
            <div className="mt5-layer-list" role="tablist" aria-label="Infrastructure layers">
              {layers.map((layer) => {
                const Icon = layer.icon; const active = layer.id === selectedLayerId;
                return <button className={`mt5-layer-tab ${active ? "is-active" : ""}`} key={layer.id} role="tab" aria-selected={active} onClick={() => setSelectedLayerId(layer.id)}>
                  <span className="mt5-layer-number">{layer.number}</span><span className="mt5-layer-icon"><Icon size={19} /></span>
                  <span className="mt5-layer-tab-text"><strong>{layer.title}</strong><small>{layer.summary}</small></span><ArrowUpRight className="mt5-layer-arrow" size={16} />
                </button>;
              })}
            </div>
            <div className="mt5-layer-detail" role="tabpanel">
              <div className="mt5-detail-topline"><span>SELECTED LAYER</span><span className="mt5-detail-live"><i /> SCOPE VIEW</span></div>
              <AnimatePresence mode="wait"><motion.div className="mt5-detail-content" key={selectedLayer.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}>
                <div className="mt5-detail-icon"><SelectedIcon size={26} /></div><span className="mt5-detail-index">LAYER {selectedLayer.number}</span><h3>{selectedLayer.title}</h3><p>{selectedLayer.detail}</p>
                <div className="mt5-detail-tags">{selectedLayer.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </motion.div></AnimatePresence>
              <div className="mt5-detail-statuses">{[["ARCHITECTURE", "Connected stack"], ["DEPLOYMENT", "Controlled"], ["MONITORING", "Defined scope"], ["SUPPORT", "Clear ownership"]].map(([label, value], i) => <div key={label}><small>{label}</small><strong>{i === 2 ? <Activity size={14} /> : <Check size={14} />}{value}</strong></div>)}</div>
              <div className="mt5-circuit-lines" aria-hidden="true"><span /><span /><span /><span /></div>
            </div>
          </div>
          <div className="mt5-stack-note"><CircleHelp size={16} /><span>Actual components and responsibilities are confirmed against the broker's existing environment and agreed scope.</span></div>
        </div>
      </section>

      <div className="mt5-marquee" aria-label="Technology capabilities"><div className="mt5-marquee-track">{[0, 1].map((copy) => <div className="mt5-marquee-group" key={copy} aria-hidden={copy === 1}>{["MT5 WHITE LABEL", "MARKET DATA", "LIQUIDITY BRIDGE", "BROKER CRM", "SERVER INFRASTRUCTURE", "PROP FIRM TECHNOLOGY"].map((word) => <span key={word}><i />{word}</span>)}</div>)}</div></div>

      <section className="mt5-section mt5-factors-section"><div className="mt5-container">
        <SectionHeading eyebrow="INFRASTRUCTURE CHECKLIST" title="Built around the real operating requirement." description="Each component has a distinct technical and operational impact. Design decisions should follow the workload, dependencies and responsibilities—not assumptions." />
        <div className="mt5-factor-grid">{factors.map((factor, index) => { const Icon = factor.icon; return <Reveal className="mt5-factor-card" key={factor.number} delay={(index % 3) * 0.07}>
          <div className="mt5-factor-card-top"><span>{factor.number}</span><Icon size={22} /></div><span className="mt5-card-label">{factor.label}</span><h3>{factor.title}</h3><p>{factor.text}</p><div className="mt5-factor-footer"><span />{factor.metric}<ArrowUpRight size={15} /></div>
        </Reveal>; })}</div>
      </div></section>

      <section className="mt5-section mt5-ecosystem-section"><div className="mt5-container mt5-ecosystem-layout">
        <div className="mt5-ecosystem-copy"><SectionHeading eyebrow="THE BROKERAGE ECOSYSTEM" title="How this page fits into the brokerage technology stack." description="Server infrastructure is one part of a wider system. Clear interfaces between each technology layer help define what needs to be configured, tested and supported." />
          <div className="mt5-ecosystem-legend"><span><i className="mt5-legend-dot mt5-legend-dot--blue" /> Platform & runtime</span><span><i className="mt5-legend-dot mt5-legend-dot--pink" /> Data & execution</span><span><i className="mt5-legend-dot mt5-legend-dot--green" /> Client operations</span></div>
        </div>
        <div className="mt5-ecosystem-visual"><div className="mt5-ecosystem-center"><Server size={25} /><strong>Brokerage</strong><small>Technology stack</small></div>
          <div className="mt5-ecosystem-node mt5-node--one"><Layers3 size={18} /><strong>Trading platform</strong><small>MT4 · MT5 · MetaTrader</small></div>
          <div className="mt5-ecosystem-node mt5-node--two"><Database size={18} /><strong>Market data</strong><small>Feeds · Symbols · Pricing</small></div>
          <div className="mt5-ecosystem-node mt5-node--three"><GitBranch size={18} /><strong>Execution</strong><small>Bridge · Routing · Liquidity</small></div>
          <div className="mt5-ecosystem-node mt5-node--four"><Boxes size={18} /><strong>Client systems</strong><small>CRM · Back office · APIs</small></div>
          <div className="mt5-ecosystem-node mt5-node--five"><Cloud size={18} /><strong>Infrastructure</strong><small>Hosting · Monitoring · Recovery</small></div>
          <div className="mt5-ecosystem-node mt5-node--six"><ShieldCheck size={18} /><strong>Operations</strong><small>Access · Changes · Support</small></div>
          <svg className="mt5-ecosystem-connectors" viewBox="0 0 640 520" preserveAspectRatio="none" aria-hidden="true"><path d="M320 260 L170 85" /><path d="M320 260 L470 85" /><path d="M320 260 L170 255" /><path d="M320 260 L470 255" /><path d="M320 260 L170 425" /><path d="M320 260 L470 425" /></svg>
        </div>
      </div><div className="mt5-container mt5-ecosystem-tags">{["Hosting topology", "Market data & pricing", "Execution connectivity", "Broker CRM & APIs", "Operational access", "Backup & recovery"].map((tag) => <span key={tag}>{tag}</span>)}</div></section>

      <section className="mt5-section mt5-planning-section"><div className="mt5-container">
        <SectionHeading eyebrow="A CLEAR PATH TO PRODUCTION" title="How we approach the scope." description="A practical sequence for moving from initial requirements to a documented, validated operating environment." align="center" />
        <div className="mt5-planning-grid">{planning.map(([number, title, text], index) => <Reveal className="mt5-planning-step" key={number} delay={index * 0.08}><div className="mt5-step-top"><span>{number}</span><ArrowDownRight size={20} /></div><div className="mt5-step-line"><i /></div><h3>{title}</h3><p>{text}</p></Reveal>)}</div>
      </div></section>

      <section className="mt5-section mt5-faq-section"><div className="mt5-container mt5-faq-layout">
        <div className="mt5-faq-intro"><span className="mt5-eyebrow">QUESTIONS, ANSWERED</span><h2>Good infrastructure starts with clear answers.</h2><p>Explore common questions about hosting scope, connectivity, monitoring and operational readiness.</p><button className="mt5-text-link" onClick={scrollToContact}>Ask a technical question <ArrowUpRight size={16} /></button><div className="mt5-faq-decoration"><CircleHelp size={88} strokeWidth={0.7} /><span>MT5 / SERVER / OPS</span></div></div>
        <div className="mt5-faq-list">{faqs.map(([question, answer], index) => { const open = openFaq === index; return <div className={`mt5-faq-item ${open ? "is-open" : ""}`} key={question}><button className="mt5-faq-question" aria-expanded={open} onClick={() => setOpenFaq(open ? -1 : index)}><span><small>{String(index + 1).padStart(2, "0")}</small>{question}</span><ChevronDown size={19} /></button><AnimatePresence initial={false}>{open && <motion.div className="mt5-faq-answer-wrap" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.24 }}><p>{answer}</p></motion.div>}</AnimatePresence></div>; })}</div>
      </div></section>

      <section className="mt5-section mt5-related-section"><div className="mt5-container"><div className="mt5-related-heading"><SectionHeading eyebrow="CONTINUE BUILDING" title="Continue building the brokerage stack." description="Explore adjacent technology layers that can connect with your infrastructure plan." /><span className="mt5-related-count">01 — 04</span></div>
        <div className="mt5-related-grid">{related.map((service, index) => { const Icon = service.icon; return <Reveal className="mt5-related-card" key={service.number} delay={index * 0.06}><a href={service.href} className="mt5-related-card-link"><div className="mt5-related-card-top"><span>{service.number}</span><Icon size={22} /></div><h3>{service.title}</h3><p>{service.text}</p><span className="mt5-related-link">Explore service <ArrowUpRight size={15} /></span></a></Reveal>; })}</div>
      </div></section>

      <section className="mt5-section mt5-delivery-section"><div className="mt5-container"><div className="mt5-delivery-heading"><div><span className="mt5-eyebrow">DELIVERY FRAMEWORK</span><h2>From requirements to controlled production deployment.</h2></div><p>Infrastructure work is structured around explicit scope, dependencies, validation and operational ownership.</p></div>
        <div className="mt5-delivery-grid">{stages.map(([label, title, text], index) => <Reveal className="mt5-delivery-stage" key={label}><span className="mt5-delivery-number">{String(index + 1).padStart(2, "0")}</span><div className="mt5-delivery-stage-body"><span className="mt5-card-label">{label}</span><h3>{title}</h3><p>{text}</p></div>{index < stages.length - 1 && <ArrowRight className="mt5-delivery-arrow" size={17} />}</Reveal>)}</div>
      </div></section>

      <section className="mt5-section mt5-principles-section"><div className="mt5-container"><div className="mt5-principles-heading"><span className="mt5-eyebrow">ENGINEERING PRINCIPLES</span><h2>Designed for operational clarity.</h2><p>Keep the important details visible before, during and after deployment.</p></div>
        <div className="mt5-principles-grid">{principles.map((principle, index) => { const Icon = principle.icon; return <Reveal className="mt5-principle-card" key={principle.title} delay={index * 0.08}><div className="mt5-principle-icon"><Icon size={23} /></div><span>0{index + 1} / PRINCIPLE</span><h3>{principle.title}</h3><p>{principle.text}</p></Reveal>; })}</div>
      </div></section>

      <section className="mt5-section mt5-inputs-section"><div className="mt5-container mt5-inputs-layout"><div className="mt5-inputs-intro"><span className="mt5-eyebrow">BEFORE DEPLOYMENT</span><h2>What we need from the broker.</h2><p>Starting with the right information helps identify dependencies early and define a realistic delivery scope.</p><div className="mt5-inputs-badge"><Check size={15} /> Requirements-led planning</div></div>
        <div className="mt5-inputs-list">{brokerInputs.map(([title, text], index) => <div className="mt5-input-item" key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div><Check size={17} /></div>)}</div>
      </div></section>

      <section className="mt5-contact-section" id="mt5-contact"><div className="mt5-contact-grid" aria-hidden="true" /><div className="mt5-container mt5-contact-layout"><div><span className="mt5-eyebrow">LET'S MAP YOUR REQUIREMENTS</span><h2>Build the next layer of your brokerage infrastructure.</h2><p>Send us your current infrastructure requirements. We can review your target platform, data, connectivity, CRM and hosting scope and define the next technical steps.</p></div>
        <div className="mt5-contact-actions"><a className="mt5-button mt5-button--white" href="https://wa.me/919876543210?text=Hello%2C%20I%27d%20like%20to%20discuss%20MT5%20server%20infrastructure." target="_blank" rel="noreferrer"><MessageCircle size={17} /> Discuss on WhatsApp <ArrowUpRight size={16} /></a><a className="mt5-button mt5-button--outline-white" href="https://t.me/whitelabelmetatraderfx" target="_blank" rel="noreferrer">Contact on Telegram <ArrowUpRight size={16} /></a><small>Technical consultation · Requirements-first approach</small></div>
      </div></section>
    </main>
  );
}

export default MT5Server;
