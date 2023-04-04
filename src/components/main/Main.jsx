import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Main = () => {
  return (
    <MainTag>
      <Outlet />
    </MainTag>
  );
};
const MainTag = styled.main`
  height: 100%;
`;
export default Main;
