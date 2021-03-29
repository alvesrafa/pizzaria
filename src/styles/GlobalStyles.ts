import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from './theme';

const GlboalStyles = createGlobalStyle<ThemeProps>`

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
  @media (max-width: 590px) {
    html {
      font-size: 67.5%;
    }
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    width: 100vw;
    height: 100vh;
    
  }
  body {
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme.text};
  }

  body, input, textarea, button {
    font: 400 1rem "Inter", sans-serif;
  }

  button {
      cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }
  
`;

export default GlboalStyles;
