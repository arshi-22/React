import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/moviesApis";
import { API_URL, API_KEY, API_KEY_VALUE } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const searchValue = "Harry";
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    const response = await movieApi
      .get(`${API_URL}?${API_KEY}${API_KEY_VALUE}&s=${searchValue}`)
      .catch((error) => {
        console.error("An error occured try after sometime \n error", error);
      });
    dispatch(addMovies(response.data));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="banner-img">
      <div className="searchBar">
        <input type="text" placeholder="Search movie here" />
      </div>
      <MovieListing />
    </div>
  );
};

export default Home;
