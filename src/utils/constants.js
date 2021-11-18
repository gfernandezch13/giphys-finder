export const THEMES = {
  light: {
    name: 'LIGHT',
    foreground: '#000000',
    background: '#ffffff',
    backgroundColor: '#E7E7E7',
    backgroundColorInput: 'white',
    border: '1px solid #6809E1',
    borderInput: '1px solid #121212',
    color: '#6809E1',
    colorInput: '#3F3F3F',
    logo: '/images/logo-light.svg',
  },
  dark: {
    name: 'DARK',
    foreground: '#ffffff',
    background: '#373737',
    backgroundColor: '#212121',
    backgroundColorInput: '#373737',
    border: '1px solid white',
    borderInput: '1px solid white',
    color: 'white',
    colorInput: 'white',
    logo: '/images/logo-dark.svg',
  },
};

const API_URL = 'https://api.giphy.com/v1';
const API_KEY = 'xbMmscz8Q9gItrTJMSQM4W7CqfO7y996';
const API_ENDPOINT = {
  trending: '/gifs/trending',
  search: '/gifs/search',
  autocomplete: '/gifs/search/tags',
};

export const RESOURCES_API = {
  API_KEY,
  API_URL,
  API_ENDPOINT,
};
