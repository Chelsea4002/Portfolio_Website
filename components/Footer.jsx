"use client";

import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section className="relative lg:text-[20px] h-[100px] flex flex-col items-center justify-center mx-auto max-w-7xl sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col items-center mt-2 lg:mt-4">
          <FaArrowUp className="mb-2 cursor-pointer text-[#6497D6]" onClick={scrollToTop} />
          <p className="cursor-pointer -mt-2 text-[#6497D6]" onClick={scrollToTop}>Back to top</p>
          <br />
          <p className="font-extralight">Copyright © {new Date().getFullYear()} - All right reserved by HR</p>
        </div>
      </section>  
    </>
  )
}