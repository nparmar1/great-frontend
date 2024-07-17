import { useEffect, useState } from "react";
import "./styles.css";

export default function Article({ id, deleteId }) {
  const [article, setArticle] = useState({});

  useEffect(() => {
    async function fetchData(id) {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      );
      const data = await response.json();
      const { by: author, title, url } = data;
      setArticle({ author, title, url });
    }

    fetchData(id);
  }, []);

  return (
    <div className="article">
      <h1>{article.title}</h1>
      <a href={article.url}>{article.url}</a>
      <p>By {article.author}</p>
      <button onClick={() => deleteId(id)}>Delete</button>
    </div>
  );
}
