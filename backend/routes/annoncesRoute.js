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
} = require("../controllers/annoncesController");
const validateObjectId=require("../middlewares/validateObjectId")
router
  .route("/")
  .post(verifyToken, photoUpload.single("image"), createAnnonceCtrl)
  .get(getAllAnnoncesCtrl);

router.route("/count").get(getAnnoncesCount);
router.route("/:id")
   .get(validateObjectId,getSingleAnnonceCtrl)
   .delete(validateObjectId,verifyToken,deleteAnnonceCtrl)
   .put(validateObjectId,verifyToken,updateAnnonceCtrl)

module.exports = router;
