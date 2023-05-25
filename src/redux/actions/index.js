export const getMovies = (moviesData) => {
  // console.log(moviesData);
  return {
    type: "GET_MOVIES",
    payload: moviesData,
  };
};

export const addToFavesList = (movie) => {
  return {
    type: "ADD_TO_FAVES",
    payload: movie,
  };
};

export const removeFromFavesList = (movie) => {
  return {
    type: "REMOVE_FROM_FAVES",
    payload: movie,
  };
};
