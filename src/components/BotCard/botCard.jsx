import './botCard.scss';
import React from 'react';

export default function BotCard(props) {
  return (
    <div className='card'>
      <button>{props.name}</button>
    </div>
  );
}

