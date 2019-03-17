import * as React from 'react';
import { shallow } from 'enzyme';
import MovieList from './MovieList';
import { fakeMovie } from '../../../../utils/faker';
import * as renderer from 'react-test-renderer';

const defaultProps = {
  movieList: {
    page: 1,
    total_results: 10,
    total_pages: 2,
    movies: [fakeMovie()]
  },
}


it('Should render omponent without craching', () => {
  const wrapper = shallow(<MovieList {...defaultProps} />)

  expect(wrapper.exists()).toBe(true);
})

it('Should find one list item', () => {
  const wrapper = shallow(<MovieList {...defaultProps} />)

  const listItems = wrapper.find('MovieListItem')

  expect(listItems.length).toBe(1);
})

it('Should match snapshot', () => {
  const tree = renderer.create(<MovieList {...defaultProps} />).toJSON();

  expect(tree).toMatchSnapshot();
})

