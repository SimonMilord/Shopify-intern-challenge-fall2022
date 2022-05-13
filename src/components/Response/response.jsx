import React from 'react';
import './response.scss';

export default function Response(props) {
  return (
    <div className='response'>
      <div className='response__top'>
        <h3 className='response__subtitle'>Prompt:</h3>
        <p className='response__prompt'>{props.prompt}</p>
      </div>
      <div className='response__bottom'>
        <h3 className='response__subtitle'>Answer:</h3>
        <p className='response__answer'>{props.res}</p>
      </div>
    </div>
  );
}

