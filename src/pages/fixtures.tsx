import React, { FC } from "react";
import Head from "next/head";
import { Calendar } from "antd";
import { PageTitle } from "components";

const Fixtures: FC = () => {
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
  );
};

export default Fixtures;
