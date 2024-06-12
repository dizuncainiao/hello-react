import "./App.less";

import { useEffect, useState } from "react";

function Square({ value, onClick }: { value: number; onClick: () => void }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = (squares: string[]) => {
  for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
    const [i1, i2, i3] = WINNING_COMBINATIONS[i];
    if (squares[i1] === squares[i2] && squares[i2] === squares[i3]) {
      return squares[i1];
    }
  }
};

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(""));

  const [currentPlayer, setCurrentPlayer] = useState("X");

  const [winner, setWinner] = useState(checkWinner(squares));

  useEffect(() => {
    setWinner(checkWinner(squares));
  }, [squares]);

  function clickHandler(index: number) {
    return function () {
      if (winner) {
        return;
      }

      if (squares[index] === "") {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

        setSquares(
          squares.map((square, i) => {
            if (i === index) {
              return currentPlayer;
            }
            return square;
          }),
        );
      }
    };
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        胜者是：{winner}，当前的：{currentPlayer}
      </div>
      <div className="board">
        {squares.map((square, index) => {
          return (
            <Square value={square} onClick={clickHandler(index)} key={index} />
          );
        })}
      </div>
    </>
  );
}

export default function MyApp() {
  return <Board />;
}
