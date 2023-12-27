import React from 'react';
import Nav from "./Nav.js";
import TextField from '@mui/material/TextField';

function PostAnnounce() {
 

  return (
    <div className="flex flex-col h-screen"> 
    <div className='mt-10'>
    <Nav />
    </div>
     
      <div className="flex flex-1 mt-32 text-2xl font-serif ">
       
        <div className='flex flex-col w-1/2 ml-64'>
          <div className='ml-12 mb-3' >
          <TextField id="standard-basic" label="Titre" variant="standard" 
            
          />
          </div>
          <div className='ml-12 mb-3' >
          <TextField id="standard-basic" label="Description" variant="standard" />
          </div>
          <div className='ml-12 mb-3' >
          <TextField id="standard-basic" label="Modéle" variant="standard" />
          </div>
          <div className='ml-12 mb-3' >
          <TextField id="standard-basic" label="Kilométrage" variant="standard" />
          </div>
          <div className='ml-12 mb-3' >
          <TextField id="standard-basic" label="Energie" variant="standard" />
          </div>
          <div className='ml-12 mb-3' >
          <TextField id="standard-basic" label="Transmission" variant="standard" />
          </div>
        </div>

        <div className='w-1/2'>
        <div className=' mb-3' >
          <TextField id="standard-basic" label="Modéle" variant="standard" />
          </div>
          <div className=' mb-3' >
          <TextField id="standard-basic" label="Prix" variant="standard" />
          </div>
          <div className=' mb-3' >
          <TextField id="standard-basic" label="Number" variant="standard" />
          </div>
          <div className=' mb-3' >
          <TextField id="standard-basic" label="Couleur" variant="standard" />
          </div>
          <button className="bg-[#BA790B] text-white py-1 px-7  mt-10 text-lg">
                   Load Photo
                  </button>
          
        </div>
      </div>
    </div>
  );
}

export default PostAnnounce;