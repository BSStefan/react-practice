// @flow
import * as React from 'react';
import PageTitle from '../page-title/PageTitle';

type Props = {
  title: string,
  children?: React.Node
}

const Page = (props: Props) => {
  const { title, children } = props;
  return (
    <React.Fragment>
      <PageTitle title={title} />
      {children}
    </React.Fragment>
  )
};

export default Page;