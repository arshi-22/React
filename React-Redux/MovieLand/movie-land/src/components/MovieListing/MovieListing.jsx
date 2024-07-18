import React from "react";
import { getAllMovies } from "../../features/movies/movieSlice";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);

  const displayMovies = movies.Response ? (
    <div className="movie-container">
      {movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))}
    </div>
  ) : (
    <di>
      <span>No movie</span>
    </di>
  );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        {displayMovies}
      </div>
    </div>
  );
};

export default MovieListing;
