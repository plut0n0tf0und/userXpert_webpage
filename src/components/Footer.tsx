"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Mail, Phone, Clock } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t-2 border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* Seamless Final CTA Section */}
        <div className="py-32 md:py-40 border-b-2 border-slate-200 flex flex-col items-center text-center">
          <div className="max-w-2xl flex flex-col items-center">
            <span className="text-lg font-extrabold uppercase tracking-widest text-slate-800 mb-8 block">
              Let's Build Something Better
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-8 text-balance">
              Let's Talk About Your Business.
            </h2>
            <p className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed mb-12 text-balance max-w-xl">
              Whether you need a website, automation, AI tools, or something custom, we'll help you choose the right solution for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-6 w-full sm:w-auto">
              <a
                href="mailto:contact@userxpert.in"
                className="inline-flex items-center justify-center bg-slate-900 text-white min-h-[64px] px-10 py-4 rounded-full text-xl font-black hover:bg-slate-800 transition-all shadow-md group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-900 focus-visible:ring-offset-4"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1.5" />
              </a>
              <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
                <a
                  href="https://wa.me/919962852828"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white border-2 border-slate-200 text-slate-900 min-h-[64px] px-10 py-4 rounded-full text-xl font-black hover:bg-slate-100 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-900 focus-visible:ring-offset-4 w-full sm:w-auto"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            
            <p className="text-lg text-slate-700 font-medium mt-8">
              No pressure. Just a friendly conversation.
            </p>
          </div>
        </div>

        {/* Footer 4-Column Layout */}
        <div className="py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Column 1: About & Contact (Takes up more space) */}
          <div className="lg:col-span-5 flex flex-col space-y-8 pr-0 lg:pr-12">
            <Link href="#" className="inline-flex items-center group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-900 focus-visible:ring-offset-4 rounded self-start">
              <img 
                src="/logo.png" 
                alt="UserXpert" 
                className="h-10 w-auto transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-lg md:text-xl text-slate-800 font-medium leading-relaxed max-w-sm">
              We design websites, build business tools, and automate workflows for companies that want to work smarter—not harder.
            </p>
            
            <div className="space-y-6 pt-6">
              <div className="flex items-start space-x-4 text-slate-800">
                <MapPin className="w-6 h-6 mt-0.5 flex-shrink-0 text-slate-900" />
                <span className="text-lg font-medium">Chennai, India</span>
              </div>
              <div className="flex items-center space-x-4 text-slate-800 group">
                <Mail className="w-6 h-6 flex-shrink-0 text-slate-900" />
                <a href="mailto:contact@userxpert.in" className="text-lg font-bold hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-900 focus-visible:ring-offset-4 rounded">contact@userxpert.in</a>
              </div>
              <div className="flex items-center space-x-4 text-slate-800 group">
                <Phone className="w-6 h-6 flex-shrink-0 text-slate-900" />
                <a href="tel:+919962852828" className="text-lg font-bold hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-900 focus-visible:ring-offset-4 rounded">+91 99628 52828</a>
              </div>
              <div className="flex items-start space-x-4 text-slate-800">
                <Clock className="w-6 h-6 mt-0.5 flex-shrink-0 text-slate-900" />
                <div className="text-lg font-medium flex flex-col">
                  <span>Mon – Sat</span>
                  <span className="text-slate-600">9:00 AM – 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Column 2: Services */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <h4 className="font-extrabold text-slate-900 text-lg md:text-xl tracking-wide uppercase mb-4">Services</h4>
            <ul className="space-y-5 flex flex-col">
              {['Websites', 'Automations', 'AI Solutions', 'Tools'].map((item) => (
                <li key={item}>
                  <Link href={`#`} className="text-lg font-bold text-slate-700 hover:text-slate-900 transition-colors underline-offset-8 decoration-2 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-900 focus-visible:ring-offset-4 rounded inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <h4 className="font-extrabold text-slate-900 text-lg md:text-xl tracking-wide uppercase mb-4">Company</h4>
            <ul className="space-y-5 flex flex-col">
              {['Pricing', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-lg font-bold text-slate-700 hover:text-slate-900 transition-colors underline-offset-8 decoration-2 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-900 focus-visible:ring-offset-4 rounded inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <h4 className="font-extrabold text-slate-900 text-lg md:text-xl tracking-wide uppercase mb-4">Connect</h4>
            <ul className="space-y-5 flex flex-col">
              <li>
                <a href="https://wa.me/919962852828" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-slate-700 hover:text-slate-900 transition-colors underline-offset-8 decoration-2 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-900 focus-visible:ring-offset-4 rounded inline-block">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="text-lg font-bold text-slate-700 hover:text-slate-900 transition-colors underline-offset-8 decoration-2 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-900 focus-visible:ring-offset-4 rounded inline-block">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:contact@userxpert.in" className="text-lg font-bold text-slate-700 hover:text-slate-900 transition-colors underline-offset-8 decoration-2 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-900 focus-visible:ring-offset-4 rounded inline-block">
                  Email
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-12 border-t-2 border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-lg font-bold text-slate-600">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
            <span>&copy; {currentYear} UserXpert</span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span>Designed & Developed by UserXpert</span>
          </div>
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-slate-900 transition-colors underline-offset-8 decoration-2 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-900 focus-visible:ring-offset-4 rounded">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors underline-offset-8 decoration-2 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-900 focus-visible:ring-offset-4 rounded">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
