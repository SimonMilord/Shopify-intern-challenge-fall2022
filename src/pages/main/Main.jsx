import { Link } from "react-router-dom";
import BotCard from "../../components/BotCard/botCard";
import "./Main.scss";
import React from "react";
import jarvisPic from "../../assets/images/jarvis.webp";
import awesomOPic from "../../assets/images/awesom-o.webp";

export default function Main(props) {
  document.title = "Bip Bop";

  return (
    <main className="main">
      <div className="main__instructions">
        <h1 className="main__title">Welcome to GPT-3 Bot-pedia</h1>
        <h2 className="main__subtitle">Please choose a bot</h2>
      </div>
      <section className="card-box">
        <Link to="/awesomo" className="cardLink">
          <BotCard name={"Awesom-O"} picture={awesomOPic} />
        </Link>
        <Link to="/jarvis" className="cardLink">
          <BotCard name={"Jarvis"} picture={jarvisPic} />
        </Link>
      </section>
    </main>
  );
}
