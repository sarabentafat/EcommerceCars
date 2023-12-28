const asyncHandler = require("express-async-handler");
const {
  User,
  validateLoginUser,
  validateUpdateUser,
} = require("../models/User");
 
const fs=require('fs')
const bcrypt=require("bcryptjs")
const path=require('path')
const {cloudinaryUploadImage,cloudinaryRemoveImage}=require('../utils/cloudinary')




/**----------------------------------------------
 * @desc   get all users profile 
 * @route   /api/users/profile
 * @method  GET
 * @access  private (only admin)
 * ----------------------------------------------*/
module.exports.getAllUsersCtrl=asyncHandler(
    async (req,res)=>{

        console.log(req.headers.authorization.split(" ")[1])
        console.log('hhhhhhh')
        const users = await User.find().select("-password");
        res.status(200).json(users)

    }
)

/**----------------------------------------------
 * @desc   get user profile 
 * @route   /api/users/profile/:id
 * @method  GET
 * @access  public
 * ----------------------------------------------*/
module.exports.getUserProfileCtrl=asyncHandler(
    async (req,res)=>{
        const user=await User.findById(req.params.id).select("-password").populate("annonces");
      
        if(!user){
            res.status(404).json({message:"user not found"})
        }
        res.status(200).json(user)
    }
)

/**----------------------------------------------
 * @desc   UPDATE user profile 
 * @route   /api/users/profile
 * @method  UPDATE
 * @access  private (only user himself)
 * ----------------------------------------------*/
module.exports.updateUserProfileCtrl = asyncHandler(async (req, res) => {
  const { error } = validateUpdateUser(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
  }
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        username: req.body.username,
        password: req.body.password,
        bio: req.body.bio
      },
    },
    { new: true } // Added missing comma
  ).select("-password");

  res.status(200).json(updatedUser);
  console.log('upadated succefulyy')
});
/**----------------------------------------------
 * @desc   get users count
 * @route   /api/users/count
 * @method  GET
 * @access  private (only admin)
 * ----------------------------------------------*/
module.exports.getUsersCountCtrl=asyncHandler(async (req,res)=>{
  const count = await User.countDocuments({});
  res.status(200).json(count);
    }
)
/**----------------------------------------------
 * @desc   Profile Photo Upload
 * @route   /api/users/profile/profile-photo-upload
 * @method  POST
 * @access  private (only logged user)
 * ----------------------------------------------*/
module.exports.profilePhotoUploadCtrl = asyncHandler(async (req, res) => {
  let imagePath;

  try {
    // 1. Validate file presence
    if (!req.file) {
      return res.status(400).json({ message: "No file provided" });
    }

    // 2. Get the path of the uploaded image
    imagePath = path.join(__dirname, `../images/${req.file.filename}`);

    // 3. Upload image to Cloudinary
    const result = await cloudinaryUploadImage(imagePath);
    console.log(result);

    // 4. Fetch the user from the database
    const user = await User.findById(req.user.id);

    // 5. Delete old profile photo if it exists
    if (user && user.profilePic && user.profilePic.publicId) {
      await cloudinaryRemoveImage(user.profilePic.publicId);
    }

    // 6. Update user's profile photo in the database
    user.profilePic = {
      url: result.secure_url,
      publicId: result.public_id,
    };

    await user.save();

    // 7. Send success response with updated profile pic info
    res.status(200).json({
      message: "Your profile picture was uploaded successfully",
      profilePic: { url: result.secure_url, publicId: result.public_id },
    });
  } catch (error) {
    // 8. Handle errors gracefully
    console.error(error);
    res.status(500).json({ message: "Error uploading profile picture" });
  } finally {
    // 9. Remove the uploaded image from the server
    if (imagePath) {
      try {
        await fs.unlink(imagePath);
        console.log(`Image at ${imagePath} removed successfully.`);
      } catch (unlinkError) {
        console.error(`Error removing image at ${imagePath}:`, unlinkError);
      }
    }
  }
});
/**----------------------------------------------
 * @desc   DELEte User profile 
 * @route   /api/users/profile/:id
 * @method  DELETE
 * @access  private (only admin or user himself)
 * ----------------------------------------------*/ 
module.exports.deleteUserProfileCtrl=asyncHandler(async(req,res)=>{
  //1. get the user from the db 7
  const user=await User.findById(req.params.id)
  if(!user){
    return res.status(404).json({
      message:"user is not found "
    })
  }

  //get all posts from db
  //get the public ids from the posts 
  //delete all posts image from cloudinary  that belongd to this user 
  //delete the profile picture from clouadinary 
  await cloudinaryRemoveImage(user.profilePic.publicId)
  // delete user posts and comments 
  //delete the user himsself
  await User.findByIdAndDelete(req.params.id)
  //send a response to the server 
  res.status(200).json({
    message:"user deleted succefully"
  })
})