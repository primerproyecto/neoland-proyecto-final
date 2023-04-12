import React, { useContext, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import { TokenContext } from '../../context/userContext';
import { getToken } from '../../services/token';
import { DivWrapper, Formulario, Intro } from './loginStyles';

const LoginPage = () => {
  // creo estados para los campos de formulario
  const [nombre, setNombre] = useState('');
  const [contra, setContra] = useState('');
  const [error, setError] = useState('');
  const { setToken } = useContext(TokenContext);
  const navigate = useNavigate();

  // Manejo del submit del login
  const handleSubmit = (e) => {
    e.preventDefault();

    (async () => {
      const llamarToken = await getToken({ nombre, contra });

      if (llamarToken && nombre === 'mor_2314') {
        setToken(llamarToken.token);

        const localStorageDePalo = {
          nombre: 'mor_2314',
          token: llamarToken.token,
          favoritos: [],
          currentUser: 'mor_2314',
        };

        window.localStorage.setItem('USER', JSON.stringify(localStorageDePalo));
        navigate('/productos');
      } else {
        setError('ip');
      }
    })();
  };

  return (
    <DivWrapper>
      {error && (
        <h1>
          {' '}
          <FormattedMessage
            id="app.header.loginFail"
            defaultMessage="No tienes permisos"
          />
        </h1>
      )}
      <Intro>
        <FormattedMessage id="app.header.reasons" defaultMessage="Blac bla bli" />
      </Intro>
      <br />
      <Formulario onSubmit={handleSubmit}>
        <div className="fieldWrapper">
          <label htmlFor="nombre">
            <FormattedMessage id="app.header.label.nombre" defaultMessage="Nombre" />
          </label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            id="nombre"
            type="text"
          />
        </div>
        <div className="fieldWrapper">
          <label htmlFor="contra">
            <FormattedMessage
              id="app.header.label.password"
              defaultMessage="Contraseña"
            />
          </label>
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
