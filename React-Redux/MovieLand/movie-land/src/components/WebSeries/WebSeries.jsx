import React from "react";
import { useSelector } from "react-redux";
import { getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";

const WebSeries = () => {
  const series = useSelector(getAllShows);

  const displayShows = series?.Response ? (
    <div className="movie-container">
      {series.Search.map((shows, index) => (
        <MovieCard key={index} data={shows} />
      ))}
    </div>
  ) : (
    <div>
      <span>No Shows</span>
    </div>
  );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Popular Shows</h2>
        {displayShows}
      </div>
    </div>
  );
};

export default WebSeries;
