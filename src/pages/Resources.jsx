import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  FileText,
  Layers3,
  Network,
  Search,
  Server,
  Settings2,
  SlidersHorizontal,
  Workflow,
  X,
} from "lucide-react";
import "./Resources.css";

const resourceGroups = [
  {
    id: "platform",
    number: "01",
    title: "Choose a Platform",
    description:
      "Compare platform options and understand the commercial and technical decisions behind your brokerage setup.",
    icon: Layers3,
    resources: [
      {
        title: "MetaTrader White Label",
        description:
          "Explore the platform, branding, and operational considerations behind a MetaTrader white-label setup.",
        category: "Platform",
        tags: ["MetaTrader", "white label", "platform", "MT5"],
        href: "/mt5-white-label",
        type: "Service overview",
      },
      {
        title: "MT4 vs MT5",
        description:
          "Review the practical differences between MT4 and MT5 when planning a trading environment.",
        category: "Platform",
        tags: ["MT4", "MT5", "comparison", "platform"],
        href: "/resources/mt4-vs-mt5",
        type: "Technology guide",
      },
      {
        title: "How to Choose an MT5 White Label Provider",
        description:
          "Understand the infrastructure, support, connectivity, and operating questions to discuss when selecting an MT5 white-label provider.",
        category: "Platform",
        tags: ["MT5", "provider", "selection", "white label"],
        href: "/resources/mt5-white-label-provider",
        type: "Selection guide",
      },
      {
        title: "MT5 White Label Cost",
        description:
          "Identify the technical and operational scope that can affect a white-label implementation budget.",
        category: "Commercial planning",
        tags: ["MT5", "cost", "budget", "white label"],
        href: "/resources/mt5-white-label-cost",
        type: "Planning guide",
      },
      {
        title: "MT5 White Label Pricing",
        description:
          "Prepare a clear scope of requirements before comparing white-label pricing and service proposals.",
        category: "Commercial planning",
        tags: ["MT5", "pricing", "white label"],
        href: "/resources/mt5-white-label-pricing",
        type: "Planning guide",
      },
    ],
  },
  {
    id: "deploy",
    number: "02",
    title: "Connect & Deploy",
    description:
      "Explore the infrastructure layers that connect trading platforms, pricing, execution, and client operations.",
    icon: Network,
    resources: [
      {
        title: "MT5 Server Hosting",
        description:
          "Review hosting, access, monitoring, backup, and continuity considerations for an MT5 environment.",
        category: "Hosting",
        tags: ["MT5", "server", "hosting", "infrastructure"],
        href: "/mt5-server",
        type: "Service overview",
      },
      {
        title: "MT5 Data Feed",
        description:
          "Understand market-data sources, symbol mapping, price distribution, and data-flow requirements.",
        category: "Market data",
        tags: ["MT5", "data feed", "price feed", "market data"],
        href: "/pricefeed",
        type: "Service overview",
      },
      {
        title: "MT5 Liquidity Bridge",
        description:
          "Explore the role of bridge connectivity in routing and connecting supported execution endpoints.",
        category: "Connectivity",
        tags: ["MT5", "liquidity", "bridge", "execution"],
        href: "/liquidity-bridge",
        type: "Service overview",
      },
      {
        title: "Forex Bridge Guide",
        description:
          "Map platform, pricing, liquidity, routing, and monitoring dependencies before planning bridge connectivity.",
        category: "Connectivity",
        tags: ["forex", "bridge", "liquidity", "execution"],
        href: "/resources/forex-bridge-guide",
        type: "Technology guide",
      },
      {
        title: "CRM Integration Guide",
        description:
          "Plan how client onboarding, account workflows, payments, and back-office operations connect with trading systems.",
        category: "Integrations",
        tags: ["CRM", "integration", "onboarding", "operations"],
        href: "/resources/crm-integration-guide",
        type: "Technology guide",
      },
    ],
  },
  {
    id: "operation",
    number: "03",
    title: "Plan the Operation",
    description:
      "Bring platform choices, infrastructure dependencies, and day-to-day responsibilities into one operating plan.",
    icon: Workflow,
    resources: [
      {
        title: "Start a Forex Broker",
        description:
          "Outline the technology decisions involved in planning a brokerage platform and operating model.",
        category: "Broker launch",
        tags: ["forex broker", "launch", "planning"],
        href: "/resources/start-forex-broker",
        type: "Planning guide",
      },
      {
        title: "Broker Infrastructure",
        description:
          "See how trading platforms, market data, execution connectivity, client systems, and hosting fit together.",
        category: "Architecture",
        tags: ["broker", "infrastructure", "architecture"],
        href: "/brokerage-technology",
        type: "Service overview",
      },
      {
        title: "Forex Technology Stack",
        description:
          "Identify the core technology layers and dependencies to scope before building a forex brokerage environment.",
        category: "Architecture",
        tags: ["forex", "technology stack", "platform", "infrastructure"],
        href: "/resources/forex-technology-stack",
        type: "Technology guide",
      },
      {
        title: "Multi-Asset Broker Infrastructure",
        description:
          "Plan technology around multiple asset classes, pricing sources, execution paths, and operating requirements.",
        category: "Broker infrastructure",
        tags: ["multi-asset", "broker", "infrastructure", "pricing"],
        href: "/multi-asset-brokers",
        type: "Solution overview",
      },
      {
        title: "Prop Firm Technology",
        description:
          "Explore technology considerations for challenge workflows, trading environments, risk controls, and reporting.",
        category: "Broker infrastructure",
        tags: ["prop firm", "prop trading", "risk", "platform"],
        href: "/prop-firms",
        type: "Solution overview",
      },
    ],
  },
];

const quickTopics = [
  { label: "All guides", value: "all" },
  { label: "Platform", value: "platform" },
  { label: "Hosting & data", value: "hosting" },
  { label: "Liquidity & integrations", value: "connectivity" },
  { label: "Broker operations", value: "operations" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.075,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

function ResourceCard({ resource, index }) {
  const Icon = index % 3 === 0 ? FileText : index % 3 === 1 ? BookOpen : ArrowUpRight;

  return (
    <motion.article
      className="resources-card"
      variants={itemVariants}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.22 }}
    >
      <div className="resources-card-top">
        <span className="resources-card-icon">
          <Icon size={20} strokeWidth={1.8} />
        </span>
        <span className="resources-card-type">{resource.type}</span>
      </div>

      <span className="resources-card-category">{resource.category}</span>
      <h3>{resource.title}</h3>
      <p>{resource.description}</p>

      <a className="resources-card-link" href={resource.href}>
        Read guide <ArrowRight size={16} />
      </a>
    </motion.article>
  );
}

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTopic, setActiveTopic] = useState("all");

  const allResources = useMemo(
    () =>
      resourceGroups.flatMap((group) =>
        group.resources.map((resource) => ({
          ...resource,
          groupId: group.id,
          groupTitle: group.title,
          groupNumber: group.number,
        }))
      ),
    []
  );

  const filteredResources = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return allResources.filter((resource) => {
      const searchableText = [
        resource.title,
        resource.description,
        resource.category,
        resource.type,
        resource.groupTitle,
        ...resource.tags,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        normalizedSearch.length === 0 ||
        searchableText.includes(normalizedSearch);

      let matchesTopic = true;

      if (activeTopic === "platform") {
        matchesTopic = resource.groupId === "platform";
      } else if (activeTopic === "hosting") {
        matchesTopic = ["Hosting", "Market data"].includes(resource.category);
      } else if (activeTopic === "connectivity") {
        matchesTopic = ["Connectivity", "Integrations"].includes(
          resource.category
        );
      } else if (activeTopic === "operations") {
        matchesTopic = resource.groupId === "operation";
      }

      return matchesSearch && matchesTopic;
    });
  }, [allResources, searchTerm, activeTopic]);

  const isFiltering = searchTerm.trim().length > 0 || activeTopic !== "all";

  return (
    <main className="resources-page">
      <section className="resources-hero">
        <div className="resources-hero-grid" aria-hidden="true" />
        <div className="resources-hero-glow resources-hero-glow-one" aria-hidden="true" />
        <div className="resources-hero-glow resources-hero-glow-two" aria-hidden="true" />

        <div className="resources-container resources-hero-layout">
          <motion.div
            className="resources-hero-copy"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <span className="resources-eyebrow">
              <i /> Technology Global Solutions
            </span>

            <h1>
              Broker technology
              <span> guides & insights.</span>
            </h1>

            <p>
              Explore practical guides to trading platforms, hosting, market
              data, liquidity connectivity, and the technology behind brokerage
              operations.
            </p>

            <div className="resources-hero-actions">
              <a className="resources-button resources-button-primary" href="#browse-guides">
                Explore all guides <ArrowDownRight size={17} />
              </a>
              <a className="resources-button resources-button-secondary" href="/contact">
                Discuss your project <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="resources-hero-proof">
              <span><CheckCircle2 size={15} /> Platform planning</span>
              <span><CheckCircle2 size={15} /> Infrastructure guides</span>
              <span><CheckCircle2 size={15} /> Operating workflows</span>
            </div>
          </motion.div>

          <motion.div
            className="resources-hero-visual"
            initial={{ opacity: 0, scale: 0.96, x: 18 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          >
            <div className="resources-visual-orbit resources-orbit-one" />
            <div className="resources-visual-orbit resources-orbit-two" />

            <div className="resources-dashboard">
              <div className="resources-dashboard-head">
                <div className="resources-window-dots"><i /><i /><i /></div>
                <span>TECHNOLOGY KNOWLEDGE HUB</span>
                <span className="resources-dashboard-live"><i /> READY TO EXPLORE</span>
              </div>

              <div className="resources-dashboard-title">
                <div>
                  <small>RESOURCE LIBRARY</small>
                  <h2>Find your starting point</h2>
                </div>
                <span className="resources-dashboard-title-icon"><BookOpen size={21} /></span>
              </div>

              <div className="resources-dashboard-metrics">
                <div><span>01</span><strong>Platform</strong><small>Choose the right setup</small></div>
                <div><span>02</span><strong>Connectivity</strong><small>Connect your systems</small></div>
                <div><span>03</span><strong>Operations</strong><small>Plan for production</small></div>
              </div>

              <div className="resources-dashboard-flow">
                <div className="resources-flow-line" />
                <div className="resources-flow-row">
                  <span><Layers3 size={17} /></span>
                  <div><strong>Trading platform</strong><small>MT4 / MT5 environment</small></div>
                  <CheckCircle2 size={17} className="resources-flow-check" />
                </div>
                <div className="resources-flow-row">
                  <span><Server size={17} /></span>
                  <div><strong>Infrastructure & data</strong><small>Hosting, pricing, connectivity</small></div>
                  <CheckCircle2 size={17} className="resources-flow-check" />
                </div>
                <div className="resources-flow-row">
                  <span><Settings2 size={17} /></span>
                  <div><strong>Broker operations</strong><small>Client systems and workflows</small></div>
                  <CheckCircle2 size={17} className="resources-flow-check" />
                </div>
              </div>

              <div className="resources-dashboard-footer">
                <span><CircleHelp size={14} /> Not sure where to begin?</span>
                <a href="/contact">Talk to our team <ArrowUpRight size={13} /></a>
              </div>
            </div>

            <motion.div
              className="resources-floating-card resources-floating-top"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span><Search size={17} /></span>
              <div><strong>Search by topic</strong><small>Find a relevant guide</small></div>
            </motion.div>

            <motion.div
              className="resources-floating-card resources-floating-bottom"
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span><Workflow size={17} /></span>
              <div><strong>Connected architecture</strong><small>Plan the full technology stack</small></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="resources-category-strip" aria-label="Resource categories">
        <div className="resources-container resources-category-strip-inner">
          <strong>EXPLORE BY FOCUS</strong>
          <a href="#platform"><Layers3 size={17} /> Platform selection</a>
          <a href="#deploy"><Network size={17} /> Connect & deploy</a>
          <a href="#operation"><Workflow size={17} /> Plan the operation</a>
        </div>
      </section>

      <section className="resources-section resources-browse-section" id="browse-guides">
        <div className="resources-container">
          <motion.div
            className="resources-section-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="resources-eyebrow resources-eyebrow-light"><i /> Resource library</span>
            <h2>Find the right guide for <span>your next step.</span></h2>
            <p>
              Browse by technology area or search for a specific platform,
              integration, or operating requirement.
            </p>
          </motion.div>

          <div className="resources-search-panel">
            <label className="resources-search-box">
              <Search size={20} />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search MT4, MT5, hosting, liquidity, CRM..."
                aria-label="Search resource guides"
              />
              {searchTerm && (
                <button
                  type="button"
                  className="resources-clear-search"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                >
                  <X size={17} />
                </button>
              )}
            </label>
            <span className="resources-result-count">
              <SlidersHorizontal size={15} />
              {filteredResources.length} {filteredResources.length === 1 ? "guide" : "guides"}
            </span>
          </div>

          <div className="resources-topic-filters" aria-label="Filter guides by topic">
            {quickTopics.map((topic) => (
              <button
                type="button"
                key={topic.value}
                className={activeTopic === topic.value ? "is-active" : ""}
                onClick={() => setActiveTopic(topic.value)}
              >
                {topic.label}
              </button>
            ))}
          </div>

          {isFiltering ? (
            <div className="resources-filtered-results">
              <div className="resources-filtered-heading">
                <h3>Matching resources</h3>
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setActiveTopic("all");
                  }}
                >
                  Clear filters <X size={14} />
                </button>
              </div>

              {filteredResources.length > 0 ? (
                <motion.div
                  className="resources-card-grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {filteredResources.map((resource, index) => (
                    <ResourceCard key={resource.title} resource={resource} index={index} />
                  ))}
                </motion.div>
              ) : (
                <div className="resources-empty-state">
                  <span><Search size={23} /></span>
                  <h3>No guides found</h3>
                  <p>Try another keyword, such as MT5, hosting, pricing, bridge, or CRM.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchTerm("");
                      setActiveTopic("all");
                    }}
                  >
                    Show all guides
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="resources-groups">
              {resourceGroups.map((group) => {
                const GroupIcon = group.icon;

                return (
                  <section className="resources-group" id={group.id} key={group.id}>
                    <motion.div
                      className="resources-group-heading"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.18 }}
                      transition={{ duration: 0.45 }}
                    >
                      <div className="resources-group-icon"><GroupIcon size={22} /></div>
                      <div className="resources-group-copy">
                        <span>GUIDE CATEGORY {group.number}</span>
                        <h3>{group.title}</h3>
                        <p>{group.description}</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="resources-card-grid"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      {group.resources.map((resource, index) => (
                        <ResourceCard key={resource.title} resource={resource} index={index} />
                      ))}
                    </motion.div>
                  </section>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="resources-planning-section">
        <div className="resources-container resources-planning-layout">
          <motion.div
            className="resources-planning-copy"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="resources-eyebrow"><i /> Plan with clarity</span>
            <h2>Technology decisions work best when the <span>dependencies are clear.</span></h2>
            <p>
              A brokerage technology stack is a connected system. Platform
              selection, market data, execution connectivity, client operations,
              hosting, and monitoring should be scoped together.
            </p>
            <a className="resources-inline-link" href="/brokerage-technology">
              Explore brokerage technology <ArrowRight size={17} />
            </a>
          </motion.div>

          <motion.div
            className="resources-planning-steps"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                number: "01",
                title: "Define the requirements",
                text: "List platforms, instruments, user groups, data sources, and operational needs.",
              },
              {
                number: "02",
                title: "Map the dependencies",
                text: "Understand how trading, pricing, execution, CRM, and hosting connect.",
              },
              {
                number: "03",
                title: "Validate the workflows",
                text: "Review expected flows, monitoring, escalation, and recovery procedures.",
              },
            ].map((step) => (
              <motion.div className="resources-planning-step" variants={itemVariants} key={step.number}>
                <span className="resources-step-number">{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
                <ChevronRight size={18} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="resources-final-cta">
        <div className="resources-cta-grid" aria-hidden="true" />
        <div className="resources-container resources-cta-layout">
          <motion.div
            className="resources-cta-copy"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <span className="resources-eyebrow"><i /> Have a specific requirement?</span>
            <h2>Turn your technology questions into a <span>clear project scope.</span></h2>
            <p>
              Tell us about your platform, infrastructure, connectivity, or
              operational requirements. We can help you identify the next steps.
            </p>
            <div className="resources-cta-actions">
              <a className="resources-button resources-button-primary" href="/contact">
                Discuss your project <ArrowUpRight size={17} />
              </a>
              <a className="resources-button resources-button-glass" href="/brokerage-technology">
                Explore brokerage technology <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="resources-cta-visual"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="resources-cta-ring resources-cta-ring-one" />
            <div className="resources-cta-ring resources-cta-ring-two" />
            <div className="resources-cta-core">
              <BookOpen size={28} />
              <strong>TGS</strong>
              <small>TECHNOLOGY GUIDES</small>
            </div>
            <span className="resources-cta-node resources-cta-node-one"><Layers3 size={18} /></span>
            <span className="resources-cta-node resources-cta-node-two"><Network size={18} /></span>
            <span className="resources-cta-node resources-cta-node-three"><Settings2 size={18} /></span>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
