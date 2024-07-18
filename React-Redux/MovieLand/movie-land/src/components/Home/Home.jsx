import React, { useEffect } from "react";
import "./Home.scss";
import banner from "../../common/assests/banner.png";
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
        document.write("An error occured try after sometime");
        document.close();
      });
    dispatch(addMovies(response?.data));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="banner-img">
      <img src={banner} alt="banner-image" />
      <div>
        <span>
          Unlimited movies
          <br /> Search any movies...
        </span>
      </div>

      <div className="searchBar">
        <input type="text" placeholder="Movie name" />
        <button>Search</button>
      </div>
      <MovieListing />
    </div>
  );
};

export default Home;
