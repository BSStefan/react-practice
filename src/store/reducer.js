// @flow
import { combineReducers } from 'redux';
import moviesListReducer, { initialState as moviesListInitialState } from '../features/movies-list/store/reducer';
import loadersReducer, { initialState as loadersInititialState } from './loader/reducer';

import type { Actions, State } from './types';
import type { Reducer } from 'redux';

export const initialState = {
  moviesList: moviesListInitialState,
  loaders: loadersInititialState
}

const reducer: Reducer<State, Actions> = combineReducers<Object, Actions>({
  moviesList: moviesListReducer,
  loaders: loadersReducer
});

export default reducer;