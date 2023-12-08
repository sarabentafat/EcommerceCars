import React from 'react';
import Nav from "./Nav.js";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function GeneratePrice() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
  <div className="flex flex-col h-screen">
      <div className='mt-4'>
        <Nav />
      </div>

      <div className="flex flex-col  mt-28 text-lg font-serif  mx-24">
          <div className='flex mb-7'>
            <div  className='mr-28 w-1/3'>
            <p className='mb-3'>Wilaya</p>
            <FormControl fullWidth>
            <Select
              labelId="demo-simple-select"
              id="demo-simple-select"
             >
            <MenuItem value={10}>Ten</MenuItem>
           <MenuItem value={20}>Twenty</MenuItem>
           <MenuItem value={30}>Thirty</MenuItem>
            </Select>
           </FormControl> 
            </div>
            <div  className='mr-28 w-1/3'>
            <p className='mb-3'>Marque</p>
            <FormControl fullWidth>
            <Select
              labelId="demo-simple-select"
              id="demo-simple-select"
             >
            <MenuItem value={10}>Ten</MenuItem>
           <MenuItem value={20}>Twenty</MenuItem>
           <MenuItem value={30}>Thirty</MenuItem>
            </Select>
           </FormControl> 
            </div>
            <div  className='mr-28 w-1/3'>
            <p className='mb-3'>Modele</p>
            <FormControl fullWidth>
            <Select
              labelId="demo-simple-select"
              id="demo-simple-select"
             >
            <MenuItem value={10}>Ten</MenuItem>
           <MenuItem value={20}>Twenty</MenuItem>
           <MenuItem value={30}>Thirty</MenuItem>
            </Select>
           </FormControl> 
            </div>
           </div>
          <div className='flex mb-7'>
          <div  className='mr-28 w-1/3'>
            <p className='mb-3'>Energie</p>
            <FormControl fullWidth>
            <Select
              labelId="demo-simple-select"
              id="demo-simple-select"
             >
            <MenuItem value={10}>Ten</MenuItem>
           <MenuItem value={20}>Twenty</MenuItem>
           <MenuItem value={30}>Thirty</MenuItem>
            </Select>
           </FormControl> 
            </div>
            <div  className='mr-28 w-1/3'>
            <p className='mb-3'>Kilométrage</p>
            <FormControl fullWidth>
            <Select
              labelId="demo-simple-select"
              id="demo-simple-select"
             >
            <MenuItem value={10}>Ten</MenuItem>
           <MenuItem value={20}>Twenty</MenuItem>
           <MenuItem value={30}>Thirty</MenuItem>
            </Select>
           </FormControl> 
            </div>
            <div  className='mr-28 w-1/3'>
            <p className='mb-3'>Année</p>
            <FormControl fullWidth>
            <Select
              labelId="demo-simple-select"
              id="demo-simple-select"
             >
            <MenuItem value={10}>Ten</MenuItem>
           <MenuItem value={20}>Twenty</MenuItem>
           <MenuItem value={30}>Thirty</MenuItem>
            </Select>
           </FormControl> 
            </div>
          </div>
          <div className='flex  mb-7'>
          <div  className='mr-28 w-1/3'>
            <p className='mb-3'>Transmission</p>
            <FormControl fullWidth>
            <Select
              labelId="demo-simple-select"
              id="demo-simple-select"
             >
            <MenuItem value={10}>Ten</MenuItem>
           <MenuItem value={20}>Twenty</MenuItem>
           <MenuItem value={30}>Thirty</MenuItem>
            </Select>
           </FormControl> 
            </div>
            <div  className='mr-28 w-1/3'>
            <p className='mb-3'>Couleur</p>
            <FormControl fullWidth>
            <Select
              labelId="demo-simple-select"
              id="demo-simple-select"
             >
            <MenuItem value={10}>Ten</MenuItem>
           <MenuItem value={20}>Twenty</MenuItem>
           <MenuItem value={30}>Thirty</MenuItem>
            </Select>
           </FormControl> 
            </div>
            <div  className='mr-28 w-1/3'>
            <p className='mb-3'>équipement</p>
            <FormControl fullWidth>
            <Select
              labelId="demo-simple-select"
              id="demo-simple-select"
             >
            <MenuItem value={10}>Ten</MenuItem>
           <MenuItem value={20}>Twenty</MenuItem>
           <MenuItem value={30}>Thirty</MenuItem>
            </Select>
           </FormControl> 
            </div>
          </div>
          <div className='flex  mt-12'>
            
            <p  className='ml-4 w-1/2'>Le Prix généré : <span className='text-[#BA790B]'> 400 Millions</span></p>
            <button className="bg-[#171717E5] text-white py-3 px-[99px] ml-44  text-lg">
                   Generate
                  </button>
          </div>

      </div>
  </div>
  );
}

export default GeneratePrice;
