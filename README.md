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
