import React, { FC } from 'react';
import styled from 'styled-components';
import { Statistic } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getColorCode } from 'utils';

interface IStatCardProps {
  title: string;
  value: number | string;
  unit?: string;
  precision?: number;
  icon?: any;
  valueColor?: string;
  iconColor?: string;
}

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 12px 12px 0;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 5px 5px rgba(0,0,0,0.3);
  background-color: white;
`;

const StyledStatistic = styled(Statistic)<IStatCardProps>`
  .ant-statistic-title {
    font-size: 16px;
    font-weight: bold;
  }

  .ant-statistic-content-value {
    color: ${({ valueColor }) => getColorCode(valueColor)};
    font-weight: bold;
  }
`;

const StyledIconWrapper = styled.span<{ iconColor: string }>`
  font-size: 48px;
  color: ${({ iconColor }) => getColorCode(iconColor)};
`;

const StatCard:FC<IStatCardProps> = ({
  title,
  value,
  unit,
  precision = 0,
  icon,
  valueColor,
  iconColor,
}) => {
  return (
    <StyledCard>
      <StyledStatistic
        title={title}
        value={value}
        precision={precision}
        valueColor={valueColor}
        suffix={unit}
      />
      {icon && (
        <StyledIconWrapper iconColor={iconColor}>
          <FontAwesomeIcon icon={icon} />
        </StyledIconWrapper>
      )}
    </StyledCard>
  )
}

export default StatCard;