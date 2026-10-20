import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Smartphone, 
  Zap, 
  Database, 
  ShieldCheck, 
  ChevronRight, 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  Plus, 
  Minus,
  Sparkles,
  Cpu,
  MonitorCheck
} from 'lucide-react';

export default function WebDevelopmentServicePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const capabilities = [
    {
      icon: <Layout className="w-7 h-7 text-[#00d2ff]" />,
      title: "Custom Web Applications",
      description: "Tailored frontend & backend solutions designed to handle high transaction volumes and complex business workflows with zero lag."
    },
    {
      icon: <Smartphone className="w-7 h-7 text-[#00e599]" />,
      title: "Responsive & Modern UI/UX",
      description: "Pixel-perfect mobile, tablet, and desktop interfaces crafted with accessibility, intuitive UX, and rapid user conversion in mind."
    },
    {
      icon: <Database className="w-7 h-7 text-[#00d2ff]" />,
      title: "API & Headless CMS Architecture",
      description: "Microservices and clean REST/GraphQL APIs powering headless platforms, CRM systems, and unified enterprise portals."
    },
    {
      icon: <Zap className="w-7 h-7 text-[#00e599]" />,
      title: "Performance & SEO Optimization",
      description: "Sub-second load times, core web vitals optimization, modern edge caching, and crawl-friendly architectures."
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#00d2ff]" />,
      title: "Security & Cloud Scalability",
      description: "Built-in RBAC authentication, end-to-end data encryption, and automatic scaling via AWS, Azure, or GCP infrastructure."
    },
    {
      icon: <Cpu className="w-7 h-7 text-[#00e599]" />,
      title: "Maintenance & Continuous CI/CD",
      description: "Automated pipelines, ongoing patch management, uptime monitoring, and fast feature rollout without downtime."
    }
  ];

  const frameworkSteps = [
    {
      step: "01",
      name: "DISCOVERY & ARCHITECTURE",
      title: "Scope & Tech Stack Mapping",
      desc: "Hum aapke requirements, data model, aur business targets ka analysis karke optimal stack decide karte hain."
    },
    {
      step: "02",
      name: "PROTOTYPING & UX",
      title: "Interactive Prototypes",
      desc: "Figma wireframes aur UX flows design hote hain jo conversion aur usability standards par benchmarked hote hain."
    },
    {
      step: "03",
      name: "ENGINEERING",
      title: "Agile Development & Integrations",
      desc: "Clean modular code writing, secure database schemas, aur third-party services ka seamless integration."
    },
    {
      step: "04",
      name: "QA & LAUNCH",
      title: "Testing, Audit & Deployment",
      desc: "Performance stress testing, security vulnerabilities check, aur cloud servers par live deployment."
    }
  ];

  const techStack = [
    { category: "Frontend", tools: "React.js, Next.js, Tailwind CSS, TypeScript, Vue" },
    { category: "Backend", tools: "Node.js, Express, Python, NestJS, Go" },
    { category: "Databases", tools: "PostgreSQL, MongoDB, MySQL, Redis" },
    { category: "Cloud & DevOps", tools: "AWS, Docker, Kubernetes, CI/CD Actions, Vercel" },
  ];

  const serviceFaqs = [
    {
      question: "Which tech stack do you recommend for enterprise web applications?",
      answer: "We primarily utilize React/Next.js for blazing fast frontend experiences, coupled with Node.js/Express or Python microservices and PostgreSQL/MongoDB databases to guarantee scalability, security, and developer productivity."
    },
    {
      question: "Do you build custom platforms or use templates?",
      answer: "Every solution we deliver is custom-engineered from the ground up according to your specific functional requirements, user journeys, and brand identity, without relying on bloated generic templates."
    },
    {
      question: "How do you ensure responsiveness and mobile optimization?",
      answer: "We adopt a mobile-first philosophy using modern CSS grids, Tailwind layouts, and automated viewport testing across smartphones, tablets, laptops, and ultra-wide screens."
    },
    {
      question: "Do you offer post-launch maintenance and feature updates?",
      answer: "Yes, we provide flexible SLA-backed maintenance packages covering real-time server monitoring, bug fixes, routine security audits, and continuous iterative development."
    }
  ];

  return (
    <div className="bg-[#020b1e] text-slate-100 min-h-screen font-sans selection:bg-[#00e599] selection:text-black">

      {/* SERVICE HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Glow Gradients */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0051ff]/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#00e599]/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 mb-6">
              <Sparkles className="w-4 h-4 text-[#00e599]" />
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Practice Area • Engineering
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Enterprise-Grade <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#00e599]">
                Web Design & Development
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              We design and build robust, high-performance web applications that convert visitors, automate backend complexity, and scale seamlessly with business growth.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-[#00e599] hover:bg-[#00c885] text-slate-950 font-bold px-7 py-3.5 rounded-full text-sm transition-all duration-200 shadow-lg shadow-[#00e599]/20"
              >
                Start Your Project <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#process" 
                className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 bg-slate-900/60 text-slate-200 font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-200"
              >
                Our Methodology
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="py-20 bg-[#03112b] border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00e599]">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">Full-Cycle Web Solutions</h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">From conceptual design systems to scalable production infrastructure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/50 border border-slate-800/90 hover:border-slate-700 rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-center mb-6 group-hover:scale-105 transition duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS / FRAMEWORK */}
      <section id="process" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00d2ff]">The Kloud Way</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">Our Engineering Process</h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">Structured, transparent, and iterative delivery cycles.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {frameworkSteps.map((st, idx) => (
              <div key={idx} className="relative p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="text-3xl font-black text-[#00d2ff] mb-2">{st.step}</div>
                <div className="text-xs font-bold text-[#00e599] tracking-wider mb-2">{st.name}</div>
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
            <span className="text-xs uppercase font-bold tracking-widest text-[#00e599]">Tools & Standards</span>
            <h2 className="text-3xl font-extrabold text-white mt-2">Modern Technology Stack</h2>
          </div>

          <div className="divide-y divide-slate-800 border border-slate-800 rounded-2xl bg-slate-900/60 overflow-hidden">
            {techStack.map((stack, idx) => (
              <div key={idx} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-base font-bold text-white w-44 shrink-0">{stack.category}</span>
                <span className="text-sm text-slate-400 font-mono">{stack.tools}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00d2ff]">Frequently Asked Questions</span>
            <h2 className="text-3xl font-extrabold text-white mt-2">Answers To Common Inquiries</h2>
          </div>

          <div className="space-y-4">
            {serviceFaqs.map((faq, idx) => (
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

      {/* CONVERSION BANNER */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-emerald-950/70 border border-slate-700/80 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Ready to modernize your web presence?</h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2">Discuss technical architecture, timelines, and scope with our leads.</p>
            </div>
            <a 
              href="#contact" 
              className="shrink-0 bg-[#00e599] hover:bg-[#00c885] text-slate-950 font-bold px-7 py-3 rounded-full text-sm transition-all duration-200 shadow-xl shadow-[#00e599]/20"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}