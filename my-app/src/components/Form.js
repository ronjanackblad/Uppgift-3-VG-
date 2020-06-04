import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default (props) => {
    const [searchAdvice, setSearchAdvice] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        if (searchAdvice) {
            props.setAdvice(searchAdvice);
        }
    }

    const onRandomSubmit = (event) => {
        event.preventDefault();
        props.setAdvice('random');
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearchAdvice(e.target.value)
    }

    return (
        <div className="d-flex justify-content-center w-100">
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
            <form onSubmit={onRandomSubmit}>
                <button className="m-2 btn btn-info">Get a random advice</button>
            </form>
        </div>
    )
}
