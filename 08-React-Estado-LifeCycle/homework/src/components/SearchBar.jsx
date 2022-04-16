import React, {useState} from 'react';
import './seachbar.css'

export default function SearchBar({onSearch}) {
  // acá va tu código

  const[input, setInput] = useState('')
   function onSubmit(e) {
    e.preventDefault();
    if(!input) return alert ("debes escribir algo")
    else {
      onSearch(input);
      setInput('')
    }
  }
  const onInputChange = (e) => {
    setInput(e.target.value)
  }
  return  (
    <form onSubmit={(e) =>  onSubmit(e)}>
      <input
      value={input}
      onChange={(e)=> onInputChange(e)}
        type="text"
        placeholder="Ciudad..."
        
      />
      <input type="submit" value="Agregar" />
    </form>
  )
};