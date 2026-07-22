import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* Section 1: Hero Banner */}
        <Hero />

        {/* Section 2: Case Study Comparison */}
        <Showcase />

        {/* Section 3: What We Do (Hidden for now) */}
        {/* <WhatWeDo /> */}

        {/* Section 4: Plan Pricing & Details Matrix */}
        <Pricing />

        {/* Section 6: FAQs Accordion Accordion */}
        <FAQ />
      </main>

      {/* Footer and Bottom Call-to-action */}
      <Footer />
    </div>
  );
}
