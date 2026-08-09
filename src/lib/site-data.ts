import alankara from "@/assets/product-alankara.jpg";
 
import sense from "@/assets/product-senseminds.jpg";

export const products = [
  {
    name: "SenseMinds 360",
    tagline: "Enterprise Industrial Intelligence Platform",

    description:
      "SenseMinds 360 represents the next generation of industrial intelligence by unifying predictive maintenance, industrial safety, and explainable AI into one intelligent platform that continuously monitors critical assets and gas detection systems in real time. It predicts equipment failures before they impact production, explains alerts using verified sensor and engineering data, identifies root causes, assesses severity, and recommends precise maintenance actions. By integrating with existing PLCs, SCADA, IoT gateways, sensors, and gas analyzers without hardware replacement, it provides unified plant visibility, reduces downtime, improves asset reliability, strengthens worker safety, detects hazardous gas leaks early, and delivers AI-powered insights that enable faster, smarter, evidence-based industrial decision making.",

    image: sense,

    highlights: [
      "Deterministic Engineering Analytics",
      "Knowledge Graph Intelligence",
      "Grounded Enterprise AI",
      "Predictive Maintenance",
      "Real-Time Monitoring",
      "Machine Learning Insights",
      "Explainable AI Decisions",
      "Rule-Based Diagnostics",
      "Continuous Health Analysis",
      "Enterprise Dashboard",
    ],

    stats: [
      {
        value: "231+",
        label: "Automated Tests",
      },
      {
        value: "7",
        label: "Analytics Engines",
      },
      {
        value: "6",
        label: "Industrial Machines",
      },
      {
        value: "24×7",
        label: "Continuous Analysis",
      },
    ],
  },
] as const;


export const processSteps = [
  {
    title: "Smart Analyzing",
    desc: "We map your data, workflows, and goals to find the highest-leverage AI opportunities.",
  },
  {
    title: "AI Development",
    desc: "Custom models, agents, and pipelines built on a secure, scalable enterprise foundation.",
  },
  {
    title: "Seamless Integration",
    desc: "Deploy into your existing stack with first-class APIs, SDKs, and zero-downtime rollout.",
  },
  {
    title: "Continuous Optimization",
    desc: "Active monitoring, evals, and retraining keep your AI sharp as your business evolves.",
  },
] as const;

export const features = [
  { title: "AI Automation", desc: "Replace repetitive work with intelligent, end-to-end automated flows." },
  { title: "Fast Integration", desc: "Drop-in APIs and SDKs ship value in days, not quarters." },
  { title: "Scalable Systems", desc: "Architectures designed to grow from pilot to global rollout." },
  { title: "Intelligent Analytics", desc: "Turn raw signals into decisions with live, explainable insights." },
  { title: "Enterprise Security", desc: "SOC-grade controls, role-based access, and full audit trails." },
  { title: "Real-Time Insights", desc: "Stream events to dashboards and alerts the moment they happen." },
] as const;

export const faqs = [
  {
    q: "What does AISmartLive do?",
    a: "We design and ship enterprise-grade AI products and custom solutions across automation, education, and intelligent sensing.",
  },
  {
    q: "Which industries do you serve?",
    a: "Retail, education, manufacturing, smart infrastructure, and SMB SaaS. If your workflow has data, we can make it smarter.",
  },
  {
    q: "How long does a typical engagement take?",
    a: "Discovery and a working proof-of-value typically land in 2–4 weeks, with production rollouts in 6–12 weeks.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes — we provide SLAs, monitoring, model retraining, and a dedicated success engineer for every enterprise account.",
  },
  {
    q: "Is my data secure?",
    a: "Always. We follow industry best practices for encryption in transit and at rest, RBAC, and full audit logging.",
  },
] as const;
