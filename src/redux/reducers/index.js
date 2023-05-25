const initialState = {
  movies: [],
  faves: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      // console.log(action.payload);
      return { ...state, movies: [...action.payload] };

    case "ADD_TO_FAVES":
      console.log(state.faves);
      console.log(action.payload);

      return { ...state, faves: [...state.faves, action.payload] };

    case "REMOVE_FROM_FAVES":
      console.log(action.payload);
      const newFaves = state.faves.filter(
        (fave) => fave.id !== action.payload.id
      );
      return { ...state, faves: [...newFaves] };

    default:
      return state;
  }
};

export default moviesReducer;
