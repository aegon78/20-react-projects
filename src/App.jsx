import './index.css';
import { nums, lower, upper, syms } from './data';
import React, { useState } from 'react';

function App() {
  const [pLength, setpLength] = useState(8);
  const [lowercase, setLowercase] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  const generatePassword = () =>{
    let generatedPassword = ''
    if (lowercase) generatedPassword += lower
    if (uppercase) generatedPassword += upper
    if (numbers) generatedPassword += nums
    if (symbols) generatedPassword += syms
    setPassword(createPassword(generatedPassword))
  }

  const createPassword = (generatedPassword) =>{
    let password = ''
    const generatedPasswordLength = generatedPassword.length
    for(let i = 0; i < pLength; i++){
      const passwordIndex = Math.floor(Math.random() * generatedPasswordLength) 
      password += generatedPassword.toString().charAt(passwordIndex)
    }
    return password
    
  }

  return (
    <div className="container">
      <h1>Password Generator</h1>
      <div className="password-generator">
        <p className="generated-password">{password}</p>
        <form onSubmit={handleSubmit}>
          <article>
            <label htmlFor="password-length">Password Length</label>
            <input
              type="number"
              name="password-length"
              id="password-length"
              min="8"
              max="20"
              placeholder="8-20"
              defaultValue={length}
              onChange={(e) => setpLength(e.target.value)}
            />
          </article>
          <article>
            <label htmlFor="lowercase">Lowercase Letters</label>
            <input
              type="checkbox"
              name="lowercase"
              id="lowercase"
              checked={lowercase}
              onChange={(e) => setLowercase(e.target.checked)}
            />
          </article>

          <article>
            <label htmlFor="uppercase">Uppercase Letters</label>
            <input
              type="checkbox"
              name="uppercase"
              id="uppercase"
              checked={uppercase}
              onChange={(e) => setUppercase(e.target.checked)}
            />
          </article>

          <article>
            <label htmlFor="numbers">Numbers</label>
            <input
              type="checkbox"
              name="numbers"
              id="numbers"
              checked={numbers}
              onChange={(e) => setNumbers(e.target.checked)}
            />
          </article>

          <article>
            <label htmlFor="symbols">Symbols</label>
            <input
              type="checkbox"
              name="symbols"
              id="symbols"
              checked={symbols}
              onChange={(e) => setSymbols(e.target.checked)}
            />
          </article>

          <button onClick={generatePassword} type="submit">Suggest strong password</button>
        </form>
      </div>
    </div>
  );
}

export default App;
