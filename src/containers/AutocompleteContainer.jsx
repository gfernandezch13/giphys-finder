import { useEffect } from 'react';
import { useContext } from 'react/cjs/react.development';
import AutocompleteComponent from '../components/AutocompleteComponent';
import GifContext from '../context/Gif/GifContext';

const AutocompleteContainer = ({ valueInput, handleOnClickAutocomplete }) => {
  const { gifAutocomplete, getGifsAutocomplete } = useContext(GifContext);

  useEffect(() => {
    getGifsAutocomplete(valueInput);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueInput]);

  return (
    <div
      onClick={handleOnClickAutocomplete}
      className={!!gifAutocomplete && 'suggestions-container'}
    >
      <div className="relative">
        <div>
          {gifAutocomplete.map((gif, index) => (
            <AutocompleteComponent key={index} name={gif.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutocompleteContainer;
