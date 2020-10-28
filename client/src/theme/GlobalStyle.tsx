import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Staatliches', cursive, sans-serif;
    background-color: #ECECEC;
  }
`

export default GlobalStyle;