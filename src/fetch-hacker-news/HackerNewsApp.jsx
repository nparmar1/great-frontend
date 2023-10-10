import Article from "./Article";
import { useState, useEffect } from "react";

export default function HackerNewsApp() {
  const [ids, setIds] = useState([]);
  const [start, setStart] = useState(0);

  useEffect(() => {
    async function fetchNews() {
      const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
      );
      const data = await response.json();

      const firstFiveArticles = data.slice(0, start + 5);
      setIds(firstFiveArticles);
    }

    fetchNews();
  }, [start]);

  function deleteArticle(prevId) {
    const updatedIds = ids.filter((id) => id !== prevId);
    setIds(updatedIds);
  }

  return (
    <div style={{ backgroundColor: "#eee" }}>
      <h1>Stories</h1>
      {ids.map((id) => (
        <Article key={id} id={id} onClick={deleteArticle} />
      ))}
      <button onClick={() => setStart(s => s + 5)}>Load More</button>
    </div>
  );
}
