import { Suspense } from 'react';
import Routes from 'routes';
import GlobalStyle from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

import { dark, light } from './styles/theme';
import LoadingPage from 'components/LoadingPage';

function App() {
  return (
    <ThemeProvider theme={light}>
      <Suspense fallback={<LoadingPage background={light.background} />}>
        <GlobalStyle />
        <Routes />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
