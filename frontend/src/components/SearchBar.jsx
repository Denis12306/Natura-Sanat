import { Search, BookOpen, Newspaper } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../api/axios";

export default function SearchBar() {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults(null);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        setLoading(true);

        const res = await axios.get(`/search?q=${query}`);

        setResults(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!query.trim()) return;

    navigate(`/search?q=${query}`);
    setOpen(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-96"
    >
      <Search
        size={28}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setOpen(true)}
        onBlur={() => {
          setTimeout(() => setOpen(false), 150);
        }}
        placeholder="Rechercher un article ou une formation..."
        className="w-full rounded-2xl border border-gray-200 bg-white/90 py-4 pl-12 pr-5 text-[15px] shadow-lg backdrop-blur-sm transition-all duration-300 placeholder:text-gray-400 focus:border-[#5D7C50] focus:ring-4 focus:bg-[#5D7C50] focus:shadow-xl outline-none"/>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-4 w-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

          {loading && (
            <div className="flex items-center justify-center gap-3 p-5">
              <div className="h-5 w-5 animate-spin rounded-full border-2 bg-[#5D7C50] border-t-transparent"></div>
              <span>Recherche...</span>
            </div>
          )}

          {!loading && results && (
            <>
              {results.courses.length > 0 && (
                <>
                  <p className="text-center border-b bg-[#F8FAF6] px-5 py-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Formations
                  </p>

                  {results.courses.map((course) => (
                    <Link
                      key={course._id}
                      to={`/courses/${course._id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-4 border-b px-5 py-4 transition hover:bg-green-50"
                    >
                      {course.image ? (
                        <img
                          src={course.image}
                          alt={course.title}
                          className="h-14 w-14 rounded-xl object-cover"
                        />
                      ) : (
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100">
                          <BookOpen size={22} className="text-green-700" />
                        </div>
                      )}

                      <div>
                        <p className="font-semibold">
                          {course.title}
                        </p>

                        <p className="text-sm text-gray-500">
                          Formation
                        </p>
                      </div>
                    </Link>
                  ))}
                </>
              )}

              {results.articles.length > 0 && (
                <>
                  <p className="text-center border-b bg-gray-50 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Articles
                  </p>

                  {results.articles.map((article) => (
                    <Link
                      key={article._id}
                      to={`/articles/${article._id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-4 border-b px-5 py-4 transition hover:bg-green-50"
                    >
                      {article.image ? (
                        <img
                          src={article.image}
                          alt={article.title}
                          className="h-14 w-14 rounded-xl object-cover"
                        />
                      ) : (
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100">
                          <Newspaper
                            size={22}
                            className="text-green-700"
                          />
                        </div>
                      )}

                      <div>
                        <p className="font-semibold">
                          {article.title}
                        </p>

                        <p className="text-sm text-gray-500">
                          Article
                        </p>
                      </div>
                    </Link>
                  ))}
                </>
              )}

              {results.courses.length === 0 &&
                results.articles.length === 0 && (
                  <div className="p-6 text-center text-gray-500">
                    Aucun résultat trouvé.
                  </div>
                )}

              <Link
                to={`/search?q=${query}`}
                className="block py-4 text-center font-semibold bg-[#5D7C50] transition hover:bg-green-100"
              >
                Voir tous les résultats →
              </Link>
            </>
          )}
        </div>
      )}
    </form>
  );
}
