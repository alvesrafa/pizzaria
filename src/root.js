import { Suspense, createContext } from 'react';
import App from 'app';
import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

import { dark, light } from './styles/theme';
import LoadingPage from 'components/LoadingPage';

import AuthProvider from 'services/context/auth';
import AppProvider from 'services/context/app';

function Application() {
  return (
    <AppProvider>
      <AuthProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Suspense fallback={<LoadingPage background={light.background} />}>
            <Route component={App} />
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </AppProvider>
  );
}

export default Application;
