import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Layers3, Database, Network, Workflow, Server, ShieldCheck, Activity, CheckCircle2, GitBranch, Settings2, Globe2 } from "lucide-react";
import "./Infrastructure.css";

const layers = [
  { n: "01", title: "Trading platform", text: "The environment where instruments, account types, trading permissions and administration are configured.", icon: Layers3, tag: "PLATFORM", link: "/mt5-white-label" },
  { n: "02", title: "Market data & pricing", text: "Pricing sources, symbol mapping, feed permissions and validation connect market information to the platform.", icon: Database, tag: "DATA", link: "/market-data" },
  { n: "03", title: "Liquidity & execution", text: "Bridge connectivity and routing rules connect supported trading workflows to execution endpoints.", icon: Network, tag: "EXECUTION", link: "/liquidity-bridge" },
  { n: "04", title: "CRM & client operations", text: "Client onboarding, account provisioning, payments, reporting and service workflows connect the operational side.", icon: Workflow, tag: "OPERATIONS", link: "/broker-crm" },
  { n: "05", title: "Servers & hosting", text: "Hosting, access controls, monitoring, backups and change procedures support the production environment.", icon: Server, tag: "INFRASTRUCTURE", link: "/mt5-server" },
  { n: "06", title: "Integration & controls", text: "Interfaces, permissions, monitoring and testing help teams validate how the components work together.", icon: GitBranch, tag: "ENGINEERING", link: "/brokerage-technology" },
];
const phases = [
  ["01", "Discovery", "Agree the operating model, target users, instruments, current systems and launch priorities."],
  ["02", "Architecture", "Map dependencies, interfaces, owners, access requirements and the agreed initial scope."],
  ["03", "Integration", "Configure the selected platform and connect the data, execution and client-operation layers."],
  ["04", "Validation", "Test representative user journeys, permissions, reporting, failure handling and operational handoffs."],
  ["05", "Production readiness", "Confirm monitoring, backups, support ownership, escalation and change procedures before release."],
];
const faqs = [
  ["Is one platform enough to launch a brokerage?", "A platform is only one layer. The full operating environment may also need market data, execution connectivity, client systems, hosting and documented operating procedures."],
  ["Should integrations be planned early?", "Yes. Data feeds, bridges, CRM, payments and reporting can affect platform configuration and infrastructure choices, so their dependencies should be mapped early."],
  ["What should be tested before production?", "Test the agreed account and client workflows, pricing, execution paths, permissions, reporting, monitoring, backups and responses to unavailable integrations."],
  ["Does this page provide regulatory or legal approval?", "No. Technical architecture does not establish permission to offer brokerage services. Obtain appropriate professional advice for the markets and jurisdictions involved."],
];
export default function Infrastructure() {
  return <main className="tgs-infra-page">
    <section className="tip-hero"><div className="tip-grid"/><div className="tip-container tip-hero-layout">
      <motion.div className="tip-hero-copy" initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.6}}>
        <span className="tip-eyebrow"><span/> CONNECTED BROKERAGE TECHNOLOGY</span>
        <h1>One connected stack.<br/><span>Clearer infrastructure.</span></h1>
        <p>Explore how trading platforms, market data, execution, client operations and hosting fit together as one brokerage technology environment.</p>
        <div className="tip-actions"><a className="tip-btn tip-btn-primary" href="/contact">Discuss your architecture <ArrowUpRight size={17}/></a><a className="tip-btn tip-btn-ghost" href="#technology-layers">Explore the layers <ArrowRight size={17}/></a></div>
        <div className="tip-proof"><span><CheckCircle2 size={15}/> Platform</span><span><CheckCircle2 size={15}/> Connectivity</span><span><CheckCircle2 size={15}/> Operations</span></div>
      </motion.div>
      <motion.div className="tip-stack-visual" initial={{opacity:0,x:24}} animate={{opacity:1,x:0}} transition={{duration:.7,delay:.12}}>
        <div className="tip-stack-orbit tip-orbit-a"/><div className="tip-stack-orbit tip-orbit-b"/>
        <div className="tip-stack-center"><Globe2 size={36}/><strong>TGS</strong><span>BROKER STACK</span></div>
        {layers.slice(0,4).map((item,i)=>{const Icon=item.icon;return <div className={`tip-node tip-node-${i+1}`} key={item.n}><Icon size={19}/><span>{item.title}</span></div>})}
        <div className="tip-visual-caption"><Activity size={16}/> Interfaces · Dependencies · Ownership</div>
      </motion.div>
    </div></section>
    <section className="tip-section" id="technology-layers"><div className="tip-container"><div className="tip-section-heading"><span className="tip-kicker">THE TECHNOLOGY LAYERS</span><h2>Every component has a role.<br/><span>Every connection matters.</span></h2><p>Start with the layers relevant to your operating model, then define how they exchange data and support business-critical workflows.</p></div>
      <div className="tip-layer-grid">{layers.map((item,i)=>{const Icon=item.icon;return <motion.article className="tip-layer-card" key={item.n} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.45,delay:i*.06}} whileHover={{y:-5}}><div className="tip-card-top"><span>{item.n}</span><span className="tip-layer-icon"><Icon size={22}/></span></div><span className="tip-card-tag">{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p><a href={item.link}>Explore service <ArrowUpRight size={16}/></a></motion.article>})}</div>
    </div></section>
    <section className="tip-section tip-flow-section"><div className="tip-container"><div className="tip-section-heading tip-center"><span className="tip-kicker">HOW THE STACK CONNECTS</span><h2>From market information<br/><span>to client operations.</span></h2><p>These connections should be defined and tested against the workflows your brokerage actually needs.</p></div>
      <div className="tip-flow"><div className="tip-flow-line"/>{[{icon:Database,title:"Market data",text:"Sources and symbol mapping"},{icon:Layers3,title:"Trading platform",text:"Accounts and trading environment"},{icon:Network,title:"Execution",text:"Bridge and supported endpoints"},{icon:Workflow,title:"Client systems",text:"CRM, reporting and operations"}].map((x,i)=>{const Icon=x.icon;return <motion.div className="tip-flow-item" key={x.title} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.09}}><span className="tip-flow-icon"><Icon size={23}/></span><small>0{i+1}</small><h3>{x.title}</h3><p>{x.text}</p></motion.div>})}</div>
      <div className="tip-note"><ShieldCheck size={21}/><p><strong>Plan the interfaces, not just the components.</strong> Document what each system sends or receives, who owns it and how failures will be detected and handled.</p></div>
    </div></section>
    <section className="tip-section"><div className="tip-container"><div className="tip-section-heading"><span className="tip-kicker">IMPLEMENTATION ROADMAP</span><h2>A structured route from<br/><span>requirements to readiness.</span></h2></div><div className="tip-roadmap">{phases.map((p,i)=><motion.article key={p[0]} className="tip-phase" initial={{opacity:0,x:-12}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.07}}><span>{p[0]}</span><div><h3>{p[1]}</h3><p>{p[2]}</p></div><CheckCircle2 size={20}/></motion.article>)}</div></div></section>
    <section className="tip-section tip-faq-section"><div className="tip-container tip-faq-layout"><div><span className="tip-kicker">COMMON QUESTIONS</span><h2>Architecture,<br/><span>made clearer.</span></h2><p>Use these starting points to prepare for a technical discussion about your current setup or planned launch.</p><a className="tip-btn tip-btn-primary" href="/contact">Talk to TGS <ArrowUpRight size={17}/></a></div><div className="tip-faq-list">{faqs.map(([q,a])=><details key={q} className="tip-faq"><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>
    <section className="tip-final"><div className="tip-container tip-final-card"><div><span className="tip-kicker">YOUR NEXT TECHNICAL STEP</span><h2>Building or upgrading<br/><span>a brokerage?</span></h2><p>Share your platform, existing systems and target workflows. Use the conversation to define dependencies and the next practical steps.</p></div><a className="tip-btn tip-btn-primary" href="/contact">Discuss your project <ArrowUpRight size={18}/></a></div></section>
  </main>;
}
