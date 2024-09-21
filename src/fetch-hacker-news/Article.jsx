import { useEffect, useState } from "react";

export default function Article({ id, updateIds }) {
  const [article, setArticle] = useState({});

  useEffect(() => {
    async function fetchArticle() {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      );

      const data = await response.json();
      const { by: author, title, url } = data;
      setArticle({ author, title, url });
    }

    fetchArticle();
  }, []);

  return (
    <div className="article">
      <h1>{article.title}</h1>
      <a href={article.url}>{article.url}</a>
      <p>{article.author}</p>
      <button onClick={() => updateIds(id)}>Delete</button>
    </div>
  );
}
