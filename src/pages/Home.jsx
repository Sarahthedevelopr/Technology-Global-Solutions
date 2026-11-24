import { useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers3,
  Database,
  Network,
  Workflow,
  Server,
  Globe2,
  Settings2,
  ShieldCheck,
  Activity,
  Code2,
  GitBranch,
  MoveRight,
  Zap,
  Search,
  Building2,
  Rocket,
  RefreshCw,
  Expand,
  ChevronRight,
  CircleDot,
  Boxes,
  Cpu,
  ChartNoAxesCombined,
} from "lucide-react";

import "./Home.css";

const services = [
  {
    number: "01",
    category: "TRADING PLATFORM",
    title: "MT5 White Label",
    description:
      "Build a branded multi-asset trading environment around your business model, platform requirements and operational workflows.",
    icon: Layers3,
    tags: ["Platform", "Configuration"],
    link: "/mt5-white-label",
  },
  {
    number: "02",
    category: "TRADING PLATFORM",
    title: "MT4 White Label",
    description:
      "Configure an MT4 operating environment around your trading model, hosting requirements and connected systems.",
    icon: Server,
    tags: ["MT4", "Infrastructure"],
    link: "/mt4-white-label",
  },
  {
    number: "03",
    category: "MARKET CONNECTIVITY",
    title: "Market Data Feeds",
    description:
      "Connect pricing sources, map instruments and validate the market-data path into your trading platform.",
    icon: Database,
    tags: ["Pricing", "Connectivity"],
    link: "/market-data",
  },
  {
    number: "04",
    category: "EXECUTION TECHNOLOGY",
    title: "Liquidity Bridge",
    description:
      "Plan routing, supported endpoints and technical dependencies across your execution workflow.",
    icon: Network,
    tags: ["Routing", "Execution"],
    link: "/liquidity-bridge",
  },
  {
    number: "05",
    category: "BROKER OPERATIONS",
    title: "Broker CRM & API",
    description:
      "Connect client onboarding, account provisioning, reporting and back-office workflows.",
    icon: Workflow,
    tags: ["CRM", "API"],
    link: "/broker-crm",
  },
  {
    number: "06",
    category: "TECHNICAL ENGINEERING",
    title: "Brokerage Technology",
    description:
      "Review architecture, deployment, integration testing and technical operations across your brokerage stack.",
    icon: Cpu,
    tags: ["Architecture", "Engineering"],
    link: "/brokerage-technology",
  },
];

const infrastructureLayers = [
  {
    number: "01",
    title: "Trading Platform",
    description:
      "Define your account model, instruments, administration and trading environment.",
    icon: Layers3,
    label: "PLATFORM",
  },
  {
    number: "02",
    title: "Pricing & Data",
    description:
      "Map pricing sources, instruments, data connectivity and validation requirements.",
    icon: Database,
    label: "MARKET DATA",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Plan routing, endpoints, integration dependencies and execution workflows.",
    icon: Network,
    label: "CONNECTIVITY",
  },
  {
    number: "04",
    title: "Client Operations",
    description:
      "Connect CRM, account provisioning, reporting and back-office systems.",
    icon: Workflow,
    label: "OPERATIONS",
  },
];

const deliverySteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Map your brokerage model, target markets, workloads and technical requirements.",
    icon: Search,
    label: "UNDERSTAND",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "Define the platform, connectivity, hosting, branding and operating environment.",
    icon: GitBranch,
    label: "PLAN",
  },
  {
    number: "03",
    title: "Deployment",
    description:
      "Configure, integrate and validate agreed workflows before production launch.",
    icon: Rocket,
    label: "IMPLEMENT",
  },
  {
    number: "04",
    title: "Operations",
    description:
      "Document responsibilities, support operations and plan future technical changes.",
    icon: Settings2,
    label: "SUPPORT",
  },
];

const guides = [
  {
    category: "COMMERCIAL SCOPE",
    number: "01",
    title: "What determines MT5 White Label cost?",
    description:
      "Understand the setup, recurring infrastructure and integration factors to discuss before deployment.",
    icon: ChartNoAxesCombined,
    link: "/resources/mt5-white-label-cost",
  },
  {
    category: "PLATFORM SELECTION",
    number: "02",
    title: "MT4 or MT5 for your brokerage?",
    description:
      "Compare platform requirements, operating models and the capabilities relevant to your business.",
    icon: Boxes,
    link: "/resources/mt4-vs-mt5",
  },
  {
    category: "TECHNICAL ARCHITECTURE",
    number: "03",
    title: "How does the broker stack connect?",
    description:
      "Explore how platforms, market data, execution and client operations work together.",
    icon: Network,
    link: "/resources/broker-technology-stack",
  },
];

const projectRecommendations = {
  Launch: {
    eyebrow: "START WITH THE FOUNDATIONS",
    title: "Define your brokerage technology stack.",
    description:
      "Map the platform, market data, execution and client systems you need before planning deployment.",
    items: [
      "Choose your trading platform",
      "Plan infrastructure and connectivity",
      "Define operational requirements",
    ],
    icon: Rocket,
    button: "Plan Your Launch",
    link: "/forex-brokers",
  },

  Migrate: {
    eyebrow: "PLAN YOUR TRANSITION",
    title: "Make your technology migration clearer.",
    description:
      "Review your current setup, system dependencies and validation requirements before changing platforms or providers.",
    items: [
      "Review the existing architecture",
      "Identify integration dependencies",
      "Plan validation and transition",
    ],
    icon: RefreshCw,
    button: "Discuss Your Migration",
    link: "/contact",
  },

  Expand: {
    eyebrow: "CONNECT THE NEXT LAYER",
    title: "Build around your evolving operation.",
    description:
      "Evaluate new instruments, additional integrations and operational systems as your brokerage requirements grow.",
    items: [
      "Review current system capacity",
      "Identify additional technology layers",
      "Plan new integrations",
    ],
    icon: Expand,
    button: "Explore Expansion",
    link: "/infrastructure",
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function SectionLabel({ children }) {
  return (
    <div className="home-section-label">
      <span className="home-label-dot" />
      {children}
    </div>
  );
}

function Home() {
  const [projectStage, setProjectStage] = useState("Launch");

  const recommendation = projectRecommendations[projectStage];

  const RecommendationIcon = recommendation.icon;

  return (
    <main className="tgs-home">
      {/* ======================================
          HERO SECTION
      ====================================== */}

      <section className="tgs-hero" id="home">
        <div className="tgs-hero-grid" />

        <div className="tgs-hero-orb tgs-hero-orb-one" />
        <div className="tgs-hero-orb tgs-hero-orb-two" />
        <div className="tgs-hero-orb tgs-hero-orb-three" />

        <div className="tgs-hero-rays">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="tgs-container tgs-hero-container">
          <div className="tgs-hero-content">
            <motion.div
              className="tgs-hero-copy"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div
                className="tgs-hero-eyebrow"
                variants={fadeUp}
              >
                <span className="tgs-status-dot" />
                BROKERAGE TECHNOLOGY INFRASTRUCTURE
              </motion.div>

              <motion.h1 variants={fadeUp}>
                Infrastructure for the
                <br className="tgs-desktop-break" />
                next generation
                <br className="tgs-desktop-break" />
                of <span>brokers.</span>
              </motion.h1>

              <motion.p
                className="tgs-hero-description"
                variants={fadeUp}
              >
                Launch and operate branded trading environments with
                white label infrastructure, market data connectivity
                and hands-on technical expertise.
              </motion.p>

              <motion.div
                className="tgs-hero-actions"
                variants={fadeUp}
              >
                <a
                  href="/mt5-white-label"
                  className="tgs-button tgs-button-primary"
                >
                  Explore MT5 White Label
                  <ArrowUpRight size={18} />
                </a>

                <a
                  href="/contact"
                  className="tgs-button tgs-button-secondary"
                >
                  Discuss Your Project
                  <ArrowRight size={18} />
                </a>
              </motion.div>

              <motion.div
                className="tgs-hero-capabilities"
                variants={fadeUp}
              >
                <div>
                  <CheckCircle2 size={15} />
                  MT4 / MT5
                </div>

                <span className="tgs-capability-divider" />

                <div>
                  <CheckCircle2 size={15} />
                  Market Data
                </div>

                <span className="tgs-capability-divider" />

                <div>
                  <CheckCircle2 size={15} />
                  Broker Operations
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Visual */}

            <motion.div
              className="tgs-hero-visual"
              initial={{
                opacity: 0,
                x: 45,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              <div className="tgs-visual-glow" />

              <div className="tgs-visual-orbit tgs-orbit-one" />
              <div className="tgs-visual-orbit tgs-orbit-two" />

              <div className="tgs-visual-core">
                <div className="tgs-core-ring tgs-core-ring-one" />
                <div className="tgs-core-ring tgs-core-ring-two" />

                <div className="tgs-core-center">
                  <Globe2 size={46} strokeWidth={1.2} />
                  <span>TGS</span>
                </div>

                <div className="tgs-core-satellite satellite-one">
                  <Database size={20} />
                </div>

                <div className="tgs-core-satellite satellite-two">
                  <Server size={20} />
                </div>

                <div className="tgs-core-satellite satellite-three">
                  <Network size={20} />
                </div>

                <div className="tgs-core-satellite satellite-four">
                  <Workflow size={20} />
                </div>
              </div>

              <motion.div
                className="tgs-floating-card tgs-floating-card-top"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="tgs-floating-icon">
                  <Activity size={18} />
                </div>

                <div>
                  <span>CONNECTIVITY</span>
                  <strong>Multi-asset</strong>
                </div>

                <span className="tgs-mini-status" />
              </motion.div>

              <motion.div
                className="tgs-floating-card tgs-floating-card-bottom"
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="tgs-floating-icon tgs-floating-icon-pink">
                  <ShieldCheck size={18} />
                </div>

                <div>
                  <span>ARCHITECTURE</span>
                  <strong>Broker-ready</strong>
                </div>

                <span className="tgs-mini-status" />
              </motion.div>

              <div className="tgs-visual-caption">
                <div className="tgs-caption-indicator" />

                <div>
                  <span>GLOBAL BROKERAGE NETWORK</span>
                  <strong>Technology. Connected.</strong>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Bottom Information */}

          <motion.div
            className="tgs-hero-bottom"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.65,
            }}
          >
            <span className="tgs-hero-bottom-label">
              EXPLORE THE TECHNOLOGY
            </span>

            <a href="/mt4-white-label">
              MT4 White Label
              <ArrowUpRight size={14} />
            </a>

            <a href="/mt5-server">
              MT5 Server
              <ArrowUpRight size={14} />
            </a>

            <a href="/mt4-server">
              MT4 Server
              <ArrowUpRight size={14} />
            </a>

            <a href="/solutions/prop-firms">
              Prop Firms
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>

        <div className="tgs-hero-bottom-glow" />
      </section>

      {/* ======================================
          TECHNOLOGY LAYERS
      ====================================== */}

      <section
        className="tgs-section tgs-services-section"
        id="services"
      >
        <div className="tgs-container">
          <motion.div
            className="tgs-section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <SectionLabel>The technology layers</SectionLabel>

            <h2>
              One partner. A connected
              <br className="tgs-desktop-break" />
              <span>infrastructure.</span>
            </h2>

            <p>
              Start with the layer you need. Define how it connects
              to the rest of your brokerage.
            </p>
          </motion.div>

          <motion.div
            className="tgs-services-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service) => {
              const ServiceIcon = service.icon;

              return (
                <motion.article
                  className="tgs-service-card"
                  key={service.number}
                  variants={fadeUp}
                  whileHover={{
                    y: -7,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <div className="tgs-card-topline">
                    <span>{service.number}</span>

                    <span className="tgs-service-icon">
                      <ServiceIcon size={22} strokeWidth={1.7} />
                    </span>
                  </div>

                  <span className="tgs-card-category">
                    {service.category}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <div className="tgs-card-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a
                    href={service.link}
                    className="tgs-card-link"
                  >
                    Explore service
                    <ArrowUpRight size={17} />
                  </a>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ======================================
          FIND YOUR STARTING POINT
      ====================================== */}

      <section
        className="tgs-section tgs-start-section"
        id="starting-point"
      >
        <div className="tgs-container">
          <div className="tgs-start-layout">
            <motion.div
              className="tgs-start-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <SectionLabel>Find your starting point</SectionLabel>

              <h2>
                Your operation.
                <br />
                Your <span>technology path.</span>
              </h2>

              <p>
                Every brokerage has a different starting point.
                Choose your project stage to explore the technology
                requirements that matter next.
              </p>

              <div className="tgs-stage-selector">
                {["Launch", "Migrate", "Expand"].map((stage) => {
                  const StageIcon =
                    stage === "Launch"
                      ? Rocket
                      : stage === "Migrate"
                        ? RefreshCw
                        : Expand;

                  return (
                    <button
                      type="button"
                      key={stage}
                      onClick={() => setProjectStage(stage)}
                      className={`tgs-stage-button ${
                        projectStage === stage ? "active" : ""
                      }`}
                      aria-pressed={projectStage === stage}
                    >
                      <StageIcon size={17} />
                      {stage}

                      {projectStage === stage && (
                        <CheckCircle2
                          className="tgs-stage-check"
                          size={17}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="tgs-start-note">
                <CircleDot size={16} />

                <span>
                  Choose a stage to update your recommended
                  starting point.
                </span>
              </div>
            </motion.div>

            <motion.div
              className="tgs-recommendation-card"
              key={projectStage}
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.35,
              }}
            >
              <div className="tgs-recommendation-top">
                <span className="tgs-recommendation-icon">
                  <RecommendationIcon size={25} />
                </span>

                <span className="tgs-recommendation-stage">
                  {projectStage.toUpperCase()} PATH
                </span>
              </div>

              <span className="tgs-recommendation-eyebrow">
                {recommendation.eyebrow}
              </span>

              <h3>{recommendation.title}</h3>

              <p>{recommendation.description}</p>

              <div className="tgs-recommendation-list">
                {recommendation.items.map((item) => (
                  <div key={item}>
                    <CheckCircle2 size={17} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={recommendation.link}
                className="tgs-button tgs-button-primary tgs-recommendation-button"
              >
                {recommendation.button}
                <ArrowRight size={17} />
              </a>

              <div className="tgs-recommendation-decoration">
                <RecommendationIcon size={155} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================
          INFRASTRUCTURE
      ====================================== */}

      <section
        className="tgs-section tgs-infrastructure-section"
        id="infrastructure"
      >
        <div className="tgs-container">
          <motion.div
            className="tgs-section-heading tgs-heading-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <SectionLabel>Infrastructure</SectionLabel>

            <h2>
              Built around how
              <br />
              <span>brokerages operate.</span>
            </h2>

            <p>
              Platform, data, execution and client systems form one
              operating environment. Explore how each layer connects.
            </p>
          </motion.div>

          <div className="tgs-infra-flow">
            <div className="tgs-infra-connecting-line" />

            {infrastructureLayers.map((layer, index) => {
              const LayerIcon = layer.icon;

              return (
                <motion.article
                  className="tgs-infra-card"
                  key={layer.number}
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
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                >
                  <div className="tgs-infra-card-top">
                    <span>{layer.number}</span>

                    <span className="tgs-infra-icon">
                      <LayerIcon size={24} />
                    </span>
                  </div>

                  <span className="tgs-infra-label">
                    {layer.label}
                  </span>

                  <h3>{layer.title}</h3>

                  <p>{layer.description}</p>

                  <div className="tgs-infra-card-bottom">
                    <span>TECHNOLOGY LAYER</span>
                    <ArrowUpRight size={16} />
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            className="tgs-infra-footer-note"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
          >
            <div className="tgs-infra-note-icon">
              <Network size={19} />
            </div>

            <p>
              <strong>One connected stack.</strong> Define the
              interfaces, responsibilities and dependencies between
              each technology layer.
            </p>

            <a href="/infrastructure">
              Explore the architecture
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ======================================
          DELIVERY MODEL
      ====================================== */}

      <section
        className="tgs-section tgs-delivery-section"
        id="delivery"
      >
        <div className="tgs-container">
          <div className="tgs-delivery-heading">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <SectionLabel>The delivery model</SectionLabel>

              <h2>
                From brief
                <br />
                to <span>production.</span>
              </h2>
            </motion.div>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              A clear implementation path keeps scope,
              configuration and launch responsibilities visible
              from day one.
            </motion.p>
          </div>

          <div className="tgs-delivery-timeline">
            <div className="tgs-timeline-line" />

            {deliverySteps.map((step, index) => {
              const StepIcon = step.icon;

              return (
                <motion.article
                  className="tgs-delivery-step"
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 24,
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
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                >
                  <div className="tgs-step-number">
                    {step.number}
                  </div>

                  <div className="tgs-step-icon">
                    <StepIcon size={23} />
                  </div>

                  <span className="tgs-step-label">
                    {step.label}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================
          ABOUT TGS
      ====================================== */}

      <section className="tgs-section tgs-about-section" id="about">
        <div className="tgs-container">
          <div className="tgs-about-layout">
            <motion.div
              className="tgs-about-visual"
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <div className="tgs-about-glow" />

              <div className="tgs-about-architecture">
                <div className="tgs-about-architecture-top">
                  <div className="tgs-about-brand">
                    <Globe2 size={21} />
                    <span>TGS / CORE</span>
                  </div>

                  <span className="tgs-about-live">
                    <span />
                    SYSTEM MAP
                  </span>
                </div>

                <div className="tgs-about-center-node">
                  <Building2 size={31} />
                  <strong>Brokerage</strong>
                  <span>Technology Stack</span>
                </div>

                <div className="tgs-about-node-grid">
                  <div>
                    <Layers3 size={19} />
                    <span>Platform</span>
                  </div>

                  <div>
                    <Database size={19} />
                    <span>Market Data</span>
                  </div>

                  <div>
                    <Network size={19} />
                    <span>Execution</span>
                  </div>

                  <div>
                    <Workflow size={19} />
                    <span>Operations</span>
                  </div>
                </div>

                <div className="tgs-about-bottom">
                  <span>CONNECTED TECHNOLOGY LAYERS</span>
                  <span>01 — 04</span>
                </div>
              </div>

              <div className="tgs-about-floating-tag">
                <Zap size={16} />
                Implementation-focused
              </div>
            </motion.div>

            <motion.div
              className="tgs-about-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp}>
                <SectionLabel>
                  Technology Global Solutions
                </SectionLabel>
              </motion.div>

              <motion.h2 variants={fadeUp}>
                Your technology.
                <br />
                A clearer <span>operating model.</span>
              </motion.h2>

              <motion.p variants={fadeUp}>
                Technology Global Solutions works with brokerage
                and financial technology teams on platform
                infrastructure, white label environments and
                market data connectivity.
              </motion.p>

              <motion.p variants={fadeUp}>
                Our approach is direct and implementation-focused:
                understand the operating model, configure the
                agreed stack and support it over time.
              </motion.p>

              <motion.div
                className="tgs-about-points"
                variants={fadeUp}
              >
                <div>
                  <span>01</span>

                  <div>
                    <strong>Understand</strong>
                    <p>Map the requirements and operating model.</p>
                  </div>
                </div>

                <div>
                  <span>02</span>

                  <div>
                    <strong>Configure</strong>
                    <p>Define the agreed technology scope.</p>
                  </div>
                </div>

                <div>
                  <span>03</span>

                  <div>
                    <strong>Support</strong>
                    <p>Clarify responsibilities and next steps.</p>
                  </div>
                </div>
              </motion.div>

              <motion.a
                href="/about"
                className="tgs-button tgs-button-primary tgs-about-button"
                variants={fadeUp}
              >
                Meet TGS
                <ArrowRight size={17} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================
          TECHNOLOGY GUIDES
      ====================================== */}

      <section
        className="tgs-section tgs-guides-section"
        id="resources"
      >
        <div className="tgs-container">
          <div className="tgs-guides-heading">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <SectionLabel>
                Before the technical conversation
              </SectionLabel>

              <h2>
                Make the next
                <br />
                decision <span>clearer.</span>
              </h2>
            </motion.div>

            <motion.a
              href="/resources"
              className="tgs-text-link"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Browse all technology guides
              <ArrowUpRight size={18} />
            </motion.a>
          </div>

          <motion.div
            className="tgs-guides-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {guides.map((guide) => {
              const GuideIcon = guide.icon;

              return (
                <motion.article
                  className="tgs-guide-card"
                  key={guide.number}
                  variants={fadeUp}
                  whileHover={{
                    y: -6,
                  }}
                >
                  <div className="tgs-guide-card-top">
                    <span>{guide.number}</span>

                    <GuideIcon size={23} />
                  </div>

                  <span className="tgs-guide-category">
                    {guide.category}
                  </span>

                  <h3>{guide.title}</h3>

                  <p>{guide.description}</p>

                  <a href={guide.link}>
                    Read the guide
                    <MoveRight size={17} />
                  </a>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ======================================
          FINAL CTA
      ====================================== */}

      <section className="tgs-section tgs-final-cta" id="contact">
        <div className="tgs-cta-grid" />
        <div className="tgs-cta-glow" />

        <div className="tgs-container">
          <motion.div
            className="tgs-cta-card"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="tgs-cta-content">
              <SectionLabel>Your next technical step</SectionLabel>

              <h2>
                Building or upgrading
                <br />
                a <span>brokerage?</span>
              </h2>

              <p>
                Share your platform, current setup and goal.
                Let’s define the infrastructure and next steps.
              </p>

              <div className="tgs-cta-actions">
                <a
                  href="/contact"
                  className="tgs-button tgs-button-primary tgs-cta-button"
                >
                  Discuss Your Project
                  <ArrowRight size={18} />
                </a>

                <a
                  href="/infrastructure"
                  className="tgs-cta-secondary"
                >
                  Explore infrastructure
                  <ChevronRight size={17} />
                </a>
              </div>
            </div>

            <div className="tgs-cta-visual">
              <div className="tgs-cta-visual-ring tgs-cta-ring-one" />
              <div className="tgs-cta-visual-ring tgs-cta-ring-two" />

              <div className="tgs-cta-center">
                <Globe2 size={44} strokeWidth={1.2} />
                <span>TGS</span>
              </div>

              <div className="tgs-cta-node tgs-cta-node-one">
                <Layers3 size={19} />
              </div>

              <div className="tgs-cta-node tgs-cta-node-two">
                <Database size={19} />
              </div>

              <div className="tgs-cta-node tgs-cta-node-three">
                <Network size={19} />
              </div>

              <div className="tgs-cta-node tgs-cta-node-four">
                <Workflow size={19} />
              </div>
            </div>

            <div className="tgs-cta-bottom">
              <span>
                <span className="tgs-status-dot" />
                PLATFORM
              </span>

              <span>
                <span className="tgs-status-dot" />
                CONNECTIVITY
              </span>

              <span>
                <span className="tgs-status-dot" />
                OPERATIONS
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Home;