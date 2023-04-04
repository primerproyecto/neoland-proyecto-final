import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ProductComponent from '../../components/product/ProductComponent';
import { getProduct } from '../../services/product';

const ProductPage = () => {
  const objectIdParam = useParams();
  const [producto, setProducto] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      setProducto(await getProduct(objectIdParam.id));
    })();
  }, []);
  console.log(producto);
  return (
    <article>
      <button onClick={() => navigate(-1)}>Atrás</button>
      <button disabled>Añadir a favoritos</button>
      <button disabled>Añadir al carrito</button>
      <ProductComponent producto={producto} />
    </article>
  );
};

export default ProductPage;
