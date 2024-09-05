import mongoose from 'mongoose'

const foodSchema = new mongoose.Schema({
    foodName:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
})

const foodModel = mongoose.model('food',foodSchema)

export default foodModel