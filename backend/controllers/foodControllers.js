import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";
import foodModel from "../models/foodModel.js";

export const uploadFood = async (req, res) => {
  const { description, quantity, location } = req.body;
  try {
    // Save food information to the database
    const food = await new foodModel({
      foodName: description,
      location,
      quantity,
      user:req.user._id
    }).save();
    return res.status(200).json({
      message: "New food info added",
      success: true,
      food,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};


export const getFood = async (req, res) => {
  const _id = req.user;
  try {
    const food = await foodModel.find({user:_id})
    return res.status(200).send({
      message: "food fetched successfully",
      success: true,
      food
    })
  } catch (error) {
    return res.status(400).send({
      message: "food not available",
      success: false,
      food: null
    })
  }
}