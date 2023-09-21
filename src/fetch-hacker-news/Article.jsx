import { useEffect, useState } from "react";

export default function Article({ id, onDelete }) {
  const [article, setArticle] = useState({});

  useEffect(() => {
    async function getArticle() {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      );

      const { by, url, title } = await response.json();
      setArticle({ by, url, title });
    }

    getArticle();
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
      <h2>{article.title}</h2>
      <a href={article.url}>{article.url}</a>
      <p>By {article.by}</p>
      <button onClick={() => onDelete(id)}>delete</button>
    </div>
  );
}
