import UseAxios from '../hooks/useAxios';

export const getUsuario = async (id) => {
  const optionRequest = {
    method: 'GET',
    url: `https://fakestoreapi.com/users/${id}`,
  };

  return await UseAxios(optionRequest);
};
