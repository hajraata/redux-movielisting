import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
  const faves = useSelector((state) => state.faves);

  return (
    <div className="movies-container">
      {faves.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
      {/* <h1>Faves</h1> */}
    </div>
  );
}
