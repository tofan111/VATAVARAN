import React , { useState } from 'react'
import "../styles/searchBar.css"


const Search = ({ setCity }) => {
    const [input, setInput] = useState('');

    const handleForm = (e) => {
        e.preventDefault();
        setInput(e.target.value);
        setCity(input);
        setInput('');
    }
       
       
  return (
    <>
        <form onSubmit={handleForm} className="search-bar">
            <input 
                type="text"
                placeholder='city name...'
                className='input'
                value={input}
                onChange={(e) => setInput(e.target.value)} 
            />
            <button onClick={handleForm} className="button">FIND</button>
        </form>
    </>
  )
}

export default Search