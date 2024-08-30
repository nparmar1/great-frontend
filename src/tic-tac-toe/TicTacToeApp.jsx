import Cell from "./Cell"

export default function TicTacToeApp(){
    return (
        <div className='app'>
            <div className='board'>
                {Array(9).fill(null)
                    .map((_, idx) => idx)
                    .map((cellIdx) => {

                        return (
                            <Cell />
                        )
                    })
                }
            </div>
        </div>
    )
}