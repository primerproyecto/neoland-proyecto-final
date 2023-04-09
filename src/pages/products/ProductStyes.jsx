import styled from 'styled-components';
export const Imagen = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
  margin: 0 auto;
`;

export const Figure = styled.figure`
  position: relative;
  magin: 0;
  &.favorito {
    background-color: hotpink;
  }
  & a + svg {
    fill: hotpink;
    stroke: hotpink;
    position: absolute;
    top: 4px;
    left: 0;
  }
`;

export const LoadingWrapper = styled.div`
  background-color: hsla(333deg, 100%, 50%, 20%);
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 3rem;
  font-weight: 900;
`;

export const SearchByNameSection = styled.section`
  padding: 3rem 3rem 1.5rem 3rem;
  text-align: center;
`;
export const FilterByCategory = styled.div`
  text-align: center;
  padding-bottom: 1.5rem;
`;
