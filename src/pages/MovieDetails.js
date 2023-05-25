import React from "react";
import "../styles/moviedetails.css";
import { useLocation } from "react-router-dom";

export default function MovieDetails() {
  const location = useLocation();
  const movie = location.state;

  return (
    <div className="movie-details-container">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
          alt=""
        />
      </div>
      <div className="movie-details">
        <h3>{movie.title}</h3>
        <h6>Rating: {movie.vote_average}</h6>
        <h6>Release Date: {movie.release_date}</h6>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
