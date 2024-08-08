import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function HeroSection() {
  return (
    <>
      <section id="home" className="scroll-mt-navbar">

        <div className="max-w-[95%] relative mx-auto lg:max-w-[100%] h-[210px] md:h-[300px] lg:h-[330px]">
          <div className="bg-[url('/clover.png')] rounded-b-3xl h-[140px] md:h-[190px] lg:h-[190px] p-0">
            <div className="relative h-full break-words w-[65%] translate-y-3 md:translate-y-7 lg:translate-y-4">
              <div className="flex md:space-x-2 items-center transform translate-x-[132px] md:translate-x-[250px] lg:translate-x-[435px] p-2">
                <img
                  src="/hand.png"
                  alt="Image of waving hand"
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] hand"
                />
                <div className="pl-2 font-bold break-words">
                  <div className="overflow-hidden inline-block">
                    <p className="animate-typing pr-5 text-2xl md:text-4xl lg:text-5xl overflow-hidden inline-block whitespace-nowrap border-r-4 border-r-white text-white">
                      Hi there!
                    </p>
                  </div>
                  <p className="text-lg md:text-2xl lg:text-3xl text-white">
                    Thank you for visiting my website
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img 
              src="/profile1.png" 
              alt="Picture of Hyerang Cho" 
              className="object-cover rounded-full absolute top-4 left-4 md:left-9 lg:left-32
              w-[130px] h-[130px] mt-16 md:mt-18 lg:mt-2
              md:w-[220px] md:h-[220px]
              lg:w-[305px] lg:h-[305px]" 
            />
          </div>

          <div className="ml-[160px] md:ml-[275px] lg:ml-[460px]">
            <p className="text-[25px] md:text-[40px] lg:text-[50px] font-semibold">Chelsea Cho</p>
            <div className="flex">
              <a href="https://github.com/Chelsea4002" className="text-[20px] md:text-[35px] lg:text-[45px] mr-3 md:mr-4 lg:mr-6">
                <IoLogoGithub />
              </a>
              <a href="https://www.linkedin.com/in/chelseacho/" className="text-[20px] md:text-[35px] lg:text-[45px] mr-3 md:mr-4 lg:mr-6">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/hyerang0_0" className="text-[20px] md:text-[35px] lg:text-[45px] mr-3 md:mr-4 lg:mr-6">
                <FaInstagram />
              </a>
              <a href="mailto:hae.rang31@gmail.com" className="text-[20px] md:text-[35px] lg:text-[45px]">
                <BiLogoGmail />
              </a>
            </div>
          </div>

        </div>
      
        <hr className="h-[1px] md:h-[2px] lg:h-[2px] bg-[#6497D6] mt-[25px] mb-[25px] md:mt-6 md:mb-6 lg:mt-6 lg:mb-6 max-w-[95%] mx-auto lg:max-w-[100%]" />

        <div className="bg-white max-w-[95%] rounded-3xl relative mx-auto p-4 lg:max-w-[100%]">
          <div>
            <img
                src="/profile1.png"
                alt="Picture of Hyerang Cho"
                className="object-cover rounded-full ml-[10px] lg:ml-[15px] w-[45px] h-[45px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]"
            />
            <div className="flex flex-col ml-[60px] md:ml-[80px] lg:ml-[105px] translate-y-[-110%]">
              <p className="text-[15px] md:text-[20px] lg:text-[25px] -mb-[5px] lg:-mb-2">Chelsea Cho</p>
              <p className="text-[12px] md:text-[15px] lg:text-[20px]">Apr 2, 1998</p>
            </div>
          </div>
          <p 
            className="ml-3 mt-[-30px] md:mt-[-40px] lg:mt-[-50px] text-[20px] 
            md:text-[30px] 
            lg:ml-5 lg:text-[40px]"
          >
            I am into Web Development and Data Analysis!
          </p>
          <br />
          <div className="flex -mt-6 ml-2 md:ml-3 lg:ml-4 mr-2 md:mr-3 lg:mr-4">
            <div className="">
              <img
                src="/home_pic1.png"
                alt="Picture of a spider's web"
                className="rounded-3xl w-[500px] h-[200px] md:w-[550px] md:h-[300px] lg:w-[600px] lg:h-[400px]"
              />
            </div>
            <div>
              <img
                src="/home_pic2.png"
                alt="Picture of the back of a woman on a computer"
                className="rounded-3xl w-[500px] h-[200px] md:w-[550px] md:h-[300px] lg:w-[600px] lg:h-[400px]"
              />
            </div>
          </div>

          <div className="justify-start block">
            <a href="#contact">
              <button 
                className="rounded-3xl text-[18px] font-semibold text-white bg-[#6497D6] w-[97%] ml-[1.5%] mt-5
                hover:bg-slate-300 hover:text-[#6497D6] 
                md:text-[25px]
                lg:text-[30px]
                transition-all duration-300"
              >
                  Hire Me
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}