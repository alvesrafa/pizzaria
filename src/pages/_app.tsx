import GlboalStyles from '../styles/GlobalStyles';

import { useTheme, ThemeProvider, AuthProvider } from '../context';

function MyApp({ Component, pageProps }) {
  const { theme } = useTheme();

  return (
    <ThemeProvider>
      <AuthProvider>
        <GlboalStyles />
        <Component />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
