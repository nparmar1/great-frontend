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

const getFruits = (query, fruits) =>
  fruits.filter((fruit) => fruit.startsWith(query.toLowerCase()));

function useDebounceQuery(value, delay = 250) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounceValue;
}

function SearchFruit({ fruits }) {
  const [suggestions, setSuggestions] = useState([]);
  const [query, setQuery] = useState("");

  const debounceQuery = useDebounceQuery(query);
  console.log(debounceQuery);

  useEffect(() => {
    if (debounceQuery.length > 0) {
      const fruitList = getFruits(debounceQuery, fruits);
      setSuggestions(fruitList);
    } else {
      setSuggestions([]);
    }
  }, [debounceQuery]);

  return (
    <>
      <h1>Search Fruit</h1>
      <input
        type="text"
        value={query}
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      {suggestions.map((suggestion, idx) => (
        <ul key={idx}>
          <li>{suggestion}</li>
        </ul>
      ))}
    </>
  );
}

export default function SearchAppTwo() {
  return <SearchFruit fruits={fruits} />;
}
