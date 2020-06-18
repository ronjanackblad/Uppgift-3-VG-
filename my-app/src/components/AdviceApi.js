import React, { useState, useEffect } from 'react';
import Axios from 'axios';


export default (props) => {
    const [advice, setAdvice] = useState('')
    const [randomAdvice, setRandomAdvice] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        setAdvice('')
        setRandomAdvice('')
        if (props.advice === 'random') {
            getRandomData();
        } else {
            getSearchedData();
        }
    }, [props.advice]);

    const getSearchedData = async () => {
        const query = props.advice
        const url = `https://api.adviceslip.com/advice/search/${query}`
        await Axios.get(url)
            .then((result) => {
                console.log(result);
                setAdvice(result.data.slips);
                setError(result.data.message.text)
            })
            .catch(error => {
                console.log('Something went wrong:', error);
            });
    };

    const getRandomData = async () => {
        const url = `https://api.adviceslip.com/advice`
        await Axios.get(url)
            .then((result) => {
                console.log(result);
                setRandomAdvice(result.data.slip.advice);
            })
            .catch(error => {
                console.log('Something went wrong:', error);
            });
    };

    return (
        <div>
            {advice ? advice.map((item, i) => <li key={i}>{item.advice}</li>) : <p>{error}</p>}
            {randomAdvice ? <p>{randomAdvice}</p> : <p></p>}
        </div>
    )
}
