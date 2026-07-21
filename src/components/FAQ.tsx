"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How much does a website cost?",
      answer: "Our Base Plan (Single-page redesign) is ₹15,000 + Tax. The Pro Plan (up to 5 pages on WP/Framer/Webflow) is ₹45,000 + Tax. Fully custom codebases or complex dashboards are priced based on custom quotes. We require a 50% advance to initiate any project.",
    },
    {
      question: "How long does a project take?",
      answer: "A single-page landing page redesign (Base Plan) is delivered in ~1 week. A standard corporate website on Framer or WordPress (Pro Plan) takes 2–3 weeks. For complex web apps, custom software, or bespoke dashboards (Custom Plan), timelines are defined based on the custom scope.",
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Yes, web redesign is one of our core services. We take your outdated layout, analyze current user metrics and bottlenecks, and rebuild it into a modern, faster, and conversion-focused platform.",
    },
    {
      question: "Can you build custom software?",
      answer: "Yes, our team is fluent in platform-independent custom development. We build custom admin dashboards, internal databases, customer portals, custom e-commerce structures, and automations.",
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we provide ongoing maintenance, regular security monitoring, performance audits, search console index checks, and content update packages. Let us know during consultation and we can attach a retainer agreement.",
    },
    {
      question: "Can I hire you only for automation?",
      answer: "Absolutely. If you already have a functional design but need business workflows automated (such as syncing forms to custom CRMs, Google Sheets, or deploying an AI customer chatbot), you can hire us for automation-only tasks.",
    },
    {
      question: "Do you provide hosting?",
      answer: "We deploy standard custom websites onto highly reliable cloud servers (like Vercel, Netlify, or AWS) and help you link your domain. We do not charge hosting premiums; you only pay the direct hosting provider fees (many projects fit on standard free/hobby tiers initially).",
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-white scroll-mt-20">
      <div className="max-w-[900px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-24">
          <span className="text-lg font-extrabold text-slate-800 uppercase tracking-widest mb-6 block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 text-balance tracking-tight">
            Questions Before We Get Started
          </h2>
          <p className="text-xl md:text-2xl text-slate-800 font-medium text-balance leading-relaxed">
            Everything business owners usually ask before starting a project with us.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="border-2 border-slate-200 rounded-[2rem] overflow-hidden transition-colors bg-white hover:bg-slate-50"
              >
                <button
                  id={`faq-btn-${index}`}
                  onClick={() => toggleFAQ(index)}
                  className="w-full min-h-[80px] flex items-center justify-between p-6 md:p-8 text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-900 focus-visible:ring-offset-4 cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className="text-xl md:text-2xl font-bold text-slate-900 pr-6 leading-snug">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-slate-500 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-slate-900" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-btn-${index}`}
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 text-lg text-slate-700 leading-relaxed font-medium max-w-[70ch]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
