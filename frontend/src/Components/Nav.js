import React, { useState } from 'react';
import SearchBar from "./SearchBar";


function Nav() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <nav className="main-nav">
      <ul className="flex space-x-20 absolute ml-40 mb-30 p-4 font-serif text-lg">
        <a
          className={`mt-3 hover:text-yellow-600 hover:border-yellow-600 border-b-2 ${activeItem === 'Home' ? 'text-yellow-600 border-yellow-600 border-b-2' : ''}`}
          href="/"
          onClick={() => handleItemClick('Home')}
        >
          Home
        </a>
        <a
          className={`mt-3 hover:text-yellow-600 hover:border-yellow-600 border-b-2 ${activeItem === 'PostAnnonce' ? 'text-yellow-600 border-yellow-600 border-b-2' : ''}`}
          href="/"
          onClick={() => handleItemClick('PostAnnonce')}
        >
          Post Annonce
        </a>
        <a
          className={`mt-3 hover:text-yellow-600 hover:border-yellow-600 border-b-2 ${activeItem === 'GeneratePrice' ? 'text-yellow-600 border-yellow-600 border-b-2' : ''}`}
          href="/"
          onClick={() => handleItemClick('GeneratePrice')}
        >
          Generate Price
        </a>
        <a
          className={`mt-3 hover:text-yellow-600 hover:border-b-2 border-yellow-600 ${activeItem === 'ContactUs' ? 'text-yellow-600 border-b-2 border-yellow-600' : ''}`}
          href="/"
          onClick={() => handleItemClick('ContactUs')}
        >
          Contact Us
        </a>
        <SearchBar/>
      </ul>
    </nav>
  );
}

export default Nav;