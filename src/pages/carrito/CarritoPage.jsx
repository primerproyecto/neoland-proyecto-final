import React, { useContext } from 'react';
/* import { ShoppingCart } from 'react-feather'; */
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { CartContext } from '../../context/cartContext';

const CarritoPage = () => {
  const { cart, removeCart } = useContext(CartContext);

  let carritoId = useParams();
  return (
    <CarritoWrapper style={{ display: 'flex', alignItems: 'center' }}>
      {cart.length > 0 ? (
        <div>
          <h2>CarritoPage{carritoId.id}</h2>
          <ul>
            {cart.map((item) => {
              return (
                <CarritoLi key={item.id}>
                  <ImagenCarrito src={item.image} alt="" />{' '}
                  <Parrafo>{item.title}</Parrafo> {''}
                  <button onClick={() => removeCart(item.id)}>Quitar del carrito</button>
                </CarritoLi>
              );
            })}
          </ul>
        </div>
      ) : (
        <Empty>
          <Cabecera>No tienes productos todavía.</Cabecera>
          <p>Pásate por nuestra tienda para comprar</p>
        </Empty>
      )}
    </CarritoWrapper>
  );
};
const ImagenCarrito = styled.img`
  width: 100px;
  padding: 4px;
`;
const CarritoLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Empty = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  max-width: fit-content;
  margin: 0 auto;
  background-color: hotpink;
  border-radius: 4px;
  color: white;
`;

const CarritoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Parrafo = styled.p`
  margin: 0 12px;
  font-size: 1rem;
`;

const Cabecera = styled.h2`
  color: white;
`;

export default CarritoPage;
