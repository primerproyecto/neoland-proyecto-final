import { createContext, useEffect, useState } from 'react';

//importo servicio
import {
  getProducts,
  getProductsElectronicos,
  getProductsJoyas,
  getProductsMen,
  getProductsWomen,
} from '../services/products';

export const ProductsContent = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    (async () => {
      setProductos(await getProducts());
      setIsLoading(true);
    })();
  }, []);

  const mujer = () => {
    setIsLoading(false);
    (async () => {
      setProductos(await getProductsWomen());
      setIsLoading(true);
    })();
  };
  const hombre = () => {
    setIsLoading(false);
    (async () => {
      setProductos(await getProductsMen());
      setIsLoading(true);
    })();
  };
  const joyas = () => {
    setIsLoading(false);
    (async () => {
      setProductos(await getProductsJoyas());
      setIsLoading(true);
    })();
  };
  const electronica = () => {
    setIsLoading(false);
    (async () => {
      setProductos(await getProductsElectronicos());
      setIsLoading(true);
    })();
  };
  const todasLasCategorias = () => {
    setIsLoading(false);
    (async () => {
      setProductos(await getProducts());
      setIsLoading(true);
    })();
  };

  return (
    <ProductsContent.Provider
      value={{
        productos,
        setProductos,
        mujer,
        hombre,
        joyas,
        electronica,
        todasLasCategorias,
        isLoading,
      }}
    >
      {children}
    </ProductsContent.Provider>
  );
};
