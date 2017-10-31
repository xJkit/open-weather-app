import React from 'react';
import renderer from 'react-test-renderer';
import WeatherBoard from './index';

describe('WeatherBoard', () => {
  test('sanity check', () => {
    expect(1).toBe(1);
  });

  test('renders correctly', () => {
    const tree = renderer.create(
      <WeatherBoard />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
