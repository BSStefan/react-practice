// @flow
import axios from 'axios';
import type { Dispatch } from 'redux';
import { MOVIE_LIST_ACTIONS } from './types';
import type {
  MovieListResponse, MovieListActions, FetchPopularMovieListSuccessAction, FetchPopularMovieListFailureAction, FetchPopularMovieListRequestAction, QuerySearch
} from './types';


export const formatPopularMovieList = (data: any): MovieListResponse => ({
  page: data.page,
  total_results: data.total_results,
  total_pages: data.total_pages,
  movies: data.results ? data.results.map(r => ({
    id: r.id,
    title: r.title,
    original_language: r.original_language,
    genre_ids: r.genre_ids,
    overview: r.overview,
    release_date: r.release_date,
    poster: r.poster_path
  })) : []
})

export const fetchPopularMovieListSuccess = (response: MovieListResponse): FetchPopularMovieListSuccessAction => ({
  type: MOVIE_LIST_ACTIONS.FETCH_POPULAR_MOVIES_SUCCESS,
  payload: response,
})

export const fetchPopularMovieListFailure = (error: any): FetchPopularMovieListFailureAction => ({
  type: MOVIE_LIST_ACTIONS.FETCH_POPULAR_MOVIES_FAILURE,
  payload: error,
})

export const fetchPopularMovieListRequest = (): FetchPopularMovieListRequestAction => ({
  type: MOVIE_LIST_ACTIONS.FETCH_POPULAR_MOVIES_REQUEST,
})

export const fetchPopularMovieList = () => (dispatch: Dispatch<MovieListActions>): Promise<any> => {
  dispatch(fetchPopularMovieListRequest())
  return axios.get('/movie/popular')
    .then((response) => {
      const formattedResponse = formatPopularMovieList(response.data);
      dispatch(fetchPopularMovieListSuccess(formattedResponse));
      return formattedResponse;
    })
    .catch((error) => {
      dispatch(fetchPopularMovieListFailure(error.response.data));
      return error;
    })
}

export const searchMovies = (query: QuerySearch) => (dispatch: Dispatch<MovieListActions>): void => {
  dispatch(fetchPopularMovieListRequest())
  return axios.get('/search/movie', { params: query })
    .then((response) => {
      const formattedResponse = formatPopularMovieList(response.data);
      dispatch(fetchPopularMovieListSuccess(formattedResponse));
      return formattedResponse;
    })
    .catch((error) => {
      dispatch(fetchPopularMovieListFailure(error.response.data))
      return error;
    })
}