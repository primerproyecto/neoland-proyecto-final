import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

//importo contexto de productos
import { ProductsContent } from '../../context/productsContext.jsx';

const Buscador = () => {
  const [terminoDeBusqueda, setTerminoDeBusqueda] = useState('');

  const { productos, setProductos } = useContext(ProductsContent);
  // referencia para hace focus onload
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // buscar desde campo input
  const buscar = (e) => {
    e.preventDefault();
    if (terminoDeBusqueda) {
      setProductos(
        productos.filter((item) => {
          return item.title.toLocaleLowerCase().includes(terminoDeBusqueda);
        }),
      );
    }
  };
  return (
    <SearchByNameSection>
      <div className="wrapper">
        <form>
          <input
            type="text"
            ref={inputRef}
            placeholder="Búsqueda de producto"
            value={terminoDeBusqueda}
            onChange={(e) => setTerminoDeBusqueda(e.target.value.toLocaleLowerCase())}
          />
          <button onClick={buscar}>buscar</button>
          {terminoDeBusqueda && <button>Limpiar</button>}
        </form>
      </div>
    </SearchByNameSection>
  );
};
export const SearchByNameSection = styled.section`
  padding: 3rem 3rem 1.5rem 3rem;
  text-align: center;
`;
export default Buscador;
