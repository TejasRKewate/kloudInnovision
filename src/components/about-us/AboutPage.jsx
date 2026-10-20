import React, { useState } from 'react';
import { 
  Target, 
  Compass, 
  Award, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  Globe2, 
  PhoneCall, 
  Menu, 
  X 
} from 'lucide-react';

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const stats = [
    { label: "Years of Experience", value: "10+" },
    { label: "Successful Projects", value: "250+" },
    { label: "Global Clients", value: "120+" },
    { label: "Client Retention", value: "98%" },
  ];

  const coreValues = [
    {
      icon: <Target className="w-8 h-8 text-[#00e599]" />,
      title: "Client-Centric Innovation",
      desc: "Hum complex business problems ko cutting-edge tech aur personalized solutions ke sath solve karte hain."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#00d2ff]" />,
      title: "Trust & Transparency",
      desc: "Open communication aur security best practices ke sath har level par integrity maintain karte hain."
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#00e599]" />,
      title: "Modern Engineering",
      desc: "Cloud, AI aur enterprise architectures ka perfect balance banakar future-ready platforms deliver karte hain."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#00d2ff]" />,
      title: "Measurable Impact",
      desc: "Sirf code deliver karna nahi, balki clear business ROI aur growth drive karna hamara primary goal hai."
    }
  ];

  const milestones = [
    { year: "2016", title: "Foundation", desc: "Digital transformation aur cloud consultancy ke vision ke sath shuruat hui." },
    { year: "2019", title: "Global Expansion", desc: "Enterprise clients ke sath APAC aur global markets me footprint badhaya." },
    { year: "2023", title: "AI & Cloud Integration", desc: "AI-driven automation aur advanced data analytics capabilities integrate kiye." },
    { year: "2026", title: "Next-Gen Innovision", desc: "Multi-cloud ecosystems aur intelligent digital solutions deliver kar rahe hain." }
  ];

  const teamMembers = [
    {
      name: "Leadership Team",
      role: "Strategy & Tech Architects",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Engineering Division",
      role: "Cloud & AI Developers",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Consulting Specialists",
      role: "Process & Delivery Experts",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="bg-[#020b1e] text-slate-100 min-h-screen font-sans selection:bg-[#00e599] selection:text-black">
      
      {/* NAVBAR */ }
      
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#020b1e]/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-black tracking-tight text-white">
              Kloud<span className="text-[#00e599]">InnoVisionZ</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/about" className="text-[#00e599] font-semibold">About Us</a>
            <a href="#services" className="hover:text-white transition-colors">Practice Areas</a>
            <a href="#industries" className="hover:text-white transition-colors">Industries</a>
            <a href="#insights" className="hover:text-white transition-colors">Insights</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
          </div>

          <div className="hidden md:flex">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-[#00e599] hover:bg-[#00c885] text-slate-950 font-bold px-5 py-2.5 rounded-full text-sm transition-all duration-200 shadow-lg shadow-[#00e599]/20"
            >
              Let's Talk <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <button 
            className="md:hidden text-slate-300 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#051330] border-b border-slate-800 px-6 py-4 space-y-3">
            <a href="/" className="block text-slate-300 hover:text-white">Home</a>
            <a href="/about" className="block text-[#00e599] font-semibold">About Us</a>
            <a href="#services" className="block text-slate-300 hover:text-white">Practice Areas</a>
            <a href="#contact" className="block text-slate-300 hover:text-white">Contact Us</a>
            <a 
              href="#contact" 
              className="inline-block text-center w-full bg-[#00e599] text-slate-950 font-bold py-2.5 rounded-full text-sm mt-2"
            >
              Let's Talk
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#0051ff]/20 to-[#00e599]/15 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#00e599] uppercase mb-4">
            Transforming Vision Into Value
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
            Pioneering Digital Excellence Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#00e599]">Strategy & Tech</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Kloud InnoVisionZ businesses ko modernize karne, operational hurdles solve karne aur future-ready digital platforms banane ke liye commit hai.
          </p>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((item, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#00e599]">{item.value}</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION SECTION */}
      <section className="py-16 md:py-24 bg-[#03112b] border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            <div className="bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-8 sm:p-10 rounded-3xl border border-slate-800 relative group hover:border-[#00d2ff]/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#00d2ff]/10 flex items-center justify-center mb-6">
                <Compass className="w-6 h-6 text-[#00d2ff]" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Global businesses ke liye sabse trusted innovation partner banna, jo agile technologies, automation, aur reliable cloud systems ke through real-world business outcomes deliver kare.
              </p>
            </div>

            <div className="bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-8 sm:p-10 rounded-3xl border border-slate-800 relative group hover:border-[#00e599]/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#00e599]/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#00e599]" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Complex enterprise workflows ko simplify karna, secure scalable software design karna aur AI-driven automation ke zariye organizations ko unki industry me aage rakhna.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00e599]">What Drives Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">Our Guiding Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl hover:border-slate-700 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-5">{val.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY & TIMELINE */}
      <section className="py-20 bg-[#03112b] border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00d2ff]">Milestones</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">The Kloud Journey</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl font-black text-[#00d2ff] mb-2">{item.year}</div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00e599]">The Minds Behind</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">Our Dedicated Team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40">
                <div className="h-60 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <p className="text-sm text-slate-400 mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-emerald-950/70 border border-slate-700/80 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Let's build your next chapter—together.</h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2">Technology should empower your vision, not stand in its way.</p>
            </div>
            <a 
              href="#contact" 
              className="shrink-0 bg-[#00e599] hover:bg-[#00c885] text-slate-950 font-bold px-7 py-3 rounded-full text-sm transition-all duration-200 shadow-xl shadow-[#00e599]/20"
            >
              Schedule a Strategy Session
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-[#010714] py-12 text-sm text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2026 Kloud InnoVisionZ. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition">Terms of Service</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}