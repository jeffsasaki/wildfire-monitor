import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FilterForm from './FilterForm';

describe('FilterForm', () => {
  test('submits correct filter values', () => {
    const applyFiltersMock = jest.fn();
    render(<FilterForm applyFilters={applyFiltersMock} />);

    fireEvent.change(screen.getByLabelText(/Fire Status:/i), { target: { value: 'Out' } });
    fireEvent.change(screen.getByLabelText(/Fire Cause:/i), { target: { value: 'Lightning' } });
    fireEvent.change(screen.getByLabelText(/Geographic Description:/i), { target: { value: 'Vancouver' } });
    fireEvent.submit(screen.getByRole('button', { name: /Apply Filter/i }));

    expect(applyFiltersMock).toHaveBeenCalledWith({
      fireStatus: 'Out',
      fireCause: 'Lightning',
      geographicDescription: 'Vancouver',
    });
  });
});
