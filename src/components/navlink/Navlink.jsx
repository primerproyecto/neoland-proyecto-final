import React from "react";
import styled from "styled-components";
import NavLinkAnchor from "./NavLinkAnchor";

const Navlink = () => {
  return (
    <nav>
      <Lista>
        <li>
          <NavLinkAnchor href="/">One</NavLinkAnchor>
        </li>
        <li>
          <NavLinkAnchor href="/">Two</NavLinkAnchor>
        </li>
        <li>
          <NavLinkAnchor href="/">Three</NavLinkAnchor>
        </li>
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
export default Navlink;
