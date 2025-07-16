import { render, screen, fireEvent } from '@testing-library/react';
import PasswordInput from '../PasswordInput';

test('calls handleChange on input change', () => {
  const consoleSpy = vi.spyOn(console, 'log');
  render(<PasswordInput />);
  
  const input = screen.getByPlaceholderText(/enter password/i);
  fireEvent.change(input, { target: { value: '123' } });
  
  expect(consoleSpy).toHaveBeenCalledWith("Entering password...");
});
