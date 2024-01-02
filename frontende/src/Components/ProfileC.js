import React from 'react';
import pro from '../Pictures/pro.png';


export default function ProfilC({toggle}) {
    return (
    
        <div className={`flex flex-col gap-5 items-center 
 ${toggle 
    ? 'transition-all duration-300 delay-200' 
    :''}`}>
    <div className="min-w-[4rem] h-[4rem]  rounded-full">
        <img src={pro} alt='' className='w-full h-full rounded-full  object-cover'/>
    </div>
    <div className={toggle ? 'opacity-0 delay-200': 'md:flex md:flex-col md:justify-center md:items-center sm:flex sm:flex-col sm:justify-center sm:items-center opacity-0 sm:opacity-100 md:opacity-100'}>
        <h1  className='text-xl text-white'>Souha344</h1>
        <span className='text-[o.75] opacity-70 text-white mb-9 '>Queen of all times period </span>
    </div>
        </div>
        )
  }