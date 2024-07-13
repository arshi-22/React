import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie Land</div>
      </Link>
      <div className="user">
        <img src="" alt="username" />
      </div>
    </div>
  );
};

export default Header;
