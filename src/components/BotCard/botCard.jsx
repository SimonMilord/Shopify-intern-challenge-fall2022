import "./botCard.scss";
import React from "react";

export default function BotCard(props) {
  return (
    <div className="card">
      <h2 className="card__name">{props.name}</h2>
    </div>
  );
}
