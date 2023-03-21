import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: false },
    price: { type: Number, required: true, unique: false },
    stock: { type: Number, required: true },
    sale: Number,
    category: { type: String, required: true },
    spec: { type: [], required: false },
    description: String,
    created_date: { type: Number, required: true },
    update_date: { type: Number, required: true },
  },
  {
    collection: "products",
  }
);

const Products = mongoose.model("Products", productSchema, "products");

export default Products;
