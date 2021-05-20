import GlboalStyles from '../styles/GlobalStyles';

import { ThemeProvider } from '../context/ThemeContext';
import { AuthProvider } from '../context/AuthContext';
import { OrderProvider } from '../context/OrderContext';
import { Toaster } from 'react-hot-toast';
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <OrderProvider>
          <Toaster position="top-center" reverseOrder={true} />
          <GlboalStyles />
          <Component />
        </OrderProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
