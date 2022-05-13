import React from 'react';
import './response.scss';

export default function Response(props) {

  const string = props.res;
  let formattedPrompt = string.substring(string.indexOf("You:"),string.indexOf("Marv:")).split(":")[1].trim();
  let formattedResponse = string.substring(string.indexOf("Marv:"),string.length).split(":")[1].trim();;

  return (
    <div className='response'>
      <div className='response__top'>
        <h3 className='response__subtitle'>Prompt:</h3>
        <p className='response__prompt'>{formattedPrompt}</p>
      </div>
      <div className='response__bottom'>
        <h3 className='response__subtitle'>Answer:</h3>
        <p className='response__answer'>{formattedResponse}</p>
      </div>
    </div>
  );
}

