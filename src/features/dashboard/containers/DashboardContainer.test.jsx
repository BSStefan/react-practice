// @flow
import * as React from 'react';
import { shallow } from 'enzyme';
import DashboardContainer from './DashboardContainer';
import { Jumbotron } from 'react-bootstrap';
import renderer from 'react-test-renderer';

it('render component successfully', () => {
  const wrapper = shallow(<DashboardContainer />);

  expect(wrapper.exists()).toBe(true);
})

it('should find h1 tag with appropriate text', () => {
  const wrapper = shallow(<DashboardContainer />);

  const h1Tags = wrapper.find('h1')

  expect(h1Tags.text()).toBe("Movie DB App");
})

it('should find 2 p tags', () => {
  const wrapper = shallow(<DashboardContainer />);

  const pTags = wrapper.find('p')

  expect(pTags.length).toBe(2);
})

it('should find first p tag with appropriate text', () => {
  const wrapper = shallow(<DashboardContainer />);

  const h1First = wrapper.find('p').first()

  expect(h1First.text()).toBe("This is an amaizing movie database application.");
})

it('should find second p tag with appropriate text', () => {
  const wrapper = shallow(<DashboardContainer />);

  const h1Second = wrapper.find('p').first()

  expect(h1Second.text()).toBe("This is an amaizing movie database application.");
})

it('should match snapshot', () => {
  const tree = renderer
    .create(<DashboardContainer />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})