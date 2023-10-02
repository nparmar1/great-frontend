import { useState } from "react";
import "./styles.css";

function Cell(){
  return <>Hii</>
}

export default function TicTacToeApp(){
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsPlaying, setIsXplaying] = useState(true);

  return (
    <div className="app">
      <div className="board">
        {Array(9)
          .fill(null)
          .map((_, index) => index)
          .map((cellIndex) => {
            const turn = xIsPlaying ? 'X' : 'O'
            return (
              <Cell 
                key={cellIndex}
                disabled={board[cellIndex] != null || ''}
                index={cellIndex}
                mark={board[cellIndex]}
                turn={turn}
                
              />
            )
          })
        }
      </div>
    </div>
  )
}
