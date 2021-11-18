import { GET_GIFSLIST, GET_GIFSLISTAUTO, SET_SELECTGIF } from '../types';

const GifReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_GIFSLIST:
      return {
        ...state,
        gifs: payload,
      };
    case GET_GIFSLISTAUTO:
      return {
        ...state,
        gifAutocomplete: payload,
      };
    case SET_SELECTGIF:
      return {
        ...state,
        selectGif: payload,
      };
    default:
      return state;
  }
};

export default GifReducer;
