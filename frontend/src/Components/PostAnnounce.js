import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAnnonce } from "../redux/apiCalls/annonceApiCall.js";
import { toast } from "react-toastify";
import {RotatingLines} from "react-loader-spinner"
import Wilayas from "./Json/wilayas.json";
import typeCarburant from "./Json/typeCarburant.json"
import MenuItem from "@mui/material/MenuItem";
import marqueData from "./Json/marque.json"
import transmissionData from "./Json/transmission.json"
function PostAnnounce() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, isAnnonceCreated } = useSelector((state) => state.annonce);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [marque, setMarque] = useState("");
  const [category,setCategory]=useState('')
  const [kilometrage, setKilometrage] = useState("");
  const [energie, setEnergie] = useState("");
  const [price, setPrice] = useState("");
  const [wilaya, setWilaya] = useState("");
  const [couleur, setCouleur] = useState("");
  const [file,setFile]=useState('')


  const handlePosterClick = async (e) => {
    e.preventDefault();
    // Check for required fields
    if (title.trim() === "") return toast.error("Annonce title is required");
    if (description.trim() === "")
      return toast.error("Annonce description is required");
    if (marque.trim() === "") return toast.error("Annonce marque is required");
    if (kilometrage.trim() === "")
      return toast.error("Annonce kilometrage is required");
    if (energie.trim() === "")
      return toast.error("Annonce energie is required");

    if (price.trim() === "") return toast.error("Annonce price is required");
    if (wilaya.trim() === "") return toast.error("Annonce wilaya is required");
    if (couleur.trim() === "")
      return toast.error("Annonce couleur is required");
    if (!file) return toast.error("Annonce image is required");

const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("marque", marque);
    formData.append("kilometrage", kilometrage);
    formData.append("energie", energie);
    formData.append("price", price);
    formData.append("wilaya", wilaya);
    formData.append("couleur", couleur);
      formData.append("category", category);
    console.log(title)
    console.log(formData);
const annonce = {
  title: title,
  description: description,
  marque: marque,
  category:category,
  kilometrage: kilometrage,
  energie: energie,
  price: price,
  wilaya: wilaya,
  couleur: couleur,
};
 const wilayas = Wilayas.w;

console.log(annonce)
    dispatch(createAnnonce(formData));
  };

  useEffect(() => {
    if (isAnnonceCreated) {
      navigate("/");
    }
  }, [isAnnonceCreated, navigate]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 mt-32 text-2xl font-serif">
        <div className="flex flex-col w-1/2 ml-64">
          <div className="ml-12 mb-3">
            <TextField
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="standard-basic"
              label="Titre"
              variant="standard"
            />
          </div>
          <div className="ml-12 mb-3">
            <TextField
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="standard-basic"
              label="Description"
              variant="standard"
            />
          </div>
          <div className="ml-12 mb-3">
            <TextField
              select
              name="marque"
              value={marque}
              onChange={(e) => setMarque(e.target.value)}
              id="standard-basic"
              label="Marque"
              variant="standard"
            >
              {marqueData.m.map((marqueOption) => (
                <MenuItem key={marqueOption.name} value={marqueOption.name}>
                  {marqueOption.name}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="ml-12 mb-3 w-full">
            <TextField
              name="kilometrage"
              value={kilometrage}
              onChange={(e) => setKilometrage(e.target.value)}
              id="standard-basic"
              label="Kilométrage"
              variant="standard"
              select
            >
              {transmissionData.t.map((transmission)=>(
                <MenuItem key={transmission} value={transmission}>
                  {transmission}</MenuItem>
              ))
              }
            </TextField>
          </div>
          <div className="ml-12 mb-3 w-full">
            <TextField
              name="energie"
              value={energie}
              onChange={(e) => setEnergie(e.target.value)}
              id="standard-basic"
              label="Energie"
              variant="standard"
              select // Make sure you include the select property here
            >
              {typeCarburant.c.map((energieType) => (
                <MenuItem key={energieType} value={energieType}>
                  {energieType}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>

        <div className="w-1/2">
          <div className="mb-3">
            <TextField
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="standard-basic"
              label="Prix"
              variant="standard"
            />
          </div>
          <div className="mb-3">
            <TextField
              select
              name="wilaya"
              value={wilaya}
              onChange={(e) => setWilaya(e.target.value)}
              id="standard-basic"
              label="Wilaya"
              variant="standard"
            >
              {Wilayas.w.map((wilayaOption) => (
                <MenuItem key={wilayaOption.id} value={wilayaOption.name}>
                  {wilayaOption.name}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="mb-3">
            <TextField
              name="couleur"
              value={couleur}
              onChange={(e) => setCouleur(e.target.value)}
              id="standard-basic"
              label="Couleur"
              variant="standard"
            />
          </div>
          <div className="mb-3">
            <TextField
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id="standard-basic"
              label="category"
              variant="standard"
            />
          </div>
          <div className="bg-[#BA790B] text-white py-1 px-7 mt-10 text-lg">
            <input
              type="file"
              name="file"
              onChange={(e) => setFile(e.target.files[0])}
              accept="image/*"
            />
          </div>
          <button
            className="bg-black text-white py-1 px-7 ml-2 text-lg"
            onClick={handlePosterClick}
          >
            {loading ? (
              <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            ) : (
              "Poster"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostAnnounce;
