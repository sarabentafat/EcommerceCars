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
    },
    image:{
        type:Object,
        default:{
            url:"",
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

//annonce model 
const Annonce = mongoose.model("annonce", AnnonceSchema);

//validate create annonce
function validateCreatePost(obj){
  const schema=Joi.Object({
    title:Joi.string().trim().min(2).max(200).required(),
     description:Joi.string().trim().min(10).required(),
     category:Joi.string().trim().required()
  })
  return schema.validate(obj)
}
