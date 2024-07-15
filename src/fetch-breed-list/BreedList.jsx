import "./styles.css";
import { useState, useEffect } from "react";

export default function BreedList({ breeds }) {
  const [selectedBreedName, setSelectedBreedName] = useState("affenpinscher");
  const [imageUrl, setImageUrl] = useState("");

  async function fetchImageUrl(breedName) {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breedName}/images/random`
    );
    const data = await response.json();
    setImageUrl(data?.message);
  }

  useEffect(() => {
    fetchImageUrl(selectedBreedName);
  }, [selectedBreedName]);

  return (
    <>
      <span>
        https://dog.ceo/api/breed
        <select
          value={selectedBreedName}
          onChange={(e) => setSelectedBreedName(e.target.value)}
        >
          {breeds.map((breed, idx) => (
            <option key={idx}>{breed}</option>
          ))}
        </select>
        /images/random
      </span>
      <img src={imageUrl} alt={selectedBreedName} />
      <button onClick={() => fetchImageUrl(selectedBreedName)}>Fetch</button>
    </>
  );
}
