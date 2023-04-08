import React, { createContext, useState } from 'react';

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, id) => {
    const newItem = { ...item, cantidad: 1 };
    //comprobar is el item ya esta en el carrito
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    console.log(cartItem);
    //si el producto ya está en el carrito
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, cantidad: cartItem.cantidad + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  return (
    <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
