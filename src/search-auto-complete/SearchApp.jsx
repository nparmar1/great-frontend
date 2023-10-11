import { useState, useEffect } from "react";

function getAutocompleteResults(query, signal) {
  const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Grape",
    "Strawberry",
    "Watermelon",
    "Mango",
    "Pineapple",
    "Cherry",
    "Blueberry",
    "Kiwi",
    "Pear",
    "Lemon",
    "Peach",
    "Plum",
    "Raspberry",
    "Blackberry",
    "Cranberry",
    "Pomegranate",
    "Grapefruit",
    "Apricot",
    "Coconut",
    "Fig",
    "Guava",
    "Lychee",
    "Nectarine",
    "Passion Fruit",
    "Tangerine",
    "Cantaloupe",
    "Honeydew",
    "Kumquat",
    "Mulberry",
    "Papaya",
    "Persimmon",
    "Quince",
    "Date",
    "Dragon Fruit",
    "Star Fruit",
    "Avocado",
    "Lime",
    "Tamarind",
    "Currant",
    "Boysenberry",
    "Elderberry",
    "Gooseberry",
    "Kiwi",
    "Lingonberry",
    "Mandarin",
    "Pawpaw",
    "Plantain",
    "Rhubarb",
    "Soursop",
    "Yuzu",
    "Cactus Pear",
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (signal?.aborted) {
        reject(signal.reason);
      }

      resolve(
        fruits.filter((fruit) =>
          fruit.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, Math.random() * 1000);
  });
}

function useDebounceValue(value, time = 250) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, time]);

  return debounceValue;
}

export default function SearchApp() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const debounceQuery = useDebounceValue(query);
  const controller = new AbortController();

  useEffect(() => {
    const signal = controller.signal;

    (async () => {
      setSuggestions([]);
      if (debounceQuery.length > 0) {
        console.log(debounceQuery);
        const data = await getAutocompleteResults(debounceQuery, signal);
        setSuggestions(data);
      }
    })();

    return () => controller.abort("cancel request");
  }, [debounceQuery]);

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <div>
        {suggestions.map((suggestion) => (
          <>
            <ul>
              <li key={suggestion}>{suggestion}</li>
            </ul>
          </>
        ))}
      </div>
    </>
  );
}
