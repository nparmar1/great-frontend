import "./styles.css";
import Cell from "./Cell";
import { useState } from "react";

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

function determineWinner(board){

    for(let i = 0; i < CELLS_IN_A_LINE.length; i++){
        const [x, y, z] = CELLS_IN_A_LINE[i];

        if(board[x] !== null && board[x] === board[y] && board[y] === board[z]){
            return board[x];
        }
    }

    return null;
}

export default function TicTacToeApp() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerX, setIsPlayerX] = useState(true);

  const winner = determineWinner(board);

  function getStatusMessage(){
    if(winner !== null) return `Player ${winner} wins!`;

    if(!board.includes(null)) return `It's a draw!`;

    return `It's player ${isPlayerX ? 'X' : 'O'}'s turn`
  }


  return (
    <div className="app">
        {getStatusMessage()}
      <div className="board">
        {Array(9)
          .fill(null)
          .map((_, idx) => idx)
          .map((cellIdx) => {

            const turn = isPlayerX ? 'X' : 'O';

            return (
                <Cell
                    key={cellIdx}
                    mark={board[cellIdx]}
                    onClick={() => {
                        const newboard = board.slice();
                        newboard[cellIdx] = turn;
                        
                        setIsPlayerX(!isPlayerX);
                        setBoard(newboard);
                    }}
                />
            )
          })}
      </div>
      <button>Reset</button>
    </div>
  );
}
