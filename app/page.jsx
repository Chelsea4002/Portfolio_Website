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
      <div className="mt-[50px] md:mt-[70px] lg:mt-[100px]" /> 
      <About />
      <div className="mt-[50px] md:mt-[70px] lg:mt-[100px]" /> 
      <Education />
      <div className="mt-[50px] md:mt-[70px] lg:mt-[100px]" /> 
      <Skills />
      <div className="mt-[50px] md:mt-[70px] lg:mt-[100px]" /> 
      <Projects />
      <div className="mt-[50px] md:mt-[70px] lg:mt-[100px]" /> 
      <Contact />
      <div className="mt-[50px] md:mt-[70px] lg:mt-[100px]" /> 
      <hr className="w-full h-[1px] md:h-[2px] lg:h-[2px] bg-[#6497D6] mb-4" />
    </main>
  );
}
