import { useEffect, useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import FilterComponent from '../components/FilterComponent';
import GifContext from '../context/Gif/GifContext';
import { ThemeContext } from '../context/ThemeContext';
import AutocompleteContainer from './AutocompleteContainer';

const FilterContainer = () => {
  // contextos
  const { theme } = useContext(ThemeContext);
  const { getGifsSearch, setSelectGif } = useContext(GifContext);

  // estados locales
  const [valueInput, setValueInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // eventos
  const handleOnChange = (e) => setValueInput(e.target.value);
  const handleOnClickClose = () => setValueInput('');
  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      setSearchTerm(e.target.value);
      setValueInput('');
    }
  };
  const handleOnClickAutocomplete = (e) => {
    setSearchTerm(e.target.innerHTML);
    setValueInput('');
  };
  const handleOnClick = (value) => {
    setSearchTerm(value);
    setValueInput('');
  };

  useEffect(() => {
    setSelectGif(searchTerm);
    getGifsSearch(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <section className="filter flex align-items-center flex-direction ">
      <h1 style={{ color: theme.color }}>
        ¡Inspirate y busca los mejores <span>GIFS</span>!
      </h1>
      <img src="/images/ilustra-header.svg" alt="lustracion header" />
      <div>
        <FilterComponent
          valueInput={valueInput}
          handleOnChange={handleOnChange}
          handleKeyPress={handleKeyPress}
          handleOnClickClose={handleOnClickClose}
          handleOnClick={handleOnClick}
        />
        {!!valueInput && (
          <AutocompleteContainer
            valueInput={valueInput}
            handleOnClickAutocomplete={handleOnClickAutocomplete}
          />
        )}
      </div>
    </section>
  );
};

export default FilterContainer;
