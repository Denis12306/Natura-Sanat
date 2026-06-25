import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getArticleById } from "../../api/articles";
import { getComments, createComment } from "../../api/comments";

export default function ArticleDetailPage() {
  const { id } = useParams();

  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const articleData = await getArticleById(id);
      const commentsData = await getComments(id);

      setArticle(articleData);
      setComments(commentsData);
    };

    loadData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content.trim()) return;

    const newComment = await createComment(id, content);

    setComments((prev) => [newComment, ...prev]);

    setContent("");
  };

  if (!article) {
    return <p className="p-6">Chargement...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">
        {article.title}
      </h1>

      <p className="mb-10">
        {article.content}
      </p>

      <h2 className="text-2xl font-bold mb-4">
        Commentaires
      </h2>

      <form
        onSubmit={handleSubmit}
        className="mb-6"
      >
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border rounded p-3"
          rows="4"
          placeholder="Votre commentaire"
        />

        <button
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
        >
          Envoyer
        </button>
      </form>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment._id}
            className="border p-4 rounded"
          >
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
