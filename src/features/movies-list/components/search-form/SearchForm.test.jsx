import * as React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';
import { FormControl, Button, InputGroup, Form } from 'react-bootstrap';

const defaultProps = {
  handleSearch: jest.fn(),
  resetSearch: jest.fn()
}

it('Should render component without craching', () => {
  const wrapper = shallow(<SearchForm {...defaultProps} />);

  expect(wrapper.exists()).toBe(true);
})

it('Should find one Button when query is empty string', () => {
  const wrapper = shallow(<SearchForm {...defaultProps} />);

  const buttons = wrapper.find(Button)

  expect(buttons.length).toBe(1);
})

it('Should find two Button when query is empty string', () => {
  const wrapper = shallow(<SearchForm {...defaultProps} />);
  wrapper.setState({ query: 'test' })

  const buttons = wrapper.find(Button)

  expect(buttons.length).toBe(2);
})

it('Should set state when input is changed', () => {
  const wrapper = shallow(<SearchForm {...defaultProps} />);

  const input = wrapper.find(FormControl);
  input.simulate('change', { target: { value: 'test' } });

  expect(wrapper.state('query')).toBe('test');
})

it('Should call handleSearch with appropriate query when button search is clicked', () => {
  const wrapper = shallow(<SearchForm {...defaultProps} />);
  wrapper.setState({ query: 'test' })

  const buttons = wrapper.find(Button)
  buttons.at(1).simulate('click', { preventDefault: () => { } });

  expect(defaultProps.handleSearch).toHaveBeenCalledWith({ query: 'test' });
})

it('Should call resetSearch and state should be equeal to empty string when X button is clicked', () => {
  const wrapper = shallow(<SearchForm {...defaultProps} />);
  wrapper.setState({ query: 'test' })

  const buttons = wrapper.find(Button)
  buttons.at(0).simulate('click');

  expect(defaultProps.resetSearch).toHaveBeenCalled();
  expect(wrapper.state('query')).toBe('');
})