import { Link } from "react-router-dom";
import BotCard from "../../components/BotCard/botCard";
import "./Main.scss";
import React from "react";

export default function Main(props) {
  document.title = "Bip Bop";

  return (
    <div className="main">
      <div className="main__instructions">
        <h1 className="main__title">Welcome to GPT-3 Bot-pedia</h1>
        <h2 className="main__subtitle">Please choose a bot</h2>
      </div>
      <section className="card-box">
        <Link to="/marv" className="cardLink">
          <BotCard name={"Marv"} />
        </Link>
        <Link to="/harry" className="cardLink">
          <BotCard name={"Harry"} />
        </Link>
      </section>
    </div>
  );
}
