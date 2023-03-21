import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --purple-300: #E9C9FF;
    --purple-600: #6200EE;
    --purple-900: #250059;

    --font-black: #1C1C1C;
    --font-white: #FFFFFF;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }
    @media (max-width: 720px) {
        font-size: 87.5%;
    }

h1 {
    color: var(--purple-300);
    font-family: 'Inter';
}


`