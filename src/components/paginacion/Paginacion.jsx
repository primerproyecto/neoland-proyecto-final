import React from 'react';
import styled from 'styled-components';

import { range } from '../../utils';

const PaginationLink = ({ currentPage, pagina, onPageChange }) => {
  const liClass = `pagination-item ${pagina === currentPage ? 'activa' : ''}`;
  return (
    <ContendedorPaginacionItem className={liClass} onClick={() => onPageChange(pagina)}>
      <span> {pagina}</span>
    </ContendedorPaginacionItem>
  );
};

const Paginacion = ({ currentPage, total, limit, onPageChange }) => {
  const pagesCount = Math.ceil(total / limit);

  const todasLasPaginas = range(1, pagesCount);

  return (
    <div>
      <ContendedorPaginacion>
        {todasLasPaginas.map((pagina) => {
          return (
            <PaginationLink
              currentPage={currentPage}
              pagina={pagina}
              key={pagina}
              onPageChange={onPageChange}
            />
          );
        })}
      </ContendedorPaginacion>
    </div>
  );
};
const ContendedorPaginacion = styled.ol`
  display: flex;
  gap: 1rem;
  list-style: none;
`;
const ContendedorPaginacionItem = styled.li`
  display: flex;
  min-width: 20px;
  align-items: center;
  justify-content: center;
  list-style: none;
  cursor: pointer;
  &.activa {
    background-color: hotpink;
    color: white;
  }
`;
export default Paginacion;
