import React from 'react';
import Nav from "./Nav.js";
function Details()
{
  return(
    <div className="flex flex-col h-screen font-serif"> 
    <div className='mt-10'>
    <Nav />
    </div>
    <div className='flex flex-1 mt-40 '>
      {/*first column*/}
      <div className='w-1/2'>
      </div>
      {/*second one*/}
      <div className='w-1/2'>
        <h1 className='text-3xl text-opacity-100'>1959 Cadillac Eldorado</h1>
        <div className=' p-0 mt-10 mr-64 '>
        <p className='text-xl text-black text-opacity-60'>The Cadillac Eldorado was part of the Cadillac line from 1953 to 2002, the longest-running American personal luxury car and the only one sold after the 1999 model year .</p>
        </div>
        
      </div>
    </div>
     </div>

  );
}
export default Details;