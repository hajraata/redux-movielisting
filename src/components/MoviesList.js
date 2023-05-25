import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../redux/actions";
import MovieCard from "./MovieCard";

import "../styles/movielist.css";

export default function MoviesList() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const faves = useSelector((state) => state.faves);
  const [newMovies, setNewMovies] = useState(movies);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=7ee891ff2993212568534993a9bc2c73&language=en-US"
      );
      const result = await response.json();
      // console.log(result);
      dispatch(getMovies(result.results));
    };
    fetchMovies();
  }, [dispatch]);

  useEffect(() => {
    let arr = movies.map((movie) => {
      return { ...movie, faved: "false" };
    });
    setNewMovies(arr);

    if (movies.length > 0 && faves.length > 0) {
      arr.map((obj) => {
        faves.filter((obj2) => {
          if (obj.id === obj2.id) {
            return (obj["faved"] = "true");
          }

          return obj;
        });

        return setNewMovies(arr);
      });
    }
  }, [movies, faves]);

  console.log(newMovies);

  return (
    <div className="movies-container">
      {newMovies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
