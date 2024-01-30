import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const SearchBar = () => {
  const [annonces, setAnnonces] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAnnonces = async () => {
      try {
        let apiUrl = "http://localhost:8000/api/annonces";
        const response = await axios.get(apiUrl);
        setAnnonces(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchAnnonces();
  }, []); // Add dependencies if needed

  return (
    <div className="relative ">
      <div className="flex items-center rounded-md">
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="search here"
          className={`outline-none w-full border-2 p-1 border-black bg-gray-100 `}
          onFocus={() => setIsSearchActive(true)}
          onBlur={() => setIsSearchActive(false)}
        />
        <div className="absolute top-0 right-0 bottom-0 flex items-center px-2 pointer-events-none">
          <SearchIcon />
        </div>
      </div>

      {search !== "" && (
        <div>
          {annonces
            .filter(
              (item) =>
                item.title &&
                item.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((annonce) => (
              <div key={annonce._id} className="flex-1 ml-5">
                <p className="pb-3 pt-1">{annonce.title}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
