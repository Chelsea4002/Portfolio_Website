import { FaRegFolder } from "react-icons/fa";

export default function Projects() {
  return (
    <>
      <div className="relative h-full">
        <div className="text-[#6497D6] flex ml-3 mb-1 lg:ml-0 lg:mb-4 text-lg lg:text-3xl">
          <h2 className="font-semibold mr-2">Recent Works</h2>
          <FaRegFolder className="-ml-1 mt-1" />
        </div>

        <div 
          className="bg-white max-w-[95%] h-[330px] rounded-3xl relative mx-auto p-6 
          md:h-[395px]
          lg:p-10 lg:h-[510px] lg:max-w-[100%]">

          
        </div> 
      </div>
    </>
  )
}