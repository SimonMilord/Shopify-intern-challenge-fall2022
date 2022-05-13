import "./Harry.scss";
import React from "react";
import Header from "../../components/Header/header";
import Prompt from "../../components/Prompt/prompt";
import Response from "../../components/Response/response";
import axios from "axios";
import { useState, useEffect } from "react";

const harryPrompt = "";

const harryProfile = {
  title: "Harry, the (more useful) bot",
  subtitle: "Enter a prompt for Harry"
}

export default function Harry(props) {
  const [prompt, setPrompt] = useState("");
  const [responses, setResponses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let resArray = JSON.parse(localStorage.getItem("responses"));
    if (resArray) {
      setResponses(resArray);
    }
  }, []);

  const handlePrompt = async (prompt) => {
    setIsLoading(true);
    await setPrompt(prompt);
    await getAnswer(prompt);
    localStorage.setItem("responses", JSON.stringify(responses));
    setIsLoading(false);
  };

  const handleClear = async () => {
    await setResponses([]);
    localStorage.removeItem('responses');
  };

  const getAnswer = async (prompt) => {

    const data = {
      prompt: `${harryPrompt}${prompt}`,
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
  };
  document.title = `${harryProfile.title}`;
  return (
    <div className="harry">
      <Header harry={harryProfile}/>
      <Prompt getPrompt={handlePrompt}
      isLoading={isLoading}
      harry={harryProfile}
      />
      <section className="responses">
        <h2 className="responses__title">Responses</h2>
        <ul className="responses__list">
          {responses.map((item, index) => (
            <li className="responses__item" key={index}>
              <Response res={item} />
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
