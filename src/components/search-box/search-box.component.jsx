import React from 'react';
import './search-box.styles.css'

const SeachBox = ({placeholder, handleChange}) => {
    return(
        <input 
        className="search" 
        type="search" 
        placeholder={ placeholder }
        onChange={ handleChange }            
        />
    )
}

export default SeachBox;