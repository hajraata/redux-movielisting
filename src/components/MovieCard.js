import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../styles/moviecard.css";
import { addToFavesList, removeFromFavesList } from "../redux/actions";
import { useDispatch } from "react-redux";

export default function MovieCard({ movie }) {
  const dispatch = useDispatch();

  const addToFaves = (movie) => {
    // console.log(movie);
    dispatch(addToFavesList({ ...movie, faved: "true" }));
  };

  const removeFromFaves = (movie) => {
    dispatch(removeFromFavesList({ ...movie, faved: "false" }));
  };

  return (
    <Card className="card-container" key={movie.id}>
      <div className="card-img">
        <Card.Img
          src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
          alt="movie-poster"
        />
      </div>

      {movie.faved === "false" ? (
        <div
          className="favorite-btn"
          onClick={() => addToFaves(movie)}
          key={movie.id}
        >
          <i className="fa-regular fa-heart"></i>
        </div>
      ) : (
        <div
          className="favorite-btn"
          onClick={() => removeFromFaves(movie)}
          key={movie.id}
        >
          <i className="fa-solid fa-heart"></i>
        </div>
      )}

      <div className="card-content">
        <Link
          to="/moviedetails"
          state={movie}
          key={movie.id}
          className="movie-link"
        >
          <Card.Title className="card-heading">{movie.title}</Card.Title>
        </Link>
        <Card.Text className="truncate">{movie.overview}</Card.Text>
      </div>
    </Card>
  );
}
