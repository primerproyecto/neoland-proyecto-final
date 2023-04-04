import UseAxios from '../hooks/useAxios';

export const getProducts = async () => {
  const optionRequest = {
    method: 'GET',
    url: 'https://fakestoreapi.com/products',
  };

  return await UseAxios(optionRequest);
};
