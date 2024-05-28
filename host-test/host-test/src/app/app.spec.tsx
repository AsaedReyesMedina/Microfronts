import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render Header and ClientItem components', () => {
    const { getByText } = render(<App />);
    
    const headerElement = getByText(/Header component/gi);
    const clientItemElement = getByText(/client item component/gi);
    
    expect(headerElement).toBeDefined();
    expect(clientItemElement).toBeDefined();
  });
});