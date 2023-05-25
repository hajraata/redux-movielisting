import React from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "../styles/header.css";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className="header-container">
      <div className="content-container">
        <div className="nav-tags">
          <h4>Movies App</h4>
          <Navigation />
        </div>

        <div className="img-container">
          <img
            src="https://www.freeiconspng.com/uploads/movie-icon-11.png"
            alt="movie"
          />
        </div>
      </div>
    </div>
  );
}
