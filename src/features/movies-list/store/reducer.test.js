import reducer, { initialState } from './reducer';
import { fakeMovie } from '../../../utils/faker';
import { MOVIE_LIST_ACTIONS } from "./types";

const popularMoviesExample = {
  page: 1,
  total_results: 100,
  total_pages: 10,
  movies: [fakeMovie()]
}

const action = {
  type: MOVIE_LIST_ACTIONS.FETCH_POPULAR_MOVIES_SUCCESS,
  payload: popularMoviesExample
}

it('Should return default state', () => {
  expect(reducer(undefined, { type: 'TEST_ACTION' })).toEqual(initialState);
})

it('Should store response and return appropriate state when undefined is passed as default state', () => {
  const expected = {
    popularMovies: popularMoviesExample
  }
  expect(reducer(undefined, action)).toEqual(expected);
})

it('Should store response and return appropriate state when default state is passed', () => {
  const expected = {
    popularMovies: popularMoviesExample
  }
  const initState = {
    popularMovies: {
      ...popularMoviesExample,
      page: 2,
      movies: [fakeMovie({ id: 1234 })]
    }
  }
  expect(reducer(initState, action)).toEqual(expected);
})