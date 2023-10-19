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

const getFruit = (query, fruits) => {
  return fruits.filter((fruit) => fruit.startsWith(query.toLowerCase()));
};

const getDebounceQuery = (query, time = 250) => {
  const [value, setValue] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(query);
    }, time);

    return () => clearTimeout(timer);
  }, [query, time]);

  return value;
};

function SearchFruit({ fruits }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const debounceQuery = getDebounceQuery(query);

  useEffect(() => {
    if (debounceQuery.length > 0) {
      const fruit = getFruit(query, fruits);
      setSuggestions(fruit);
    }
  }, [debounceQuery]);

  return (
    <>
      <h1>Search Fruit</h1>
      <input
        type="text"
        placeholder="Search"
        value={query}
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
