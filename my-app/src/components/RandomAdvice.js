import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default (props) => {
  // Component that handles API calls for random advice

  const getRandomData = async () => {
    const url = `https://api.adviceslip.com/advice`
    await Axios.get(url)
      .then((result) => {
        props.setRandomAdvice(result.data.slip.advice)
        props.setAdvice(null);
        props.setError('')
      })
      .catch(error => {
        console.log('Something went wrong:', error);
      });
  };

  return (
    <div>
      <button className="m-2 btn btn-info" onClick={getRandomData}>Get a random advice</button>
    </div>
  )
}
