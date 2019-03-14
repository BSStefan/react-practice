// @flow
import * as React from 'react';
import styled from 'styled-components';
import { brand } from '../../styles/colors';

type Props = {
  title: string,
  as: string
}

const PageTitle = (props: Props) => {
  const { title, as } = props;
  return <Header as={as}>{title}</Header>;
};

PageTitle.defaultProps = {
  as: 'h1'
};

const Header = styled.h1`
  color: ${brand};
`;

export default PageTitle;