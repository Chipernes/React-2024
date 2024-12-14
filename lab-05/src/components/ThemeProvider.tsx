import { createContext, ReactNode, useState, useContext } from 'react';

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={ { theme, toggleTheme } }>
      { children }
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
