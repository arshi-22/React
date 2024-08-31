import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  fetchWebSeries,
  getSearchKey,
  updateSearchKey,
} from "../../features/movies/movieSlice";
import "./MovieSearch.scss";

const MovieSearch = () => {
  const dispatch = useDispatch();
  const searchKey = useSelector(getSearchKey);

  const handleInputChange = (event) => {
    dispatch(updateSearchKey(event.target.value));
  };

  const searchMoviesOrShows = () => {
    dispatch(fetchMovies());
    dispatch(fetchWebSeries());
  };

  return (
    <div className={"searchBox"}>
      <div className="search">
        <input
          value={searchKey}
          type="text"
          placeholder="Type here..."
          onChange={handleInputChange}
        />
        <button className="searchButton" onClick={searchMoviesOrShows}>
          Search
        </button>
      </div>
    </div>
  );
};

export default MovieSearch;
