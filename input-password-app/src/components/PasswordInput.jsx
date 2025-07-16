import React, { useState } from 'react';

function PasswordInput() {
  const [entered, setEntered] = useState(false);

  function handleChange() {
    setEntered(true);
  }

  return (
    <>
      <input
        type="password"
        placeholder="Enter password"
        onChange={handleChange}
        data-testid="password-input"
      />
      {entered && <p data-testid="status">Password being entered...</p>}
    </>
  );
}

export default PasswordInput;
