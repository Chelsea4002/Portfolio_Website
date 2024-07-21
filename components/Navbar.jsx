"use client";

import { navData } from "@/constants";
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {

  const [isClicked, setIsClicked] = useState(false);

  function toggleNavbar() {
    setIsClicked(!isClicked);
  }

  function handleLinkClick() {
    if (isClicked) {
      setIsClicked(false);
    }
  }

  return (
    <>
      <nav className="bg-[#B3D7ED] z-10 fixed w-full top-0">
        <div  className="max-w-7xl mx-auto px-4 md:px-10 lg:px-8">
          <div className="flex items-center justify-between h-12 lg:h-16">
            <div className="flex items-center">
              <div className="flex-shirnk-0">
                <Link href="#home">
                    <Image
                      src="/logo.png"
                      width={90}
                      height={90}
                      alt="Logo"
                      className="mt-[10px] -ml-6 md:mt-[14px] md:-ml-4 md:w-[95px] md:h-[95px] lg:mt-[14px] lg:-ml-5 lg:w-[130px] lg:h-[130px]"
                    />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4 text-white text-xl font-extrabold md:space-x-1">
                {navData.map(({ _id, title, href }) => (
                  <Link key={_id} href={href} className="cursor-pointer block hover:text-[#6497D6] hover:underline hover:bg-white rounded-lg p-2">
                    <span>{title}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-1 rounded-md text-white
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white -mr-2"
                onClick={toggleNavbar}
              >
                { isClicked ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        { isClicked && (
          <div className="md:hidden absolute top-10 left-0 w-full bg-[#B3D7ED] z-20"> 
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-white text-lg font-extrabold">
              {navData.map(({ _id, title, href }) => (
                <Link key={_id} href={href} className="cursor-pointer block hover:text-[#6497D6] hover:underline hover:bg-white rounded-lg p-2 text-center" onClick={handleLinkClick}>
                  <span>{title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}