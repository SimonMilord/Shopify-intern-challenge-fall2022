import "./botCard.scss";
import React from "react";

export default function BotCard(props) {
  return (
    <div className="card">
      <img src={props.picture} className="card__image" alt="Robot profile"/>
      <h2 className="card__name">{props.name}</h2>
      {props.name === "Awesom-O" ?
      <h3 className="card__desc">(The not always helpful bot)</h3> :
      <h3 className="card__desc">(The a lot more helpful bot)</h3>
    }
    </div>
  );
}
