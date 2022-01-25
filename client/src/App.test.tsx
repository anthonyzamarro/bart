import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

render(<App />);
test('app loads correctly', () => {
  expect(screen.getByTestId('app')).toBeInTheDocument();
});

test('clicking button loads gag', () => {
  render(<App />);
  const button = screen.getByTestId('button')
  expect(button).toBeInTheDocument();
});