import { createGlobalStyle } from 'styled-components';

import { devices } from '../theme/theme';

const GlobalStyles = createGlobalStyle`

button {
    cursor: pointer
}
main {
    padding: 1rem;
}
nav .active {
    color: hsl(333deg 100% 50%);
}
.fluidContainer {
    display: flex;
    max-width: 700px;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    

    @media ${devices.laptop} {
        flex-direction: row;
        gap: 2rem;
  }
    
}
`;

export default GlobalStyles;
