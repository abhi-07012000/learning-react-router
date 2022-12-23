/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <>
    <header>
      <a to="#">Logo</a>
      <nav>
        <ul>
          <li>
            <Link to='/' >Home</Link>
            </li>
            <li>
            <Link to='/about'>About</Link>
            </li>
            <li>
            <Link to='/contact' >Contact</Link>
            </li>

        </ul>



      </nav>




    </header>
    </>
  )
}

export default Home