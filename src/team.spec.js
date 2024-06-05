import React from 'react';
import { getAllByText, getByText, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for the toBeInTheDocument matcher
import "@testing-library/jest-dom"
import Team from './Team'; // Adjust the import based on the actual location of your Team component

test('renders an input element', () => {
  const { getByRole } = render(<Team />);
  const input = getByText(/Team/); // 'textbox' is the correct role for an input element
  expect(input).toBeInTheDocument();
});