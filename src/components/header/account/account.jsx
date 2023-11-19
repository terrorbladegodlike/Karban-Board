import React, { useState } from 'react';
import './account.css';
import avatar from './avatar.svg';

function Account() {
  const [state, setState] = useState(true);

  return (
    <>
    <div className = 'account'>
        <button
            className = 'account__btn'
            onClick = {() => {setState(!state)}}>
            <img
            className = 'account__img'
            src = { avatar }
            alt = 'your avatar'/>
        </button>
        <div
            className = {state ? 'account__arrow' : 'account__arrow active'}
            onClick = {() => {setState(!state)}}>
        </div>
    </div>
    <nav className = {state ? 'dropdown' : 'dropdown active'}>
        <ul className = 'dropdown__list'>
            <li>
                <a className = 'dropdown__li' 
                onFocus = {() => {setState(!state)}} 
                href="/">
                Profile
                </a>
            </li>
            <li>
                <a className = 'dropdown__li' 
                onFocus = {() => {setState(!state)}} 
                href="/">
                Log Out
                </a>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Account;