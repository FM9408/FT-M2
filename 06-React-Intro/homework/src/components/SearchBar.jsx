import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  
  return (
    <div>
      <input type="text" placeholder='Ciudad' />
      <button type="submit" onClick={ () => props.onSearch('Barcelona')}>Agregar</button>
    </div>
  )
};