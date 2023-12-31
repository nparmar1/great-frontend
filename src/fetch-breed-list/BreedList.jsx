import { useState, useEffect } from "react";
import "./styles.css";

export default function BreedList({ breeds }) {
  const [breed, setBreed] = useState("affenpinscher");
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    async function fetchBreed() {
      const response = await fetch(
        `https://dog.ceo/api/breed/${breed}/images/random`
      );
      const data = await response.json();
      setImgUrl(data?.message);
    }

    fetchBreed();
  }, [breed]);

  async function fetchImage(breed) {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random`
    );
    const data = await response.json();
    setImgUrl(data?.message);
  }

  return (
    <>
      https://dog.ceo/api/breed/
      <select
        value={breed}
        onChange={(e) => {
          setBreed(e.target.value);
        }}
      >
        {breeds?.map((breed, idx) => (
          <option key={idx}>{breed}</option>
        ))}
      </select>
      /images/random
      <div>
        <img src={imgUrl} alt={breed} />
      </div>
      <button onClick={() => fetchImage(breed)}>Fetch</button>
    </>
  );
}
