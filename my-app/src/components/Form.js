import React, {useState} from 'react'

export default function Form() {
    const [searchAdvice, setSearchAdvice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearchAdvice(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type='text'
                name='searchAdvice'
                value={searchAdvice}
                placeholder='What do you need advice about?'
                onChange={handleChange}></input>
                <button>Get advice</button>
            </form>
        </div>
    )
}
