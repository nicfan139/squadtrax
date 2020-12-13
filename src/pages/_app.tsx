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
  console.log('Current route:', route);
  console.log('.env variables:', process.env);
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