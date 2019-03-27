import * as React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';
import { FormControl, Button, InputGroup, Form } from 'react-bootstrap';

describe('SearchForm', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      handleSearch: jest.fn(),
      resetSearch: jest.fn()
    }
  })

  it('should render component without craching', () => {
    const wrapper = shallow(<SearchForm {...defaultProps} />);

    expect(wrapper.exists()).toBe(true);
  })

  it('should find one Button when query is empty string', () => {
    const wrapper = shallow(<SearchForm {...defaultProps} />);

    const buttons = wrapper.find(Button)

    expect(buttons.length).toBe(1);
    expect(buttons.first().prop('id')).toBe('confirm-search')
  })

  it('should find two Button when query is empty string', () => {
    const wrapper = shallow(<SearchForm {...defaultProps} />);
    wrapper.setState({ query: 'test' })

    const buttons = wrapper.find(Button)

    expect(buttons.length).toBe(2);
  })

  it('should set state when input is changed', () => {
    const wrapper = shallow(<SearchForm {...defaultProps} />);

    const input = wrapper.find(FormControl);
    input.simulate('change', { target: { value: 'test' } });

    expect(wrapper.state('query')).toBe('test');
  })

  it('should call handleSearch with appropriate query when button search is clicked', () => {
    const wrapper = shallow(<SearchForm {...defaultProps} />);
    wrapper.setState({ query: 'test' })

    const button = wrapper.find('#confirm-search')
    button.simulate('click', { preventDefault: () => { } });

    expect(defaultProps.handleSearch).toHaveBeenCalledWith({ query: 'test' });
  })

  it('should call resetSearch when button search is clicked and state is empty', () => {
    const wrapper = shallow(<SearchForm {...defaultProps} />);

    const buttons = wrapper.find('#confirm-search')
    buttons.at(0).simulate('click', { preventDefault: () => { } });

    expect(defaultProps.resetSearch).toHaveBeenCalled();
  })

  it('should call resetSearch and state should be equeal to empty string when X button is clicked', () => {
    const wrapper = shallow(<SearchForm {...defaultProps} />);
    wrapper.setState({ query: 'test' })

    const buttons = wrapper.find(Button)
    buttons.at(0).simulate('click');

    expect(defaultProps.resetSearch).toHaveBeenCalled();
    expect(wrapper.state('query')).toBe('');
  })
})


