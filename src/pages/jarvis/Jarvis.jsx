import "./Jarvis.scss";
import React from "react";
import Header from "../../components/Header/header";
import Prompt from "../../components/Prompt/prompt";
import Response from "../../components/Response/response";
import axios from "axios";
import { useState, useEffect } from "react";

const jarvisProfile = {
  name: "Jarvis",
  title: "Jarvis, the (a lot more helpful) bot",
  subtitle: "Enter a prompt for Jarvis",
};

export default function Jarvis(props) {
  const [missingPrompt, setMissingPrompt] = useState(false);
  const [responses, setResponses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let resArray = JSON.parse(localStorage.getItem("responses-jarvis"));
    if (resArray) {
      setResponses(resArray);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("responses-jarvis", JSON.stringify(responses));
  }, [responses]);

  const handlePrompt = async (prompt) => {
    if (prompt === "") {
      setMissingPrompt(true);
    } else {
      setMissingPrompt(false);
      setIsLoading(true);
      await getAnswer(prompt);
      localStorage.setItem("responses-jarvis", JSON.stringify(responses));
      setIsLoading(false);
    }
  };

  const handleClear = async () => {
    await setResponses([]);
    localStorage.removeItem("responses-jarvis");
  };

  const getAnswer = async (prompt) => {
    const data = {
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 64,
      echo: true,
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
      .then(async (res) => {
        await setResponses((responses) => [
          res.data.choices[0].text,
          ...responses,
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  document.title = `${jarvisProfile.title}`;
  return (
    <main className="jarvis">
      <Header jarvis={jarvisProfile} />
      <Prompt
        getPrompt={handlePrompt}
        isLoading={isLoading}
        missingPrompt={missingPrompt}
        jarvis={jarvisProfile}
      />
      <section className="responses">
        {responses[0] === undefined ? (
          <></>
        ) : (
          <h2 className="responses__title">Responses</h2>
        )}
        <ul className="responses__list">
          {responses.map((item, index) => (
            <li className="responses__item" key={index} tabIndex={0}>
              <Response res={item} profile={jarvisProfile} />
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
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
