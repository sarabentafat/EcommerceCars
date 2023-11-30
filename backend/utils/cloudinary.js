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
      throw new Error('File to upload is missing');
    }

    const data = await cloudinary.uploader.upload(fileToUpload, {
      resource_type: 'auto',
    });
    return data;
  } catch (error) {
    return error;
  }
};
//clouadinary remove image 
const cloudinaryRemoveImage=async()=>{
    try {
        const result=await cloudinary.uploader.destroy(imagePublicId)
        return result;

    }catch(error){
        return error;
    }

}
module.exports = {
  cloudinaryUploadImage,
  cloudinaryRemoveImage,
};