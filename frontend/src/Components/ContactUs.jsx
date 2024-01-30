
import React from 'react';
import { HiPhone,HiMail,HiLocationMarker, } from 'react-icons/hi';
import { FaFacebookSquare,FaInstagram,FaLinkedin } from 'react-icons/fa';


export default function ContactUs() {
  return (
    <div  className='flex flex-col space-y-9  md:space-y-[100px]'>
    <NavB />

    <div className="flex w-full min-h-screen  justify-center items-center">
        
      <div className="flex flex-col mt-14 md:flex-row md:space-x-6 space-y-6 bg-zinc-100  w-full max-w-4xl p-8  text-white sm:p-12">
        {/* text */} 
        <div className="flex flex-col justify-between space-y-8 ">

          <div className="div">
             <h1 className="text-4xl  text-yellow-600 tracking-wide">Contact Us</h1>

             <p className="pt-2 text-neutral-900  text-sm">
             Join our community of car enthusiasts and stay updated on the latest
             industry trends.
            </p> 
          </div>
          <div className='flex flex-col space-y-6'>
           <div className='inline-flex items-center space-x-3' > 
           <HiPhone className="w-6 h-6 text-neutral-900 " />
            <span className="ml-2 text-lg text-neutral-900">+(213) 673 5672 43</span>
            </div>

            <div className='inline-flex items-center space-x-3' > 
           <HiMail   className="w-6 h-6 text-neutral-900 " />
            <span className="ml-2 text-lg text-neutral-900">CarsWebsite@gmail.com</span>
            </div>

            <div className='inline-flex items-center space-x-3' > 
           <HiLocationMarker  className="w-6 h-6 text-neutral-900 " />
            <span className="ml-2 text-lg text-neutral-900">Amizour,Bejaia</span>
            </div>
             </div>

             <div className=' flex  space-x-4'>
                <a href='/'> <FaFacebookSquare className="w-6 h-6 text-yellow-600" /></a>
                <a href='/'> <FaInstagram className="w-6 h-6 text-yellow-600" /></a>
                <a href='/'> <FaLinkedin className="w-6 h-6 text-yellow-600" /></a>
             </div>

        </div>

        {/* contact form */}
        <div className="bg-white  p-8 h-auto w-full">
            <div className='flex flex-col space-y-3' >
            <label className="text-l  text-neutral-900 ">Full Name</label>
            <input 
              type='text'
              className='w-full h-9 text-neutral-900 placeholder-neutral-300 bg-transparent border-[1.5px] p-1 border-neutral-900 outline-none focus:outline-none'
            />
             <label className="text-l mb-2 text-neutral-900 ">Email</label>

            <input 
              type='email'
              
              className='w-full h-9 text-neutral-900  placeholder-neutral-300 bg-transparent border-[1.5px] p-1 border-neutral-900  outline-none focus:outline-none '
              />
              <label className="text-l mb-2 text-neutral-900 ">Message</label>
              <input 
              type='text'
              
              className='w-full h-[200px] text-neutral-900  bg-transparent border-[1.5px] p-1 border-neutral-900  outline-none focus:outline-none '
              />
        <button
                  type="submit"
                  className="inline-block self-end bg-neutral-900 text-white px-4 py-2">
                  Send Message</button>
            </div>
        </div>

      </div>
    </div>
    </div>
  )
}