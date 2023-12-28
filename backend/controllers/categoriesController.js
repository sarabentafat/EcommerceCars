const asyncHandler=require("express-async-handler")
const {Category,validateCreateCategory}=require("../models/Category")
/**
 * @desc Create new category
 * @route /api/categories
 * @method POST 
 * @access private (only admin)
 */
module.exports.createCategoryCtrl=asyncHandler(async(req,res)=>{
    const {error}=validateCreateCategory(req.body)
    if(error){
        return res.status(400).send(error.details[0].message)
    }
    const category=await Category.create({
        title:req.body.title,
        user:req.user._id
    })
    res.status(201).json(category)
})