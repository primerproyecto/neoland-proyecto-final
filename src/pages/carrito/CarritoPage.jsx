import React, { useContext } from 'react';
import { ShoppingCart } from 'react-feather';
import { useParams } from 'react-router-dom';

import { CartContext } from '../../context/cartContext';

const CarritoPage = () => {
  const { cart } = useContext(CartContext);

  let carritoId = useParams();
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div>
        <ShoppingCart width="300px" height="300px" />
      </div>
      {cart.length > 2 && (
        <div>
          <h2>CarritoPage{carritoId.id}</h2>
          <ul>
            {cart.map((item) => {
              return (
                <li key={item.id}>
                  {item.title} <img src={item.image} alt="" />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CarritoPage;
