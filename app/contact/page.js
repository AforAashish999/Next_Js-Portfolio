'use client';
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { useForm } from "react-hook-form";

export default function page() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
     <div className="min-h-screen bg-[#0D1117]  p-10">

      <div className="flex  flex-col items-center  ">
        <h1 className=" text-6xl font-semibold font-mono text-white "
        > Contact</h1>
      </div>

      <div className="flex min-h-90 mt-20  p-5 ">

        {/* TEXT AREA */}
        <div className="w-1/2 bg-[#0D1117] p-8 ">
        <div className="space-y-5"> 
          <h2 className=" text-[#2F81F7] text-4xl font-bold  "> Drop me a message</h2>
          <h2 className="text-xl text-white"> I’d love to hear from you! Fill out the form below and I’ll get back to you soon</h2>
          </div>

          <div className="mt-20 space-y-7 ">
            <div className="flex items-center gap-3">
              <FaPhoneSquareAlt className="text-3xl text-[#2F81F7] " />
              <h2 className="text-2xl text-[#9BA3AF]"> +977 9816204918 </h2>
            </div>

            <div className="flex items-center gap-3">
              <IoMdMail className="text-3xl text-[#2F81F7] "/>
              <h2 className="text-2xl text-[#9BA3AF]"> aashishgharti108@gmail.com </h2>
            </div>

             <div className="flex items-center gap-3 ">
             <FaLocationDot className="text-3xl text-[#2F81F7] " />
              <h2 className="text-2xl text-[#9BA3AF]"> Bharatpur, Chitwan </h2>
            </div>

          </div>
        </div>

        {/* FORM AREA */}
        <div className="text-white p-5  w-1/2">
          <form
          className="p-10 space-y-5 bg-[#2A323B] rounded-xl">

            <div className="flex flex-col gap-2 "> 
            <label className="text-xl"> Name </label>
            <input 
            type="text" 
            placeholder="Please, enter your name" 
            className="border-[#CCCCCC]  bg-[#555B62] rounded-md p-3 focus:outline-none"
             {...register("name", {required: "Please fill your name"})} />
              { errors.name && (<p className="text-xs text-red-500 "> {errors.name.message} </p>) }
            </div>

               <div className="flex flex-col gap-2 "> 
                  <label className="text-xl"> Email </label>
                 <input 
                   type="email"
                  placeholder="Please enter your Email"
                   className="border-[#CCCCCC]  bg-[#555B62] rounded-md p-3 focus:outline-none"
                    {...register("email", {required: "Please enter valid email"} )} />
                    {errors.email && (<p className="text-xs text-red-500 "> {errors.email.message} </p>)}
                </div>

                <div className="flex flex-col gap-2"> 
                  <label className="text-xl"> Message </label>
                  <textarea 
                  placeholder="Your message here......"
                  rows={4}
                    className="border-[#CCCCCC]  bg-[#555B62]  rounded-md p-3 focus:outline-none"
                      {...register("msg", {required: "Please enter your message"} )} />
                       {errors.msg && (<p className="text-xs text-red-500 "> {errors.msg.message} </p>)}
                </div>

                <button className="bg-blue-500 hover:to-blue-800  text-white font-bold rounded-3xl px-6 py-3
                cursor-pointer   transform transition duration-300 hover:translate-y-2 shadow-lg hover:shadow-blue-500/50  ">
                  Send Message
                </button>
          </form>
        </div>
      </div>

    </div>
  )
}
