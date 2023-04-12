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
.columnas {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr) ) ;
    gap: 1rem;
}
.maximizedContent {
    max-width: 60rem;
    margin: 0 auto;
    border: 1px solid green;
}

.fieldWrapper {
    font-size: ${(props) => props.theme.fontSizes.medium};
    label {
        display: block;
    }
    .labelCheck{
    display: flex;
    input {
        max-width: 60px;
    }
}
    input {
        background-color: hsl(333deg 100% 50%);
        border-radius: 4px;
        max-width: 100%;
        width: 100%;
        border:none;
        color: ${(props) => props.theme.colors.powderWhite};
        padding: 4px 8px 8px 8px;
        max-width: 500px;
    }
    margin-bottom: 2rem;

    button {
        
    }
}
`;

export default GlobalStyles;
