import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import "./style.css";
import ThemeContext from "../../App";

export const Hooks = () => {
  const [counter, setCounter] = useState(0);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const focusInput = useRef(null);

  function handleFocus() {
    focusInput.current.focus();
  }

  useMemo(() => {
    console.log("called memo");
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(intervalId); //cleanup function works on unmount
    };
  }, []); //works on mounting phase and each second

  const handleIncrement = () => {
    setCounter((previous) => previous + 1);
  };

  const handleDecrement = () => {
    setCounter((previous) => previous - 1);
  };

  return (
    <div
      className="container"
      style={{
        textAlign: "center",
        margin: "5rem",
        // backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <span className="heading"> useState Hook Example </span>
      <div className="buttons">
        <button className="button" onClick={handleIncrement}>
          +
        </button>
        <span>{counter}</span>
        <button className="button" onClick={handleDecrement}>
          -
        </button>
      </div>
      <div className="useEffect">
        <div className="heading"> useEffect Hook Example </div>
        Current Time is {currentTime}
      </div>
      <div className="useRef">
        <div className="heading"> useRef Hook Example </div>
        <input ref={focusInput} type="text"></input>
        <button onClick={handleFocus}>Focus Input field</button>
      </div>
    </div>
  );
};
