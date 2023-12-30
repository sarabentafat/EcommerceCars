import React, { useEffect } from "react";
import Nav from "./Nav.js";
import Car1 from "../Pictures/image14.png";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAnnonce } from "../redux/apiCalls/annonceApiCall.js";

function Details() {
  const {id}=useParams()
  console.log(id)
    const dispatch = useDispatch();
    const { annonce } = useSelector((state) => state.annonce);
    console.log(annonce)
useEffect(()=>{
  dispatch(fetchAnnonce(id));

},[id])
  return (
    <div className="flex flex-col h-screen font-serif">
      <div
        className="lg:flex mt-20 md:ml-40 md:mr-28
    sm:ml-10 sm:mr-4 ss"
      >
        {/*the user who poses the annonce*/}
        <div className="flex">
          <img
            src={annonce?.user.profilePic.url}
            className="rounded-full w-20 h-20 border-1 border-black "
            alt="Car Image"
          />
          <p>{annonce?.user.username}</p>
          <p>{annonce?.user.phonenumber}</p>
        </div>
        {/*first column*/}
        <div className="md:w-1/2">
          <img
            src={annonce?.image.url}
            className=" md:w-[700px] md:h-[700px] sm:w-[600px] sm:h-[400px] ss1"
            alt="Car Image"
          />
        </div>
        {/*second one*/}
        <div className="flex flex-col md:w-1/2 ">
          {/*text*/}
          <div className="ml-10 sm:mt-8 ss2">
            <h1 className="text-3xl text-opacity-100">{annonce?.title}</h1>
            <div className=" p-0 mt-10 md:mr-52 sm:mr-52 ">
              <p className="text-xl text-black text-opacity-60">
                {annonce?.description}
              </p>
            </div>
          </div>
          {/*inputs*/}
          <div className="flex md:m-10 sm:m-10 ss3">
            <div>
              <p className="border-b-2 border-solid border-black pb-5 mb-6">
                Modéle:{" "}
                <span className="text-gray-600 ml-2">{annonce?.marque}</span>
              </p>
              <p className="border-b-2 border-solid border-black pb-5 mb-6">
                Kilométrage :{" "}
                <span className="text-gray-600 ml-2">
                  {annonce?.kilometrage}
                </span>
              </p>
              <p className="border-b-2 border-solid border-black pb-5 mb-6">
                Energie:{" "}
                <span className="text-gray-600 ml-2">{annonce?.energie}</span>
              </p>
              <p className="border-b-2 border-solid border-black pb-5 mb-6">
                Transmission:{" "}
                <span className="text-gray-600 ml-2">Manuelle5</span>
              </p>
            </div>
            <div className="md:ml-28 sm:ml-28 ss5">
              <p className="border-b-2 border-solid border-black pb-5 mb-6">
                Couleur:{" "}
                <span className="text-gray-600 ml-2">{annonce?.couleur}</span>
              </p>
            </div>
          </div>
          <div className="flex  mt-12 mb-10">
            <p className="md:ml-10 sm:ml-10 ss6 md:w-1/3 sm:w-1/3 ss4">
              Le Prix généré :{" "}
              <span className="text-[#BA790B]"> {annonce?.price}</span>
            </p>
            <button className="bg-[#171717E5] text-white py-3 md:px-[50px] sm:px-[50px] ss7 md:ml-12 sm:ml-12  text-lg  ">
              Envoyer Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Details;
