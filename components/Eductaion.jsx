import { FaList } from "react-icons/fa";
import { experienceData } from "@/constants/data";
import Card from "./Card";
import { IoSchool } from "react-icons/io5";
import { FiBriefcase } from "react-icons/fi";

export default function Education() {
  return (
    <section id="education" className="relative h-full scroll-mt-navbar">
      <div className="text-[#6497D6] flex mb-1 ml-3 md:ml-5 lg:ml-0 lg:mb-4 text-xl lg:text-3xl">
        <h2 className="font-semibold mr-2">Education & Experience</h2>
        <FaList className="-pl-2 mt-1" />
      </div>

      <div className="bg-white max-w-[95%] rounded-3xl relative mx-auto p-6 lg:p-10 lg:max-w-[100%]">
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {experienceData.map((val) => (
            <Card
              key={val._id}
              icon={val.category === "education" ? <IoSchool /> : <FiBriefcase />}
              duration={val.duration}
              name={val.name}
              title={val.title}
              degree={val.degree}
              detail={val.detail}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
