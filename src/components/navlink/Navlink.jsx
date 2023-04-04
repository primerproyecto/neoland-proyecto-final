import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { TokenContext } from '../../context/userContext';

const Navlink = () => {
  const { token, setToken } = useContext(TokenContext);

  const handleLogOut = () => {
    console.log('hacemos logout');
    setToken('');
    window.localStorage.removeItem('userToken');
  };
  return (
    <nav>
      <Lista>
        <li>
          <NavLinkAnchorTag to="/newsletter">
            Newsletter<Revealed aria-hidden={true}>Newsletter</Revealed>
          </NavLinkAnchorTag>
        </li>
        <li>
          <NavLinkAnchorTag to="/productos">
            Tienda<Revealed aria-hidden={true}>Tienda</Revealed>
          </NavLinkAnchorTag>
        </li>
        <li>
          <NavLinkAnchorTag to="/carrito">
            Carrito<Revealed aria-hidden={true}>Carrito</Revealed>
          </NavLinkAnchorTag>
        </li>
        {!token && (
          <li>
            <NavLinkAnchorTag to="login">
              Log in<Revealed aria-hidden={true}>Log in</Revealed>{' '}
            </NavLinkAnchorTag>
          </li>
        )}
        {token && (
          <li>
            <NavLinkAnchorTag to="/usuario/1">Perfil </NavLinkAnchorTag>
          </li>
        )}
        {token && (
          <li>
            <button onClick={handleLogOut}>Log out </button>
          </li>
        )}
      </Lista>
    </nav>
  );
};

const Lista = styled.ul`
  display: flex;
  gap: 16px;
  list-style-type: none;
  padding: 0;
`;

const NavLinkAnchorTag = styled(NavLink)`
  display: block;
  position: relative;
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  font-size: 1.25rem;
  &.${(props) => props.activeClassName} {
    color: red;
  }
`;
const Revealed = styled.span`
  color: hsl(333deg 100% 50%);
  position: absolute;
  top: 0;
  left: 0;
  filter: drop-shadow(0px 0px 4px white);
  clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  transition: clip-path 1000ms;

  ${NavLinkAnchorTag}:hover & {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    transition: clip-path 300ms;
  }
`;
export default Navlink;
