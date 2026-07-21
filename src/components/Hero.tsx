"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Play, Globe, MessageSquare, Cpu, BarChart3, ShoppingBag } from "lucide-react";

export default function Hero() {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      {/* Background radial gradient accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-[20%] left-0 w-[300px] h-[300px] bg-slate-50/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Heading and Copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 flex flex-col items-start text-left"
        >
          {/* Small Badge */}
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-semibold text-primary-accent bg-blue-50 border border-blue-100/50 mb-6 shadow-2xs"
          >
            Digital Solutions for Modern Businesses
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight text-primary-text leading-[1.1] mb-6 text-balance"
          >
            From Websites to AI Automation —{" "}
            <span className="text-primary-accent">Built for Your Business.</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-secondary-text font-normal leading-relaxed mb-8 max-w-xl"
          >
            We design websites, automate repetitive work, build e-commerce stores, create AI chatbots, analytics dashboards, and custom digital solutions that help businesses save time and attract more customers.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="https://wa.me/919962852828?text=Hi%20UserXpert%2C%20I%20would%20like%20to%20request%20a%20free%20consultation%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary-accent text-white px-7 py-4 rounded-button text-base font-semibold hover:bg-primary-accent-hover transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 text-center"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center justify-center bg-white border border-border-custom text-primary-text px-7 py-4 rounded-button text-base font-semibold hover:bg-slate-50 transition-all duration-200 text-center group"
            >
              <Play className="w-4 h-4 mr-2 fill-primary-text" aria-hidden="true" />
              <span>Watch Our Work</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Laptop Mockup & Floating Cards */}
        <div className="lg:col-span-6 relative flex justify-center items-center py-8">
          {/* Floating Subtle Service Badges */}
          {/* Card 1: Custom Websites */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 40 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              y: [20, 10, 20],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.2
            }}
            className="absolute top-10 left-4 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-xs border border-border-custom px-4 py-2.5 rounded-xl shadow-md pointer-events-none"
          >
            <Globe className="w-4 h-4 text-blue-500" aria-hidden="true" />
            <span className="text-sm font-semibold text-primary-text">Custom Websites</span>
          </motion.div>

          {/* Card 2: AI Chatbots */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: -40 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              y: [-10, -20, -10],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute top-[30%] -right-2 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-xs border border-border-custom px-4 py-2.5 rounded-xl shadow-md pointer-events-none"
          >
            <MessageSquare className="w-4 h-4 text-green-500" aria-hidden="true" />
            <span className="text-sm font-semibold text-primary-text">🤖 AI Chatbots</span>
          </motion.div>

          {/* Card 3: Business Automation */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ 
              opacity: 1, 
              y: [30, 42, 30],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.8
            }}
            className="absolute bottom-6 left-12 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-xs border border-border-custom px-4 py-2.5 rounded-xl shadow-md pointer-events-none"
          >
            <Cpu className="w-4 h-4 text-purple-500" aria-hidden="true" />
            <span className="text-sm font-semibold text-primary-text">⚡ Automation</span>
          </motion.div>

          {/* Card 4: Dashboards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: [0, -10, 0]
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1.1
            }}
            className="absolute bottom-[20%] -right-6 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-xs border border-border-custom px-4 py-2.5 rounded-xl shadow-md pointer-events-none"
          >
            <BarChart3 className="w-4 h-4 text-amber-500" aria-hidden="true" />
            <span className="text-sm font-semibold text-primary-text">📊 Dashboards</span>
          </motion.div>

          {/* Laptop Mockup Wrapper */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-[500px] aspect-[1.6] bg-slate-900 border-[10px] border-slate-800 rounded-2xl shadow-2xl relative overflow-hidden"
          >
            {/* Screen Content Simulator (Animated Dashboard UI) */}
            <div className="absolute inset-0 bg-slate-950 p-4 flex flex-col text-slate-300 font-mono text-xs overflow-hidden select-none">
              {/* Fake Menu bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <div className="text-[10px] text-slate-500 font-sans">userxpert.in/dashboard</div>
                <div className="w-8" />
              </div>

              {/* Fake dashboard content grid */}
              <div className="grid grid-cols-3 gap-3 mb-3">
                <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg">
                  <div className="text-[10px] text-slate-500 font-sans">Monthly Revenue</div>
                  <div className="text-sm font-bold text-white font-sans mt-0.5">₹4,82,900</div>
                  <div className="text-[9px] text-green-400 font-sans mt-1">▲ +14.2%</div>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg">
                  <div className="text-[10px] text-slate-500 font-sans">Active Leads</div>
                  <div className="text-sm font-bold text-white font-sans mt-0.5">142</div>
                  <div className="text-[9px] text-green-400 font-sans mt-1">▲ +8.1%</div>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg">
                  <div className="text-[10px] text-slate-500 font-sans">AI Automations</div>
                  <div className="text-sm font-bold text-white font-sans mt-0.5">24 Active</div>
                  <div className="text-[9px] text-indigo-400 font-sans mt-1">⚡ Running</div>
                </div>
              </div>

              {/* Chatbot simulator preview */}
              <div className="flex-1 bg-slate-900 border border-slate-800 rounded-lg p-2.5 flex flex-col justify-between overflow-hidden">
                <div className="flex items-center space-x-1.5 border-b border-slate-800 pb-1.5 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[9px] font-sans text-slate-400 font-bold uppercase tracking-wider">AI Assistant Live</span>
                </div>
                <div className="flex-1 flex flex-col space-y-2 overflow-y-auto pr-1">
                  <div className="bg-slate-800 p-1.5 rounded-lg max-w-[80%] text-[10px] leading-relaxed self-start font-sans">
                    Hi! I can help you book a web redesign consultation. Would you like to check available slots?
                  </div>
                  <div className="bg-primary-accent text-white p-1.5 rounded-lg max-w-[70%] text-[10px] leading-relaxed self-end font-sans">
                    Yes, please. Suggest something for tomorrow morning.
                  </div>
                  <div className="bg-slate-800 p-1.5 rounded-lg max-w-[80%] text-[10px] leading-relaxed self-start font-sans">
                    Found 10:00 AM IST. Should I block it for UserXpert?
                  </div>
                </div>
              </div>
            </div>

            {/* Reflection Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
          </motion.div>

          {/* Laptop Base Stand */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[540px] h-[6px] bg-slate-700 rounded-b-lg shadow-lg pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
