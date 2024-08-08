'use client';

import { FiUser } from "react-icons/fi";

const PDF_FILE_URL = 'https://portfolio-website-one-murex.vercel.app/Chelsea_Cho.pdf'

export default function About() {
  const downloadFileAtURL= (url) => {
    const aTag = document.createElement('a');

    aTag.href = url;
    aTag.setAttribute('download', 'Chelsea_Cho.pdf');
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  return (
    <>
      <section id="about" className="relative h-full scroll-mt-navbar">
        <div className="text-[#6497D6] flex mb-1 ml-3 md:ml-5 lg:ml-0 lg:mb-4 text-xl lg:text-3xl">
          <h2 className="font-semibold mr-2">About Me</h2>
          <FiUser className="-pl-2 mt-1" />
        </div>

        <div className="bg-white max-w-[95%] rounded-3xl relative mx-auto p-4 lg:max-w-[100%]">
          <div className="flex flex-col items-center md:flex-row lg:flex-row">
            <img
              src="/profile2.png"
              alt="Picture of Chelsea"
              className="rounded-full w-[200px] h-[200px] mt-3 md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] object-cover"
            />

            {/* <div className="text-[16px] mt-4 md:text-[20px] md:pr-2 lg:pr-6 lg:text-[28px]  max-w-[95%]">
              <p className="text-center">
                I am Chelsea Cho, an entry-level web developer from Toronto, Canada. 
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>a self-motivated team player with a positive attitude, capable of thriving in fast-paced, demanding environments</li>
                <li>adapt quickly to changing priorities</li>
                <li>enjoy working independently or within diverse teams to deliver quality results</li>
              </ul>
            </div> */}


            <div className="text-[16px] mt-4 md:text-[20px] md:pr-4 lg:pr-9 lg:text-[28px] max-w-[95%] mx-auto">
              <p className="text-center font-semibold text-gray-800">
                I am <strong>Chelsea Cho</strong>, an entry-level <strong>IT candidate</strong> from Toronto, Canada.
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 pl-4 lg:pl-1">
                <li className="leading-relaxed"><strong>Self-motivated team player</strong> with a positive attitude, capable of thriving in fast-paced, demanding environments</li>
                <li className="leading-relaxed"><strong>Adapt quickly</strong> to changing priorities</li>
                <li className="leading-relaxed"><strong>Enjoy working</strong> independently or within diverse teams to deliver quality results</li>
              </ul>
            </div>

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