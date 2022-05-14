import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="header">
      <div className="header__inner">
        {props.marv ? (
          <h1 className="header__title">{props.marv.title}</h1>
        ) : (
          <h1 className="header__title">{props.harry.title}</h1>
        )}
        <Link className="header__back" to="/" tabIndex={0}>
          Go Back
        </Link>
      </div>
    </header>
  );
}
