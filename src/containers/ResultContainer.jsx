import { useContext } from 'react/cjs/react.development';
import ResultComponent from '../components/ResultComponent';
import NotFoundComponent from '../components/NotFoundComponent';
import GifContext from '../context/Gif/GifContext';
import { ThemeContext } from '../context/ThemeContext';

const ResultContainer = () => {
  const { theme } = useContext(ThemeContext);
  const { selectGif, gifs } = useContext(GifContext);

  return (
    <div>
      <h3 className="search-result flex justify-content-center" style={{ color: theme.color }}>
        Resultados de la búsqueda {!!selectGif && `: ${selectGif}`}
      </h3>
      {gifs.length ? <ResultComponent /> : <NotFoundComponent />}
    </div>
  );
};

export default ResultContainer;
