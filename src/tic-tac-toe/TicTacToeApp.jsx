import "./styles.css";

export default function TicTacToeApp() {
  return (
    <div className="app">
        <div className="board">
            {
                Array(9)
                .fill(null)
                .map((_, index) => index)
                .map((cellIndex) => {
                    const turn = xIsPlaying ? 'X' : 'O';
                    return (

                    )
                })
            }
        </div>
    </div>
  )
}
