import { Sidebar, TicTacToe } from "../../component";
import { Square } from "./Square";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useScores } from "../../context/ScoreContext";
import {
  JsQuestions,
  PyQuestions,
} from "../../contents/tictactoe-questions/tittactoeQuestions";
const defaultSquares = () => new Array(9).fill(null);


export const TttGame = () => {
  const {scores, setScores} = useScores();
  const [showModal, setShowModal] = useState(false);
  const [squares, setSquares] = useState(defaultSquares());
  const [currScore, setCurrScore] = useState(0);
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

  const updateScore = (newLevel1Score) => {
    setScores((prevScores) => {
      const newTotal = prevScores.total - prevScores.level1 + newLevel1Score;
      return {
        ...prevScores,
        level1: newLevel1Score,
        total: newTotal,
      };
    });
  };
  
  

  useEffect(() => {
    updateScore(currScore);

    const isComputerTurn =
      squares.filter((square) => square !== null).length % 2 === 1;

    let emptyIndex = squares
      .map((square, index) => (square === null ? index : null))
      .filter((item) => item !== null);

    const playerWon = linesThatAre("X", "X", "X").length > 0;
    const computerWon = linesThatAre("O", "O", "O").length > 0;

    if (playerWon) {
      setCurrScore(currScore => currScore + 5);
      updateScore(currScore);
      setHasWon(true);
      console.log(scores);
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
          {hasWon && <h1 className="pb-5">{winner} won the game!</h1>}
          {hasWon && <Link
          className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          to={`/progress/${language}/lvl2`}
          role="button"
        >
          Proceed to next Level
        </Link>}
        </div>
      </div>
    </div>
  );
};
