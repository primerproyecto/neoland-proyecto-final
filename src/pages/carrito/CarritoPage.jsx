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
          <br />
          <ul>
            {cart.map((item) => {
              return (
                <CarritoLi key={item.id}>
                  <ImagenCarrito src={item.image} alt="" /> {item.title} {''}
                  <button onClick={() => removeCart(item.id)}>Quitar del carrito</button>
                </CarritoLi>
              );
            })}
          </ul>
        </div>
      ) : (
        <Empty>
          <h2>No tienes productos todavía.</h2>
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
  height: 100%;
  align-items: center;
`;

export default CarritoPage;
