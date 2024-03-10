import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WildfireList from './WildfireList';

test('WildfireList displays wildfires correctly', () => {
  const wildfires = [{
    properties: {
      OBJECTID: 1,
      FIRE_NUMBER: "F123",
      FIRE_YEAR: 2023,
    }
  }];

  render(<WildfireList wildfires={wildfires} />);

  expect(screen.getByText('F123')).toBeInTheDocument()
});
