// @flow
import { MOVIE_LIST_ACTIONS } from "./types";
import type { MovieListState, MovieListActions } from './types';

export const initialState = {
  popularMovies: {
    page: 0,
    total_results: 0,
    total_pages: 0,
    movies: []
  }
}

const reducer = (state: MovieListState = initialState, action: MovieListActions): MovieListState => {
  switch (action.type) {
    case MOVIE_LIST_ACTIONS.FETCH_POPULAR_MOVIES_SUCCESS:
      return { ...state, popularMovies: action.payload }
    default: return state;
  }
}

export default reducer;

