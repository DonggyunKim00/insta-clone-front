import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration: none;
    }
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
    }
    body{
        font-family: 'Noto Sans KR', sans-serif;
        background-color: #FAFAFA;
    }
    ol, ul{
        list-style: none;
    }
    button {
        cursor: pointer;
    }
`;

export default GlobalStyles;
