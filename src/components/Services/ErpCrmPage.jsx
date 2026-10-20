import React, { useState } from 'react';
import { 
  Boxes, 
  Users, 
  Workflow, 
  FileSpreadsheet, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Plus, 
  Minus,
  CheckCircle2
} from 'lucide-react';

export default function ErpCrmPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  const modules = [
    {
      icon: <Users className="w-7 h-7 text-[#00d2ff]" />,
      title: "Omnichannel Lead & CRM Pipeline",
      desc: "Centralized customer contact profiles, visual pipeline deal stages, call/email logs, aur automated lead-scoring mechanics."
    },
    {
      icon: <Boxes className="w-7 h-7 text-[#00e599]" />,
      title: "Inventory & Supply Chain ERP",
      desc: "Real-time stock valuation across multiple warehouses, low-stock reorder triggers, purchase order workflows, aur supplier tracking."
    },
    {
      icon: <FileSpreadsheet className="w-7 h-7 text-[#00d2ff]" />,
      title: "Finance, Billing & GST Compliance",
      desc: "Automated recurring invoicing, multi-currency accounts, accounts payable/receivable, aur automated GST e-way bill generation."
    },
    {
      icon: <Workflow className="w-7 h-7 text-[#00e599]" />,
      title: "HRMS & Employee Attendance",
      desc: "Biometric clock-in sync, leave quota approvals, computerized salary slip generation, aur performance appraisal cycles."
    },
    {
      icon: <TrendingUp className="w-7 h-7 text-[#00d2ff]" />,
      title: "Custom Executive Dashboards",
      desc: "Role-based BI dashboards jo leadership ko gross revenue, operating costs, aur live operational bottleneck alerts display karte hain."
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#00e599]" />,
      title: "Departmental Role Access (RBAC)",
      desc: "Strict field-level data privacy aur granular permissions ensuring har department ko sirf unke relevant data ka access mile."
    }
  ];

  const deploymentPhases = [
    { step: "01", badge: "MAPPING", title: "Process Mapping & Blueprint", desc: "Aapke business ke operational departments, workflows aur data dependency graph ko formalize karna." },
    { step: "02", badge: "CUSTOMIZE", title: "Schema Design & Integration", desc: "Custom database models, internal reporting forms, aur existing tools (WhatsApp API, Payment Gateway) ka integration." },
    { step: "03", badge: "MIGRATE", title: "Legacy Data Migration", desc: "Excel sheets ya purane software se clean structured database migration bina data discrepancy ke." },
    { step: "04", badge: "DEPLOY", title: "Staff Training & Cutover", desc: "Department-wise employee interactive training aur secure cloud server launch." }
  ];

  const faqs = [
    {
      q: "Kya ye custom ERP humare specific business workflow ke hisab se modify ho sakta hai?",
      a: "Haan, hum off-the-shelf restrictive systems ke bajaye bespoke architecture build karte hain jisme aapke company ke operational rules ke hisab se forms, approvals aur reports customize kiye jate hain."
    },
    {
      q: "Aapke system me kitne concurrent users login kar sakte hain?",
      a: "Hamara microservices/modular backend horizontal scaling support karta hai, jo 10 users se lekar hazaron employees ko bina delay handle kar sakta hai."
    },
    {
      q: "Hamare existing Excel sheets ka data ERP me kaise import hoga?",
      a: "Hum standardized data validation scripts create karte hain jo aapke existing product, customer aur ledger data ko automatically sanitize karke nayi database me inject kar dete hain."
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
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Practice Area • Enterprise Automation</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Integrated <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#00e599]">ERP & CRM Systems</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              Fragmented spreadsheets aur disconnected tools ko replace karein. Ek unified platform par sales pipeline, inventory, billing aur team operations ko streamline karein.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-[#00e599] hover:bg-[#00c885] text-slate-950 font-bold px-7 py-3.5 rounded-full text-sm transition-all shadow-lg shadow-[#00e599]/20">
                Schedule ERP Demo <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#modules" className="border border-slate-700 hover:border-slate-500 bg-slate-900/60 text-slate-200 font-semibold px-7 py-3.5 rounded-full text-sm transition-all">
                View System Modules
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="py-20 bg-[#03112b] border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00e599]">Modules</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">Centralized Enterprise Management</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((item, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-800/90 rounded-2xl p-7 hover:border-slate-700 transition duration-300">
                <div className="w-14 h-14 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-center mb-6">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2.5">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Stages */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00d2ff]">Rollout Protocol</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">4-Phase Implementation Cycle</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deploymentPhases.map((st, idx) => (
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

      {/* FAQs */}
      <section className="py-20 bg-[#03112b] border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00d2ff]">FAQ</span>
            <h2 className="text-3xl font-extrabold text-white mt-2">ERP & CRM Inquiries</h2>
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