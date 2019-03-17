// @flow
import type { Movie } from '../types/Movie';

export const fakeMovie = ({ id, title, original_language, genre_ids, overview, poster, release_date }: Movie = {}): Movie => ({
  id: id || 123,
  title: title || 'Movie title',
  original_language: original_language || 'en',
  genre_ids: genre_ids || ['123'],
  overview: overview || 'Test test',
  poster: poster || 'http://test.com',
  release_date: release_date || '12/12/2019',
});
