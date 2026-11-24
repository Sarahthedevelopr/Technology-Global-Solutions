import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Database,
  GitBranch,
  Layers3,
  LifeBuoy,
  Network,
  ServerCog,
  ShieldCheck,
  Workflow,
  Gauge,
  Settings2,
  ClipboardCheck,
  CircleCheck,
  Boxes,
  Activity,
  FileText,
  MessageCircle,
  Send,
  Cable,
  LockKeyhole,
  RefreshCw,
  Code2,
} from "lucide-react";

import "./MT5WhiteLabelPricing.css";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

/* =========================================================
   PRICING SCOPE
========================================================= */

const pricingScope = [
  {
    number: "01",
    title: "Platform Scope",
    description:
      "Branding, groups, permissions and operational requirements influence implementation complexity.",

    detail:
      "Define the platform arrangement, client groups, access permissions and required broker-side workflows.",

    tag: "Platform requirements",

    icon: Layers3,
  },

  {
    number: "02",
    title: "Hosting",
    description:
      "Runtime infrastructure, network topology, monitoring and backup add to the production scope.",

    detail:
      "Clarify infrastructure requirements, network dependencies, monitoring coverage, backup and recovery expectations.",

    tag: "Infrastructure",

    icon: ServerCog,
  },

  {
    number: "03",
    title: "Market Data",
    description:
      "Source selection, symbol coverage and normalization requirements affect the data layer.",

    detail:
      "Identify price sources, instrument coverage, symbol mapping and the distribution requirements for the environment.",

    tag: "Data connectivity",

    icon: Database,
  },

  {
    number: "04",
    title: "Bridge & Liquidity",
    description:
      "Execution connectivity and routing requirements can add separate integration work.",

    detail:
      "Map execution endpoints, routing requirements, bridge configuration and the responsibilities of each connected provider.",

    tag: "Execution layer",

    icon: GitBranch,
  },

  {
    number: "05",
    title: "CRM & APIs",
    description:
      "Client-system integrations vary according to the existing technology estate.",

    detail:
      "Document existing CRM, APIs, onboarding workflows, payments and the systems that must exchange information.",

    tag: "System integration",

    icon: Workflow,
  },

  {
    number: "06",
    title: "Support Model",
    description:
      "Operational coverage, escalation and change-management expectations affect ongoing scope.",

    detail:
      "Establish support responsibilities, escalation paths, incident handling and production change procedures.",

    tag: "Ongoing operations",

    icon: LifeBuoy,
  },
];

/* =========================================================
   TECHNOLOGY STACK
========================================================= */

const technologyStack = [
  {
    number: "01",
    title: "Trading Platforms",
    subtitle: "MT4 · MT5 · MetaTrader",

    description:
      "Define the target trading platform, client groups, instruments and broker-side workflows.",

    icon: Layers3,
  },

  {
    number: "02",
    title: "Market Data",
    subtitle: "Price feeds · Symbol mapping",

    description:
      "Identify data sources, symbol coverage, normalization and price distribution dependencies.",

    icon: Database,
  },

  {
    number: "03",
    title: "Execution",
    subtitle: "Bridge · Routing · Liquidity",

    description:
      "Map the required execution connectivity, routing arrangements and external endpoints.",

    icon: GitBranch,
  },

  {
    number: "04",
    title: "Client Systems",
    subtitle: "CRM · Back office · APIs",

    description:
      "Document client onboarding, account management and existing system integrations.",

    icon: Workflow,
  },

  {
    number: "05",
    title: "Infrastructure",
    subtitle: "Hosting · Monitoring · Recovery",

    description:
      "Define hosting, network connectivity, monitoring, backup and recovery requirements.",

    icon: ServerCog,
  },

  {
    number: "06",
    title: "Operations",
    subtitle: "Access · Change control · Support",

    description:
      "Establish ownership of administrative access, incident response and ongoing operations.",

    icon: ShieldCheck,
  },
];

/* =========================================================
   RELATED INFRASTRUCTURE
========================================================= */

const relatedResources = [
  {
    number: "01",
    category: "TRADING PLATFORM",

    title: "MT5 White Label",

    description:
      "Explore core MT5 White Label infrastructure and deployment scope.",

    href: "/mt5-white-label",

    icon: Layers3,
  },

  {
    number: "02",
    category: "SERVER INFRASTRUCTURE",

    title: "MT5 Server",

    description:
      "Review runtime architecture, monitoring and operational continuity.",

    href: "/mt5-server",

    icon: ServerCog,
  },

  {
    number: "03",
    category: "MARKET DATA",

    title: "Market Data Feed",

    description:
      "Understand source connectivity, normalization and distribution.",

    href: "/price-feed",

    icon: Database,
  },

  {
    number: "04",
    category: "EXECUTION CONNECTIVITY",

    title: "Liquidity Bridge",

    description:
      "Explore execution connectivity, routing and symbol mapping.",

    href: "/liquidity-bridge",

    icon: GitBranch,
  },

  {
    number: "05",
    category: "CLIENT OPERATIONS",

    title: "Broker CRM",

    description:
      "Review client operations, accounts, APIs and workflows.",

    href: "/broker-crm",

    icon: Workflow,
  },

  {
    number: "06",
    category: "CONNECTED ARCHITECTURE",

    title: "Brokerage Technology",

    description:
      "Explore architecture across the connected brokerage stack.",

    href: "/brokerage-technology",

    icon: Network,
  },
];

/* =========================================================
   DELIVERY FRAMEWORK
========================================================= */

const deliverySteps = [
  {
    number: "01",
    label: "DISCOVERY",

    title: "Requirements Mapping",

    description:
      "Document platform scope, instruments, integrations, connectivity, access and operational responsibilities.",

    icon: ClipboardCheck,
  },

  {
    number: "02",
    label: "ARCHITECTURE",

    title: "Dependency Design",

    description:
      "Map how platform, data, execution, CRM and infrastructure components connect before production changes begin.",

    icon: Network,
  },

  {
    number: "03",
    label: "DEPLOYMENT",

    title: "Controlled Implementation",

    description:
      "Configure the agreed environment with defined access, change control and rollback considerations.",

    icon: Settings2,
  },

  {
    number: "04",
    label: "VALIDATION",

    title: "Production Testing",

    description:
      "Validate business-critical flows, connectivity, permissions, monitoring and recovery procedures.",

    icon: Gauge,
  },

  {
    number: "05",
    label: "HANDOVER",

    title: "Operational Handover",

    description:
      "Clarify ownership, escalation paths and recurring operational procedures for the live environment.",

    icon: ClipboardCheck,
  },

  {
    number: "06",
    label: "SUPPORT",

    title: "Ongoing Technical Support",

    description:
      "Support agreed infrastructure and integration scope with controlled production changes and troubleshooting.",

    icon: LifeBuoy,
  },
];

/* =========================================================
   ENGINEERING PRINCIPLES
========================================================= */

const engineeringPrinciples = [
  {
    title: "Documented Dependencies",

    description:
      "Critical interfaces are mapped so troubleshooting does not depend on guesswork.",

    icon: Workflow,
  },

  {
    title: "Controlled Access",

    description:
      "Administrative privileges and production responsibilities should be explicit and limited to operational need.",

    icon: LockKeyhole,
  },

  {
    title: "Monitoring & Recovery",

    description:
      "Health checks, escalation and recovery procedures are treated as part of the architecture, not an afterthought.",

    icon: Activity,
  },
];

/* =========================================================
   INFORMATION CHECKLIST
========================================================= */

const brokerRequirements = [
  {
    number: "01",

    title: "Platform and Product Scope",

    description:
      "Target platform, instruments, client groups and required broker-side workflows.",

    icon: Layers3,
  },

  {
    number: "02",

    title: "Existing Technology Estate",

    description:
      "Current CRM, payments, market data, execution, APIs and infrastructure dependencies.",

    icon: Boxes,
  },

  {
    number: "03",

    title: "Connectivity Requirements",

    description:
      "Supported data, execution and third-party endpoints that must be part of the production design.",

    icon: Cable,
  },

  {
    number: "04",

    title: "Operational Responsibilities",

    description:
      "Who owns access, monitoring, incidents, changes and day-to-day platform operations.",

    icon: ShieldCheck,
  },
];

/* =========================================================
   FAQ DATA
========================================================= */

const pricingFaqs = [
  {
    question:
      "Is there one fixed MT5 White Label price?",

    answer:
      "Not necessarily. Total cost depends on the commercial and technical scope selected for the environment. Platform requirements, infrastructure, connectivity, integrations and support responsibilities can differ between projects.",
  },

  {
    question:
      "Does hosting affect the total cost?",

    answer:
      "Yes. Production infrastructure, monitoring, backup and network requirements are separate cost drivers. Hosting responsibilities and operational coverage should be clearly documented in the quotation.",
  },

  {
    question:
      "Are market data and bridge connectivity separate?",

    answer:
      "They are separate infrastructure layers and may have their own commercial and implementation requirements. The quote should identify the required data sources, execution connectivity and any third-party dependencies.",
  },

  {
    question:
      "What information is needed for an accurate quote?",

    answer:
      "Platform scope, target instruments, data sources, connectivity, integrations, hosting and support expectations should be defined. Existing CRM, payment, API and infrastructure dependencies should also be documented.",
  },

  {
    question:
      "Why can MT5 White Label pricing vary between projects?",

    answer:
      "Different projects require different infrastructure, integrations, operational support and third-party connectivity. Pricing depends on the actual deployment scope rather than a single universal configuration.",
  },

  {
    question:
      "Can pricing be estimated before the final architecture is known?",

    answer:
      "A preliminary estimate is possible when the main requirements are known, but a more accurate quote needs the platform, connectivity and operational dependencies to be defined.",
  },

  {
    question:
      "What should a broker compare between provider quotes?",

    answer:
      "Compare the included platform scope, infrastructure, integrations, support, operational responsibilities and third-party dependencies. Confirm which services are included and which require separate agreements.",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function MT5WhiteLabelPricing() {
  const [activeFaq, setActiveFaq] = useState(0);

  const [checkedItems, setCheckedItems] = useState([]);

  const toggleChecklist = (number) => {
    setCheckedItems((current) =>
      current.includes(number)
        ? current.filter((item) => item !== number)
        : [...current, number]
    );
  };

  const checklistProgress =
    (checkedItems.length / brokerRequirements.length) * 100;

  return (
    <main className="pricing-page">

      {/* ===================================================
          HERO
      =================================================== */}

      <section className="pricing-hero">

        <div className="pricing-hero-glow pricing-glow-one" />

        <div className="pricing-hero-glow pricing-glow-two" />

        <div className="pricing-container pricing-hero-grid">

          <motion.div
            className="pricing-hero-content"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >

            <motion.div
              variants={fadeUp}
              className="pricing-eyebrow"
            >
              <span className="pricing-eyebrow-dot" />

              MT5 WHITE LABEL PRICING
            </motion.div>

            <motion.h1 variants={fadeUp}>
              MT5 White Label Pricing:{" "}

              <span>
                Information Needed for a Quote
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="pricing-hero-description"
            >
              MT5 White Label pricing is shaped by more
              than the platform itself. Infrastructure,
              data, connectivity, integrations and support
              requirements can materially affect the overall
              deployment scope.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="pricing-hero-buttons"
            >

              <a
                href="https://wa.me/358823711153?text=Hello%20TGS%2C%20I%20would%20like%20to%20discuss%20MT5%20White%20Label%20pricing."
                target="_blank"
                rel="noreferrer"
                className="pricing-btn pricing-btn-primary"
              >
                Discuss Requirements

                <ArrowUpRight size={17} />
              </a>

              <a
                href="#pricing-scope"
                className="pricing-btn pricing-btn-secondary"
              >
                Explore Infrastructure

                <ArrowDown size={17} />
              </a>

            </motion.div>

            <motion.div
              variants={fadeUp}
              className="pricing-hero-trust"
            >
              <ShieldCheck size={17} />

              <span>
                Define the scope before requesting a quote.
              </span>
            </motion.div>

          </motion.div>

          {/* HERO VISUAL */}

          <motion.div
            className="pricing-hero-visual"
            initial={{
              opacity: 0,
              x: 35,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.75,
              delay: 0.15,
            }}
          >

            <div className="pricing-visual-header">

              <div>
                <span className="pricing-mini-label">
                  DEPLOYMENT SCOPE
                </span>

                <h3>
                  Brokerage Architecture
                </h3>
              </div>

              <span className="pricing-status-pill">
                <i />

                Connected layers
              </span>

            </div>

            <div className="pricing-architecture">

              {[
                {
                  title: "Trading Platform",
                  sub: "MT4 / MT5 environment",
                  icon: Layers3,
                },

                {
                  title: "Market Data",
                  sub: "Sources and symbol mapping",
                  icon: Database,
                },

                {
                  title: "Execution Connectivity",
                  sub: "Bridge and routing",
                  icon: GitBranch,
                },

                {
                  title: "Client Systems",
                  sub: "CRM and API integration",
                  icon: Workflow,
                },

                {
                  title: "Infrastructure",
                  sub: "Hosting and monitoring",
                  icon: ServerCog,
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    className={`pricing-architecture-row ${
                      index === 0 ? "pricing-row-active" : ""
                    }`}
                    animate={{
                      x: [0, index % 2 ? 2 : -2, 0],
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >

                    <span className="pricing-layer-number">
                      0{index + 1}
                    </span>

                    <span className="pricing-layer-icon">
                      <Icon size={19} />
                    </span>

                    <span className="pricing-layer-text">
                      <b>{item.title}</b>

                      <small>{item.sub}</small>
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="pricing-layer-arrow"
                    />

                  </motion.div>
                );
              })}

            </div>

            <div className="pricing-visual-footer">

              <span className="pricing-pulse-dot" />

              <span>
                Requirements → Architecture → Deployment
              </span>

            </div>

            <div className="pricing-orbit pricing-orbit-one" />

            <div className="pricing-orbit pricing-orbit-two" />

          </motion.div>

        </div>

        <a
          href="#pricing-scope"
          className="pricing-scroll-indicator"
        >
          <span />

          Scroll to explore
        </a>

      </section>

      {/* ===================================================
          COMMERCIAL SCOPE
      =================================================== */}

      <section
        className="pricing-scope-section"
        id="pricing-scope"
      >

        <div className="pricing-container">

          <motion.div
            className="pricing-section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >

            <motion.span
              variants={fadeUp}
              className="pricing-kicker"
            >
              COMMERCIAL SCOPE
            </motion.span>

            <motion.h2 variants={fadeUp}>
              Evaluate the full{" "}
              <span>brokerage environment.</span>
            </motion.h2>

            <motion.p variants={fadeUp}>
              Each layer can affect implementation,
              operations and long-term scalability.
              Define the requirements before comparing
              provider quotations.
            </motion.p>

          </motion.div>

          <motion.div
            className="pricing-scope-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={stagger}
          >

            {pricingScope.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  className="pricing-scope-card"
                  variants={fadeUp}
                  whileHover={{
                    y: -7,
                    transition: { duration: 0.2 },
                  }}
                >

                  <div className="pricing-scope-card-top">

                    <span className="pricing-card-number">
                      {item.number}
                    </span>

                    <span className="pricing-card-icon">
                      <Icon size={22} />
                    </span>

                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="pricing-card-detail">
                    {item.detail}
                  </div>

                  <div className="pricing-card-bottom">

                    <span>{item.tag}</span>

                    <ArrowUpRight size={17} />

                  </div>

                </motion.article>
              );
            })}

          </motion.div>

        </div>

      </section>

      {/* ===================================================
          PAGE FOCUS
      =================================================== */}

      <section className="pricing-focus-section">

        <div className="pricing-container pricing-focus-grid">

          <motion.div
            className="pricing-focus-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >

            <motion.span
              variants={fadeUp}
              className="pricing-kicker"
            >
              PAGE FOCUS
            </motion.span>

            <motion.h2 variants={fadeUp}>
              MT5 White Label{" "}
              <span>Pricing</span>
            </motion.h2>

            <motion.p variants={fadeUp}>
              This page focuses on commercial pricing
              and quote preparation. For adjacent topics,
              use the related infrastructure links rather
              than treating this page as a duplicate of
              the core product page.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="pricing-focus-points"
            >

              {[
                "Define the required platform scope",

                "Identify external connectivity",

                "Document integration dependencies",

                "Clarify ongoing support responsibilities",
              ].map((point) => (
                <div
                  key={point}
                  className="pricing-focus-point"
                >

                  <span>
                    <Check size={14} />
                  </span>

                  {point}

                </div>
              ))}

            </motion.div>

          </motion.div>

          <motion.div
            className="pricing-focus-visual"
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >

            <div className="pricing-focus-panel-header">

              <div>
                <span className="pricing-mini-label">
                  QUOTE PREPARATION
                </span>

                <h3>Scope Overview</h3>
              </div>

              <ClipboardCheck size={23} />

            </div>

            <div className="pricing-scope-meter">

              <div className="pricing-meter-label">
                <span>Technical requirements</span>

                <b>01</b>
              </div>

              <div className="pricing-meter-track">
                <span style={{ width: "88%" }} />
              </div>

            </div>

            <div className="pricing-scope-meter">

              <div className="pricing-meter-label">
                <span>Connectivity dependencies</span>

                <b>02</b>
              </div>

              <div className="pricing-meter-track">
                <span style={{ width: "72%" }} />
              </div>

            </div>

            <div className="pricing-scope-meter">

              <div className="pricing-meter-label">
                <span>Integration requirements</span>

                <b>03</b>
              </div>

              <div className="pricing-meter-track">
                <span style={{ width: "80%" }} />
              </div>

            </div>

            <div className="pricing-scope-meter">

              <div className="pricing-meter-label">
                <span>Operational responsibilities</span>

                <b>04</b>
              </div>

              <div className="pricing-meter-track">
                <span style={{ width: "65%" }} />
              </div>

            </div>

            <div className="pricing-focus-note">

              <ShieldCheck size={19} />

              <span>
                Illustrative scope indicators, not a price
                estimate or completion score.
              </span>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ===================================================
          TECHNOLOGY STACK
      =================================================== */}

      <section className="pricing-stack-section">

        <div className="pricing-container">

          <motion.div
            className="pricing-section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >

            <motion.span
              variants={fadeUp}
              className="pricing-kicker"
            >
              TECHNOLOGY ENTITIES
            </motion.span>

            <motion.h2 variants={fadeUp}>
              How pricing fits into the{" "}
              <span>brokerage technology stack</span>
            </motion.h2>

            <motion.p variants={fadeUp}>
              Understand the connected layers that may
              need to be included in a deployment scope.
            </motion.p>

          </motion.div>

          <motion.div
            className="pricing-stack-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >

            {technologyStack.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  className="pricing-stack-card"
                  variants={fadeUp}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                >

                  <div className="pricing-stack-card-head">

                    <span className="pricing-stack-icon">
                      <Icon size={21} />
                    </span>

                    <span className="pricing-card-number">
                      {item.number}
                    </span>

                  </div>

                  <h3>{item.title}</h3>

                  <span className="pricing-stack-subtitle">
                    {item.subtitle}
                  </span>

                  <p>{item.description}</p>

                  <div className="pricing-stack-line" />

                </motion.article>
              );
            })}

          </motion.div>

        </div>

      </section>

      {/* ===================================================
          RELATED INFRASTRUCTURE
      =================================================== */}

      <section className="pricing-related-section">

        <div className="pricing-container">

          <div className="pricing-related-heading">

            <div>

              <span className="pricing-kicker">
                RELATED INFRASTRUCTURE
              </span>

              <h2>
                Continue through the{" "}
                <span>brokerage technology stack.</span>
              </h2>

            </div>

            <a
              href="/resources"
              className="pricing-text-link"
            >
              Explore all resources

              <ArrowRight size={17} />
            </a>

          </div>

          <motion.div
            className="pricing-related-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >

            {relatedResources.map((item) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.number}
                  href={item.href}
                  className="pricing-related-card"
                  variants={fadeUp}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.2 },
                  }}
                >

                  <div className="pricing-related-top">

                    <span>{item.number}</span>

                    <Icon size={22} />

                  </div>

                  <span className="pricing-related-category">
                    {item.category}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="pricing-related-link">
                    Explore service

                    <ArrowUpRight size={16} />
                  </div>

                </motion.a>
              );
            })}

          </motion.div>

        </div>

      </section>

      {/* ===================================================
          PLANNING
      =================================================== */}

      <section className="pricing-planning-section">

        <div className="pricing-container pricing-planning-grid">

          <motion.div
            className="pricing-planning-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >

            <motion.span
              variants={fadeUp}
              className="pricing-kicker"
            >
              PLANNING
            </motion.span>

            <motion.h2 variants={fadeUp}>
              Define scope before{" "}
              <span>deployment.</span>
            </motion.h2>

            <motion.p variants={fadeUp}>
              Commercial and technical decisions should
              be mapped together so infrastructure,
              integrations and operating responsibilities
              are clear before production launch.
            </motion.p>

            <motion.a
              variants={fadeUp}
              href="#broker-requirements"
              className="pricing-btn pricing-btn-primary"
            >
              Prepare Your Requirements

              <ArrowRight size={17} />
            </motion.a>

          </motion.div>

          <motion.div
            className="pricing-planning-visual"
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >

            <div className="pricing-planning-orbit" />

            <div className="pricing-planning-center">

              <Settings2 size={30} />

              <span>
                DEFINED
                <br />
                SCOPE
              </span>

            </div>

            {[
              {
                text: "Platform",
                className: "planning-chip-one",
              },

              {
                text: "Connectivity",
                className: "planning-chip-two",
              },

              {
                text: "Integrations",
                className: "planning-chip-three",
              },

              {
                text: "Operations",
                className: "planning-chip-four",
              },
            ].map((item) => (
              <motion.div
                key={item.text}
                className={`pricing-planning-chip ${item.className}`}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >

                <span />

                {item.text}

              </motion.div>
            ))}

          </motion.div>

        </div>

      </section>

      {/* ===================================================
          FAQ 1
      =================================================== */}

      <section className="pricing-faq-section">

        <div className="pricing-container pricing-faq-grid">

          <div className="pricing-faq-intro">

            <span className="pricing-kicker">
              COMMON QUESTIONS
            </span>

            <h2>
              What should you know{" "}
              <span>before requesting a quote?</span>
            </h2>

            <p>
              Understand the main commercial and technical
              factors that influence an MT5 White Label
              pricing proposal.
            </p>

            <div className="pricing-faq-symbol">
              <MessageCircle size={27} />
            </div>

          </div>

          <div className="pricing-faq-list">

            {pricingFaqs.slice(0, 4).map((faq, index) => (
              <div
                key={faq.question}
                className={`pricing-faq-item ${
                  activeFaq === index ? "is-open" : ""
                }`}
              >

                <button
                  type="button"
                  onClick={() =>
                    setActiveFaq(
                      activeFaq === index ? -1 : index
                    )
                  }
                  aria-expanded={activeFaq === index}
                >

                  <span>{faq.question}</span>

                  <ChevronDown size={19} />

                </button>

                <div className="pricing-faq-answer">

                  <p>{faq.answer}</p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ===================================================
          DELIVERY FRAMEWORK
      =================================================== */}

      <section className="pricing-delivery-section">

        <div className="pricing-container">

          <motion.div
            className="pricing-section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >

            <motion.span
              variants={fadeUp}
              className="pricing-kicker"
            >
              DELIVERY FRAMEWORK
            </motion.span>

            <motion.h2 variants={fadeUp}>
              From requirements to{" "}
              <span>controlled production deployment.</span>
            </motion.h2>

            <motion.p variants={fadeUp}>
              Infrastructure work is structured around
              explicit scope, dependencies, validation
              and operational ownership.
            </motion.p>

          </motion.div>

          <div className="pricing-delivery-grid">

            {deliverySteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  className="pricing-delivery-card"
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                >

                  <div className="pricing-delivery-top">

                    <span>{step.number}</span>

                    <Icon size={23} />

                  </div>

                  <span className="pricing-delivery-label">
                    {step.label}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                  <div className="pricing-delivery-bottom">

                    {index < deliverySteps.length - 1 ? (
                      <ArrowRight size={17} />
                    ) : (
                      <Check size={17} />
                    )}

                  </div>

                </motion.article>
              );
            })}

          </div>

        </div>

      </section>

      {/* ===================================================
          ENGINEERING PRINCIPLES
      =================================================== */}

      <section className="pricing-principles-section">

        <div className="pricing-container">

          <motion.div
            className="pricing-section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >

            <motion.span
              variants={fadeUp}
              className="pricing-kicker"
            >
              ENGINEERING PRINCIPLES
            </motion.span>

            <motion.h2 variants={fadeUp}>
              Designed for{" "}
              <span>operational clarity.</span>
            </motion.h2>

          </motion.div>

          <motion.div
            className="pricing-principles-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >

            {engineeringPrinciples.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  className="pricing-principle-card"
                  variants={fadeUp}
                  whileHover={{
                    y: -5,
                  }}
                >

                  <span className="pricing-principle-icon">
                    <Icon size={23} />
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </motion.article>
              );
            })}

          </motion.div>

        </div>

      </section>

      {/* ===================================================
          BROKER REQUIREMENTS CHECKLIST
      =================================================== */}

      <section
        className="pricing-requirements-section"
        id="broker-requirements"
      >

        <div className="pricing-container pricing-requirements-grid">

          <motion.div
            className="pricing-requirements-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >

            <motion.span
              variants={fadeUp}
              className="pricing-kicker"
            >
              BEFORE DEPLOYMENT
            </motion.span>

            <motion.h2 variants={fadeUp}>
              What we need{" "}
              <span>from the broker.</span>
            </motion.h2>

            <motion.p variants={fadeUp}>
              Prepare the essential information required
              to discuss the platform, connected systems
              and operational requirements.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="pricing-checklist-progress"
            >

              <div className="pricing-progress-label">

                <span>Checklist progress</span>

                <b>
                  {checkedItems.length} /{" "}
                  {brokerRequirements.length}
                </b>

              </div>

              <div className="pricing-progress-track">

                <span
                  style={{
                    width: `${checklistProgress}%`,
                  }}
                />

              </div>

            </motion.div>

            <motion.a
              variants={fadeUp}
              href="/contact"
              className="pricing-btn pricing-btn-primary"
            >
              Discuss Requirements

              <ArrowUpRight size={17} />
            </motion.a>

          </motion.div>

          <div className="pricing-requirements-list">

            {brokerRequirements.map((item) => {
              const Icon = item.icon;

              const isChecked = checkedItems.includes(
                item.number
              );

              return (
                <motion.button
                  key={item.number}
                  type="button"
                  className={`pricing-requirement-item ${
                    isChecked ? "is-checked" : ""
                  }`}
                  onClick={() =>
                    toggleChecklist(item.number)
                  }
                  whileHover={{
                    x: 4,
                  }}
                >

                  <span className="pricing-requirement-icon">
                    <Icon size={21} />
                  </span>

                  <span className="pricing-requirement-copy">

                    <span className="pricing-requirement-number">
                      {item.number}
                    </span>

                    <b>{item.title}</b>

                    <small>{item.description}</small>

                  </span>

                  <span className="pricing-requirement-check">

                    {isChecked ? (
                      <Check size={16} />
                    ) : (
                      <span />
                    )}

                  </span>

                </motion.button>
              );
            })}

            <p className="pricing-checklist-note">
              Select each item as you prepare your
              requirements. This checklist is local to this
              page and is not submitted to TGS.
            </p>

          </div>

        </div>

      </section>

      {/* ===================================================
          FAQ 2
      =================================================== */}

      <section className="pricing-faq-secondary">

        <div className="pricing-container">

          <motion.div
            className="pricing-section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >

            <motion.span
              variants={fadeUp}
              className="pricing-kicker"
            >
              FREQUENTLY ASKED QUESTIONS
            </motion.span>

            <motion.h2 variants={fadeUp}>
              More about{" "}
              <span>MT5 White Label pricing.</span>
            </motion.h2>

          </motion.div>

          <div className="pricing-faq-secondary-grid">

            {pricingFaqs.slice(4).map((faq, index) => (
              <motion.article
                key={faq.question}
                className="pricing-faq-secondary-card"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
              >

                <span className="pricing-faq-secondary-icon">
                  <MessageCircle size={20} />
                </span>

                <h3>{faq.question}</h3>

                <p>{faq.answer}</p>

              </motion.article>
            ))}

          </div>

        </div>

      </section>

      {/* ===================================================
          FINAL CONSULTATION CTA
      =================================================== */}

      <section className="pricing-final-cta">

        <div className="pricing-final-glow" />

        <div className="pricing-container pricing-final-inner">

          <motion.div
            className="pricing-final-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >

            <motion.span
              variants={fadeUp}
              className="pricing-kicker"
            >
              TECHNICAL CONSULTATION
            </motion.span>

            <motion.h2 variants={fadeUp}>
              Map the right infrastructure for your brokerage.
            </motion.h2>

            <motion.p variants={fadeUp}>
              Discuss platform, market data, connectivity,
              integrations and operational requirements
              with TGS.
            </motion.p>

          </motion.div>

          <motion.div
            className="pricing-final-actions"
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >

            <a
              href="https://wa.me/358823711153?text=Hello%20TGS%2C%20I%20would%20like%20to%20discuss%20my%20current%20infrastructure%20requirements."
              target="_blank"
              rel="noreferrer"
              className="pricing-btn pricing-btn-white"
            >

              WhatsApp TGS

              <MessageCircle size={17} />

            </a>

            <a
              href="https://t.me/whitelabelmetatraderfx"
              target="_blank"
              rel="noreferrer"
              className="pricing-btn pricing-btn-outline"
            >

              Telegram

              <Send size={17} />

            </a>

            <a
              href="/contact"
              className="pricing-final-contact"
            >
              Contact TGS

              <ArrowRight size={16} />

            </a>

          </motion.div>

        </div>

      </section>

    </main>
  );
}