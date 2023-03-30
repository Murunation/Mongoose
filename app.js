import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// import Router from "./routes/product.js";

import dataBase from "./config/mongoose-config.js";
import Movie from "./model/Movie.js";
import movieRouter from "./routes/movies-api.js";
import cloudinary from "./config/cloudinary.js";
import productsRouter from "./routes/product-api.js";
import usersRouter from "./routes/user-api.js";

const app = express();

const port = 4000;

// Upload

// const res = cloudinary.v2.uploader.upload(
//   "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   {
//     public_id: "test1",
//     folder: "test",
//     use_filename: true,
//   }
// );

// res
//   .then((data) => {
//     console.log(data);
//     console.log(data.secure_url);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.use(bodyParser.json());
app.use(cors());
app.use(movieRouter);
app.use(productsRouter);
app.use(usersRouter);

// dataBase.once("open", () => {
//   Movie.find({})
//     .limit(1)
//     .then((movies) => {
//       console.log("Movies", movies);
//     })
//     .catch((error) => {
//       console.log("Error querying movies", error);
//     });
// });

// dataBase.on("error", (error) => {
//   console.log("Error connecting to database", error);
// });

app.listen(port, () => {
  console.log("Working", port);
});
