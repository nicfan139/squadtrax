import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { PageTitle, SectionCard, SidePanel } from 'components';
import { Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { actionsList, IActionDTO } from './actions';

const StyledActionCard = styled(SectionCard)`
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 5px 5px rgba(0,0,0,0.75);
  }
`;

const StyledActionIcon = styled(FontAwesomeIcon)`
  && {
    font-size: 36px;
  }
`;

const Actions:FC = () => {
  const [slider, toggleSlider] = useState<boolean>(false);
  const [currentAction, setCurrentAction] = useState<IActionDTO>();

  const openSlider = (action: IActionDTO) => {
    setCurrentAction(action);
    toggleSlider(true);
  };

  const closeSlider = () => {
    toggleSlider(false);
    setCurrentAction(null);
  }

  return (
    <>
      <Head>
        <title>Actions centre | Squadtrax</title>
      </Head>
      <div>
        <PageTitle>Actions centre</PageTitle>
        <Row>
          {actionsList.map((action, index) => {
              return (
                <Col key={index} md={8}>
                  <StyledActionCard title={action.title} onClick={() => openSlider(action)}>
                    <StyledActionIcon icon={action.icon} />
                  </StyledActionCard>
                </Col>
              )
            }
          )}
        </Row>

        <SidePanel
          title={currentAction?.title}
          onClose={closeSlider}
          visible={slider}
          width={600}
        >
          <p>{currentAction?.description}</p>
        </SidePanel>
      </div>
    </>
  )
}

export default Actions;