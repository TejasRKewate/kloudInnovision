import React, { useState } from 'react';
import { 
  Server, 
  Globe2, 
  ShieldCheck, 
  Cpu, 
  HardDrive, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Plus, 
  Minus,
  CheckCircle2
} from 'lucide-react';

export default function DomainHostingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  const hostingPlans = [
    {
      title: "Shared Cloud Hosting",
      price: "₹299",
      period: "/month",
      desc: "Small business websites aur portfolios ke liye high-speed SSD cPanel hosting.",
      features: ["5 Hosted Websites", "50 GB NVMe Storage", "Free SSL Certificates", "Unlimited Bandwidth", "Automated Weekly Backups"]
    },
    {
      title: "Managed VPS Cloud",
      price: "₹1,499",
      period: "/month",
      featured: true,
      desc: "Fast growing e-commerce aur custom web apps ke liye dedicated isolated resources.",
      features: ["4 vCPU Cores & 8 GB RAM", "160 GB Pure NVMe SSD", "Dedicated Static IP", "Full Root SSH Access", "DDoS Shield + Daily Backups", "24/7 Priority Monitoring"]
    },
    {
      title: "Enterprise Dedicated Server",
      price: "₹6,999",
      period: "/month",
      desc: "Mission-critical applications aur enterprise software ke liye full bare-metal performance.",
      features: ["16-Core Xeon Processor", "64 GB DDR4 ECC RAM", "1 TB NVMe RAID-1 Storage", "Multi-Tier Hardware Firewall", "10 Gbps Port Speed", "Dedicated Account Engineer"]
    }
  ];

  const features = [
    {
      icon: <Globe2 className="w-7 h-7 text-[#00d2ff]" />,
      title: "Domain Management & DNS",
      desc: ".com, .in, .org aur enterprise TLDs ka instant registration, DNS propagation within minutes, aur privacy protection."
    },
    {
      icon: <Clock className="w-7 h-7 text-[#00e599]" />,
      title: "99.99% Uptime SLA",
      desc: "Redundant cloud clusters aur self-healing network routing ke sath zero downtime commitment."
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#00d2ff]" />,
      title: "Active DDoS Protection",
      desc: "Multi-layered real-time filtering jo volumetric cyber attacks ko border level par hi block kar deta hai."
    },
    {
      icon: <HardDrive className="w-7 h-7 text-[#00e599]" />,
      title: "Automated Off-Site Backups",
      desc: "Daily snapshots aur 1-click restore functionality jo disaster recovery ko seamless banati hai."
    }
  ];

  const faqs = [
    {
      q: "Kya purane host se website migration free hai?",
      a: "Haan, hamari server support team aapke existing hosting se poora data, databases aur email accounts bina kisi downtime ke free me migrate karti hai."
    },
    {
      q: "Server data centers kahan locate hain?",
      a: "Hamare Tier-4 cloud data centers India (Mumbai/Bangalore), Singapore, Frankfurt aur USA me available hain, jisse aap low latency choose kar sakte hain."
    },
    {
      q: "Free SSL certificate kaise configure hota hai?",
      a: "Domain connect hote hi Let's Encrypt Wildcard SSL automatically provision aur auto-renew ho jata hai."
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
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Practice Area • Cloud Infrastructure</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Ultra-Fast & Secure <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#00e599]">Domain & Cloud Hosting</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              High-speed NVMe servers, unmetered network pipelines, aur enterprise-grade DDoS mitigation jo aapke digital business ko 24/7 lightning fast rakhe.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-[#03112b] border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00e599]">Hosting Plans</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">Engineered For Reliability</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hostingPlans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`p-8 rounded-3xl border flex flex-col justify-between ${
                  plan.featured 
                    ? 'bg-slate-900 border-[#00e599]/80 shadow-xl shadow-[#00e599]/10 relative' 
                    : 'bg-slate-900/40 border-slate-800'
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00e599] text-slate-950 text-xs font-black uppercase px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-bold text-white">{plan.title}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                    <span className="text-sm text-slate-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">{plan.desc}</p>
                  <div className="mt-6 space-y-3 pt-6 border-t border-slate-800">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#00e599] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <a 
                  href="#contact" 
                  className={`mt-8 w-full text-center py-3 rounded-full text-xs font-bold transition-all ${
                    plan.featured 
                      ? 'bg-[#00e599] hover:bg-[#00c885] text-slate-950' 
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  Configure Server
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Highlights */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-slate-800/90 rounded-2xl p-6">
                <div className="mb-4">{feat.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-[#03112b] border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00d2ff]">FAQ</span>
            <h2 className="text-3xl font-extrabold text-white mt-2">Server & Hosting Questions</h2>
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