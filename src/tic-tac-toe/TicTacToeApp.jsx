import { useState } from "react";
import "./styles.css";

const CELLS_IN_A_LINE = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Cell({ mark, onClick, disabled }) {
  return (
    <button className="cell" onClick={onClick} disabled={disabled}>
      {mark}
    </button>
  );
}

function determineWinner(board) {
  for (let i = 0; i < CELLS_IN_A_LINE.length; i++) {
    const [x, y, z] = CELLS_IN_A_LINE[i];

    if (board[x] !== null && board[x] === board[y] && board[y] === board[z]) {
      return board[x];
    }
  }

  return null;
}

export default function TicTacToeApp() {
  const [isPlayerX, setIsPlayerX] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));

  const winner = determineWinner(board);

  function getStatusMessage() {
    if (winner !== null) {
      return `Player ${winner} wins!`;
    }

    if (!board.includes(null)) {
      return `It's a draw`;
    }

    return `Player ${isPlayerX ? "X" : "O"} turn`;
  }

  function resetAll(){
    setBoard(Array(9).fill(null));
    setIsPlayerX(true);
  }

  return (
    <div className="app">
        <div>{getStatusMessage()}</div>
      <div className="board">
        {Array(9)
          .fill(null)
          .map((_, idx) => idx)
          .map((cellIdx) => {
            const turn = isPlayerX ? "X" : "O";

            return (
              <Cell
                key={cellIdx}
                mark={board[cellIdx]}
                disabled={board[cellIdx] !== null || winner !== null}
                onClick={() => {
                  const newBoard = board.slice();
                  newBoard[cellIdx] = turn;
                  setBoard(newBoard);
                  setIsPlayerX(!isPlayerX);
                }}
              />
            );
          })}
      </div>
      <button
        onClick={() => {
            const confirm = window.confirm('Are you sure you want reset?');

            if(!confirm) return;

            resetAll()
        }}
      >Rest
      </button>
    </div>
  );
}
