import './index.css';
import React, { useState } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [lowercase, setLowercase] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  return (
    <div className="container">
      <h1>Password Generator</h1>
      <div className="password-generator">
        <p className="generated-password">Generated Password</p>
        <form action="">
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
              onChange={(e) => setLength(e.target.value)}
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

          <button type="submit">Suggest strong password</button>
        </form>
      </div>
    </div>
  );
}

export default App;
