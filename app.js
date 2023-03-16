import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// import Router from "./routes/product.js";

import dataBase from "./config/mongoose-config.js";
import Movie from "./model/Movie.js";
import movieRouter from "./routes/movies-api.js";

const app = express();

const port = 4000;
app.use(bodyParser.json());
app.use(cors());
app.use(movieRouter);

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
