const mongoose = require("mongoose");
const Joi = require("joi");

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
    marque:{
      type:String,
      required: true,
      trim: true,

    },
    image: {
      type: Object,
      default: {
        url: "",
        publicId: null,
      },
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 4,
    },
    kilometrage: {
      type: Number,
      trim: true,
    },
    energie: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 200,
    },
    couleur: {
      type: String,
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

// Annonce model
const Annonce = mongoose.model("Annonce", AnnonceSchema);

// Validate create annonce
function validateCreateAnnonce(obj) {
  const schema = Joi.object({
    title: Joi.string().trim().min(4).max(200).required(),
    description: Joi.string().trim().min(4).required(),
    category: Joi.string().trim().required(),
    price: Joi.number().required(),
    couleur: Joi.string().trim(),
    energie: Joi.string().trim(),
    kilometrage: Joi.number(),
    marque: Joi.string().trim(),
  });
  return schema.validate(obj);
}

// Validate update annonce
function validateUpdateAnnonce(obj) {
  const schema = Joi.object({
    title: Joi.string().trim().min(4).max(200),
    description: Joi.string().trim().min(4),
    category: Joi.string().trim(),
    couleur:Joi.string().trim(),
    energie:Joi.string().trim(),
    marque:Joi.string.trim()
  });
  return schema.validate(obj);
}

module.exports = {
  Annonce,
  validateCreateAnnonce,
  validateUpdateAnnonce,
};
