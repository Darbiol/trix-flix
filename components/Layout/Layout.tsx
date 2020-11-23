import React, { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Welcome to TrxFlx' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </Head>
    {children}
  </div>
)

export default Layout
