import GlboalStyles from '../styles/GlobalStyles';

import { ThemeProvider } from '../context/ThemeContext';
import { AuthProvider } from '../context/AuthContext';
import { OrderProvider } from '../context/OrderContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <OrderProvider>
          <GlboalStyles />
          <Component />
        </OrderProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
