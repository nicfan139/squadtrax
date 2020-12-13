import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarDay, faClock } from '@fortawesome/free-solid-svg-icons';
import { SectionCard, Text } from 'components';
import rutherfordField from 'assets/rutherford_field.jpg';

interface IGameCardProps {
  title: string | ReactNode;
  matchup: string;
  score?: string;
  location: string;
  date: string;
  time: string;
}

const StyledVenueImg = styled.div<{ gradient?: boolean }>`
  height: 128px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-image: ${({ gradient }) =>
    gradient ?
      `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${rutherfordField})` :
      `url(${rutherfordField})`
  };
  background-size: cover;
  background-position: center;
`;

const StyledGameInfo = styled.div`
  margin-top: 16px;
`;

const StyledGameInfoRow = styled.div`
  display: flex;
`;

const StyledIconWrapper = styled.span`
  margin-right: 8px;
`;

export const GameCard:FC<IGameCardProps> = ({
  title,
  matchup,
  score,
  location,
  date,
  time,
}) => {
  return (
    <SectionCard title={title}>
      <Text centered>
        {matchup}
      </Text>
      <StyledVenueImg gradient={Boolean(score)}>
        {score && (
          <Text color="white" margin="0" size={24}>
            {score}
          </Text>
        )}
      </StyledVenueImg>
      <StyledGameInfo>
        <StyledGameInfoRow>
          <StyledIconWrapper>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </StyledIconWrapper>
          <Text>{location}</Text>
        </StyledGameInfoRow>
        <StyledGameInfoRow>
          <StyledIconWrapper>
            <FontAwesomeIcon icon={faCalendarDay} />
          </StyledIconWrapper>
          <Text>{date}</Text>
        </StyledGameInfoRow>
        <StyledGameInfoRow>
          <StyledIconWrapper>
            <FontAwesomeIcon icon={faClock} />
          </StyledIconWrapper>
          <Text>{time}</Text>
        </StyledGameInfoRow>
      </StyledGameInfo>
  </SectionCard>
  )
};