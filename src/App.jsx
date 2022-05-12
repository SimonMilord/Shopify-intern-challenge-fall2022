import './App.scss';
import Header from './components/Header/header';
import Prompt from './components/Prompt/prompt';
import Response from './components/Response/response';
import axios from 'axios';
// import {useState, useEffect} from 'react';

export default function App() {

  return (
    <div className="App">
      <Header />
      <Prompt />
      <section className='responses'>
        <h2 className='responses__title'>Responses</h2>
        <ul className='responses__list'>
          <li className='responses__item'>
            <Response />
          </li>
        </ul>
      </section>
    </div>
  );
}
