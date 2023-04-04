import React from 'react';

const ProductComponent = ({ producto }) => {
  return (
    <div>
      <h2>{producto.title}</h2>
      <img src={producto.image} alt=" " />
      <p>Precio {producto.price}</p>
      <p>Descripción: {producto.description}</p>
      <p>Categoría: {producto.category}</p>
      <p>Valoración: {producto.rating?.rate}</p>
      <p>Recomendaciones: {producto.rating?.count}</p>
    </div>
  );
};

export default ProductComponent;
