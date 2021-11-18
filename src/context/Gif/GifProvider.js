import { useReducer } from 'react';
import GifContext from './GifContext';
import GifReducer from './GifReducer';
import { RESOURCES_API } from '../../utils/constants';

const GifProvider = ({ children }) => {
  const { API_URL, API_KEY, API_ENDPOINT } = RESOURCES_API;
  const initialState = {
    selectGif: null,
    gifs: [],
    gifAutocomplete: [],
  };

  const [state, dispatch] = useReducer(GifReducer, initialState);

  const getDataAPI = async (url) => {
    const response = await fetch(url);
    const responseJson = await response.json();
    return responseJson.data;
  };

  const getGifsTrending = async () => {
    const url = `${API_URL}${API_ENDPOINT.trending}?api_key=${API_KEY}&limit=15`;
    const response = await getDataAPI(url);
    dispatch({
      type: 'GET_GIFSLIST',
      payload: response,
    });
  };

  const getGifsSearch = async (searchTerm) => {
    const url = `${API_URL}${API_ENDPOINT.search}?api_key=${API_KEY}&q=${searchTerm}&limit=12`;
    const response = await getDataAPI(url);
    dispatch({
      type: 'GET_GIFSLIST',
      payload: response,
    });
  };

  const getGifsAutocomplete = async (searchTerm) => {
    const url = `${API_URL}${API_ENDPOINT.autocomplete}?api_key=${API_KEY}&q=${searchTerm}&limit=5`;
    console.log(url);
    const response = await getDataAPI(url);
    dispatch({
      type: 'GET_GIFSLISTAUTO',
      payload: response,
    });
  };

  const setSelectGif = (searchTerm) =>
    dispatch({
      type: 'SET_SELECTGIF',
      payload: searchTerm,
    });

  return (
    <GifContext.Provider
      value={{
        selectGif: state.selectGif,
        gifs: state.gifs,
        gifAutocomplete: state.gifAutocomplete,
        getGifsTrending,
        getGifsSearch,
        getGifsAutocomplete,
        setSelectGif,
      }}
    >
      {children}
    </GifContext.Provider>
  );
};

export default GifProvider;
