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
import BreedList from "./BreedList";

export default function BreedListApp() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    async function getBreedList() {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const { message } = await response.json();

      setBreeds(Object?.keys(message));
    }

    getBreedList();
  }, []);

  return (
    <>
      <h1>Breeds List</h1>
      <span>
        https//dog.ceo/api/breed/
        <BreedList breeds={breeds} />
        /images/random
      </span>
      <img src={""} alt="" />
    </>
  );
}
