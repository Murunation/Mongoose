import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// import Router from "./routes/product.js";

import dataBase from "./config/mongoose-config.js";
import Movie from "./model/Movie.js";

const app = express();

const port = 5000;
app.use(bodyParser.json());
app.use(cors());

dataBase.once("open", () => {
  Movie.find({})
    .limit(1)
    .then((movies) => {
      console.log("Movies", movies);
    })
    .catch((error) => {
      console.log("Error querying movies", error);
    });
});

dataBase.on("error", (error) => {
  console.log("Error connecting to database", error);
});

app.listen(port, () => {
  console.log("Working", port);
});
