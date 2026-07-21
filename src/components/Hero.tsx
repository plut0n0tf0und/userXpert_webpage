"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import TextDia from "./TextDia";

export default function Hero() {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom smooth ease
      },
    },
  };

  return (
    <section className="relative pt-40 pb-48 md:pt-48 md:pb-56 overflow-hidden bg-white">
      {/* Animated Soft Mesh Gradients for the Background */}
      <motion.div 
        animate={{ y: [0, -100, 0], x: [0, 150, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-[20%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-400/30 rounded-full blur-[120px] -z-0 pointer-events-none" 
      />
      <motion.div 
        animate={{ y: [0, 120, 0], x: [0, -150, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-0 right-[5%] w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[100px] -z-0 pointer-events-none" 
      />
      <motion.div 
        animate={{ y: [0, -150, 0], x: [0, 120, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] left-[5%] w-[600px] h-[600px] bg-purple-400/30 rounded-full blur-[100px] -z-0 pointer-events-none" 
      />

      <div className="max-w-[1000px] mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Small Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider text-blue-700 bg-white/50 backdrop-blur-md border border-slate-200/50 shadow-sm">
              DIGITAL SOLUTIONS, BUILT AROUND YOUR BUSINESS
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.2] md:leading-[1.1] mb-6 w-full"
          >
            Your Next Business Upgrade Starts With <br className="hidden lg:block" /><TextDia words={["A Smarter Website.", "Intelligent Automation.", "Seamless Workflows.", "Better Systems."]} />
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed mb-10 max-w-2xl text-balance"
          >
            We design websites, automations, and digital tools that remove friction, simplify operations, and help your business run more efficiently.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="https://wa.me/919962852828?text=Hi%20UserXpert%2C%20I%20would%20like%20to%20discuss%20a%20project%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-2xl text-base font-bold hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-slate-900/10 w-full sm:w-auto group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center justify-center bg-white/50 backdrop-blur-md border border-slate-200/80 text-slate-900 px-8 py-4 rounded-2xl text-base font-bold hover:bg-white/80 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm w-full sm:w-auto group"
            >
              <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-2 group-hover:bg-blue-100 transition-colors">
                <Play className="w-3 h-3 text-slate-700 group-hover:text-blue-600 transition-colors" aria-hidden="true" fill="currentColor" />
              </div>
              <span>Explore Our Work</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Fade out gradient to white at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
    </section>
  );
}
