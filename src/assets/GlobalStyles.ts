import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }

    body{
        ${({theme}) => css`
            background-color:${theme.colors.secondaryBg}
        `}
    }
`