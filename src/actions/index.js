const API_ROOT = 'http://api.openweathermap.org/data/2.5';
const API_KEY = process.env.REACT_APP_KEY || 'unkonwn_api_key';

const getRequest = async (endpoint, queries) => {
  const qs = Object.entries(queries).reduce((pre, val) => `${pre}&${val[0]}=${val[1]}`, '');
  const API_URL = `${API_ROOT}${endpoint}?appid=${API_KEY}&${qs}`;
  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error(`bad server response with status code ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error.message);
  }
}

export const fetchCurrentWeatherByCityName = cityName => {
  const endpoint = '/weather';
  const queries = { q: cityName };
  return getRequest(endpoint, queries);
}