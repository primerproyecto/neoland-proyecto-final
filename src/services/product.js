import UseAxios from '../hooks/useAxios';

export const getProduct = async (id) => {
  const optionRequest = {
    method: 'GET',
    url: `https://fakestoreapi.com/products/${id}`,
  };

  return await UseAxios(optionRequest);
};
