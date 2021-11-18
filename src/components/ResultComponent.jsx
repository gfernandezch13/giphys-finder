import { useContext } from 'react/cjs/react.development';
import GifContext from '../context/Gif/GifContext';
import { ThemeContext } from '../context/ThemeContext';

const ResultComponent = () => {
  const { theme } = useContext(ThemeContext);
  const { gifs } = useContext(GifContext);

  return (
    <section
      className="gifs-container flex flex-wrap justify-content-center"
      style={{ background: theme.backgroundColor }}
    >
      {gifs.map((gif) => (
        <a key={gif.id} href={gif.images.downsized_medium.url} target="_blank" rel="noreferrer">
          <img key={gif.id} src={gif.images.downsized_medium.url} alt={gif.title} />
        </a>
      ))}
      <div></div>
    </section>
  );
};

export default ResultComponent;
