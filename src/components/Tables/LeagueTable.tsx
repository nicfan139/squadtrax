import React, { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { TitleSecondary } from 'components';
import { Table } from 'antd';

interface LeagueTableRowDTO {
  team: string;
  gamesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  goalDiff: number;
  points: number;
}

const columns = [
  {
    title: 'Position',
    dataIndex: 'position',
    key: 'position',
  },
  {
    title: 'Team',
    dataIndex: 'team',
    key: 'team',
  },
  {
    title: 'Games played',
    dataIndex: 'gamesPlayed',
    key: 'gamesPlayed',
  },
  // {
  //   title: 'Wins',
  //   dataIndex: 'wins',
  //   key: 'wins',
  // },
  // {
  //   title: 'Draws',
  //   dataIndex: 'draws',
  //   key: 'draws',
  // },
  // {
  //   title: 'Losses',
  //   dataIndex: 'losses',
  //   key: 'losses',
  // },
  {
    title: 'Goal difference',
    dataIndex: 'goalDiff',
    key: 'goalDiff',
    // @ts-ignore
    render: (text: any, record: LeagueTableRowDTO) => (
      <>
        {record.goalDiff > 0 && '+'}
        {record.goalDiff}
      </>
    )
  },
  {
    title: 'Points',
    dataIndex: 'points',
    key: 'points',
  },
];

const data = [
  {
    key: 1,
    position: 1,
    team: '7up',
    gamesPlayed: 6,
    wins: 5,
    draws: 0,
    losses: 1,
    goalDiff: 8,
    points: 15,
  },
];

const StyledLeagueTableContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ILeagueTableProps {
  title?: string;
}

const LeagueTable:FC<ILeagueTableProps> = ({ title }) => {
  return (
    <StyledLeagueTableContainer>
      <TitleSecondary>
        {title}
      </TitleSecondary>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      <Link href="#">
        <a>View full table</a>
      </Link>
    </StyledLeagueTableContainer>
  )
}

export default LeagueTable;