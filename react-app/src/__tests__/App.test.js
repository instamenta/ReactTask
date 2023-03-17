/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import { Catalog } from '../components/Catalog/Catalog';

import React from 'react';
import { render, screen } from '@testing-library/react';


test('renders search box', () => {
  render(<App />);
  const searchBoxElement = screen.getByPlaceholderText('Search');
  expect(searchBoxElement).toBeInTheDocument();
});

test('passes search value to Catalog component', () => {
  render(<App />);
  const searchValue = 'test search';
  const searchBoxElement = screen.getByPlaceholderText('Search');
  const catalogComponent = screen.getByTestId('catalog-component');

  // Type a search value into the search box
  searchBoxElement.value = searchValue;
  searchBoxElement.dispatchEvent(new Event('input'));

  // Expect the search value to be passed to the Catalog component
  expect(catalogComponent).toHaveAttribute('searchValue', searchValue);
});