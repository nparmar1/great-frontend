import { useEffect, useState } from "react";
import "./styles.css";

export default function BreedList({ breeds }) {
  const [breedName, setBreedName] = useState("affenpinscher");
  const [imageUrl, setImageUrl] = useState("");

  async function fetchBreedUrl(breedName) {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breedName}/images/random`
    );
    const data = await response.json();

    setImageUrl(data?.message);
  }

  useEffect(() => {
    fetchBreedUrl(breedName);
  }, [breedName]);

  return (
    <>
      <span>
        https://dog.ceo/api/breed/
        <select
          value={breedName}
          onChange={(e) => {
            setBreedName(e.target.value);
          }}
        >
          {breeds.map((breed, idx) => (
            <option key={idx}>{breed}</option>
          ))}
        </select>
        /images/random
      </span>
      <img src={imageUrl} alt={breedName} />
      <button onClick={() => fetchBreedUrl(breedName)}>Fetch</button>
    </>
  );
}
