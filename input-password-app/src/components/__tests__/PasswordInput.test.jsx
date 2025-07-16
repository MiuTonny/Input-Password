import { test, expect } from 'vitest';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import PasswordInput from '../PasswordInput';

test('displays feedback when typing in password input', () => {
  render(<PasswordInput />);
  const input = screen.getByTestId('password-input');
  fireEvent.change(input, { target: { value: '123' } });

  const message = screen.getByTestId('status');
  expect(message).toBeInTheDocument();
  expect(message.textContent).toMatch(/password being entered/i);
});

