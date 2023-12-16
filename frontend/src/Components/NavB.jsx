import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';

import { Link } from 'react-scroll';
import SearchBarS from './SearchBarS';

const NavB = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full bg-white h-[80px] flex justify-end items-center px-5  text-black'>
    

      
      <div className=' md:flex md:flex-row md:space-x-10 items-center'>
      <ul className='hidden md:flex md:flex-row md:space-x-10'>
        <li>
          <Link to='/' smooth={true} duration={500} className='cursor-pointer text-[20px] text-black hover:text-yellow-600 border-transparent hover:border-yellow-500 border-b-2 '>
            Home
          </Link>
        </li>
        <li>
          <Link to='/' smooth={true} duration={500}  className='cursor-pointer text-[20px] text-black hover:text-yellow-600   border-transparent hover:border-yellow-500 border-b-2 ' >
            Post Annonce
          </Link>
        </li>
        <li>
          <Link to='/' smooth={true} duration={500} className='cursor-pointer text-[20px] text-black hover:text-yellow-600  border-transparent hover:border-yellow-500 border-b-2  '>
            Generate Price
          </Link>
        </li>
        <li>
          <Link to='/' smooth={true} duration={500} className='cursor-pointer text-[20px] text-black hover:text-yellow-600  border-transparent hover:border-yellow-500 border-b-2  '>
            Contact Us
          </Link>
        </li>
        <li>
          <Link to='/' smooth={true} duration={500} className='cursor-pointer text-[20px] text-black hover:text-yellow-600  border-transparent hover:border-yellow-500 border-b-2  '>
            Profil
          </Link>
        </li>
      </ul>
      <SearchBarS />
      </div>
      

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-white  flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-3xl '>
          <Link onClick={handleClick} to='/' smooth={true} duration={500}  ClassName='cursor-pointer text-black hover:text-yellow-600'>
            Home
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          {' '}
          <Link onClick={handleClick} to='/' smooth={true} duration={500}  ClassName='cursor-pointer text-black hover:text-yellow-600' >
            Post Annonce
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          {' '}
          <Link onClick={handleClick} to='/' smooth={true} duration={500}  ClassName='cursor-pointer text-black hover:text-yellow-600'>
          Generate Price
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          {' '}
          <Link onClick={handleClick} to='/' smooth={true} duration={500}  ClassName='cursor-pointer text-black hover:text-yellow-600'>
          Contact Us
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          {' '}
          <Link onClick={handleClick} to='/' smooth={true} duration={500}  ClassName='cursor-pointer text-black hover:text-yellow-600' >
          Profil
          </Link>
        </li>
      </ul>

      
      </div>
  );
};

export default NavB;