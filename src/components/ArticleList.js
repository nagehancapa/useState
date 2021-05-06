import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";

export default function ArticleList() {
  const [articles, set_articles] = useState([]);

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");
      // Getting back data from the net, through the wire, air, and the ocean:
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      console.log("Got back:", res);

      set_articles(res.data);
    }
    doSomeDataFetching();
  }, []);

  const clearNotifications = () => {
    set_articles([]);
  };

  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      <button onClick={clearNotifications}>Clear notifications</button>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          title={article.title}
          content={article.body}
        />
      ))}
    </div>
  );
}
