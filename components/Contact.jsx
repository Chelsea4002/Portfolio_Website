'use client';

import { useState } from "react";
import { IoChatbubbles } from "react-icons/io5";
import Modal from "./Modal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [formSuccess, setFormSuccess] = useState(false)
  const [formSuccessMessage, setFormSuccessMessage] = useState("")

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  const submitForm = (e) => {
    e.preventDefault()

    const formURL = e.target.action
    const data = new FormData()

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    })

    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        'accept': 'application/json',
      },
    }).then((response) => response.json())
    .then((data) => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      })

      setFormSuccess(true)
      setFormSuccessMessage("Thank you for reaching out! I appreciate you taking the time to review my portfolio and contact me. I will get back to you as soon as possible.")
    })
  }

  const closeModal = () => {
    setFormSuccess(false);
  };

  return (
    <>
      <section id="contact" className="relative h-full scroll-mt-navbar">
        <div className="text-[#6497D6] flex mb-1 ml-3 md:ml-5 lg:ml-0 lg:mb-4 text-xl lg:text-3xl">
          <h2 className="font-semibold mr-2">Get In Touch</h2>
          <IoChatbubbles className="-pl-2 mt-1" />
        </div>

        <div 
          className="bg-white max-w-[95%] h-full rounded-3xl relative mx-auto p-6 
          lg:p-10 lg:max-w-[100%]"
        >
          <form method="POST" action="https://www.formbackend.com/f/664decaabbf1c319" onSubmit={submitForm}>
            <div className="mb-2 text-[16px] md:text-[20px] lg:text-[24px]">
              <input 
                type="text" 
                name="name" 
                placeholder="Name*" 
                onChange={handleInput} 
                value={formData.name} 
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6497D6]"
              />
            </div>

            <div className="mb-2 text-[16px] md:text-[20px] lg:text-[24px]">
              <input 
                type="email" 
                name="email" 
                placeholder="Email*" 
                onChange={handleInput} 
                value={formData.email} 
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6497D6]"
              />
            </div>

            <div className="mb-2 text-[16px] md:text-[20px] lg:text-[24px]">
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                onChange={handleInput} 
                value={formData.subject} 
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6497D6]"
              />
            </div>

            <div className="text-[16px] md:text-[20px] lg:text-[24px]">
              <textarea 
                name="message" 
                placeholder="Write your message*" 
                onChange={handleInput} 
                value={formData.message} 
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6497D6] h-32 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="rounded-lg text-[18px] font-semibold text-white bg-[#6497D6] w-full mt-[1%]
              hover:bg-slate-300 hover:text-[#6497D6] 
              md:text-[25px]
              lg:text-[30px]
              transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div> 
      </section>

      <Modal show={formSuccess} message={formSuccessMessage} onClose={closeModal} />
    </>
  )
}