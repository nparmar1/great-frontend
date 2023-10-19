import { useState, useEffect } from "react";

const fruits = [
  "orange",
  "apple",
  "applesauce",
  "orange juice",
  "grapes",
  "grape juice",
  "strawberry",
  "starfruit",
  "green apple",
  "cantaloupe",
  "satsuma",
  "blueberry",
  "banana",
];

function getDebounceQuery(query, time = 250){
  const [debounceQuery, setebounceQuery] = useState(query)

    useEffect(() => {

    }, [query, time])
}

function Search({ fruits }) {
  const [query, setQuery] = useState("");

  const debounceQuery = getDebounceQuery(query);

  return (
    <>
      <input
        value={query}
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
}

export default function SearchAppTwo() {
  return <Search fruits={fruits} />;
}
