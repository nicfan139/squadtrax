import React, { FC } from 'react';
import styled from 'styled-components';
import { getColorCode } from 'utils';

interface IButtonProps {
  className?: string;
  onClick: () => void;
  disabled?: boolean;
}

const StyledButton = styled.button`
  padding: 12px 16px;
  border-style: unset;
  border-radius: 12px;
  color: whitesmoke;
  background-color: ${getColorCode('blue')};
  transition: all 0.3s;

  &:hover, &:focus {
    cursor: pointer;
    outline: none;
    opacity: 0.75;
  }
`;

const Button:FC<IButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  )
}

export default Button;