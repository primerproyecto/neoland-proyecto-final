import React from 'react';
import { useParams } from 'react-router-dom';

const CarritoPage = () => {
  let carritoId = useParams();
  return (
    <div>
      <h2>CarritoPage{carritoId.id}</h2>
    </div>
  );
};

export default CarritoPage;
