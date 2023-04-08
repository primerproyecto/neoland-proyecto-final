import UseAxios from '../hooks/useAxios';

export const getProducts = async () => {
  const optionRequest = {
    method: 'GET',
    url: 'https://fakestoreapi.com/products',
  };

  return await UseAxios(optionRequest);
};
export const getProductsWomen = async () => {
  const optionRequest = {
    method: 'GET',
    url: `https://fakestoreapi.com/products/category/women's%20clothing`,
  };

  return await UseAxios(optionRequest);
};
export const getProductsMen = async () => {
  const optionRequest = {
    method: 'GET',
    url: `https://fakestoreapi.com/products/category/men's%20clothing`,
  };

  return await UseAxios(optionRequest);
};
export const getProductsJoyas = async () => {
  const optionRequest = {
    method: 'GET',
    url: `https://fakestoreapi.com/products/category/jewelery`,
  };

  return await UseAxios(optionRequest);
};
export const getProductsElectronicos = async () => {
  const optionRequest = {
    method: 'GET',
    url: `https://fakestoreapi.com/products/category/electronics`,
  };

  return await UseAxios(optionRequest);
};
