import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import RandomAdvice from './components/RandomAdvice'
import SearchAdvice from './components/SearchAdvice'

function App() {
  const [advice, setAdvice] = useState('');
  const [randomAdvice, setRandomAdvice] = useState('');
  const [error, setError] = useState('');

  return (
    <div className="App">
      <h1>Need Advice?</h1>
      <RandomAdvice setAdvice={setRandomAdvice} />
      <SearchAdvice setAdvice={setAdvice} setError={setError} />
      {advice ? advice.map((item, i) => <li key={i}>{item.advice}</li>) : randomAdvice ? <p>{randomAdvice}</p> : error ? <p>{error}</p> : <p></p>}

    </div>
  );
}

export default App;
