import Nav from "@/sections/Nav";
import Hero from "@/sections/Hero";
import Manifesto from "@/sections/Manifesto";
import Approach from "@/sections/Approach";
import Services from "@/sections/Services";
import Cold from "@/sections/Cold";
import About from "@/sections/About";
import Experiences from "@/sections/Experiences";
import Stories from "@/sections/Stories";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import { useReveal } from "@/hooks/useReveal";
import { useParallax } from "@/hooks/useParallax";

export default function App() {
  useReveal();
  useParallax();

  return (
    <div className="grain min-h-screen bg-[var(--obsidian)] text-[var(--cream)]">
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Approach />
        <Services />
        <Cold />
        <About />
        <Experiences />
        <Stories />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
