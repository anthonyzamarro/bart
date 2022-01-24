import { render, screen } from '@testing-library/react';
import App from './App';

test('app loads correctly', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bart Simpson's Butt/i);
  expect(linkElement).toBeInTheDocument();
});
