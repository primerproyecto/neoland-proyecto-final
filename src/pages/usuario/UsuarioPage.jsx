import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { getUsuario } from '../../services/usuario';

const UsuarioPage = () => {
  const usarioParam = useParams();
  const [usuario, setUsuario] = useState('');
  const [favoritos] = useState(() => {
    //consulto localstorage por si hay alguno
    const localStorageImportado = JSON.parse(window.localStorage.getItem('USER'));
    localStorageImportado.favoritos;

    const resultados = localStorageImportado.favoritos;
    if (resultados) {
      return resultados;
    } else {
      return [];
    }
  });
  console.log('que son </ol></ol>', favoritos);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      setUsuario(await getUsuario(usarioParam.id));
    })();
  }, []);
  return (
    <UsuarioWrapper>
      <button onClick={() => navigate(-1)}>Atrás</button>
      <Avatar src="https://images.mubicdn.net/images/cast_member/9020/cache-148043-1465730065/image-w856.jpg?size=800x" />
      <h1>
        {usuario.name?.firstname.toUpperCase()} - {usuario.name?.lastname}
      </h1>
      <p>
        <strong>Nickname:</strong> {usuario.username}
      </p>
      <p>
        <strong>Email:</strong> {usuario.email}
      </p>
      <p>
        <strong>Código postal:</strong> {usuario.address?.zipcode}
      </p>
      <p>
        <strong>Ciudad:</strong> {usuario.address?.city}
      </p>
      <h2>Favoritos</h2>
      <ol>
        {favoritos?.map((item, index) => {
          return (
            <li key={index}>
              {item.image} {item}
            </li>
          );
        })}
      </ol>
    </UsuarioWrapper>
  );
};

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin: 2rem auto;
`;
const UsuarioWrapper = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

export default UsuarioPage;
