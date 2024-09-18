import { useEffect, useState } from "react";

export default function Article({ id, deleteId }) {
  const [article, setArticle] = useState({});

  useEffect(() => {
    async function fetchArticle() {
      const data = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      );

      const { by: author, title, url } = await data.json();
      setArticle({ author, title, url });
    }

    fetchArticle();
  }, []);

  return (
    <div className="article">
      <h1>{article.title}</h1>
      <a href={article.url}>{article.url}</a>
      <p>by: {article.author}</p>
      <button onClick={() => deleteId(id)}>delete</button>
    </div>
  );
}
