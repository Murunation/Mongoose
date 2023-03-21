import express from "express";
import multer from "multer";
// import { nanoid } from "nanoid";
// import cloudinary from "../config/cloudinary";
import {
  deleteProduct,
  getProducts,
  postProduct,
} from "../services/prod-service.js";
import moment from "moment";
import { nanoid } from "nanoid";

const productsRouter = express.Router();
//
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cd(null, "/tmp");
  },
  filename: (req, file, cb) => {
    const ext = extractExtension(file.originalname);
    console.log("extention: ", ext);
    const newName = nanoid() + "." + ext;
    cb(null, newName);
  },
});

// const extractExtension = (name) => {
//   const splitted = name.split(".");
//   return splitted[splitted.length - 1];
// };
const upload = multer({ storage });

productsRouter.post("/file", upload.single("file"), async (req, res) => {
  console.log("req.file: ", req.file);
});

//
productsRouter.get("./products", (req, res) => {
  console.log("Get request");
  res.status(200).send("Success");
});
//
productsRouter.get("/getProduct", async (req, res) => {
  const result = await getProducts();
  res.status(200).json(result);
  console.log(result);
});

// productsRouter.post("/addproduct", something.single("file"), (req, res) => {
//   console.log(req);
// });

export default productsRouter;
