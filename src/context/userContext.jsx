import { useState } from 'react';
import { createContext } from 'react';

export const TokenContext = createContext(null);

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    const storedToken = window.localStorage.getItem('userToken');

    return storedToken !== null ? JSON.parse(storedToken) : null;
  });
  return (
    <TokenContext.Provider value={{ token, setToken }}>{children}</TokenContext.Provider>
  );
};
