import React from "react";
import "./prompt.scss";

export default function Prompt(props) {
  return (
    <section className="prompt">
      <form className="prompt__form">
        <textarea
          className="prompt__textarea"
          placeholder="Enter a prompt here"
        ></textarea>
        <button className="prompt__submit" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
