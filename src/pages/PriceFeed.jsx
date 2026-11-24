import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  CandlestickChart,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  Clock3,
  Database,
  Gauge,
  Globe2,
  Layers3,
  LineChart,
  Network,
  RadioTower,
  RefreshCw,
  Server,
  ShieldCheck,
  SlidersHorizontal,
  Zap,
} from "lucide-react";
import "./PriceFeed.css";

const reveal = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const feedLayers = [
  {
    number: "01",
    title: "Liquidity Sources",
    subtitle: "External pricing inputs",
    description:
      "Connect the agreed liquidity-provider or market-data sources and document source-specific availability, permissions and delivery requirements.",
    icon: RadioTower,
  },
  {
    number: "02",
    title: "Feed Normalisation",
    subtitle: "Consistent market data",
    description:
      "Organise incoming prices, instrument names and feed conventions into a consistent structure for the target trading environment.",
    icon: SlidersHorizontal,
  },
  {
    number: "03",
    title: "Symbol Mapping",
    subtitle: "Instrument configuration",
    description:
      "Map symbols and instrument properties to the broker's platform naming, contract settings and operating model.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Distribution",
    subtitle: "Platform and API delivery",
    description:
      "Plan delivery to supported MT4/MT5 environments and other agreed destinations, including API paths where in scope.",
    icon: Network,
  },
  {
    number: "05",
    title: "History & Analytics",
    subtitle: "Historical data workflows",
    description:
      "Define historical data access, export requirements and downstream analytics needs for the chosen platform and integration.",
    icon: Database,
  },
  {
    number: "06",
    title: "Monitoring & Operations",
    subtitle: "Visibility and continuity",
    description:
      "Establish feed health checks, escalation ownership and recovery procedures appropriate to the production environment.",
    icon: Activity,
  },
];

const assetClasses = [
  { symbol: "EUR/USD", label: "Forex", price: "1.08426", change: "+0.18%", up: true },
  { symbol: "XAU/USD", label: "Metals", price: "2,348.72", change: "+0.42%", up: true },
  { symbol: "US100", label: "Index CFD", price: "18,642.5", change: "−0.12%", up: false },
  { symbol: "WTI", label: "Energies", price: "78.34", change: "+0.09%", up: true },
];

const capabilities = [
  {
    icon: Zap,
    title: "Real-time price delivery",
    text: "Plan continuous quote delivery into the trading environments agreed for the project.",
  },
  {
    icon: CandlestickChart,
    title: "MT4 & MT5 workflows",
    text: "Align symbol configuration and supported market-data workflows with MetaTrader environments.",
  },
  {
    icon: SlidersHorizontal,
    title: "Symbol transformation",
    text: "Structure instrument names and mappings around the broker's product catalogue and operating requirements.",
  },
  {
    icon: Gauge,
    title: "Spread configuration",
    text: "Define fixed or dynamic spread rules where supported by the selected feed and platform setup.",
  },
  {
    icon: Database,
    title: "Historical data access",
    text: "Scope historical pricing, exports and analytics workflows according to data availability and requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Monitoring & support",
    text: "Document health checks, escalation paths and operational responsibilities for the agreed service scope.",
  },
];

const workflow = [
  ["01", "Discovery", "Confirm target platforms, instruments, data sources, permissions and delivery paths."],
  ["02", "Feed design", "Document symbols, mappings, spread rules, protocols and environment dependencies."],
  ["03", "Integration", "Configure the agreed feed path and connect the required platform or API components."],
  ["04", "Validation", "Test symbol coverage, quote behaviour, historical workflows and operational edge cases."],
  ["05", "Go-live", "Coordinate production activation, access, monitoring and ownership handover."],
];

const faqs = [
  {
    q: "What is a market data feed for MT4 and MT5?",
    a: "A market data feed delivers pricing information into a trading platform. The exact source, symbol coverage, mapping and configuration depend on the broker's liquidity arrangements and the agreed technical scope.",
  },
  {
    q: "Can the feed work with an existing MetaTrader environment?",
    a: "An existing MT4 or MT5 environment can be assessed for compatibility. Supported integration paths, permissions, server configuration and implementation scope should be confirmed during discovery.",
  },
  {
    q: "Which asset classes can be supported?",
    a: "Forex, indices, metals, energies, futures, crypto and equity instruments may be considered, subject to the selected data providers, commercial rights, platform support and project scope.",
  },
  {
    q: "Can symbol names and spreads be configured?",
    a: "Symbol mapping and spread configuration can be included where supported by the chosen feed and platform setup. The required naming conventions and spread model should be documented before implementation.",
  },
  {
    q: "Is historical market data included?",
    a: "Historical data access depends on the source, availability, licensing and selected integration. The required time range, format and intended use should be agreed during planning.",
  },
  {
    q: "How are feed interruptions handled?",
    a: "Monitoring, escalation and recovery procedures should be defined for the actual environment. Any redundancy or failover design depends on the available source and infrastructure.",
  },
];

const related = [
  { title: "MT4 Server Infrastructure", text: "Server environments, operational setup and hosting dependencies.", href: "/mt4-server" },
  { title: "MT5 Server Infrastructure", text: "Trading-server architecture and production operations.", href: "/mt5-server" },
  { title: "Liquidity Bridge", text: "Execution connectivity and routing between broker platforms and liquidity endpoints.", href: "/liquidity-bridge" },
  { title: "MT4 White Label", text: "Platform setup for existing broker operations.", href: "/mt4-white-label" },
];

function SectionHeading({ eyebrow, title, text, centered = false }) {
  return (
    <motion.div
      className={`pf-section-heading${centered ? " is-centered" : ""}`}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className="pf-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}

function MarketPulse() {
  return (
    <div className="pf-market-card" aria-label="Illustrative market data dashboard">
      <div className="pf-market-top">
        <div>
          <span className="pf-live-dot" />
          <span className="pf-live-label">FEED OVERVIEW</span>
        </div>
        <span className="pf-market-time"><Clock3 size={13} /> LIVE UI CONCEPT</span>
      </div>

      <div className="pf-market-title">
        <div>
          <span className="pf-muted-label">MARKET DATA STREAM</span>
          <h3>Connected markets</h3>
        </div>
        <div className="pf-pulse-icon"><Activity size={22} /></div>
      </div>

      <div className="pf-chart-wrap">
        <div className="pf-chart-grid" />
        <svg className="pf-chart" viewBox="0 0 520 160" role="img" aria-label="Decorative market data line">
          <defs>
            <linearGradient id="pfLineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#e000e8" />
            </linearGradient>
            <linearGradient id="pfAreaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a855f7" stopOpacity=".24" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            className="pf-chart-area"
            d="M0 122 L22 110 L44 118 L65 86 L88 98 L112 72 L136 83 L158 61 L181 77 L204 50 L225 63 L248 37 L271 58 L294 48 L315 67 L337 44 L359 52 L381 28 L403 41 L425 20 L448 38 L470 16 L493 29 L520 9 L520 160 L0 160 Z"
            fill="url(#pfAreaGradient)"
          />
          <motion.path
            d="M0 122 L22 110 L44 118 L65 86 L88 98 L112 72 L136 83 L158 61 L181 77 L204 50 L225 63 L248 37 L271 58 L294 48 L315 67 L337 44 L359 52 L381 28 L403 41 L425 20 L448 38 L470 16 L493 29 L520 9"
            fill="none"
            stroke="url(#pfLineGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0.3 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <circle cx="493" cy="29" r="5" fill="#e000e8" className="pf-chart-point" />
        </svg>
        <div className="pf-chart-label pf-chart-label-one">PRICE STREAM</div>
        <div className="pf-chart-label pf-chart-label-two">ILLUSTRATIVE VISUAL</div>
      </div>

      <div className="pf-market-rows">
        {assetClasses.map((asset, index) => (
          <motion.div
            className="pf-market-row"
            key={asset.symbol}
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 + index * 0.12, duration: 0.4 }}
          >
            <div className="pf-asset-icon">{asset.symbol.slice(0, 1)}</div>
            <div className="pf-asset-name">
              <strong>{asset.symbol}</strong>
              <span>{asset.label}</span>
            </div>
            <div className="pf-asset-price">
              <strong>{asset.price}</strong>
              <span className={asset.up ? "is-up" : "is-down"}>{asset.change}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="pf-disclaimer">Illustrative interface only — values are design placeholders, not live market quotes.</p>
    </div>
  );
}

function FeedArchitecture() {
  const [activeLayer, setActiveLayer] = useState(0);
  const active = feedLayers[activeLayer];
  const ActiveIcon = active.icon;

  return (
    <div className="pf-architecture">
      <div className="pf-architecture-visual">
        <div className="pf-orbit pf-orbit-one" />
        <div className="pf-orbit pf-orbit-two" />
        <div className="pf-orbit pf-orbit-three" />
        <div className="pf-architecture-core">
          <div className="pf-core-icon"><Activity size={31} /></div>
          <strong>MARKET DATA</strong>
          <span>FEED ENGINE</span>
        </div>
        {feedLayers.map((layer, index) => {
          const Icon = layer.icon;
          const positions = [
            { left: "50%", top: "7%" },
            { left: "79%", top: "25%" },
            { left: "79%", top: "70%" },
            { left: "50%", top: "88%" },
            { left: "21%", top: "70%" },
            { left: "21%", top: "25%" },
          ];
          return (
            <button
              type="button"
              key={layer.number}
              className={`pf-arch-node${activeLayer === index ? " is-active" : ""}`}
              style={positions[index]}
              onClick={() => setActiveLayer(index)}
              aria-pressed={activeLayer === index}
              aria-label={`Show ${layer.title}`}
            >
              <Icon size={18} />
              <span>{layer.number}</span>
            </button>
          );
        })}
        <div className="pf-arch-signal pf-signal-one" />
        <div className="pf-arch-signal pf-signal-two" />
        <div className="pf-arch-signal pf-signal-three" />
      </div>

      <div className="pf-architecture-detail">
        <span className="pf-eyebrow">FEED ARCHITECTURE / {active.number}</span>
        <AnimatePresence mode="wait">
          <motion.div
            key={active.number}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24 }}
          >
            <div className="pf-detail-icon"><ActiveIcon size={24} /></div>
            <h3>{active.title}</h3>
            <span className="pf-detail-subtitle">{active.subtitle}</span>
            <p>{active.description}</p>
          </motion.div>
        </AnimatePresence>
        <div className="pf-layer-selector" role="tablist" aria-label="Feed architecture layers">
          {feedLayers.map((layer, index) => (
            <button
              type="button"
              key={layer.number}
              className={activeLayer === index ? "is-active" : ""}
              onClick={() => setActiveLayer(index)}
              role="tab"
              aria-selected={activeLayer === index}
            >
              <span>{layer.number}</span>{layer.title}
              <ArrowRight size={15} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PriceFeed() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="pf-page">
      {/* HERO */}
      <section className="pf-hero">
        <div className="pf-hero-grid" aria-hidden="true" />
        <div className="pf-hero-glow pf-hero-glow-one" aria-hidden="true" />
        <div className="pf-hero-glow pf-hero-glow-two" aria-hidden="true" />

        <div className="pf-container pf-hero-layout">
          <motion.div
            className="pf-hero-copy"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="pf-hero-kicker"><span /> MARKET DATA INFRASTRUCTURE</span>
            <h1>
              MT4 &amp; MT5
              <span>Market Data Feeds</span>
              <em>Built for Broker Operations.</em>
            </h1>
            <p className="pf-hero-description">
              Plan a dependable market-data layer for your trading environment — from source connectivity and symbol mapping to quote distribution, historical workflows and operational monitoring.
            </p>
            <div className="pf-hero-actions">
              <a className="pf-btn pf-btn-primary" href="/contact">
                Discuss Your Feed Setup <ArrowRight size={17} />
              </a>
              <a className="pf-btn pf-btn-secondary" href="#pf-architecture">
                Explore Feed Architecture <ArrowDownRight size={17} />
              </a>
            </div>
            <div className="pf-hero-proof">
              <div><CheckCircle2 size={16} /><span>MT4 / MT5 integration planning</span></div>
              <div><CheckCircle2 size={16} /><span>Symbols, spreads &amp; history workflows</span></div>
              <div><CheckCircle2 size={16} /><span>Scoped to your provider and platform setup</span></div>
            </div>
          </motion.div>

          <motion.div
            className="pf-hero-visual"
            initial={{ opacity: 0, scale: 0.96, x: 18 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease: "easeOut" }}
          >
            <div className="pf-visual-orbit pf-visual-orbit-one" />
            <div className="pf-visual-orbit pf-visual-orbit-two" />
            <div className="pf-visual-badge pf-badge-source">
              <span className="pf-badge-icon"><RadioTower size={17} /></span>
              <span><strong>DATA SOURCES</strong><small>Provider connectivity</small></span>
              <span className="pf-badge-status" />
            </div>
            <MarketPulse />
            <div className="pf-visual-badge pf-badge-delivery">
              <span className="pf-badge-icon"><Server size={17} /></span>
              <span><strong>PLATFORM DELIVERY</strong><small>MT4 · MT5 · API*</small></span>
              <span className="pf-badge-status" />
            </div>
            <div className="pf-hero-spark pf-spark-one" />
            <div className="pf-hero-spark pf-spark-two" />
          </motion.div>
        </div>
        <div className="pf-hero-bottom">
          <span>MARKET DATA</span><span className="pf-bottom-line" /><span>SYMBOLS</span><span className="pf-bottom-line" /><span>DISTRIBUTION</span><span className="pf-bottom-line" /><span>OPERATIONS</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="pf-intro pf-section">
        <div className="pf-container pf-intro-layout">
          <SectionHeading
            eyebrow="A MARKET-DATA LAYER"
            title="Pricing infrastructure, not just a chart widget."
            text="A broker feed setup brings together source availability, instrument configuration, platform delivery and operational ownership. Each dependency should be agreed before implementation."
          />
          <div className="pf-intro-points">
            {[
              ["Source-aware design", "Provider availability and permissions shape the final instrument book."],
              ["Consistent instrument setup", "Symbol naming and platform settings are documented as part of the integration."],
              ["Operational visibility", "Monitoring and escalation expectations are agreed for the production setup."],
            ].map(([title, text], i) => (
              <motion.div className="pf-intro-point" key={title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <span>0{i + 1}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <ArrowRight size={17} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSET CLASSES */}
      <section className="pf-assets pf-section">
        <div className="pf-container">
          <SectionHeading
            eyebrow="INSTRUMENT COVERAGE"
            title="One feed strategy. Multiple market categories."
            text="Build an instrument catalogue around the products, providers and commercial permissions available to your brokerage."
            centered
          />
          <div className="pf-asset-grid">
            {[
              { icon: Globe2, title: "Forex", text: "Major, minor and selected exotic currency pairs." },
              { icon: BarChart3, title: "Index CFDs", text: "Global index instruments, subject to source coverage." },
              { icon: CircleDot, title: "Metals", text: "Gold, silver and other supported metal instruments." },
              { icon: Activity, title: "Energies", text: "Oil, gas and related energy-market instruments." },
              { icon: LineChart, title: "Futures & CFDs", text: "Selected futures-linked products and contract variants." },
              { icon: Database, title: "Other asset classes", text: "Crypto or equity instruments where provider rights and platform support allow." },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  className="pf-asset-card"
                  key={item.title}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -7 }}
                >
                  <div className="pf-card-icon"><Icon size={22} /></div>
                  <span className="pf-card-number">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="pf-card-line" />
                </motion.article>
              );
            })}
          </div>
          <p className="pf-small-note">Instrument availability is not guaranteed by category alone. Final coverage depends on data providers, licensing, platform support and project scope.</p>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="pf-architecture-section pf-section" id="pf-architecture">
        <div className="pf-container">
          <SectionHeading
            eyebrow="CONNECTED DATA FLOW"
            title="Six layers behind a structured market feed."
            text="Select each layer to explore the main technical responsibility in a market-data integration."
            centered
          />
          <FeedArchitecture />
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="pf-capabilities pf-section">
        <div className="pf-container">
          <SectionHeading
            eyebrow="CORE CAPABILITIES"
            title="Control the details that shape your feed."
            text="A practical feed implementation considers the data path, instrument rules and support model together."
          />
          <div className="pf-capability-grid">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  className="pf-capability-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.48, delay: (index % 3) * 0.08 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="pf-capability-top"><div className="pf-card-icon"><Icon size={21} /></div><span>0{index + 1}</span></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="pf-capability-arrow"><ArrowRight size={17} /></div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DELIVERY OPTIONS */}
      <section className="pf-delivery pf-section">
        <div className="pf-container pf-delivery-layout">
          <div className="pf-delivery-copy">
            <SectionHeading
              eyebrow="DELIVERY OPTIONS"
              title="Route the data where your workflow needs it."
              text="The right delivery path depends on how the broker uses market data and which destinations are included in scope."
            />
            <div className="pf-delivery-list">
              <div><span><Server size={19} /></span><div><h3>Trading-server delivery</h3><p>Plan price delivery into supported MT4/MT5 environments and other agreed trading servers.</p></div></div>
              <div><span><Database size={19} /></span><div><h3>API and application access</h3><p>Scope live or historical data access for portals, websites and internal applications where supported.</p></div></div>
              <div><span><Layers3 size={19} /></span><div><h3>Combined architecture</h3><p>Coordinate multiple delivery destinations when the source rights, interfaces and operating model permit it.</p></div></div>
            </div>
          </div>
          <motion.div
            className="pf-delivery-visual"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <div className="pf-flow-node pf-flow-source"><RadioTower size={20} /><strong>DATA SOURCE</strong><small>Agreed provider</small></div>
            <div className="pf-flow-line"><span /></div>
            <div className="pf-flow-hub"><Activity size={27} /><strong>FEED LAYER</strong><small>Map · Validate · Deliver</small></div>
            <div className="pf-flow-branches">
              <div><Server size={19} /><strong>MT4 / MT5</strong><small>Trading server</small></div>
              <div><Database size={19} /><strong>API</strong><small>Apps &amp; portals*</small></div>
            </div>
            <p>*Destinations depend on the agreed project scope and supported interfaces.</p>
          </motion.div>
        </div>
      </section>

      {/* IMPLEMENTATION */}
      <section className="pf-process pf-section">
        <div className="pf-container">
          <SectionHeading
            eyebrow="IMPLEMENTATION ROADMAP"
            title="From feed requirements to production operations."
            text="A clear sequence reduces avoidable uncertainty around sources, instruments, testing and ownership."
            centered
          />
          <div className="pf-process-grid">
            {workflow.map(([number, title, text], index) => (
              <motion.article
                className="pf-process-card"
                key={number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <div className="pf-process-number">{number}</div>
                <div className="pf-process-connector" />
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATIONS */}
      <section className="pf-operations pf-section">
        <div className="pf-container pf-operations-layout">
          <div>
            <span className="pf-eyebrow pf-eyebrow-light">PRODUCTION READINESS</span>
            <h2>Make data health part of the operating model.</h2>
            <p className="pf-operations-lead">Market data should be treated as a dependency with clear ownership, monitoring expectations and a documented response when something changes.</p>
            <div className="pf-operations-points">
              <div><CheckCircle2 size={18} /><span>Define feed health and alert expectations.</span></div>
              <div><CheckCircle2 size={18} /><span>Document escalation contacts and responsibilities.</span></div>
              <div><CheckCircle2 size={18} /><span>Agree recovery and change-control procedures.</span></div>
            </div>
          </div>
          <div className="pf-ops-panel">
            <div className="pf-ops-panel-head"><span><Activity size={17} /> OPERATIONS OVERVIEW</span><span className="pf-ops-dot">●</span></div>
            <div className="pf-ops-metric"><span>Feed health checks</span><strong>Configured per scope</strong><div className="pf-ops-meter"><i style={{ width: "84%" }} /></div></div>
            <div className="pf-ops-metric"><span>Instrument mapping</span><strong>Validation workflow</strong><div className="pf-ops-meter"><i style={{ width: "72%" }} /></div></div>
            <div className="pf-ops-metric"><span>Escalation process</span><strong>Defined at handover</strong><div className="pf-ops-meter"><i style={{ width: "90%" }} /></div></div>
            <div className="pf-ops-graph" aria-hidden="true">{Array.from({ length: 26 }, (_, i) => <span key={i} style={{ "--bar-height": `${18 + ((i * 17) % 70)}%`, "--bar-delay": `${i * 0.035}s` }} />)}</div>
            <p>Illustrative dashboard concept — not a live monitoring connection.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pf-faq pf-section">
        <div className="pf-container pf-faq-layout">
          <div className="pf-faq-intro">
            <span className="pf-eyebrow">FAQ</span>
            <h2>Questions about market data feeds?</h2>
            <p>Start with the platform, source and instrument requirements. The exact implementation should be confirmed during technical discovery.</p>
            <a className="pf-text-link" href="/contact">Talk to our team <ArrowRight size={16} /></a>
          </div>
          <div className="pf-faq-list">
            {faqs.map((faq, index) => (
              <div className={`pf-faq-item${openFaq === index ? " is-open" : ""}`} key={faq.q}>
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                  <span><small>0{index + 1}</small>{faq.q}</span>
                  <ChevronDown size={19} />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      className="pf-faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.26 }}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="pf-related pf-section">
        <div className="pf-container">
          <SectionHeading
            eyebrow="RELATED INFRASTRUCTURE"
            title="Connect market data to the wider brokerage stack."
            text="Explore related services that may be relevant to your platform and operations."
            centered
          />
          <div className="pf-related-grid">
            {related.map((item, index) => (
              <motion.a
                className="pf-related-card"
                href={item.href}
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -5 }}
              >
                <span className="pf-related-index">0{index + 1} / INFRASTRUCTURE</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="pf-related-link">Explore service <ArrowRight size={16} /></span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pf-cta-section">
        <div className="pf-cta-glow" />
        <div className="pf-container pf-cta-inner">
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="pf-eyebrow pf-eyebrow-light">LET'S MAP YOUR DATA FLOW</span>
            <h2>Build a market-data setup that fits your brokerage.</h2>
            <p>Share your target platform, instrument catalogue, data sources and delivery requirements. We can use that scope to discuss the next technical steps.</p>
          </motion.div>
          <motion.div className="pf-cta-actions" initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
            <a className="pf-btn pf-btn-light" href="/contact">Discuss Your Project <ArrowRight size={17} /></a>
            <a className="pf-btn pf-btn-glass" href="/contact">Contact Us</a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
