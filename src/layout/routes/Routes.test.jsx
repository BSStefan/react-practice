// @flow
import * as React from 'react';
import { shallow } from 'enzyme';
import Routes from './Routes';

it('Render Routes component successfully', () => {
  const wrapper = shallow(<Routes />);

  expect(wrapper.exists()).toBe(true);
})