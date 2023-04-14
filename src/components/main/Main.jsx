import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Main = () => {
  const [esHome, setIsHome] = useState(false);
  const longitud = window.location.href.length;
  useEffect(() => {
    if (longitud === 22) {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [esHome]);

  return (
    <MainTag>
      {/* <Navigate to="/productos" /> */}
      {/* {esHome ? <h1>Es home</h1> : <Outlet />} */}

      <Outlet
        context={() => {
          console.log(window.location.href.length);
        }}
      />
    </MainTag>
  );
};
const MainTag = styled.main`
  height: 100%;
`;
export default Main;
