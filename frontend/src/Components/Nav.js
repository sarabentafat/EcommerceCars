import React, { useState } from 'react';
import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import { logoutUser } from '../redux/apiCalls/authApiCall';
import { CiMenuBurger } from "react-icons/ci";
import { BsBookmarkHeart } from "react-icons/bs";
export const Nav=() =>{
  
  const dispatch=useDispatch()
  const {user}=useSelector(state=>state.auth)
  const [activeItem, setActiveItem] = useState(null);
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    toggleMenu()
  };
  const [isOpen, setIsOpen] = useState(false);
  
  const [isOpena, setIsOpena] = useState(false);


  const toggleDropdown = () => {
    setIsOpena(!isOpena);
  };
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div>
      <div className="md:hidden flex items-center justify-between">
        <button
          onClick={toggleMenu}
          className="text-black focus:outline-none focus:border-none"
        >
          <CiMenuBurger size={40} />
        </button>
        <SearchBar />
        {user && (
          <>
            <div className="relative inline-block text-left m-2">
              <div className="flex gap-2 items-center">
                <button onClick={toggleDropdown} type="button">
                  <img
                    src={user?.profilePic.url}
                    alt="user photo"
                    className="w-10 h-10 rounded-full"
                  />
                </button>
                <BsBookmarkHeart size={32} />
              </div>

              {isOpena && (
                <div className="absolute right-0 mt-2 space-y-2 bg-white border border-gray-300 rounded-md shadow-md">
                  <Link
                    to={`/profile/${user?._id}`}
                    onClick={toggleDropdown}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <div
                    onClick={toggleDropdown}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <a onClick={() => dispatch(logoutUser())}>LogOut</a>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      <div
        className={`flex  justify-center items-center ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="">
          <div>
            {" "}
            <Link
              className={` hover:text-yellow-600 hover:border-yellow-600 ${
                activeItem === "Home"
                  ? "text-yellow-600 border-yellow-600 "
                  : ""
              }`}
              to={"/"}
              onClick={() => handleItemClick("Home")}
            >
              Home
            </Link>
          </div>
          <div>
            {" "}
            {user && (
              <Link
                className={` hover:text-yellow-600 hover:border-yellow-600 ${
                  activeItem === "PostAnnonce"
                    ? "text-yellow-600 border-yellow-600"
                    : ""
                }`}
                to={"/post"}
                onClick={() => handleItemClick("PostAnnonce")}
              >
                cree une Annonce
              </Link>
            )}
          </div>
          <div>
            {" "}
            <Link
              className={`hover:text-yellow-600 hover:border-yellow-600 ${
                activeItem === "GeneratePrice"
                  ? "text-yellow-600 border-yellow-600 "
                  : ""
              }`}
              to={"/generate"}
              onClick={() => handleItemClick("GeneratePrice")}
            >
              Generate Price
            </Link>
          </div>
          <div>
            {" "}
            <Link
              className={` hover:text-yellow-600 hover:border-b-2  ${
                activeItem === "ContactUs"
                  ? "text-yellow-600 border-b-2 border-yellow-600"
                  : ""
              }`}
              to={"/contactus"}
              onClick={() => handleItemClick("ContactUs")}
            >
              Contact Us
            </Link>
          </div>
          {!user ? (
            <div>
              <Link
                className={`mt-3 hover:text-yellow-600 hover:border-b-2 border-yellow-600 ${
                  activeItem === "profile"
                    ? "text-yellow-600 border-b-2 border-yellow-600"
                    : ""
                }`}
                to="/profile"
                onClick={() => handleItemClick("profile")}
              >
                Profile
              </Link>
            </div>
          ) : null}
        </ul>
      </div>

      <div>
        <ul className="hidden md:flex space-x-20 absolute ml-40 mb-30 p-4 font-serif text-lg">
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
          {user && (
            <Link
              className={`mt-3 hover:text-yellow-600 hover:border-yellow-600 border-b-2 ${
                activeItem === "PostAnnonce"
                  ? "text-yellow-600 border-yellow-600 border-b-2"
                  : ""
              }`}
              to={"/post"}
              onClick={() => handleItemClick("PostAnnonce")}
            >
              cree une Annonce
            </Link>
          )}
          <Link
            className={`mt-3 hover:text-yellow-600 hover:border-yellow-600 border-b-2 ${
              activeItem === "GeneratePrice"
                ? "text-yellow-600 border-yellow-600 border-b-2"
                : ""
            }`}
            to={"/generate"}
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
            to={"/contactus"}
            onClick={() => handleItemClick("ContactUs")}
          >
            Contact Us
          </Link>
          {user ? (
            <>
              <div>{user?.username}</div>

              <div className="relative inline-block text-left">
                <button onClick={toggleDropdown} type="button">
                  <img
                    src={user?.profilePic.url}
                    alt="user photo"
                    className="w-16 rounded-full"
                  />
                </button>

                {isOpena && (
                  <div className="absolute right-0 mt-2 space-y-2 bg-white border border-gray-300 rounded-md shadow-md">
                    <Link
                      to={`/profile/${user?._id}`}
                      onClick={toggleDropdown}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <div
                      onClick={toggleDropdown}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <a onClick={() => dispatch(logoutUser())}>LogOut</a>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link
                className={`mt-3 hover:text-yellow-600 hover:border-b-2 border-yellow-600 ${
                  activeItem === "profile"
                    ? "text-yellow-600 border-b-2 border-yellow-600"
                    : ""
                }`}
                to={"/profile"}
                onClick={() => handleItemClick("profile")}
              >
                Profile
              </Link>
            </>
          )}
          <SearchBar />
        </ul>
      </div>
    </div>
  );
}

export default Nav;