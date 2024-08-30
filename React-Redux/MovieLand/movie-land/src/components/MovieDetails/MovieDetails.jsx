import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  fetchMovieDetailsOrShows,
  getMovieOrShowDetails,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import "./MovieDetails.scss";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const details = useSelector(getMovieOrShowDetails);

  useEffect(() => {
    console.log(details);
    dispatch(fetchMovieDetailsOrShows(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="details">
      <Link to="/" className="fa fa-arrow-left"></Link>
      {Object.keys(details).length === 0 ? (
        <div className="fa fa-refresh fa-3x loader"></div>
      ) : (
        <>
          <div className="detail">
            <div className="section-left">
              <h2>{details.Title}</h2>
              <div className="rating">
                <span>
                  IMDB Rating <i className="fa fa-star"></i>:{" "}
                  {details.imdbRating}
                </span>
                <span>
                  IMDB Votes <i className="fa fa-thumbs-up"></i>:{" "}
                  {details.imdbVotes}
                </span>
                <span>
                  Runtime <i className="fa fa-film"></i>: {details.imdbRuntime}
                </span>
                <span>
                  Year<i className="fa fa-calender"></i>: {details.Year}
                </span>
              </div>
              <div className="info">
                <div>
                  <span>Director : </span>
                  <span>{details.Director}</span>
                </div>
                <div>
                  <span>Stars : </span>
                  <span>{details.Actors}</span>
                </div>
                <div>
                  <span>Genre : </span>
                  <span>{details.Genre}</span>
                </div>
                <div>
                  <span>Awards : </span>
                  <span>{details.Awards}</span>
                </div>
              </div>

              <p>{details.Plot}</p>
            </div>
            <div className="section-right">
              <img src={details.Poster} alt="poster" className="poster" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
