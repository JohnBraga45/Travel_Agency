import * as React from 'react';
  
import { Link } from 'react-router-dom'
 
function Navbar   ()   {
  return (
    <header className='header'>
      <ul>
        <li>
        <Link className='links' to='/'> Home </Link>
        </li>
      </ul>

      <nav className='navbar'>
        <ul>
          <li>
          <Link className='links' to='/login'> Entrar </Link>
          </li>
          <li>
          <Link className='links' to='/signup'>Cadastrar </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
