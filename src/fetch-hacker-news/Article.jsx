import { useEffect, useState } from "react";

export default function Article({ id, deleteIds }) {
  const [article, setArticle] = useState("");

  useEffect(() => {
    async function fetchId() {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      );
      const data = await response.json();

      const { by: author, title, url } = data;
      setArticle({ author, title, url });
    }

    fetchId();
  }, []);

  return (
    <div
      style={{
        border: "1px solid #555",
        margin: "8px",
        borderRadius: "5px",
        backgroundColor: "#fff",
        padding: "8px",
      }}
    >
      <h1>{article.title}</h1>
      <a href={article.url}>{article.url}</a>
      <p>by {article.author}</p>
      <button onClick={() => deleteIds(id)}>Delete</button>
    </div>
  );
}
