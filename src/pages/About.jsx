import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Boxes, Cable, ChartNoAxesCombined,
  CheckCircle2, CircleHelp, Database, Layers3, Network, Settings2,
  ShieldCheck, Workflow, Server, Building2, Gauge, Handshake,
  ClipboardCheck, FileCheck2, MonitorCog, Waypoints
} from "lucide-react";
import { Link } from "react-router-dom";
import "./About.css";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.16 });
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

const capabilityItems = [
  { icon: Layers3, title: "Platform technology", detail: "MT4 / MT5 environments" },
  { icon: Network, title: "Connected infrastructure", detail: "Data, liquidity & CRM" },
  { icon: MonitorCog, title: "Technical operations", detail: "Configuration & support" },
  { icon: Handshake, title: "Brokerage focus", detail: "B2B technology partner" },
];

const deliveryLayers = [
  { icon: Boxes, title: "Platform", subtitle: "Configuration" },
  { icon: Database, title: "Market data", subtitle: "Connectivity" },
  { icon: Server, title: "Infrastructure", subtitle: "Deployment" },
  { icon: ShieldCheck, title: "Branding &", subtitle: "Permissions" },
  { icon: Settings2, title: "Operations", subtitle: " & support" },
];

const processSteps = [
  { n: "01", icon: ClipboardCheck, title: "Technical discovery", text: "Understand existing technology and business requirements." },
  { n: "02", icon: Waypoints, title: "Scope & dependencies", text: "Define required systems, integrations and responsibilities." },
  { n: "03", icon: Settings2, title: "Configuration", text: "Configure systems according to agreed requirements." },
  { n: "04", icon: CheckCircle2, title: "Validation", text: "Test configuration and connectivity before launch." },
  { n: "05", icon: FileCheck2, title: "Handover", text: "Document deliverables and operational responsibilities." },
];

const audienceCards = [
  { icon: ChartNoAxesCombined, title: "Brokerage teams", text: "Teams managing trading platforms and operational technology.", tag: "BROKER OPERATIONS" },
  { icon: Building2, title: "Financial technology companies", text: "Companies building financial technology products and supporting systems.", tag: "FINTECH" },
  { icon: Server, title: "Infrastructure operators", text: "Operators building or upgrading trading infrastructure.", tag: "INFRASTRUCTURE" },
];

const principles = [
  { n: "01", icon: Layers3, title: "Scope", subtitle: "Define the system.", text: "Start with requirements, dependencies and the target operating model." },
  { n: "02", icon: CheckCircle2, title: "Delivery", subtitle: "Validate before launch.", text: "Test configuration and connectivity before production operations." },
  { n: "03", icon: Handshake, title: "Support", subtitle: "Keep ownership clear.", text: "Document operational responsibilities and change processes." },
];

const related = [
  { icon: ChartNoAxesCombined, title: "Trading platforms", text: "MT4 and MT5 solutions for brokerage operations.", href: "/mt5-white-label", action: "Explore platforms" },
  { icon: Network, title: "Infrastructure", text: "Market data, liquidity bridge and broker CRM.", href: "/brokerage-technology", action: "Explore infrastructure" },
  { icon: Layers3, title: "Brokerage solutions", text: "Technology for different brokerage operating models.", href: "/forex-brokers", action: "Explore solutions" },
];

export default function About() {
  return (
    <main className="tgs-about-page">
      {/* HERO: intentionally different from the remaining sections */}
      <section className="tgs-about-hero">
        <div className="tgs-about-hero-grid" />
        <div className="tgs-about-hero-orb tgs-about-hero-orb-one" />
        <div className="tgs-about-hero-orb tgs-about-hero-orb-two" />
        <div className="tgs-about-container tgs-about-hero-inner">
          <motion.div className="tgs-about-hero-copy" initial="hidden" animate="visible" variants={stagger}>
            <motion.span className="tgs-about-eyebrow" variants={fadeUp}><i /> ABOUT TECHNOLOGY GLOBAL SOLUTIONS</motion.span>
            <motion.h1 variants={fadeUp}>Engineering for the <span>financial technology stack.</span></motion.h1>
            <motion.p variants={fadeUp}>Technology Global Solutions works with brokerage and financial technology teams on trading infrastructure, white-label environments, market data and technical operations.</motion.p>
            <motion.div className="tgs-about-hero-actions" variants={fadeUp}>
              <a href="#our-approach" className="tgs-about-button tgs-about-button-primary">Explore our approach <ArrowRight size={17} /></a>
              <Link to="/contact" className="tgs-about-button tgs-about-button-outline">Discuss your project <ArrowUpRight size={17} /></Link>
            </motion.div>
            <motion.div className="tgs-about-hero-pills" variants={fadeUp}>
              <span><Layers3 size={16} /> Trading platforms</span><span><Database size={16} /> Market data</span><span><Cable size={16} /> Execution connectivity</span>
            </motion.div>
          </motion.div>
          <motion.div className="tgs-about-hero-visual" initial={{ opacity: 0, x: 35, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.9, delay: 0.18 }}>
            <div className="tgs-about-visual-halo" />
            <div className="tgs-about-building">
              <div className="tgs-about-building-top"><span>TGS</span><small>TECHNOLOGY / SYSTEMS</small></div>
              <div className="tgs-about-building-grid"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
              <div className="tgs-about-building-base"><span /><span /><span /></div>
            </div>
            <motion.div className="tgs-about-float-card tgs-about-float-card-top" animate={{ y: [0, -8, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}><Layers3 size={17} /><span>Platform technology</span></motion.div>
            <motion.div className="tgs-about-float-card tgs-about-float-card-mid" animate={{ y: [0, 7, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}><Database size={17} /><span>Market data</span></motion.div>
            <motion.div className="tgs-about-float-card tgs-about-float-card-bottom" animate={{ y: [0, -5, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}><Network size={17} /><span>Connected infrastructure</span></motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE: heading starts at the top of this section */}
      <section className="tgs-about-section tgs-about-who" id="who-we-are">
        <div className="tgs-about-container">
          <Reveal className="tgs-about-section-heading tgs-about-heading-centered">
            <span className="tgs-about-eyebrow"><i /> WHO WE ARE</span>
            <h2>A focused team for brokerage <span>technology.</span></h2>
            <p>We are an independent technology provider, working across platforms, data, execution and client systems. Our team combines practical engineering with an understanding of how brokerage businesses operate.</p>
          </Reveal>
          <motion.div className="tgs-about-capability-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {capabilityItems.map(({ icon: Icon, title, detail }) => <motion.article className="tgs-about-capability" variants={fadeUp} key={title} whileHover={{ y: -7 }}>
              <span className="tgs-about-icon-bubble"><Icon size={23} /></span><h3>{title}</h3><p>{detail}</p>
            </motion.article>)}
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO: heading at top; diagram below */}
      <section className="tgs-about-section tgs-about-what" id="our-approach">
        <div className="tgs-about-container">
          <Reveal className="tgs-about-section-heading tgs-about-heading-row">
            <div><span className="tgs-about-eyebrow"><i /> WHAT WE DO</span><h2>Implementation over <span>buzzwords.</span></h2></div>
            <p>Brokerage technology projects involve multiple technical layers, including platform configuration, market data connectivity, infrastructure, branding, permissions and support. Our role is to integrate these layers around a clear operating model.</p>
          </Reveal>
          <motion.div className="tgs-about-layer-flow" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
            {deliveryLayers.map(({ icon: Icon, title, subtitle }, index) => <motion.div className="tgs-about-layer-wrap" variants={fadeUp} key={title}>
              <motion.article className="tgs-about-layer-card" whileHover={{ y: -8, scale: 1.025 }}>
                <span className="tgs-about-layer-icon"><Icon size={27} /></span><h3>{title}</h3><p>{subtitle}</p>
              </motion.article>{index < deliveryLayers.length - 1 && <span className="tgs-about-flow-connector" />}
            </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* PROCESS: title at top, timeline underneath */}
      <section className="tgs-about-section tgs-about-process" id="how-we-work">
        <div className="tgs-about-container">
          <Reveal className="tgs-about-section-heading tgs-about-heading-row">
            <div><span className="tgs-about-eyebrow"><i /> HOW WE WORK</span><h2>A structured approach to technical <span>delivery.</span></h2></div>
            <p>We work through a clear process from technical discovery to configuration, validation and handover. Where ongoing support is required, responsibilities are also documented.</p>
          </Reveal>
          <div className="tgs-about-timeline-line" />
          <motion.div className="tgs-about-process-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
            {processSteps.map(({ n, icon: Icon, title, text }) => <motion.article className="tgs-about-process-card" variants={fadeUp} key={n} whileHover={{ y: -7 }}>
              <div className="tgs-about-step-number">{n}</div><Icon className="tgs-about-process-icon" size={25} /><h3>{title}</h3><p>{text}</p>
            </motion.article>)}
          </motion.div>
        </div>
      </section>

      {/* CLIENT TYPES: dark image cards make the layout vary */}
      <section className="tgs-about-section tgs-about-audience">
        <div className="tgs-about-container">
          <Reveal className="tgs-about-section-heading tgs-about-heading-row">
            <div><span className="tgs-about-eyebrow"><i /> WHO WE WORK WITH</span><h2>Supporting the teams that <span>build and operate.</span></h2></div>
            <p>Our services are for B2B clients, including brokerage teams, financial technology companies and trading infrastructure operators building or upgrading their technology environments.</p>
          </Reveal>
          <motion.div className="tgs-about-audience-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
            {audienceCards.map(({ icon: Icon, title, text, tag }, index) => <motion.article className={`tgs-about-audience-card audience-card-${index + 1}`} variants={fadeUp} key={title} whileHover={{ y: -8 }}>
              <div className="tgs-about-audience-art"><div className="tgs-about-art-ring" /><Icon size={49} strokeWidth={1.4} /><span className="tgs-about-art-spark">✦</span></div>
              <span className="tgs-about-card-tag">{tag}</span><h3>{title}</h3><p>{text}</p><span className="tgs-about-card-arrow"><ArrowUpRight size={18} /></span>
            </motion.article>)}
          </motion.div>
        </div>
      </section>

      {/* PRINCIPLES: dark full-width band, content still constrained */}
      <section className="tgs-about-principles">
        <div className="tgs-about-principles-glow" />
        <div className="tgs-about-container tgs-about-principles-inner">
          <Reveal className="tgs-about-principles-intro"><span className="tgs-about-eyebrow"><i /> OUR PRINCIPLES</span><h2>Built around <span>clarity.</span></h2><p>Our approach is based on clear scope, validated delivery and well-defined operational responsibilities.</p></Reveal>
          <motion.div className="tgs-about-principle-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {principles.map(({ n, icon: Icon, title, subtitle, text }) => <motion.article className="tgs-about-principle-card" variants={fadeUp} key={n} whileHover={{ y: -6 }}>
              <div className="tgs-about-principle-top"><span>{n}</span><Icon size={28} /></div><h3>{title}</h3><h4>{subtitle}</h4><p>{text}</p>
            </motion.article>)}
          </motion.div>
        </div>
      </section>

      {/* TECHNICAL TEAM: image/diagram on left, text on right */}
      <section className="tgs-about-section tgs-about-technical">
        <div className="tgs-about-container">
          <Reveal className="tgs-about-section-heading tgs-about-heading-centered">
            <span className="tgs-about-eyebrow"><i /> TECHNICAL ENGAGEMENT</span><h2>From architecture to ongoing <span>operations.</span></h2>
          </Reveal>
          <div className="tgs-about-technical-layout">
            <Reveal className="tgs-about-system-visual">
              <div className="tgs-about-system-core"><div><Layers3 size={32} /><strong>TGS</strong></div></div>
              <div className="tgs-about-system-node node-platform"><MonitorCog size={19} /><span>Platform<br />configuration</span></div>
              <div className="tgs-about-system-node node-data"><Database size={19} /><span>Market data<br />connectivity</span></div>
              <div className="tgs-about-system-node node-execution"><ChartNoAxesCombined size={19} /><span>Execution<br />interfaces</span></div>
              <div className="tgs-about-system-node node-client"><Boxes size={19} /><span>Client<br />systems</span></div>
              <div className="tgs-about-system-lines" />
              <div className="tgs-about-system-footer"><span><CheckCircle2 size={15} /> Clear scope</span><span><ShieldCheck size={15} /> Defined responsibilities</span><span><FileCheck2 size={15} /> Documented deliverables</span></div>
            </Reveal>
            <Reveal className="tgs-about-technical-copy" delay={0.08}>
              <span className="tgs-about-small-label">A CLEAR WORKING MODEL</span>
              <h3>Good technology starts with <span>clear ownership.</span></h3>
              <p>We work on platform configuration, market-data connectivity, execution interfaces and supporting client systems.</p>
              <p>An initial discussion should identify your current technology stack, target configuration and operational workflows.</p>
              <p>Our proposals distinguish TGS engineering scope, platform-vendor arrangements and third-party services. Deliverables, permissions, acceptance scenarios and support responsibilities should be agreed before production work.</p>
              <div className="tgs-about-independent-note"><ShieldCheck size={20} /><span><strong>Independent technology provider</strong><small>Clear responsibilities across the delivery scope.</small></span></div>
              <Link to="/contact" className="tgs-about-text-link">Discuss your requirements <ArrowRight size={17} /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RELATED READING */}
      <section className="tgs-about-section tgs-about-related">
        <div className="tgs-about-container">
          <Reveal className="tgs-about-section-heading tgs-about-heading-row">
            <div><span className="tgs-about-eyebrow"><i /> RELATED READING</span><h2>Continue with the connected <span>technology layers.</span></h2></div>
            <p>Explore platform, infrastructure and brokerage solution pages to learn more about how the technology fits together.</p>
          </Reveal>
          <motion.div className="tgs-about-related-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
            {related.map(({ icon: Icon, title, text, href, action }) => <motion.article className="tgs-about-related-card" variants={fadeUp} key={title} whileHover={{ y: -7 }}>
              <span className="tgs-about-related-icon"><Icon size={25} /></span><h3>{title}</h3><p>{text}</p><Link to={href}>{action} <ArrowRight size={15} /></Link>
            </motion.article>)}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="tgs-about-cta-wrap">
        <motion.div className="tgs-about-container" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }}>
          <div className="tgs-about-cta">
            <div className="tgs-about-cta-lines" />
            <div className="tgs-about-cta-copy"><span className="tgs-about-eyebrow"><i /> GET IN TOUCH</span><h2>Have a technical brief?</h2><p>Share your current technology stack, target setup or migration goals to start a conversation with our technical team.</p></div>
            <Link to="/contact" className="tgs-about-button tgs-about-button-light">Discuss your project <ArrowUpRight size={17} /></Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
