import * as React from 'react';
import * as renderer from 'react-test-renderer';
import PageTitle from './PageTitle';

const defaultProps = {
  title: 'Test title',
}

it('Should match snapshout with default h1', () => {
  const tree = renderer.create(<PageTitle {...defaultProps} />).toJSON();
  expect(tree).toMatchSnapshot();
})

it('Should match snapshout when h2 is sent', () => {
  const tree = renderer.create(<PageTitle {...defaultProps} as="h2" />).toJSON();
  expect(tree).toMatchSnapshot();
})