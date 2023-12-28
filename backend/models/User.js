const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },
    phonenumber: {
      type: Number,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 100,
      unique: true,
    },
    address: {
      type: String,
      trim: true,
      minlength: 2,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 7,
    },
    profilePic: {
      type: Object,
      default: {
        url: "https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png",
        publicId: null,
      },
    },
    bio: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isAccountVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Populate annonces that belong to this user when he/she gets his/her profile
UserSchema.virtual("annonces", {
  ref: "Annonce",
  foreignField: "user",
  localField: "_id",
});

// Generate auth token
UserSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      isAdmin: this.isAdmin,
    },
    process.env.JWT_SECRET
  );
};

// User Model
const User = mongoose.model("User", UserSchema);

// Validate Register User
function validateRegisterUser(obj) {
  const schema = Joi.object({
    username: Joi.string().trim().min(3).max(100).required(),
    email: Joi.string().trim().min(5).max(100).required().email(),
    password: Joi.string().trim().required(),
    phonenumber: Joi.number().required(),
    address: Joi.string().required(),
  });
  return schema.validate(obj);
}
// Validate Login  User
function validateLoginUser(obj) {
  const schema = Joi.object({
    email: Joi.string().trim().min(5).max(100).required().email(),
    password: Joi.string().trim().required(),
  });
  return schema.validate(obj);
}

// Validate Update  User
function validateUpdateUser(obj) {
  const schema = Joi.object({
    email: Joi.string().trim().min(5).max(100),
    username:Joi.string(),
    password: Joi.string().trim(),
    bio: Joi.string(),
  });
  return schema.validate(obj);
}

module.exports = {
  User,
  validateRegisterUser,
  validateLoginUser,
  validateUpdateUser,
}; // Corrected the function name
