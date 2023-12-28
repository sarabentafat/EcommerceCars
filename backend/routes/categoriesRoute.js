const { createCategoryCtrl } = require("../controllers/categoriesController")
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken")

const router =require("express").Router()
// api/categories
router.route("/")
        .post(verifyTokenAndAdmin,createCategoryCtrl)
module.exports=router