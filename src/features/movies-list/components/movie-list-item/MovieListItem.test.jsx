import * as React from 'react';
import { shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';
import MovieListItem from './MovieListItem';
import { fakeMovie } from '../../../../utils/faker';


const defaultProps = {
  movie: fakeMovie()
}

it('Should match snapshoot with poster', () => {
  const tree = renderer.create(<MovieListItem {...defaultProps} />).toJSON();

  expect(tree).toMatchSnapshot();
})

it('Should match snapshoot without poster', () => {
  const defaultPropsWithoutPoster = { movie: { ...defaultProps.movie, poster: undefined } };
  const tree = renderer.create(<MovieListItem {...defaultPropsWithoutPoster} />).toJSON();

  expect(tree).toMatchSnapshot();
})