import { useState } from "react";

export const Board = () =>{
  const createGrid = () => 
    new Array(5)
      .fill()
      .map((c) => new Array(5).fill().map((c) => Math.random() < .4));
      const [board, setBoard] = useState(createGrid);
      console.log(board);
    return "test";
}