import React, {useState, useEffect, useCallback} from 'react';
import './App.css';
import JokeApi from './components/JokeApi'
import Form from './components/Form'

function App() {
  const [hero, getHero] = useState(null)
  return (
    <div className="App">
      <Form />
      <JokeApi />
    </div>
  );
}

export default App;
