import React from 'react';

export function handleChange() {
  console.log("Entering password...");
}

function PasswordInput() {
  return (
    <input
      type="password"
      placeholder="Enter password"
      onChange={handleChange}
    />
  );
}

export default PasswordInput;
