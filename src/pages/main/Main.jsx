import { Link } from "react-router-dom";
import BotCard from '../../components/BotCard/botCard';
import './Main.scss';
import React from 'react';

export default function Main(props) {
  document.title = "Bip Bop";

  return (
    <div className="main">
      <section className="card-box">
        <Link to="/marv">
          <BotCard name={"Marv"}/>
        </Link>
        <Link to="/harry">
          <BotCard name={"Harry"}/>
        </Link>
      </section>
    </div>
  );
}

