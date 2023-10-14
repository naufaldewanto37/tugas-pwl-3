import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('checks if header is in the document', () => {
  render(<App />);
  const header = screen.getByText(/This is Header/i);
  expect(header).toBeInTheDocument();
});
