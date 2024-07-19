import { languages } from "@/constants/languages";
import { IoBookOutline } from "react-icons/io5";

export default function Skills() {
  return (
    <>
      <section id="skills" className="relative h-full scroll-mt-navbar">
        <div className="text-[#6497D6] flex ml-3 mb-1 lg:ml-0 lg:mb-4 text-lg lg:text-3xl">
          <h2 className="font-semibold mr-2">Skills</h2>
          <IoBookOutline className="-ml-1 mt-1" />
        </div>

        <div 
          className="bg-white max-w-[95%] rounded-3xl relative mx-auto p-6 lg:p-10 lg:max-w-[100%]"
        >
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

            {
              languages.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <img 
                    src={src} 
                    alt={`Logo of ${title}`}
                    className="w-20 mx-auto" 
                  />
                  <p className="mt-4 font-semibold">{title}</p>
                </div>
              ))
            }

          </div>
          
        </div> 
      </section>
    </>
  )
}