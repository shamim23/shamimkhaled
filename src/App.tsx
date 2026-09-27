import { Route, Routes, useLocation } from "react-router";
import { useEffect } from "react";
import Nav from "@/sections/Nav";
import Hero from "@/sections/Hero";
import Manifesto from "@/sections/Manifesto";
import Approach from "@/sections/Approach";
import Services from "@/sections/Services";
import Cold from "@/sections/Cold";
import About from "@/sections/About";
// import Experiences from "@/sections/Experiences"; // hidden for now
// import Stories from "@/sections/Stories"; // hidden for now
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Podcast from "@/pages/Podcast";
import { useReveal } from "@/hooks/useReveal";
import { useParallax } from "@/hooks/useParallax";

function Landing() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <Approach />
      <Services />
      <Cold />
      <About />
      {/* <Experiences /> — "What's ahead", hidden for now, may return later */}
      {/* <Stories /> — testimonials, hidden for now, may return later */}
      <Contact />
    </main>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  useReveal();
  useParallax();

  return (
    <div className="grain min-h-screen bg-[var(--obsidian)] text-[var(--cream)]">
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<main><Blog /></main>} />
        <Route path="/blog/:slug" element={<main><BlogPost /></main>} />
        <Route path="/podcast" element={<main><Podcast /></main>} />
      </Routes>
      <Footer />
    </div>
  );
}
