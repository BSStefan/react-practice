// @flow
import { combineReducers } from 'redux';
import moviesListReducer from '../features/movies-list/store/reducer';
import loadersReducer from './loader/reducer';

import type { Actions, State } from './types';
import type { Reducer } from 'redux';

const reducer: Reducer<State, Actions> = combineReducers<Object, Actions>({
  moviesList: moviesListReducer,
  loaders: loadersReducer
});

export default reducer;