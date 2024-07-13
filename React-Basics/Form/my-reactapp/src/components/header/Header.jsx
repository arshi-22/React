import React, { useContext } from "react";
import { ThemeContext } from "../context/DynamicTheme";
import "./style.css";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <header
        className="header"
        style={{ backgroundColor: theme === "light" ? "white" : "gray" }}
      >
        <div>
          <h1>React</h1>
          <h3>The library for web and native user interfaces</h3>
        </div>
        <div className="navItems">
          <nav>
            <ul>
              {/* <a href="#">Learn</a>
              <li></li>
              <a href="#">Reference</a>
              <li></li>
              <a href="#">Community</a>
              <li></li> */}
              <button onClick={toggleTheme}>
                {theme === "dark" ? "Light" : "Dark"}
              </button>
            </ul>
          </nav>
        </div>
      </header>
      <hr />
    </>
  );
};

export default Header;
