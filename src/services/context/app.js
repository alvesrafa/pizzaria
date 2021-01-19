import { createContext, useState, useContext } from 'react';

import { ThemeProvider } from 'styled-components';
import { dark, light } from 'styles/theme';

import OrdersProvider from './orders';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

function App({ children }) {
  const [theme, setTheme] = useState('');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <OrdersProvider>
        <ThemeProvider theme={theme === 'light' ? dark : light}>
          {children}
        </ThemeProvider>
      </OrdersProvider>
    </AppContext.Provider>
  );
}

export default App;
