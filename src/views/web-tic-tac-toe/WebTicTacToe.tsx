import { SetStateAction, useState } from "react";

/**
 * Square 组件表示游戏板上的一个方格。
 * @param value 方格的当前值（"X"、"O"或空）
 * @param onSquareClick 当方格被点击时的回调函数
 */
function Square({
  value,
  onSquareClick,
}: {
  value: string;
  onSquareClick: () => void;
}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

/**
 * Board 组件渲染游戏板及其逻辑。
 * @param xIsNext 下一个下棋的是X方
 * @param squares 游戏板上每个方格的当前值
 * @param onPlay 当玩家下棋时调用的回调函数
 */
function Board({
  xIsNext,
  squares,
  onPlay,
}: {
  xIsNext: boolean;
  squares: string[];
  onPlay: (nextSquares: string[]) => void;
}) {
  /**
   * 处理方格点击事件。
   * 如果游戏已经有胜者或者方格已被下棋，则不执行任何操作。
   * 否则，更新游戏板状态并调用onPlay回调。
   * @param i 被点击的方格的索引
   */
  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  // 渲染游戏板行
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

/**
 * Game 组件管理游戏的整个生命周期。
 * 它包含游戏板、游戏历史和当前移动的逻辑。
 */
export default function Game() {
  // 管理游戏历史和当前移动
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  /**
   * 处理玩家的下棋操作。
   * 更新游戏历史和当前移动。
   * @param nextSquares 下一步的游戏板状态
   */
  function handlePlay(nextSquares: string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  /**
   * 跳转到游戏的指定移动。
   * @param nextMove 要跳转的移动索引
   */
  function jumpTo(nextMove: SetStateAction<number>) {
    setCurrentMove(nextMove);
  }

  // 生成游戏历史中的移动列表
  const moves = history.map((_squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  // 渲染游戏界面
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

/**
 * 计算游戏的当前胜者。
 * 检查所有可能的胜者组合，如果找到则返回胜者，否则返回null。
 * @param squares 游戏板上每个方格的当前值
 * @returns 当前的胜者（"X"、"O"或null）
 */
function calculateWinner(squares: string[]) {
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
