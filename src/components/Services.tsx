"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Monitor, Cpu, MessageSquare, BarChart3, ShoppingBag, Briefcase, Globe, Settings, Plus, Star } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="text-sm font-semibold text-primary-accent uppercase tracking-wider mb-3 block">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-text mb-4 text-balance">
            Digital Solutions Built for Performance
          </h2>
          <p className="text-base md:text-lg text-secondary-text font-normal text-balance">
            We don’t just write code. We build custom visual interfaces and robust digital platforms that drive business outcomes.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Card 1: Custom Websites (col-span-7) */}
          <div className="md:col-span-12 lg:col-span-7 group bg-slate-50 border border-border-custom hover:border-blue-200 rounded-card p-8 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 min-h-[480px]">
            <div>
              <span className="text-[10px] font-bold text-primary-accent bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider border border-blue-100 select-none">
                Bespoke Engineering
              </span>
              <h3 className="text-2xl font-extrabold text-primary-text mt-4 mb-2 text-balance">
                Custom Websites
              </h3>
              <p className="text-sm text-secondary-text max-w-md font-normal leading-relaxed text-pretty">
                Bespoke, high-performance Next.js architectures hand-coded to load in under a second and convert visitors into paying clients.
              </p>
            </div>
            
            {/* Visual Mockup: Browser + Phone */}
            <div className="relative w-full h-[200px] mt-6 flex items-end justify-center select-none">
              {/* Desktop Browser Mockup */}
              <div className="w-[85%] h-[180px] bg-white rounded-t-xl border border-slate-200 shadow-sm overflow-hidden transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-slate-50 border-b border-slate-100 px-3 py-2 flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <div className="w-32 h-3.5 bg-white border border-slate-200/60 rounded-md ml-3" />
                </div>
                <div className="p-4 space-y-3">
                  <div className="w-[40%] h-4 bg-slate-200 rounded-sm" />
                  <div className="w-[90%] h-2.5 bg-slate-100 rounded-sm" />
                  <div className="w-[75%] h-2.5 bg-slate-100 rounded-sm" />
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="h-10 bg-slate-50 border border-slate-100 rounded-lg" />
                    <div className="h-10 bg-slate-50 border border-slate-100 rounded-lg" />
                    <div className="h-10 bg-slate-50 border border-slate-100 rounded-lg" />
                  </div>
                </div>
              </div>
              {/* Floating Mobile Preview Mockup */}
              <div className="absolute right-4 bottom-2 w-[70px] h-[140px] bg-slate-900 border border-slate-800 rounded-xl p-1 shadow-lg transform translate-y-3 group-hover:translate-y-1 transition-transform duration-300">
                <div className="w-full h-full bg-white rounded-lg overflow-hidden flex flex-col justify-between p-2">
                  <div className="w-3 h-1 bg-slate-200 rounded-full mx-auto mb-2" />
                  <div className="flex-grow space-y-1.5">
                    <div className="w-full h-2.5 bg-slate-200 rounded-2xs" />
                    <div className="w-4/5 h-1.5 bg-slate-100 rounded-2xs" />
                    <div className="w-[90%] h-[30px] bg-blue-50 border border-blue-100 rounded-xs" />
                  </div>
                  <div className="w-full h-4 bg-primary-accent rounded-sm" />
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919962852828?text=Hi%20UserXpert%2C%20I%20want%20to%20discuss%20building%20a%20Custom%20Website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-bold text-primary-text hover:text-primary-accent transition-colors pt-4 group-hover:translate-x-1 duration-200 gap-1.5 mt-4"
            >
              <span>Build Custom Site</span>
              <ArrowRight className="w-4 h-4 text-secondary-text group-hover:text-primary-accent transition-colors" aria-hidden="true" />
            </a>
          </div>

          {/* Card 2: Website Redesign (col-span-5) */}
          <div className="md:col-span-12 lg:col-span-5 group bg-slate-50 border border-border-custom hover:border-blue-200 rounded-card p-8 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 min-h-[480px]">
            <div>
              <span className="text-[10px] font-bold text-primary-accent bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider border border-blue-100 select-none">
                Modernization
              </span>
              <h3 className="text-2xl font-extrabold text-primary-text mt-4 mb-2 text-balance">
                Website Redesign
              </h3>
              <p className="text-sm text-secondary-text max-w-sm font-normal leading-relaxed text-pretty">
                Transform dated website interfaces into fast, accessible digital storefronts with structured user paths.
              </p>
            </div>

            {/* Visual Mockup: Before / After Split */}
            <div className="relative w-full h-[200px] mt-6 flex items-center justify-center select-none overflow-hidden rounded-xl border border-slate-200 shadow-2xs bg-white">
              {/* Before Side (Left 45%) */}
              <div className="absolute left-0 top-0 bottom-0 w-[45%] bg-orange-50/50 p-4 border-r border-slate-200/80 flex flex-col justify-center space-y-2">
                <span className="text-[8px] font-bold text-red-500 bg-red-50 border border-red-100 px-1.5 py-0.5 rounded-sm w-fit uppercase select-none">Old Layout</span>
                <div className="h-4 w-4/5 bg-red-200/50 rounded-sm" />
                <div className="h-2 w-[90%] bg-slate-200/60 rounded-xs" />
                <div className="h-6 w-3/5 bg-red-600/30 rounded-xs" />
              </div>
              
              {/* Redesign Arrow Indicator */}
              <div className="absolute left-[45%] -translate-x-1/2 w-8 h-8 rounded-full bg-primary-accent border-2 border-white shadow-sm flex items-center justify-center text-white z-10 font-bold text-xs select-none">
                →
              </div>

              {/* After Side (Right 55%) */}
              <div className="absolute right-0 top-0 bottom-0 w-[55%] p-4 flex flex-col justify-center space-y-2.5 bg-white transform group-hover:scale-[1.02] transition-transform duration-300">
                <span className="text-[8px] font-bold text-green-600 bg-green-50 border border-green-100 px-1.5 py-0.5 rounded-sm w-fit uppercase select-none">Redesigned</span>
                <div className="h-4.5 w-3/4 bg-slate-900/5 rounded-md relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-2/3 bg-blue-100/40" />
                </div>
                <div className="h-2.5 w-[85%] bg-slate-100 rounded-sm" />
                <div className="h-7 w-full bg-primary-accent rounded-button" />
              </div>
            </div>

            <a
              href="https://wa.me/919962852828?text=Hi%20UserXpert%2C%20I%20want%20to%20discuss%20Redesigning%20my%20existing%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-bold text-primary-text hover:text-primary-accent transition-colors pt-4 group-hover:translate-x-1 duration-200 gap-1.5 mt-4"
            >
              <span>Modernize My Site</span>
              <ArrowRight className="w-4 h-4 text-secondary-text group-hover:text-primary-accent transition-colors" aria-hidden="true" />
            </a>
          </div>

          {/* Card 3: Analytics Dashboards (col-span-4) */}
          <div className="md:col-span-6 lg:col-span-4 group bg-slate-50 border border-border-custom hover:border-blue-200 rounded-card p-8 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 min-h-[440px]">
            <div>
              <span className="text-[10px] font-bold text-primary-accent bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider border border-blue-100 select-none">
                Data Reporting
              </span>
              <h3 className="text-xl font-extrabold text-primary-text mt-4 mb-2 text-balance">
                Analytics Dashboards
              </h3>
              <p className="text-xs text-secondary-text leading-relaxed text-pretty font-normal">
                Google Analytics, operations data, and Stripe pipelines consolidated into custom dashboard interfaces.
              </p>
            </div>

            {/* Visual Mockup: Charts & KPIs */}
            <div className="w-full bg-white border border-slate-200 rounded-xl p-4 shadow-2xs mt-6 space-y-3.5 select-none transform group-hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400">Monthly Revenue</span>
                <span className="text-[10px] font-bold text-green-500 bg-green-50 border border-green-100 px-1 rounded-sm">▲ 18.2%</span>
              </div>
              <div className="text-xl font-extrabold text-primary-text tabular-nums">₹4,82,900</div>
              
              {/* Graphical Line SVG Mockup */}
              <div className="w-full h-[60px] relative overflow-hidden flex items-end">
                <svg className="w-full h-full text-primary-accent" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <path
                    d="M0,35 Q15,10 30,25 T60,5 T90,20 T100,10 L100,40 L0,40 Z"
                    fill="url(#grad)"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(37, 99, 235, 0.2)" />
                      <stop offset="100%" stopColor="rgba(37, 99, 235, 0.0)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <a
              href="https://wa.me/919962852828?text=Hi%20UserXpert%2C%20I%20want%20to%20discuss%20building%20an%20Analytics%20Dashboard."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-bold text-primary-text hover:text-primary-accent transition-colors pt-4 group-hover:translate-x-1 duration-200 gap-1.5 mt-4"
            >
              <span>Build Dashboard</span>
              <ArrowRight className="w-4 h-4 text-secondary-text group-hover:text-primary-accent transition-colors" aria-hidden="true" />
            </a>
          </div>

          {/* Card 4: AI Chatbots (col-span-4) */}
          <div className="md:col-span-6 lg:col-span-4 group bg-slate-50 border border-border-custom hover:border-blue-200 rounded-card p-8 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 min-h-[440px]">
            <div>
              <span className="text-[10px] font-bold text-primary-accent bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider border border-blue-100 select-none">
                AI Assistants
              </span>
              <h3 className="text-xl font-extrabold text-primary-text mt-4 mb-2 text-balance">
                AI Chatbots
              </h3>
              <p className="text-xs text-secondary-text leading-relaxed text-pretty font-normal">
                Intelligent agents trained on your documentation to qualify sales leads and answer FAQs 24/7.
              </p>
            </div>

            {/* Visual Mockup: Chat Dialog bubbles */}
            <div className="w-full bg-white border border-slate-200 rounded-xl p-4 shadow-2xs mt-6 space-y-3.5 select-none text-[10px] transform group-hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center space-x-2 border-b border-slate-100 pb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="font-bold text-slate-500 uppercase tracking-wider">UserXpert AI</span>
              </div>
              <div className="space-y-2">
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 max-w-[85%] text-slate-600">
                  Hi! I can suggest plans or book a demo. What are we building?
                </div>
                <div className="bg-primary-accent text-white p-2.5 rounded-lg max-w-[80%] ml-auto text-right">
                  A custom checkout portal.
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919962852828?text=Hi%20UserXpert%2C%20I%20want%20to%20discuss%20setting%20up%20an%20AI%20Chatbot%20for%20my%20site."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-bold text-primary-text hover:text-primary-accent transition-colors pt-4 group-hover:translate-x-1 duration-200 gap-1.5 mt-4"
            >
              <span>Deploy Bot</span>
              <ArrowRight className="w-4 h-4 text-secondary-text group-hover:text-primary-accent transition-colors" aria-hidden="true" />
            </a>
          </div>

          {/* Card 5: Business Automation (col-span-4) */}
          <div className="md:col-span-12 lg:col-span-4 group bg-slate-50 border border-border-custom hover:border-blue-200 rounded-card p-8 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 min-h-[440px]">
            <div>
              <span className="text-[10px] font-bold text-primary-accent bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider border border-blue-100 select-none">
                Task Automation
              </span>
              <h3 className="text-xl font-extrabold text-primary-text mt-4 mb-2 text-balance">
                Business Automation
              </h3>
              <p className="text-xs text-secondary-text leading-relaxed text-pretty font-normal">
                Eradicate manual spreadsheets and repetitive tasks by connecting your tools and databases automatically.
              </p>
            </div>

            {/* Visual Mockup: Connected nodes flow diagram */}
            <div className="w-full bg-white border border-slate-200 rounded-xl p-4 shadow-2xs mt-6 flex flex-col justify-between min-h-[120px] select-none text-[10px] transform group-hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center justify-between bg-slate-50 border border-slate-100 p-2 rounded-lg">
                <span className="font-bold text-primary-text">Lead Captured</span>
                <span className="text-[9px] text-slate-400">Web Form</span>
              </div>
              <div className="w-[1.5px] h-3 bg-slate-200 mx-auto" />
              <div className="flex items-center justify-between bg-blue-50 border border-blue-100 p-2 rounded-lg">
                <span className="font-bold text-primary-accent">CRM Sync & Qualify</span>
                <span className="text-[9px] text-primary-accent bg-blue-100/50 px-1 rounded-sm">Active</span>
              </div>
              <div className="w-[1.5px] h-3 bg-slate-200 mx-auto" />
              <div className="flex items-center justify-between bg-slate-50 border border-slate-100 p-2 rounded-lg">
                <span className="font-bold text-primary-text">Slack Alert Ping</span>
                <span className="text-[9px] text-slate-400">Instant</span>
              </div>
            </div>

            <a
              href="https://wa.me/919962852828?text=Hi%20UserXpert%2C%20I%20want%20to%20discuss%20Business%20Automation%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-bold text-primary-text hover:text-primary-accent transition-colors pt-4 group-hover:translate-x-1 duration-200 gap-1.5 mt-4"
            >
              <span>Automate Workflows</span>
              <ArrowRight className="w-4 h-4 text-secondary-text group-hover:text-primary-accent transition-colors" aria-hidden="true" />
            </a>
          </div>

          {/* Card 6: Ecommerce Solutions (col-span-6) */}
          <div className="md:col-span-12 lg:col-span-6 group bg-slate-50 border border-border-custom hover:border-blue-200 rounded-card p-8 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 min-h-[460px]">
            <div>
              <span className="text-[10px] font-bold text-primary-accent bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider border border-blue-100 select-none">
                E-Commerce
              </span>
              <h3 className="text-2xl font-extrabold text-primary-text mt-4 mb-2 text-balance">
                Ecommerce Solutions
              </h3>
              <p className="text-sm text-secondary-text max-w-sm font-normal leading-relaxed text-pretty">
                Tailored product galleries, optimized fast checkout flows, and payment gateway integrations.
              </p>
            </div>

            {/* Visual Mockup: Product checkout mockup */}
            <div className="w-full mt-6 grid grid-cols-5 gap-4 select-none">
              {/* Product item (Col span 3) */}
              <div className="col-span-3 bg-white border border-slate-200 rounded-xl p-4 shadow-2xs transform group-hover:-translate-y-1 transition-transform duration-300">
                <div className="aspect-[4/3] bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 text-xs font-semibold mb-3">
                  Product Image
                </div>
                <div className="text-xs font-bold text-primary-text">Bespoke Table Lamp</div>
                <div className="text-[11px] font-semibold text-secondary-text mt-1">₹2,499</div>
                <div className="flex gap-1.5 mt-3">
                  <div className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center text-[9px] font-bold text-slate-500 bg-slate-50">S</div>
                  <div className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center text-[9px] font-bold text-slate-500 bg-slate-50">M</div>
                  <div className="w-5 h-5 rounded-full border-2 border-primary-accent flex items-center justify-center text-[9px] font-bold text-primary-accent bg-blue-50">L</div>
                </div>
              </div>

              {/* Checkout status overlay panel (Col span 2) */}
              <div className="col-span-2 bg-white border border-slate-200 rounded-xl p-3.5 shadow-md flex flex-col justify-between max-h-[140px] transform translate-y-6 group-hover:translate-y-4 transition-transform duration-300">
                <div className="space-y-1.5">
                  <div className="text-[9px] font-extrabold text-slate-400 uppercase">Cart Status</div>
                  <div className="text-[11px] font-extrabold text-primary-text">1 Item Selected</div>
                </div>
                <button className="w-full bg-success-custom text-white text-[9px] font-bold py-2 rounded-button flex items-center justify-center gap-1 shadow-2xs">
                  Checkout →
                </button>
              </div>
            </div>

            <a
              href="https://wa.me/919962852828?text=Hi%20UserXpert%2C%20I%20want%20to%20discuss%20E-commerce%20Solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-bold text-primary-text hover:text-primary-accent transition-colors pt-4 group-hover:translate-x-1 duration-200 gap-1.5 mt-4"
            >
              <span>Launch E-store</span>
              <ArrowRight className="w-4 h-4 text-secondary-text group-hover:text-primary-accent transition-colors" aria-hidden="true" />
            </a>
          </div>

          {/* Card 7: Portfolio Websites (col-span-6) */}
          <div className="md:col-span-12 lg:col-span-6 group bg-slate-50 border border-border-custom hover:border-blue-200 rounded-card p-8 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 min-h-[460px]">
            <div>
              <span className="text-[10px] font-bold text-primary-accent bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider border border-blue-100 select-none">
                Bespoke Showcases
              </span>
              <h3 className="text-2xl font-extrabold text-primary-text mt-4 mb-2 text-balance">
                Portfolio Websites
              </h3>
              <p className="text-sm text-secondary-text max-w-sm font-normal leading-relaxed text-pretty">
                Creative, asymmetrical layouts highlighting your project galleries and details with premium finishes.
              </p>
            </div>

            {/* Visual Mockup: Artistic deck layers */}
            <div className="relative w-full h-[180px] mt-6 flex items-center justify-center select-none overflow-hidden rounded-xl border border-slate-200 bg-white">
              {/* Background abstract art box */}
              <div className="absolute top-4 left-6 w-[120px] h-[100px] bg-slate-100 rounded-md border border-slate-200 transform -rotate-6 transition-transform duration-300 group-hover:-rotate-3" />
              
              {/* Main offset portfolio card */}
              <div className="absolute right-6 bottom-4 w-[160px] h-[120px] bg-white border border-slate-200/80 rounded-lg p-3 shadow-md transform rotate-3 transition-transform duration-300 group-hover:rotate-0 flex flex-col justify-between">
                <div className="flex items-center justify-between text-[8px] text-slate-400 font-bold">
                  <span>Architecture Portfolio</span>
                  <span>© 2026</span>
                </div>
                <div className="text-xs font-black text-slate-800 tracking-tight leading-none mt-2">
                  Minimalist Concrete Villa
                </div>
                <div className="w-full h-[50px] bg-slate-100 rounded-sm border border-slate-200/50 flex items-center justify-center text-[9px] font-semibold text-slate-400 mt-2">
                  Gallery Preview
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919962852828?text=Hi%20UserXpert%2C%20I%20want%20to%20discuss%20building%20a%20Portfolio%20Website."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-bold text-primary-text hover:text-primary-accent transition-colors pt-4 group-hover:translate-x-1 duration-200 gap-1.5 mt-4"
            >
              <span>Showcase Work</span>
              <ArrowRight className="w-4 h-4 text-secondary-text group-hover:text-primary-accent transition-colors" aria-hidden="true" />
            </a>
          </div>

          {/* Card 8: Landing Pages (col-span-4) */}
          <div className="md:col-span-6 lg:col-span-4 group bg-slate-50 border border-border-custom hover:border-blue-200 rounded-card p-8 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 min-h-[460px]">
            <div>
              <span className="text-[10px] font-bold text-primary-accent bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider border border-blue-100 select-none">
                Conversion Funnels
              </span>
              <h3 className="text-xl font-extrabold text-primary-text mt-4 mb-2 text-balance">
                Landing Pages
              </h3>
              <p className="text-xs text-secondary-text leading-relaxed text-pretty font-normal">
                Conversion-focused single page funnels built to transform ads traffic into active sales qualified leads.
              </p>
            </div>

            {/* Visual Mockup: Landing Hero Mockup */}
            <div className="w-full bg-white border border-slate-200 rounded-xl p-4 shadow-2xs mt-6 space-y-3 select-none text-center transform group-hover:-translate-y-1 transition-transform duration-300">
              <span className="inline-block text-[8px] bg-blue-50 border border-blue-100 text-primary-accent px-2 py-0.5 rounded-full uppercase font-bold">New Release</span>
              <div className="text-xs font-extrabold tracking-tight text-primary-text max-w-[140px] mx-auto text-balance leading-tight">
                Scale Your Agency In Days
              </div>
              <button className="bg-primary-accent text-white text-[9px] font-bold px-3 py-1.5 rounded-button shadow-2xs">
                Request Demo
              </button>
            </div>

            <a
              href="https://wa.me/919962852828?text=Hi%20UserXpert%2C%20I%20want%20to%20discuss%20building%20a%20custom%20Landing%20Page."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-bold text-primary-text hover:text-primary-accent transition-colors pt-4 group-hover:translate-x-1 duration-200 gap-1.5 mt-4"
            >
              <span>Build Page</span>
              <ArrowRight className="w-4 h-4 text-secondary-text group-hover:text-primary-accent transition-colors" aria-hidden="true" />
            </a>
          </div>

          {/* Card 9: Internal Business Tools (col-span-8) */}
          <div className="md:col-span-6 lg:col-span-8 group bg-slate-50 border border-border-custom hover:border-blue-200 rounded-card p-8 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 min-h-[460px]">
            <div>
              <span className="text-[10px] font-bold text-primary-accent bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider border border-blue-100 select-none">
                Enterprise Dashboards
              </span>
              <h3 className="text-2xl font-extrabold text-primary-text mt-4 mb-2 text-balance">
                Internal Business Tools
              </h3>
              <p className="text-sm text-secondary-text max-w-lg font-normal leading-relaxed text-pretty">
                Custom inventory panels, operational databases, CRM consoles, and employee panels built to sync metrics instantly.
              </p>
            </div>

            {/* Visual Mockup: Admin CRM directory list */}
            <div className="w-full bg-white border border-slate-200 rounded-xl p-4 shadow-2xs mt-6 space-y-3 select-none text-[10px] transform group-hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-slate-800">User Management Portal</span>
                <span className="text-slate-400 font-bold bg-slate-100 px-2 py-0.5 rounded-sm">24 Active</span>
              </div>
              <div className="space-y-2">
                {/* CRM table rows */}
                <div className="flex items-center justify-between py-1.5 border-b border-slate-50">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center font-bold text-[8px]">JD</div>
                    <span className="font-semibold text-primary-text">Jane Doe</span>
                  </div>
                  <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-100 text-[8px] font-bold">Admin</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center font-bold text-[8px]">AS</div>
                    <span className="font-semibold text-primary-text">Alex Smith</span>
                  </div>
                  <span className="text-slate-500 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100 text-[8px] font-semibold">Operator</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919962852828?text=Hi%20UserXpert%2C%20I%20want%20to%20discuss%20building%20Custom%20Internal%20Business%20Tools."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-bold text-primary-text hover:text-primary-accent transition-colors pt-4 group-hover:translate-x-1 duration-200 gap-1.5 mt-4"
            >
              <span>Design Custom Tool</span>
              <ArrowRight className="w-4 h-4 text-secondary-text group-hover:text-primary-accent transition-colors" aria-hidden="true" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
