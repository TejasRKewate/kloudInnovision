import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Filter, 
  Layers, 
  Cpu, 
  Smartphone, 
  Globe 
} from 'lucide-react';

export default function ProjectPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web Apps', 'Mobile Apps', 'ERP & CRM', 'Cloud & DevOps'];

  const projects = [
    {
      id: 1,
      title: "Manufacturing Automation ERP System",
      client: "Precision Forge Ltd",
      category: "ERP & CRM",
      description: "End-to-end shop floor tracking, machine IoT integration, raw material purchase pipelines, aur automated GST e-way compliance.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      impact: [
        { metric: "40%", label: "Increase in Efficiency" },
        { metric: "30%", label: "Cost Reduction" },
        { metric: "2.5x", label: "Faster Dispatch Cycles" }
      ],
      tags: ["React.js", "Node.js", "PostgreSQL", "Docker", "Tailwind CSS"],
      link: "#"
    },
    {
      id: 2,
      title: "Omnichannel Logistics & Fleet Portal",
      client: "Apex Freight Logistics",
      category: "Web Apps",
      description: "Real-time GPS vehicle tracking, automated route load planning, digital proof-of-delivery (e-POD), aur payment gateway integration.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      impact: [
        { metric: "99.8%", label: "On-Time Deliveries" },
        { metric: "25%", label: "Fuel Cost Savings" },
        { metric: "15k+", label: "Daily Shipments" }
      ],
      tags: ["Next.js", "Express.js", "Redis", "Google Maps API", "Socket.io"],
      link: "#"
    },
    {
      id: 3,
      title: "FinTech Micro-Lending Mobile App",
      client: "CredPulse Technologies",
      category: "Mobile Apps",
      description: "Paperless instant KYC, automated credit-bureau score check, dynamic EMI calculation, aur secure biometric authentication.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      impact: [
        { metric: "3 min", label: "Average Loan Sanction" },
        { metric: "120k+", label: "Active Mobile Users" },
        { metric: "4.8★", label: "Play Store Rating" }
      ],
      tags: ["React Native", "Expo", "Python FastAPI", "AES-256", "AWS"],
      link: "#"
    },
    {
      id: 4,
      title: "Multi-Tenant Healthcare Patient Portal",
      client: "MediCare Clinical Group",
      category: "Web Apps",
      description: "HIPAA-compliant patient record management, automated doctor appointment scheduling, lab report downloads, aur video consultations.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      impact: [
        { metric: "85%", label: "Zero Front-Desk Wait" },
        { metric: "50k+", label: "Consultations Completed" },
        { metric: "100%", label: "HIPAA Compliance" }
      ],
      tags: ["React.js", "WebRTC", "MongoDB", "Tailwind CSS", "GCP"],
      link: "#"
    },
    {
      id: 5,
      title: "Enterprise Multi-Cloud Infrastructure Migration",
      client: "Vanguard Retailers",
      category: "Cloud & DevOps",
      description: "Transitioning monolithic on-premises databases into distributed Kubernetes clusters with zero application downtime during Black Friday peaks.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      impact: [
        { metric: "99.99%", label: "Peak Uptime Maintained" },
        { metric: "45%", label: "Server Cost Reduction" },
        { metric: "10x", label: "Faster CI/CD Deployments" }
      ],
      tags: ["Kubernetes", "Docker", "Terraform", "AWS EKS", "Prometheus"],
      link: "#"
    },
    {
      id: 6,
      title: "Real Estate Property CRM & Sales Engine",
      client: "Skyline Properties",
      category: "ERP & CRM",
      description: "Automated WhatsApp inquiry capture, interactive 3D floor plan viewers, broker commission payouts, aur executive pipeline analytics.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      impact: [
        { metric: "3.2x", label: "Lead-to-Booking Ratio" },
        { metric: "₹180Cr", label: "Inventory Managed" },
        { metric: "65%", label: "Faster Follow-ups" }
      ],
      tags: ["React.js", "Node.js", "MySQL", "Tailwind CSS", "WhatsApp Cloud API"],
      link: "#"
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#020b1e] text-slate-100 min-h-screen font-sans selection:bg-[#00e599] selection:text-black">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#0051ff]/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[420px] h-[420px] bg-[#00e599]/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 mb-6">
              <Sparkles className="w-4 h-4 text-[#00e599]" />
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Proven Track Record • Case Studies
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Real Challenges. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#00e599]">
                Measurable Impact.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              Explore how we have engineered custom digital architectures, automated critical operations, and built platforms that scale with market demand.
            </p>
          </div>

          {/* OVERVIEW STATS */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 backdrop-blur-sm">
              <div className="text-3xl font-extrabold text-[#00e599]">250+</div>
              <div className="text-xs text-slate-400 mt-1">Completed Deliveries</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 backdrop-blur-sm">
              <div className="text-3xl font-extrabold text-[#00d2ff]">12+</div>
              <div className="text-xs text-slate-400 mt-1">Industries Served</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 backdrop-blur-sm">
              <div className="text-3xl font-extrabold text-[#00e599]">98%</div>
              <div className="text-xs text-slate-400 mt-1">Client Retention</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 backdrop-blur-sm">
              <div className="text-3xl font-extrabold text-[#00d2ff]">24/7</div>
              <div className="text-xs text-slate-400 mt-1">SLA Uptime Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <section className="sticky top-20 z-40 bg-[#020b1e]/95 backdrop-blur-md border-y border-slate-800/80 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <Filter className="w-4 h-4 text-slate-400 shrink-0 mr-2" />
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#00e599] text-slate-950 shadow-md shadow-[#00e599]/20'
                    : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-20 bg-[#03112b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    
                    <span className="absolute top-4 left-4 bg-[#020b1e]/80 backdrop-blur-md border border-slate-700 text-[#00d2ff] text-xs font-bold px-3 py-1 rounded-full">
                      {project.category}
                    </span>

                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                        Client • {project.client}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00e599] transition-colors leading-snug">
                        {project.title}
                      </h2>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Impact Stats */}
                    <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 mb-6">
                      {project.impact.map((imp, iIdx) => (
                        <div key={iIdx} className="text-center">
                          <div className="text-lg sm:text-xl font-black text-[#00e599]">{imp.metric}</div>
                          <div className="text-[11px] text-slate-400 leading-tight mt-0.5">{imp.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-800/70 text-slate-300 border border-slate-700/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 border-t border-slate-800/60 mt-auto flex items-center justify-between">
                  <span className="text-xs text-slate-400">Enterprise Case Study</span>
                  <a 
                    href={project.link} 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00e599] hover:underline"
                  >
                    View Architecture & Details <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-emerald-950/70 border border-slate-700/80 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Have a critical project in mind?</h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2">Let our engineering leads map the technical scope, milestones, and deliverables.</p>
            </div>
            <a 
              href="#contact" 
              className="shrink-0 bg-[#00e599] hover:bg-[#00c885] text-slate-950 font-bold px-7 py-3 rounded-full text-sm transition-all duration-200 shadow-xl shadow-[#00e599]/20"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}