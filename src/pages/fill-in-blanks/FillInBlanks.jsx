import { useState } from "react";
import { Sidebar } from "../../component";

const questions = [
  {
    question: "What is the implicit binding of `this` in the following code?",
    code: `const person = {
  name: 'John',
  greet() {
    console.log('Hello, my name is', this.name);
  }
};
person.greet();`,
    choices: ["person", "name", "greet", "console.log"],
    answer: "person",
  },
  {
    question: "What is the explicit binding of `this` in the following code?",
    code: `function greet() {
  console.log('Hello, my name is', this.name);
}
const person = { name: 'John' };
greet.call(person);`,
    choices: ["greet", "console.log", "person", "name"],
    answer: "person",
  },
  {
    question: "What is the implicit binding of `this` in the following code?",
    code: `class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log('Hello, my name is', this.name);
  }
}
const person = new Person('John');
person.greet();`,
    choices: ["Person", "constructor", "person", "greet"],
    answer: "person",
  },
  {
    question: "What is the explicit binding of `this` in the following code?",
    code: `function greet() {
  console.log('Hello, my name is', this.name);
}
const person = { name: 'John' };
const boundGreet = greet.bind(person);
boundGreet();`,
    choices: ["console.log", "person", "name", "greet.bind"],
    answer: "person",
  },
  {
    question: 'What does the acronym "IIFE" stand for?',
    code: "",
    choices: [
      "Immediately Invoked Function Expression",
      "Intermediate Inference Function Engine",
      "Internal Inline Function Execution",
      "Infinite Iteration For Everything",
    ],
    answer: "Immediately Invoked Function Expression",
  },
  {
    question: "What is the purpose of using an IIFE?",
    code: "",
    choices: [
      "To avoid global namespace pollution",
      "To create a named function",
      "To make code more readable",
      "To declare variables globally",
    ],
    answer: "To avoid global namespace pollution",
  },
  {
    question: "What is the syntax for defining an IIFE?",
    code: "",
    choices: [
      "function() { }",
      "function iife() { }",
      "(() => { })()",
      "All of the above",
    ],
    answer: "(() => { })()",
  },
  {
    question: "What does the following IIFE return?",
    code: `const result = (() => {
  const x = 10;
  const y = 5;
  return x + y;
})();`,
    choices: ["5", "10", "15", "undefined"],
    answer: "15",
  },
  {
    question: "What does the following IIFE return?",
    code: `const result = (() => {
  const x = 10;
  const y = 5;
  return x - y;
})();`,
    choices: ["5", "10", "-5", "undefined"],
    answer: "5",
  },
  // add more questions here
];

export const FillInBlanks = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setCorrectAnswers(correctAnswers + 1);
      // setCurrentQuestion(currentQuestion + 1);
    }
    setSelectedAnswer(answer);
  };
  // const handleAnswerClick = (answer) => {
  //   if (answer === questions[currentQuestion].answer) {
  //     setCorrectAnswers(correctAnswers + 1);
  //     setCurrentQuestion(currentQuestion + 1);
  //   }
  // };
  return (
    <div className="flex h-screen">
      <div className="flex-none bg-gray-200 w-1/6">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col gap-5 p-8">
        <div className="row-span-1 welcome-text text-3xl flex p-5 justify-center text-center items-center">
          Let's play
          <span className="font-bold text-xl p-2 text-blue-400">
            fill in the blanks!
          </span>
        </div>
  
        {currentQuestion === questions.length ? (
          <div className="score-modal bg-white rounded-md p-10 mx-5">
            <h2 className="text-xl mb-4">
              Your Score: {correctAnswers} out of {questions.length}
            </h2>
            <button onClick={() => window.location.reload()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
              Play Again
            </button>
          </div>
        ) : (
          <div className="installation-info flex-1 flex flex-col items-center bg-slate-200 rounded-md p-10 mx-5">
            <h2 className="text-xl mb-4">
              {questions[currentQuestion].question}
            </h2>
            <pre className="font-mono text-lg mb-4">
              {questions[currentQuestion].code}
            </pre>
            <div className="flex p-10">
              {questions[currentQuestion].choices.map((choice) => (
                <button
                  key={choice}
                  onClick={() => handleAnswerClick(choice)}
                  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 ${
                    selectedAnswer === choice ? "bg-green-500" : ""
                  }`}
                >
                  {choice}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 ${
                selectedAnswer !== null ? "" : "cursor-not-allowed opacity-50"
              }`}
              disabled={selectedAnswer === null}
            >
              Go to Next Question
            </button>
          </div>
        )}
  
      </div>
    </div>
  );
  
  
};
