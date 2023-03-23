import express from "express";
import multerHandler from "../Util/multer-handler.js";
import uploadCloud from "../config/cloudinary.js";
import {
  deleteProduct,
  getProducts,
  postProduct,
} from "../services/prod-service.js";

const productsRouter = express.Router();

productsRouter.post(
  "/addproduct",
  multerHandler.single("file"),
  async (req, res) => {
    console.log("req.file: ", req.file);
    const { secure_url } = await uploadCloud.uploader.upload(req.file.path, {
      folder: "test",
    });
    const newProduct = {
      image: secure_url,
      ...JSON.parse(req.body.details),
    };
    console.log("new product: ", newProduct);
    postProduct(newProduct);
  }
);

// productsRouter.delete("/deleteProduct", async (req, res) => {
//   const body = res.body;
//   const result = await Products.deleteOne({ name: body.name });
//   return result;
// });

//
productsRouter.get("/getProduct", async (req, res) => {
  const result = await getProducts();
  res.status(200).json(result);
  console.log(result);
});

export default productsRouter;
