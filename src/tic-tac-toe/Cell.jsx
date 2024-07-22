import "./styles.css";

export default function Cell({ mark, onClick, disabled }) {
  return (
    <button className="cell" disabled={disabled} onClick={onClick}>
      {mark}
    </button>
  );
}
