import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SectionCard } from 'components'; 

export const StyledActionCard = styled(SectionCard)`
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.75);
  }
`;

export const StyledActionIcon = styled(FontAwesomeIcon)`
  && {
    font-size: 36px;
  }
`;