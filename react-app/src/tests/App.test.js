import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
import { Catalog } from './components/Catalog/Catalog';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders the search box', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.search-box')).to.have.lengthOf(1);
  });

  it('passes the search value to the Catalog component', () => {
    const wrapper = shallow(<App />);
    const catalog = wrapper.find(Catalog);
    expect(catalog.prop('searchValue')).to.equal(wrapper.state('searchValue'));
  });
});