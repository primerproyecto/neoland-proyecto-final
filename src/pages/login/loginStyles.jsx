import styled from 'styled-components';

export const DivWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  jusfify-content: center;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.powderWhite};
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  label {
    display: block;
  }
  input {
    width: 100%;
  }
`;
