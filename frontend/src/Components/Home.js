import { useState, useEffect } from "react";
import Nav from "./Nav.js";
import Car from "../Pictures/Image 13.png";
import HeartButton from "./HeartButton";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnnonces, fetchAnnoncesBasesOnCategory, fetchAnnoncesCate, getAnnoncesCount } from "../redux/apiCalls/annonceApiCall.js";
import Pagination from "./Pagination.js"



function Home() {
  const ANNONCE_PER_Page=3
  const [currentCategory, setCurrentCategory] = useState("all");
const [actualAnnonces,setActualAnnonces]=useState([])
  const { annoncesCount, annonces, annoncesCate ,categories} = useSelector(
    (state) => state.annonce
  );
  const [currentPage,setCurrentPage]=useState(1)
  
  const pages=Math.ceil(annoncesCount/ANNONCE_PER_Page)
  const dispatch=useDispatch()

  useEffect(()=>{
    if(currentCategory=="all"){
    dispatch(fetchAnnonces(currentPage));
    setActualAnnonces(annonces)
    console.log(actualAnnonces)
  
    }else{
        dispatch(fetchAnnoncesBasesOnCategory(currentCategory));
         setActualAnnonces(annoncesCate);
    }
    window.scrollTo(0,0)
  },[currentPage,currentCategory])
  useEffect(()=>{
        dispatch(getAnnoncesCount());
        dispatch(fetchAnnoncesCate());
  },[])
    useEffect(() => {
      dispatch(fetchAnnoncesBasesOnCategory(categories[0]?.title));
    }, [categories[0]?.title]);

  
const categoryElements = categories.map((category) => (
  <div
    className={`flex-1 text-center cursor-pointer hover:bg-black hover:text-white border border-black py-3 ${
      currentCategory === category.title && "bg-black text-white"
    }`}
    onClick={() => handleCategoryClick(category.title)}
  >
    {category.title}
  </div>
));
  const handleCategoryClick = (categoryTitle) => {
    setCurrentCategory(categoryTitle);
   fetchAnnoncesBasesOnCategory(categoryTitle);
  };

  return (
    <div className="font-serif  text-gray-900">
      <div className="bg-gray-200 bg-opacity-75 p-8 rounded-md">
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
            <div className="bg-red-500">
              {/* hh{" "}
              {annoncesCate?.map((category) => (
                <div key={category.id}>{category.title}</div>
              ))} */}
            </div>

            <div className="flex bg-gray-200 p-4 rounded-md text-xl ">
              {categoryElements}
              <div
                className={`flex-1 text-center cursor-pointer hover:bg-black hover:text-white border border-black py-3 ${
                  currentCategory === "all" && "bg-black text-white"
                }`}
                onClick={() => handleCategoryClick("all")}
              >
                All
              </div>
            </div>
            {/* Three Rows of Images */}
            <div className="flex mt-4">
              <div className="grid grid-cols-3 gap-8 ml-6">
                {actualAnnonces.map((annonce) => (
                  <div key={annonce._id} className="flex-1 ml-5">
                    <div className="relative ">
                      <HeartButton className="absolute top-0 right-0 mt-2 mr-2 " />
                      <img
                        src={annonce.image.url}
                        alt={annonce.title}
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </div>
                    <p className="pb-3 pt-1">{annonce.title}</p>
                    <p className="text-xs pb-3">{annonce.description}</p>

                    <p className="text-yellow-600 text-base  pb-3">
                      {annonce.price}
                    </p>
                    <button className="bg-black text-white w-full py-1 px-6">
                      <Link to={`/annonces/${annonce._id}`}>see details</Link>
                    </button>
                  </div>
                ))}
              </div>

              {/* Repeat the above structure for the other two images */}
            </div>

            {/*PAGINATION COMPONENT TO LOAD MORE DATA*/}
            <div className="bg-gray-200 border border-black border-opacity-92 text-black w-[30%] my-20 mx-auto    ">
              <Pagination
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
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
