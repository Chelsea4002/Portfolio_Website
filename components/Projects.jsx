"use client";

import { projects } from "@/constants/projects";
import { FaRegFolder } from "react-icons/fa";

import Slider from "react-slick";

export default function Projects() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section id="projects" className="relative h-full scroll-mt-navbar">
        <div className="text-[#6497D6] flex mb-1 ml-3 md:ml-5 lg:ml-0 lg:mb-4 text-xl lg:text-3xl">
          <h2 className="font-semibold mr-2">Recent Works</h2>
          <FaRegFolder className="-pl-2 mt-1" />
        </div>

        <div 
          className="bg-white max-w-[95%] rounded-3xl relative mx-auto p-10 lg:p-10 lg:max-w-[100%] text-lg lg:text-xl"
        >
          
          <Slider {...settings}>
            {
              projects.map(({ id, title, description, skills, img, demo, source }) => (
                <div
                  key={id}
                  className="bg-slate-100 rounded-xl shadow-md shadow-gray-500 h-[468px] md:h-[580px] lg:h-[400px] mb-4"
                >
                  <div className="lg:flex p-2 lg:p-5">
                    <div className="lg:flex-grow-[3] lg:basis-0">
                      <img 
                        src={img} 
                        alt={`Image of ${title}`}
                        className="rounded-lg border-2 w-full" 
                      />
                    </div>

                    <div className="lg:flex-grow-[2] lg:basis-0">

                      <div className="relative mt-2 md:mt-4 mb-2 md:mb-4 lg:mt-0">
                        <h3 className="font-extrabold text-2xl lg:text-3xl text-center">{title}</h3>
                      </div>

                      <div className="h-[110px] md:h-[60px] lg:h-[110px]">
                        <p className="text-center text-lg lg:text-2xl">{description}</p>
                      </div>

                      <div className="h-[70px] md:h-[40px] lg:h-[95px]">
                        <div className="flex flex-row flex-wrap justify-center mt-2">
                          {
                            skills.map((skill, index) => (
                              <div key={index} className="text-xs md:text-sm lg:text-lg bg-gradient-to-r from-[#a6d2ec] via-blue-400 to-[#a6d2ec] rounded-2xl w-auto h-auto p-2 mr-2 mt-2 text-white font-extrabold">{skill}</div>
                            ))
                          }
                        </div>
                      </div>

                      <div className="flex justify-center mt-8">
                        <a href={demo}>
                          <button
                            className="rounded-md text-[20px] font-semibold text-white bg-[#6497D6] w-[80px] h-[40px] md:w-[120px] md:h-[45px] lg:w-[160px] lg:h-[50px] mr-6
                            hover:bg-slate-300 hover:text-[#6497D6] hover:scale-110
                            md:text-[25px]
                            lg:text-[30px]
                            transition-all duration-300"
                          >
                            Demo
                          </button>
                        </a>

                        <a href={source}>
                          <button
                            className="rounded-md text-[20px] font-semibold text-white bg-[#6497D6] w-[80px] h-[40px] md:w-[120px] md:h-[45px] lg:w-[160px] lg:h-[50px]
                            hover:bg-slate-300 hover:text-[#6497D6] hover:scale-110
                            md:text-[25px]
                            lg:text-[30px]
                            transition-all duration-300"
                          >
                            Source
                          </button>
                        </a>
                        
                      </div>
                    </div>
                  </div>
                  
                </div>
              ))
            }
          </Slider>
            
        </div>
      </section>
    </>
  )
}




// First design
          {/* <div className="w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-2 px-0">

            {
              projects.map(({ id, title, description, skills, img, demo, source }) => (
                <div
                  key={id}
                  className="bg-slate-100 rounded-xl py-2 px-2 h-[100%] shadow-md shadow-gray-500 hover:scale-110"
                >

                  <div className="px-2 py-1">
                    <img 
                      src={img} 
                      alt={`Image of ${title}`}
                      className="mx-auto rounded-lg border-2" 
                    />
                    <h3 className="mt-4 mb-4 font-extrabold text-xl lg:text-2xl text-center">{title}</h3>
                    <p>{description}</p>

                    <div className="flex flex-row flex-wrap items-start mt-4">
                      {
                        skills.map((skill, index) => (
                          <div key={index} className="bg-gradient-to-r from-[#a6d2ec] via-blue-400 to-[#a6d2ec] rounded-2xl w-auto h-auto p-2 mr-2 mt-2 text-white font-extrabold">{skill}</div>
                        ))
                      }
                    </div>

                    <div className="flex items-center justify-center">
                      <button
                        className="rounded-md text-[20px] font-semibold text-white bg-[#6497D6] w-1/2 py-3 m-4
                        hover:bg-slate-300 hover:text-[#6497D6] hover:scale-110
                        md:text-[25px]
                        lg:text-[30px]
                        transition-all duration-300" 
                      >
                        Demo
                      </button>

                      <button
                        className="rounded-md text-[20px] font-semibold text-white bg-[#6497D6] w-1/2 py-3 m-4
                        hover:bg-slate-300 hover:text-[#6497D6] hover:scale-110
                        md:text-[25px]
                        lg:text-[30px]
                        transition-all duration-300"
                      >
                        Source
                      </button>
                      
                    </div>
                  </div>
                  
                </div>
              ))
            }
          </div> 
          
        </div> */}
