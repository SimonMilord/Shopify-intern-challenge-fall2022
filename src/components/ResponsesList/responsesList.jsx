import React, { useState, useEffect } from "react";
import "./responsesList.scss";
import Response from "../Response/response";

export default function ResponsesList(props) {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    if (props.responses) {
      setResponses(props.responses);
    }
  }, [props.responses]);

  return (
    <section className="responses">
      {responses[0] === undefined ? (
        <></>
      ) : (
        <h2 className="responses__title">Responses</h2>
      )}
      <ul className="responses__list">
        {props.responses && props.responses.map((item, index) => (
          <li
            className="responses__item"
            key={index}
            tabIndex={0}
            data-testid="response"
          >
            <Response res={item} profile={props.profile} />
          </li>
        ))}
      </ul>
      {responses[0] === undefined ? (
        <div className="noclear"></div>
      ) : (
        <div className="clear">
          <button
            className="responses__clear"
            type="button"
            onClick={props.clear}
          >
            Clear
          </button>
        </div>
      )}
    </section>
  );
}
