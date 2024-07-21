'use client';

import Image from "next/image";
import { FiUser } from "react-icons/fi";

const PDF_FILE_URL = 'http://localhost:3000/Hyerang_Cho_Resume.pdf'

export default function About() {
  const downloadFileAtURL= (url) => {
    const aTag = document.createElement('a');

    aTag.href = url;
    aTag.setAttribute('download', 'Hyerang_Cho_Resume.pdf');
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  return (
    <>
      <section id="about" className="relative h-full scroll-mt-navbar">
        <div className="text-[#6497D6] flex ml-3 mb-1 lg:ml-0 lg:mb-4 text-lg lg:text-3xl">
          <h2 className="font-semibold mr-2">About Me</h2>
          <FiUser className="-ml-1 mt-1" />
        </div>

        <div className="bg-white max-w-[95%] rounded-3xl relative mx-auto p-4 lg:max-w-[100%]">
          <div className="flex flex-col items-center md:flex-row lg:flex-row">
            <Image
              src="/profile2.png"
              width={250}
              height={250}
              alt="Picture of Chelsea"
              className="rounded-full w-[200px] h-[200px] mt-3 md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] object-cover"
            />

            <p className="text-[16px] text-center md:text-[20px] lg:text-[28px] pr-2 pl-2 md:pr-4 md:pl-4">
              I am Chelsea Cho, an entry-level web developer candidate from Toronto, Canada.
            </p>
          </div>

          <div className="justify-start block">
            <button 
              className="rounded-3xl text-[18px] font-semibold text-white bg-[#6497D6] w-[97%] ml-[1.5%] mt-5
              hover:bg-slate-300 hover:text-[#6497D6] 
              md:text-[25px]
              lg:text-[30px]
              transition-all duration-300"
              onClick={() => { downloadFileAtURL(PDF_FILE_URL) }}
            >
              Download CV
            </button>
          </div>
        </div> 
      </section>
    </>
  )
}