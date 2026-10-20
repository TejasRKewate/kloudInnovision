import React, { useState } from 'react';
import { 
  TrendingUp, 
  Search, 
  Share2, 
  Target, 
  Mail, 
  BarChart3, 
  ArrowRight, 
  Sparkles, 
  Plus, 
  Minus 
} from 'lucide-react';

export default function DigitalMarketingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  const services = [
    {
      icon: <Search className="w-7 h-7 text-[#00d2ff]" />,
      title: "Search Engine Optimization (SEO)",
      desc: "Technical site audits, high-intent keyword strategies, high-authority backlink building, aur Google Core Web Vitals optimization."
    },
    {
      icon: <Target className="w-7 h-7 text-[#00e599]" />,
      title: "Performance Ads (PPC & Meta)",
      desc: "Targeted Google Ads, Meta (FB/IG) campaigns, aur LinkedIn Sponsored Content jisme direct ROAS aur lower acquisition cost par focus hota hai."
    },
    {
      icon: <Share2 className="w-7 h-7 text-[#00d2ff]" />,
      title: "Social Media Strategy & Growth",
      desc: "Platform-specific content calendaring, organic audience engagement, reels/shorts distribution, aur community management."
    },
    {
      icon: <BarChart3 className="w-7 h-7 text-[#00e599]" />,
      title: "Conversion Rate Optimization (CRO)",
      desc: "Heatmap analysis, user journey tracking, A/B landing page split-testing, aur checkout flow friction reduction."
    },
    {
      icon: <Mail className="w-7 h-7 text-[#00d2ff]" />,
      title: "Email & Funnel Automation",
      desc: "Automated drip campaigns, personalized customer onboarding workflows, aur behavioral retention triggers via tools like Klaviyo/Brevo."
    },
    {
      icon: <TrendingUp className="w-7 h-7 text-[#00e599]" />,
      title: "Data Analytics & Attribution",
      desc: "GA4 setup, Meta Conversion API (CAPI), multi-touch attribution dashboards, aur transparent executive monthly reporting."
    }
  ];

  const processSteps = [
    { step: "01", badge: "AUDIT", title: "Market & Funnel Audit", desc: "Current conversion leaks, audience demographics, aur competitor positioning analyze karna." },
    { step: "02", badge: "STRATEGY", title: "Omnichannel Roadmap", desc: "Organic content, high-intent search ads, aur retargeting loops ka full plan taiyar karna." },
    { step: "03", badge: "DEPLOY", title: "Execution & Testing", desc: "Creative ad copies, optimized landing pages live karna aur continuous A/B split testing run karna." },
    { step: "04", badge: "SCALE", title: "Optimization & Scaling", desc: "Winning campaigns me ad-spend scale karna aur overall customer acquisition cost (CAC) optimize karna." }
  ];

  const tools = [
    { category: "Analytics & Tracking", list: "Google Analytics 4, Mixpanel, Hotjar, Meta Pixel & CAPI" },
    { category: "SEO & Keyword Research", list: "SEMrush, Ahrefs, Google Search Console, Screaming Frog" },
    { category: "Paid Advertising", list: "Google Ads, Meta Ads Manager, LinkedIn Campaign Manager" },
    { category: "Automation & CRMs", list: "HubSpot, Klaviyo, Brevo, Mailchimp" }
  ];

  const faqs = [
    {
      q: "SEO ke measurable results dekhne me kitna samay lagta hai?",
      a: "Competitive search landscape me visible keyword rank jumps aur sustained organic traffic 3 se 6 mahine me compound hona shuru hoti hai."
    },
    {
      q: "Paid ad campaigns ka budget kiske ad account se spend hota hai?",
      a: "Aapka poora control aapke apne verified ad account par rehta hai. Billing directly Google/Meta ko hoti hai, hum agency management aur optimization handle karte hain."
    },
    {
      q: "Kya aap landing page design aur copy bhi cover karte hain?",
      a: "Haan, high-converting copywriting, UI layout design aur conversion-optimized development hamari marketing sprint ka standard hissa hai."
    }
  ];

  return (
    <div className="bg-[#020b1e] text-slate-100 min-h-screen font-sans selection:bg-[#00e599] selection:text-black">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#0051ff]/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 mb-6">
              <Sparkles className="w-4 h-4 text-[#00e599]" />
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Practice Area • Growth & Revenue</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Data-Driven <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#00e599]">Digital Marketing & Growth</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              Hum vanity metrics ke peeche nahi bhagte. Hamara digital marketing engine qualified leads generate karne aur sustained revenue growth ke liye optimize hota hai.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-[#00e599] hover:bg-[#00c885] text-slate-950 font-bold px-7 py-3.5 rounded-full text-sm transition-all shadow-lg shadow-[#00e599]/20">
                Launch Growth Campaign <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#services" className="border border-slate-700 hover:border-slate-500 bg-slate-900/60 text-slate-200 font-semibold px-7 py-3.5 rounded-full text-sm transition-all">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-[#03112b] border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00e599]">Marketing Suite</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">Full-Funnel Growth Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-800/90 rounded-2xl p-7 hover:border-slate-700 transition duration-300">
                <div className="w-14 h-14 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-center mb-6">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2.5">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00d2ff]">Execution</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">Our 4-Stage Marketing Engine</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((st, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="text-3xl font-black text-[#00d2ff] mb-2">{st.step}</div>
                <div className="text-xs font-bold text-[#00e599] tracking-wider mb-2">{st.badge}</div>
                <h3 className="text-base font-bold text-white mb-2">{st.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Table */}
      <section className="py-20 bg-[#03112b] border-t border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00e599]">MarTech Stack</span>
            <h2 className="text-3xl font-extrabold text-white mt-2">Marketing Platforms & Intelligence</h2>
          </div>
          <div className="divide-y divide-slate-800 border border-slate-800 rounded-2xl bg-slate-900/60 overflow-hidden">
            {tools.map((tool, idx) => (
              <div key={idx} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-base font-bold text-white w-56 shrink-0">{tool.category}</span>
                <span className="text-sm text-slate-400 font-mono">{tool.list}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00d2ff]">FAQ</span>
            <h2 className="text-3xl font-extrabold text-white mt-2">Digital Marketing Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-800 rounded-2xl bg-slate-900/40 overflow-hidden">
                <button onClick={() => toggleFaq(idx)} className="w-full p-5 text-left flex items-center justify-between font-semibold text-white hover:text-[#00e599] transition-colors">
                  <span className="text-base pr-4">{faq.q}</span>
                  {openFaq === idx ? <Minus className="w-5 h-5 text-[#00e599]" /> : <Plus className="w-5 h-5 text-slate-400" />}
                </button>
                {openFaq === idx && <div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 pt-4">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}