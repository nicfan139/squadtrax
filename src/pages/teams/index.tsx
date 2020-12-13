import React, { FC, useState } from 'react';
import Head from 'next/head';
import {
  PageTitle,
  SectionCard,
  Text,
  Button,
  SidePanel
} from 'components';
import { Table } from 'antd';
import { StyledSectionRow } from './Teams.styled';

interface TeamTableColumnDTO {
  name: string;
  games: number;
  goals: number;
  assists: number;
  yellows: number;
  reds: number;
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a:TeamTableColumnDTO, b:TeamTableColumnDTO) => a.name.length - b.name.length,
  },
  {
    title: 'Games played',
    dataIndex: 'games',
    sorter: (a:TeamTableColumnDTO, b:TeamTableColumnDTO) => a.games - b.games,
  },
  {
    title: 'Goals',
    dataIndex: 'goals',
    sorter: (a:TeamTableColumnDTO, b:TeamTableColumnDTO) => a.goals - b.goals,
  },
  {
    title: 'Assists',
    dataIndex: 'assists',
    sorter: (a:TeamTableColumnDTO, b:TeamTableColumnDTO) => a.assists - b.assists,
  },
  {
    title: 'Yellows',
    dataIndex: 'yellows',
    sorter: (a:TeamTableColumnDTO, b:TeamTableColumnDTO) => a.yellows - b.yellows,
  },
  {
    title: 'Reds',
    dataIndex: 'reds',
    sorter: (a:TeamTableColumnDTO, b:TeamTableColumnDTO) => a.reds - b.reds,
  },
];

const teamOne = [
  {
    key: '1',
    name: 'Nic Fan',
    games: 12,
    goals: 10,
    assists: 4,
    yellows: 0,
    reds: 0,
  },
  {
    key: '2',
    name: 'Sam Spilman',
    games: 10,
    goals: 5,
    assists: 8,
    yellows: 0,
    reds: 0,
  },
  {
    key: '3',
    name: 'Joe Minto',
    games: 11,
    goals: 7,
    assists: 3,
    yellows: 0,
    reds: 0,
  },
  {
    key: '4',
    name: 'Basil Doane',
    games: 12,
    goals: 4,
    assists: 6,
    yellows: 0,
    reds: 0,
  },
  {
    key: '5',
    name: 'Rogelio Alberts',
    games: 12,
    goals: 4,
    assists: 6,
    yellows: 0,
    reds: 0,
  },
  {
    key: '6',
    name: 'Willis Theobald',
    games: 12,
    goals: 4,
    assists: 6,
    yellows: 0,
    reds: 0,
  },
  {
    key: '7',
    name: 'Ervin Barto',
    games: 9,
    goals: 1,
    assists: 2,
    yellows: 2,
    reds: 1,
  },
];

const Teams:FC = () => {
  const [newTeamForm, toggleNewTeamForm] = useState(false);
  return (
    <>
      <Head>
        <title>My teams | Squadtrax</title>
      </Head>
      <div>
        <PageTitle>My teams</PageTitle>
        <Button onClick={() => toggleNewTeamForm(true)}>
          Add new team
        </Button>
        <StyledSectionRow>
          <SectionCard title='7up (Fall 7v7)'>
            <Table
              columns={columns}
              dataSource={teamOne}
              pagination={false}
            />
          </SectionCard>

          <SectionCard title='Form'>
            <Text>Last 5 games: WWDLW</Text>
            <Text>Upcoming fixtures</Text>
            <ul>
              <li>vs. Team 1</li>
              <li>vs. Team 2</li>
              <li>vs. Team 3</li>
              <li>vs. Team 4</li>
              <li>vs. Team 5</li>
            </ul>
          </SectionCard>
        </StyledSectionRow>
        <StyledSectionRow>
          <SectionCard title='League Table (Fall 7v7)'>
            <Table />
          </SectionCard>
        </StyledSectionRow>
      </div>
      <SidePanel
        title={'Register for new team'}
        onClose={() => toggleNewTeamForm(false)}
        visible={newTeamForm}
        width={600}
      >
        <p>Quis dolore officia ullamco nulla elit aliquip laborum dolor. Incididunt est nostrud quis fugiat deserunt do esse incididunt irure esse adipisicing consectetur occaecat. Qui ut consectetur excepteur do sint mollit occaecat qui excepteur. Officia ut cupidatat eiusmod pariatur. Lorem qui in pariatur dolore fugiat occaecat nisi proident duis ad aute.</p>
      </SidePanel>
    </>
  )
}

export default Teams;