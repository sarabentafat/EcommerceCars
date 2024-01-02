import React, { useState } from "react";
import {BiChevronLeft} from 'react-icons/bi';
import SideBarData from "./SideBar";
import ProfilC from "./ProfileC";
import Nav from './Nav';

import {Outlet} from 'react-router-dom'

export default function ProfilP() {
    const[toggle,setToggle]=useState(false);
    return (
      <div flex flex-row>
            <Nav />
     <div className="flex ">
     <div className={` ${toggle ? 'md:w-[5.8rem] sm:w-[5rem] w-[5rem]' : ''} bg-yellow-600  md:w-[20rem] sm:w-[20rem]  p-4 w-[5rem] transition-all duration-300 relative`}>
     <ProfilC toggle={toggle} />
    <SideBarData  toggle={toggle}/>
     <div className="absolute top-[7rem] flex justify-center items-center -right-5 w-10 h-10 bg-yellow-600 rounded-full 
     "cursor-pointer onClick={() => {
        setToggle(!toggle);}}>
        <BiChevronLeft className={`${
  toggle ? 'rotate-180' : ''
} text-3xl  text-white transition-all duration-300`} />

      </div>
    
      </div>
      <div>
        {<Outlet/>}
      </div>
     
     </div>
      </div>
    )
  }