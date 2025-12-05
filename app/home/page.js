"use client"
import Image from "next/image"
import MyImage from "../../public/profile.png"
import Aashish from "../../public/Aashish_pic.jpg"
import { useRouter } from "next/navigation"

export default function page() {
  const router =  useRouter();
  const navigater = (path) => router.push(path);

  return (
    <div className='min-h-screen bg-[#0D1117] flex items-center '>
        <div className="w-1/2 pl-20  justify-around ">

        <div> 
            <h1 className=" text-white text-7xl font-sans font-semibold tracking-wide">
              Hi, I'm Aashish
            </h1>
            <h2 className="text-[45px]  w-fit text-[#2F81F7] ">
               Front-End Developer</h2>
                </div>

               <p className="mt-10 mb-10 text-[#9BA3AF] tracking-wider text-lg">
                A self-taught front-end developer with over 2 months of experience, I build responsive and user-friendly websites & app.
                I focus on clean code and efficent design, ensurng seamlesss interactions that align with both user expectations and 
                business objectives.
               </p>
               <button  onClick={()=>navigater("/contact")}
               className="px-8 py-3 text-white font-semibold rounded-3xl bg-[#2383E2] cursor-pointer hover:bg-[#1F6DC0] 
              transform transition duration-300 hover:translate-y-2 shadow-lg hover:shadow-blue-500/50  "
               > Contact </button>
        </div>
        <div className="w-1/2  flex justify-center items-center ">
        <div className="rounded-full bg-white w-90 h-90">
          <Image src={Aashish} alt="my picture" className=" rounded-full  object-cover "/>

        </div>
           
        </div>
    </div>
  )
}
