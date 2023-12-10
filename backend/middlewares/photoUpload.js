const path=require("path")
const multer=require("multer")

//photoStorage
const photoStorage=multer.diskStorage({
    destination:function (req,res,cb){
        cb(null,path.join(__dirname,"../images"));
    },
    filename:function(req,file,cb){
        if(file){
            cb(null,new Date().toISOString().replace(/:/g,"-")+ file.originalname)
        }else{
            cb(null,false)
        }

    }
})
//photo upload middlware
const photoUpload = multer({
  
  storage: photoStorage,
  fileFilter: function (req, file, cb) {
    // Check if the file is an image
   
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
       console.log("wslt hna");
       console.log(file)
      
    } else {
       console.log("wslt hnahhhhhh");
      cb({ message: "Unsupported file format" }, false);
    }
  },
  limits: { fileSize: 1024 * 1024 * 4 }, // 1 MB
});

module.exports = photoUpload;
