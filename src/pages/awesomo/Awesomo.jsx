import "./Awesomo.scss";
import React from "react";
import Header from "../../components/Header/header";
import Prompt from "../../components/Prompt/prompt";
import Response from "../../components/Response/response";
import axios from "axios";
import { useState, useEffect } from "react";

const awesomOPrompt =
  "Marv is a chatbot that reluctantly answers questions with sarcastic responses: You: ";

const awesomOProfile = {
  name: "Awesom-O",
  title: "Awesom-O, the (not always helpful) bot",
  subtitle: "Enter a prompt for Awesom-O",
};

export default function Marv(props) {
  const [missingPrompt, setMissingPrompt] = useState(false);
  const [responses, setResponses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let resArray = JSON.parse(localStorage.getItem("responses-awesomo"));
    if (resArray) {
      setResponses(resArray);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("responses-awesomo", JSON.stringify(responses));
  }, [responses]);

  const handlePrompt = async (prompt) => {
    if (prompt === "") {
      setMissingPrompt(true);
    } else {
      setMissingPrompt(false);
      setIsLoading(true);
      await getAnswer(prompt);
      setIsLoading(false);
    }
  };

  const handleClear = async () => {
    await setResponses([]);
    localStorage.removeItem("responses-awesomo");
  };

  const getAnswer = async (prompt) => {
    const data = {
      prompt: `${awesomOPrompt}${prompt}`,
      temperature: 0.6,
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
    return res;
  };
  document.title = `${awesomOProfile.title}`;
  return (
    <main className="awesomo">
      <Header awesomo={awesomOProfile} />
      <Prompt
        getPrompt={handlePrompt}
        isLoading={isLoading}
        missingPrompt={missingPrompt}
        awesomo={awesomOProfile}
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
              <Response res={item} profile={awesomOProfile} />
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
