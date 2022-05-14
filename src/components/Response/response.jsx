import React from "react";
import "./response.scss";

export default function Response(props) {
  const string = props.res;
  let formattedPrompt = "";
  let formattedResponse = "";

  if (props.profile.name === "Marv") {
    formattedPrompt = string
      .substring(
        string.indexOf("You:"),
        string.indexOf(`${props.profile.name}:`)
      )
      .split(":")[1]
      .trim();
    formattedResponse = string
      .substring(string.indexOf(`${props.profile.name}:`), string.length)
      .split(":")[1]
      .trim();
  } else {
    formattedPrompt = string.split("\n\n")[0];
    formattedResponse = string.split("\n\n")[1];
  }

  return (
    <div className="response">
      <div className="response__top">
        <h3 className="response__subtitle">Prompt:</h3>
        <p className="response__prompt">{formattedPrompt}</p>
      </div>
      <div className="response__bottom">
        <h3 className="response__subtitle">Answer:</h3>
        <p className="response__answer">{formattedResponse}</p>
      </div>
    </div>
  );
}
