import React from 'react';
import Nav from "./Nav.js";
import TextField from '@mui/material/TextField';

function ModifyAnnounces(){
return(
  <div className='font-serif'>
    <Nav/>
    <h1 className='text-[#BA790B] text-3xl mt-12 md:ml-72 sm:ml-24 tm font-bold'>Modifié les announces</h1>
    <div className="flex md:flex-1 mt-10 text-2xl sm:flex-row xss font-serif ">
    
       <div className='flex flex-col md:w-1/2 md:ml-64  sm:w-1/2 sm:ml-20 xs13 '>
         <div className='xss1 md:mb-3 sm:mb-3' >
         <TextField id="standard-basic" label="Titre" variant="standard" 
           
         />
         </div>
         <div className='xss1 md:mb-3 sm:mb-3' >
         <TextField id="standard-basic" label="Description" variant="standard" />
         </div>
         <div className='xss1 md:mb-3 sm:mb-3' >
         <TextField id="standard-basic" label="Modéle" variant="standard" />
         </div>
         <div className='xss1 md:mb-3 sm:mb-3' >
         <TextField id="standard-basic" label="Kilométrage" variant="standard" />
         </div>
         <div className='xss1 md:mb-3 sm:mb-3' >
         <TextField id="standard-basic" label="Energie" variant="standard" />
         </div>
         <div className=' xss1 md:mb-3 sm:mb-3' >
         <TextField id="standard-basic" label="Transmission" variant="standard" />
         </div>
       </div>

       <div className='md:w-1/2 sm:w-1/2 xs15 '>
       <div className='xss1 md:mb-3 sm:mb-3' >
         <TextField id="standard-basic" label="Modéle" variant="standard" />
         </div>
         <div className=' xss1 md:mb-3 sm:mb-3' >
         <TextField id="standard-basic" label="Prix" variant="standard" />
         </div>
         <div className=' xss1 md:mb-3 sm:mb-3' >
         <TextField id="standard-basic" label="Numéro" variant="standard" />
         </div>
         <div className=' xss1 md:mb-3 sm:mb-3' >
         <TextField id="standard-basic" label="Couleur" variant="standard" />
         </div>
         <button className="bg-[#BA790B] text-white py-1 px-7  md:mt-10  text-lg sm:mt-10 xss2">
           Modifier
         </button>
         
       </div>
     </div>

  </div>
);
}

export default ModifyAnnounces;
