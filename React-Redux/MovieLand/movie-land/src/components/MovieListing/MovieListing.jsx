import React from "react";
import { getAllMovies } from "../../features/movies/movieSlice";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import { Link } from "react-router-dom";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);

  const displayMovies = movies?.Response ? (
    <div className="movie-container">
      {movies.Search.map((movie, index) => (
        <Link to="/movies/:${movie.imdbID}">
          <MovieCard key={index} data={movie} />
        </Link>
      ))}
    </div>
  ) : (
    <div>
      <span>No movie</span>
    </div>
  );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Popular Movies</h2>
        {displayMovies}
      </div>
    </div>
  );
};

export default MovieListing;
