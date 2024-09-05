import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";
import foodModel from "../models/foodModel.js";

export const uploadFood = async (req, res) => {
  const { description, quantity, location } = req.body;
  console.log('first')
  console.log(description, quantity, location);

  try {
    // Save food information to the database
    const food = await new foodModel({
      foodName: description,
      location,
      quantity,
    }).save();
    return res.status(200).json({
      message: "New food info added",
      success: true,
      food,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};


export const getFood = async (req, res) => {
  console.log('first')
  const { foodName } = await req.body;
  if (!foodName) {
    return res.status(400).send({
      message: "food not available",
      success: false,
      food: null
    })
  }
  console.log(foodName)
  try {
    const food = await foodModel.find({ foodName: foodName })
    return res.status(200).send({
      message: "food fetched successfully",
      success: true,
      food
    })
  } catch (error) {
    console.log(error)
    return res.status(400).send({
      message: "food not available",
      success: false,
      food: null
    })
  }
}