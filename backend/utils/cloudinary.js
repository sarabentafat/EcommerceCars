const cloudinary=require('cloudinary')
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// Cloudinary upload image
const cloudinaryUploadImage = async (fileToUpload) => {
  try {
    if (!fileToUpload) {
      throw new Error("File to upload is missing");
    }

    const data = await cloudinary.uploader.upload(fileToUpload, {
      resource_type: "auto",
    });
    return data;
  } catch (error) {
    console.log(error)
    throw new Error("internal server erro Cloudinary upload failed");
  }
};
//clouadinary remove image 
const cloudinaryRemoveImage = async (imagePublicId) => {
  try {
    if (!imagePublicId) {
      throw new Error("Image public ID is missing");
    }

    const result = await cloudinary.uploader.destroy(imagePublicId);
    return result;
  } catch (error) {
    console.log(error)
    throw new Error(`Cloudinary image removal failed: ${error.message}`);
  }
  //@todo remove multiple images
};
module.exports = {
  cloudinaryUploadImage,
  cloudinaryRemoveImage,
};