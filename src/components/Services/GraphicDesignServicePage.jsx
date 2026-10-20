import React, { useState } from 'react';
import { 
  Palette, 
  PenTool, 
  Layers, 
  Sparkles, 
  Image as ImageIcon, 
  FileText, 
  Monitor, 
  Share2, 
  ArrowRight, 
  Plus, 
  Minus,
  CheckCircle2,
  Box
} from 'lucide-react';

export default function GraphicDesignServicePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const designServices = [
    {
      icon: <PenTool className="w-7 h-7 text-[#00d2ff]" />,
      title: "Brand Identity & Logo Systems",
      desc: "Distinctive logo design, comprehensive brand guidelines, color harmony palettes, typography systems, and scalable brand books."
    },
    {
      icon: <Monitor className="w-7 h-7 text-[#00e599]" />,
      title: "UI/UX & Digital Assets",
      desc: "High-converting web interfaces, mobile app screens, interactive prototypes, icon sets, and vector illustrations."
    },
    {
      icon: <Share2 className="w-7 h-7 text-[#00d2ff]" />,
      title: "Marketing & Social Media Creatives",
      desc: "Performance marketing creatives, display ads, engaging LinkedIn/Instagram assets, and campaign banners engineered for click-through rate."
    },
    {
      icon: <FileText className="w-7 h-7 text-[#00e599]" />,
      title: "Corporate & Print Collateral",
      desc: "Print-ready brochures, corporate pitch decks, annual reports, product catalogs, roll-up banners, and business stationery."
    },
    {
      icon: <Box className="w-7 h-7 text-[#00d2ff]" />,
      title: "Packaging & Merchandise Design",
      desc: "3D packaging renders, retail box layouts, label guidelines, and custom branded enterprise merchandise assets."
    },
    {
      icon: <Sparkles className="w-7 h-7 text-[#00e599]" />,
      title: "Infographics & Data Visualization",
      desc: "Transforming dense data sheets and technical architectures into clear, compelling, executive-ready visual narratives."
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      badge: "RESEARCH",
      title: "Brand Discovery & Briefing",
      desc: "Brand voice, competitor landscape, target audience aesthetics, aur core deliverables define karna."
    },
    {
      step: "02",
      badge: "CONCEPT",
      title: "Moodboards & Creative Concepting",
      desc: "Visual directions, style sheets, aur creative iterations ko narrow down karke review karna."
    },
    {
      step: "03",
      badge: "CRAFT",
      title: "Pixel-Perfect Execution",
      desc: "High-resolution design production, asset hierarchy refinement, aur brand guidelines align karna."
    },
    {
      step: "04",
      badge: "DELIVERY",
      title: "Production-Ready Handover",
      desc: "Print-ready CMYK files, web-optimized SVG/WebP assets, source vector files (.ai, .fig), aur font licensing guide."
    }
  ];

  const designTools = [
    { domain: "Interface & Product Design", tools: "Figma, Adobe XD, Sketch, Principle" },
    { domain: "Vector & Illustration", tools: "Adobe Illustrator, CorelDRAW, Procreate" },
    { domain: "Photo Editing & Manipulation", tools: "Adobe Photoshop, Lightroom" },
    { domain: "3D Renders & Motion", tools: "Blender, Cinema 4D, Adobe After Effects" }
  ];

  const designFaqs = [
    {
      question: "Do you deliver vector and editable source files?",
      answer: "Yes, once final approvals are in place, we deliver all open editable files (.AI, .PSD, .FIG) alongside web-ready (SVG, WebP, PNG) and print-ready high-DPI PDFs."
    },
    {
      question: "Can you refresh our existing brand identity without losing brand equity?",
      answer: "Absolutely. We specialize in brand modernizations where we retain your established recognition while streamlining typography, logos, and visual rules for modern high-resolution screens."
    },
    {
      question: "What is the typical turnaround time for a complete branding package?",
      answer: "A complete brand identity system (logo marks, color systems, typography, and collateral guides) typically takes 2 to 3 weeks including structured revision rounds."
    },
    {
      question: "Do you provide design support on a retainer basis?",
      answer: "Yes, we offer ongoing design sprint retainers for companies that need regular marketing banners, feature decks, social collateral, and UI updates on demand."
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
              <Palette className="w-4 h-4 text-[#00e599]" />
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Practice Area • Visual Strategy
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Impactful Visuals That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#00e599]">
                Define & Elevate Brands
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              We translate business narratives into cohesive, high-performance visual systems. From digital product UI to corporate identity, we engineer designs that command attention.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-[#00e599] hover:bg-[#00c885] text-slate-950 font-bold px-7 py-3.5 rounded-full text-sm transition-all duration-200 shadow-lg shadow-[#00e599]/20"
              >
                Discuss Design Scope <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 bg-slate-900/60 text-slate-200 font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-200"
              >
                Explore Offerings
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section id="services" className="py-20 bg-[#03112b] border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00e599]">Design Verticals</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">Full-Spectrum Graphic & Brand Design</h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">Precision-crafted visuals for corporate, digital, and marketing ecosystems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designServices.map((item, idx) => (
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

      {/* DESIGN FRAMEWORK */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00d2ff]">Methodology</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">The Creative Pipeline</h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">From conceptual sketches to multi-format asset delivery.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((st, idx) => (
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

      {/* DESIGN TOOLS / SOFTWARE STACK */}
      <section className="py-20 bg-[#03112b] border-t border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00e599]">Tools & Platforms</span>
            <h2 className="text-3xl font-extrabold text-white mt-2">Design Suite & Creative Tools</h2>
          </div>

          <div className="divide-y divide-slate-800 border border-slate-800 rounded-2xl bg-slate-900/60 overflow-hidden">
            {designTools.map((suite, idx) => (
              <div key={idx} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-base font-bold text-white w-56 shrink-0">{suite.domain}</span>
                <span className="text-sm text-slate-400 font-mono">{suite.tools}</span>
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
            <h2 className="text-3xl font-extrabold text-white mt-2">Design Queries Answered</h2>
          </div>

          <div className="space-y-4">
            {designFaqs.map((faq, idx) => (
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
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Need compelling visuals that set you apart?</h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2">Let our design team build a recognizable and enduring visual identity for your brand.</p>
            </div>
            <a 
              href="#contact" 
              className="shrink-0 bg-[#00e599] hover:bg-[#00c885] text-slate-950 font-bold px-7 py-3 rounded-full text-sm transition-all duration-200 shadow-xl shadow-[#00e599]/20"
            >
              Start Creative Project
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}