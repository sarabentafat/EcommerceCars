const express = require("express");
const router = express.Router();
const photoUpload = require("../middlewares/photoUpload");
const { verifyToken } = require("../middlewares/verifyToken");
const {
  createAnnonceCtrl,
  getAllAnnoncesCtrl,
  getSingleAnnonceCtrl,
  getAnnoncesCount,
  deleteAnnonceCtrl,
  updateAnnonceCtrl,
  updateAnnonceImageCtrl,
  toggleLikeCtrl,
  getAnnoncesCountCtrl,
} = require("../controllers/annoncesController");
const validateObjectId=require("../middlewares/validateObjectId")
router
  .route("/")
  .post(verifyToken, photoUpload.single("image"), createAnnonceCtrl)
  .get(getAllAnnoncesCtrl);

router.route("/count").get(getAnnoncesCount);
//api/annonces/:id
router.route("/:id")
   .get(validateObjectId,getSingleAnnonceCtrl)
   .delete(validateObjectId,verifyToken,deleteAnnonceCtrl)
   .put(validateObjectId,verifyToken,updateAnnonceCtrl)

//api/annonces/update-image/:id
router.route("/update-image/:id")
     .put(validateObjectId,verifyToken,photoUpload.single("image"),updateAnnonceImageCtrl)
    
// /api/annonces/like/:id
router.route("/like/:id")
  .put(validateObjectId, verifyToken, toggleLikeCtrl)
  .get(getAnnoncesCountCtrl);
    

module.exports = router;
