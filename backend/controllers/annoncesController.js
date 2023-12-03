const fs=require('fs')
const path=require("path")

const asyncHandler=require("express-async-handler")
const {Annonce,validateCreateAnnonce, validateUpdateAnnonce}=require("../models/annonce")
const {cloudinaryUploadImage, cloudinaryRemoveImage}=require("../utils/cloudinary")
const { post } = require('../routes/usersRoute')
/**----------------------------------------------
 * @desc    Register new Annonce
 * @route   POST /api/annonces
 * @method  POST
 * @access  private (only loggedin user)
 * ----------------------------------------------*/
module.exports.createAnnonceCtrl = asyncHandler(async (req, res) => {
  // Image validation
  if (!req.file) {
   
    return res.status(400).json({ message: "No image provided" });
  }


  // Data validation
  const { error } = validateCreateAnnonce(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  // Upload photo
  const imagePath = path.join(__dirname, `../images/${req.file.filename}`);
  const result = await cloudinaryUploadImage(imagePath);
  console.log(result.secure_url)

  // Create new annonce and save it to db
  const annonce = await Annonce.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    location: req.body.location,
    image: {
      url: result.secure_url,
      publicId: result.public_id,
    },
    user: req.user._id,
  });

  // Send response to client
  res.status(201).json(annonce);

  // Remove image from the server
  fs.unlinkSync(imagePath);
});

/**----------------------------------------------
 * @desc    GET all annonces
 * @route   GET /api/annonces
 * @method  GET
 * @access  public (everyone )
 * ----------------------------------------------*/
module.exports.getAllAnnoncesCtrl = asyncHandler(async (req, res) => {
   const POST_PER_IMAGE=3
   const {pageNumber,category }=req.query
   let annonces;
   if(pageNumber){
    annonces = await Annonce.find()
      .sort({ createdAt: -1 })
      .skip((pageNumber - 1) * POST_PER_IMAGE)
      .limit(POST_PER_IMAGE)
      .populate("user",["-password"]) 
   }else if (category){
    annonces = await Annonce.find({ category })
      .sort({ createdAt: -1 })
      .populate("user", ["-password"]); 
    } else{
      annonces=await Annonce.find().sort({createdAt:-1})
                .populate("user",["-password"]) 
                //we get the properties of the user
   }
   res.status(200).json(annonces);  
});

/**----------------------------------------------
 * @desc    GET single annonce
 * @route   GET /api/annonces/:id
 * @method  GET
 * @access  public (everyone )
 * ----------------------------------------------*/
module.exports.getSingleAnnonceCtrl = asyncHandler(async (req, res) => {
    annonce = await Annonce.findById(req.params.id)
      .populate("user",["-password"]) 
    if(!annonce){
      res.status(400).json({message:"annonce not found"})
    }

   res.status(200).json(annonce);  
});
/**----------------------------------------------
 * @desc    GET annonce count
 * @route   GET /api/annonces/:id
 * @method  GET
 * @access  public //nrmlmo nbdlha l admin only 
 * /todo
 * ----------------------------------------------*/
module.exports.getAnnoncesCount = asyncHandler(async (req, res) => {
   const count= await Annonce.countDocuments({});

   res.status(200).json(count);  
});
/**----------------------------------------------
 * @desc    delete annonce 
 * @route   delete /api/annonces/:id
 * @method  DELETE
 * @access  private (admin or only the owner of the annonce  )
 * ----------------------------------------------*/
module.exports.deleteAnnonceCtrl = asyncHandler(async (req, res) => {
   const annonce= await Annonce.findById(req.params.id);
  if (!post){
    return res.status(400).json({message :"annonce doesnt exist "})
  }
  console.log(req.user._id)
  if (req.user.isAdmin || req.user._id==annonce.user.toString() ){
    await Annonce.findByIdAndDelete(req.params.id);
    await cloudinaryRemoveImage(annonce.image.publicId);
    //@todo delete all COMMENTs of the annoucne
    res
      .status(200)
      .json({
        message: "announce has been deleted succefully",
        annouceId: annonce._id,
      });
  }else {
    res.status(403).json({message:"access denied ,forbidden"})
  }


});

/**----------------------------------------------
 * @desc    Update annonce 
 * @route    Update /api/annonces/:id
 * @method  PUT
 * @access  private (only the owner of the annonce  )
 * ----------------------------------------------*/
module.exports.updateAnnonceCtrl = asyncHandler(async (req, res) => {

  const {error}=validateUpdateAnnonce(req.body)
if(error){
  return res.status(400).send(error.details[0].message)
}
const annonce=await Annonce.findById(req.params.id)
if (!annonce){
  return res.status(404).json({message :"annonce not found "})
}

if(req.user._id !== annonce.user.toString()){
  return res.status(401).json({message :"you are not authorized to update this post"})
}
console.log(req.body.title)
console.log(req.body)
const updatedAnnonce = await Annonce.findByIdAndUpdate(
  req.params.id,
  {
    $set: {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      couleur: req.body.couleur,
      energie: req.body.energie,
    },
  },
  { new: true } // Added missing comma
).populate("user", ["-password"]);
  res.status(200).json(updatedAnnonce);
  console.log("upadated succefulyy");

});

/**----------------------------------------------
 * @desc    Update annonce image  
 * @route    Update /api/annonces/upload-image/:id
 * @method  PUT
 * @access  private (only the owner of the annonce  )
 * ----------------------------------------------*/
module.exports.updateAnnonceImageCtrl = asyncHandler(async (req, res) => {
  // Validation
  if (!req.file) {
    return res.status(400).json({ message: "no image provided" });
  }

  const annonce = await Annonce.findById(req.params.id);
  if (!annonce) {
    return res.status(404).json({ message: "annonce not found" });
  }

  if (req.user._id !== annonce.user.toString()) {
    return res
      .status(401)
      .json({ message: "you are not authorized to update this post" });
  }

  // Delete the old annonce image
  await cloudinaryRemoveImage(annonce.image.publicId);

  // Upload new image
  const imagePath = path.join(__dirname, `../images/${req.file.filename}`);
  const result = await cloudinaryUploadImage(imagePath);
  const updatedAnnonce = await Annonce.findByIdAndUpdate(req.params.id, {
    $set: {
      image: {
        url: result.secure_url,
        publicId: result.public_id,
      },
    },
  }).populate("user", ["-password"]);

  // Remove the image from the server
  fs.unlinkSync(imagePath);

  // Log success message after the image is removed
  console.log("updated successfully");
  res.status(200).json(updatedAnnonce);
});
