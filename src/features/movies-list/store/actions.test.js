import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  formatPopularMovieList,
  fetchPopularMovieListSuccess,
  fetchPopularMovieListFailure,
  fetchPopularMovieListRequest,
  fetchPopularMovieList,
  searchMovies,
} from './actions';
import { fakeMovie } from '../../../utils/faker';
import { MOVIE_LIST_ACTIONS } from './types';

// mock axios instance
var mock = new MockAdapter(axios);

// mock store
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({});

const defaultSentData = {
  page: 1,
  total_results: 100,
  total_pages: 2,
  results: [
    { ...fakeMovie(), poster_path: 'http://test.com' },
    { ...fakeMovie({ id: '123' }), poster_path: 'http://test.com' }
  ]
}

describe('formatPopularMovieList()', () => {

  const defaultExpectedData = {
    page: 1,
    total_results: 100,
    total_pages: 2,
    movies: [fakeMovie(), fakeMovie({ id: '123' })],
  }

  it('should return movie list properly formatted', () => {
    expect(formatPopularMovieList({ ...defaultSentData, test: '123' }))
      .toEqual(defaultExpectedData)
  })

  it('should return movie list properly formatted', () => {
    expect(formatPopularMovieList({ ...defaultSentData, results: undefined }))
      .toEqual({ ...defaultExpectedData, movies: [] })
  })

  // it('should return movie list properly formatted', () => {
  //   expect(formatPopularMovieList({ ...defaultSentData, results: '123' })).toEqual({ ...defaultExpectedData, movies: [] })
  // })
})

describe('action creators', () => {
  it('should return appropriate object for fetching movie success action', () => {
    const movieList = {
      page: 1,
      total_results: 100,
      total_pages: 2,
      movies: [fakeMovie()],
    }
    expect(fetchPopularMovieListSuccess(movieList))
      .toEqual({ type: MOVIE_LIST_ACTIONS.FETCH_POPULAR_MOVIES_SUCCESS, payload: movieList })
  })

  it('should return appropriate object for fetching movie failire action', () => {
    expect(fetchPopularMovieListFailure('error'))
      .toEqual({ type: MOVIE_LIST_ACTIONS.FETCH_POPULAR_MOVIES_FAILURE, payload: 'error' })
  })

  it('should return appropriate object for fetching request movie action', () => {
    expect(fetchPopularMovieListRequest())
      .toEqual({ type: MOVIE_LIST_ACTIONS.FETCH_POPULAR_MOVIES_REQUEST })
  })
});

describe('fetchPopularMovieList()', () => {

  it('should call dispatch success action with appropriate data', () => {
    mock.onGet('/movie/popular').reply(200, defaultSentData);
    store.dispatch(fetchPopularMovieList()).then(() => {
      expect(store.getActions()[0]).toEqual(fetchPopularMovieListRequest());
      expect(store.getActions()[1]).toEqual(fetchPopularMovieListSuccess(formatPopularMovieList(defaultSentData)))
    });
  });

  it('should call dispatch failure action with appropriate data', () => {
    mock.onGet('/movie/popular').reply(400, { error: 'Test' });
    store.dispatch(fetchPopularMovieList()).catch(() => {
      expect(store.getActions()[0]).toEqual(fetchPopularMovieListRequest());
      expect(store.getActions()[1]).toEqual(fetchPopularMovieListFailure({ error: 'Test' }))
    });
  });

})

describe('searchMovies()', () => {

  it('should call dispatch success action with appropriate data', () => {
    mock.onGet('/search/movie', { query: 'test' }).reply(200, defaultSentData);
    store.dispatch(searchMovies({ query: 'test' })).then(() => {
      expect(store.getActions()[0]).toEqual(fetchPopularMovieListRequest());
      expect(store.getActions()[1]).toEqual(fetchPopularMovieListSuccess(formatPopularMovieList(defaultSentData)))
    });
  });

  it('should call dispatch failure action with appropriate data', () => {
    mock.onGet('/search/movie', { query: 'test' }).reply(400, { error: 'Test' });
    store.dispatch(searchMovies({ query: 'test' })).catch(() => {
      expect(store.getActions()[0]).toEqual(fetchPopularMovieListRequest());
      expect(store.getActions()[1]).toEqual(fetchPopularMovieListFailure({ error: 'Test' }))
    });
  });

})

