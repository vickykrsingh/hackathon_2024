import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";
// protected route middleware using JWT(json web Token)
export const requireSignIn = async (req, res, next) => {
  const token = req.cookies.token;
  try {
    // verify JWT token with the help of authorization key of header object in the basic of JWT_SECRET key
    const decode = await JWT.verify(
      token,
      process.env.JWT_SECRET
    );
    req.user = await decode;
    next();
  } catch (error) {
    res.status(401).send({
      success: false,
      error,
      message: "Error in require SignIn middleWare",
    });
  }
};

// Admin Access

export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(401).send({
      success: false,
      error,
      message: "Error in Admin MiddleWare",
    });
  }
};



// import jwt from 'jsonwebtoken'
// import {UserModel} from '../models/userModel.js'
// export const isAdmin = async (req,res,next) => {
//     try {
//         const token = req.cookies.token;
//         if(!token){
//             return res.status(401).json({
//                 success:false,
//                 message:"Invalid token",
//                 user:null
//             })
//         }
//         const decodeToken = jwt.verify(token,process.env.JWT_SECRET);
//         const user = await UserModel.findById(decodeToken._id)
//         if(!user){
//             return res.status(401).json({
//                 success:false,
//                 message:"User not found",
//                 user:null
//             })
//         }
//         if(user.role !=='admin'){
//             return res.status(403).json({
//                 success:false,
//                 message:"Unauthorized access.",
//                 user:null
//             })
//         }
//         req.user=user;
//         next()
//     } catch (error) {
//         return res.status(500).json({
//             success:false,
//             message:"Internal server error",
//             user:null
//         })
//     }
// }