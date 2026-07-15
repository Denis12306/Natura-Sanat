import { useState } from "react";
import axios from "../api/axios";
import { useAuth } from "../context/AuthContext";

export default function CommentForm({ targetType, targetId, onCommentAdded }) {
  const { user } = useAuth();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  if (!user) {
    return (
      <p className="text-gray-500 italic">
        Connectez-vous pour laisser un commentaire.
      </p>
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      setLoading(true);

      const res = await axios.post("/comments", {
        content,
        targetType,
        targetId,
      });

      setContent("");
      onCommentAdded?.(res.data.data);
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'envoi du commentaire.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <textarea
        rows={3}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Écrire un commentaire..."
        className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-base outline-none transition focus:border-green-600"
      />
      <button
        type="submit"
        disabled={loading || !content.trim()}
        className="rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 disabled:opacity-50"
      >
        {loading ? "Envoi..." : "Publier"}
      </button>
    </form>
  );
}
