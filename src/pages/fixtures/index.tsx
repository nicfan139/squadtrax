import React, { FC } from 'react';
import Head from 'next/head';
import { PageTitle } from 'components';
import { Calendar } from 'antd';

const Fixtures:FC = () => {
  return (
    <>
      <Head>
        <title>Fixtures | Squadtrax</title>
      </Head>
      <div>
        <PageTitle>Fixture list</PageTitle>

        <Calendar />
      </div>
    </>
  )
}

export default Fixtures;