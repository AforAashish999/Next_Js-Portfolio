import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import SastoGadget from "../../public/sasto_gadget.png";
import InternshipManagement from "../../public/internship_management.png";
import AB from "../../public/ab.png";
import Portfolio from "../../public/portfolio.png";

export default function page() {
  return (
    <div className="min-h-screen bg-[#0D1117]  p-10">

      <div className="flex  flex-col items-center ">
        <h1 className=" text-6xl font-semibold font-mono text-[#2F81F7] "
        > Recent Works</h1>
        <h5 className="text-[#9BA3AF]"> A collection of projects, I've worked on</h5>
      </div>

      {/* FIRST PROJECT */}
      <div className="flex min-h-80 mt-20 p-10  ">
        {/* 1st DIV */}
        <div className="w-1/2 flex flex-col justify-between  z-10">
          <div>
            <h2 className="text font text-[#2F81F7]"> Feature Project </h2>
            <h2 className="text-4xl text-white font-semibold tracking-wider "> Sasto Gadget</h2>
          </div>
          <div className="translate-x-20 p-8 z-0 ">
            {/* collapsing to another div */}
            <div className=" p-  ">
              <p className="text-white text-lg tracking-wide bg-[#2A323B] p-5 rounded-xl ">
                A clean and responsive e-commerce website dedicated to gadgets. Users can browse products
                easily, check details, and navigate seamlessly.Built with a focus on user experience and
                smooth interactions. </p>
            </div>
            <div className="flex gap-2 cursor-pointer mt-4 ml-7 ">
              <FaGithub className="size-7 text-white" />
              <FaSquareXTwitter className="size-7 text-white cursor-pointer" />
              <FaLinkedin className="size-7 text-white  cursor-pointer" />
            </div>

          </div>
        </div>

        {/* 2nd DIV */}
        <div className="bg-[#2A323B] w-1/2 p-7 rounded-lg">
          <div className="h-full bg-white rounded-xl overflow-hidden">
            <Image src={SastoGadget} alt="sasto gadget" className="h-full w-full transition-transform duration-300 hover:scale-125  rounded-xl " />
          </div>

        </div>
      </div>

      {/* *****************SECOND PROJECT******************************** */}
      <div className="flex min-h-80 mt-20 p-10  ">
        {/* 2nd DIV */}
        <div className="bg-[#2A323B] w-1/2 p-7 rounded-lg  ">
          <div className="h-full bg-white rounded-xl overflow-hidden">
            <Image src={InternshipManagement} alt="internship management" className="h-full w-full transition-transform duration-300 hover:scale-125  rounded-xl " />
          </div>

        </div>
        {/* 1st DIV */}
        <div className="w-1/2 flex flex-col justify-between ">
          <div className=" flex flex-col items-end ">
            <h2 className="text font text-[#2F81F7]"> Feature Project </h2>
            <h2 className="text-4xl text-white font-semibold tracking-wider "> Internship Management</h2>
          </div>
          <div className="-translate-x-20 p-8  ">
            {/* collapsing to another div */}
            <div className=" p-  ">
              <p className="text-white text-lg tracking-wide bg-[#2A323B] p-5 rounded-xl
                  ">
                A streamlined web application designed to manage internship programs efficiently.Built with
                a focus on usability and scalability, providing a foundation for more complex workflow
                management. </p>
            </div>
            <div className="flex gap-2 cursor-pointer mt-4 justify-end mr-7 ">
              <FaGithub className="size-7 text-white" />
              <FaSquareXTwitter className="size-7 text-white cursor-pointer" />
              <FaLinkedin className="size-7 text-white  cursor-pointer" />
            </div>

          </div>
        </div>
      </div>

      {/* THIRD PROJECT */}
      <div className="flex min-h-80 mt-20 p-10 ">
        {/* 1st DIV */}
        <div className="w-1/2 flex flex-col justify-between z-10 ">
          <div>
            <h2 className="text font text-[#2F81F7]"> Feature Project </h2>
            <h2 className="text-4xl text-white font-semibold tracking-wider "> AB Renovation </h2>
          </div>
          <div className="translate-x-20 p-8 relative ">
            {/* collapsing to another div */}
            <div className="  ">
              <p className="text-white text-lg tracking-wide bg-[#2A323B] p-5 rounded-xl">
                A modern, responsive website showcasing renovation services and project portfolios.
                Includes service details, project galleries, and contact options to engage potential
                clients. </p>
            </div>
            <div className="flex gap-2 cursor-pointer mt-4 ml-7 ">
              <FaGithub className="size-7 text-white" />
              <FaSquareXTwitter className="size-7 text-white cursor-pointer" />
              <FaLinkedin className="size-7 text-white  cursor-pointer" />
            </div>

          </div>
        </div>

        {/* 2nd DIV */}
        <div className="bg-[#2A323B] w-1/2 p-7 rounded-lg z-0 ">
          <div className="h-full bg-white rounded-xl overflow-hidden">
            <Image src={AB} alt="ab rennovation" className="h-full w-full transition-transform duration-300 hover:scale-125  rounded-xl " />
          </div>

        </div>
      </div>

      {/* *****************FOURTH PROJECT******************************** */}
      <div className="flex min-h-80 mt-20 p-10  ">
        {/* 2nd DIV */}
        <div className="bg-[#2A323B] w-1/2 p-7 rounded-lg">
          <div className="h-full bg-white rounded-xl overflow-hidden">
            <Image src={Portfolio} alt="portfolio" className="h-full w-full transition-transform duration-300 hover:scale-125  rounded-xl " />
          </div>

        </div>
        {/* 1st DIV */}
        <div className="w-1/2 flex flex-col justify-between ">
          <div className=" flex flex-col items-end ">
            <h2 className="text font text-[#2F81F7]"> Feature Project </h2>
            <h2 className="text-4xl text-white font-semibold tracking-wider "> Professional Portfolio </h2>
          </div>
          <div className="-translate-x-20 p-8  ">
            {/* collapsing to another div */}
            <div className=" p-  ">
              <p className="text-white text-lg tracking-wide bg-[#2A323B] p-5 rounded-xl">
                A sleek and responsive portfolio website designed to showcase skills, projects, and professional experience.
               Built to highlight expertise in front-end development and user-centric design principles. </p>
            </div>
            <div className="flex gap-2 cursor-pointer mt-4 justify-end mr-7 ">
              <FaGithub className="size-7 text-white" />
              <FaSquareXTwitter className="size-7 text-white cursor-pointer" />
              <FaLinkedin className="size-7 text-white  cursor-pointer" />
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
