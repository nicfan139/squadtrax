import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledSidebar = styled.div`
  width: 175px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #181f48;
`;

export const StyledLogoContainer = styled.div`
  position: absolute;
  top: 12px;
  left: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLogo = styled.img`
  height: 128px;
  width: 128px;
  padding: 4px;
  border-radius: 12px;
  background-color: whitesmoke;
`;

export const StyledLogoText = styled.label`
  margin: 8px 0;
  font-size: 20px;
  font-weight: 500;
  color: whitesmoke;
`;

export const StyledTab = styled.a<{active: boolean}>`
  width: calc(100% - 12px);
  box-sizing: border-box;
  margin-left: 12px;
  padding: 16px 0 16px 12px;
  border-radius: 12px 0 0 12px;
  font-size: 18px;
  color: whitesmoke;
  transition: all 0.3s;
  ${({ active }) => active && `
    color: black;
    background-color: whitesmoke;
    box-shadow: 0 5px 0 rgba(0,0,0,0.25);
  `};

  &:hover {
    color: black;
    ${({ active }) => !active && `background-color: lightgrey`};
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  && {
    width: 24px;
  }
`;

export const StyledLabel = styled.span`
  margin-left: 16px;
`;

export const StyledBottomLink = styled.a`
  position: absolute;
  bottom: 12px;
  width: 100%;
  text-align: center;
  color: whitesmoke;
`;