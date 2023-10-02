/*
Instructions:
Recreate https://dog.ceo/dog-api/breeds-list
1) Create a dropdown that will show all the main dog breeds
   API for dog names: https://dog.ceo/api/breeds/list/all
2) Once a breed is selected, render an image based off the selected breed
3) When the Fetch! button is clicked, the application should grab and
   render a different image for the selected breed.
*/
/**
 * {
"message": "https://images.dog.ceo/breeds/akita/Japaneseakita.jpg",
"status": "success"
} */

import { useState, useEffect } from "react";
import BreedList from "./BreedList";
import "./styles.css";

export default function FetchBreedApp() {
  const [breeds, setBreeds] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [breedName, setBreedName] = useState("");

  useEffect(() => {
    async function fetchBreeds() {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await response.json();
      setBreeds(Object.keys(data.message));
    }

    fetchBreeds();
  }, []);

  async function fetchImage(breed) {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random`
    );
    const data = await response.json();
    setImageUrl(data.message);
  }

  return (
    <div className="App">
      <h1>Breeds List</h1>
      <span>
        https://dog.ceo/api/breed/
        <BreedList
          breeds={breeds}
          fetchImage={fetchImage}
          setBreedName={setBreedName}
        />
        /images/random
      </span>
      <button onClick={() => fetchImage(breedName)}>Fetch!</button>
      <img src={imageUrl} alt={breedName} />
    </div>
  );
}
