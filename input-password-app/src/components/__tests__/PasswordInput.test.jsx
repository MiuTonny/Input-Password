import React from 'react';
import { test, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import PasswordInput from '../PasswordInput';

test('calls handleChange on input change', () => {
  const consoleSpy = vi.spyOn(console, 'log');

  const { container } = render(<PasswordInput />);
  const input = container.querySelector('input[type="password"]');

  fireEvent.change(input, { target: { value: '123' } });

  expect(consoleSpy).toHaveBeenCalledWith("Entering password...");
});
