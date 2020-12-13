import React, { FC } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const StyledLayout = styled.div`
  font-family: 'MuseoModerno', cursive;
  ::-webkit-scrollbar {
    width: 13px;
    height: 13px;
  }
  ::-webkit-scrollbar-thumb {
    background: #181f48;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover{
    background: #4251b3;
  }
  ::-webkit-scrollbar-track{
    background: #ffffff;
    border-radius: 10px;
    box-shadow: inset 7px 10px 12px #f0f0f0;
  }
`;

const ScrollBar = createGlobalStyle`
  body {
    ::-webkit-scrollbar {
      width: 13px;
      height: 13px;
    }
    ::-webkit-scrollbar-thumb {
      background: #181f48;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover{
      background: #000000;
    }
    ::-webkit-scrollbar-track{
      background: #ffffff;
      border-radius: 10px;
      box-shadow: inset 7px 10px 12px #ffffff;
    }
  }
`;

const StyledPageContent = styled.div`
  box-sizing: border-box;
  margin-left: 175px;
  padding: 25px 50px;
  overflow-y: auto;
  min-height: 100vh;
  background-color: whitesmoke;
`;

export const Layout:FC = ({ children }) => (
  <>
    <ScrollBar />
    <StyledLayout>
      {children}
    </StyledLayout>
  </>
);

export const Content:FC = ({ children }) => (
  <StyledPageContent>
    {children}
  </StyledPageContent>
);