import React, { FC } from 'react';
import styled from 'styled-components';
import { getColorCode } from 'utils';

interface ITextProps {
  className?: string;
  centered?: boolean;
  italic?: boolean;
  color?: string;
  margin?: string;
  size?: number;
}

const StyledText = styled.p<ITextProps>`
  font-size: ${({ size }) => size ? `${size}px` : '14px'};;
  margin: ${({ margin }) => margin || '0 0 12px 0'};
  text-align: ${({ centered }) => centered ? 'center' : 'left'};
  ${({ italic }) => italic && `font-style: italic`};
  ${({ color }) => color && `color: ${getColorCode(color)}`};
`;

export const Text:FC<ITextProps> = ({
  className,
  centered,
  italic,
  color,
  margin,
  size,
  children,
}) => (
  <StyledText
    className={className}
    centered={centered}
    italic={italic}
    color={color}
    margin={margin}
    size={size}
  >
    {children}
  </StyledText>
);

interface IItalicSubtextProps {
  className?: string;
}

const StyledItalicSubtext = styled.div`
  width: 100%;
  font-style: italic;
  text-align: right;
  color: grey;
`;

export const ItalicSubtext:FC<IItalicSubtextProps> = ({
  className,
  children,
}) => (
  <StyledItalicSubtext className={className}>
    {children}
  </StyledItalicSubtext>
);