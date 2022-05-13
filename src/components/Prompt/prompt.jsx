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
      <h2 className="prompt__title">Enter a prompt for Marv</h2>
      <form className="prompt__form" onSubmit={handleSubmit}>
        <textarea
          className="prompt__textarea"
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
          {/* <button className="prompt__submit prompt__submit--lazy" onClick={handleSubmit} name="lazy" type="submit">
            Feeling lazy
          </button> */}
        </div>
      </form>
    </section>
  );
}
