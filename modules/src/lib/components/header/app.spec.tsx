import { render } from '@testing-library/react';
import Header from './header';

test('renders Header component', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/Header component/i);
  expect(linkElement).not.toBeNull();
});