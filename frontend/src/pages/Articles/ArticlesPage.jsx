import { useEffect, useState } from "react";

import axios from "../../api/axios";
import ArticleCard from "../../components/ArticleCard";

export default function ArticlesPage() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    loadArticles();
  }, []);

  async function loadArticles() {

    try {

      const response = await axios.get("/articles");

      setArticles(response.data.data);

    } catch (error) {
      console.error(error);
    }
  }

  return (

    <div>

      <h1
        style={{
          marginBottom: "30px",
          fontSize: "34px",
          color: "#3d5d36",
        }}
      >
        Articles
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))",
          gap: "50px",
        }}
      >
        {articles.map((article) => (
          <ArticleCard
            key={article._id}
            article={article}
          />
        ))}
      </div>

    </div>

  );
}
