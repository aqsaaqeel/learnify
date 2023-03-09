import { useState } from "react";
import { Sidebar, MemoryGame, WinningModal } from "../../component";
import { Card } from "./Card";
import "./lvl2.css";
export const Lvl2 = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [cardItem, setCardItem] = useState([
    {
      id: 2,
      name: "while loop",
      img: "https://i.ibb.co/nQXj19q/2.png",
      state: "",
      Ques: "What keyword is used to exit a while loop in JavaScript?",
      Ans: "break",
    },
    {
      id: 1,
      img: "https://i.ibb.co/m98KvkX/js-for-loop.png",
      state: "",
      Ques: "What keyword is used to go to the next iteration in a for loop in JavaScript?",
      Ans: "continue",
    },
    {
      id: 3,
      img: "https://i.ibb.co/0Xtcjty/3.png",
      state: "",
      Ques: "What kind of loop is the do-while loop?",
      Ans: "exit controlled",
    },
    {
      id: 8,
      img: "https://i.ibb.co/nBcMZBg/8.png",
      state: "",
      Ques: "What is the purpose of currying in JavaScript?",
      Ans: "abstraction",
    },
    {
      id: 2,
      img: "https://i.ibb.co/nQXj19q/2.png",
      state: "",
      Ques: "What keyword is used to exit a while loop in JavaScript?",
      Ans: "break",
    },
    {
      id: 4,
      img: "https://i.ibb.co/p03nkFx/4.png",
      state: "",
      Ques: "What type of dialog box is an alert box in JavaScript?",
      Ans: "modal",
    },
    {
      id: 6,
      img: "https://i.ibb.co/8Bkf2Vr/6.png",
      state: "",
      Ques: "What is the syntax for array destructuring in JavaScript?",
      Ans: "spread operator",
    },
    {
      id: 5,
      img: "https://i.ibb.co/HBrXCGC/5.png",
      state: "",
      Ques: "What data type does the prompt method return in JavaScript?",
      Ans: "string",
    },
    {
      id: 1,
      img: "https://i.ibb.co/m98KvkX/js-for-loop.png",
      state: "",
      Ques: "What keyword is used to go to the next iteration in a for loop in JavaScript?",
      Ans: "continue",
    },
    {
      id: 8,
      img: "https://i.ibb.co/nBcMZBg/8.png",
      state: "",
      Ques: "What is the purpose of currying in JavaScript?",
      Ans: "abstraction",
    },
    {
      id: 5,
      img: "https://i.ibb.co/HBrXCGC/5.png",
      state: "",
      Ques: "What data type does the prompt method return in JavaScript?",
      Ans: "string",
    },
    {
      id: 7,
      img: "https://i.ibb.co/7QL9Mn1/7.png",
      state: "",
      Ques: "What is the purpose of promises in JavaScript?",
      Ans: "asynchronous operations",
    },
    {
      id: 6,
      img: "https://i.ibb.co/8Bkf2Vr/6.png",
      state: "",
      Ques: "What is the syntax for array destructuring in JavaScript?",
      Ans: "spread operator",
    },
    {
      id: 4,
      img: "https://i.ibb.co/p03nkFx/4.png",
      state: "",
      Ques: "What type of dialog box is an alert box in JavaScript?",
      Ans: "modal",
    },
    {
      id: 7,
      img: "https://i.ibb.co/7QL9Mn1/7.png",
      state: "",
      Ques: "What is the purpose of promises in JavaScript?",
      Ans: "asynchronous operations",
    },
    {
      id: 3,
      img: "https://i.ibb.co/0Xtcjty/3.png",
      state: "",
      Ques: "What kind of loop is the do-while loop?",
      Ans: "exit contolled",
    },
  ]);
  const [completed, setCompleted] = useState(false);
  const [showWonModal, setShowWonModal] = useState(false);
  const handleClick = (id) => {
    const index = cardItem.findIndex((item) => item.id === id);
    cardItem[index].state = "active";
    setCardItem([...cardItem]);
    const questionIndex = cardItem.findIndex((item) => item.id === id && item.Ques);
    setCurrentQuestionIndex(questionIndex);
    setTimeout(() => setShowModal(true), 1000);
  };
  
  const handleAnswer = (userAnswer) => {
    if (userAnswer === cardItem[currentQuestionIndex].Ans) {
      // cardItem.forEach((item, index) => {
      //   if (
      //     item.id === cardItem[currentQuestionIndex].id &&
      //     index !== currentQuestionIndex
      //   ) {
      //     item.state = "active";
      //   }
      // });

      const currentCard = cardItem[currentQuestionIndex];

      currentCard.state = "active";
      setCardItem([...cardItem]);

      const matchingCard = cardItem.find(
        (card) => card.id === currentCard.id && card !== currentCard
      );

      if (matchingCard) {
        matchingCard.state = "active";
      } // Update the state and trigger a re-render
      setCardItem([...cardItem]);
      setShowModal(false);

      // setCurrentQuestionIndex(currentQuestionIndex => currentQuestionIndex + 1);
    } else {
      alert("wrong answer, correct answer is");
      console.log(cardItem[currentQuestionIndex].Ans);
    }
    const allCardsTurned = cardItem.every((item) => item.state === "active");
    if (allCardsTurned) {
      // Show the "you won" modal
      setShowWonModal(true);
      setCompleted(true);
      console.log("you won")
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
          <span className="font-bold text-4xl p-2 text-blue-400">
            memory game {`;)`}
          </span>
        </div>

        <div className="installation-info flex justify-center bg-slate-200 rounded-md p-10 mx-5 h-auto">
          <div className="card-container grid grid-rows-4 grid-cols-4 gap-5">
            {cardItem.map((item, index) => (
              <Card
                key={index}
                item={item}
                id={item.id}
                handleClick={handleClick}
              />
            ))}
            {showModal && (
              <MemoryGame
                onAnswer={handleAnswer}
                modalChange={() => setShowModal(false)}
                question={cardItem[currentQuestionIndex].Ques}
              />
            )}
            {showWonModal && <WinningModal /> }
          </div>
        </div>
      </div>
    </div>
  );
};
