import React from "react";
import WithFetch from "../HOC/WithFetch";

const Movies = (props) => {
  const { movies } = props;

  return (
    <div>
      {
        <ul>
          {movies.map((movie) => (
            <li key={movie.title}>
              <span>{movie.title}</span>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default WithFetch(Movies);
