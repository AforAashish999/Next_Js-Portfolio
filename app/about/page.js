import Image from "next/image";
import C from "../../public/(logos)/c.png"
import Html from "../../public/(logos)/html.png"
import CSS from "../../public/(logos)/css.png"
import Tailwind from "../../public/(logos)/Tailwind.png"
import JS from "../../public/(logos)/js.png"
import React from "../../public/(logos)/react.png"
import Next from "../../public/(logos)/Next.js.png"


export default function page() {
  return (
    <div className="min-h-screen bg-[#0D1117] p-30 "> 
    
    <div className="flex justify-center ">
      <h1 className=" text-5xl font-semibold font-mono  text-[#2F81F7]"
      > About</h1>
    </div>

    <p
     className="mt-15 mb-10 text-[#9BA3AF] tracking-widest text-xl"> 
     I'm a junior front-end developer looking for a new role in an exciting company. I focus on writing 
      accessible HTML, using Tailwind and writing clean JavaScript. When writing JavaScript code, I mostly
       use NEXT-JS, but I can adapt to whatever tools are required. I'm based in Chitwan, Nepal, but I'm happy
        working remotely and have experience in remote teams. When I'm not coding, you'll find me outdoors.
         I love being out in nature wheter that's going for a walk, run or cycling. I'd love you to 
         check out my work.</p>


      <div className="flex justify-center pt-20"> 
         <div className="grid grid-cols-7   gap-4  items-start">

          <div className="h-20 w-20">
            <Image src={Html} alt="html logo" />
          </div>

          <div className="h-20 w-20 ">
            <Image src={CSS} alt="css logo" />
          </div>

          <div className="h-20 w-20">
            <Image  src={C} alt="c++ logo"  />
          </div>

          <div className="h-20 w-20"> 
            <Image src={Tailwind} alt="tailwind logo" />
          </div>

          <div className="h-20 w-20">
            <Image src={JS} alt="JavaScript logo" />
          </div>

          <div className="h-20 w-20">
            <Image src={React} alt="React logo" />
          </div>

          <div className="h-20 w-20 ">
            <Image src={Next} alt="next.js logo" className="bg-white" />
          </div>

         </div>

          </div>
    </div>
  )
}
