// packages import
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import cors from 'cors'
import connectDB from "./Config/db.js";
import authRoutes from "./routes/authRoutes.js";
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
app.use(cors())
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname,'./client/build')))

// Accessing Environment variables
const PORT = process.env.PORT || 8080;
const Mode = process.env.MODE;

// routes
app.get('/',(req,res)=>{
  res.send("pong")
})
app.use("/api/v1/auth", authRoutes);

// Rest api
// app.use('*',function(req,res){
//   res.sendFile(path.join(__dirname,"*./client/build/index.html"));
// })




// Server listening
app.listen(process.env.PORT,(e)=>{
  console.log("running port on ",process.env.PORT)
})
