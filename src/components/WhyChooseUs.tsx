"use client";

import { motion } from "framer-motion";
import { Check, ShieldAlert, Laptop, Eye, Star, Lock, Sparkles, Terminal, Code, ArrowRight, Plus } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-50 border-y border-border-custom scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-sm font-semibold text-primary-accent uppercase tracking-wider mb-3 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-text mb-4 text-balance">
            Designed to Help Your Business Grow
          </h2>
          <p className="text-base md:text-lg text-secondary-text font-normal text-balance">
            We combine thoughtful design, modern technology, and practical business thinking to build digital experiences that deliver real results—not just beautiful screens.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Card 1: Performance (col-span-8) */}
          <div className="md:col-span-12 lg:col-span-8 group bg-white border border-border-custom rounded-card p-8 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 min-h-[380px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
              <div className="space-y-4">
                <span className="text-xs font-bold text-green-600 bg-green-50 border border-green-100 px-3 py-1 rounded-full uppercase tracking-wider select-none">
                  98 Performance Score
                </span>
                <h3 className="text-2xl font-extrabold text-primary-text text-balance">
                  Fast from the first click
                </h3>
                <p className="text-sm text-secondary-text leading-relaxed text-pretty font-normal">
                  Pages load in seconds, keeping visitors engaged and improving conversion metrics. Optimized to pass Google’s Core Web Vitals from day one.
                </p>
              </div>

              {/* Lighthouse gauge animation mockup */}
              <div className="flex justify-center items-center select-none relative h-full min-h-[180px]">
                {/* Circular Gauge */}
                <div className="relative w-36 h-36 rounded-full border-4 border-slate-100 flex items-center justify-center bg-white shadow-2xs transform group-hover:scale-105 transition-transform duration-300">
                  <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                    <circle
                      cx="72"
                      cy="72"
                      r="64"
                      className="text-green-500"
                      strokeWidth="6"
                      stroke="currentColor"
                      fill="transparent"
                      strokeDasharray="402"
                      strokeDashoffset="10" // Represents 98%
                    />
                  </svg>
                  <div className="text-center">
                    <div className="text-4xl font-black text-green-600 tracking-tight tabular-nums">98</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Performance</div>
                  </div>
                </div>
                {/* Floating Speed Badges */}
                <div className="absolute top-2 left-6 bg-slate-900 text-white font-mono text-[9px] px-2 py-1 rounded-md shadow-sm">
                  LCP 0.8s
                </div>
                <div className="absolute bottom-2 right-6 bg-slate-900 text-white font-mono text-[9px] px-2 py-1 rounded-md shadow-sm">
                  CLS 0.01
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Mobile Experience (col-span-4) */}
          <div className="md:col-span-12 lg:col-span-4 group bg-white border border-border-custom rounded-card p-8 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 min-h-[380px]">
            <div>
              <span className="text-[10px] font-bold text-primary-accent bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider border border-blue-100 select-none">
                Mobile First
              </span>
              <h3 className="text-xl font-extrabold text-primary-text mt-4 mb-2 text-balance">
                Designed for every screen
              </h3>
              <p className="text-xs text-secondary-text leading-relaxed text-pretty font-normal">
                Your website feels natural whether customers visit from a phone, tablet, or desktop screen.
              </p>
            </div>

            {/* Visual: Smartphone Mockup */}
            <div className="w-full h-[150px] mt-6 flex justify-center items-end select-none">
              <div className="w-[85px] h-[160px] bg-slate-900 border border-slate-800 rounded-t-2xl p-1.5 shadow-lg transform translate-y-3 group-hover:translate-y-1 transition-all duration-300 flex flex-col">
                <div className="w-6 h-1 bg-slate-800 rounded-full mx-auto mb-2" />
                <div className="flex-grow bg-slate-50 rounded-lg p-2 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="h-3 w-4/5 bg-slate-200 rounded-xs" />
                    <div className="h-1.5 w-full bg-slate-100 rounded-xs" />
                    <div className="h-1.5 w-2/3 bg-slate-100 rounded-xs" />
                  </div>
                  <div className="h-6 w-full bg-primary-accent rounded-button shadow-2xs" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: SEO Foundation (col-span-5) */}
          <div className="md:col-span-12 lg:col-span-5 group bg-white border border-border-custom rounded-card p-8 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 min-h-[380px]">
            <div>
              <span className="text-[10px] font-bold text-primary-accent bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider border border-blue-100 select-none">
                SEO Optimized
              </span>
              <h3 className="text-xl font-extrabold text-primary-text mt-4 mb-2 text-balance">
                Built to be discovered
              </h3>
              <p className="text-xs text-secondary-text leading-relaxed text-pretty font-normal">
                Clean structure and semantic HTML tags help search engines understand and rank your business high on query sheets.
              </p>
            </div>

            {/* Visual: Google search result snippet */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 shadow-2xs mt-6 space-y-2 select-none text-[10px] transform group-hover:-translate-y-1 transition-transform duration-300 text-left">
              <div className="flex items-center space-x-1.5">
                <span className="text-slate-400">google.com/search</span>
              </div>
              <div className="text-blue-700 font-semibold text-xs border-b border-transparent group-hover:border-blue-700 w-fit">
                UserXpert | Custom Websites & AI Solutions
              </div>
              <div className="flex items-center space-x-1 text-amber-500">
                <span className="font-bold text-[9px] text-slate-500 mr-1">Rating: 4.9</span>
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" aria-hidden="true" />
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" aria-hidden="true" />
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" aria-hidden="true" />
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" aria-hidden="true" />
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" aria-hidden="true" />
              </div>
              <p className="text-[9px] text-slate-500 leading-normal font-normal">
                We design custom websites, automate tasks, and create AI chatbots that help modern businesses save time...
              </p>
            </div>
          </div>

          {/* Card 4: Custom Development (col-span-7) */}
          <div className="md:col-span-12 lg:col-span-7 group bg-white border border-border-custom rounded-card p-8 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 min-h-[380px]">
            <div>
              <span className="text-[10px] font-bold text-primary-accent bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider border border-blue-100 select-none">
                Hand-Coded Architecture
              </span>
              <h3 className="text-2xl font-extrabold text-primary-text mt-4 mb-2 text-balance">
                Made for your business
              </h3>
              <p className="text-sm text-secondary-text max-w-md font-normal leading-relaxed text-pretty">
                No bloated templates or heavy plugins. Every script is hand-crafted specifically around how your business operations work.
              </p>
            </div>

            {/* Visual: Code Editor + Browser mockup */}
            <div className="grid grid-cols-2 gap-4 mt-6 select-none text-[9px] font-mono">
              {/* Code Panel */}
              <div className="bg-slate-950 text-slate-300 rounded-xl p-3 border border-slate-900 shadow-sm max-h-[110px] overflow-hidden transform group-hover:-translate-y-1 transition-transform duration-300 text-left">
                <div className="flex items-center space-x-1.5 border-b border-slate-900 pb-1.5 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-[8px] text-slate-500 font-sans ml-2">page.tsx</span>
                </div>
                <div className="space-y-1 leading-normal font-normal">
                  <div><span className="text-purple-400">export default function</span> <span className="text-blue-400">App</span>() &#123;</div>
                  <div className="pl-3"><span className="text-purple-400">return</span> (</div>
                  <div className="pl-6 text-green-400">&lt;<span className="text-blue-400">Navbar</span> /&gt;</div>
                  <div className="pl-6 text-green-400">&lt;<span className="text-blue-400">BentoGrid</span> /&gt;</div>
                </div>
              </div>

              {/* Browser Preview Panel */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 shadow-sm max-h-[110px] overflow-hidden transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-1.5">
                  <div className="w-2.5 h-2.5 rounded-md bg-primary-accent flex items-center justify-center text-[7px] text-white font-sans font-bold">U</div>
                  <div className="w-16 h-2 bg-slate-200 rounded-xs" />
                </div>
                <div className="space-y-1.5 flex-grow pt-2">
                  <div className="w-full h-3 bg-white border border-slate-100 rounded-xs" />
                  <div className="w-3/4 h-2 bg-slate-100 rounded-xs" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Growth Ready (col-span-4) */}
          <div className="md:col-span-12 lg:col-span-4 group bg-white border border-border-custom rounded-card p-8 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 min-h-[360px]">
            <div>
              <span className="text-[10px] font-bold text-primary-accent bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider border border-blue-100 select-none">
                Built to Scale
              </span>
              <h3 className="text-xl font-extrabold text-primary-text mt-4 mb-2 text-balance">
                Scale without rebuilding
              </h3>
              <p className="text-xs text-secondary-text leading-relaxed text-pretty font-normal">
                Launch with what you need today and expand with new APIs, databases, or dashboards as your business grows.
              </p>
            </div>

            {/* Visual: Modular nodes diagram */}
            <div className="w-full mt-6 bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-2xs flex items-center justify-between min-h-[100px] select-none text-[9px] font-bold transform group-hover:scale-[1.02] transition-transform duration-300">
              <div className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-slate-800">
                Core Next.js
              </div>
              <div className="w-8 h-[1px] bg-dashed border-t border-slate-300" />
              <div className="bg-blue-50 border border-blue-100 text-primary-accent px-3 py-1.5 rounded-lg flex items-center gap-1">
                <Plus className="w-3 h-3" /> Stripe API
              </div>
            </div>
          </div>

          {/* Card 6: Secure Infrastructure (col-span-4) */}
          <div className="md:col-span-12 lg:col-span-4 group bg-white border border-border-custom rounded-card p-8 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 min-h-[360px]">
            <div>
              <span className="text-[10px] font-bold text-primary-accent bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider border border-blue-100 select-none">
                Always Secure
              </span>
              <h3 className="text-xl font-extrabold text-primary-text mt-4 mb-2 text-balance">
                Reliable and protected
              </h3>
              <p className="text-xs text-secondary-text leading-relaxed text-pretty font-normal">
                Hosted on secure global CDNs with automatic SSL certificates, encryption, and protection from day one.
              </p>
            </div>

            {/* Visual: Secure Shield Status Check */}
            <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-2xs mt-6 flex items-center justify-between min-h-[100px] select-none transform group-hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-green-50 text-success-custom flex items-center justify-center border border-green-100">
                  <Lock className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-extrabold text-slate-800">SSL Active</div>
                  <div className="text-[9px] text-slate-400">Connection is secure</div>
                </div>
              </div>
              <span className="text-[8px] bg-green-50 border border-green-100 text-green-600 px-2 py-0.5 rounded-full font-extrabold uppercase">Verified</span>
            </div>
          </div>

          {/* Card 7: Ongoing Partnership (col-span-4) */}
          <div className="md:col-span-12 lg:col-span-4 group bg-white border border-border-custom rounded-card p-8 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 min-h-[360px]">
            <div>
              <span className="text-[10px] font-bold text-primary-accent bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider border border-blue-100 select-none">
                Long-Term Support
              </span>
              <h3 className="text-xl font-extrabold text-primary-text mt-4 mb-2 text-balance">
                We’re here after launch
              </h3>
              <p className="text-xs text-secondary-text leading-relaxed text-pretty font-normal">
                Monthly analytics reviews, search console checks, performance audits, and revisions whenever you need them.
              </p>
            </div>

            {/* Visual: Horizontal checklist timeline */}
            <div className="w-full mt-6 bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-2xs flex flex-col justify-between min-h-[100px] select-none text-[10px] text-left transform group-hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center space-x-2">
                <div className="w-4.5 h-4.5 rounded-full bg-green-500 text-white flex items-center justify-center text-[9px]">✓</div>
                <span className="font-semibold text-slate-800">Weekly Security Audit</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4.5 h-4.5 rounded-full bg-green-500 text-white flex items-center justify-center text-[9px]">✓</div>
                <span className="font-semibold text-slate-800">Search Console Verify</span>
              </div>
            </div>
          </div>

          {/* Card 8: Modern Experience (col-span-12) */}
          <div className="md:col-span-12 group bg-white border border-border-custom rounded-card p-8 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 min-h-[320px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
              <div className="space-y-4">
                <span className="text-xs font-bold text-primary-accent bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wider select-none">
                  Editorial Layouts
                </span>
                <h3 className="text-2xl font-extrabold text-primary-text text-balance">
                  Designed to earn trust
                </h3>
                <p className="text-sm text-secondary-text leading-relaxed text-pretty font-normal">
                  Clean interfaces, thoughtful interactions, and a polished digital presentation that communicates quality. We construct a premium experience that reinforces the authority of your brand.
                </p>
              </div>

              {/* Design system UI composition elements */}
              <div className="flex flex-col gap-3 justify-center items-center select-none relative min-h-[160px]">
                {/* Floating buttons mockup */}
                <div className="flex gap-4 transform group-hover:scale-102 transition-transform duration-300">
                  <div className="px-5 py-2.5 rounded-button bg-primary-accent text-white font-bold text-xs shadow-xs">
                    Primary CTA Button
                  </div>
                  <div className="px-5 py-2.5 rounded-button bg-white border border-slate-200 text-slate-800 font-bold text-xs shadow-2xs">
                    Secondary Button
                  </div>
                </div>
                {/* Visual font scaling display */}
                <div className="text-2xl font-extrabold tracking-tight text-primary-text font-manrope">
                  Manrope Font Header
                </div>
                <div className="text-[10px] text-secondary-text font-inter max-w-[200px] text-center leading-normal">
                  Inter fallback font scales perfectly on smaller screen viewports.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
