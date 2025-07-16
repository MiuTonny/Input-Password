import { test, expect, vi } from 'vitest';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PasswordInput, { handleChange } from '../PasswordInput';


if (typeof document === 'undefined') {
  const { JSDOM } = await import('jsdom');
  const { window } = new JSDOM('<!doctype html><html><body></body></html>');
  globalThis.window = window;
  globalThis.document = window.document;
  globalThis.navigator = window.navigator;
}

test('calls handleChange on input change', () => {
  const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  const handlerSpy = vi.spyOn(console, 'log'); 

  const { container } = render(<PasswordInput />);
  const input = container.querySelector('input[type="password"]');

  fireEvent.change(input, { target: { value: 'abc123' } });

  expect(logSpy).toHaveBeenCalledWith("Entering password...");
  expect(handlerSpy).toHaveBeenCalled(); 
});
