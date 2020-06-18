import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import RandomAdvice from './components/RandomAdvice'
import SearchAdvice from './components/SearchAdvice'
import Title from './components/Title'

function App() {
  // Main component that renders out the API components and displays result 
  const [advice, setAdvice] = useState('');
  const [randomAdvice, setRandomAdvice] = useState('');
  const [error, setError] = useState('');

  return (
    <div className="App">
      <Title />
      <div className="d-flex flex-row justify-content-center">
        <SearchAdvice setAdvice={setAdvice} setError={setError} />
        <RandomAdvice setAdvice={setRandomAdvice} />
      </div>
      {advice ? advice.map((item, i) => <li key={i}>{item.advice}</li>) : randomAdvice ? <p>{randomAdvice}</p> : error ? <p>{error}</p> : <p></p>}
    </div>
  );
}

export default App;
