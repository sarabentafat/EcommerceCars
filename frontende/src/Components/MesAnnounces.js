import React from 'react';
import Car1 from "../Pictures/image14.png";
import Car2 from "../Pictures/image15.png";
import Car3 from "../Pictures/image16.png";
import Car4 from "../Pictures/image17.png";
import Car5 from "../Pictures/image18.png";
import Car6 from "../Pictures/image19.png";
import { BiSolidEditAlt } from "react-icons/bi";
import Car8 from "../Pictures/image21.png";
import Car9 from "../Pictures/image22.png";
import { useNavigate} from 'react-router-dom';
import { FaRegTrashCan } from "react-icons/fa6";

function MesAnnounces(){
  
  const navigate = useNavigate();
  const details = () => {
    navigate('/Details');
  };
  const MesAnnounces=()=> {
    navigate('/ModifyAnnounces');
  };
return(
  <div className="xs10 grid md:grid-cols-4 md:gap-8 md:ml-6
              sm:grid-cols-2 sm:gap-16 sm:mx-10 my-9  ">
                <div className=" flex-1 ml-5 relative">
                  <div className="relative ">
                  <BiSolidEditAlt onClick={MesAnnounces} className="text-[#BA790B] absolute top-0 right-0 mt-2 mr-2 cursor-pointer" />
                    <img src={Car9} className="xs11 w-92 " alt="Car Image" />
                  </div>
                  <FaRegTrashCan className="text-[#BA790B] absolute battom-0 right-0 mt-2 mr-2 " />
                  <p className="pb-3 pt-1">JEEP 2017 Alger</p>
                 
                  <p className="text-xs pb-3">Hybrid 160 km</p>
                  <p className="text-yellow-600 text-base  pb-3">
                    300 Millions
                  </p>
                  <button  onClick={details} className="bg-black text-white w-full py-1 px-6">
                    See Details
                  </button>
                </div>
                <div className="flex-1 ml-5 relative">
                  <div className="relative">
                  <BiSolidEditAlt onClick={MesAnnounces} className="text-[#BA790B] absolute top-0 right-0 mt-2 mr-2 cursor-pointer" />
                    <img src={Car8} className="xs11 w-66 h-50 " alt="Car Image" />
                  </div>
                  <FaRegTrashCan className="text-[#BA790B] absolute battom-0 right-0 mt-2 mr-2 " />
                  <p className="pb-3 pt-1">JEEP 2017 Alger</p>
                  <p className="text-xs pb-3">Hybrid 160 km</p>
                  <p className="text-yellow-600 text-base  pb-3">
                    300 Millions
                  </p>
                  <button  onClick={details} className="bg-black text-white  w-full py-1 px-6">
                    See Details
                  </button>
                </div>
                <div className="flex-1 ml-5 relative">
                  <div className="relative">
                  <BiSolidEditAlt onClick={MesAnnounces} className="text-[#BA790B] absolute top-0 right-0 mt-2 mr-2 cursor-pointer" />
                    <img src={Car1} className="xs11 w-66 h-50 " alt="Car Image" />
                  </div>
                  <FaRegTrashCan className="text-[#BA790B] absolute battom-0 right-0 mt-2 mr-2 " />
                  <p className="pb-3 pt-1">JEEP 2017 Alger</p>
                  <p className="text-xs pb-3">Hybrid 160 km</p>
                  <p className="text-yellow-600 text-base  pb-3">
                    300 Millions
                  </p>
                  <button className="bg-black  w-full text-white py-1 px-6">
                    See Details
                  </button>
                </div>
                <div className="flex-1 ml-5 relative">
                  <div className="relative">
                  <BiSolidEditAlt onClick={MesAnnounces} className="text-[#BA790B] absolute top-0 right-0 mt-2 mr-2 cursor-pointer" />
                    <img src={Car2} className=" xs11 w-66 h-50 " alt="Car Image" />
                  </div>
                  <FaRegTrashCan className="text-[#BA790B] absolute battom-0 right-0 mt-2 mr-2 " />
                  <p className="pb-3 pt-1">JEEP 2017 Alger</p>
                  <p className="text-xs pb-3">Hybrid 160 km</p>
                  <p className="text-yellow-600 text-base  pb-3">
                    300 Millions
                  </p>
                  <button  onClick={details} className="bg-black  w-full text-white py-1 px-6">
                    See Details
                  </button>
                </div>
                <div className="flex-1 ml-5 relative">
                  <div className="relative">
                  <BiSolidEditAlt onClick={MesAnnounces} className="text-[#BA790B] absolute top-0 right-0 mt-2 mr-2 cursor-pointer" />
                    <img src={Car3} className=" xs11 w-66 h-50 " alt="Car Image" />
                  </div>
                  <FaRegTrashCan className="text-[#BA790B] absolute battom-0 right-0 mt-2 mr-2 " />
                  <p className="pb-3 pt-1">JEEP 2017 Alger</p>
                  <p className="text-xs pb-3">Hybrid 160 km</p>
                  <p className="text-yellow-600 text-base  pb-3">
                    300 Millions
                  </p>
                  <button  onClick={details} className="bg-black  w-full text-white py-1 px-6">
                    See Details
                  </button>
                </div>
                <div className="flex-1 ml-5 relative">
                  <div className="relative">
                  <BiSolidEditAlt onClick={MesAnnounces} className="text-[#BA790B] absolute top-0 right-0 mt-2 mr-2 cursor-pointer" />
                    <img src={Car4} className="xs11 w-66 h-50 " alt="Car Image" />
                  </div>
                  <FaRegTrashCan className="text-[#BA790B] absolute battom-0 right-0 mt-2 mr-2 " />
                  <p className="pb-3 pt-1">JEEP 2017 Alger</p>
                  <p className="text-xs pb-3">Hybrid 160 km</p>
                  <p className="text-yellow-600 text-base  pb-3">
                    300 Millions
                  </p>
                  <button  onClick={details} className="bg-black  w-full text-white py-1 px-6">
                    See Details
                  </button>
                </div>
                <div className="flex-1 ml-5 relative">
                  <div className="relative">
                  <BiSolidEditAlt onClick={MesAnnounces} className="text-[#BA790B] absolute top-0 right-0 mt-2 mr-2 cursor-pointer" />
                    <img src={Car5} className="xs11 w-66 h-50 " alt="Car Image" />
                  </div>
                  <FaRegTrashCan className="text-[#BA790B] absolute battom-0 right-0 mt-2 mr-2 " />
                  <p className="pb-3 pt-1">JEEP 2017 Alger</p>
                  <p className="text-xs pb-3">Hybrid 160 km</p>
                  <p className="text-yellow-600 text-base  pb-3">
                    300 Millions
                  </p>
                  <button  onClick={details} className="bg-black  w-full text-white py-1 px-6">
                    See Details
                  </button>
                </div>
                <div className="flex-1 ml-5 relative">
                  <div className="relative">
                  <BiSolidEditAlt onClick={MesAnnounces} className="text-[#BA790B] absolute top-0 right-0 mt-2 mr-2 cursor-pointer" />
                    <img src={Car6} className="xs11 w-66 h-50 " alt="Car Image" />
                  </div>
                  <FaRegTrashCan className="text-[#BA790B] absolute battom-0 right-0 mt-2 mr-2 " />
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

    
);
}

export default MesAnnounces;
