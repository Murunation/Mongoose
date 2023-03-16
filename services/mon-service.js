import Movie from "../model/Movie.js";

export async function getMovies() {
  return await Movie.find().limit(1);
}
