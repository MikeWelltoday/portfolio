import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  button {
    background-color: unset;
    border: none;
  }




`