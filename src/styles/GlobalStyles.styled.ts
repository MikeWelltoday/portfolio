import {createGlobalStyle} from 'styled-components'
import {ThemeSet} from './ThemeStyles.styled'

//===============================================================================================================================================================

export const GlobalStyles = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }

  //input
  // input:-webkit-autofill,
  // input:-webkit-autofill:hover,
  // input:-webkit-autofill:focus,
  // input:-webkit-autofill:active {
  //   -webkit-box-shadow: 0 0 0 30px ${ThemeSet.color.background.card.card} inset !important;
  // }

  *:focus-visible {
    outline: 2px solid greenyellow;
  }

  html {
    font-size: 10px;
    height: 100%;
  }

  body {
    overflow-x: hidden;

    min-width: 360px;

    font-family: 'Inter', 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    //font-family: 'Inter', sans-serif;
    //font-family: 'Poppins', sans-serif;
    //font-family: 'JetBrains Mono', monospace;

    height: 100%;
    line-height: 1.2;
    background-color: ${ThemeSet.color.background.body};
    color: ${ThemeSet.color.font.grey.grey90}
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
    cursor: pointer;
  }

  //  scroll
  //для fireFox 
  * {
    scrollbar-width: thin;
    scrollbar-color: ${ThemeSet.color.scrollbar.thumb}, ${ThemeSet.color.scrollbar.track};
  }

  //для Chrome, safari, ... 
  *::-webkit-scrollbar {
    width: 18px;
  }

  *::-webkit-scrollbar-track {
    background-color: ${ThemeSet.color.scrollbar.track};
    box-shadow: 0 0 2px rgba(0, 0, 0, .2) inset;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${ThemeSet.color.scrollbar.thumb};
    border-radius: 8px;
    border: 3px solid ${ThemeSet.color.scrollbar.track};
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: ${ThemeSet.color.font.yellow.yellow50};
  }

  //  растояние между секциями
  section {
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    //outline: 1px solid green;

    //background for particles
      // background-color: ${ThemeSet.colors.BackgroundMain};

    @media ${ThemeSet.media.mobile} {
      padding: 80px 0;
    };
  }
















`