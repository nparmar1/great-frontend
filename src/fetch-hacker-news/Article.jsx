import { useEffect, useState } from "react";

export default function Article({ id, onDelete }) {
  const [articleInfo, setArticleInfo] = useState({});

  useEffect(() => {
    async function fetchArticle() {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      );
      const data = await response.json();
      const { by, url, title } = data;

      setArticleInfo({ by, url, title });
    }

    fetchArticle();
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
      <h2>{articleInfo.title}</h2>
      <a href={`${articleInfo.url}`}>{articleInfo.url}</a>
      <p>By {articleInfo.by}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
