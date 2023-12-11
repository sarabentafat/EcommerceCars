const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { User, validateRegisterUser, validateLoginUser } = require("../models/User");

/**----------------------------------------------
 * @desc    Register New User
 * @route   POST /api/auth/register
 * @method  POST
 * @access  public
 * ----------------------------------------------*/
module.exports.registerUserCtrl = asyncHandler(async (req, res) => {
  // Validation
  const { error } = validateRegisterUser(req.body); // Corrected the function name
console.log(req.body)
  // Error 400: Problem from the client if they didn't provide valid input
  if (error) {
    console.log("wch izan")
    return res.status(400).json({ message: error.details[0].message });
  }

  // Check if user already exists
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    console.log("User already exists");
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create a new user and save it to the database
  user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
    phonenumber:req.phonenumber,
    address:req.address
  });

  await user.save();
    console.log("User registered successfully");
  // Send a response to the client
  res
    .status(201)
    .json({ message: "User registered successfully. Please login." });
});
/**----------------------------------------------
 * @desc    Login User
 * @route   POST /api/auth/login
 * @method  POST
 * @access  public
 * ----------------------------------------------*/
module.exports.loginUserCtrl = asyncHandler(
  async (req, res) => {
    // Validation
    const { error } = validateLoginUser(req.body);
    // Error 400: Problem from the client if they didn't provide valid input
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    // If user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    // Check if the password is correct
    const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid password or email" });
    }

    //@todo --sending email (verify account if not verified)
    // Generate token (JWT)
    const token = user.generateAuthToken();
    res.status(200).json({
      _id: user._id,
      isAdmin: user.isAdmine,
      profilePic: user.profilePic,
      token,
    });
    // Response to client
  }
);