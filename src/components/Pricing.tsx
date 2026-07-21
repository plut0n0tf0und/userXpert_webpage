"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Info } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Launch",
      tagline: "For businesses building their first professional online presence.",
      price: "₹15,000",
      priceLabel: "Starting at",
      note: "+ Applicable taxes",
      benefits: [
        "Custom landing page or small website",
        "Mobile-friendly design",
        "Fast loading performance",
        "Built with future growth in mind",
      ],
      timeline: "Typical delivery: ~1 week",
      ctaText: "Discuss Launch Plan",
      whatsappMessage: "Hi UserXpert, I want to discuss the Launch Plan.",
      featured: false,
    },
    {
      name: "Grow",
      tagline: "For businesses ready to invest in a stronger digital presence and better customer experience.",
      price: "₹45,000",
      priceLabel: "Starting at",
      note: "+ Applicable taxes",
      benefits: [
        "Fully custom business website",
        "UX-focused design",
        "SEO-ready structure",
        "Scalable architecture",
        "Optimized for conversions",
      ],
      timeline: "Typical delivery: 2–3 weeks",
      ctaText: "Discuss Growth Plan",
      whatsappMessage: "Hi UserXpert, I want to discuss the Growth Plan.",
      featured: true,
      badge: "MOST POPULAR",
    },
    {
      name: "Scale",
      tagline: "For businesses that need custom platforms, internal tools, AI solutions, automation, or advanced digital systems.",
      price: "Tailored Quote",
      priceLabel: "",
      note: "",
      benefits: [
        "Business automation",
        "AI-powered tools",
        "Internal dashboards",
        "Custom workflows",
        "Built around your operations",
      ],
      timeline: "Project-based timeline",
      ctaText: "Book Discovery Call",
      whatsappMessage: "Hi UserXpert, I want to book a discovery call for the Scale Plan.",
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-32 bg-white scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-24 md:mb-32">
          <span className="text-lg font-extrabold text-slate-800 uppercase tracking-widest mb-6 block">
            Pricing
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight text-balance">
            Choose the Right Starting Point
          </h2>
          <p className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed text-balance">
            Every business is different. These plans are designed as starting points. We'll recommend the right approach based on your goals, requirements, and budget.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-12 items-stretch mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-10 md:p-12 rounded-[2.5rem] border transition-all duration-300 flex flex-col hover:-translate-y-2 hover:shadow-2xl ${
                plan.featured
                  ? "bg-white border-slate-300 shadow-xl ring-1 ring-slate-900/5 order-first lg:order-none"
                  : "bg-slate-50/50 border-slate-200 hover:border-slate-300 shadow-md"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-5 left-12 bg-slate-900 text-white text-sm font-extrabold px-6 py-2.5 rounded-full uppercase tracking-widest shadow-lg">
                  {plan.badge}
                </span>
              )}

              <div className="flex-grow">
                {/* 1. Business Stage Label */}
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                  {plan.name}
                </h3>
                
                {/* 2. Price */}
                <div className="mb-10">
                  {plan.priceLabel && (
                    <span className="block text-lg font-bold text-slate-800 mb-2">
                      {plan.priceLabel}
                    </span>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
                      {plan.price}
                    </span>
                  </div>
                  {plan.note && (
                    <span className="block text-lg font-bold text-slate-700 mt-3">
                      {plan.note}
                    </span>
                  )}
                </div>

                {/* 3. Description / Tagline */}
                <p className="text-lg md:text-xl text-slate-800 font-medium leading-relaxed mb-12 min-h-[90px]">
                  {plan.tagline}
                </p>

                {/* 4. Benefits */}
                <ul className="space-y-6 md:space-y-8 mb-16 border-t border-slate-200 pt-10">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <Check className="w-6 h-6 md:w-7 md:h-7 text-slate-900 shrink-0 mt-0.5" />
                      <span className="text-lg md:text-xl text-slate-900 font-bold leading-snug">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 5. Timeline */}
              <div className="mb-10">
                <span className="inline-flex items-center text-base md:text-lg font-extrabold text-slate-900 bg-transparent border-2 border-slate-300 px-6 py-3 rounded-full hover:bg-slate-50 transition-colors">
                  {plan.timeline}
                </span>
              </div>

              {/* 6. CTA */}
              <a
                href={`https://wa.me/919962852828?text=${encodeURIComponent(plan.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center min-h-[64px] py-4 px-8 rounded-2xl text-xl font-black transition-all duration-300 text-center group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 ${
                  plan.featured
                    ? "bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl focus-visible:ring-slate-900"
                    : "bg-white border-2 border-slate-200 text-slate-900 hover:bg-slate-50 hover:border-slate-300 shadow-md focus-visible:ring-slate-900"
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1.5" aria-hidden="true" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Payment Terms Note */}
        <div className="max-w-xl mx-auto flex items-start gap-4 p-8 rounded-2xl bg-slate-50 border border-slate-200 mb-24 md:mb-32">
          <Info className="w-8 h-8 text-slate-900 shrink-0 mt-1" />
          <div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Payment Terms</h4>
            <p className="text-lg text-slate-800 font-medium">
              50% to begin.<br />
              Remaining balance after project completion.
            </p>
          </div>
        </div>

        {/* Trust Builder */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center bg-slate-50 rounded-[3rem] p-12 md:p-20 border border-slate-200 shadow-sm"
        >
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
            Not sure which option is right?
          </h3>
          <p className="text-xl md:text-2xl text-slate-800 font-medium mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
            We'll help you choose the solution that actually fits your business—even if it's not the most expensive one.
          </p>
          <a 
            href="https://wa.me/919962852828?text=Hi%20UserXpert%2C%20I'm%20not%20sure%20which%20plan%20is%20right%20for%20me.%20Can%20we%20talk%3F" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white border-2 border-slate-200 text-slate-900 min-h-[64px] px-10 py-4 rounded-full text-xl font-black hover:bg-slate-100 hover:border-slate-300 transition-all shadow-md group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-900 focus-visible:ring-offset-4"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1.5" />
          </a>
          <p className="text-lg text-slate-600 font-medium mt-8">
            No pressure. We'll recommend the option that best fits your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
