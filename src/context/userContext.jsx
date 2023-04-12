import { useState } from 'react';
import { createContext } from 'react';

export const TokenContext = createContext(null);

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    const localStorageDePalo = JSON.parse(window.localStorage.getItem('USER'));

    return localStorageDePalo !== null ? localStorageDePalo.token : null;
  });
  return (
    <TokenContext.Provider value={{ token, setToken }}>{children}</TokenContext.Provider>
  );
};
