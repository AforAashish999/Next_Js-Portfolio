'use client';

import {useRouter } from "next/navigation"

export default function HeaderOne() {
    const router = useRouter();
    const navigate = (path) => router.push(path);
  return (
    <div>
          <div className="bg-[#0D1117] flex justify-around 
          ">
          <button className="cursor-pointer text-lg font p-5 text-white hover:text-[#2F81F7]  "
           onClick={()=>navigate("/home")} >
             HOME
              </button>

          <button
           className="cursor-pointer text-lg font p-2 text-white hover:text-[#2F81F7]   "
          onClick={()=>navigate("/work")}>
             WORK
              </button>
              
          <button 
          className="cursor-pointer text-lg font p-2 text-white  hover:text-[#2F81F7]  "
           onClick={()=>navigate("/about")}>
             ABOUT
              </button>

               


          <button 
          className="cursor-pointer text-lg font p-2 text-white hover:text-[#2F81F7]  "
          onClick={()=>navigate("/contact")}>
             CONTACT 
             </button>
        </div>
    </div>
  )
}
