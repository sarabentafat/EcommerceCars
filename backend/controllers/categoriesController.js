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
/**
 * @desc get all
 * @route /api/categories
 * @method GET 
 * @access public
 */
module.exports.getAllCategoriesCtrl=asyncHandler(async(req,res)=>{
     const categories = await Category.find();
     res.status(200).json(categories);
    if(error){
        return res.status(400).send(error.details[0].message)
    }  
})
/**
 * @desc get all
 * @route /api/categories
 * @method GET 
 * @access public
 */
module.exports.getAllCategoriesCtrl=asyncHandler(async(req,res)=>{
     const categories = await Category.find();
     res.status(200).json(categories);
    if(error){
        return res.status(400).send(error.details[0].message)
    }  
})
/**
 * @desc delete category
 * @route /api/categories
 * @method DELETE
 * @access private (only admin)
 */
module.exports.deleteCategoryCtrl=asyncHandler(async(req,res)=>{
   const category=await Category.findById(req.params.id)
   console.log(req.params.id)
   if(!category){
    return res.status(404).json({message:'category not found'})
   }
   await Category.findByIdAndDelete(req.params.id)
   res.status(200).json({
    message:"Deleted Successfully",

    categoryId:category._id
});

})