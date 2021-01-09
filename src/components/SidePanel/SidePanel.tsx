import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Drawer, Button } from 'antd';

interface ISidePanelProps {
  title: string;
  onClose: () => void;
  visible: boolean;
  width?: number;
  footerButtons?: ReactNode;
}

const StyledDrawer = styled(Drawer)`
  font-family: 'MuseoModerno', cursive;
`;

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
`;

const SidePanel:FC<ISidePanelProps> = ({
  title,
  onClose,
  children,
  visible,
  width,
  footerButtons,
}) => {
  return (
    <StyledDrawer
      title={title}
      onClose={onClose}
      placement="right"
      visible={visible}
      width={width}
      footer={(
        <StyledFooter>
          <Button type="link" onClick={onClose}>
            Cancel
          </Button>
          {footerButtons && (
            <div>
              {footerButtons}
            </div>
          )}
        </StyledFooter>
      )}
    >
      {children}
    </StyledDrawer>
  )
}

export default SidePanel;