import { useState } from "react";
import "./App.css";
import React from "react";
import { useEffect } from "react";

const App = () => {
  const [quote, setQuote] = useState();

  const generateQuotes = async () => {
    const quote = await fetch("https://api.quotable.io/random");
    const response = await quote.json();
    console.log(response);
    setQuote(response);
  };

  useEffect(() => {
    generateQuotes();
  }, []);

  return (
    <div id="quote-box">
      <p id="text">{quote?.content}</p>
      <p id="author">- {quote?.author}</p>
      <div className="footer">
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet/post?hashtags=quotes&related=freecodecamp&text=${quote}`}
          target="_blank"
        >
          X
        </a>
        <button id="new-quote" onClick={generateQuotes}>
          New Quote
        </button>
      </div>
    </div>
  );
};
export default App;
