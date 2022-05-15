import React, { useState } from "react";
import "./prompt.scss";
import BouncingLoader from "../BouncingLoader/bouncingLoader";

export default function Prompt(props) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await props.getPrompt(prompt);
    resetForm();
  };

  const resetForm = () => {
    setPrompt("");
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <section className="prompt">
      {props.awesomo ? (
        <h2 className="prompt__title">{props.awesomo.subtitle}</h2>
      ) : (
        <h2 className="prompt__title">{props.jarvis.subtitle}</h2>
      )}
      <span
        className={
          props.missingPrompt ? "prompt__error" : "prompt__error--hidden"
        }
      >
        Please enter a prompt before submitting
      </span>
      <form className="prompt__form" onSubmit={handleSubmit}>
        <label className="prompt__label" name="prompt">
          Prompt
        </label>
        <textarea
          className={
            props.missingPrompt
              ? "prompt__textarea prompt__textarea--error"
              : "prompt__textarea"
          }
          id="input"
          placeholder="Ex: Where are they taking the hobbits?"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyPress}
          name="input"
        ></textarea>
        <div className="prompt__buttons">
          {props.isLoading === false ? (
            <button
              className="prompt__submit prompt__submit--typed"
              type="submit"
            >
              Submit
            </button>
          ) : (
            <BouncingLoader />
          )}
        </div>
      </form>
    </section>
  );
}
