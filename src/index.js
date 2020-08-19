import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { ThemeProvider } from 'styled-components';

import * as serviceWorker from './serviceWorker';
import {
  AuthProvider,
  ContentProvider,
  StoreProvider
} from './shared/providers';
import { GlobalStyle, theme } from './styles';
import App from './App';

ReactDOM.render(
  <CookiesProvider>
    <AuthProvider>
      <ContentProvider>
        <StoreProvider>
          <React.StrictMode>
            <ThemeProvider theme={theme}>
              <BrowserRouter>
                <GlobalStyle />
                <App />
              </BrowserRouter>
            </ThemeProvider>
          </React.StrictMode>
        </StoreProvider>
      </ContentProvider>
    </AuthProvider>
  </CookiesProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
