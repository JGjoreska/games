import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Square from "../components/Square";
import { calculateWinner } from "../helper";

interface IProps {
  state: string;
  onClick: () => void;
}

const XO = () => {
  const [winnerVisible, setWinnerVisible] = useState(false);
  const [numberofClicks, setNumberOfClicks] = useState(0);
  const [board, setBoard] = useState(Array(9).fill(" "));

  const handleClick = (i: number, state: string) => {
    if (state === " ") {
      board[i] = numberofClicks % 2 == 0 ? "X" : "O";
      setNumberOfClicks(numberofClicks + 1);
    }
    setBoard(board);
    if (numberofClicks > 3) {
      const winner = calculateWinner(board);
      console.log(winner);
    }
    const winner = calculateWinner(board);
    if (numberofClicks > 8 || winner !== null) setWinnerVisible(true);
  };

  return (
    <div className={styles.xoWrapper}>
      <h1>XO</h1>
      <div className={styles.xoContainer}>
        {board.map((element, i) => {
          return (
            <Square
              state={element}
              onClick={() => handleClick(i, element)}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default XO;
