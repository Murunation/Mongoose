import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  stock: Number,
  sale: Number,
  cap: String,
  elect: String,
  voltage: Number,
  size: Number,
  expDate: Date,
  descrip: String,
});
