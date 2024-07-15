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
      <div className="mt-[40px] md:mt-[70px] lg:mt-[100px]" /> 
      <About />
      <div className="mt-[40px] md:mt-[70px] lg:mt-[100px]" /> 
      <Education />
      <div className="mt-[40px] md:mt-[70px] lg:mt-[100px]" /> 
      <Skills />
      <div className="mt-[40px] md:mt-[70px] lg:mt-[100px]" /> 
      <Projects />
      <div className="mt-[40px] md:mt-[70px] lg:mt-[100px]" /> 
      <Contact />
    </main>
  );
}
