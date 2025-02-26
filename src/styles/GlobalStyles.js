import {createGlobalStyle} from 'styled-components';

const myGlobalStyles = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  body {
    background: #121212;
    color: #e0e0e0;
    transition: all 0.3s ease-in-out;
  }

  a {
    text-decoration: none;
    color: #00bcd4;
  }

  h2 {
    color: #00bcd4;
  }
`;

export default myGlobalStyles;