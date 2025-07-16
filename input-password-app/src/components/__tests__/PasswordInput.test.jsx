import { test, expect, vi } from 'vitest';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PasswordInput from '../PasswordInput';

// Ensure jsdom window + document exist
if (typeof document === 'undefined') {
  const { JSDOM } = await import('jsdom');
  const { window } = new JSDOM('<!doctype html><html><body></body></html>');
  globalThis.window = window;
  globalThis.document = window.document;
  globalThis.navigator = window.navigator;
}

test('calls handleChange on input change', () => {
  const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {}); // spy before render

  const { container } = render(<PasswordInput />);
  const input = container.querySelector('input[type="password"]');

  fireEvent.change(input, { target: { value: 'abc123' } });

  expect(consoleSpy).toHaveBeenCalledWith("Entering password...");
});
