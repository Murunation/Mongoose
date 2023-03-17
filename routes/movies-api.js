import express, { response } from "express";
import Movie from "../model/Movie.js";
import { getMovies, getMoviesTitle } from "../services/mon-service.js";

const movieRouter = express.Router();

movieRouter.get("/movies", async (req, res) => {
  console.log("Getting 1 movies");
  Movie.find({})
    .limit(1)
    .then((response) => {
      res.status(200).send(response);
    });
});

movieRouter.get("/movie", async (req, res) => {
  const query = req.query;
  if (query && query.title) {
    const movie = await getMoviesTitle(query.title);
    res.status(200).send(movie);
  } else {
    res.status(400).send({ error: "something went wrong" });
  }
});
export default movieRouter;
