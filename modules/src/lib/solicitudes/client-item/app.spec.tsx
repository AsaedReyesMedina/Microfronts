import { render } from '@testing-library/react';
import ClientItem from './clientitem';

describe('ClientItem', () => {
  it('se renderiza correctamente', () => {
    const { getByText } = render(<ClientItem />);
    expect(getByText('client item component')).toBeTruthy();
  });
});