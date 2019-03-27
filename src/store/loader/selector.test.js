import { isLoading } from './selector';
import { initialState } from './reducer';

const initialStateWithTrueAction = { byAction: { FETCH_MOVIE1: true } };
const initialStateWithFalseAction = { byAction: { FETCH_MOVIE1: false } };

it('Should return true when do not find value and default is set to true', () => {
  expect(isLoading(initialState, ['FETCH_MOVIE1_REQUEST'], true)).toBe(true);
})

it('Should return false when do not find value and default is set to false', () => {
  expect(isLoading(initialState, ['FETCH_MOVIE1_REQUEST'], false)).toBe(false);
})
it('Should return true when do not find value and default is not set', () => {
  expect(isLoading(initialState, ['FETCH_MOVIE1_REQUEST'])).toBe(true);
})

it('Should return true when when action is found and default value is true', () => {
  expect(isLoading(initialStateWithTrueAction, ['FETCH_MOVIE1_REQUEST'], true)).toBe(true);
})

it('Should return true when action is found and value is true and array has more then one action', () => {
  expect(isLoading(initialStateWithTrueAction, ['FETCH_MOVIE1_REQUEST', 'FETCH_MOVIE2_REQUEST'], true)).toBe(true);
})

it('Should return true when action is found and value is true and array has more then one action', () => {
  const initialStateWithTrueAction = { byAction: { FETCH_MOVIE1: true, FETCH_MOVIE2: false } };
  expect(isLoading(initialStateWithTrueAction, ['FETCH_MOVIE1_REQUEST', 'FETCH_MOVIE2_REQUEST'], true)).toBe(true);
})

it('Should return true when when action is found and value is true and default is false', () => {
  expect(isLoading(initialStateWithTrueAction, ['FETCH_MOVIE1_REQUEST', 'FETCH_MOVIE2_REQUEST'], false)).toBe(true);
})

it('Should return false when when action is found and value is false', () => {
  expect(isLoading(initialStateWithFalseAction, ['FETCH_MOVIE1_REQUEST'], true)).toBe(false);
})

it('Should return false when action is found and value is false and array has more then one action', () => {
  expect(isLoading(initialStateWithFalseAction, ['FETCH_MOVIE1_REQUEST', 'FETCH_MOVIE2_REQUEST'], true)).toBe(false);
})

it('Should return false when when action is found and value is false and default is false', () => {
  expect(isLoading(initialStateWithFalseAction, ['FETCH_MOVIE1_REQUEST', 'FETCH_MOVIE2_REQUEST'], false)).toBe(false);
})