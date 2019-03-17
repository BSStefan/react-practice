// @flow
import * as React from 'react';
import LoaderComponent from 'react-loader-spinner';
import styled from 'styled-components';
import { brand } from '../../styles/colors';

const Loader = (props: {}) => (
  <StyledLoader>
    <LoaderComponent
      type="ThreeDots"
      color={brand}
      height="100"
      width="100"
    />
  </StyledLoader>
)

const StyledLoader = styled.div`
  height: 30vh;
  padding-top: 20%;
  text-align: center;
`

export default Loader;