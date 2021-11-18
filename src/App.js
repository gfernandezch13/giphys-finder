import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FilterContainer from './containers/FilterContainer';
import ResultContainer from './containers/ResultContainer';
import { useContext, useEffect } from 'react';
import GifContext from './context/Gif/GifContext';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { getGifsTrending } = useContext(GifContext);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    getGifsTrending();
  }, []);

  return (
    <div
      className="App flex flex-direction align-items-center"
      style={{ background: theme.background }}
    >
      <div className="container">
        <HeaderComponent />
        <FilterContainer />
        <ResultContainer />
      </div>
    </div>
  );
}

export default App;
