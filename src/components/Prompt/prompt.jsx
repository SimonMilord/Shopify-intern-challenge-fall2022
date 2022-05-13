import React, { useState } from "react";
import "./prompt.scss";

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

  return (
    <section className="prompt">
      <form className="prompt__form" onSubmit={handleSubmit}>
        <textarea
          className="prompt__textarea"
          id="input"
          placeholder="Enter a question for Marv here!"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          name="input"
        ></textarea>
        <button className="prompt__submit" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
