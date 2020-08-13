import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.colors.main};
    min-height: 100vh;
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, p, button, article, section, input, h1 {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
  }

  a {
    font-family: 'Montserrat', sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    height: 100vh;
  }

  .main-navigation__drawer-nav {
    height: 100%;
  }

  .slide-in-left-enter {
    transform: translateX(-100%);
  }

  .slide-in-left-enter-active {
    transform: translateX(0);
    opacity: 1;
    transition: all 200ms;
  }

  .slide-in-left-exit {
    transform: translateX(0%);
    opacity: 1;
  }

  .slide-in-left-exit-active {
    transform: translateX(-100%);
    opacity: 0;
    transition: all 200ms;
  }

  @media (min-width: 768px) {
    .main-navigation__menu-btn {
      display: none;
    }
  }
`;
