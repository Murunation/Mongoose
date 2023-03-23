import Products from "../model/Product.js";
import moment from "moment";
import "../config/mongoose-config.js";

export async function getProducts() {
  return await Products.find();
}

const date = moment().format("llll");

export async function postProduct(newProduct) {
  return await Products.insertMany({
    ...newProduct,
  });
}

//d

export async function deleteProduct(deleteProductName) {
  return await Products.deleteOne({ name: deleteProductName });
}

//
