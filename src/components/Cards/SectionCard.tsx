import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

export interface ISectionCardProps {
  title?: string | ReactNode;
  className?: string;
  onClick?: () => void;
}

const StyledSectionCard = styled.div`
  margin: 12px 12px 36px 0;
  padding: 24px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 5px 5px rgba(0,0,0,0.3);
`;

const StyledTitle = styled.h3`
  font-size: 20px;
`;

const SectionCard:FC<ISectionCardProps> = ({
  title,
  className,
  children,
  onClick,
}) => {
  return (
    <StyledSectionCard
      className={className}
      onClick={onClick}
    >
      {title && <StyledTitle>{title}</StyledTitle>}
      {children}
    </StyledSectionCard>
  )
};

export default SectionCard;