import React from 'react';
import pro from '../Pictures/pro.png';
import { BiSolidEditAlt } from "react-icons/bi";
function EditProfile(){
  return(
   <div className='md:flex md:flex-row sm:flex-col mx-20 md:my-28 md:gap-x-48 text-xl font-serif'>
    {/**first column */}
    <div className='flex flex-col md:w-1/2'>
    <label>Nom et Prénom </label>
     
      <input type='text'  className = {`outline-none  border-2 p-1 border-gray-500 bg-opacity-0 mt-2 mb-6  `}/>
     <label>Email </label>

      
      <input type='text' className = {`outline-none  border-2 p-1 border-gray-500 bg-opacity-0 mt-2 mb-6  `}/>
      
      <label>Numero de Téléphone </label>
     
      <input type='text' className = {`outline-none  border-2 p-1 border-gray-500 bg-opacity-0  mt-2 mb-6 `}/>
     
       <label>Adresse </label>
     
     
      <input type='text' className = {`outline-none  border-2 p-1 border-gray-500 bg-opacity-0 mt-2 mb-6  `}/>
     
    </div>
     {/**Second column */}
     <div className='flex flex-col w-1/2'>
     <div className=" relative rounded-full w-40 border-2 border-yellow-500 p-2">
        <img src={pro} alt='' className='w-full h-full rounded-full  object-cover'/>
        <div className=''>
        <BiSolidEditAlt className="absolute bottom-3 right-4    bg-[#BA790B]  rounded-full w-6 h-6 p-1 text-white  " /> 
        </div>
       
    </div>
      <div className='md:mt-8'>
      <label>Bio</label>
      <textarea rows={4} className = {`outline-none  border-2 border-gray-500 bg-opacity-0 mt-2 `}/>
      </div>
        <button className="bg-[#BA790B] text-white py-1 md:px-7  mt-10  text-lg md:mr-24  ">
           Sauvegarder
          </button>
     </div>
     </div>
  );
}

export default EditProfile;