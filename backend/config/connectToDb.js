const mongoose=require('mongoose')
module.exports=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to mongodb ^-^ ")
        
    }catch{
        console.log('MongoDB connection failed',error)
    }
}