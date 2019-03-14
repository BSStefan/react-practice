// @flow
import * as React from 'react';
import { Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import type { ContextRouter } from 'react-router-dom';
import Navigation from '../navigation/Navigation';

type IProps = {
  children: React.Node
}

type Props = IProps & ContextRouter;

class DefaultLayout extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Container>
          {this.props.children}
        </Container>
      </React.Fragment>
    )
  }
}

export default withRouter(DefaultLayout);