import { useContext } from 'react/cjs/react.development';
import { ThemeContext } from '../context/ThemeContext';

const FilterComponent = ({
  valueInput,
  handleOnChange,
  handleKeyPress,
  handleOnClickClose,
  handleOnClick,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex align-items-center">
      <div className="relative">
        <img
          onClick={handleOnClickClose}
          className="icon-close"
          src={valueInput !== '' ? '/images/cerrar.svg' : ''}
          alt=""
        />
        <input
          className="input-search"
          style={{
            border: theme.borderInput,
            color: theme.colorInput,
            backgroundColor: theme.backgroundColorInput,
          }}
          onChange={handleOnChange}
          onKeyPress={handleKeyPress}
          value={valueInput}
          placeholder=" Buscar Gif"
          type="text"
        />
      </div>
      <button className="btn-search" onClick={(e) => handleOnClick(valueInput)}>
        <img src="/images/icon-search-mod-noc.svg" alt="buscar" />
      </button>
    </div>
  );
};

export default FilterComponent;
