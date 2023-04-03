import React from 'react';
import styled from 'styled-components';

const NavLinkAnchor = ({ href, children }) => {
  return (
    <NavLinkAnchorTag href={href}>
      {children}
      <Revealed aria-hidden={true}>{children}</Revealed>
    </NavLinkAnchorTag>
  );
};

const NavLinkAnchorTag = styled.a`
  display: block;
  position: relative;
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  font-size: 1.25rem;
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

export default NavLinkAnchor;
