import "./App.scss";
import Header from "./components/Header/header";
import Prompt from "./components/Prompt/prompt";
import Response from "./components/Response/response";
import axios from "axios";
import { useState, useEffect } from "react";

const marvPrompt =
  "Marv is a chatbot that reluctantly answers questions with sarcastic responses: You: ";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState(""); // to change later to arr

  const handlePrompt = async (prompt) => {
    await setPrompt(prompt);
    getAnswer(prompt);
  };

  const getAnswer = async (prompt) => {
    const data = {
      prompt: `${marvPrompt}${prompt}`,
      temperature: 0.6,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    const res = await axios
      .post(
        "https://api.openai.com/v1/engines/text-curie-001/completions",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
      )
      .then((res) => {
        setResponse(res.data.choices[0].text);
        console.log(res.data.choices[0].text);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Header />
      <Prompt getPrompt={handlePrompt} />
      <section className="responses">
        <h2 className="responses__title">Responses</h2>
        <ul className="responses__list">
          <li className="responses__item">
            <Response prompt={prompt} res={response} />
          </li>
        </ul>
      </section>
    </div>
  );
}
