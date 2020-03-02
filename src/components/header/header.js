import React from 'react';
import Search from '../Search/Search'
import { NavLink } from 'react-router-dom'
import './header.css'

export const Header = () => {
  return (
    <header>
      <div className='header-container'>
        <h1>Movie Tracker</h1>
        <NavLink className='nav' to='/watchlist'>Watchlist</NavLink>
      </div>
      <Search />
    </header>
  )
}