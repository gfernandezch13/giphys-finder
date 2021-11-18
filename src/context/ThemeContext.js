import { createContext, useState } from 'react';
import { THEMES } from '../utils/constants';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEMES.light);

  const toggleTheme = () =>
    theme.name === 'LIGHT' ? setTheme(THEMES.dark) : setTheme(THEMES.light);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
