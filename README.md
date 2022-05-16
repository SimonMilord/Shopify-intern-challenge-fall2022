# Shopify Intern Challenge Fall 2022 : Bot-pedia


## Challenge Overview

Write an app that sends plain text prompts to the [OpenAI](https://openai.com/api/) API and displays the results in a list.

The app should have a simple-to-use interface that includes the following:
* A form for entering text prompts
* Submitting the form sends the prompt to the OpenAI API
* Results are displayed in a list, sorted from newest to oldest. Each result should include the original prompt and a response from the API.

### Technical Requirements
* Results should come from OpenAI’s completions API
* Each result should include at least the original prompt you entered and the response from the API
* Responses should be stored in order of newest to oldest
* The HTML that ends up being served client-side should be accessible and semantic

## My Approach

### App Architechture
Talk about how I built the app, components

### Functionalities
* Localstorage to Save responses if the user leaves or reloads the page
* Clear button to clear both storage and the list on the DOM
* Made the app more specific to a single purpose (with the Q&A bots)

## Usability & Accessibility considerations
Talk about user experience, design, semantic HTML, lighthouse score, keyboard support, etc.

## Demo

[Click here](https://bot-pedia.netlify.app/) if you want to see the deployed version.

## Screenshots

Insert screenshots here

## Tech Stack

* [React.js](https://reactjs.org/)<br>
* [React Router library](https://reactrouter.com/)<br>
* [Sass](https://sass-lang.com/)<br>
* [Axios](https://axios-http.com/)<br>
* [Open AI API](https://openai.com/api/)

## Environment Variables

REACT_APP_API_URL= https://api.openai.com/v1/engines/text-curie-001/completions
<br>
REACT_APP_API_KEY= "enter your api key here"
<br>

I decided to go with the text-curie-001 engine here since it had a better balance between speed, cost and accuracy.

## Usage / Run locally

To run this project locally, follow these steps:

Clone the repository:
<br>
`$ git clone https://github.com/SimonMilord/Shopify-intern-challenge-fall2022.git`

Install dependencies:
<br>
`$ npm install`

Run locally:
<br>
`$ npm start`

## Next Steps

I believe the application can be improved further. Given more time, I would have added more types of "bots" that would
do more than giving the right answers or answering sarcastically and reluctantly. The Open AI API has wide range of interesting
completions that would make for cool bots such as a movie to emoji translator or an Analogy maker. Another feature I would add would be a temperature slider. This feature would enable the user to change the amount of "Risks" the AI takes in the model, leading to a narrower or wider range of potential answers.

## Contact

This web app was designed and developed by Simon Milord.

Feel free to follow me on [Github](https://github.com/SimonMilord) or [LinkedIn](https://www.linkedin.com/in/simonmilord/)