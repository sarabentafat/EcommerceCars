// ImageEditPopup.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uploadProfilePhoto } from "path-to-your-redux-actions"; // Replace with the actual path

const ImageEditPopup = ({ imageUrl, onClose }) => {
  const [editedImageUrl, setEditedImageUrl] = useState(imageUrl);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSave = async () => {
    if (!file) {
      return toast.warning("Please select a file.");
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      await dispatch(uploadProfilePhoto(formData));
      toast.success("Profile photo uploaded successfully.");
      setPicUploaded(true);
    } catch (error) {
      console.error("Error uploading profile photo:", error);
      toast.error("Failed to upload profile photo. Please try again.");
    }

    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg">
        <img src={editedImageUrl} alt="Edited" className="mb-4" />

        {/* Input for selecting a new file */}
        <input type="file" onChange={handleFileChange} className="mb-4" />

        <div className="flex justify-between">
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageEditPopup;
