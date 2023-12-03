const mongoose = require("mongoose");
const Joi = require("joi"); // Corrected the import statement
const jwt=require("jsonwebtoken")
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true, // delete space from the start and the end
      minlength: 3, // minimum 3 characters
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      trim: true, // delete space from the start and the end
      minlength: 5, // minimum 5 characters (fixed the comment)
      maxlength: 100,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true, // delete space from the start and the end
      minlength: 7, // minimum 7 characters (fixed the comment)
    },
    profilePic: {
      type: Object,
      default: {
        url: "https://res.cloudinary.com/dq6zcl",
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
      type: Boolean, // Corrected the property name
      default: false,
    },
  },
  {
    // add 2 properties createdAt updatedAt
    timestamps: true,
  }
);
//generate auth token
UserSchema.methods.generateAuthToken=function(){
 return jwt.sign(
    {
    _id:this._id,
    isAdmin:this.isAdmin
    },
    process.env.JWT_SECRET
 )
}


// User Model
const User = mongoose.model("User", UserSchema);

// Validate Register User
function validateRegisterUser(obj) {
  const schema = Joi.object({
    username: Joi.string().trim().min(3).max(100).required(), // Fixed min length
    email: Joi.string().trim().min(5).max(100).required().email(),
    password: Joi.string().trim().min(8).required(),
  });
  return schema.validate(obj);
}
// Validate Login  User
function validateLoginUser(obj) {
  const schema = Joi.object({
    email: Joi.string().trim().min(5).max(100).required().email(),
    password: Joi.string().trim().min(8).required(),
  });
  return schema.validate(obj);
}

// Validate Update  User
function validateUpdateUser(obj) {
  const schema = Joi.object({
    email: Joi.string().trim().min(5).max(100),
    password: Joi.string().trim().min(8),
    bio:Joi.string()
  });
  return schema.validate(obj);
}



module.exports = {
  User,
  validateRegisterUser,
  validateLoginUser,
  validateUpdateUser,
}; // Corrected the function name
