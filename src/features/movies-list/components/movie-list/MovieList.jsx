// @flow
import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieListItem from '../movie-list-item/MovieListItem';
import MovieModal from '../movie-modal/MovieModal';

import type { MovieListResponse } from '../../store/types';

type Props = {
  movieList: MovieListResponse,
}

const MovieList = (props: Props) => {
  const { movieList } = props;
  return (
    <Row>
      {movieList.movies.map(movie => (
        <Col lg={3} sm={6} xs={12} key={movie.id}>
          <MovieModal render={(toggleModal) => <MovieListItem movie={movie} toggleModal={toggleModal} />} />
        </Col>
      ))}
    </Row>
  )
};

export default MovieList;