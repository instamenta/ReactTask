import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

describe('App component', () => {
  test('renders App component', () => {
    render(<App />);
    const linkElement = screen.getByTestId('logo');
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Catalog component', () => {
    render(<App />);
    const catalogElement = screen.getByTestId('catalog');
    expect(catalogElement).toBeInTheDocument();
  });

  test('search functionality filters results when input matches exactly', () => {
    render(<App />);
    const searchInput = screen.getByTestId('search');
    fireEvent.change(searchInput, { target: { value: 'verla' } });
    const verlaCard = screen.queryAllByText(`Verla Schroeder`);
    expect(verlaCard[0]).toBeInTheDocument();
    const janeCard = screen.queryByText(/Jane Smith/);
    expect(janeCard).not.toBeInTheDocument();
  });
  test('search functionality filters results when input removed', () => {
    render(<App />);
    const searchInput = screen.getByTestId('search');
    const verlaCard = screen.queryAllByText(`Verla Schroeder`);
    expect(verlaCard[0]).toBeInTheDocument();
    fireEvent.change(searchInput, { target: { value: 'verlan' } });
    expect(verlaCard[0]).not.toBeInTheDocument();
  });
  test('search functionality filters results when input removed', () => {
    render(<App />);
    const searchInput = screen.getByTestId('search');
    const verlaCardIntial = screen.queryAllByText(`Verla Schroeder`);
    expect(verlaCardIntial[0]).toBeInTheDocument();
    fireEvent.change(searchInput, { target: { value: 'verla' } });
    const verlaCardBefore = screen.queryAllByText(`Verla Schroeder`);
    expect(verlaCardBefore[0]).toBeInTheDocument();
    fireEvent.change(searchInput, { target: { value: 'verlan' } });
    const verlaCardAfter = screen.queryAllByText(`Verla Schroeder`);
    expect(verlaCardAfter.length).toBe(0);
  });
});
