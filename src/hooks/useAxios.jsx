import axios from 'axios';

const UseAxios = async (options) => {
  return await axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => console.log('por aqui no', error.response.data));
};

export default UseAxios;
