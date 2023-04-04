import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getProducts } from '../../services/products.js';

const ProductsPage = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    (async () => {
      setProductos(await getProducts());
    })();
  }, []);

  return (
    <div>
      {productos.map((item) => {
        return (
          <figure key={item.id}>
            <Link to={`/productos/` + item.id}>
              <img src={item.image} alt=" " />
            </Link>
            <figcaption>{item.title}</figcaption>
          </figure>
        );
      })}
    </div>
  );
};

export default ProductsPage;
