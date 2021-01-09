import React, { FC, useState, ChangeEvent } from 'react';
import { Input, Button, Modal, notification } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import { IFormProps } from './types';
import { SidePanel } from '../SidePanel';
import { getColorCode } from 'utils';
import { StyledDescription } from './Forms.styled';

const { TextArea } = Input;

const MessageCoordinatorForm: FC<IFormProps> = ({
  title,
  description,
  onClose,
}) => {
  const [message, setMessage] = useState<string>();
  const [showConfirmation, toggleConfirmation] = useState<boolean>(false);

  const onTextChange = (text: string) => {
    setMessage(text);
  };

  const onSubmit = () => {
    notification.open({
      message: 'Message successfully sent!',
      description:
        'You will be notified in your inbox when the league coordinator responds.',
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
          Send message
        </Button>
      )}
    >
      <StyledDescription>{description}</StyledDescription>

      <TextArea
        value={message}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onTextChange(e.target.value)}
        rows={5}
      />

      <Modal
        visible={showConfirmation}
        onCancel={() => toggleConfirmation(false)}
        onOk={onSubmit}
        okText="Confirm"
        title="Send this message?"
      >
        <p>Don't worry, no information will actually be sent anywhere. This is just a gimmick :)</p>
      </Modal>
    </SidePanel>
  )
};

export default MessageCoordinatorForm;