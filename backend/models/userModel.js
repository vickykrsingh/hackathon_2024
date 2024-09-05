import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, //it trims white spaces
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    role: {
      type: String,
        enum : ['donator','ngo'],
        default:'donator'
      },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
