import React, {useState, useEffect, useCallback} from 'react';
import './App.css';
import AdviceApi from './components/AdviceApi'
import Form from './components/Form'

function App() {
  const [advice, setAdvice] = useState('')
  return (
    <div className="App">
      <h1>Need Advice?</h1>
      <Form setAdvice={setAdvice}/>
      <AdviceApi advice={advice}/>
    </div>
  );
}

export default App;
