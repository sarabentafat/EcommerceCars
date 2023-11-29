const jwt=require("jsonwebtoken")
function verifyToken(req,res,next){
    const authToken=req.headers.authorization;
    if(authToken){
        const token=authToken.split(" ")[1];
        try{
            const decodedPayload=jwt.verify(token,process.env.JWT_SECRET)
            req.user=decodedPayload;
            next()
        }catch(error){
            return res.status(401).json({message:"invalid token ,access denied"})
        }
    }else{ 
        return res.status(401).json({message:"no token provided,access denied"})
    }

}

//VERFIY token & admin
function verifyTokenAndAdmin(req,res,next){ 
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next()
        }else {
            return res.status(403).json({message:"not allowed ,only admin"})
        }
    })
}

// VERIFY token & only user himself
function verifyTokenAndOnlyUser(req, res, next) {
  verifyToken(req, res, () => {
    if (req.user._id === req.params.id) {
      next();
    } else {
      console.log(req.params.id);
      console.log(req.user._id);
      return res.status(403).json({ message: "Not allowed, only user himself" });
    }
  });
}

module.exports={verifyToken,verifyTokenAndAdmin,verifyTokenAndOnlyUser}