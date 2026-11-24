import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";
import "./Contact.css";

/*
  DEMO CONTACT DETAILS — replace these with the real business details.
  Email: hello@technologyglobalsolutions.com
  WhatsApp: 919876543210 (country code + number, digits only)
*/

const CONTACT_EMAIL = "hello@technologyglobalsolutions.com";
const WHATSAPP_NUMBER = "919876543210";
const DISPLAY_PHONE = "+91 98765 43210";
const DISPLAY_LOCATION = "Ranchi, Jharkhand, India";
const BUSINESS_HOURS = "Monday – Friday · 9:00 AM – 6:00 PM IST";

const projectTypes = [
  "MT4 / MT5 White Label",
  "Trading Platform / Server",
  "Market Data",
  "Liquidity Bridge",
  "Broker CRM",
  "Forex Website Development",
  "Brokerage Technology",
  "Prop Firm Technology",
  "Other / Not sure yet",
];

const processSteps = [
  {
    number: "01",
    title: "Initial discussion",
    description: "Tell us about your business, current setup and goals.",
  },
  {
    number: "02",
    title: "Review & analysis",
    description: "We review the requirements, dependencies and priorities.",
  },
  {
    number: "03",
    title: "Recommended approach",
    description: "We outline a practical scope and the next steps.",
  },
  {
    number: "04",
    title: "Move forward",
    description: "If it is a fit, we agree on deliverables and responsibilities.",
  },
];

const faqs = [
  {
    question: "What should I include in my enquiry?",
    answer:
      "Share your company or project name, the technology you need, your current setup (if any), and your target timeline. Avoid sending passwords, API keys or other confidential credentials.",
  },
  {
    question: "Can I contact you before I know exactly what I need?",
    answer:
      "Yes. Choose “Other / Not sure yet” in the project type field and describe your goals. The first conversation can help clarify the scope.",
  },
  {
    question: "Can I discuss an existing trading technology setup?",
    answer:
      "Yes. Use the message field to describe the platform, integrations or operational challenge you want to discuss.",
  },
  {
    question: "How can I send this form?",
    answer:
      "Choose “Send by Email” to open your email application with the enquiry prepared, or “Send by WhatsApp” to open WhatsApp with the message ready to send. You must complete the send action in that app.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState("");

  const updateField = (event) => {
    const { name, value, checked, type } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (status) setStatus("");
  };

  const validateForm = () => {
    if (
      !form.fullName.trim() ||
      !form.companyName.trim() ||
      !form.email.trim() ||
      !form.projectType ||
      !form.message.trim()
    ) {
      setStatus("Please complete all required fields before continuing.");
      return false;
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    if (!emailValid) {
      setStatus("Please enter a valid email address.");
      return false;
    }

    if (!form.consent) {
      setStatus("Please confirm that we may use these details to respond to your enquiry.");
      return false;
    }

    return true;
  };

  const buildMessage = () => {
    return [
      "New website enquiry — Technology Global Solutions",
      "",
      `Full name: ${form.fullName.trim()}`,
      `Company: ${form.companyName.trim()}`,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phone.trim() || "Not provided"}`,
      `Project type: ${form.projectType}`,
      `Estimated budget: ${form.budget || "Not specified"}`,
      `Target timeline: ${form.timeline || "Not specified"}`,
      "",
      "Project details:",
      form.message.trim(),
      "",
      "Sent from the TGS Contact page.",
    ].join("\n");
  };

  const sendByEmail = (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const subject = encodeURIComponent(`Website enquiry: ${form.projectType}`);
    const body = encodeURIComponent(buildMessage());
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setStatus("Your email draft is ready. Review it in your email app and press Send.");
    window.location.href = mailtoUrl;
  };

  const sendByWhatsApp = (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const message = encodeURIComponent(buildMessage());
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    setStatus("WhatsApp is opening with your enquiry prepared. Review it and press Send there.");
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="tgs-contact-page">
      {/* HERO */}
      <section className="tgs-contact-hero">
        <div className="tgs-contact-hero-grid" aria-hidden="true" />
        <div className="tgs-contact-hero-glow tgs-contact-hero-glow-one" aria-hidden="true" />
        <div className="tgs-contact-hero-glow tgs-contact-hero-glow-two" aria-hidden="true" />

        <div className="tgs-contact-container tgs-contact-hero-inner">
          <motion.div
            className="tgs-contact-hero-copy"
            initial="hidden"
            animate="visible"
            variants={reveal}
          >
            <span className="tgs-contact-eyebrow">
              <span />
              CONTACT US
            </span>
            <h1>
              Let’s discuss your <span>technology requirements.</span>
            </h1>
            <p className="tgs-contact-hero-description">
              Share your current setup, target configuration or migration goals.
              Our team can review your requirements and help you plan the next steps.
            </p>

            <div className="tgs-contact-hero-actions">
              <a href="#contact-form" className="tgs-contact-button tgs-contact-button-primary">
                Start a conversation <ArrowRight size={17} />
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="tgs-contact-button tgs-contact-button-secondary">
                <MessageCircle size={17} /> WhatsApp us
              </a>
            </div>

            <div className="tgs-contact-hero-points">
              <span><ShieldCheck size={17} /> Clear project scope</span>
              <span><Workflow size={17} /> Practical next steps</span>
              <span><Zap size={17} /> Technical discussion</span>
            </div>
          </motion.div>

          <motion.div
            className="tgs-contact-hero-visual"
            initial={{ opacity: 0, scale: 0.94, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            aria-label="Illustration of connected brokerage technology"
          >
            <div className="tgs-contact-orbit tgs-contact-orbit-one" />
            <div className="tgs-contact-orbit tgs-contact-orbit-two" />
            <div className="tgs-contact-visual-core">
              <span className="tgs-contact-core-mark">TGS<span>.</span></span>
              <small>TECHNOLOGY<br />GLOBAL SOLUTIONS</small>
            </div>
            <div className="tgs-contact-float-card tgs-contact-float-platform">
              <span><Workflow size={18} /></span>
              <div><strong>Trading platforms</strong><small>MT4 / MT5 solutions</small></div>
            </div>
            <div className="tgs-contact-float-card tgs-contact-float-data">
              <span><Zap size={18} /></span>
              <div><strong>Market data</strong><small>Connectivity & feeds</small></div>
            </div>
            <div className="tgs-contact-float-card tgs-contact-float-infra">
              <span><ShieldCheck size={18} /></span>
              <div><strong>Infrastructure</strong><small>Connected systems</small></div>
            </div>
            <div className="tgs-contact-visual-caption">
              <span className="tgs-contact-status-dot" />
              One connected technology stack
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM + CONTACT DETAILS */}
      <section className="tgs-contact-main-section" id="contact-form">
        <div className="tgs-contact-container">
          <motion.div
            className="tgs-contact-section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
          >
            <span className="tgs-contact-eyebrow"><span /> SEND US A MESSAGE</span>
            <h2>Start a conversation with our <span>technical team.</span></h2>
            <p>Fill in the form and choose how you want to send your enquiry.</p>
          </motion.div>

          <div className="tgs-contact-content-grid">
            <motion.form
              className="tgs-contact-form-card"
              onSubmit={sendByEmail}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={reveal}
              noValidate
            >
              <div className="tgs-contact-form-topline">
                <div>
                  <h3>Project enquiry</h3>
                  <p>Fields marked <b>*</b> are required.</p>
                </div>
                <span className="tgs-contact-secure-badge"><ShieldCheck size={15} /> Private enquiry</span>
              </div>

              <div className="tgs-contact-form-grid">
                <label className="tgs-contact-field">
                  <span>Full name <b>*</b></span>
                  <input name="fullName" value={form.fullName} onChange={updateField} placeholder="Enter your full name" autoComplete="name" required />
                </label>

                <label className="tgs-contact-field">
                  <span>Company name <b>*</b></span>
                  <input name="companyName" value={form.companyName} onChange={updateField} placeholder="Enter your company name" autoComplete="organization" required />
                </label>

                <label className="tgs-contact-field">
                  <span>Email address <b>*</b></span>
                  <input name="email" type="email" value={form.email} onChange={updateField} placeholder="you@company.com" autoComplete="email" required />
                </label>

                <label className="tgs-contact-field">
                  <span>Phone / WhatsApp</span>
                  <input name="phone" type="tel" value={form.phone} onChange={updateField} placeholder="+91 98765 43210" autoComplete="tel" />
                </label>

                <label className="tgs-contact-field">
                  <span>Project type <b>*</b></span>
                  <select name="projectType" value={form.projectType} onChange={updateField} required>
                    <option value="">Select a project type</option>
                    {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                  </select>
                </label>

                <label className="tgs-contact-field">
                  <span>Estimated budget</span>
                  <select name="budget" value={form.budget} onChange={updateField}>
                    <option value="">Select a range (optional)</option>
                    <option value="Under $5,000">Under $5,000</option>
                    <option value="$5,000–$15,000">$5,000–$15,000</option>
                    <option value="$15,000–$50,000">$15,000–$50,000</option>
                    <option value="$50,000+">$50,000+</option>
                    <option value="To be discussed">To be discussed</option>
                  </select>
                </label>

                <label className="tgs-contact-field tgs-contact-field-full">
                  <span>Target timeline</span>
                  <select name="timeline" value={form.timeline} onChange={updateField}>
                    <option value="">Select a timeline (optional)</option>
                    <option value="As soon as possible">As soon as possible</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="1–3 months">1–3 months</option>
                    <option value="3+ months">3+ months</option>
                    <option value="Research / planning stage">Research / planning stage</option>
                  </select>
                </label>

                <label className="tgs-contact-field tgs-contact-field-full">
                  <span>Your message <b>*</b></span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={updateField}
                    placeholder="Tell us about your current setup, goals, integrations or requirements..."
                    rows="5"
                    maxLength="1500"
                    required
                  />
                  <small className="tgs-contact-character-count">{form.message.length}/1500 characters</small>
                </label>
              </div>

              <label className="tgs-contact-consent">
                <input type="checkbox" name="consent" checked={form.consent} onChange={updateField} />
                <span>I agree that TGS may use these details to respond to my enquiry. <b>*</b></span>
              </label>

              {status && (
                <div className={`tgs-contact-status ${status.startsWith("Please") ? "is-error" : "is-success"}`} role="status">
                  {status.startsWith("Please") ? null : <CheckCircle2 size={17} />}
                  <span>{status}</span>
                </div>
              )}

              <div className="tgs-contact-submit-actions">
                <button type="submit" className="tgs-contact-button tgs-contact-button-primary">
                  <Mail size={17} /> Send by Email <ArrowRight size={16} />
                </button>
                <button type="button" className="tgs-contact-button tgs-contact-button-whatsapp" onClick={sendByWhatsApp}>
                  <MessageCircle size={17} /> Send by WhatsApp <ArrowUpRight size={16} />
                </button>
              </div>
              <p className="tgs-contact-form-note">
                Email opens a pre-filled email draft. WhatsApp opens a pre-filled message. Review and send it in the app that opens.
              </p>
            </motion.form>

            <motion.aside
              className="tgs-contact-details"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={reveal}
            >
              <div className="tgs-contact-details-heading">
                <span className="tgs-contact-eyebrow"><span /> GET IN TOUCH</span>
                <h2>Contact <span>information.</span></h2>
                <p>Choose the channel that works best for you.</p>
              </div>

              <a className="tgs-contact-info-card" href={`mailto:${CONTACT_EMAIL}`}>
                <span className="tgs-contact-info-icon"><Mail size={21} /></span>
                <span className="tgs-contact-info-copy"><strong>Email us</strong><small>{CONTACT_EMAIL}</small></span>
                <span className="tgs-contact-info-arrow"><ArrowUpRight size={17} /></span>
              </a>

              <a className="tgs-contact-info-card" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
                <span className="tgs-contact-info-icon"><MessageCircle size={21} /></span>
                <span className="tgs-contact-info-copy"><strong>WhatsApp us</strong><small>{DISPLAY_PHONE}</small></span>
                <span className="tgs-contact-info-arrow"><ArrowUpRight size={17} /></span>
              </a>

              <a className="tgs-contact-info-card" href={`tel:${DISPLAY_PHONE.replace(/[^\d+]/g, "")}`}>
                <span className="tgs-contact-info-icon"><Phone size={21} /></span>
                <span className="tgs-contact-info-copy"><strong>Call us</strong><small>{DISPLAY_PHONE}</small></span>
                <span className="tgs-contact-info-arrow"><ArrowUpRight size={17} /></span>
              </a>

              <div className="tgs-contact-info-card tgs-contact-info-static">
                <span className="tgs-contact-info-icon"><MapPin size={21} /></span>
                <span className="tgs-contact-info-copy"><strong>Location</strong><small>{DISPLAY_LOCATION}</small></span>
              </div>

              <div className="tgs-contact-info-card tgs-contact-info-static">
                <span className="tgs-contact-info-icon"><Clock3 size={21} /></span>
                <span className="tgs-contact-info-copy"><strong>Business hours</strong><small>{BUSINESS_HOURS}</small></span>
              </div>

              <div className="tgs-contact-demo-notice">
                <ShieldCheck size={17} />
                <p><strong>Demo details:</strong> Email, phone and location above are placeholders. Replace them with verified business details before publishing.</p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="tgs-contact-process-section">
        <div className="tgs-contact-container">
          <motion.div
            className="tgs-contact-section-heading tgs-contact-centered-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
          >
            <span className="tgs-contact-eyebrow"><span /> WHAT HAPPENS NEXT</span>
            <h2>From discussion <span>to delivery.</span></h2>
            <p>A clear process to understand your requirements and define the next steps.</p>
          </motion.div>

          <div className="tgs-contact-process-grid">
            {processSteps.map((step, index) => (
              <motion.article
                className="tgs-contact-process-card"
                key={step.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ y: -7 }}
              >
                <span className="tgs-contact-process-number">{step.number}</span>
                <div className="tgs-contact-process-line" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="tgs-contact-faq-section">
        <div className="tgs-contact-container tgs-contact-faq-layout">
          <motion.div
            className="tgs-contact-faq-intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
          >
            <span className="tgs-contact-eyebrow"><span /> FREQUENTLY ASKED QUESTIONS</span>
            <h2>Before we <span>connect.</span></h2>
            <p>A few quick answers to help you prepare your enquiry.</p>
            <a className="tgs-contact-text-link" href={`mailto:${CONTACT_EMAIL}`}>
              Still have a question? Email us <ArrowRight size={16} />
            </a>
          </motion.div>

          <div className="tgs-contact-faq-list">
            {faqs.map((faq, index) => (
              <motion.details
                className="tgs-contact-faq-item"
                key={faq.question}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <summary>
                  <span>{faq.question}</span>
                  <span className="tgs-contact-faq-plus">+</span>
                </summary>
                <p>{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="tgs-contact-final-cta-wrap">
        <motion.div
          className="tgs-contact-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <div className="tgs-contact-final-cta">
            <div className="tgs-contact-cta-waves" aria-hidden="true" />
            <div className="tgs-contact-final-copy">
              <span className="tgs-contact-cta-eyebrow">READY TO PLAN YOUR PROJECT?</span>
              <h2>Let’s build the right technology foundation.</h2>
              <p>Tell us what you’re building and start a focused conversation with our technical team.</p>
            </div>
            <a href="#contact-form" className="tgs-contact-cta-button">
              Discuss your project <ArrowRight size={17} />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default Contact;
