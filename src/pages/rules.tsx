import React, { FC } from 'react';
import Head from 'next/head';
import { Collapse } from 'antd';
import { PageTitle } from 'components';

const { Panel } = Collapse;

const Rules:FC = () => {
  return (
    <>
      <Head>
        <title>Rules and regulations | Squadtrax</title>
      </Head>
      <div>
        <PageTitle>Rules and regulations</PageTitle>
        <div>
        <Collapse>
          <Panel header="Registration" key="1">
            <p>Reprehenderit aliquip nulla non ipsum dolore aute sit duis consequat duis do non magna veniam. Aute non nisi culpa ullamco quis nulla velit aliqua duis ex elit culpa. Tempor aliquip aliqua velit incididunt ex mollit consequat enim elit officia. Excepteur nostrud ut deserunt nostrud voluptate eu.</p>
          </Panel>
          <Panel header="Attendance" key="2">
            <p>Irure exercitation ex ad et elit aute cillum laborum enim cupidatat sit Lorem eiusmod. Fugiat proident esse dolore ex amet eu. Sunt exercitation sint tempor ex. Pariatur et eu eu nostrud sunt Lorem dolore. Eu anim incididunt voluptate ullamco dolor commodo culpa eu ea.</p>
          </Panel>
          <Panel header="Penalties and Suspensions" key="3">
            <p>Velit occaecat esse eu ex in fugiat non. Esse reprehenderit proident non magna qui duis deserunt culpa sint sit minim. Pariatur magna sint ex non dolore nulla. Veniam pariatur occaecat fugiat sint ut id et in ex nisi. Elit consectetur consequat tempor culpa ad elit aliqua.</p>
          </Panel>
        </Collapse>
        </div>
      </div>
    </>
  )
}

export default Rules;