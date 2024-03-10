import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FilterForm from './FilterForm';

test('FilterForm renders and can submit filters', () => {
  const applyFilters = jest.fn();
  render(<FilterForm applyFilters={applyFilters} />);

  fireEvent.change(screen.getByLabelText(/Fire Status:/i), { target: { value: 'Out' } });
  fireEvent.click(screen.getByText(/Apply Filter/i));

  expect(applyFilters).toHaveBeenCalledWith({
    fireStatus: 'Out',
    fireCause: '',
    geographicDescription: '',
  });
});
