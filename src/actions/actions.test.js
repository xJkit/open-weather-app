import { fetchCurrentWeatherByCityName, NOT_FOUND } from './index';

const cityInfo = {
  taiwan: { a: 1, b: 2 },
  japan: { c: 1, d: 2 },
};

/*** Mock fetch requests */
beforeAll(() => {
  global.fetch = require('jest-fetch-mock');
});
/********************** */

describe('fetchCurrentWeatherByCityName', () => {
  beforeEach(() => {
    /** clear previous fetch mock responses */
    fetch.resetMocks();
  });

  test('should response weather info which exists', async () => {
    fetch.mockResponse(JSON.stringify(cityInfo.taiwan));
    await expect(fetchCurrentWeatherByCityName('taiwan')).resolves.toEqual(cityInfo.taiwan);
  });

  test('should reject with those cityName which do not exist', async () => {
    fetch.mockReject();
    await expect(fetchCurrentWeatherByCityName('abcde')).rejects.toEqual(NOT_FOUND);
  })
})