import './styles.css';
import Cell from "./Cell";

export default function TicTacToeApp(){
    return (
        <div className='app'>
            <div className='board'>
                {Array(9).fill((_, idx) => idx)
                    .map(cellIdx => (
                        <Cell 
                            key={cellIdx}
                        />
                    ))}
            </div>
        </div>
    )
}