import React, { FC, useState } from 'react';
import { Radio, DatePicker, TimePicker, Space, Button, Modal, notification } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import moment, { Moment } from 'moment';
import { IFormProps } from './types';
import { SidePanel } from '../SidePanel';
import { getColorCode } from 'utils';
import { StyledDescription, StyledRadio } from './Forms.styled';

const GameRescheduleForm: FC<IFormProps> = ({
  title,
  description,
  onClose,
}) => {
  const [selectedMatch, setSelectedMatch] = useState<number>();
  const [date, setDate] = useState<Moment | undefined>(moment());
  const [time, setTime] = useState<Moment>();
  const [showConfirmation, toggleConfirmation] = useState<boolean>(false);

  const onMatchSelect = (e: any) => {
    setSelectedMatch(Number(e.target.value));
  };

  const onDateChange = (date: Moment) => {
    setDate(date);
  };

  const onTimeChange = (time: Moment) => {
    setTime(time);
  };

  const onSubmit = () => {
    notification.open({
      message: 'Request successfully sent!',
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
        <Button
          type="primary"
          onClick={() => toggleConfirmation(true)}
          disabled={!selectedMatch}
        >
          Send request
        </Button>
      )}
    >
      <StyledDescription>{description}</StyledDescription>

      <Space direction="vertical">
        <label>Select game:</label>
        <Radio.Group onChange={onMatchSelect} value={selectedMatch}>
          <StyledRadio value={1}>10/22/2020 - vs. Team 2</StyledRadio>
          <StyledRadio value={2}>10/28/2020 - vs. Team 3</StyledRadio>
          <StyledRadio value={3}>01/13/2021 - vs. Team 4</StyledRadio>
          <StyledRadio value={4}>02/07/2021 - vs. Team 5</StyledRadio>
        </Radio.Group>

        <br/>

        {selectedMatch && (
          <>
            <Space direction="horizontal">
              <label>Select new date:</label>
              <DatePicker
                value={date}
                onChange={onDateChange}
              />
            </Space>
            <br/>
            <Space direction="horizontal">
              <label>Select new time:</label>
              <TimePicker
                value={time}
                onChange={onTimeChange}
                defaultValue={moment('00:00', 'hh:mm a')}
                format="hh:mm a"
                use12Hours
                minuteStep={15}
              />
            </Space>
          </>
        )}
      </Space>

      <Modal
        visible={showConfirmation}
        onCancel={() => toggleConfirmation(false)}
        onOk={onSubmit}
        okText="Confirm"
        title="Are you sure?"
      >
        {date && time && (
          <p>Send request for the match to be played on {date.format('LL')} - {time.format('hh:mm a')}?</p>
        )}

        <p>Don't worry, no information will actually be sent anywhere. This is just a gimmick :)</p>
      </Modal>
    </SidePanel>
  )
};

export default GameRescheduleForm;