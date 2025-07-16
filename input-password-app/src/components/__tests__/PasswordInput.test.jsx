/// <reference types="vitest" />
import React from 'react';
import { test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import PasswordInput from '../PasswordInput';

// 🛠 Fallback: create a global document if it's missing
if (typeof document === 'undefined') {
  const { JSDOM } = await import('jsdom');
  globalThis.window = new JSDOM('').window;
  globalThis.document = window.document;
  globalThis.navigator = window.navigator;
}

test('calls handleChange on input change', () => {
  const consoleSpy = vi.spyOn(console, 'log');
  render(<PasswordInput />);
  
  const input = screen.getByPlaceholderText(/enter password/i);
  fireEvent.change(input, { target: { value: '123' } });
  
  expect(consoleSpy).toHaveBeenCalledWith("Entering password...");
});
