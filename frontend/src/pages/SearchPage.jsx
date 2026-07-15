import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../api/axios";

// Page de résultats de recherche globale (cours et articles)
export default function SearchPage() {
  const [params] = useSearchParams();
  const q = params.get("q") || ""; // Évite d'avoir un "null" textuel
  const [results, setResults] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await axios.get(`/search?q=${encodeURIComponent(q)}`);
        setResults(res.data.data);
      } catch (err) {
        console.error(err);
        setResults({ courses: [], articles: [] }); // En cas d'erreur, évite le plantage
      }
    }
    load();
  }, [q]);

  if (!results) return <p>Chargement...</p>;

  return (
    <div className="mx-auto max-w-6xl p-10">
      <h1 className="mb-10 text-4xl font-bold">
        Résultats pour "{q}"
      </h1>

      <h2 className="mb-5 text-2xl font-semibold">Formations</h2>
      {results.courses.length > 0 ? (
        results.courses.map((course) => (
          <div key={course._id} className="mb-2">
            {course.title}
          </div>
        ))
      ) : (
        <p className="text-gray-500">Aucune formation trouvée.</p>
      )}

      <h2 className="mt-12 mb-5 text-2xl font-semibold">Articles</h2>
      {results.articles.length > 0 ? (
        results.articles.map((article) => (
          <div key={article._id} className="mb-2">
            {article.title}
          </div>
        ))
      ) : (
        <p className="text-gray-500">Aucun article trouvé.</p>
      )}
    </div>
  );
}
