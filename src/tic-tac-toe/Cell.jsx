import './styles.css';

export default function Cell({ onClick, mark }){
    return (
        <>
            <button
                className='cell'
                onClick={onClick}
            >
                {mark}
            </button>
        </>
    )
}