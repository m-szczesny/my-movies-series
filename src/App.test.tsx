import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { server } from './test/server';
import App from './App';

// establish API mocking before all tests
beforeAll(() => server.listen());
// clean up once the tests are done
afterAll(() => server.close());

test('Renders expected quantity of items, with image url from config', async () => {
  render(<App />);
  const movieImages = await screen.findAllByAltText('illustration') as HTMLImageElement[];
  expect(movieImages).toHaveLength(20);
  expect(movieImages[0]?.src).toContain('http://image.tmdb.org');
});

test('Loads series selection on switch to tv', async () => {
  render(<App />);
  fireEvent.click(await screen.findByText('Séries'));
  expect(await screen.findByText('Squid Game')).toBeInTheDocument();
});

test('Loads search results on query type', async () => {
  render(<App />);
  fireEvent.click(await screen.findByText('Séries'));
  fireEvent.change(screen.getByPlaceholderText('Rechercher'), {target: {value: 'witcher'}});
  const results = await screen.findAllByText(/Witcher/);
  expect(results).toHaveLength(4);
});

