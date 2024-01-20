// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./index.scss";

const questions = [
  {
    title: "What is React?",
    variants: ["Library", "Framework", "Application"],
    correct: 0,
  },
  {
    title: "What is a component in React?",
    variants: [
      "An application",
      "A part of an application or page",
      "Something I don't know about",
    ],
    correct: 1,
  },
  {
    title: "What does JSX stand for?",
    variants: [
      "It's simple HTML",
      "It's a function",
      "It's like HTML but with the ability to execute JS code",
    ],
    correct: 2,
  },
  {
    title: "What is the purpose of state in React?",
    variants: [
      "To store information that can change over time",
      "To define the structure of a component",
      "To handle routing in a React application",
    ],
    correct: 0,
  },
  {
    title: "What is a prop in React?",
    variants: [
      "A special kind of HTML tag",
      "A function",
      "A way to pass data between components",
    ],
    correct: 2,
  },
  {
    title: "What is the role of a lifecycle method in React?",
    variants: [
      "To handle HTTP requests",
      "To manage the lifecycle of a component",
      "To create styles for a component",
    ],
    correct: 1,
  },
  {
    title: "What is the purpose of the virtual DOM in React?",
    variants: [
      "To create virtual components",
      "To improve the performance of the DOM manipulation",
      "To visualize the structure of a React application",
    ],
    correct: 1,
  },
  {
    title: "What is Redux used for in React?",
    variants: [
      "To manage component states",
      "To handle asynchronous operations",
      "To manage the state of the entire application",
    ],
    correct: 2,
  },
  {
    title: "What are React hooks?",
    variants: [
      "They are tools for catching errors in React applications",
      "They are a way to manage the state and lifecycle features in functional components",
      "They are styling libraries for React components",
    ],
    correct: 1,
  },
  {
    title: "What is the significance of the key prop in React lists?",
    variants: [
      "It provides a unique identifier for each list item",
      "It is used to define the order of list items",
      "It is used for styling list items",
    ],
    correct: 0,
  },
];

function Result({ correctAnswer }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Right answers {correctAnswer} of {questions.length}
      </h2>
      <a href="/">
        <button>Try again</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((variant, index) => (
          <li key={variant} onClick={() => onClickVariant(index)}>
            {variant}
          </li>
        ))}
      </ul>
    </>
  );
}

export default function App() {
  const [step, setStep] = useState(0);
  const [correctAnswer, setcorrectAnswer] = useState(0);
  const question = questions[step];

  function onClickVariant(index) {
    console.log(step, index);
    setStep(step + 1);
    if (index === question.correct) setcorrectAnswer(correctAnswer + 1);
  }

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correctAnswer={correctAnswer} />
      )}

      <div className="sourceCodeLink">
        <a
          href="https://github.com/daryakut/react-quiz-game.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source Code on GitHub
        </a>
      </div>
    </div>
  );
}
