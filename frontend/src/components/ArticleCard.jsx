import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold mb-2">
        {article.title}
      </h2>

    <img
        src={article.image || images.defaultArticle}
        alt={article.title}
        className="w-full h-48 object-cover"
      />

      <p className="text-gray-600 mb-4">
        {article.content?.slice(0, 120)}...
      </p>

      <Link
        to={`/articles/${article._id}`}
        className="text-green-600 font-semibold"
      >
        Lire l'article
      </Link>
    </div>
  );
}
