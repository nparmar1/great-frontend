import { useEffect, useState } from "react";
import Article from "./Article";

export default function HackerNewsApp() {
  const [listOfIds, setListOfIds] = useState([]);

  const handleDelete = (id) => {
    setListOfIds(listOfIds.filter((currId) => currId !== id));
  };

  useEffect(() => {
    async function getHackerNewsIDs() {
      const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
      );

      const data = await response.json();
      setListOfIds(data.slice(0, 5));
    }

    getHackerNewsIDs();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#eee",
      }}
    >
      <h1>Stories</h1>
      {listOfIds.map((id) => (
        <Article key={id} id={id} onDelete={handleDelete} />
      ))}
    </div>
  );
}
