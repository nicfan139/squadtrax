import React, { FC } from 'react';
import styled from 'styled-components';
import { Drawer } from 'antd';

interface ISidePanelProps {
  title: string;
  onClose: () => void;
  visible: boolean;
  width?: number;
}

const StyledDrawer = styled(Drawer)`
  font-family: 'MuseoModerno', cursive;
`;

const SidePanel:FC<ISidePanelProps> = ({
  title,
  onClose,
  children,
  visible,
  width,
}) => {
  return (
    <StyledDrawer
      title={title}
      onClose={onClose}
      placement="right"
      visible={visible}
      width={width}
    >
      {children}
    </StyledDrawer>
  )
}

export default SidePanel;