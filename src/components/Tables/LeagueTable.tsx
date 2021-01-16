import React, { FC } from 'react';
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
    team: 'My Team',
    gamesPlayed: 3,
    wins: 3,
    draws: 0,
    losses: 0,
    goalDiff: 8,
    points: 9,
  },
  {
    key: 2,
    position: 2,
    team: 'Team 1',
    gamesPlayed: 3,
    wins: 3,
    draws: 0,
    losses: 0,
    goalDiff: 6,
    points: 9,
  },
  {
    key: 3,
    position: 3,
    team: 'Team 2',
    gamesPlayed: 3,
    wins: 2,
    draws: 0,
    losses: 1,
    goalDiff: 7,
    points: 6,
  },
  {
    key: 4,
    position: 4,
    team: 'Team 3',
    gamesPlayed: 3,
    wins: 2,
    draws: 0,
    losses: 1,
    goalDiff: 2,
    points: 6,
  },
  {
    key: 5,
    position: 5,
    team: 'Team 4',
    gamesPlayed: 2,
    wins: 1,
    draws: 1,
    losses: 0,
    goalDiff: 4,
    points: 4,
  },
  {
    key: 6,
    position: 6,
    team: 'Team 5',
    gamesPlayed: 2,
    wins: 0,
    draws: 1,
    losses: 1,
    goalDiff: -3,
    points: 1,
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
    </StyledLeagueTableContainer>
  )
}

export default LeagueTable;