import React, { useState } from 'react';
import { 
  Terminal, 
  Cpu, 
  Layers, 
  Database, 
  ShieldCheck, 
  GitMerge, 
  Server, 
  ArrowRight, 
  Plus, 
  Minus,
  Sparkles,
  Workflow,
  RefreshCw,
  Box
} from 'lucide-react';

export default function SoftwareDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const softwareCapabilities = [
    {
      icon: <Terminal className="w-7 h-7 text-[#00d2ff]" />,
      title: "Custom Enterprise Software",
      desc: "Architecting bespoke ERP, CRM, and workflow management systems built strictly around your operational logic and departmental hierarchies."
    },
    {
      icon: <Layers className="w-7 h-7 text-[#00e599]" />,
      title: "Microservices & Distributed Systems",
      desc: "Decoupled service modules communicating via robust message queues (Kafka/RabbitMQ) and gRPC to prevent single points of failure."
    },
    {
      icon: <RefreshCw className="w-7 h-7 text-[#00d2ff]" />,
      title: "Legacy Modernization & Migration",
      desc: "Refactoring aging monolithic codebases into scalable cloud-native architectures with minimal operational downtime."
    },
    {
      icon: <Database className="w-7 h-7 text-[#00e599]" />,
      title: "Enterprise Database Architecture",
      desc: "High-throughput SQL and NoSQL database schemas engineered with partitioning, master-replica clusters, and automated backups."
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#00d2ff]" />,
      title: "Zero-Trust Security & Compliance",
      desc: "Role-based access control (RBAC), multi-tenant data segregation, SOC 2/HIPAA-aligned security protocols, and vulnerability audits."
    },
    {
      icon: <Server className="w-7 h-7 text-[#00e599]" />,
      title: "Cloud Infrastructure & DevOps",
      desc: "Automated containerization (Docker/Kubernetes), Terraform-managed infrastructure as code, and production CI/CD delivery pipelines."
    }
  ];

  const developmentLifecycle = [
    {
      step: "01",
      badge: "ANALYZE",
      title: "Requirements & System Specs",
      desc: "Business rules, security requirements, concurrency scale aur system data flow models ko blueprint karna."
    },
    {
      step: "02",
      badge: "ARCHITECT",
      title: "System & Schema Design",
      desc: "Domain-Driven Design (DDD), database normalization, microservice boundaries aur API contracts define karna."
    },
    {
      step: "03",
      badge: "CONSTRUCT",
      title: "Sprint-Based Engineering",
      desc: "Modular coding standards, automated unit testing, code peer reviews aur continuous integration runs."
    },
    {
      step: "04",
      badge: "HARDEN",
      title: "Stress Testing & Cloud Rollout",
      desc: "Penetration tests, load balancing checks, horizontal scaling verification aur multi-region production rollout."
    }
  ];

  const enterpriseStack = [
    { layer: "Backend Engines", tech: "Node.js, Express, Python (FastAPI/Django), Go, Java Spring Boot" },
    { layer: "Databases & In-Memory", tech: "PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch" },
    { layer: "Event Streaming & Queues", tech: "Apache Kafka, RabbitMQ, AWS SQS, Celery" },
    { layer: "Containerization & Cloud", tech: "Docker, Kubernetes, AWS, Microsoft Azure, Google Cloud" },
    { layer: "CI/CD & Observability", tech: "GitHub Actions, Terraform, Prometheus, Grafana, Datadog" }
  ];

  const softwareFaqs = [
    {
      question: "Off-the-shelf software ke mukable custom software develop karne ka kya faayda hai?",
      answer: "Custom software aapke exact business workflows ke mutabik banta hai, jisme unnecessary SaaS subscription costs nahi lagte, IP ownership aapke paas rehti hai, aur scale hone par kisi third-party tool ki limitations ka samna nahi karna padta."
    },
    {
      question: "Purane legacy monolithic system ko migrate karte waqt downtime kaise manage hota hai?",
      answer: "Hum 'Strangler Fig Pattern' approach use karte hain jahan core modules ko step-by-step microservices me transition kiya jata hai bina legacy system ko band kiye, jisse business operations uninterrupted chalte rehte hain."
    },
    {
      question: "Enterprise systems me data security aur tenant separation kaise ensure hoti hai?",
      answer: "Hum strict schema-level ya database-level multi-tenancy, JWT-based RBAC permissions, encrypted storage (AES-256) aur SSL/TLS encrypted in-transit pipelines deploy karte hain."
    },
    {
      question: "Software handover ke baad team ko documentation aur training kaise milti hai?",
      answer: "Hum comprehensive technical documentation, OpenAPI/Swagger specifications, architectural diagrams, deployment runbooks aur aapke in-house IT team ke liye structured handoff sessions provide karte hain."
    }
  ];

  return (
    <div className="bg-[#020b1e] text-slate-100 min-h-screen font-sans selection:bg-[#00e599] selection:text-black">

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#0051ff]/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[420px] h-[420px] bg-[#00e599]/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 mb-6">
              <Sparkles className="w-4 h-4 text-[#00e599]" />
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Practice Area • Core Engineering
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Enterprise-Grade <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#00e599]">
                Software Development
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              From resilient backend architectures to mission-critical business automation, we engineer scalable, secure, and future-proof custom software platforms.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-[#00e599] hover:bg-[#00c885] text-slate-950 font-bold px-7 py-3.5 rounded-full text-sm transition-all duration-200 shadow-lg shadow-[#00e599]/20"
              >
                Discuss Technical Specs <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 bg-slate-900/60 text-slate-200 font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-200"
              >
                Explore Capabilities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section id="services" className="py-20 bg-[#03112b] border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00e599]">Engineering Scope</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">Full-Spectrum Software Engineering</h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">Architectures engineered for scale, reliability, and low latency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareCapabilities.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/50 border border-slate-800/90 hover:border-slate-700 rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-center mb-6 group-hover:scale-105 transition duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING LIFECYCLE */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00d2ff]">Lifecycle</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">How We Build Enterprise Software</h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">Disciplined software development lifecycle with zero architectural shortcuts.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentLifecycle.map((st, idx) => (
              <div key={idx} className="relative p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="text-3xl font-black text-[#00d2ff] mb-2">{st.step}</div>
                <div className="text-xs font-bold text-[#00e599] tracking-wider mb-2">{st.badge}</div>
                <h3 className="text-base font-bold text-white mb-2">{st.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK TABLE */}
      <section className="py-20 bg-[#03112b] border-t border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00e599]">Infrastructure</span>
            <h2 className="text-3xl font-extrabold text-white mt-2">Enterprise Software Tech Stack</h2>
          </div>

          <div className="divide-y divide-slate-800 border border-slate-800 rounded-2xl bg-slate-900/60 overflow-hidden">
            {enterpriseStack.map((item, idx) => (
              <div key={idx} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-base font-bold text-white w-56 shrink-0">{item.layer}</span>
                <span className="text-sm text-slate-400 font-mono">{item.tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00d2ff]">FAQ</span>
            <h2 className="text-3xl font-extrabold text-white mt-2">Software Development Queries</h2>
          </div>

          <div className="space-y-4">
            {softwareFaqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-slate-800 rounded-2xl bg-slate-900/40 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-semibold text-white hover:text-[#00e599] transition-colors"
                >
                  <span className="text-base pr-4">{faq.question}</span>
                  {openFaq === idx ? (
                    <Minus className="w-5 h-5 text-[#00e599] shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-emerald-950/70 border border-slate-700/80 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Ready to engineer your custom software?</h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2">Connect with our solutions architects to design your enterprise system blueprint.</p>
            </div>
            <a 
              href="#contact" 
              className="shrink-0 bg-[#00e599] hover:bg-[#00c885] text-slate-950 font-bold px-7 py-3 rounded-full text-sm transition-all duration-200 shadow-xl shadow-[#00e599]/20"
            >
              Consult an Architect
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}