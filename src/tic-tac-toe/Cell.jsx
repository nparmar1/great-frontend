import './styles.css';

export default function Cell({ mark, onClick, disabled }){
    return (
            <button 
                className='cell'
                onClick={onClick}
                disabled={disabled}
            >
                {mark}
            </button>
    )
}