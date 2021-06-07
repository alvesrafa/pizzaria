import { createContext, useState, useContext, ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}
interface ThemeContextProps {
  theme: string;
  toogleTheme: () => void;
}

import { ThemeProvider as Provider } from 'styled-components';

import { dark, light } from '../styles/theme';

const ThemeContext = createContext({} as ThemeContextProps);

const useTheme = () => useContext(ThemeContext);

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState('light');

  const toogleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <Provider theme={theme === 'light' ? light : dark}>{children}</Provider>
    </ThemeContext.Provider>
  );
}

export { useTheme, ThemeProvider, ThemeContext };
