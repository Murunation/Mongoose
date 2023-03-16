import express from "express";
import Movie from "../model/Movie.js";
import { getMovies } from "../services/mon-service.js";

const movieRouter = express.Router();

movieRouter.get("/movies", async (req, res) => {
  console.log("Getting 5 movies");
  const getMovie = await getMovies();
  res.status(200).json(getMovie);
});

export default movieRouter;
