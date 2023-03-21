import Products from "../model/Product.js";
import moment from "moment";
import "../config/mongoose-config.js";

export async function getProducts() {
  return await Products.find();
}

const date = moment().format("llll");

export async function postProduct(newProduct) {
  return await Products.create({
    name: newProduct.name,
    price: newProduct.price,
    stock: newProduct.stock,
    category: newProduct.category,
    description: newProduct.description,
    spec: newProduct.spec,
    created_date: date,
    update_date: date,
  });
}

//d

export async function deleteProduct(deleteProductName) {
  return await Products.deleteOne({ name: deleteProductName });
}

//
