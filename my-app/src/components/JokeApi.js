import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

export default function JokeApi() {
    const [advice, setAdvice] = useState(null)
    const [error, setError] = useState('')
    const url = `https://api.adviceslip.com/advice`

    useEffect(() => {
        getData();
    }, []);
    
    const getData = async () => {
        await Axios.get(url)
            .then((result) => {
                setAdvice(result.data.slip.advice);
            })
            .catch(error => {
                setError("FEL")
            });
    };

    return (
        <div>
            <p className="p-4">{advice}</p>
        </div>
    )
}
