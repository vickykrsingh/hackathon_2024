// packages import
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import cors from 'cors'
import connectDB from "./Config/db.js";
import authRoutes from "./routes/authRoutes.js";
import foodRoutes from "./routes/foodRoutes.js"
import {v2 as cloudinary} from 'cloudinary'
import cookieParser from "cookie-parser";
// import path from 'path';



// rest object
const app = express();

// configuration environment
dotenv.config();

// configuration DATABASE
connectDB();


// middleWares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true, // Enable credentials (cookies, authorization headers, etc.)
}));
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  next();
});
// app.use(express.static(path.join(__dirname,'./client/build')))

// Accessing Environment variables
const PORT = process.env.PORT || 8080;
const Mode = process.env.MODE;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// routes
app.get('/',(req,res)=>{
  res.send("pong")
})
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/food", foodRoutes);

// Rest api
// app.use('*',function(req,res){
//   res.sendFile(path.join(__dirname,"*./client/build/index.html"));
// })




// Server listening
app.listen(process.env.PORT,(e)=>{
  console.log("running port on ",process.env.PORT)
})
