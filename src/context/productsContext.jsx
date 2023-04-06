import { createContext, useEffect, useState } from 'react';

//importo servicio
import { getProducts } from '../services/products';

export const ProductsContent = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    (async () => {
      setProductos(await getProducts());
    })();
  }, []);
  return (
    <ProductsContent.Provider value={{ productos }}>{children}</ProductsContent.Provider>
  );
};
