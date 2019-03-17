import { fakeMovie } from './faker';

const defaultFakeMovie = {
  id: 123,
  title: 'Movie title',
  original_language: 'en',
  genre_ids: ['123'],
  overview: 'Test test',
  poster: 'http://test.com',
  release_date: '12/12/2019',
}

it('should return default fake movie', () => {
  expect(fakeMovie()).toEqual(defaultFakeMovie)
})

it('should return movie with id which is passed', () => {
  expect(fakeMovie({ id: 1234 })).toEqual({ ...defaultFakeMovie, id: 1234 })
})

it('should return movie with id which is passed', () => {
  expect(fakeMovie({ id: 1234, genre_ids: [1, 2, 3] })).toEqual({ ...defaultFakeMovie, id: 1234, genre_ids: [1, 2, 3] })
})