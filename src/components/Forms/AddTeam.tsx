import React, { FC, useState, ChangeEvent } from 'react';
import { Space, Input, Button, Modal, notification } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import { IFormProps } from './types';
import { SidePanel } from '../SidePanel';
import { getColorCode } from 'utils';
import { StyledDescription } from './Forms.styled';

const AddTeamForm: FC<Omit<IFormProps, 'title'| 'description'>> = ({
  onClose,
}) => {
  const [teamName, setTeamName] = useState<string>();
  const [captainName, setCaptainName] = useState<string>();
  const [captainEmail, setCaptainEmail] = useState<string>();
  const [showConfirmation, toggleConfirmation] = useState<boolean>(false);

  const onSubmit = () => {
    notification.open({
      message: 'Request for new team successfully sent!',
      description:
        `You will be notified in your inbox when the league coordinator approves your request to add "${teamName}"`,
      icon: <CheckCircleFilled style={{ color: getColorCode('GREEN') }} />,
    });
    onClose();
  };

  return (
    <SidePanel
      title={'Create new team'}
      onClose={onClose}
      visible
      width={600}
      footerButtons={(
        <Button
          type="primary"
          onClick={() => toggleConfirmation(true)}
          disabled={!teamName || !captainName || !captainEmail}
        >
          Add team
        </Button>
      )}
    >
      <StyledDescription>
        Nulla quis laboris enim nostrud exercitation occaecat magna do labore non reprehenderit. Irure ea laborum ex nisi occaecat proident veniam pariatur exercitation dolore eu quis ex commodo. Ullamco ad nisi consectetur voluptate fugiat sit qui incididunt esse nisi ad nostrud. Anim sit cupidatat magna eu consectetur magna. Culpa consectetur nisi sint reprehenderit velit in aliquip officia minim reprehenderit sunt ex.
      </StyledDescription>

      <Space direction="vertical">
        <Space direction="horizontal">
          <label>Team name:</label>
          <Input value={teamName} onChange={(e: ChangeEvent<HTMLInputElement>) => setTeamName(e.target.value)} />
        </Space>
        <Space direction="horizontal">
          <label>Captain's name:</label>
          <Input value={captainName} onChange={(e: ChangeEvent<HTMLInputElement>) => setCaptainName(e.target.value)} />
        </Space>
        <Space direction="horizontal">
          <label>Captain's email:</label>
          <Input type="email" value={captainEmail} onChange={(e: ChangeEvent<HTMLInputElement>) => setCaptainEmail(e.target.value)} />
        </Space>
      </Space>

      <Modal
        visible={showConfirmation}
        onCancel={() => toggleConfirmation(false)}
        onOk={onSubmit}
        okText="Confirm"
        title={`Send request to add "${teamName}"?`}
      >
        <p>Don't worry, no information will actually be sent anywhere. This is just a gimmick :)</p>
      </Modal>
    </SidePanel>
  )
};

export default AddTeamForm;