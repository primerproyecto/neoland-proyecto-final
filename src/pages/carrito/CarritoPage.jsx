import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { CartContext } from '../../context/cartContext';

const CarritoPage = () => {
  const { cart } = useContext(CartContext);

  let carritoId = useParams();
  return (
    <div>
      <h2>CarritoPage{carritoId.id}</h2>
      {cart.map((item) => {
        return (
          <p key={item.id}>
            {item.title} <img src={item.image} alt="" />
          </p>
        );
      })}
    </div>
  );
};

export default CarritoPage;
