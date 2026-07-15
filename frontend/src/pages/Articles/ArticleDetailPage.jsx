import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "../../api/axios";
import { useAuth } from "../../context/AuthContext";
import CommentList from "../../components/CommentList";

export default function ArticleDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    loadArticle();
  }, []);

  async function loadArticle() {
    const response = await axios.get(`/articles/${id}`);
    setArticle(response.data.data);
  }

  async function handleDelete() {
    const confirmed = window.confirm(
      "Es-tu sûr de vouloir supprimer cet article ? Cette action est irréversible."
    );
    if (!confirmed) return;

    try {
      await axios.delete(`/articles/${id}`);
      navigate("/articles");
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la suppression.");
    }
  }

  if (!article) return <p>Chargement...</p>;

  const isAdmin = user?.role === "admin";
  const isOwner = article.author?._id === user?._id;
  const canEdit = isOwner || isAdmin;

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-10">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="max-h-96 w-full rounded-2xl object-cover shadow-lg"
        />
      )}
      <h1 className="text-4xl font-bold text-gray-900">{article.title}</h1>
      <p className="whitespace-pre-line text-lg leading-8 text-gray-700">
        {article.content}
      </p>
      {user && canEdit && (
        <div className="flex gap-4">
          <Link
            to={`/articles/edit/${id}`}
            className="rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 transition"
          >
            Modifier
          </Link>

          {isAdmin && (
            <button
              onClick={handleDelete}
              className="rounded-2xl bg-red-100 px-6 py-3 font-semibold text-red-600 hover:bg-red-200 transition"
            >
              Supprimer
            </button>
          )}
        </div>
      )}
      <CommentList targetType="Article" targetId={id} />
    </div>
  );
}
