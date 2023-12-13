import { Link } from "react-router-dom";
// import {Car} from "../Pictures/Image 13.png"
const FirstsectionHome = () => {
  return (
    <div  className="bg-gray-200 bg-opacity-75 p-8 rounded-md">
      <div className="text-gray-900 flex justify-center items-center  text-xl font-serif mt-52 pb-8 text-center">
        <p>
          Trouvez la voiture qui correspond à vos préférences avec une qualité{" "}
          <br className="mb-2" />
          excellente et un large éventail de choix.
        </p>
      </div>

      <div className="flex justify-center gap-x-20 mt-4 font-serif text-lg">
        <button className="bg-gray-200 border border-black text-black px-6 py-2  mr-2 ">
          <Link to={"/signup"}>Sign Up</Link>
        </button>
        <button className="bg-black text-white px-8 py-2 ">
          <Link to={"/login"}> Log In</Link>
        </button>
      </div>
      {/* <img src={Car} className="mx-auto mt-20 w-100 h-72" alt="Car Image" /> */}
    </div>
  );
}

export default FirstsectionHome