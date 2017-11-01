# A Mini Project which puts emphasis on unit testing

> This project is part of 2017 R3: unit test course by Any Tzeng

The unit test processes of this whole project are workings under [Jest](https://github.com/facebook/jest) framework.

## Installation

please assure that you have the node v7+ and npm

```sh
  npm i # install
```

## Usage

Owing to a necessarry **API key** to fetch the data from the [Open Weather Map](https://openweathermap.org); however, **You should't hardcode the credentials in the source code**. The correct way to inject the api key is by way of node enviromnent variable: `REACT_APP_KEY`.

on `Windows` with **cmd.exe**:

```sh
set REACT_APP_KEY=yourApiKeyHere&&npm start
```

on `Mac/Linux` with **bash**:

```sh
REACT_APP_KEY=yourApiKeyHere npm start
```

if you use **fish shell**, you can do:

```sh
env REACT_APP_KEY=yourApiKeyHere npm start
```

## Run the tests

To run tests are simple:

```sh
  npm t
```

## Assignments

Therer are assignment details below

### HW1 (20171101)

A mini-project that has the following requirements:

- [x] User interface to input City name to show current weather status
- [x] Invoke weather API from OpenWeatherMap (need free api key)
- [x] Following information needs to be output: `temperature`, `min/max temperature`, `humidity`, `cloudiness`, `data forecasted time`
- [x] Write test program of mini-project against what you think it can be tested

All test files are written in *[filename]*.test.js format. In the front end world, unit testing are done from two point of views:

  1. User interfaces
  2. Data flow

#### Snapshopt testing on UI

When coping with the unit testing for UI, I use `Snapshot` testing which is particularly provided by Jest. Jest take the snapshot of the UI components, and when those UI change unexpectedly, the test case fails.

```js
  test('renders correctly', () => {
      const tree = renderer.create(
        <WeatherBoard />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
```

What Jest does is transfering the UI components to a JSON tree and makes the components to be comparable.

#### Async functions testing

Functions like HTTP api calls are asynchronous, and it is impossible to make a real request via the internet because unit tests should be isolated. Therefore, I use `mock` function to replace them with a fake, callable, and predictable `fetch`.

```js
  test('should response weather info which exists', async () => {
    fetch.mockResponse(JSON.stringify(cityInfo.taiwan));
    await expect(fetchCurrentWeatherByCityName('taiwan')).resolves.toEqual(cityInfo.taiwan);
  });
```

Please check the source codes for more detail.

## License

MIT by [@xJkit](https://github.com/xJkit)