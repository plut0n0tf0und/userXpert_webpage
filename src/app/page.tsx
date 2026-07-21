import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

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

        {/* Section 3: Value Pillars & Offerings */}
        <Services />

        {/* Section 4: Plan Pricing & Details Matrix */}
        <Pricing />

        {/* Section 5: Trust Signals & Value Propositions */}
        <WhyChooseUs />

        {/* Section 6: FAQs Accordion Accordion */}
        <FAQ />
      </main>

      {/* Footer and Bottom Call-to-action */}
      <Footer />
    </div>
  );
}
