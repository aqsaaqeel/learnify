import { Sidebar, TicTacToe } from "../../component";
import { Square } from "./Square";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  JsQuestions,
  PyQuestions,
} from "../../contents/tictactoe-questions/tittactoeQuestions";
const defaultSquares = () => new Array(9).fill(null);

export const TttGame = () => {
  const [showModal, setShowModal] = useState(false);
  const [squares, setSquares] = useState(defaultSquares());
  const [currentSquareIndex, setCurrentSquareIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [hasWon, setHasWon] = useState(false);
  const [winner, setWinner] = useState("");
  const { language } = useParams();
  let questions;

  if (language === "javascript") {
    questions = JsQuestions;
  } else if (language === "python") {
    questions = PyQuestions;
  }
  console.log(JsQuestions, PyQuestions);
  console.log(questions);

  // const questions = [
  //   { Ques: "What is a variable?", Ans: "storage" },
  //   {
  //     Ques: "What are the three keywords for declaring variables in JavaScript?",
  //     Ans: "let const var",
  //   },
  //   {
  //     Ques: "Are let and const block-scoped or function-scoped?",
  //     Ans: "block scoped",
  //   },
  //   {
  //     Ques: "Are var variables block-scoped or function-scoped?",
  //     Ans: "function scoped",
  //   },
  // ];

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function linesThatAre(a, b, c) {
    return lines.filter((squareIndex) => {
      const squareValues = squareIndex.map((index) => squares[index]);
      return (
        JSON.stringify([a, b, c].sort()) === JSON.stringify(squareValues.sort())
      );
    });
  }

  const putComputer = (index) => {
    let newSquares = [...squares];
    newSquares[index] = "O";
    setSquares(newSquares);
  };

  useEffect(() => {
    const isComputerTurn =
      squares.filter((square) => square !== null).length % 2 === 1;

    let emptyIndex = squares
      .map((square, index) => (square === null ? index : null))
      .filter((item) => item !== null);

    const playerWon = linesThatAre("X", "X", "X").length > 0;
    const computerWon = linesThatAre("O", "O", "O").length > 0;

    if (playerWon) {
      setHasWon(true);
      setWinner("Player");
      return;
    }

    if (computerWon) {
      setHasWon(true);
      setWinner("Computer");
    }

    if (isComputerTurn) {
      const winningLines = linesThatAre("O", "O", null);
      if (winningLines.length > 0) {
        const winIndex = winningLines[0].filter(
          (index) => squares[index] === null
        )[0];
        if (!hasWon) {
          putComputer(winIndex);
        }
        return;
      }
      let randomIndex =
        emptyIndex[Math.floor(Math.random() * emptyIndex.length)];

      setTimeout(() => {
        putComputer(randomIndex);
      }, 2000);
    }
  }, [squares]);

  const handleSquareClick = (index) => {
    const isPlayerTurn =
      squares.filter((square) => square !== null).length % 2 === 0;
    if (isPlayerTurn) {
      setCurrentSquareIndex(index);
      setShowModal(true);
    }
  };

  const handleAnswer = (userAnswer) => {
    if (userAnswer === questions[currentQuestionIndex].Ans) {
      setShowModal(false);
      let newSquares = [...squares];
      newSquares[currentSquareIndex] = "X";
      setSquares(newSquares);
      setCurrentQuestionIndex(
        (currentQuestionIndex) => currentQuestionIndex + 1
      );
    } else {
      alert("wrong answer");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex-none bg-gray-200 w-1/6">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col gap-5 p-8">
        <div className="row-span-1 welcome-text text-3xl flex p-5 justify-center text-center items-center">
          Let's play
          <span className="font-bold text-xl p-2 text-blue-400">
            tic-tac-toe!
          </span>
        </div>

        <div className="installation-info flex-1 flex flex-col items-center bg-slate-200 rounded-md p-10 mx-5">
          <h1 className="text-4xl">
            You are{" "}
            <span className="font-bold text-4xl p-2 text-blue-400">X!</span>
          </h1>
          <div className="tictac-table p-5 m-5 text-5xl grid grid-cols-3 align-middle grid-rows-3">
            {squares.map((square, index) => (
              <Square
                key={index}
                value={{ x: square === "X", o: square === "O" }}
                onClick={() => handleSquareClick(index)}
              />
            ))}
            {showModal && (
              <TicTacToe
                onAnswer={handleAnswer}
                modalChange={() => setShowModal(false)}
                question={questions[currentQuestionIndex].Ques}
              />
            )}
          </div>{" "}
          {console.log(winner)}
          {hasWon && <h1>{winner} won the game!</h1>}
        </div>
      </div>
    </div>
  );
};
