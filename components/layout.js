import React, { Fragment } from 'react';
import Head from 'next/head';
import Nav from './nav';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <Fragment>
    <Head>
      <title>{props.title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div style={layoutStyle}>
      <Nav />
      {props.children}
    </div>
  </Fragment>
);

export default Layout;
