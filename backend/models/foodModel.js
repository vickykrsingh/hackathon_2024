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
    foodImage:{
        public_id:{
            type:String,
            required:true
        },
        secure_url:{
            type:String,
            required:true
        }
    },
    quantity:{
        type:String,
        required:true
    },
})

const foodModel = mongoose.model('food',foodSchema)

export default foodModel