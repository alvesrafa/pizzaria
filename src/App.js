import { Suspense, createContext } from 'react';
import Routes from 'routes';
import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

import { dark, light } from './styles/theme';
import LoadingPage from 'components/LoadingPage';

import AuthProvider from 'services/context/auth';

function App() {
  return (
    <ThemeProvider theme={light}>
      <AuthProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Suspense fallback={<LoadingPage background={light.background} />}>
            <Route component={Routes} />
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
