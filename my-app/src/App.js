import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import RandomAdvice from './components/RandomAdvice'
import SearchAdvice from './components/SearchAdvice'
import Title from './components/Title'
import { set } from 'animejs';

function App() {
  // Main component that renders out the API components and displays result 
  const [advice, setAdvice] = useState('');
  const [randomAdvice, setRandomAdvice] = useState('');
  const [error, setError] = useState('');

  return (
    <div className="App">
      <Title />
      <div className="d-flex flex-row justify-content-center">
        <SearchAdvice setAdvice={setAdvice} setError={setError} setRandomAdvice={setRandomAdvice}/>
        <RandomAdvice setRandomAdvice={setRandomAdvice} setAdvice={setAdvice} setError={setError}/>
      </div>
      <p className="font-italic font-weight-lighter">Search examples: 'friend', 'love', 'time' or 'spiders'</p>
      {advice ? advice.map((item, i) => <li key={i}>{item.advice}</li>): <p></p>}
      {randomAdvice ? <p>{randomAdvice}</p> : <p></p>}
      {error ? <p>{error}</p> : <p></p>}
    </div>
  );
}

export default App;
