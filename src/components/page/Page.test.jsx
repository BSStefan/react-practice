import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Page from './Page';

const defaultProps = {
  title: 'Test title',
  children: <div>Test</div>
}

it('Should match snapshout', () => {
  const tree = renderer.create(<Page {...defaultProps} />).toJSON();
  expect(tree).toMatchSnapshot();
})