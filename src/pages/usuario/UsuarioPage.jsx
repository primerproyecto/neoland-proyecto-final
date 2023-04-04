import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { getUsuario } from '../../services/usuario';

const UsuarioPage = () => {
  const usarioParam = useParams();
  const [usuario, setUsuario] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      setUsuario(await getUsuario(usarioParam.id));
    })();
  }, []);
  console.log(usuario);
  return (
    <div className="fluidContainer">
      <button onClick={() => navigate(-1)}>Atrás</button>
      <Avatar src="https://images.mubicdn.net/images/cast_member/9020/cache-148043-1465730065/image-w856.jpg?size=800x" />
      <h1>
        {usuario.name?.firstname} - {usuario.name?.lastname}
      </h1>
      <ul>
        <li>Nickname: {usuario.username}</li>
        <li>Email: {usuario.email}</li>
        <li>Código postal: {usuario.address?.zipcode}</li>
        <li>Ciudad: {usuario.address?.city}</li>
      </ul>
      <h2>Favoritos</h2>
    </div>
  );
};

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export default UsuarioPage;
