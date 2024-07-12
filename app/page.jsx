import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Eductaion";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
