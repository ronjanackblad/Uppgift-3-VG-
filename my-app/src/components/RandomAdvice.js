import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { CircularProgress } from '@material-ui/core';

export default (props) => {
  // Component that handles API calls for random advice
  const [loading, setLoading] = useState(false)

  const getRandomData = async () => {
    setLoading(true)
    const url = `https://api.adviceslip.com/advice`
    await Axios.get(url)
      .then((result) => {
        props.setAdvice(result.data.slip.advice);
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
      });
  };

  return (
    <div>
      <button className="m-2 btn btn-info" onClick={getRandomData}>Get a random advice</button>
      {loading && <CircularProgress />}
    </div>
  )
}
