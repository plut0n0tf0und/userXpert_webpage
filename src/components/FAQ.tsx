"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageSquare } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How long does a project take?",
      answer: "A single-page landing page redesign (Base Plan) is delivered in 5 days. A standard corporate website on Framer or WordPress (Pro Plan) takes 15 days. For complex web apps, custom software, or bespoke dashboards (Custom Plan), timelines are defined based on the custom scope.",
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Yes, web redesign is one of our primary core services. We take your outdated layout, analyze current user metrics and bottlenecks, and rebuild it into a modern, faster, and conversion-focused platform.",
    },
    {
      question: "Can you build custom software?",
      answer: "Yes, our team is fluent in platform-independent custom development. We build custom admin dashboards, internal databases, customer portals, custom e-commerce structures, and automations.",
    },
    {
      question: "Do you provide hosting?",
      answer: "We deploy standard custom websites onto highly reliable cloud servers (like Vercel, Netlify, or AWS) and help you link your domain. We do not charge hosting premiums; you only pay the direct hosting provider fees (many projects fit on standard free/hobby tiers initially).",
    },
    {
      question: "Can I request only automation?",
      answer: "Absolutely. If you already have a functional design but need business workflows automated (such as syncing forms to custom CRMs, Google Sheets, or deploying an AI customer chatbot), you can hire us for automation-only tasks.",
    },
    {
      question: "How much does it cost?",
      answer: "Our Base Plan (Single-page redesign) is ₹15,000 + Tax. The Pro Plan (up to 5 pages on WP/Framer/Webflow) is ₹45,000 + Tax. Fully custom codebases or complex dashboards are priced based on custom quotes. We require a 50% advance to initiate any project.",
    },
    {
      question: "Can you maintain my website?",
      answer: "Yes, we provide ongoing maintenance, regular security monitoring, performance audits, search console index checks, and content update packages. Let us know during consultation and we can attach a retainer agreement.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary-accent uppercase tracking-wider mb-3 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-text mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-secondary-text font-normal text-balance">
            Got questions? We’ve got answers. If you have any other questions, feel free to chat with us.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="border border-border-custom rounded-card overflow-hidden transition-colors bg-slate-50/50 hover:bg-slate-50"
              >
                <button
                  id={`faq-btn-${index}`}
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-primary-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent focus-visible:ring-offset-2 cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className="text-base pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-secondary-text transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-primary-accent" : ""
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
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-sm text-secondary-text leading-relaxed font-normal border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-6 border border-dashed border-border-custom rounded-card bg-slate-50/30">
          <p className="text-sm text-secondary-text mb-4">
            Still have questions or have a custom project detail to discuss?
          </p>
          <a
            href="https://wa.me/919962852828?text=Hi%20UserXpert%2C%20I%20have%20some%20questions%20regarding%20website%20development/automation."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white border border-border-custom text-primary-text px-5 py-2.5 rounded-button text-xs font-semibold hover:bg-slate-100 transition-colors shadow-2xs gap-1.5 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-success-custom" aria-hidden="true" />
            <span>Chat directly on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
