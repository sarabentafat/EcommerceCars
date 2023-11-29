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
const photoUpload=multer({
    storage:photoStorage,
    fillerFilter:function(req,file,cb){
      //("image/png"))
      if (file.mimetype.stratsWith("image")) {
        cb(null, true);
      } else {
        cb({ message: "unsupported file format " }, false);
      }
    },
    limits:{fileSize:1024*1024* 1} // 1 MB

})
module.exports=photoUpload