import React, { useState } from "react";
import Nav from "./Nav.js";
import TextField from "@mui/material/TextField";
import axios from "axios";

function PostAnnounce() {
  const [annonce, setAnnonce] = useState({
    title: "",
    description: "",
    model: "",
    mileage: "",
    fuelType: "",
    transmission: "",
    price: "",
    number: "",
    color: "",
    // Add more fields as needed
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAnnonce({ ...annonce, [name]: value });
  };

  const handlePosterClick = async () => {
    try {
      const response = await axios.post("https://8000/api/annonces", annonce);
      console.log("Annonce publiée avec succès:", response.data);
    } catch (error) {
      console.error("Erreur lors de la publication de l'annonce:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen">

      <div className="flex flex-1 mt-32 text-2xl font-serif">
        <div className="flex flex-col w-1/2 ml-64">
          <div className="ml-12 mb-3">
            <TextField
              name="title"
              value={annonce.title}
              onChange={handleInputChange}
              id="standard-basic"
              label="Titre"
              variant="standard"
            />
          </div>
          <div className="ml-12 mb-3">
            <TextField
              name="description"
              value={annonce.description}
              onChange={handleInputChange}
              id="standard-basic"
              label="Description"
              variant="standard"
            />
          </div>
          <div className="ml-12 mb-3">
            <TextField
              name="model"
              value={annonce.model}
              onChange={handleInputChange}
              id="standard-basic"
              label="Modéle"
              variant="standard"
            />
          </div>
          <div className="ml-12 mb-3">
            <TextField
              name="mileage"
              value={annonce.mileage}
              onChange={handleInputChange}
              id="standard-basic"
              label="Kilométrage"
              variant="standard"
            />
          </div>
          <div className="ml-12 mb-3">
            <TextField
              name="fuelType"
              value={annonce.fuelType}
              onChange={handleInputChange}
              id="standard-basic"
              label="Energie"
              variant="standard"
            />
          </div>
          <div className="ml-12 mb-3">
            <TextField
              name="transmission"
              value={annonce.transmission}
              onChange={handleInputChange}
              id="standard-basic"
              label="Transmission"
              variant="standard"
            />
          </div>
        </div>

        <div className="w-1/2">
          <div className="mb-3">
            <TextField
              name="model"
              value={annonce.model}
              onChange={handleInputChange}
              id="standard-basic"
              label="Modéle"
              variant="standard"
            />
          </div>
          <div className="mb-3">
            <TextField
              name="price"
              value={annonce.price}
              onChange={handleInputChange}
              id="standard-basic"
              label="Prix"
              variant="standard"
            />
          </div>
          <div className="mb-3">
            <TextField
              name="number"
              value={annonce.number}
              onChange={handleInputChange}
              id="standard-basic"
              label="Number"
              variant="standard"
            />
          </div>
          <div className="mb-3">
            <TextField
              name="color"
              value={annonce.color}
              onChange={handleInputChange}
              id="standard-basic"
              label="Couleur"
              variant="standard"
            />
          </div>
          <button className="bg-[#BA790B] text-white py-1 px-7 mt-10 text-lg">
            Load Photo
          </button>
          <button
            className="bg-black text-white py-1 px-7 ml-2 text-lg"
            onClick={handlePosterClick}
          >
            Poster
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostAnnounce;
