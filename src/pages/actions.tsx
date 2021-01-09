import React, { FC, useState } from 'react';
import Head from 'next/head';
import { Row, Col } from 'antd';
import { PageTitle, GameRescheduleForm, GameSwapForm, MessageCoordinatorForm } from 'components';
import { actionsList, IActionDTO, actionTypes } from 'mock-data';
import { StyledActionCard, StyledActionIcon } from 'pages-styles';

const Actions: FC = () => {
  const [currentAction, setCurrentAction] = useState<IActionDTO>();

  const openSlider = (action: IActionDTO) => {
    setCurrentAction(action);
  };

  const closeSlider = () => {
    setCurrentAction(null);
  };

  const renderForm = (actionObj: IActionDTO) => {
    const {
      title,
      description,
      action,
    } = actionObj;
    const formProps = {
      title,
      description,
      onClose: closeSlider,
    };
    switch(action) {
      case actionTypes.REQUEST_GAME_RESCHEDULE:
        return (
          <GameRescheduleForm {...formProps} />
        );
      case actionTypes.REQUEST_GAME_SWAP:
        return (
          <GameSwapForm {...formProps} />
        );
      case actionTypes.MESSAGE_COORDINATOR:
        return (
          <MessageCoordinatorForm {...formProps} />
        );
    }
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

        {currentAction && renderForm(currentAction)}
      </div>
    </>
  );
};

export default Actions;
