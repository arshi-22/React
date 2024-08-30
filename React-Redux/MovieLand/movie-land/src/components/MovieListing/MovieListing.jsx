import React from "react";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
};

const MovieListing = ({ type = "movie" }) => {
  const moviesOrShows = useSelector((state) =>
    type === "movie" ? getAllMovies(state) : getAllShows(state)
  );

  const displayMoviesOrShows =
    Object.keys(moviesOrShows)?.length === 0 ? (
      <div className="fa fa-refresh fa-2x loader"></div>
    ) : moviesOrShows?.Response ? (
      <div className="movie-container">
        <Slider {...settings}>
          {moviesOrShows.Search.map((movie, index) => (
            <MovieCard key={index} data={movie} />
          ))}
        </Slider>
      </div>
    ) : (
      <div className="no-movies">
        <span>{`No ${type} found`}</span>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Popular {type}s</h2>
        {displayMoviesOrShows}
      </div>
    </div>
  );
};

export default MovieListing;
