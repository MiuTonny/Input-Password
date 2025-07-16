import { useState } from 'react'
import PasswordInput from './components/PasswordInput'
import SubmitButton from './components/SubmitButton'
import './App.css'

function App() {
  return (
    <div>
      <h1>Password entry</h1>
      <PasswordInput />
      <SubmitButton />
    </div>
  );
}
export default App
