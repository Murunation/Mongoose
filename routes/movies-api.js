import express, { response } from "express";
import Movie from "../model/Movie.js";
import {
  addMovie,
  getMovies,
  getMoviesTitle,
} from "../services/mon-service.js";

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

movieRouter.post("/movie", async (req, res) => {
  console.log("Body: ", req.body);
  const response = await addMovie(req.body);
  if (response == "ok") {
    res.status(200).send("success");
  } else {
    res.status(400).send(response);
  }
});

movieRouter.get("/update", async () => {
  const result = await Movie.findOneAndUpdate(
    { title: "Just test movie" },
    { year: 2011 }
  ).exec();
  console.log("result ", result);
});

movieRouter.delete("/delete", async () => {
  const result = await Movie.findOneAndDelete({
    title: "Just test movie",
  }).exec();
  console.log("result: ", result);
});
export default movieRouter;
