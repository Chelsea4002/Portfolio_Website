import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function HeroSection() {
  return (
    <>
      <div className="bg-white lg:h-[200px] h-[100px] lg:rounded-b-3xl relative">
        <div className="relative h-full">
          <div className="absolute inset-0 flex items-center ml-[125px] lg:ml-[430px] lg:translate-y-0">
            <Image
              src="/bubble.png"
              width={650}
              height={200}
              alt="Welcoming message"
              className="w-[270px] h-[65px] md:w-[400px] lg:w-[650px] lg:h-[150px]"
            />
          </div>
          <p className="text-[13px] lg:text-[35px] text-white absolute flex right-[15px] lg:right-[195px] translate-y-[75%] lg:translate-y-11">
            Hi there!<br />
            Thank you for visiting my website
          </p>
        </div>
      </div>

      <div className="flex justify-center lg:justify-start mr-[215px] lg:ml-[120px]">
        <Image
          src="/profile1.png"
          width={300}
          height={300}
          alt="Picture of Chelsea"
          className="object-cover rounded-full lg:translate-y-[-45%] translate-y-[-50%] w-[120px] h-[120px] lg:w-[305px] lg:h-[305px]"
        />
      </div>

      <div className="flex flex-col ml-[135px] md:ml-8 lg:ml-[450px] transform translate-y-[-210%] md:translate-y-[-50%] lg:translate-y-[-220%]">
        <p className="text-[25px] md:text-[40px] lg:text-[55px] font-semibold lg:mb-2">Chelsea Cho</p>
        <div className="flex">
          <a href="https://github.com/Chelsea4002" className="text-[20px] md:text-[35px] lg:text-[45px] mr-2 md:mr-4 lg:mr-6">
            <IoLogoGithub />
          </a>
          <a href="https://linkedin.com/in/hyerang-cho-5370a71a4" className="text-[20px] md:text-[35px] lg:text-[45px] mr-2 md:mr-4 lg:mr-6">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/hyerang0_0" className="text-[20px] md:text-[35px] lg:text-[45px] mr-2 md:mr-4 lg:mr-6">
            <FaInstagram />
          </a>
          <a href="mailto:hae.rang31@gmail.com" className="text-[20px] md:text-[35px] lg:text-[45px]">
            <BiLogoGmail />
          </a>
        </div>
      </div>
     
      <hr className="h-[1px] lg:h-[2px] bg-[#6497D6] transform -translate-y-[105px] lg:-translate-y-[250px]" />

      <div className="bg-white max-w-[95%] lg:max-w-[100%] h-[430px] lg:h-[625px] rounded-3xl relative mt-[-90px] lg:mt-[-230px] mx-auto">
        <div>
          <Image
              src="/profile1.png"
              width={300}
              height={300} 
              alt="Picture of Chelsea"
              className="object-cover rounded-full ml-[10px] lg:ml-[15px] translate-y-[20%] w-[40px] h-[40px] lg:w-[70px] lg:h-[70px]"
          />
          <div className="flex flex-col ml-[55px] lg:ml-[95px] translate-y-[-90%] lg:translate-y-[-90%]">
            <p className="text-[15px] lg:text-[25px] -mb-[5px] lg:-mb-2">Chelsea Cho</p>
            <p className="text-[10px] lg:text-[20px]">Apr 2, 1998</p>
          </div>
        </div>
        <p className="ml-3 -mt-5 text-[20px] lg:ml-5 lg:-mt-10 lg:text-[40px]">I am into Web Development!</p><br />
        <div className="flex -mt-6">
          <div className="ml-2 lg:ml-5">
            <Image
              src="/home_pic1.png"
              width={600}
              height={400}
              alt="Picture of a spider's web"
              className="rounded-3xl translate-y-[2%] lg:translate-y-[2%] w-[500px] h-[300px] lg:w-[600px] lg:h-[400px]"
            />
          </div>
          <div className="mr-1 lg:ml-5">
            <Image
              src="/home_pic2.png"
              width={600}
              height={400}
              alt="Picture of the back of a woman on a computer"
              className="rounded-3xl translate-y-[2%] lg:translate-y-[2%] w-[500px] h-[300px] lg:w-[600px] lg:h-[400px]"
            />
          </div>
        </div>
        <button className="font-semibold text-white bg-[#6497D6] hover:bg-slate-300 hover:text-[#6497D6] rounded-3xl text-[18px] lg:text-[30px] ml-[10px] mt-3 w-[310px] h-[30px] lg:ml-[18px] lg:mt-5 lg:w-[1180px] lg:h-[45px]">Hire Me</button>
      </div>
    </>
  )
}