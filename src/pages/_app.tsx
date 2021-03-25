import GlboalStyles from '../styles/GlobalStyles';

import { useTheme } from '../context';

function MyApp({ Component, pageProps }) {
  const {
    props: {},
    ThemeProvider,
  } = useTheme();

  return (
    <ThemeProvider>
      <GlboalStyles />
      <Component />
    </ThemeProvider>
  );
}

export default MyApp;
