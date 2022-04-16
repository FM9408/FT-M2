import React from 'react';
import './seachbar.css'

export default function SearchBar(props) {
  // acá va tu código
  return  (
    <div className='searchbar'>
      <input type="text" placeholder='Ciudad' />
      <button type="submit" onClick={ () => props.onSearch('Barcelona')}>Agregar</button>
    </div>
  )
};