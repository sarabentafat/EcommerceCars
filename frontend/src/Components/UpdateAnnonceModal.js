import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateAnnonce } from "../redux/apiCalls/annonceApiCall";

const UpdateAnnonceModal = ({ setUpdateAnnonce, annonce }) => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.annonce);
  const [title, setTitle] = useState(annonce?.title || "");
  const [category, setCategory] = useState(annonce?.category || "");
  const [marque, setMarque] = useState(annonce?.marque || "");
  const [description, setDescription] = useState(annonce?.description || "");
  const [kilometrage, setKilometrage] = useState(annonce?.kilometrage || 0);
  const [energie, setEnergie] = useState(annonce?.energie || "");
  const [couleur, setCouleur] = useState(annonce?.couleur || "");
  const [price, setPrice] = useState(annonce?.price || 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return toast.error("Annonce title is required");

    dispatch(
      updateAnnonce(
        {
          title,
          category,
          marque,
          description,
          kilometrage,
          energie,
          couleur,
          price,
        },
        annonce?._id
      )
    );
    setUpdateAnnonce(false);
  };

  const handleClose = () => {
    setUpdateAnnonce(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-md w-96">
        <div className="flex justify-end">
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <IoMdCloseCircle className="h-6 w-6" />
          </button>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Update Annonce</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category:{" "}
            </label>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              {categories?.map((category) => (
                <option key={category._id} value={category.title}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="marque"
              className="block text-sm font-medium text-gray-700"
            >
              Marque:
            </label>
            <input
              type="text"
              id="marque"
              name="marque"
              value={marque}
              onChange={(e) => setMarque(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="kilometrage"
              className="block text-sm font-medium text-gray-700"
            >
              Kilometrage:
            </label>
            <input
              type="number"
              id="kilometrage"
              name="kilometrage"
              value={kilometrage}
              onChange={(e) => setKilometrage(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="energie"
              className="block text-sm font-medium text-gray-700"
            >
              Energie:
            </label>
            <input
              type="text"
              id="energie"
              name="energie"
              value={energie}
              onChange={(e) => setEnergie(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="couleur"
              className="block text-sm font-medium text-gray-700"
            >
              Couleur:
            </label>
            <input
              type="text"
              id="couleur"
              name="couleur"
              value={couleur}
              onChange={(e) => setCouleur(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateAnnonceModal;
