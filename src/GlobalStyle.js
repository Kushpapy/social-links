import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --Green: hsl(75, 94%, 57%);
--White: hsl(0, 0%, 100%);
--Grey: hsl(0, 0%, 20%);
--Dark-Grey: hsl(0, 0%, 12%);
--Off-Black: hsl(0, 0%, 8%);
}

html{
    font-size: 62.5%;
}

*,::after,::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    min-height: 100vh;
    display: grid;
    place-items: center;
    color: var(--White);
    background-color: var(--Off-Black);
    font-family: "Inter", sans-serif;
    font-size: 1.4rem;
}

`;

export default GlobalStyle;
