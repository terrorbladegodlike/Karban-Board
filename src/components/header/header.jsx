import React from 'react';
import Account from './account/account';
import './header.css';

function Header () {
  return (
      <header className = 'header'>
        <h1 className = 'header__title'>Awesome Kanban Board</h1>
        <Account />
      </header>
  )
}

export default Header;