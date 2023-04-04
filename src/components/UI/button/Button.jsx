import React from 'react';
import styled from 'styled-components';

const Button = ({ texto }) => {
  return <ButtonTag>{texto}</ButtonTag>;
};
const ButtonTag = styled.button`
  background-color: lightpink;
`;

export default Button;
