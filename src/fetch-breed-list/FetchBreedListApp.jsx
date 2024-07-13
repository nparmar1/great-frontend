/*
Instructions:
Recreate https://dog.ceo/dog-api/breeds-list
1) Create a dropdown that will show all the main dog breeds
   API for dog names: https://dog.ceo/api/breeds/list/all
2) Once a breed is selected, render an image based off the selected breed
3) When the Fetch! button is clicked, the application should grab and
   render a different image for the selected breed.

`https://dog.ceo/api/breed/${breedName}/images/random`
*/
/**
 * {
"message": "https://images.dog.ceo/breeds/akita/Japaneseakita.jpg",
"status": "success"
} */

import BreedList from "./BreedList";
import { useEffect, useState } from "react";
import './styles.css'

export default function FetchBreedListApp() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    async function fetchBreedList() {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await response.json();

      setBreeds(Object.keys(data?.message));
    }

    fetchBreedList();
  }, []);

  return (
    <div className='App'>
      <h1>Breed List</h1>
      <BreedList breeds={breeds} />
    </div>
  );
}
