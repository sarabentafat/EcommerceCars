const mongoose = require("mongoose");
const Joi = require("joi"); // Corrected the import statement
const jwt = require("jsonwebtoken");
const AnnonceSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 4,
      maxlength: 200,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 200,
    },
    image:{
        type:Object,
        default:{
            url:"https://res.cloudinary.com/dqh5vg8pw/image/upload/v16",
            publicId:null
        }
    },
    likes:[
        {
            type:mongooose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 4,
    },

    kilometrage: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 200,
    },
    energie: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 200,
    },
    couleur: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 200,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    // add 2 properties createdAt updatedAt
    timestamps: true,
  }
);

//post model 
const Annonce=mongoose.model('annonce','AnnonceSchema')
