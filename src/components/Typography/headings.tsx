import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface IHeadingProps {
  children?: ReactNode;
  className?: string;
}

const StyledMainTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin: 0 0 24px 0;
  padding: 0 0 12px 0;
  border-bottom: 1px solid lightgrey;
`;

export const PageTitle:FC<IHeadingProps> = ({ className, children }) => (
  <StyledMainTitle className={className}>
    {children}
  </StyledMainTitle>
);

const StyledSectionTitle = styled.h2`
  font-size: 24px;
`;

export const SectionTitle:FC<IHeadingProps> = ({ className, children }) => (
  <StyledSectionTitle className={className}>
    {children}
  </StyledSectionTitle>
);

const StyledTitleSecondary = styled.h3`
  font-size: 20px;
`;

export const TitleSecondary:FC<IHeadingProps> = ({ className, children }) => (
  <StyledTitleSecondary className={className}>
    {children}
  </StyledTitleSecondary>
);
