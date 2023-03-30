import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// import Router from "./routes/product.js";

import "./config/mongoose-config.js";
import Movie from "./model/Movie.js";
import movieRouter from "./routes/movies-api.js";
import cloudinary from "./config/cloudinary.js";
import productsRouter from "./routes/product-api.js";
import usersRouter from "./routes/user-api.js";

const app = express();

const port = 4000;


app.use(bodyParser.json());
app.use(cors());
app.use(movieRouter);
app.use(productsRouter);
app.use(usersRouter);


app.listen(port, () => {
  console.log("Working", port);
});
