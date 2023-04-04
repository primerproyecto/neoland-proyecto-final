import React, { useState } from 'react';
import { useContext } from 'react';

import { TokenContext } from '../../context/userContext';
import { getToken } from '../../services/token';
import { DivWrapper, Formulario } from './loginStyles';

const LoginPage = () => {
  // creo estados para los campos de formulario
  const [nombre, setNombre] = useState('');
  const [contra, setContra] = useState('');
  const { token, setToken } = useContext(TokenContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    (async () => {
      const llamarToken = await getToken({ nombre, contra });
      setToken(llamarToken.token);
      window.localStorage.setItem('userToken', JSON.stringify(llamarToken.token));
    })();

    console.log('que es token tran hacer el set', token);
  };

  return (
    <DivWrapper>
      <p>
        Para hacer login con fakestoreapi, usar <strong>mor_2314</strong> de nombre y{' '}
        <strong>83r5^_</strong> de contraseña
      </p>
      <br />
      <Formulario onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            id="nombre"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="contra">Contraseña</label>
          <input
            value={contra}
            onChange={(e) => setContra(e.target.value)}
            id="contra"
            type="text"
          />
        </div>
        <div>
          <button>Loginear</button>
        </div>
      </Formulario>
    </DivWrapper>
  );
};

export default LoginPage;
