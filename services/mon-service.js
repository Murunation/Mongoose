import e from "express";
import Movie from "../model/Movie.js";

export async function getMovies() {
  return await Movie.find().limit(1);
}

export async function getMoviesTitle(title) {
  console.log("title: ", title);
  let movie = await Movie.find({ title });
  return movie;
}

export async function addMovie(newMovie) {
  const result = await new Movie(newMovie).save();
  if (result.title == newMovie.title) {
    return "Okey";
  } else {
    return "Something went wrong";
  }
}
