import { createGlobalStyle } from 'styled-components';
/* import { MAX } from "./constants"; */

const GlobalStyles = createGlobalStyle`


  * {
    margin: 0;
    padding: 0;
    line-height: 1.5em;
    background-color: #FEFBF1;
  }
  body {
    font-family: 'Raleway';
  }
  p {
    font-size: 1.2rem;
    font-weight: 400;
  }

  /* .App {
  display: flex;
  width: 100%;
  min-height: 100vh;
  } */
`

export default GlobalStyles;