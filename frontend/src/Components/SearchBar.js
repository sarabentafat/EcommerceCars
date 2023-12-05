import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
 const [isSearchActive, setIsSearchActive] = useState(false);
 return (
    <div className ="relative mx-2">
      <div className ="flex items-center border p-1 rounded-md">
        
          <input
            type="text"
           
            className = {`outline-none w-full border-2 p-1 border-black bg-gray-200 `}
            onFocus={() => setIsSearchActive(true)}
            onBlur={() => setIsSearchActive(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 flex items-center px-2 pointer-events-none ">
          <SearchIcon />
          </div>
      </div>
    </div>
 );
};

export default SearchBar;