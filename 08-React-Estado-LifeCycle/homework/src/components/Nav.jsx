import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className='navbar'>
      <div id='logoHenry'>
        <img src={Logo} alt="" />
      </div>
      <div className='elements'>  
       <h2>Henry Weather App</h2>
      </div>
      <div className='busqueda'>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Nav;
