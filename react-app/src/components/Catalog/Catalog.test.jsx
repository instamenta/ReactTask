import React from 'react';
import { getAllByTestId, getByText, render, screen, fireEvent } from '@testing-library/react';
import { Catalog } from './Catalog';
import '@testing-library/jest-dom';

const userDataArray = [
  {
    firstName: 'John',
    lastName: 'Doe',
    available: true,
    phone: '123-456-7890',
    email: 'john.doe@example.com',
    image: 'https://via.placeholder.com/150',
    location: 'New York, NY',
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    available: false,
    phone: '987-654-3210',
    email: 'jane.doe@example.com',
    image: 'https://via.placeholder.com/150',
    location: 'San Francisco, CA',
  },
];

describe('Catalog', () => {
  test('renders catalog with empty string should return all cards', () => {
    const { getByTestId } = render(<Catalog props={''} />);
    const catalog = getByTestId('catalog');
    expect(catalog).toBeInTheDocument();
    expect(catalog.children.length).toBe(26);
  });
  test('renders catalog with no matches should return no cards', () => {
    const { getByTestId } = render(<Catalog props={'notfound1'} />);
    const catalog = getByTestId('catalog');
    expect(catalog).toBeInTheDocument();
    expect(catalog.children.length).toBe(0);
  });
  test('renders catalog component with no props should return no cards', () => {
    const { getByTestId } = render(<Catalog />);
    const catalog = getByTestId('catalog');
    expect(catalog).toBeInTheDocument();
    expect(catalog.children.length).toBe(0);
  });
  test('renders catalog component with object should return no cards', () => {
    const { getByTestId } = render(<Catalog props={{}} />);
    const catalog = getByTestId('catalog');
    expect(catalog).toBeInTheDocument();
    expect(catalog.children.length).toBe(0);
  });
  test('renders catalog component with array should return no cards', () => {
    const { getByTestId } = render(<Catalog props={[]} />);
    const catalog = getByTestId('catalog');
    expect(catalog).toBeInTheDocument();
    expect(catalog.children.length).toBe(0);
  });
  test('renders catalog component with match should return cards', () => {
    const { getByTestId } = render(<Catalog props={'kimb'} />);
    const catalog = getByTestId('catalog');
    expect(catalog).toBeInTheDocument();
    expect(catalog.children.length).toBe(2);
  });
  test('renders catalog component with all caps should return cards', () => {
    const { getByTestId } = render(<Catalog props={'VERLA'} />);
    const catalog = getByTestId('catalog');
    expect(catalog.children.length).toBe(2);
  });
  test('renders catalog component with mixed caps should return cards', () => {
    const { getByTestId } = render(<Catalog props={'VeRlA'} />);
    const catalog = getByTestId('catalog');
    expect(catalog.children.length).toBe(2);
  });

  test('on hover card should display phone details', () => {
    render(<Catalog props="Verla" />);
    const cardContainer = screen.getByTestId('catalog');
    const card = cardContainer.children[0];
    fireEvent.mouseEnter(card);
    const phone = screen.queryAllByText('phone: +359 496 2656')[0]
    expect(phone).toBeInTheDocument();
  });
  test('on hover card should display email details', () => {
    render(<Catalog props="Verla" />);
    const cardContainer = screen.getByTestId('catalog');
    const card = cardContainer.children[0];
    fireEvent.mouseEnter(card);
    const email = screen.queryAllByText('email: Verla0@releva.ai')[0]
    expect(email).toBeInTheDocument();
  });
});
