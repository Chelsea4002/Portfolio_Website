import Image from "next/image";
import { FiUser } from "react-icons/fi";

export default function About() {
  return (
    <>
      <div className="relative h-full">
        <div className="text-[#6497D6] flex ml-3 mb-1 lg:ml-0 lg:mb-4 text-lg lg:text-3xl">
          <p className="font-semibold mr-2">About Me</p>
          <FiUser className="-ml-1 mt-1" />
        </div>

        <div 
          className="bg-white max-w-[95%] h-[330px] rounded-3xl relative mx-auto p-6 
          md:h-[395px]
          lg:p-10 lg:h-[510px] lg:max-w-[100%]">

          <div className="-mt-6">
            <div className="flex flex-col items-center md:flex-row lg:flex-row">
              <Image
                src="/profile2.png"
                width={250}
                height={250}
                alt="Picture of Chelsea"
                className="rounded-full w-[200px] h-[200px] mt-3 md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] object-cover"
              />

              <p className="text-[16px] text-center md:text-[20px] lg:text-[28px]">
                I am Chelsea Cho, an entry-level web developer candidate from Toronto, Canada.
              </p>
            </div>

            <button 
              className="rounded-3xl text-[18px] font-semibold text-white bg-[#6497D6] -ml-4 mt-7 w-[356px] h-[30px] 
              hover:bg-slate-300 hover:text-[#6497D6]
              md:mt-7 md:h-[40px] md:w-[665px] md:text-[25px]
              lg:text-[30px] lg:-ml-6 lg:mt-5 lg:w-[1180px] lg:h-[45px]"
            >
              Download CV
            </button>
          </div>
        </div> 
      </div>
    </>
  )
}