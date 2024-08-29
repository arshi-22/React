import React, { useEffect } from "react";
import "./Home.scss";
import banner from "../../common/assests/banner.webp";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import MovieSearch from "../movieSearch/MovieSearch";
import { Link } from "react-router-dom";
import { fetchMovies, fetchWebSeries } from "../../features/movies/movieSlice";
import WebSeries from "../WebSeries/WebSeries";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchWebSeries());
  }, [dispatch]);

  const searchHome = {
    position: "absolute",
    top: "30%",
    left: "34%",
    transform: 'translate("-50%", "-50%")',
  };

  return (
    <>
      <div className="banner-img">
        <img src={banner} alt="banner-image" />
        <Link to="/movies/openAI/askanything" className="ask_GPT">
          Ask Suggestions to GPT
        </Link>
        <MovieSearch search={fetchMovies} styleSearch={searchHome} />
      </div>
      <MovieListing />
      <WebSeries/>
    </>
  );
};

export default Home;
