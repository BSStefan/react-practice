import * as React from 'react';
import { PopularMoviesContainer, mapStateToProps, mapDispatchToProps } from './PopularMoviesContainer';
import { shallow } from 'enzyme';
import Loader from '../../../components/loader/Loader';
import MovieList from '../components/movie-list/MovieList';
import { initialState } from '../../../store/reducer';
import { fetchPopularMovieList, searchMovies } from '../store/actions';


describe('PopularMoviesContainer', () => {

  let defaultProps

  beforeEach(() => {
    defaultProps = {
      popularMovies: {
        page: 1,
        total_results: 10,
        total_pages: 2,
        movies: []
      },
      isLoading: false,
      fetchPopularMovieList: jest.fn(),
      searchMovies: jest.fn(),
      dispatch: jest.fn()
      // Example: moment.tz.guess = jest.fn(() => 'Europe/Belgrade') 
    }
  })

  it('should render component without craching and call fetchPopularMovieList', () => {
    const wrapper = shallow(<PopularMoviesContainer {...defaultProps} />)

    expect(wrapper.exists()).toBe(true);
    expect(defaultProps.fetchPopularMovieList).toHaveBeenCalled();
  })

  it('should render loading component when isLoading is true and not render movie list', () => {
    const wrapper = shallow(<PopularMoviesContainer {...defaultProps} isLoading={true} />)

    const loader = wrapper.find(Loader);
    const loaderWithTextSelector = wrapper.find('Loader');
    const movieList = wrapper.find(MovieList);
    // console.log(wrapper.debug());

    expect(loader.exists()).toBe(true);
    expect(loader.length).toBe(1);
    expect(loaderWithTextSelector.length).toBe(1);
    expect(movieList.exists()).toBe(false);
    expect(movieList.length).toBe(0);
  })

  it('mapStateToProps returns appropriate object', () => {
    expect(mapStateToProps(initialState)).toEqual({
      popularMovies: initialState.moviesList.popularMovies,
      isLoading: true
    })
  })

  it('mapDispatchToProps()', () => {
    expect(mapDispatchToProps(defaultProps.dispatch)).toEqual({
      fetchPopularMovieList: expect.any(Function),
      searchMovies: expect.any(Function)
    })
  })
})



// Another way which is also ok
// const defaultProps = {
//   popularMovies: {
//     page: 1,
//     total_results: 10,
//     total_pages: 2,
//     movies: []
//   },
//   isLoading: false,
//   fetchPopularMovieList: jest.fn(),
//   searchMovies: jest.fn(),
//   dispatch: jest.fn()
// }

// it('Should render component without craching', () => {
//   const wrapper = shallow(<PopularMoviesContainer {...defaultProps} />)

//   expect(wrapper.exists()).toBe(true);
//   expect(defaultProps.fetchPopularMovieList).toHaveBeenCalled();
// })

// it('Should render loading component when isLoading is true and not render movie list', () => {
//   const wrapper = shallow(<PopularMoviesContainer {...defaultProps} isLoading={true} />)

//   const loader = wrapper.find(Loader);
//   const loaderWithTextSelector = wrapper.find('Loader');
//   const movieList = wrapper.find(MovieList);
//   // console.log(wrapper.debug());

//   expect(loader.exists()).toBe(true);
//   expect(loader.length).toBe(1);
//   expect(loaderWithTextSelector.length).toBe(1);
//   expect(movieList.exists()).toBe(false);
//   expect(movieList.length).toBe(0);
// })

// it('mapStateToProps returns appropriate object', () => {
//   expect(mapStateToProps(initialState)).toEqual({
//     popularMovies: initialState.moviesList.popularMovies,
//     isLoading: true
//   })
// })

// it('mapDispatchToProps()', () => {
//   expect(mapDispatchToProps(defaultProps.dispatch)).toEqual({
//     fetchPopularMovieList: expect.any(Function),
//     searchMovies: expect.any(Function)
//   })
// })