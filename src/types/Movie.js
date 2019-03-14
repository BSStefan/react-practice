// @flow

export type Movie = {
  id: number,
  title: string,
  original_language: string,
  genre_ids: number[],
  overview: string,
  poster: ?string,
  release_date: Date | string
}