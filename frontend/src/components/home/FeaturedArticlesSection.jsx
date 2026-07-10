import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import ArticleCard from "../ArticleCard";

export default function FeaturedArticlesSection() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("/articles");
        setArticles(response.data.data.slice(0, 3));
      } catch (error) {
        console.error(error);
      }
    };
    fetchArticles();
  }, []);

  if (articles.length === 0) return null;

  return (
    <section className="bg-white px-6 py-20 mb-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">Derniers articles</h2>
            <p className="mt-2 text-lg text-gray-600">
              Des conseils fiables pour votre bien-être au quotidien.
            </p>
          </div>
          <Link
            to="/articles"
            className="font-semibold text-green-700 transition hover:text-green-900 hover:underline"
          >
            Voir tous les articles →
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
