"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight, Info } from "lucide-react";

interface PlanFeature {
  name: string;
  base: string | boolean;
  pro: string | boolean;
  custom: string | boolean;
  tooltip?: string;
}

export default function Pricing() {
  const plans = [
    {
      name: "Base Plan",
      price: "₹15,000",
      tax: "+ Tax",
      advance: "50% Advance",
      delivery: "5-Day Delivery",
      description: "Best for single-page redesigns and quick online launches.",
      ctaText: "Get Base Plan Quote",
      whatsappMessage: "Hi UserXpert, I want to discuss a project under the Base Plan (₹15,000 + Tax).",
      featured: false,
    },
    {
      name: "Pro Plan",
      price: "₹45,000",
      tax: "+ Tax",
      advance: "50% Advance",
      delivery: "15-Day Delivery",
      description: "Perfect for fully responsive corporate or business platforms on Framer/WordPress.",
      ctaText: "Get Pro Plan Quote",
      whatsappMessage: "Hi UserXpert, I want to discuss a project under the Pro Plan (₹45,000 + Tax).",
      featured: true,
    },
    {
      name: "Custom Plan",
      price: "Custom",
      tax: "",
      advance: "50% Advance",
      delivery: "Tailored Duration",
      description: "For custom platform-independent code, custom dashboards, or complex business tools.",
      ctaText: "Enquire for Custom Quote",
      whatsappMessage: "Hi UserXpert, I want to get a custom quote for a custom platform/web application.",
      featured: false,
    },
  ];

  const comparisonMatrix: PlanFeature[] = [
    {
      name: "Page redesign",
      base: "Single-page",
      pro: "Multi-page (Max 5)",
      custom: "Multi-page (Custom count)",
    },
    {
      name: "Info Architecture & Planning",
      base: false,
      pro: true,
      custom: true,
    },
    {
      name: "Content arrangement",
      base: true,
      pro: "Content strategy proposal",
      custom: "UX Copy + Content strategy proposal",
    },
    {
      name: "Visual Design",
      base: "Basic (Brand theme & Standard Icons)",
      pro: "Advanced (Brand theme, Stock Images & Icons)",
      custom: "Custom (Branding, Images & Standard Icons)",
    },
    {
      name: "HTML/CSS Development",
      base: false,
      pro: "Platform dependent (Framer / WP / Webflow, Responsive)",
      custom: "Custom Code Platform Independent (Next.js/React, Responsive)",
    },
    {
      name: "UX Improvements",
      base: "Basic",
      pro: "Better user flow & clarity",
      custom: "Custom user flow & structure",
    },
    {
      name: "CTA & Conversion Optimisation",
      base: false,
      pro: false,
      custom: "Built-in SEO strategy + Market strategy",
    },
    {
      name: "Accessibility Support",
      base: false,
      pro: "Basic interaction + AA standard",
      custom: "Basic interaction + AAA standard",
    },
    {
      name: "Final Deployment Support",
      base: false,
      pro: "Handover Design Doc & Assets",
      custom: "Design system, Branding guide, Handover Doc & Assets",
    },
    {
      name: "Available Discounts",
      base: true,
      pro: true,
      custom: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary-accent uppercase tracking-wider mb-3 block">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-text mb-4 text-balance">
            Transparent Pricing Packages
          </h2>
          <p className="text-base md:text-lg text-secondary-text font-normal text-balance">
            No hidden costs. Simple advance parameters. Invest in outcomes, not just hours.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-card border transition-all duration-300 flex flex-col justify-between ${
                plan.featured
                  ? "bg-white border-primary-accent shadow-lg ring-1 ring-blue-500/20 md:scale-105 z-10"
                  : "bg-slate-50 border-border-custom hover:border-slate-300 shadow-2xs"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary-accent text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Recommended
                </span>
              )}

              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-primary-text">{plan.name}</h3>
                  <span className="text-xs font-semibold text-secondary-text bg-slate-200/50 px-2.5 py-1.5 rounded-md select-none">
                    {plan.delivery}
                  </span>
                </div>
                <p className="text-xs text-secondary-text leading-relaxed font-normal mb-6 min-h-[36px] text-pretty">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mb-6 flex items-baseline gap-1 select-none">
                  <span className="text-4xl font-extrabold text-primary-text tracking-tight tabular-nums">
                    {plan.price}
                  </span>
                  {plan.tax && <span className="text-sm font-semibold text-secondary-text">{plan.tax}</span>}
                </div>

                <div className="border-t border-slate-200/60 pt-4 mb-6">
                  <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-slate-500 select-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-accent" aria-hidden="true" />
                    <span>{plan.advance}</span>
                  </div>
                </div>
              </div>

              {/* Call to Action button */}
              <a
                href={`https://wa.me/919962852828?text=${encodeURIComponent(plan.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center py-3 px-4 rounded-button text-sm font-bold transition-all duration-200 text-center ${
                  plan.featured
                    ? "bg-primary-accent text-white hover:bg-primary-accent-hover shadow-sm"
                    : "bg-white border border-border-custom text-primary-text hover:bg-slate-100"
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Detailed Comparison Matrix Table */}
        <div className="mt-16 text-left">
          <h3 className="text-lg font-bold text-primary-text mb-6 flex items-center gap-2">
            <Info className="w-5 h-5 text-primary-accent" aria-hidden="true" />
            <span>Complete Feature Comparison Matrix</span>
          </h3>

          <div className="w-full overflow-x-auto rounded-xl border border-border-custom shadow-2xs">
            <table className="w-full border-collapse bg-white text-sm text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-border-custom">
                  <th className="p-4 font-bold text-primary-text w-1/4">Features</th>
                  <th className="p-4 font-bold text-primary-text w-1/4 text-center">Base Plan</th>
                  <th className="p-4 font-bold text-primary-text w-1/4 text-center bg-blue-50/20">Pro Plan</th>
                  <th className="p-4 font-bold text-primary-text w-1/4 text-center">Custom Plan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonMatrix.map((feature) => (
                  <tr key={feature.name} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 font-semibold text-primary-text flex items-center gap-1.5">
                      {feature.name}
                    </td>

                    {/* Base Plan Col */}
                    <td className="p-4 text-center text-secondary-text">
                      {typeof feature.base === "boolean" ? (
                        feature.base ? (
                          <Check className="w-5 h-5 text-success-custom mx-auto" aria-hidden="true" />
                        ) : (
                          <X className="w-4 h-4 text-danger-custom mx-auto" aria-hidden="true" />
                        )
                      ) : (
                        <span className="text-xs font-medium text-slate-700 bg-slate-100 px-2 py-1 rounded select-none">
                          {feature.base}
                        </span>
                      )}
                    </td>

                    {/* Pro Plan Col (Highlighted) */}
                    <td className="p-4 text-center text-secondary-text bg-blue-50/10">
                      {typeof feature.pro === "boolean" ? (
                        feature.pro ? (
                          <Check className="w-5 h-5 text-success-custom mx-auto" aria-hidden="true" />
                        ) : (
                          <X className="w-4 h-4 text-danger-custom mx-auto" aria-hidden="true" />
                        )
                      ) : (
                        <span className="text-xs font-semibold text-primary-accent bg-blue-50 px-2.5 py-1 rounded select-none">
                          {feature.pro}
                        </span>
                      )}
                    </td>

                    {/* Custom Plan Col */}
                    <td className="p-4 text-center text-secondary-text">
                      {typeof feature.custom === "boolean" ? (
                        feature.custom ? (
                          <Check className="w-5 h-5 text-success-custom mx-auto" aria-hidden="true" />
                        ) : (
                          <X className="w-4 h-4 text-danger-custom mx-auto" aria-hidden="true" />
                        )
                      ) : (
                        <span className="text-xs font-medium text-indigo-700 bg-indigo-50 px-2 py-1 rounded select-none">
                          {feature.custom}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
