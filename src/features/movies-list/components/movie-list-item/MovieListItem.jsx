// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';
import { TMDB_POSTER_URL } from '../../../../utils/url';
import { shortText } from '../../../../utils/text';
import type { Movie } from '../../../../types/Movie';

type Props = {
  movie: Movie,
  toggleModal: (movieName: string, movieTitle: string) => void
}

const MovieListItem = (props: Props) => {
  const { movie, toggleModal } = props;
  const openModal = () => {
    toggleModal(movie.title, movie.overview)
  };
  return (
    <StyledCard id={movie.id}>
      {movie.poster && <Card.Img variant="top" src={`${TMDB_POSTER_URL}${movie.poster}`} />}
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{shortText(movie.overview, 100)}</Card.Text>
        <Button variant="primary" onClick={openModal}>View Movie</Button>
      </Card.Body>
    </StyledCard>
  )
};

const StyledCard = styled(Card)`
    margin-bottom: 15px;
  `

export default MovieListItem;