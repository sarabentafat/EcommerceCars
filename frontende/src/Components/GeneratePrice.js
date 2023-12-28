import React from 'react'
import Nav from "./Nav.js";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Wilayas from './Json/wilayas.json';
import Marque from './Json/marque.json';
import Annee from './Json/annee.json';
import Carburant from './Json/typeCarburant.json';
import Transmission from './Json/transmission.json';
import Vendeur from './Json/typeVendeur.json';
import Proprietaire from './Json/proprietaire.json';

function GeneratePrice() {
 const wilayas=Wilayas.w;
 const marque=Marque.m;
 const annee=Annee.y;
 const transmission=Transmission.t;
 const carburant=Carburant.c;
 const vendeur=Vendeur.s;
 const proprietaire=Proprietaire.o;
  return (
  <div className="flex flex-col h-screen">
  
        <Nav />
    
      <div className="flex flex-col  mt-16 text-lg font-serif  md:mx-24 sm:mx-12 xGG">
          <div className='flex mb-7'>
            <div  className='md:mr-28 md:w-1/3 sm:w-1/3 sm:mr-6 xG'>
            <p className='mb-3'>Wilaya</p>
            <FormControl fullWidth>
              <Select
                labelId="wilaya-select"
                id="wilaya-select"
              >
                {wilayas.map(wilaya => (
                  <MenuItem key={wilaya.id} value={wilaya.id}>
                    {wilaya.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            </div>
            <div  className='md:mr-28 md:w-1/3 sm:w-1/3 sm:mr-6 xG'>
            <p className='mb-3'>Marque</p>
            <FormControl fullWidth>
            <Select
              labelId="marque-select"
              id="marque-select"
             >
            {marque.map(marque => (
                  <MenuItem key={marque} value={marque.name}>
                    {marque.name}
                  </MenuItem>
                ))}
            </Select>
           </FormControl> 
            </div>
            <div  className='md:mr-28 md:w-1/3 sm:w-1/3 sm:mr-6 xG'>
            <p className='mb-3'>type de vendeur</p>
            <FormControl fullWidth>
            <Select
              labelId="vendeur-simple-select"
              id="vendeur-simple-select"
             >
              {vendeur.map(vend => (
                  <MenuItem key={vend} value={vend}>
                    {vend}
                  </MenuItem>
                ))}
            </Select>
           </FormControl> 
            </div>
           </div>
          <div className='flex mb-7'>
          <div  className='md:mr-28 md:w-1/3 sm:w-1/3 sm:mr-6 xG'>
            <p className='mb-3'>Type de carburant</p>
            <FormControl fullWidth>
            <Select
              labelId="Carburant-simple-select"
              id="Carburant-simple-select"
             >
              {carburant.map(carb => (
                  <MenuItem key={carb} value={carb}>
                    {carb}
                  </MenuItem>
                ))}
            </Select>
           </FormControl> 
            </div>
            <div  className='md:mr-28 md:w-1/3 sm:w-1/3 sm:mr-6 xG'>
            <p className='mb-3'>Kilométrage</p>
            <TextField id="outlined-basic" variant="outlined" fullWidth />
            </div>
            <div  className='md:mr-28 md:w-1/3 sm:w-1/3 sm:mr-6 xG'>
            <p className='mb-3'>Année</p>
            <FormControl fullWidth>
            <Select
              labelId="anne-select"
              id="annee-simple-select"
             >
            {annee.map(annee => (
                  <MenuItem key={annee} value={annee}>
                    {annee}
                  </MenuItem>
                ))}
            </Select>
           </FormControl> 
            </div>
          </div>
          <div className='flex  mb-7'>
          <div  className='md:mr-28 md:w-1/3 sm:w-1/3 sm:mr-6 xG'>
            <p className='mb-3'>Transmission</p>
            <FormControl fullWidth>
            <Select
              labelId="transmission-select"
              id="transmission-simple-select"
             >
             { transmission.map(trans => (
                  <MenuItem key={trans} value={trans}>
                    {trans}
                  </MenuItem>
                ))}
            </Select>
           </FormControl> 
            </div>
            <div  className='md:mr-28 md:w-1/3 sm:w-1/3 sm:mr-6 xG'>
            <p className='mb-3'>Proprietaire</p>
            <FormControl fullWidth>
            <Select
              labelId="Proprietraire-simple-select"
              id="Proprietraire-simple-select"
             >
            { proprietaire.map(prop => (
                  <MenuItem key={prop} value={prop}>
                    {prop}
                  </MenuItem>
                ))}
            </Select>
           </FormControl> 
            </div>
            <div className='md:mr-28 md:w-1/3 sm:w-1/3 sm:mr-6 xG'></div>
          </div>
          <div className='flex  mt-12 mb-10'>
            
            <p  className='md:ml-4 md:w-1/2  sm:w-1/2 xsl'>Le Prix généré : <span className='text-[#BA790B]'> 400 Millions</span></p>
            <button className="bg-[#171717E5] text-white py-3 md:px-[98px] md:ml-44 sm:px-[59px] text-lg sm:ml-28 xsl1">
                   Génerer
                  </button>
          </div>

      </div>
  </div>
  );
}

export default GeneratePrice;
