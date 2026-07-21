"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare, Mail, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-50 border-t border-border-custom pt-20 pb-12 scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* FINAL CTA SECTION (Large Premium Card) */}
        <div className="bg-white border border-border-custom rounded-card p-8 md:p-12 shadow-sm text-center relative overflow-hidden mb-16 max-w-4xl mx-auto">
          {/* Subtle decoration accent */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-50 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-indigo-50 rounded-full blur-2xl pointer-events-none" />

          <span className="text-xs font-semibold text-primary-accent bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
            Start Your Project
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-primary-text mb-4 tracking-tight text-balance">
            Ready to Grow Your Business Digitally?
          </h2>
          <p className="text-sm md:text-base text-secondary-text font-normal max-w-xl mx-auto mb-8 leading-relaxed text-pretty">
            Let’s discuss your idea. We will help you outline the scope, select the right platform, and recommend a solution that saves time and boosts your bottom line.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919962852828?text=Hi%20UserXpert%2C%20I%20want%20to%20chat%20about%20a%20new%20digital%20solution%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-success-custom text-white px-6 py-3.5 rounded-button text-sm font-bold hover:bg-green-600 transition-colors shadow-xs w-full sm:w-auto cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 mr-2" aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="https://wa.me/919962852828?text=Hi%20UserXpert%2C%20I%20would%20like%20to%20request%20a%20free%20consultation%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary-accent text-white px-6 py-3.5 rounded-button text-sm font-bold hover:bg-primary-accent-hover transition-colors shadow-xs w-full sm:w-auto cursor-pointer"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* FOOTER LINKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-slate-200 pb-12 mb-8">
          
          {/* Logo and Description (Col 1-5) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="#" className="flex items-center space-x-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-primary-accent flex items-center justify-center text-white font-bold text-base shadow-xs transition-transform group-hover:scale-105">
                U
              </div>
              <span className="text-lg font-extrabold tracking-tight text-primary-text select-none">
                User<span className="text-primary-accent">Xpert</span>
              </span>
            </Link>
            <p className="text-xs text-secondary-text leading-relaxed font-normal mb-6 max-w-sm">
              UserXpert designs custom websites, automates repetitive business processes, and deploys smart AI customer chatbots. We solve real structural business problems through modern digital platforms.
            </p>
            
            {/* Contact details */}
            <div className="space-y-2">
              <a 
                href="https://wa.me/919962852828"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-secondary-text hover:text-primary-text transition-colors"
              >
                <span className="w-5 h-5 rounded-md bg-green-50 text-success-custom flex items-center justify-center border border-green-100" aria-hidden="true">
                  ⚡
                </span>
                <span>+91 99628 52828</span>
              </a>
              <a 
                href="mailto:contact@userxpert.in"
                className="flex items-center gap-2 text-xs font-semibold text-secondary-text hover:text-primary-text transition-colors"
              >
                <span className="w-5 h-5 rounded-md bg-blue-50 text-primary-accent flex items-center justify-center border border-blue-100">
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
                <span>contact@userxpert.in</span>
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Links (Col 7-9) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary-text mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#services" className="text-xs font-medium text-secondary-text hover:text-primary-text transition-colors">
                  Custom Websites
                </a>
              </li>
              <li>
                <a href="#services" className="text-xs font-medium text-secondary-text hover:text-primary-text transition-colors">
                  Website Redesign
                </a>
              </li>
              <li>
                <a href="#services" className="text-xs font-medium text-secondary-text hover:text-primary-text transition-colors">
                  Business Automation
                </a>
              </li>
              <li>
                <a href="#services" className="text-xs font-medium text-secondary-text hover:text-primary-text transition-colors">
                  AI Chatbots & Tools
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links (Col 10-12) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary-text mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#pricing" className="text-xs font-medium text-secondary-text hover:text-primary-text transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#faq" className="text-xs font-medium text-secondary-text hover:text-primary-text transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/company/userxpert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-secondary-text hover:text-primary-text transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-700" aria-hidden="true" />
                  <span>LinkedIn (userxpert.in)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT ROW */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-medium text-slate-400">
            © {currentYear} UserXpert. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-[11px] font-medium text-slate-400">
            <a href="#" className="hover:text-primary-text transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-text transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
