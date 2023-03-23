import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    image: { type: String },
    name: { type: String, required: true, unique: false },
    price: { type: Number, required: true, unique: false },
    stock: { type: Number, required: true },
    sale: Number,
    category: { type: String, required: true },
    spec: { type: [], required: false },
    description: String,
    created_date: { type: String, required: true },
    update_date: { type: String, required: true },
    brand: { type: String, required: true },
  },
  {
    collection: "products",
  }
);

const Products = mongoose.model("Products", productSchema, "products");

export default Products;
