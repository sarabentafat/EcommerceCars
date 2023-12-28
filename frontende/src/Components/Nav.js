import React, { useState } from 'react';
import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';
import {Bars3BottomRightIcon,XMarkIcon} from '@heroicons/react/24/solid'
export const Nav = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
   
  let [isOpen,setisOpen] =useState(false);
  return (
    <nav className={`flex items-center p-10  ${isOpen ? 'mb-32 ':'mb-0'} ` }>
      <div onClick={()=>setisOpen(!isOpen)}
      className='md:hidden  sm:w-10 sm:h-10 sm:rotate-180 sm:absolute sm:left-28  sm:top-10 xs '>
        {
          isOpen ? <XMarkIcon/>: <Bars3BottomRightIcon/>
        }
     
     
      </div>
      
      <ul className={`flex  md:flex-row space-x-20 font-serif text-lg sm:flex-col absolute  md:static 
       duration-[10ms] xs1 sm:ml-1
      ${isOpen ? 'top-[70px] ':'top-[-450px]'}  `}>
        <Link
           className={`xs2 sm:ml-20  mt-3 hover:text-yellow-600 hover:border-yellow-600 border-b-2 ${
            activeItem === "PostAnnonce"
              ? "text-yellow-600 border-yellow-600 border-b-2"
              : ""
          }`}
          to={"/"}
          onClick={() => handleItemClick("Home")}
        >
          Accueil
        </Link>
        <Link
          className={`mt-3 hover:text-yellow-600 hover:border-yellow-600 border-b-2 ${
            activeItem === "PostAnnonce"
              ? "text-yellow-600 border-yellow-600 border-b-2"
              : ""
          }`}
          to={"/post"}
          onClick={() => handleItemClick("PostAnnonce")}
        >
          Créer Annonce
        </Link>
        <Link
          className={`mt-3 hover:text-yellow-600 hover:border-yellow-600 border-b-2 ${
            activeItem === "GeneratePrice"
              ? "text-yellow-600 border-yellow-600 border-b-2"
              : ""
          }`}
          to={"/generate"}
          onClick={() => handleItemClick("GeneratePrice")}
        >
          Generer Prix
        </Link>
        <Link
          className={`mt-3 hover:text-yellow-600 hover:border-b-2 border-yellow-600 ${
            activeItem === "ContactUs"
              ? "text-yellow-600 border-b-2 border-yellow-600"
              : ""
          }`}
          to={"/contactus"}
          onClick={() => handleItemClick("ContactUs")}
        >
          Contacter Nos
        </Link>
        <Link
          to={"/profile"}
          onClick={() => handleItemClick("profile")}
          className={`mt-3 hover:text-yellow-600 hover:border-b-2 border-yellow-600 ${
            activeItem === "ContactUs"
              ? "text-yellow-600 border-b-2 border-yellow-600"
              : ""
          }`}
        >
          Profile
        </Link>
      </ul>
      <div className='ml-auto mt-0'>
        <SearchBar />
      </div>
    </nav>
  );
}

export default Nav;
