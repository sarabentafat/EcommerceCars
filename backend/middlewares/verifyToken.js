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
      return res.status(403).json({ message: "Not allowed, only user himself" });
    }
  });
}
// Verify token and authorization
function verifyTokenAndAuthorization(req, res, next) {
  verifyToken(req, res, () => {
    const isAdmin = req.user.isAdmin;
    
    const isUserHimself = req.user._id === req.params.id;
    
console.log(isUserHimself)
    if (isAdmin || isUserHimself) {
      next();
    } else {
      return res
        .status(403)
        .json({ message: "Not allowed, only the user himself or an admin" });
    }
  });
}

module.exports = {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndOnlyUser,
  verifyTokenAndAuthorization,
};