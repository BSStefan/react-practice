// @flow
import React from 'react';
import styled from 'styled-components';
import { Jumbotron } from 'react-bootstrap';

const DashboardContainer = (props: {}) => {
  return (
    <AwesomeDashboard>
      <Jumbotron>
        <h1>Movie DB App</h1>
        <p>
          This is an amaizing movie database application.
        </p>
        <p>
          Also this app will teach you how to write unit tests.
        </p>
      </Jumbotron>
    </AwesomeDashboard>
  )
};

const AwesomeDashboard = styled.div`
  text-align: center;
  width: 100%;
  height: 100vh;
  padding: 10%;
`

export default DashboardContainer;


