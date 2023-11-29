const asyncHandler = require("express-async-handler");
const {
  User,
  validateLoginUser,
  validateUpdateUser,
} = require("../models/User");
const bcrypt=require("bcryptjs")
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

        console.log(req.headers.authorization.split(" ")[1])
        console.log('hhhhhhh')
        const user=await User.findById(req.params.id).select("-password")//dont give me the passwords)
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
module.exports.profilePhotoUploadCtrl=asyncHandler(async (req,res)=>{
  console.log(req.file)
  res.status(200).json({message:"your profile photo uploadded succefully"});
    }
)