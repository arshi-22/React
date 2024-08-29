import React, { useState } from "react";
import "./MovieSearch.scss";

const MovieSearch = ({ search, styleSearch }) => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div style={styleSearch} className={"searchBox"}>
      <div className="search">
        <input
          type="text"
          placeholder="Movie name"
          onChange={handleInputChange}
        />
        <button className="searchButton">Search</button>
      </div>
    </div>
  );
};

export default MovieSearch;
