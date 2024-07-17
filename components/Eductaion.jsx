import { FaList } from "react-icons/fa";
import { experienceData } from "@/constants/data";
import Card from "./Card";
import { IoSchool } from "react-icons/io5";
import { FiBriefcase } from "react-icons/fi";

export default function Education() {
  return (
    <section id="education" className="relative h-full scroll-mt-navbar">
      <div className="text-[#6497D6] flex ml-3 mb-1 lg:ml-0 lg:mb-4 text-lg lg:text-3xl">
        <h2 className="font-semibold mr-2">Education & Experience</h2>
        <FaList className="-ml-1 mt-1" />
      </div>

      <div className="bg-white max-w-[95%] rounded-3xl relative mx-auto p-6 lg:p-10 lg:max-w-[100%]">
        <div className="space-y-10 lg:space-y-16">
          {experienceData.map((val) => (
            <Card
              key={val._id}
              icon={val.category === "education" ? <IoSchool /> : <FiBriefcase />}
              duration={val.duration}
              name={val.name}
              major={val.major}
              title={val.title}
              detail={val.detail}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
