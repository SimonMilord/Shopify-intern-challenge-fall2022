import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import jarvisPic from "../../assets/images/jarvis.webp";
import awesomOPic from "../../assets/images/awesom-o.webp";

export default function Header(props) {
  return (
    <header className="header">
      <div className="header__inner">
        {props.awesomo ? (
          <>
            <img
              className="header__profile"
              src={awesomOPic}
              alt="awesom-o profile"
            ></img>
            <h1 className="header__title">{props.awesomo.title}</h1>
          </>
        ) : (
          <>
            <img
              className="header__profile"
              src={jarvisPic}
              alt="jarvis profile"
            ></img>
            <h1 className="header__title">{props.jarvis.title}</h1>
          </>
        )}
      </div>
      <Link className="header__back" to="/" tabIndex={0}>
        Go Back
      </Link>
    </header>
  );
}
