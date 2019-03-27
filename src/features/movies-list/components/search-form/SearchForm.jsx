// @flow
import * as React from 'react';
import styled from 'styled-components';
import { FormControl, Button, InputGroup, Form } from 'react-bootstrap';

import type { QuerySearch } from '../../store/types';

type Props = {
  handleSearch: (query: QuerySearch) => void,
  resetSearch: () => void
}

type State = QuerySearch & {}

class SearchForm extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      query: ''
    };
    (this: any).handleChange = this.handleChange.bind(this);
    (this: any).resetSearch = this.resetSearch.bind(this);
    (this: any).handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event: SyntheticInputEvent<any>) {
    this.setState({
      query: event.target.value
    })
  }

  resetSearch() {
    this.setState({ query: '' });
    this.props.resetSearch();
  }

  handleSearch(event: SyntheticEvent<any>) {
    const { query } = this.state
    event.preventDefault();
    if (query) {
      this.props.handleSearch({ query });
    } else {
      this.props.resetSearch();
    }
  }

  render() {
    const { query } = this.state;
    return (
      <Form onSubmit={this.handleSearch}>
        <StyledInputGroupe className="mb-5 mt-5">
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
            value={query}
            onChange={this.handleChange}
          />
          <InputGroup.Append>
            {query !== '' ? <Button id="reset-search" variant="outline-secondary" onClick={this.resetSearch}>X</Button> : null}
            <Button id="confirm-search" variant="outline-secondary" onClick={this.handleSearch} type="submit">Search</Button>
          </InputGroup.Append>
        </StyledInputGroupe>
      </Form>
    )
  }
}

const StyledInputGroupe = styled(InputGroup)`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

export default SearchForm;