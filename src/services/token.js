import UseAxios from '../hooks/useAxios';

export const getToken = async ({ nombre, contra }) => {
  const optionRequest = {
    method: 'POST',
    url: 'https://fakestoreapi.com/auth/login',
    data: {
      username: nombre,
      password: contra,
    },
  };

  return await UseAxios(optionRequest);
};
