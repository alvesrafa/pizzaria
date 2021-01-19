import { createContext, useState, useContext } from 'react';

import { ThemeProvider } from 'styled-components';
import { dark, light } from 'styles/theme';

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
      <ThemeProvider theme={theme === 'light' ? dark : light}>
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
