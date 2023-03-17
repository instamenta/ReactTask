import React from 'react';
import { render,screen } from 'react-test-renderer';
import { Catalog } from './Catalog';

// 1
describe('Catalog', () => {
    it('renders correctly', () => {
        const component = render(<Catalog />);
        expect(component).toMatchSnapshot();
    });
});

// 2
describe('Catalog', () => {
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

    it('filters the data correctly', () => {
        const component = render(<Catalog props="john" userDataArray={userDataArray} />);
        expect(component.toJSON().children).toHaveLength(1);
    });
});
// 3

describe('Catalog component', () => {
    it('renders without errors', () => {
      render(<Catalog props="" />);
      expect(screen.getByTestId('catalog-container')).toBeInTheDocument();
    });
  
    it('displays all cards if no search query is provided', () => {
      render(<Catalog props="" />);
      expect(screen.getAllByTestId('card')).toHaveLength(4);
    });
  
    it('filters the cards based on the search query', () => {
      render(<Catalog props="Rod" />);
      expect(screen.getAllByTestId('card')).toHaveLength(1);
    });
  });
//   In this example, the first test ensures that the component renders without errors by checking if the catalog-container element is in the document. The second test checks if all cards are displayed when no search query is provided, and the third test checks if the cards are filtered correctly based on the search query "Rod".
  
//   To run these tests, you can use the npm test command. Jest will automatically find and run all test files in your project.
  
//   Note that this is just an example, and you'll need to customize the tests to match the specific behavior and requirements of your application. Additionally, you may want to consider using a testing library like Enzyme or Cypress to add more advanced testing capabilities to your project.
  
  
  
  
  
  