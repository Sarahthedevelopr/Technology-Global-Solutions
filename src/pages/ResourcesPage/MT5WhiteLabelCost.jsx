import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleDollarSign,
  ClipboardList,
  Database,
  Gauge,
  GitBranch,
  Layers3,
  LifeBuoy,
  Network,
  ServerCog,
  ShieldCheck,
  Workflow,
  Calculator,
  MessageCircle,
  FileText,
} from "lucide-react";

import "./MT5WhiteLabelCost.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
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

const costDrivers = [
  {
    number: "01",
    title: "Platform Scope",
    text: "The required platform arrangement, access model and operational scope affect the commercial structure.",
    icon: Layers3,
    tag: "Trading environment",
  },
  {
    number: "02",
    title: "Infrastructure",
    text: "Hosting topology, monitoring, backup and continuity requirements add to the implementation scope.",
    icon: ServerCog,
    tag: "Hosting & resilience",
  },
  {
    number: "03",
    title: "Market Data",
    text: "Instrument coverage, source connectivity and distribution requirements influence both setup and recurring cost.",
    icon: Database,
    tag: "Sources & instruments",
  },
  {
    number: "04",
    title: "Bridge & Liquidity",
    text: "Execution connectivity can add bridge, mapping, routing and operational monitoring requirements.",
    icon: GitBranch,
    tag: "Execution connectivity",
  },
  {
    number: "05",
    title: "CRM & APIs",
    text: "Client systems, payments, reporting and third-party integrations increase engineering and testing work.",
    icon: Workflow,
    tag: "Client systems",
  },
  {
    number: "06",
    title: "Operations & Support",
    text: "Ongoing technical operations, change requests and service expectations affect recurring commercial terms.",
    icon: LifeBuoy,
    tag: "Ongoing operations",
  },
];

const steps = [
  {
    number: "01",
    title: "Define the launch model",
    text: "Clarify target markets, instruments, user volumes and the operational model before requesting pricing.",
  },
  {
    number: "02",
    title: "Separate setup and recurring costs",
    text: "Ask providers to distinguish implementation work from monthly platform, hosting, data and support charges.",
  },
  {
    number: "03",
    title: "Identify third-party dependencies",
    text: "Document market-data, liquidity, CRM, payment and compliance systems that sit outside the core white label.",
  },
  {
    number: "04",
    title: "Compare total operating scope",
    text: "Compare proposals on included infrastructure and responsibilities, not only the headline monthly fee.",
  },
];

const faqs = [
  {
    q: "Is there one standard MT5 white label price?",
    a: "No. Commercial terms vary by provider, platform scope, infrastructure, data, integrations and support responsibilities.",
  },
  {
    q: "What usually creates the biggest cost differences?",
    a: "Infrastructure, data coverage, execution connectivity, third-party integrations and the level of operational support are common cost drivers.",
  },
  {
    q: "Should setup and monthly fees be compared separately?",
    a: "Yes. Separating one-time implementation from recurring platform and infrastructure charges makes proposals easier to compare.",
  },
  {
    q: "Can you estimate cost before technical discovery?",
    a: "A preliminary range may be possible, but reliable pricing requires a defined operating model, required components and third-party dependencies.",
  },
];

const worksheetRows = [
  "Platform arrangement",
  "Hosting & infrastructure",
  "Market data",
  "Execution connectivity",
  "CRM & integrations",
  "Operations & support",
  "Third-party services",
];

export default function MT5WhiteLabelCost() {
  const [openFaq, setOpenFaq] = useState(0);

  const [worksheet, setWorksheet] = useState(() =>
    worksheetRows.map((item) => ({
      item,
      setup: "",
      recurring: "",
      currency: "USD",
      supplier: "",
    }))
  );

  const updateRow = (index, key, value) => {
    setWorksheet((rows) =>
      rows.map((row, i) =>
        i === index ? { ...row, [key]: value } : row
      )
    );
  };

  const exportWorksheet = () => {
    const header = [
      "Cost component",
      "Initial charge",
      "Recurring charge",
      "Currency",
      "Responsible supplier",
    ];

    const csv = [
      header,
      ...worksheet.map((row) => [
        row.item,
        row.setup,
        row.recurring,
        row.currency,
        row.supplier,
      ]),
    ]
      .map((row) =>
        row
          .map(
            (cell) =>
              `"${String(cell).replaceAll('"', '""')}"`
          )
          .join(",")
      )
      .join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "mt5-white-label-cost-worksheet.csv";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <main className="cost-page">
      {/* HERO SECTION */}

      <section className="cost-hero">
        <div className="cost-hero-glow cost-glow-one" />
        <div className="cost-hero-glow cost-glow-two" />

        <div className="cost-container cost-hero-grid">
          <motion.div
            className="cost-hero-copy"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="cost-eyebrow"
            >
              <span className="cost-eyebrow-dot" />
              MT5 WHITE LABEL COST
            </motion.div>

            <motion.h1 variants={fadeUp}>
              MT5 White Label Cost:{" "}
              <span>What Determines the Total Scope</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="cost-hero-lead"
            >
              MT5 white label pricing is shaped by platform
              scope, infrastructure, data connectivity,
              integrations, branding and ongoing operations
              — not by a single universal number.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="cost-hero-actions"
            >
              <a
                className="cost-btn cost-btn-primary"
                href="https://wa.me/358823711153?text=Hello%20TGS%2C%20I%20would%20like%20to%20discuss%20MT5%20white%20label%20requirements."
                target="_blank"
                rel="noreferrer"
              >
                Discuss requirements
                <ArrowUpRight size={17} />
              </a>

              <a
                className="cost-btn cost-btn-secondary"
                href="#cost-scope"
              >
                Explore the scope
                <ArrowDown size={17} />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="cost-hero-note"
            >
              <ShieldCheck size={17} />
              Scope-led planning. No misleading universal price.
            </motion.div>
          </motion.div>

          {/* ANIMATED HERO VISUAL */}

          <motion.div
            className="cost-hero-visual"
            initial={{
              opacity: 0,
              x: 28,
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
            <div className="cost-visual-top">
              <div>
                <span className="cost-mini-label">
                  PROJECT SCOPE
                </span>

                <h3>Cost components</h3>
              </div>

              <span className="cost-live-pill">
                <i />
                Scope map
              </span>
            </div>

            <div className="cost-stack">
              {[
                {
                  n: "01",
                  t: "Platform",
                  s: "Trading environment",
                  I: Layers3,
                },
                {
                  n: "02",
                  t: "Pricing",
                  s: "Market data sources",
                  I: Database,
                },
                {
                  n: "03",
                  t: "Execution",
                  s: "Supported connectivity",
                  I: Network,
                },
                {
                  n: "04",
                  t: "Operations",
                  s: "Client systems & support",
                  I: Gauge,
                },
              ].map((item, i) => (
                <motion.div
                  key={item.n}
                  className={`cost-stack-row ${
                    i === 0 ? "is-active" : ""
                  }`}
                  animate={{
                    x: [0, i % 2 ? 2 : -2, 0],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="cost-stack-number">
                    {item.n}
                  </span>

                  <span className="cost-stack-icon">
                    <item.I size={19} />
                  </span>

                  <span className="cost-stack-text">
                    <b>{item.t}</b>
                    <small>{item.s}</small>
                  </span>

                  <ArrowUpRight
                    className="cost-stack-arrow"
                    size={16}
                  />
                </motion.div>
              ))}
            </div>

            <div className="cost-visual-foot">
              <span className="cost-pulse" />

              <span>
                Build a complete operating picture
              </span>

              <span className="cost-visual-line" />
            </div>

            <div className="cost-visual-orb orb-a" />
            <div className="cost-visual-orb orb-b" />
          </motion.div>
        </div>

        <a
          className="cost-scroll-cue"
          href="#cost-scope"
        >
          <span />
          Scroll to explore
        </a>
      </section>

      {/* COST FACTORS */}

      <section
        className="cost-scope-section"
        id="cost-scope"
      >
        <div className="cost-container">
          <motion.div
            className="cost-section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className="cost-kicker"
            >
              SCOPE AND DECISIONS
            </motion.span>

            <motion.h2 variants={fadeUp}>
              Plan the requirements for{" "}
              <span>MT5 White Label Cost</span>
            </motion.h2>

            <motion.p variants={fadeUp}>
              Map the layers that influence implementation
              effort, recurring charges and supplier
              responsibilities before comparing proposals.
            </motion.p>
          </motion.div>

          <motion.div
            className="cost-driver-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={stagger}
          >
            {costDrivers.map(
              ({
                number,
                title,
                text,
                icon: Icon,
                tag,
              }) => (
                <motion.article
                  key={number}
                  variants={fadeUp}
                  whileHover={{
                    y: -7,
                    transition: { duration: 0.2 },
                  }}
                  className="cost-driver-card"
                >
                  <div className="cost-card-top">
                    <span className="cost-card-number">
                      {number}
                    </span>

                    <span className="cost-card-icon">
                      <Icon size={21} />
                    </span>
                  </div>

                  <h3>{title}</h3>
                  <p>{text}</p>

                  <div className="cost-card-bottom">
                    <span>{tag}</span>
                    <ArrowUpRight size={16} />
                  </div>
                </motion.article>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* COST COMPARISON */}

      <section className="cost-compare-section">
        <div className="cost-container cost-compare-grid">
          <motion.div
            className="cost-compare-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className="cost-kicker"
            >
              COMPARE LIKE FOR LIKE
            </motion.span>

            <motion.h2 variants={fadeUp}>
              Compare total operating cost{" "}
              <span>with the same scope</span>
            </motion.h2>

            <motion.p variants={fadeUp}>
              Prepare a cost worksheet with separate rows
              for platform arrangement, hosting, market data,
              execution connectivity, CRM work and
              operational support. For each row, record the
              initial charge, recurring charge, billing
              currency, usage basis and responsible supplier.
              A lower platform figure can be offset by
              services charged elsewhere.
            </motion.p>

            <motion.p variants={fadeUp}>
              Use the same planning horizon for each proposal.
              A practical worksheet is: initial implementation
              plus the sum of agreed recurring charges across
              that period, plus separately identified usage
              charges and required third-party services.
              Leave amounts blank until suppliers confirm them;
              a universal MT5 price would conceal meaningful
              scope differences.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="cost-formula-card"
            >
              <span className="cost-formula-icon">
                <Calculator size={20} />
              </span>

              <div>
                <small>PLANNING FORMULA</small>

                <strong>
                  Initial implementation + recurring charges
                  + usage charges + required third-party
                  services
                </strong>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="cost-compare-visual"
            initial={{
              opacity: 0,
              x: 26,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="cost-sheet-head">
              <div>
                <span className="cost-mini-label">
                  COST PLANNING
                </span>

                <h3>Proposal comparison</h3>
              </div>

              <ClipboardList size={22} />
            </div>

            {worksheetRows.slice(0, 5).map((row, i) => (
              <div className="cost-sheet-row" key={row}>
                <span className="cost-sheet-check">
                  <Check size={13} />
                </span>

                <span>{row}</span>

                <span className="cost-sheet-value">
                  {i === 0
                    ? "One-time + recurring"
                    : i === 1
                    ? "Monthly / usage"
                    : i === 2
                    ? "Coverage based"
                    : i === 3
                    ? "Scope dependent"
                    : "Integration effort"}
                </span>
              </div>
            ))}

            <div className="cost-sheet-warning">
              <CircleDollarSign size={18} />

              <p>
                <b>Compare the whole scope.</b>
                <br />
                Do not compare headline fees in isolation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BUDGET CHANGE EVENTS */}

      <section className="cost-events-section">
        <div className="cost-container cost-events-grid">
          <motion.div
            className="cost-events-visual"
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
            <div className="cost-event-ring ring-one" />
            <div className="cost-event-ring ring-two" />

            <div className="cost-event-center">
              <GitBranch size={28} />
              <span>
                CHANGE
                <br />
                EVENTS
              </span>
            </div>

            {[
              { t: "Add instruments", x: "top" },
              { t: "New price source", x: "right" },
              { t: "CRM workflow", x: "bottom" },
              { t: "Execution endpoint", x: "left" },
            ].map((event) => (
              <div
                key={event.t}
                className={`cost-event-chip chip-${event.x}`}
              >
                <span />
                {event.t}
              </div>
            ))}
          </motion.div>

          <motion.div
            className="cost-events-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className="cost-kicker"
            >
              PLAN FOR CHANGE
            </motion.span>

            <motion.h2 variants={fadeUp}>
              Identify the events that{" "}
              <span>change the budget</span>
            </motion.h2>

            <motion.p variants={fadeUp}>
              Record what happens when the broker adds
              instruments, a new price source, a CRM workflow
              or an execution endpoint. Ask whether
              configuration work, support hours or
              infrastructure changes are included. Note
              cancellation, renewal and migration terms in
              the supplier comparison.
            </motion.p>

            <motion.p variants={fadeUp}>
              Use the pricing-request guide to send TGS a
              concrete requirement list. Cost planning
              explains the components of a budget; a pricing
              request establishes the specific configuration
              and commercial proposal for your project.
            </motion.p>

            <motion.a
              variants={fadeUp}
              className="cost-text-link"
              href="/resources/mt5-white-label-pricing"
            >
              Continue to the pricing-request guide
              <ArrowRight size={17} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* FOUR-STEP WORKFLOW */}

      <section className="cost-steps-section">
        <div className="cost-container">
          <motion.div
            className="cost-section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className="cost-kicker"
            >
              A PRACTICAL WORKFLOW
            </motion.span>

            <motion.h2 variants={fadeUp}>
              Four steps to a{" "}
              <span>clearer cost comparison</span>
            </motion.h2>
          </motion.div>

          <div className="cost-steps-list">
            {steps.map((step, i) => (
              <motion.article
                key={step.number}
                className="cost-step"
                initial={{
                  opacity: 0,
                  x: i % 2 ? 18 : -18,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.06,
                }}
              >
                <span className="cost-step-num">
                  {step.number}
                </span>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>

                <ArrowUpRight
                  className="cost-step-arrow"
                  size={20}
                />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE COST WORKSHEET */}

      <section
        className="cost-worksheet-section"
        id="cost-worksheet"
      >
        <div className="cost-container">
          <div className="cost-worksheet-heading">
            <div>
              <span className="cost-kicker">
                TAKE THIS INTO YOUR NEXT DISCOVERY CALL
              </span>

              <h2>
                Build your <span>cost worksheet</span>
              </h2>

              <p>
                Enter confirmed figures when suppliers provide
                them. Blank fields are intentional—avoid
                guessing costs before the scope is agreed.
              </p>
            </div>

            <button
              className="cost-btn cost-btn-primary"
              type="button"
              onClick={exportWorksheet}
            >
              <FileText size={17} />
              Export CSV
            </button>
          </div>

          <div className="cost-table-wrap">
            <table className="cost-table">
              <thead>
                <tr>
                  <th>Cost component</th>
                  <th>Initial charge</th>
                  <th>Recurring charge</th>
                  <th>Currency</th>
                  <th>Supplier / owner</th>
                </tr>
              </thead>

              <tbody>
                {worksheet.map((row, i) => (
                  <tr key={row.item}>
                    <td>{row.item}</td>

                    <td>
                      <input
                        aria-label={`${row.item} initial charge`}
                        value={row.setup}
                        onChange={(e) =>
                          updateRow(i, "setup", e.target.value)
                        }
                        placeholder="Not confirmed"
                      />
                    </td>

                    <td>
                      <input
                        aria-label={`${row.item} recurring charge`}
                        value={row.recurring}
                        onChange={(e) =>
                          updateRow(
                            i,
                            "recurring",
                            e.target.value
                          )
                        }
                        placeholder="Not confirmed"
                      />
                    </td>

                    <td>
                      <select
                        aria-label={`${row.item} currency`}
                        value={row.currency}
                        onChange={(e) =>
                          updateRow(
                            i,
                            "currency",
                            e.target.value
                          )
                        }
                      >
                        <option>USD</option>
                        <option>EUR</option>
                        <option>GBP</option>
                        <option>INR</option>
                        <option>Other</option>
                      </select>
                    </td>

                    <td>
                      <input
                        aria-label={`${row.item} supplier`}
                        value={row.supplier}
                        onChange={(e) =>
                          updateRow(
                            i,
                            "supplier",
                            e.target.value
                          )
                        }
                        placeholder="Supplier name"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="cost-table-note">
            <ShieldCheck size={15} />
            This worksheet is for comparing scope, not a quote
            or a promise of platform pricing.
          </p>
        </div>
      </section>

      {/* FAQ */}

      <section className="cost-faq-section">
        <div className="cost-container cost-faq-grid">
          <div className="cost-faq-intro">
            <span className="cost-kicker">QUESTIONS</span>

            <h2>
              Questions about{" "}
              <span>MT5 White Label Cost</span>
            </h2>

            <p>
              Clear up the main pricing questions before you
              request a project-specific proposal.
            </p>

            <div className="cost-faq-icon">
              <MessageCircle size={28} />
            </div>
          </div>

          <div className="cost-faq-list">
            {faqs.map((faq, i) => (
              <div
                className={`cost-faq-item ${
                  openFaq === i ? "is-open" : ""
                }`}
                key={faq.q}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenFaq(openFaq === i ? -1 : i)
                  }
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={19} />
                </button>

                <div className="cost-faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED RESOURCES */}

      <section className="cost-related-section">
        <div className="cost-container">
          <div className="cost-related-head">
            <div>
              <span className="cost-kicker">
                RELATED READING
              </span>

              <h2>
                Continue with the{" "}
                <span>connected technology layers</span>
              </h2>
            </div>

            <a
              href="/resources"
              className="cost-text-link"
            >
              All technology guides
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="cost-related-grid">
            <a
              href="/resources/mt5-white-label-provider"
              className="cost-related-card"
            >
              <span>01 / PROVIDER SELECTION</span>

              <h3>
                How to Choose an MT5 White Label Provider
              </h3>

              <p>
                Review the provider, responsibilities and
                operational scope.
              </p>

              <ArrowUpRight size={19} />
            </a>

            <a
              href="/resources/mt5-white-label-pricing"
              className="cost-related-card"
            >
              <span>02 / PRICING REQUEST</span>

              <h3>MT5 White Label Pricing</h3>

              <p>
                Prepare the requirement details needed for a
                tailored proposal.
              </p>

              <ArrowUpRight size={19} />
            </a>

            <a
              href="/resources/mt4-vs-mt5"
              className="cost-related-card"
            >
              <span>03 / PLATFORM CHOICE</span>

              <h3>MT4 vs MT5</h3>

              <p>
                Compare platform capabilities and operational
                considerations.
              </p>

              <ArrowUpRight size={19} />
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="cost-final-cta">
        <div className="cost-cta-glow" />

        <div className="cost-container cost-cta-inner">
          <div>
            <span className="cost-kicker">NEXT STEP</span>

            <h2>
              Discuss your infrastructure requirements
            </h2>

            <p>
              Share your target platform, current systems and
              required workflows with the TGS technical team.
            </p>
          </div>

          <div className="cost-cta-actions">
            <a
              className="cost-btn cost-btn-white"
              href="https://wa.me/358823711153?text=Hello%20TGS%2C%20I%20would%20like%20to%20discuss%20my%20MT5%20infrastructure%20requirements."
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp TGS
              <ArrowUpRight size={17} />
            </a>

            <a
              className="cost-btn cost-btn-outline"
              href="/contact"
            >
              Contact TGS
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}