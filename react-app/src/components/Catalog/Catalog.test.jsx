import React from 'react';
import { render } from '@testing-library/react';
import { Catalog } from './Catalog';
import '@testing-library/jest-dom';
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
    const { container } = render(<Catalog />);
    const catalogComponent = container.querySelector('.catalog');
    expect(catalogComponent).toBeInTheDocument();
  });

  it('displays all cards if no search query is provided', () => {
    const { container } = render(<Catalog />);
    const cardComponents = container.querySelectorAll('.card');
    expect(cardComponents).toHaveLength(4);
  });

  it('filters the cards based on the search query', () => {
    const { container } = render(<Catalog query="Doe" userDataArray={userDataArray} />);
    const cardComponents = container.querySelectorAll('.card');
    expect(cardComponents).toHaveLength(2);
  });
});
