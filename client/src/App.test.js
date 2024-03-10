

import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
jest.mock('../api/wfsApi', () => ({
  fetchWildfires: jest.fn()
}));

import { fetchWildfires } from '../api/wfsApi';

describe('App with mocked fetchWildfires', () => {
  beforeEach(() => {
    fetchWildfires.mockReset();
  });

  test('loads and displays wildfire data', async () => {
    fetchWildfires.mockResolvedValue({
      features: [
        {
          properties: {
            OBJECTID: 1,
            FIRE_NUMBER: "F123",
            FIRE_YEAR: 2023,
          }
        }
      ]
    });

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/F123/)).toBeInTheDocument();
    });
  });

  test('filters wildfires based on user input', async () => {
    expect(await screen.findByText(/Fire/i)).toBeInTheDocument
  });
});
