import loaderReducer, { initialState } from './reducer';
import { LOADER_ACTIONS } from './types';
import type { LoaderActions, LoaderState } from './types';

it('Should return initialState when action is not from that reducer', () => {
  const action = { type: 'Test' }
  expect(loaderReducer(undefined, action)).toEqual(initialState)
})

it('Should set loader on when initial value is equal to default initial value', () => {
  const action = { type: LOADER_ACTIONS.TURN_ON_LOADER, payload: 'FETCH_MOVIE_1' }
  const expected = { byAction: { 'FETCH_MOVIE_1': true } }
  expect(loaderReducer(undefined, action)).toEqual(expected)
})

it('Should set loader on when initial value is diff then default initial value', () => {
  const initialValue = { byAction: { FETCH_MOVIE_2: true } }
  const action = { type: LOADER_ACTIONS.TURN_ON_LOADER, payload: 'FETCH_MOVIE_1' }
  const expected = { byAction: { FETCH_MOVIE_1: true, FETCH_MOVIE_2: true } }
  expect(loaderReducer(initialValue, action)).toEqual(expected)
})

it('Should override initial value and set loader on', () => {
  const initialValue = { byAction: { FETCH_MOVIE_1: false } }
  const action = { type: LOADER_ACTIONS.TURN_ON_LOADER, payload: 'FETCH_MOVIE_1' }
  const expected = { byAction: { FETCH_MOVIE_1: true } }
  expect(loaderReducer(initialValue, action)).toEqual(expected)
})

it('Should set loader off when initial value is equal to default initial value', () => {
  const action = { type: LOADER_ACTIONS.TURN_OFF_LOADER, payload: 'FETCH_MOVIE_1' }
  const expected = { byAction: { FETCH_MOVIE_1: false } }
  expect(loaderReducer(undefined, action)).toEqual(expected)
})

it('Should set loader off when initial value is diff then default initial value', () => {
  const initialValue = { byAction: { FETCH_MOVIE_2: true } }
  const action = { type: LOADER_ACTIONS.TURN_OFF_LOADER, payload: 'FETCH_MOVIE_1' }
  const expected = { byAction: { FETCH_MOVIE_1: false, FETCH_MOVIE_2: true } }
  expect(loaderReducer(initialValue, action)).toEqual(expected)
})

it('Should override initial value and set loader off', () => {
  const initialValue = { byAction: { FETCH_MOVIE_1: true } }
  const action = { type: LOADER_ACTIONS.TURN_OFF_LOADER, payload: 'FETCH_MOVIE_1' }
  const expected = { byAction: { FETCH_MOVIE_1: false } }
  expect(loaderReducer(initialValue, action)).toEqual(expected)
})