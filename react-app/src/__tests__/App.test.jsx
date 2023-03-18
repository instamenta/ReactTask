import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';
describe('App component', () => {
  it('renders without errors', () => {
    render(<App />);
    const appComponent = screen.getByTestId('app');
    expect(appComponent).toBeInTheDocument();
  });
});
