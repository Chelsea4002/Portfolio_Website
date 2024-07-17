import { IoChatbubbles } from "react-icons/io5";

export default function Contact() {
  return (
    <>
      <section id="contact" className="relative h-full scroll-mt-navbar">
        <div className="text-[#6497D6] flex ml-3 mb-1 lg:ml-0 lg:mb-4 text-lg lg:text-3xl">
          <h2 className="font-semibold mr-2">Get In Touch</h2>
          <IoChatbubbles className="-ml-1 mt-1" />
        </div>

        <div 
          className="bg-white max-w-[95%] h-[330px] rounded-3xl relative mx-auto p-6 
          md:h-[395px]
          lg:p-10 lg:h-[510px] lg:max-w-[100%]">

          
        </div> 
      </section>
    </>
  )
}