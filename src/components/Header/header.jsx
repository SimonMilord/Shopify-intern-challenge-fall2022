import React from 'react';
import './header.scss';

export default function Header(props) {

  return (
    <header className='header'>
      <div className='header__inner'>
        <h1 className='header__title'>Marv, the (not so useful) bot</h1>
        <button className='header__toggle'>Change to Kevin</button>
      </div>
    </header>
  );
}

