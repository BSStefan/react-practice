// @flow
import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieListItem from '../movie-list-item/MovieListItem';

import type { MovieListResponse } from '../../store/types'

type Props = {
  movieList: MovieListResponse,
}

const MovieList = (props: Props) => {
  const { movieList } = props;
  return (
    <Row>
      {movieList.movies.map(movie => (
        <Col lg={3} sm={6} xs={12} key={movie.id}>
          <MovieListItem movie={movie} />
        </Col>
      ))}
    </Row>
  )
};

export default MovieList;