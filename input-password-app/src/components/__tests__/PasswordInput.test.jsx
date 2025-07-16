import React from 'react';
import { test, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import PasswordInput from '../PasswordInput';


if (typeof document === 'undefined') {
  const { JSDOM } = await import('jsdom');
  const { window } = new JSDOM('<!doctype html><html><body></body></html>');
  globalThis.window = window;
  globalThis.document = window.document;
  globalThis.navigator = window.navigator;
}

test('displays feedback when typing in password input', () => {
  render(<PasswordInput />);
  const input = screen.getByPlaceholderText(/enter password/i);
  fireEvent.change(input, { target: { value: 'test123' } });

  const message = screen.getByText(/password being entered/i);
  expect(message).toBeInTheDocument();
});
