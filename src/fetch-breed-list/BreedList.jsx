export default function BreedList({ breeds }) {
  async function fetchImage(breedName) {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breedName}/images/random`
    );
    const data = await response.json();

    console.log(data);
  }

  return (
    <>
      <select
        onChange={(e) => {
          fetchImage(e.target.value);
        }}
      >
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </>
  );
}
