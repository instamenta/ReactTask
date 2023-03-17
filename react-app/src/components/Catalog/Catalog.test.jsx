import React from 'react';
import { shallow } from 'enzyme';
import { Catalog } from './Catalog';

describe('Catalog component', () => {
  const userDataArray = [
    {
      firstName: 'John',
      lastName: 'Doe',
      available: true,
      phone: '1234567890',
      email: 'john.doe@example.com',
      image: 'https://example.com/image.jpg',
      location: 'New York, USA',
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      available: false,
      phone: '1234567890',
      email: 'jane.doe@example.com',
      image: 'https://example.com/image.jpg',
      location: 'Los Angeles, USA',
    },
  ];

  it('renders without errors', () => {
    const wrapper = shallow(<Catalog />);
    const catalogComponent = wrapper.find('.catalog');
    expect(catalogComponent).toHaveLength(1);
  });

  it('displays all cards if no search query is provided', () => {
    const wrapper = shallow(<Catalog />);
    const cardComponents = wrapper.find('.card');
    expect(cardComponents).toHaveLength(4);
  });

  it('filters the cards based on the search query', () => {
    const wrapper = shallow(<Catalog query="Rod" userDataArray={userDataArray} />);
    const cardComponents = wrapper.find('.card');
    expect(cardComponents).toHaveLength(1);
  });
});
