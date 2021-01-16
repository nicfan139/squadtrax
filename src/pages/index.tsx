import React, { FC } from 'react';
import Head from 'next/head';
import { Row, Col } from 'antd';
import {
  faStepBackward,
  faStepForward,
  faRunning,
  faFutbol,
  faHandsHelping,
  faHandPaper,
} from '@fortawesome/free-solid-svg-icons';
import Ticker from 'react-ticker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  PageTitle,
  SectionTitle,
  Text,
  SectionCard,
  LeagueTable,
  StatCard,
} from 'components';
import { GameCard, AnnouncementsBox } from 'pages-styles';

const Home: FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Overview | Squadtrax</title>
      </Head>

      <PageTitle>Welcome to the Squadtrax dashboard!</PageTitle>

      <Ticker>{() => <Text>| IMPORTANT ANNOUNCEMENT: All leagues have been suspended due to the COVID-19 pandemic. |</Text>}</Ticker>

      <Row>
        <Col xs={12} md={6}>
          <GameCard
            title={
              <>
                Last game <FontAwesomeIcon icon={faStepBackward} />
              </>
            }
            matchup="My Team vs Team 1 (A)"
            score="WIN 2 - 0"
            location="Rutherford Field B"
            date="10/15/2020"
            time="7:00pm"
          />
        </Col>
        <Col xs={12} md={6}>
          <GameCard
            title={
              <>
                Next game <FontAwesomeIcon icon={faStepForward} />
              </>
            }
            matchup="My Team vs Team 2 (H)"
            location="Rutherford Field A"
            date="10/22/2020"
            time="8:00pm"
          />
        </Col>
        <Col xs={24} md={12}>
          <AnnouncementsBox />
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <SectionTitle>My leagues</SectionTitle>
          <SectionCard>
            <LeagueTable title="Fall 7v7" />
          </SectionCard>
        </Col>
        <Col md={12}>
          <SectionTitle>My stats</SectionTitle>
          <Row>
            <Col md={8}>
              <StatCard title="Matches" value={3} icon={faRunning} />
            </Col>
            <Col md={8}>
              <StatCard title="Goals" value={7} icon={faFutbol} />
            </Col>
            <Col md={8}>
              <StatCard title="Assists" value={3} icon={faHandsHelping} />
            </Col>
            <Col md={8}>
              <StatCard
                title="Yellow cards"
                value={2}
                valueColor="YELLOW"
                icon={faHandPaper}
                iconColor="YELLOW"
              />
            </Col>
            <Col md={8}>
              <StatCard
                title="Red cards"
                value={0}
                valueColor="RED"
                icon={faHandPaper}
                iconColor="RED"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
