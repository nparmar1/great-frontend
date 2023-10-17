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

import Article from "./Article";
import { useEffect, useState } from "react";

export default function HackerNewsApp() {
  const [ids, setIds] = useState([]);
  const [start, setStart] = useState(0);

  useEffect(() => {
    async function fetchArticles() {
      const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
      );
      const data = await response.json();

      const firstFiveIds = data.slice(0, start + 5);
      setIds(firstFiveIds);
    }

    fetchArticles();
  }, [start]);

  function deleteIds(currId) {
    const updatedIds = ids.filter((id) => currId !== id);
    setIds(updatedIds);
  }

  return (
    <div style={{ backgroundColor: "#eee" }}>
      {ids.map((id, idx) => (
        <Article key={id} id={id} deleteIds={deleteIds} />
      ))}
      <button onClick={() => setStart(start + 5)}>Load More</button>
    </div>
  );
}
