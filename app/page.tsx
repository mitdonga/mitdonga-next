import type { Metadata } from "next";
import { Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Experience } from "@/components/sections/Experience";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Full Stack Developer & AI Automation Expert | Portfolio",
  description:
    "Full Stack Developer and AI Automation Expert. Founder of PitchGen & Automate TG. Building the future with code and AI. Available for freelance projects.",
  openGraph: {
    title: "Full Stack Developer & AI Automation Expert",
    description:
      "Building the future with code and AI. Founder of PitchGen & Automate TG. Available for freelance projects.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<div className="h-16" />}>
        <Navbar />
      </Suspense>
      <main>
        <Suspense fallback={null}>
          <Hero />
        </Suspense>
        <About />
        <Skills />
        <Projects />
        <Services />
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
        <Suspense fallback={null}>
          <Reviews />
        </Suspense>
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
