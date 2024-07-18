import { useEffect, useState } from "react";

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

const getFruitList = (searchTerm) =>
  fruits.filter((fruit) => fruit.startsWith(searchTerm.toLowerCase()));

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

export default function SearchAppTwo() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const debounceQuery = useDebounceQuery(query);

  useEffect(() => {
    if (debounceQuery.length > 0) {
      const fruitList = getFruitList(debounceQuery);
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
