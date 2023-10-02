export default function Cell({ filled, label, onClick, isDisabled }) {
  return (
    <button
      aria-label={label}
      type="button"
      className={["cell", filled && "cell--activated"]
        .filter(Boolean)
        .join(" ")}
      onClick={onClick}
      disabled={isDisabled}
    />
  );
}
