// @flow
import * as React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

it('Render Navigation component successfully', () => {
  const wrapper = shallow(<Navigation />);

  expect(wrapper.exists()).toBe(true);
})