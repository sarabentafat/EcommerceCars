import React, { useState } from "react";
import {BiChevronLeft} from 'react-icons/bi';
import SideBarData from "./SideBarData";
import ProfilC from "./ProfilC";
import NavB from './NavB';
export default function ProfilP() {
    const[toggle,setToggle]=useState(false);
    return (
      <div flex flex-row>
            <NavB />
     
<div className={` ${toggle ? 'w-[5.8rem]' : ''} bg-yellow-600 h-screen w-[20rem]  p-4 transition-all duration-500 relative`}>
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
<NavB/>

      </div>
    )
  }