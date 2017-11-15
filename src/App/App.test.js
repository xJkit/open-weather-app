import React from 'react';
import { shallow, mount } from 'enzyme';
import moment from 'moment';
import sinon from 'sinon';
import App from './index';

describe('App component class', () => {
  test('renders without crashing', () => {
    shallow(<App />);
  });

  test('renders dom that contains app title', () => {
    const AppWrapper = shallow(<App />);
    const hello = <h1 className="App-title">Welcome to Open Weather App</h1>;
    expect(AppWrapper.contains(hello)).toEqual(true);
  });

  test('should correctly format K degree to celsius ', () => {
    const AppWrapper = shallow(<App />);
    expect(AppWrapper.instance().formatDegreeToCelsius(273.15)).toEqual(0);
    expect(AppWrapper.instance().formatDegreeToCelsius(275)).toEqual(1);
  });

  test('should have initial states on mount', () => {
    const AppWrapper = shallow(<App />);
    expect(AppWrapper.state().name).toEqual('');
    expect(AppWrapper.state().temp).toEqual('');
    expect(AppWrapper.state().temp_min).toEqual('');
    expect(AppWrapper.state().temp_max).toEqual('');
    expect(AppWrapper.state().humidity).toEqual('');
    expect(AppWrapper.state().clouds).toEqual(0);
    expect(AppWrapper.state().description).toEqual('');
    expect(AppWrapper.state().forecastTime).toEqual(moment(Date.now(App)).format('YYYY 年 MM 月 DD 日'));
  });

  /**
   * Asynchronouns calls testing
   */
  test('should call fetch on component mount', () => {
    global.fetch = sinon.stub();
    mount(<App />);
    expect(fetch.callCount).toEqual(1);
  });
});