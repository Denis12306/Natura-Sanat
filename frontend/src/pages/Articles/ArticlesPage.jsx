import { useEffect, useState } from "react";

import { getArticles } from "../../api/articles";
import ArticleCard from "../../components/ArticleCard";

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await getArticles();
      setArticles(response.data.data);
    };

    fetchArticles();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">
        Articles santé
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
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
