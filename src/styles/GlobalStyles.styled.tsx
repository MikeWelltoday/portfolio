import {createGlobalStyle} from 'styled-components'

// styles
import {ThemeSet} from './ThemeStyles.styled'

export const GlobalStyles = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }

  *:focus {
    outline: 2px solid ${ThemeSet.colors.FormFocusBorderColor};
  }

  html {
    font-size: 10px;
    height: 100%;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    //font-family: 'JetBrains Mono', monospace;

    height: 100%;
    line-height: 1;
    background-color: ${ThemeSet.colors.BackgroundMain};
    color: ${ThemeSet.colors.Font}
  }

  img {
    vertical-align: top;
  }

  ul {
    list-style-type: none;
  }

  a, a:hover, a:active {
    text-decoration: none;
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: inherit;
    font-size: inherit;
  }

  button {
    background-color: unset;
    border: none;
  }

`