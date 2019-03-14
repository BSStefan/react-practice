// @flow
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import type { Dispatch } from 'redux';
import reducer from './reducer';
import { setLoaderValue } from './loader/middleware';

import type { State, Actions } from './types';

const store = createStore<State, Actions, Dispatch<Actions>>(
  reducer,
  compose(applyMiddleware(thunk, setLoaderValue), window.devToolsExtension ? window.devToolsExtension() : f => f),
);

export default store;