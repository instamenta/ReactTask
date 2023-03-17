import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Catalog from '../src/Catalog';

describe('Catalog', () => {
  test('renders all users by default', () => {
    render(<Catalog />);
    const cardContainers = screen.getAllByRole('card-container');
    expect(cardContainers.length).toBe(4); // Assuming there are 4 users in userDataArray
  });

  test('filters users based on search string', () => {
    render(<Catalog />);
    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'John' } });
    const cardContainers = screen.getAllByRole('card-container');
    expect(cardContainers.length).toBe(1);
    const fullname = screen.getByText(/John Doe/);
    expect(fullname).toBeInTheDocument();
  });
});
