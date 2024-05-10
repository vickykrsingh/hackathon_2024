import multer from "multer";
import path from "path";
import fs from "fs";
import FoodModel from "../models/foodModel.js"; // Assuming your model file is named foodModel.js
import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";
import foodModel from "../models/foodModel.js";
export const uploadFood = async (req, res) => {
  const { foodName, quantity, location } = req.body;
  const file = req.file;

  console.log(foodName, quantity, location, file);
  try {
    // Upload image to Cloudinary
    let public_id = null;
    let secure_url = null;
    if (req.file) {
      let cld_upload_stream = cloudinary.uploader.upload_stream(
        { folder: "food" },
        async function (error, result) {
          console.log(error, result);
          public_id = result.public_id;
          secure_url = result.secure_url;
          const food = await new foodModel({
            foodName,
            location,
            foodImage: {
              public_id: public_id,
              secure_url: secure_url,
            },
            quantity,
          }).save();
          console.log(food);
          return res.status(200).send({
            message: "new food info added",
            success: true,
          });
          res.json({ public_id: result.public_id, url: result.secure_url });
        }
      );

      streamifier.createReadStream(req.file.buffer).pipe(cld_upload_stream);
    }

    console.log("first");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error uploading image to Cloudinary" });
  }
};


export const getFood = async (req,res) => {
  console.log('first')
    const {foodName} = await req.body;
    if(!foodName){
        return res.status(400).send({
            message:"food not available",
            success:false,
            food:null
        })
    }
    console.log(foodName)
    try {
        const food = await foodModel.find({foodName:foodName})
        return res.status(200).send({
            message:"food fetched successfully",
            success:true,
            food
        })
    } catch (error) {
        console.log(error)
        return res.status(400).send({
          message:"food not available",
          success:false,
          food:null
      })
    }
}