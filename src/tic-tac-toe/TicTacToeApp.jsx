import { useState } from "react";
import "./styles.css";

function Cell() {
  return <>Hii</>;
}

export default function TicTacToeApp() {
  const [board, setBoard] = useState(Array(9).fill(null));

  return (
    <div className="app">
      <div className="board">
        {Array(9)
          .fill(null)
          .map((_, index) => index)
          .map((cellIndex) => {
            return <Cell key={cellIndex} />;
          })}
      </div>
    </div>
  );
}
