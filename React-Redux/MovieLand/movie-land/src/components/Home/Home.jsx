import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovies, fetchWebSeries } from "../../features/movies/movieSlice";
import MovieListing from "../MovieListing/MovieListing";
import MovieSearch from "../movieSearch/MovieSearch";
import "./Home.scss";

import GPT from "../GPT/GPT";

const Home = () => {
  const dispatch = useDispatch();
  const [openGpt, setOpenGpt] = useState(false);

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchWebSeries());
  }, [dispatch]);

  return (
    <>
      <div className="banner-img">
        <MovieSearch search={fetchMovies} />
        <div>
          <button className="ask_GPT" onClick={() => setOpenGpt((prv) => !prv)}>
            Ask Suggestions to GPT
          </button>
        </div>
      </div>
      <MovieListing />
      <MovieListing type="show" />
      {openGpt ? <GPT onClose={() => setOpenGpt(false)} /> : null}
    </>
  );
};

export default Home;
