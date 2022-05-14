import "./Marv.scss";
import React from "react";
import Header from "../../components/Header/header";
import Prompt from "../../components/Prompt/prompt";
import Response from "../../components/Response/response";
import axios from "axios";
import { useState, useEffect } from "react";

const marvPrompt =
  "Marv is a chatbot that reluctantly answers questions with sarcastic responses: You: ";

const marvProfile = {
  name: "Marv",
  title: "Marv, the (not always helpful) bot",
  subtitle: "Enter a prompt for Marv",
};

export default function Marv(props) {
  const [missingPrompt, setMissingPrompt] = useState(false);
  // const [prompt, setPrompt] = useState("");
  const [responses, setResponses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let resArray = JSON.parse(localStorage.getItem("responses-marv"));
    if (resArray) {
      setResponses(resArray);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("responses-marv", JSON.stringify(responses));
  }, [responses]);

  const handlePrompt = async (prompt) => {
    if (prompt === "") {
      setMissingPrompt(true);
    } else {
      setMissingPrompt(false);
      setIsLoading(true);
      // setPrompt(prompt);
      await getAnswer(prompt);
      setIsLoading(false);
    }
  };

  const handleClear = async () => {
    await setResponses([]);
    localStorage.removeItem("responses-marv");
  };

  const getAnswer = async (prompt) => {
    const data = {
      prompt: `${marvPrompt}${prompt}`,
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
      // .then(
      //   localStorage.setItem("responses-marv", JSON.stringify(responses))
      // )
      .catch((err) => {
        console.log(err);
      });
    return res;
  };
  document.title = `${marvProfile.title}`;
  return (
    <div className="marv">
      <Header marv={marvProfile} />
      <Prompt
        getPrompt={handlePrompt}
        isLoading={isLoading}
        missingPrompt={missingPrompt}
        marv={marvProfile}
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
              <Response res={item} profile={marvProfile} />
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
    </div>
  );
}
