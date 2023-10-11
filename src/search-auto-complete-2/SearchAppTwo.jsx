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

function useDebounce(query, time = 250) {
  const [debounce, setDebounce] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(query);
    }, time);

    return () => clearTimeout(timer);
  }, [query, time]);

  return debounce;
}

function getFruit(query, fruits) {
  const fruit = fruits.filter((fruit) => fruit.startsWith(query));

  return fruit;
}

function SearchFruit({ fruits }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const debounceQuery = useDebounce(query);

  useEffect(() => {
    if (debounceQuery.length > 0) {
      const fruit = getFruit(debounceQuery, fruits);
      setSuggestions(fruit);
    }
  }, [debounceQuery]);

  return (
    <div>
      <input
        value={query}
        type="text"
        placeholder="Enter fruit"
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
}

export default function SearchAppTwo() {
  return (
    <div>
      <h1>Search for Fruit</h1>
      <SearchFruit fruits={fruits} />
    </div>
  );
}
