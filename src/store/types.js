// @flow
import type { MovieListState, MovieListActions } from '../features/movies-list/store/types';
import type { LoaderState, LoaderActions } from './loader/types';

export type State = {
  moviesList: MovieListState,
  loaders: LoaderState
}

export type Actions = MovieListActions | LoaderActions