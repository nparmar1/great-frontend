/**
 * https://github.com/HackerNews/API
 * https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
 * https://hacker-news.firebaseio.com/v0/item/29494189.json?print=pretty

 Step 1) We will be fetching a list of ID from https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
 Step 2) Store this list of ID in state and control the length of the list to 5 items
 Step 3) Based on the list of ID, i will be rendering a new Article component and the component will
        take a prop of id in order to use that to fetch for an individual article
 Step 4) Inside the Article component, after we have fetched for the article
         we will be getting the by, url, title so we can render an article
* bonus: load more feature
*/

import { useEffect, useState } from "react";
import Article from "./Article";

export default function HackerNewsApp() {
  const [ids, setIds] = useState([]);

  useEffect(() => {
    async function fetchHackerNewsIds() {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
      );
      const data = await response.json();
      const fiveIds = data.slice(0, 5);
      setIds(fiveIds);
    }

    fetchHackerNewsIds();
  }, []);

  function deleteArticle(deletedId) {
    console.log("hello");
    const updatedIds = ids.filter((id) => id !== deletedId);
    setIds(updatedIds);
  }

  return (
    <div
      style={{
        backgroundColor: "#eee",
      }}
    >
      <h1>Stories</h1>
      {ids.map((id) => (
        <Article key={id} id={id} onDelete={deleteArticle} />
      ))}
    </div>
  );
}
