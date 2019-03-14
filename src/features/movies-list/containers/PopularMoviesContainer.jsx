// @flow
import * as React from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from '../../../components/page/Page';
import { fetchPopularMovieList, searchMovies } from '../store/actions';
import MovieList from '../components/movie-list/MovieList';
import { isLoading } from '../../../store/loader/selector';
import { MOVIE_LIST_ACTIONS } from '../store/types';
import Loader from '../../../components/loader/Loader';
import SearchForm from '../components/search-form/SearchForm';

import type { State } from '../../../store/types';
import type { MovieListResponse, QuerySearch } from '../store/types';


type Props = {
  popularMovies: MovieListResponse,
  isLoading: boolean,
  fetchPopularMovieList: () => void,
  searchMovies: (query: QuerySearch) => void
}

class PopularMoviesContainer extends React.Component<Props> {

  componentDidMount() {
    this.props.fetchPopularMovieList();
  }

  render() {
    const { popularMovies, isLoading } = this.props;
    return (
      <Page title="Popular Movies">
        <SearchForm handleSearch={this.props.searchMovies} resetSearch={this.props.fetchPopularMovieList} />
        {isLoading ? <Loader /> : <MovieList movieList={popularMovies} />}
      </Page>
    )
  }
}

const mapStateToProps = (state: State): any => ({
  popularMovies: state.moviesList.popularMovies,
  isLoading: isLoading(state.loaders, [MOVIE_LIST_ACTIONS.FETCH_POPULAR_MOVIES_REQUEST])
})

const mapDispatchToProps = (dipatch: Dispatch<any>) => (
  bindActionCreators({
    fetchPopularMovieList,
    searchMovies
  }, dipatch)
)

export default connect<Props, null, _, _, _, _>(
  mapStateToProps,
  mapDispatchToProps,
)(PopularMoviesContainer);