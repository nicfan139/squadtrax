import React, { FC, useState } from 'react';
import { Radio, Space, Button, Modal, notification } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import { IFormProps } from './types';
import { SidePanel } from '../SidePanel';
import { getColorCode } from 'utils';
import { StyledDescription, StyledRadio } from './Forms.styled';

const GameSwapForm: FC<IFormProps> = ({
  title,
  description,
  onClose,
}) => {
  const [selectedMatch, setSelectedMatch] = useState<number>(1);
  const [showConfirmation, toggleConfirmation] = useState<boolean>(false);

  const onMatchSelect = (e: any) => {
    setSelectedMatch(Number(e.target.value));
  };

  const onSubmit = () => {
    notification.open({
      message: 'Request successfully sent!',
      description:
        'You will be notified in your inbox when the other team responds.',
      icon: <CheckCircleFilled style={{ color: getColorCode('GREEN') }} />,
    });
    onClose();
  };

  return (
    <SidePanel
      title={title}
      onClose={onClose}
      visible
      width={600}
      footerButtons={(
        <Button type="primary" onClick={() => toggleConfirmation(true)}>
          Send request
        </Button>
      )}
    >
      <StyledDescription>{description}</StyledDescription>

      <Space direction="vertical">
        <Radio.Group onChange={onMatchSelect} value={selectedMatch}>
          <StyledRadio value={1}>10/22/2020 - vs. Team 2</StyledRadio>
          <StyledRadio value={2}>10/28/2020 - vs. Team 3</StyledRadio>
          <StyledRadio value={3}>01/13/2021 - vs. Team 4</StyledRadio>
          <StyledRadio value={4}>02/07/2021 - vs. Team 5</StyledRadio>
        </Radio.Group>
      </Space>

      <Modal
        visible={showConfirmation}
        onCancel={() => toggleConfirmation(false)}
        onOk={onSubmit}
        okText="Confirm"
        title="Send game swap request?"
      >
        <p>Don't worry, no information will actually be sent anywhere. This is just a gimmick :)</p>
      </Modal>
    </SidePanel>
  )
};

export default GameSwapForm;