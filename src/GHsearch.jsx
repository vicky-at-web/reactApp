import { useState } from 'react';

export default function GHsearch({ search }) {
    const [term, setTerm] = useState("");

    const handleChange = (e) => {
        setTerm(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        search(term);
        setTerm("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input
            name='username'
            value={term}
            onChange={handleChange} 
            type="text" />
            <button style={{marginLeft: '20px'}}>Search!</button>
        </form>
    )
}