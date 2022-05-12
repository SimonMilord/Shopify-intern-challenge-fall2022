import React from 'react';
import './response.scss';

export default function Response(props) {
  return (
    <div className='response'>
      <div className='response__top'>
        <h3 className='response__subtitle'>Prompt:</h3>
        <p className='response__prompt'>Who was Isaac Newton?</p>
      </div>
      <div className='response__bottom'>
        <h3 className='response__subtitle'>Answer:</h3>
        <p className='response__answer'>The inventor of the Newton fig cookies</p>
      </div>
    </div>
  );
}

