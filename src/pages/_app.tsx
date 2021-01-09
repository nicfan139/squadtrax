import React, { FC } from 'react';
import { useRouter } from 'next/router';
import 'antd/dist/antd.css';
import { Layout, Content, Sidebar } from 'components';

interface IAppProps {
  Component: Function;
  pageProps: Object;
}

const App:FC<IAppProps> = ({ Component, pageProps }) => {
  const route = useRouter();
  if (process.env.NODE_ENV === 'development') {
    console.log('Current route:', route);
  };
  return (
    <Layout>
      <Sidebar />
      <Content>
        <Component {...pageProps} />
      </Content>
    </Layout>
  )
}

export default App;