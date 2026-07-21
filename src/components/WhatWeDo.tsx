"use client";

import { Folder, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface WhatWeDoProps {
  variant?: "default" | "expertise";
}

export default function WhatWeDo({ variant = "default" }: WhatWeDoProps) {
  const isExpertise = variant === "expertise";
  const scrollRef = useRef<HTMLDivElement>(null);

  const customScrollBy = (amount: number) => {
    if (!scrollRef.current) return;
    const start = scrollRef.current.scrollLeft;
    const end = start + amount;
    const duration = 600; // ms for a slow, premium glide
    let startTime: number | null = null;

    // smooth easeOutQuint
    const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const pct = Math.min(progress / duration, 1);
      
      if (scrollRef.current) {
        scrollRef.current.scrollLeft = start + (amount * easeOutQuint(pct));
      }

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const scrollLeft = () => customScrollBy(-400);
  const scrollRight = () => customScrollBy(400);

  const defaultCards = [
    {
      title: "Brand Identity",
      description: "Elevate your identity: sharp positioning, cohesive visuals, real impact.",
      tags: ["Art Direction", "Brand strategy", "Logo design", "Color systems"],
      placeholderText: "Brand",
      colorClass: "bg-slate-800"
    },
    {
      title: "Web & Mobile Design",
      description: "Refresh or rebrand your UI; lift retention with clear flows and micro-interactions.",
      tags: ["Clean & Modern UI", "Rebranding", "Design system"],
      placeholderText: "UI/UX",
      colorClass: "bg-amber-800"
    },
    {
      title: "No-Code Websites",
      description: "Launch a revenue-driving site that captures qualified leads 24/7 — shipped in 14 days or less.",
      tags: ["Framer dev", "Integrations", "CMS integration", "Animation"],
      placeholderText: "NO-CODE",
      colorClass: "bg-orange-500"
    }
  ];

  const expertiseCards = [
    {
      title: "Custom Websites",
      description: "Bespoke, high-performance architectures hand-coded to load fast and convert visitors.",
      tags: ["Bespoke Engineering"],
      placeholderText: "Web",
      colorClass: "bg-blue-600"
    },
    {
      title: "Website Redesign",
      description: "Transform dated website interfaces into fast, accessible digital storefronts.",
      tags: ["Modernization"],
      placeholderText: "Redesign",
      colorClass: "bg-indigo-600"
    },
    {
      title: "Analytics Dashboards",
      description: "Google Analytics, operations data, and Stripe pipelines consolidated.",
      tags: ["Data Reporting"],
      placeholderText: "Data",
      colorClass: "bg-emerald-600"
    },
    {
      title: "AI Chatbots",
      description: "Intelligent agents trained on your documentation to qualify sales leads.",
      tags: ["AI Assistants"],
      placeholderText: "AI",
      colorClass: "bg-violet-600"
    },
    {
      title: "Business Automation",
      description: "Eradicate manual tasks by connecting your tools and databases automatically.",
      tags: ["Task Automation"],
      placeholderText: "Auto",
      colorClass: "bg-pink-600"
    },
    {
      title: "Ecommerce Solutions",
      description: "Tailored product galleries, optimized checkout flows, and payment integrations.",
      tags: ["E-Commerce"],
      placeholderText: "Shop",
      colorClass: "bg-rose-600"
    },
    {
      title: "Portfolio Websites",
      description: "Creative, asymmetrical layouts highlighting your project galleries.",
      tags: ["Bespoke Showcases"],
      placeholderText: "Portfolio",
      colorClass: "bg-cyan-600"
    },
    {
      title: "Landing Pages",
      description: "Conversion-focused single page funnels built to transform ads traffic.",
      tags: ["Conversion Funnels"],
      placeholderText: "Landing",
      colorClass: "bg-teal-600"
    },
    {
      title: "Internal Business Tools",
      description: "Custom inventory panels, CRM consoles, and employee panels.",
      tags: ["Enterprise Dashboards"],
      placeholderText: "Tools",
      colorClass: "bg-sky-600"
    }
  ];

  const cardsToRender = isExpertise ? expertiseCards : defaultCards;

  return (
    <section className="py-20 bg-slate-50 border-y border-border-custom scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center space-x-1.5 border border-slate-200 bg-white px-3 py-1 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-sm font-semibold uppercase tracking-widest text-slate-600">
                {isExpertise ? "Our Expertise" : "Services"}
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-primary-text font-serif tracking-tight">
              What We Do.
            </h2>
          </div>
          <div className="max-w-sm md:text-right">
            <p className="text-base text-secondary-text leading-relaxed">
              We combine strategy, speed, and skill to deliver exceptional design
              — every time.
            </p>
          </div>
        </div>

        {/* Optional Navigation Arrows for Expertise */}
        {isExpertise && (
          <div className="flex justify-end gap-3 mb-6">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors bg-white shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors bg-white shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        )}

        {/* Cards Container with Fades */}
        <div className="relative">
          {/* Left Fade */}
          {isExpertise && (
            <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          )}
          
          <div 
            ref={scrollRef}
            className={`flex gap-6 md:gap-8 pb-8 scroll-smooth ${
              isExpertise 
                ? 'overflow-x-auto custom-scrollbar' 
                : 'grid grid-cols-1 md:grid-cols-3'
            }`}
          >
          {cardsToRender.map((card, idx) => (
            <div 
              key={idx}
              className={`bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 flex flex-col min-h-[500px] shrink-0 ${
                isExpertise ? 'w-[85vw] md:w-[400px]' : 'w-full'
              }`}
            >
              <div className="mb-6">
                <Folder fill="black" className="w-12 h-12 text-black mb-8" />
                <h3 className="text-2xl font-bold text-primary-text mb-4">
                  {card.title}
                </h3>
                <p className="text-base text-secondary-text mb-6">
                  {card.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="inline-flex items-center space-x-1.5 bg-slate-50 px-3 py-1.5 rounded-full text-sm font-medium text-slate-700 border border-slate-100"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Image Placeholder area */}
              <div className="mt-auto w-full aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden flex flex-col justify-center items-center relative border border-slate-200">
                 <div className={`relative w-[60%] h-[60%] ${card.colorClass} rounded-xl shadow-xl flex items-center justify-center transform rotate-3 border-4 border-white/10`}>
                   <span className="text-white font-bold text-2xl tracking-tighter opacity-80">
                     {card.placeholderText}
                   </span>
                 </div>
                 
                 {/* Carousel Dots */}
                 <div className="absolute bottom-4 flex gap-1.5">
                   <div className="w-1.5 h-1.5 rounded-full bg-slate-400 opacity-100" />
                   <div className="w-1.5 h-1.5 rounded-full bg-slate-400 opacity-50" />
                   <div className="w-1.5 h-1.5 rounded-full bg-slate-400 opacity-50" />
                 </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Right Fade */}
        {isExpertise && (
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
        )}
      </div>
      </div>
      
      {isExpertise && (
        <style dangerouslySetInnerHTML={{__html: `
          .custom-scrollbar::-webkit-scrollbar {
            height: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #cbd5e1;
            border-radius: 20px;
          }
        `}} />
      )}
    </section>
  );
}
