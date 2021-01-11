import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 85%;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  html, body, #root {
    font-size: 16px;
    height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.black};

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100vw;
    height: 100vh;
  }
  a {
    text-decoration: none;
    transition: all .2s ease-in-out;
    &:hover {
      opacity: .8;
    }
  }
  button, input {
    border: 0;
    background: transparent;
    &:focus {
      outline: 0;
    }
    color: ${({ theme }) => theme.black};
    font-weight: bold;
  }
  
  ul {
    list-style-type: none;
  }
`;
