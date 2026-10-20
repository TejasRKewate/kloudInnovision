import  { useState } from 'react';
import { 
  Smartphone, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Cloud, 
  ArrowRight, 
  CheckCircle2, 
  Plus, 
  Minus,
  Sparkles,
  GitBranch,
  Terminal,
  RefreshCw
} from 'lucide-react';

export default function MobileAppService() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const appServices = [
    {
      icon: <Smartphone className="w-7 h-7 text-[#00d2ff]" />,
      title: "Cross-Platform App Development",
      desc: "High-performance apps for both iOS and Android from a unified codebase using React Native and Flutter, reducing time-to-market and development costs."
    },
    {
      icon: <Cpu className="w-7 h-7 text-[#00e599]" />,
      title: "Native iOS & Android Apps",
      desc: "Platform-specific engineering using Swift and Kotlin to leverage native hardware acceleration, complex animations, and biometric APIs."
    },
    {
      icon: <Layers className="w-7 h-7 text-[#00d2ff]" />,
      title: "Mobile UI/UX Design Systems",
      desc: "Intuitive touch journeys, gesture-driven navigation, and accessible mobile interfaces complying strictly with Apple Human Interface & Material Design guidelines."
    },
    {
      icon: <Cloud className="w-7 h-7 text-[#00e599]" />,
      title: "Cloud Backend & API Integration",
      desc: "Real-time sync, microservice architecture, push notifications, offline caching, and payment gateway integration via secure GraphQL/REST endpoints."
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#00d2ff]" />,
      title: "Enterprise Mobile Security",
      desc: "End-to-end data encryption, OWASP Mobile Security verification, OAuth2/Biometric authentication, and secure local device storage."
    },
    {
      icon: <RefreshCw className="w-7 h-7 text-[#00e599]" />,
      title: "App Store Deployment & CI/CD",
      desc: "Complete handling of Apple App Store and Google Play submissions, compliance audits, OTA (over-the-air) updates, and continuous maintenance."
    }
  ];

  const developmentSteps = [
    {
      step: "01",
      badge: "STRATEGY",
      title: "Architecture & User Journey",
      desc: "Target operating platforms, offline storage requirements, API contracts, aur user flows define karna."
    },
    {
      step: "02",
      badge: "PROTOTYPING",
      title: "Interactive Clickable Prototypes",
      desc: "Mobile UI wireframes, motion micro-interactions, aur interactive mobile simulations ka validation."
    },
    {
      step: "03",
      badge: "CORE BUILD",
      title: "Sprint-Based Engineering",
      desc: "Clean modular code writing, state management setup (Redux/Zustand), aur backend synchronization."
    },
    {
      step: "04",
      badge: "RELEASE",
      title: "Store Approval & Optimization",
      desc: "Automated regression testing across multiple physical devices, store listing compliance, aur production rollout."
    }
  ];

  const mobileTechStack = [
    { platform: "Cross-Platform", frameworks: "React Native, Expo, Flutter" },
    { platform: "Native Ecosystems", frameworks: "Swift, SwiftUI (iOS) • Kotlin, Jetpack Compose (Android)" },
    { platform: "Backend & Sync", frameworks: "Node.js, Express, Firebase, GraphQL, WebSockets" },
    { platform: "Database & Storage", frameworks: "SQLite, WatermelonDB, Realm, MMKV, Redis" },
    { platform: "Mobile DevOps", frameworks: "Fastlane, GitHub Actions, EAS (Expo Application Services), Bitrise" }
  ];

  const appFaqs = [
    {
      question: "Cross-platform (React Native/Flutter) ya native development me se kya choose karein?",
      answer: "Agar aapko fastest time-to-market, single shared codebase aur cost-efficient scaling chahiye, toh React Native ya Flutter best hai. Agar aapko heavy AR/VR hardware manipulation, low-level Bluetooth devices ya graphics-intensive compute chahiye, toh Native (Swift/Kotlin) recommend kiya jata hai."
    },
    {
      question: "Kya aap App Store aur Google Play Store par publishing process manage karte hain?",
      answer: "Haan, hum Apple App Store aur Google Play Store ke saare review guidelines, developer account configurations, privacy manifests, screenshots, aur app approval pipelines handle karte hain."
    },
    {
      question: "Mobile app me offline mode functionality kaise handle hoti hai?",
      answer: "Hum local persistent storage (jaise MMKV, SQLite ya WatermelonDB) ke sath offline-first architecture design karte hain, jisse network restore hone par backend ke sath data automatically reconcile ho jata hai."
    },
    {
      question: "App launch ke baad updates aur maintenance ka kya support hai?",
      answer: "Hum post-launch monitoring, OS version updates (iOS/Android updates), crash analytics, aur fast over-the-air (OTA) updates ke liye dedicated maintenance retainers provide karte hain."
    }
  ];

  return (
    <div className="bg-[#020b1e] text-slate-100 min-h-screen font-sans selection:bg-[#00e599] selection:text-black">

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#0051ff]/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[420px] h-[420px] bg-[#00e599]/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 mb-6">
              <Sparkles className="w-4 h-4 text-[#00e599]" />
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Practice Area • Mobile Engineering
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              High-Performance <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#00e599]">
                Mobile App Development
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              From intuitive consumer products to complex enterprise field-force tools, we engineer scalable, lightning-fast iOS & Android applications with native-feel performance.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-[#00e599] hover:bg-[#00c885] text-slate-950 font-bold px-7 py-3.5 rounded-full text-sm transition-all duration-200 shadow-lg shadow-[#00e599]/20"
              >
                Discuss App Architecture <ArrowRight className="w-4 h-4" />
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

      {/* CORE CAPABILITIES GRID */}
      <section id="services" className="py-20 bg-[#03112b] border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00e599]">Mobile Engineering</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">End-to-End App Solutions</h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">Architected for frictionless user experience and high device responsiveness.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appServices.map((service, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/50 border border-slate-800/90 hover:border-slate-700 rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-center mb-6 group-hover:scale-105 transition duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5">{service.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY LIFECYCLE */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00d2ff]">Mobile Roadmap</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">How We Build Scalable Apps</h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">Iterative sprints from initial wireframing to production store rollout.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentSteps.map((st, idx) => (
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

      {/* TECH STACK SECTION */}
      <section className="py-20 bg-[#03112b] border-t border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00e599]">Frameworks & Tools</span>
            <h2 className="text-3xl font-extrabold text-white mt-2">Mobile Technology Stack</h2>
          </div>

          <div className="divide-y divide-slate-800 border border-slate-800 rounded-2xl bg-slate-900/60 overflow-hidden">
            {mobileTechStack.map((item, idx) => (
              <div key={idx} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-base font-bold text-white w-52 shrink-0">{item.platform}</span>
                <span className="text-sm text-slate-400 font-mono">{item.frameworks}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00d2ff]">FAQ</span>
            <h2 className="text-3xl font-extrabold text-white mt-2">Mobile Engineering Questions</h2>
          </div>

          <div className="space-y-4">
            {appFaqs.map((faq, idx) => (
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
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Have a mobile app concept ready to build?</h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2">Connect with our product engineers to map your mobile roadmap.</p>
            </div>
            <a 
              href="#contact" 
              className="shrink-0 bg-[#00e599] hover:bg-[#00c885] text-slate-950 font-bold px-7 py-3 rounded-full text-sm transition-all duration-200 shadow-xl shadow-[#00e599]/20"
            >
              Start App Development
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}