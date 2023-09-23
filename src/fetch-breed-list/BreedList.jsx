export default function BreedList({ breeds, fetchImage, setBreedName }) {
  return (
    <select
      onChange={(e) => {
        fetchImage(e.target.value);
        setBreedName(e.target.value);
      }}
    >
      {breeds.map((breed) => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  );
}
