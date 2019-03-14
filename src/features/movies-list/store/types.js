// @flow
import type { Movie } from '../../../types/Movie';

export const MOVIE_LIST_ACTIONS = {
  FETCH_POPULAR_MOVIES_REQUEST: '@@movies/FETCH_POPULAR_MOVIES_REQUEST',
  FETCH_POPULAR_MOVIES_SUCCESS: '@@movies/FETCH_POPULAR_MOVIES_SUCCESS',
  FETCH_POPULAR_MOVIES_FAILURE: '@@movies/FETCH_POPULAR_MOVIES_FAILURE',
}

export type MovieListResponse = {
  page: number,
  total_results: number,
  total_pages: number,
  movies: Movie[]
}

export type MovieListState = {
  popularMovies: MovieListResponse
}

export type QuerySearch = {
  query: string
}

export type FetchPopularMovieListSuccessAction = {
  type: '@@movies/FETCH_POPULAR_MOVIES_SUCCESS', // check why can not be a variable
  payload: MovieListResponse
}

export type FetchPopularMovieListFailureAction = {
  type: '@@movies/FETCH_POPULAR_MOVIES_FAILURE', // check why can not be a variable
  payload: any
}

export type FetchPopularMovieListRequestAction = {
  type: '@@movies/FETCH_POPULAR_MOVIES_REQUEST', // check why can not be a variable
}

export type MovieListActions =
  FetchPopularMovieListSuccessAction |
  FetchPopularMovieListFailureAction |
  FetchPopularMovieListRequestAction
