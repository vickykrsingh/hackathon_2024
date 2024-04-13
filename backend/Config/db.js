import mongoose from 'mongoose';
import colors from 'colors';


const connectDB = async () => {
    try {
        console.log('hello')
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(conn)
        console.log("Connected successfully")
    } catch (error) {
        // console.log(error)
        console.log("error occoured.")
        console.log(error)
    }
}

export default connectDB;
