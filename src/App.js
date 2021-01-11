import Routes from 'routes';
import GlobalStyle from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { dark, light } from './styles/theme';
function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
