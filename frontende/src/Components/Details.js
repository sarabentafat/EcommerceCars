import React from 'react';
import Nav from "./Nav.js";
import Car1 from "../Pictures/image14.png";


function Details()
{
  return(
    <div className="flex flex-col h-screen font-serif"> 
    <Nav />
    <div className='flex md:flex-row sm:flex-col mt-20 md:ml-40 md:mr-28
    sm:ml-10 sm:mr-4 ss'>
      {/*first column*/}
      <div className='md:w-1/2'>
      <img src={Car1} className=" md:w-[700px] md:h-[700px] sm:w-[600px] sm:h-[400px] ss1" alt="Car Image" />
      </div>
      {/*second one*/}
      <div className='flex flex-col md:w-1/2 '>
         {/*text*/}
        <div className='ml-10 sm:mt-8 ss2'>
        <h1 className='text-3xl text-opacity-100'>1959 Cadillac Eldorado</h1>
        <div className=' p-0 mt-10 md:mr-52 sm:mr-52 '>
        <p className='text-xl text-black text-opacity-60'>The Cadillac Eldorado was part of the Cadillac line from 1953 to 2002, the longest-running American personal luxury car and the only one sold after the 1999 model year .</p>
        </div>
        </div>
         {/*inputs*/}
        <div className='flex md:m-10 sm:m-10 ss3'>
           <div >
           <p className='border-b-2 border-solid border-black pb-5 mb-6'>Modéle: <span className='text-gray-600 ml-2'>DMC 15</span></p>
           <p className='border-b-2 border-solid border-black pb-5 mb-6'>Kilométrage : <span className='text-gray-600 ml-2'>4000 KM</span></p>
           <p className='border-b-2 border-solid border-black pb-5 mb-6'>Energie: <span className='text-gray-600 ml-2'>Essence</span></p>
           <p className='border-b-2 border-solid border-black pb-5 mb-6'>Transmission: <span className='text-gray-600 ml-2'>Manuelle5</span></p>

           </div>
           <div className='md:ml-28 sm:ml-28 ss5'>
           <p className='border-b-2 border-solid border-black pb-5 mb-6'>Numéro : <span className='text-[#BA790B] ml-2'>0674326911</span></p>
           <p className='border-b-2 border-solid border-black pb-5 mb-6'>Couleur: <span className='text-gray-600 ml-2'>Jaune</span></p>
           </div>
        </div>
        <div className='flex  mt-12 mb-10'>
            
            <p  className='md:ml-10 sm:ml-10 ss6 md:w-1/3 sm:w-1/3 ss4'>Le Prix généré : <span className='text-[#BA790B]'> 400 Millions</span></p>
            <button className="bg-[#171717E5] text-white py-3 md:px-[50px] sm:px-[50px] ss7 md:ml-12 sm:ml-12  text-lg  ">
                   Envoyer Message
                  </button>
          </div>
        
      </div>
    </div>
     </div>

  );
}
export default Details;