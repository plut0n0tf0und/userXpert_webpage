"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, MessageSquare } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-border-custom shadow-xs py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center space-x-2 group">
          <div className="w-9 h-9 rounded-lg bg-primary-accent flex items-center justify-center text-white font-bold text-lg shadow-sm transition-transform group-hover:scale-105">
            U
          </div>
          <span className="text-xl font-extrabold tracking-tight text-primary-text select-none">
            User<span className="text-primary-accent">Xpert</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-[15px] font-medium text-secondary-text hover:text-primary-text transition-colors"
          >
            Services
          </a>
          <a
            href="#pricing"
            className="text-[15px] font-medium text-secondary-text hover:text-primary-text transition-colors"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-[15px] font-medium text-secondary-text hover:text-primary-text transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://wa.me/919962852828?text=Hi%20UserXpert%2C%20I%27m%20interested%20in%20discussing%20a%20project%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 text-[15px] font-semibold text-secondary-text hover:text-primary-text transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-success-custom" aria-hidden="true" />
            <span>Chat now</span>
          </a>
          <a
            href="https://wa.me/919962852828?text=Hi%20UserXpert%2C%20I%20would%20like%20to%20request%20a%20free%20consultation%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary-accent text-white px-5 py-2.5 rounded-button text-[15px] font-semibold hover:bg-primary-accent-hover transition-colors shadow-xs hover:shadow-sm"
          >
            <span>Free Consultation</span>
            <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-primary-text hover:bg-slate-100 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent focus-visible:ring-offset-2"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[60px] left-0 right-0 bottom-0 bg-white z-40 px-6 py-8 flex flex-col space-y-6 animate-fade-in border-t border-border-custom">
          <a
            href="#services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-semibold text-primary-text border-b border-slate-100 pb-3"
          >
            Services
          </a>
          <a
            href="#pricing"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-semibold text-primary-text border-b border-slate-100 pb-3"
          >
            Pricing
          </a>
          <a
            href="#faq"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-semibold text-primary-text border-b border-slate-100 pb-3"
          >
            FAQ
          </a>

          <div className="flex flex-col space-y-4 pt-4">
            <a
              href="https://wa.me/919962852828?text=Hi%20UserXpert%2C%20I%27m%20interested%20in%20discussing%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-3.5 border border-border-custom rounded-button text-base font-semibold text-primary-text hover:bg-slate-50 transition-colors"
            >
              <MessageSquare className="w-5 h-5 text-success-custom" aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="https://wa.me/919962852828?text=Hi%20UserXpert%2C%20I%20would%20like%20to%20request%20a%20free%20consultation%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary-accent text-white py-3.5 w-full rounded-button text-base font-semibold hover:bg-primary-accent-hover transition-colors text-center"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
