import React, { useState } from 'react'
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

export default (props) => {
    // Component that handles the API request when user searches for advices
    const [searchAdvice, setSearchAdvice] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        if (searchAdvice) {
            getSearchedData();
            setSearchAdvice('')
        } else {
            window.alert('You have to enter something in the searchfield')
        }
    }
    const handleChange = (e) => {
        e.preventDefault();
        setSearchAdvice(e.target.value)
    }

    const getSearchedData = async () => {
        const query = searchAdvice
        const url = `https://api.adviceslip.com/advice/search/${query}`
        await Axios.get(url)
            .then((result) => {
                props.setRandomAdvice(null)
                props.setAdvice(result.data.slips);
                props.setError(result.data.message.text)
            })
            .catch(error => {
                console.log('Something went wrong:', error);
            });
    };

    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={onSubmit} className="d-flex justify-content-center">
                <input
                    type='text'
                    name='searchAdvice'
                    value={searchAdvice}
                    placeholder='Search advice..'
                    onChange={handleChange}
                    className="m-2 input-group-text w-50" id="inputGroup-sizing-sm"></input>
                <button className="m-2 btn btn-success">Get advice</button>
            </form>
        </div>
    )
}
