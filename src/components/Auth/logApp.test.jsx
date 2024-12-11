import { render, screen } from '@testing-library/react';
import LogApp from './logApp';

test('renders learn react link', () => {
  render(<LogApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
