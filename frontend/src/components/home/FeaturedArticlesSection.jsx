import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import { ArrowRight } from "lucide-react";
import ArticleCard from "../ArticleCard";

// Ce composant récupère la liste de 3 articles depuis l'API pour la landing page
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
    <section className="mx-auto max-w-7xl px-6 py-20 my-12">
      <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end border-b border-[#5D7C50]/10 pb-8">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2F3E29]">
            Nos articles
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#2F3E29]/70 leading-relaxed md:whitespace-nowrap">
            Des conseils fiables pour votre bien-être au quotidien et votre culture santé.
          </p>
        </div>

        <Link
          to="/articles"
          className="group inline-flex items-center gap-2 font-medium text-sm uppercase tracking-wider text-[#5D7C50] transition-colors hover:text-[#2F3E29]"
        >
          Voir tous les articles
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    </section>
  );
}
