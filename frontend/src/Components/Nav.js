import React, { useState } from 'react';
import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';


function Nav() {
  const [activeItem, setActiveItem] = useState(null);
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <nav className="main-nav">
     
      <ul className="flex space-x-20 absolute ml-40 mb-30 p-4 font-serif text-lg">
        <Link
          className={`mt-3 hover:text-yellow-600 hover:border-yellow-600 border-b-2 ${
            activeItem === "Home"
              ? "text-yellow-600 border-yellow-600 border-b-2"
              : ""
          }`}
          to={"/"}
          onClick={() => handleItemClick("Home")}
        >
          Home
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
          Post Annonce
        </Link>
        <Link
          className={`mt-3 hover:text-yellow-600 hover:border-yellow-600 border-b-2 ${
            activeItem === "GeneratePrice"
              ? "text-yellow-600 border-yellow-600 border-b-2"
              : ""
          }`}
          to={'/generate'}
          onClick={() => handleItemClick("GeneratePrice")}
        >
          Generate Price
        </Link>
        <Link
          className={`mt-3 hover:text-yellow-600 hover:border-b-2 border-yellow-600 ${
            activeItem === "ContactUs"
              ? "text-yellow-600 border-b-2 border-yellow-600"
              : ""
          }`}
          to={'/contactus'}
          onClick={() => handleItemClick("ContactUs")}
        >
          Contact Us
        </Link>
        <Link
          className={`mt-3 hover:text-yellow-600 hover:border-b-2 border-yellow-600 ${
            activeItem === "profile"
              ? "text-yellow-600 border-b-2 border-yellow-600"
              : ""
          }`}
          to={'/profile'}
          onClick={() => handleItemClick("profile")}
        >
          Profile
        </Link>
        <SearchBar />
      </ul>
    </nav>
  );
}

export default Nav;