/*
Instructions:
Recreate https://dog.ceo/dog-api/breeds-list
1) Create a dropdown that will show all the main dog breeds
   API for dog names: https://dog.ceo/api/breeds/list/all
2) Once a breed is selected, render an image based off the selected breed
3) When the Fetch! button is clicked, the application should grab and
   render a different image for the selected breed.

image url: https://dog.ceo/api/breed/breedName/images/random
*/
/**
 * {
"message": "https://images.dog.ceo/breeds/akita/Japaneseakita.jpg",
"status": "success"
} */

import { useEffect, useState } from "react";
import "./styles.css";

export default function BreedList() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [breedImage, setBreedImage] = useState("");

  useEffect(() => {
    async function getDogNames() {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const { message } = await response.json();

      setBreeds(Object?.keys(message));
    }

    getDogNames();
  }, []);

  async function fetchImage(breed) {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random`
    );
    const data = await response.json();
    setBreedImage(data?.message);
  }

  return (
    <div className="App">
      <h1>Breed List</h1>
      <span>
        http://dogs.ceo/api/breed/
        {
          <select
            value={selectedBreed}
            onChange={(e) => {
              setSelectedBreed(e.target.value);
              fetchImage(e.target.value);
            }}
          >
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        }
        /images/random
      </span>
      <img src={breedImage} alt={selectedBreed} />
      <button onClick={() => fetchImage(selectedBreed)}>Fetch!</button>
    </div>
  );
}
