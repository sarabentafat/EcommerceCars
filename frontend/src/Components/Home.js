import React from "react";
import './Home.css';
import Nav from "./Nav.js";
import Car from "../Pictures/Image 13.png";
import Car1 from "../Pictures/image14.png";
import Car2 from "../Pictures/image15.png";
import Car3 from "../Pictures/image16.png";
import Car4 from "../Pictures/image17.png";
import Car5 from "../Pictures/image18.png";
import Car6 from "../Pictures/image19.png";
import Car7 from "../Pictures/image20.png";
import Car8 from "../Pictures/image21.png";
import Car9 from "../Pictures/image22.png";
import HeartButton from "./HeartButton";



function Home() {
  return (
    <div className="bg-gray-100 p-10 font-serif  text-gray-900">
      <div className="bg-gray-200 bg-opacity-75 p-8 rounded-md">
        <Nav />

        <div className="text-gray-900 flex justify-center items-center  text-xl font-serif mt-52 pb-8 text-center">
          <p>
            Trouvez la voiture qui correspond à vos préférences avec une qualité{" "}
            <br className="mb-2" />
            excellente et un large éventail de choix.
          </p>
        </div>

        <div className="flex justify-center gap-x-20 mt-4 font-serif text-lg">
          <button className="bg-gray-200 border border-black text-black px-6 py-2  mr-2 ">
            Sign Up
          </button>
          <button className="bg-black text-white px-8 py-2 ">Log In</button>
        </div>
        <img src={Car} className="mx-auto mt-20 w-100 h-72" alt="Car Image" />

        {/* Two Columns Section */}
        <div className="flex mt-20  ">
          {/* First Column */}
          <div className="w-1/4 pr-6 ml-8 mt-3 ">
            <div className="font-serif  mb-2  text-xl ">Filter Results</div>
            <div className="border-b border-black p-0 mr-96 ml-0 pt-5"></div>
            <div className="mb-2 mt-3 text-lg py-5">Marque</div>
            <ul>
              <li>
                <input
                  type="checkbox"
                  className="mr-2  cursor-pointer focus:ring-yellow-800
                "
                />
                <label> BMW</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="mr-2 rounded-full   cursor-pointer"
                />
                <label>AUDI</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="mr-2 rounded-full   cursor-pointer"
                />
                <label> DACIA</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="mr-2 rounded-full   cursor-pointer"
                />
                <label>JEEP</label>
              </li>
              <li>
                {" "}
                <input
                  type="checkbox"
                  className="mr-2 rounded-full   cursor-pointer"
                />
                <label>Autre</label>
              </li>
            </ul>
            <div className="border-b border-black p-0 mr-96 pt-5 ml-0"></div>
            <div className="mb-2 mt-1 text-lg py-5">Prix max</div>
            <ul>
              <li>
                <input
                  type="checkbox"
                  className="mr-2  cursor-pointer
                "
                />
                <label>50M</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="mr-2 rounded-full   cursor-pointer"
                />
                <label>100M</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="mr-2 rounded-full   cursor-pointer"
                />
                <label>200M</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="mr-2 rounded-full   cursor-pointer"
                />
                <label>300M</label>
              </li>
              <li>
                {" "}
                <input
                  type="checkbox"
                  className="mr-2 rounded-full   cursor-pointer"
                />
                <label>Autre</label>
              </li>
            </ul>
            <div className="border-b border-black p-0 mr-96 pt-5 ml-0"></div>
            <div className="mb-2 mt-1 text-lg py-5">Fuel type</div>
            <ul>
              <li>
                <input
                  type="checkbox"
                  className="mr-2  cursor-pointer
                "
                />
                <label>Hybrid</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="mr-2 rounded-full   cursor-pointer"
                />
                <label>Electric</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="mr-2 rounded-full   cursor-pointer"
                />
                <label>Gaz</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="mr-2 rounded-full   cursor-pointer"
                />
                <label>Essence</label>
              </li>
              <li>
                {" "}
                <input
                  type="checkbox"
                  className="mr-2 rounded-full   cursor-pointer"
                />
                <label>Autre</label>
              </li>
            </ul>

            <button className="bg-gray-900 text-white mt-11 px-10 py-2 ">
              Search
            </button>
          </div>

          {/* Second Column */}
          <div className="w-3/4 pl-4 mr-20">
            <div className="flex bg-gray-200 p-4 rounded-md text-xl ">
              <div
                className="flex-1 text-center cursor-pointer hover:bg-black hover:text-white
              border border-black
              py-3"
              >
                Car
              </div>
              <div
                className="flex-1 text-center cursor-pointer hover:bg-black hover:text-white
               border border-black
               py-3"
              >
                Camion
              </div>
              <div
                className="flex-1 text-center cursor-pointer hover:bg-black hover:text-white
               border border-black
               py-3"
              >
                Motors
              </div>
              <div
                className="flex-1 text-center cursor-pointer hover:bg-black hover:text-white
               border border-black
               py-3"
              >
                All
              </div>
            </div>

            {/* Three Rows of Images */}
            <div className="flex mt-4">
              <div className="grid grid-cols-3 gap-8 ml-6">
                <div className="flex-1 ml-5">
                  <div className="relative ">
                    <HeartButton className="absolute top-0 right-0 mt-2 mr-2 " />
                    <img src={Car9} className=" w-92 " alt="Car Image" />
                  </div>
                  <p className="pb-3 pt-1">JEEP 2017 Alger</p>
                  <p className="text-xs pb-3">Hybrid 160 km</p>
                  <p className="text-yellow-600 text-base  pb-3">
                    300 Millions
                  </p>
                  <button className="bg-black text-white w-full py-1 px-6">
                    See Details
                  </button>
                </div>
                <div className="flex-1 ml-5">
                  <div className="relative">
                    <HeartButton className="absolute top-0 right-0 mt-2 mr-2 " />
                    <img src={Car8} className="w-66 h-50 " alt="Car Image" />
                  </div>
                  <p className="pb-3 pt-1">JEEP 2017 Alger</p>
                  <p className="text-xs pb-3">Hybrid 160 km</p>
                  <p className="text-yellow-600 text-base  pb-3">
                    300 Millions
                  </p>
                  <button className="bg-black text-white  w-full py-1 px-6">
                    See Details
                  </button>
                </div>
                <div className="flex-1 ml-5">
                  <div className="relative">
                    <HeartButton className="absolute top-0 right-0 mt-2 mr-2 " />
                    <img src={Car1} className="w-66 h-50 " alt="Car Image" />
                  </div>
                  <p className="pb-3 pt-1">JEEP 2017 Alger</p>
                  <p className="text-xs pb-3">Hybrid 160 km</p>
                  <p className="text-yellow-600 text-base  pb-3">
                    300 Millions
                  </p>
                  <button className="bg-black  w-full text-white py-1 px-6">
                    See Details
                  </button>
                </div>
                <div className="flex-1 ml-5">
                  <div className="relative">
                    <HeartButton className="absolute top-0 right-0 mt-2 mr-2 " />
                    <img src={Car2} className="w-66 h-50 " alt="Car Image" />
                  </div>
                  <p className="pb-3 pt-1">JEEP 2017 Alger</p>
                  <p className="text-xs pb-3">Hybrid 160 km</p>
                  <p className="text-yellow-600 text-base  pb-3">
                    300 Millions
                  </p>
                  <button className="bg-black  w-full text-white py-1 px-6">
                    See Details
                  </button>
                </div>
                <div className="flex-1 ml-5">
                  <div className="relative">
                    <HeartButton className="absolute top-0 right-0 mt-2 mr-2 " />
                    <img src={Car3} className="w-66 h-50 " alt="Car Image" />
                  </div>
                  <p className="pb-3 pt-1">JEEP 2017 Alger</p>
                  <p className="text-xs pb-3">Hybrid 160 km</p>
                  <p className="text-yellow-600 text-base  pb-3">
                    300 Millions
                  </p>
                  <button className="bg-black  w-full text-white py-1 px-6">
                    See Details
                  </button>
                </div>
                <div className="flex-1 ml-5">
                  <div className="relative">
                    <HeartButton className="absolute top-0 right-0 mt-2 mr-2 " />
                    <img src={Car4} className="w-66 h-50 " alt="Car Image" />
                  </div>
                  <p className="pb-3 pt-1">JEEP 2017 Alger</p>
                  <p className="text-xs pb-3">Hybrid 160 km</p>
                  <p className="text-yellow-600 text-base  pb-3">
                    300 Millions
                  </p>
                  <button className="bg-black  w-full text-white py-1 px-6">
                    See Details
                  </button>
                </div>
                <div className="flex-1 ml-5">
                  <div className="relative">
                    <HeartButton className="absolute top-0 right-0 mt-2 mr-2 " />
                    <img src={Car5} className="w-66 h-50 " alt="Car Image" />
                  </div>
                  <p className="pb-3 pt-1">JEEP 2017 Alger</p>
                  <p className="text-xs pb-3">Hybrid 160 km</p>
                  <p className="text-yellow-600 text-base  pb-3">
                    300 Millions
                  </p>
                  <button className="bg-black  w-full text-white py-1 px-6">
                    See Details
                  </button>
                </div>
                <div className="flex-1 ml-5">
                  <div className="relative">
                    <HeartButton className="absolute top-0 right-0 mt-2 mr-2 " />
                    <img src={Car6} className="w-66 h-50 " alt="Car Image" />
                  </div>
                  <p className="pb-3 pt-1">JEEP 2017 Alger</p>
                  <p className="text-xs pb-3">Hybrid 160 km</p>
                  <p className="text-yellow-600 text-base  pb-3">
                    300 Millions
                  </p>
                  <button className="bg-black  w-full text-white py-1 px-6">
                    See Details
                  </button>
                </div>
                <div className="flex-1 ml-5">
                  <div className="relative">
                    <HeartButton className="absolute top-0 right-0 mt-2 mr-2 " />
                    <img src={Car7} className="w-66 h-50 " alt="Car Image" />
                  </div>
                  <p className="pb-3 pt-1">JEEP 2017 Alger</p>
                  <p className="text-xs pb-3">Hybrid 160 km</p>
                  <p className="text-yellow-600 text-base  pb-3">
                    300 Millions
                  </p>
                  <button className="bg-black  w-full text-white py-1 px-6">
                    See Details
                  </button>
                </div>
              </div>

              {/* Repeat the above structure for the other two images */}
            </div>

            {/* Button at the end */}
            <button className="bg-gray-200 border border-black border-opacity-92 text-black px-8 py-2   my-14 mx-60    ">
              load more
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white text-center py-2 font-serif text-lg">
        <p className="text-sm">Copyright © 2023. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Home;