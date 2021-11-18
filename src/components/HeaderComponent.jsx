import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const HeaderComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="justify-content-between flex align-items-center">
      <img src={theme.logo} width="59px" alt="logo" />
      <button
        className="btn-modo"
        style={{ color: theme.color, border: theme.border }}
        onClick={toggleTheme}
      >
        MODO {theme.name === 'LIGHT' ? 'DARK' : 'LIGHT'}
      </button>
    </header>
  );
};

export default HeaderComponent;
