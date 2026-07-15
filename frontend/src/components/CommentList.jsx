import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useAuth } from "../context/AuthContext";
import CommentForm from "./CommentForm";

export default function CommentList({ targetType, targetId }) {
  const { user } = useAuth();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComments();
  }, [targetType, targetId]);

  async function fetchComments() {
    try {
      setLoading(true);
      const res = await axios.get("/comments", {
        params: { targetType, targetId },
      });
      setComments(res.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function handleCommentAdded(newComment) {
    setComments((prev) => [newComment, ...prev]);
  }

  async function handleDelete(commentId) {
    const confirmed = window.confirm("Supprimer ce commentaire ?");
    if (!confirmed) return;

    try {
      await axios.delete(`/comments/${commentId}`);
      setComments((prev) => prev.filter((c) => c._id !== commentId));
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la suppression.");
    }
  }

  return (
    <div className="mt-12 space-y-8">
      <h3 className="text-2xl font-bold text-gray-900">
        Commentaires {comments.length > 0 && `(${comments.length})`}
      </h3>

      <CommentForm
        targetType={targetType}
        targetId={targetId}
        onCommentAdded={handleCommentAdded}
      />

      {loading ? (
        <p className="text-gray-500">Chargement des commentaires...</p>
      ) : comments.length === 0 ? (
        <p className="text-gray-500">Aucun commentaire pour le moment.</p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => {
            const canDelete =
              user &&
              (user.role === "admin" || comment.author?._id === user._id);

            return (
              <div
                key={comment._id}
                className="rounded-2xl border border-gray-200 bg-white p-5"
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-gray-900">
                    {comment.author?.firstName} {comment.author?.lastName}
                  </p>
                  <span className="text-sm text-gray-400">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <p className="mt-2 text-gray-700 leading-relaxed">
                  {comment.content}
                </p>

                {canDelete && (
                  <button
                    onClick={() => handleDelete(comment._id)}
                    className="mt-3 text-sm font-semibold text-red-600 hover:underline"
                  >
                    Supprimer
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
