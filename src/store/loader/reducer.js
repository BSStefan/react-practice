// @flow
import { LOADER_ACTIONS } from './types';
import type { LoaderActions, LoaderState } from './types';
import type { Reducer } from 'redux';

const initialState: LoaderState = {
  byAction: {}
}

const reducer: Reducer<LoaderState, LoaderActions> = (state: LoaderState = initialState, action: LoaderActions): LoaderState => {
  switch (action.type) {
    case LOADER_ACTIONS.TURN_ON_LOADER:
      return { ...state, byAction: { ...state.byAction, [action.payload]: true } }
    case LOADER_ACTIONS.TURN_OFF_LOADER:
      return { ...state, byAction: { ...state.byAction, [action.payload]: false } }
    default:
      return state;
  }
}

export default reducer;
