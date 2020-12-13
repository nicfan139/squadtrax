import React, { FC, useState } from 'react';
import Head from 'next/head';
import { Row, Col } from 'antd';
import { PageTitle, SidePanel } from 'components';
import { actionsList, IActionDTO } from 'mock-data';
import { StyledActionCard, StyledActionIcon } from 'pages-styles';

const Actions: FC = () => {
  const [slider, toggleSlider] = useState<boolean>(false);
  const [currentAction, setCurrentAction] = useState<IActionDTO>();

  const openSlider = (action: IActionDTO) => {
    setCurrentAction(action);
    toggleSlider(true);
  };

  const closeSlider = () => {
    toggleSlider(false);
    setCurrentAction(null);
  };

  return (
    <>
      <Head>
        <title>Actions centre | Squadtrax</title>
      </Head>
      <div>
        <PageTitle>Actions centre</PageTitle>
        <Row>
          {actionsList.map((action: IActionDTO, index: number) => {
            return (
              <Col key={index} md={8}>
                <StyledActionCard
                  title={action.title}
                  onClick={() => openSlider(action)}
                >
                  <StyledActionIcon icon={action.icon} />
                </StyledActionCard>
              </Col>
            );
          })}
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
  );
};

export default Actions;
