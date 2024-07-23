import { IoBookOutline } from "react-icons/io5";

const languages = [
  {
      id: 1,
      src: "/logo/html.png",
      title: "HTML",
      style: "shadow-orange-500"
  },
  {
      id: 2,
      src: "/logo/css.png",
      title: "CSS",
      style: "shadow-blue-500"
  },
  {
      id: 3,
      src: "/logo/javascript.png",
      title: "JavaScript",
      style: "shadow-yellow-500"
  },
  {
      id: 4,
      src: "/logo/c.png",
      title: "C",
      style: "shadow-blue-800"
  },
  {
      id: 5,
      src: "/logo/python.png",
      title: "Python",
      style: "shadow-sky-800",
  },
  {
      id: 6,
      src: "/logo/cpp.png",
      title: "C++",
      style: "shadow-blue-700"
  },
  {
      id: 7,
      src: "/logo/Nextjs.png",
      title: "Next.js",
      style: "shadow-black"
  },
  {
      id: 8,
      src: "/logo/reactjs.png",
      title: "React.js",
      style: "shadow-sky-600"
  },
  {
      id: 9,
      src: "/logo/expressjs.png",
      title: "Express.js",
      style: "shadow-sky-600"
  },
  {
      id: 10,
      src: "/logo/nodejs.png",
      title: "Node.js",
      style: "shadow-green-600"
  },
  {
      id: 11,
      src: "/logo/Bootstrap.png",
      title: "Bootstrap",
      style: "shadow-purple-600"
  },
  {
      id: 12,
      src: "/logo/tailwind.png",
      title: "Tailwind",
      style: "shadow-sky-400"
  },
  {
      id: 13,
      src: "/logo/oracle.png",
      title: "oracle",
      style: "shadow-red-500"
  },
  {
      id: 14,
      src: "/logo/MongoDB.png",
      title: "MongoDB",
      style: "shadow-green-600"
  },
  {
      id: 15,
      src: "/logo/GitHub.png",
      title: "GitHub",
      style: "shadow-gray-400"
  },
  {
      id: 16,
      src: "/logo/Jira.png",
      title: "Jira",
      style: "shadow-blue-500"
  },
  {
      id: 17,
      src: "/logo/Figma.png",
      title: "Figma",
      style: "shadow-red-400"
  },
  {
      id: 18,
      src: "/logo/microsoftOffice.png",
      title: "Microsoft Office",
      style: "shadow-orange-400"
  }
];

export default function Skills() {
  return (
    <>
      <section id="skills" className="relative h-full scroll-mt-navbar">
        <div className="text-[#6497D6] flex mb-1 ml-3 md:ml-5 lg:ml-0 lg:mb-4 text-xl lg:text-3xl">
          <h2 className="font-semibold mr-2">Skills</h2>
          <IoBookOutline className="-pl-2 mt-1" />
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