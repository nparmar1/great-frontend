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

function getTypeAheadResults(query) {
  return fruits.filter((fruit) => fruit.startsWith(query.toLowerCase()));
}

function getDebounceQuery(query, time = 250) {
  const [debounce, setDebounce] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(query);
    }, time);

    return () => clearTimeout(timer);
  }, [query, time]);

  return debounce;
}

function Search({ fruits }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const debounceQuery = getDebounceQuery(query);

  useEffect(() => {
    if (debounceQuery.length > 0) {
      const fruit = getTypeAheadResults(debounceQuery);

      setSuggestions(fruit);
    }
  }, [debounceQuery]);

  return (
    <>
      <input
        value={query}
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      {suggestions.map((suggestion) => (
        <ul key={suggestion}>
          <li>{suggestion}</li>
        </ul>
      ))}
    </>
  );
}

export default function SearchAppTwo() {
  return (
    <>
      <h1>Search Fruit</h1>
      <Search fruits={fruits} />
    </>
  );
}
