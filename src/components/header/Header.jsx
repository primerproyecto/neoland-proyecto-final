import React from 'react';
import styled from 'styled-components';

import Navlink from '../navlink/Navlink';

const HEADER_HIDE_THRESHOLD = 400;

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = React.useState(true);

  React.useEffect(() => {
    let previousScrollValue;

    function handleScroll() {
      const currentScroll = window.scrollY;

      if (typeof previousScrollValue !== 'number') {
        previousScrollValue = currentScroll;
        return;
      }

      const direction = currentScroll > previousScrollValue ? 'down' : 'up';

      if (
        isHeaderVisible &&
        direction === 'down' &&
        currentScroll > HEADER_HIDE_THRESHOLD
      ) {
        setIsHeaderVisible(false);
      } else if (!isHeaderVisible && direction === 'up') {
        setIsHeaderVisible(true);
      }

      previousScrollValue = currentScroll;
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHeaderVisible]);

  const transform = isHeaderVisible ? 'translateY(0%)' : 'translateY(-100%)';
  return (
    <HeaderTag style={{ transform }}>
      My Header
      <Navlink />
    </HeaderTag>
  );
};

const HeaderTag = styled.header`
  position: sticky;
  top: 0;
  padding: 32px;
  box-shadow: 0px 2px 5px hsl(0deg 0% 0% / 0.2);
  display: flex;
  justify-content: space-between;
  background: white;
  transition: transform 350ms;
`;

export default Header;
