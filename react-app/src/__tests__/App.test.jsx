import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('renders without errors', () => {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.find('.app');
    expect(appComponent).toHaveLength(1);
  });
});
