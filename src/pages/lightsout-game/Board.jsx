import React, { useState } from "react";
import "./Board.css";
import { Cell } from "./Cell";
import { LightsOut } from "../../component/questions/lights-out/LightsOut";

export const Board = ({ size }) => {
  let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  function moveToNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // update state with new value
    } else {
      setCurrentQuestionIndex(0); // start from beginning if at end of questions array
    }
  }
  
  
  const questions = [
    {
      question: "What is explicit binding in JavaScript?",
      choices: [
        "When the this keyword refers to the global object",
        "When this is explicitly defined using the bind, call, or apply methods",
        "When this refers to the object that contains the function being called",
        "When this is determined based on where the function is called in the code",
      ],
      answer: "When this is explicitly defined using the bind, call, or apply methods",
    },
    {
      question: "What is implicit binding in JavaScript?",
      choices: [
        "When this is determined based on where the function is called in the code",
        "When this is explicitly defined using the bind, call, or apply methods",
        "When the this keyword refers to the global object",
        "When this refers to the object that contains the function being called",
      ],
      answer: "When this refers to the object that contains the function being called",
    },
    {
      question: "What is an IIFE in JavaScript?",
      choices: [
        "A function that takes another function as its argument",
        "A function that is defined inside another function",
        "A function that is immediately invoked upon being defined",
        "A function that returns another function",
      ],
      answer: "A function that is immediately invoked upon being defined",
    },
    {
      question: "What does the bind method do in JavaScript?",
      choices: [
        "Binds a function to a new this context",
        "Calls a function with a given this context",
        "Copies an object's own enumerable properties to a new object",
        "Converts a value to a string",
      ],
      answer: "Binds a function to a new this context",
    },
    {
      question: "What does the call method do in JavaScript?",
      choices: [
        "Binds a function to a new this context",
        "Calls a function with a given this context",
        "Copies an object's own enumerable properties to a new object",
        "Converts a value to a string",
      ],
      answer: "Calls a function with a given this context",
    },
    {
      question: "What does the apply method do in JavaScript?",
      choices: [
        "Binds a function to a new this context",
        "Calls a function with a given this context",
        "Copies an object's own enumerable properties to a new object",
        "Converts a value to a string",
      ],
      answer: "Calls a function with a given this context",
    },
    {
      question:
        "What is the result of calling Function.prototype.bind on a function?",
      choices: [
        "A new function with the same code as the original function",
        "A new function that has its own this context",
        "A new function that is immediately invoked",
        "A new function that can be used to create new objects",
      ],
      answer: "A new function that has its own this context",
    },
    {
      question:
        "What is the result of calling Function.prototype.call on a function?",
      choices: [
        "A new function with the same code as the original function",
        "A new function that has its own this context",
        "A new function that is immediately invoked",
        "The function is called with a specified this context",
      ],
      answer: "The function is called with a specified this context",
    },
    {
      question:
        "What is the result of calling Function.prototype.apply on a function?",
      choices: [
        "A new function with the same code as the original function",
        "A new function that has its own this context",
        "A new function that is immediately invoked",
        "The function is called with a specified this context and arguments as an array andmake this as a javascript array of objects with 9 objects and each object has questions, and choices and then a correct answer",
      ],
      answer: "The function is called with a specified this context and arguments as an array andmake this as a javascript array of objects with 9 objects and each object has questions, and choices and then a correct answer",
    },
  ];

  const createGrid = () =>
    new Array(size)
      .fill()
      .map((r) => new Array(size).fill().map((c) => Math.random() < 0.4));

  const [board, setBoard] = useState(createGrid());
  const [showQuestionModal, setShowQuestionModal] = useState(false);

  const toggleLights = (row, col) => {
    if (showQuestionModal) {
      return;
    }

    const copy = [...board.map((r) => [...r])];

    copy[row][col] = !copy[row][col];
    if (row < size - 1) copy[row + 1][col] = !copy[row + 1][col];
    if (row > 0) copy[row - 1][col] = !copy[row - 1][col];
    if (col < size - 1) copy[row][col + 1] = !copy[row][col + 1];
    if (col > 0) copy[row][col - 1] = !copy[row][col - 1];

    setShowQuestionModal(true);
    setBoard(copy);
  };

  const handleQuestionModalClose = () => {
    setShowQuestionModal(false);
    setCurrentQuestionIndex(currentQuestionIndex => currentQuestionIndex + 1);
  };

  const handleQuestionModalSubmit = () => {
    setShowQuestionModal(false);
    moveToNextQuestion();
  };

  const gameEnds = () => {
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if (board[row][col]) {
          // There is at least one cell that is still on
          return false;
        }
      }
    }
    // All cells are off, so the game has been won
    return true;
  };

  return (
    <div className="Board">
      {gameEnds() ? (
        <div className="won">You won!</div>
      ) : (
        <>
          {showQuestionModal && (
            <LightsOut
              onClose={handleQuestionModalClose}
              modalChange={handleQuestionModalSubmit}
                question={questions[currentQuestionIndex].question}
                choices = {questions[currentQuestionIndex].choices}
                answer = {questions[currentQuestionIndex].answer}
            />
          )}
          {board.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
              {row.map((_, colIndex) => (
                <Cell
                  key={`${rowIndex}-${colIndex}`}
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                  isOn={board[rowIndex][colIndex]}
                  toggleLights={toggleLights}
                />
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
};
