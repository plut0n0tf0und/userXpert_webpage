"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play, Monitor } from "lucide-react";

export default function Showcase() {
  return (
    <section id="showcase" className="py-20 bg-slate-50 border-y border-border-custom scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary-accent uppercase tracking-wider mb-3 block">
            Featured Transformation
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-text mb-4 text-balance">
            See What’s Possible
          </h2>
          <p className="text-base md:text-lg text-secondary-text font-normal text-balance">
            A real look into our work. Play the video below to see how we transform a standard resort website layout into a premium conversion-focused platform.
          </p>
        </div>

        {/* Video Showcase Card styled as a Browser Window */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-card overflow-hidden shadow-xl border border-border-custom">
            
            {/* Mock Browser Header */}
            <div className="bg-slate-50 border-b border-border-custom px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-1.5 animate-pulse">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex items-center space-x-2 text-[11px] font-medium text-slate-400 bg-white border border-border-custom/80 px-4 py-1 rounded-md w-1/2 justify-center select-none">
                <Monitor className="w-3.5 h-3.5" aria-hidden="true" />
                <span>baybreeze.userxpert.in/preview</span>
              </div>
              <div className="w-12" /> {/* Spacer */}
            </div>

            {/* Video Player */}
            <div className="relative bg-black aspect-video w-full flex items-center justify-center">
              <video
                src="/BayBreeze_Ad.mp4"
                controls
                className="w-full h-full object-cover"
                preload="metadata"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </div>

        {/* Case Study Details */}
        <div className="max-w-2xl mx-auto bg-white border border-border-custom p-8 rounded-card shadow-xs text-left">
          <div className="flex items-center space-x-2 text-primary-accent mb-3">
            <Sparkles className="w-5 h-5" aria-hidden="true" />
            <span className="text-sm font-semibold uppercase tracking-wider">The Result</span>
          </div>
          <h3 className="text-xl font-bold text-primary-text mb-2 text-balance">
            Bay Breeze Boutique Resort Redesign
          </h3>
          <p className="text-sm text-secondary-text leading-relaxed mb-6 font-normal">
            We redesigned Bay Breeze’s archaic booking form and page hierarchy into a premium, responsive booking experience. The result? A **142% increase in mobile booking enquiries** and an **85% reduction in page bounce rate** within 30 days of launch.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-slate-100 pt-6">
            <span className="text-xs font-semibold text-primary-text">
              Want a similar transformation for your website?
            </span>
            <a
              href="https://wa.me/919962852828?text=Hi%20UserXpert%2C%20I%20saw%20your%20Bay%20Breeze%20redesign%20showcase%20and%20want%20a%20similar%20modern%20redesign%20for%20my%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary-accent text-white px-4 py-2.5 rounded-button text-xs font-semibold hover:bg-primary-accent-hover transition-colors shadow-xs group"
            >
              <span>Get Modern Redesign</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
