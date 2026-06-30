import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "../../../api/axios";

export default function MyArticles() {

  const [articles, setArticle] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {

    try {

      const res = await axios.get("/articles/me");

      setArticles(res.data.data);

    } catch (err) {

      console.error(err);

    }

  };

  const handleDelete = async (id) => {

    if (!window.confirm("Supprimer l'article ?")) return;

    try {

      await axios.delete(`/article/${id}`);

      fetchArticles();

    } catch (err) {

      console.error(err);

    }

  };

  return (

    <div style={{ padding: "30px" }}>

      <h1>Mes articles</h1>

      <Link to="/article/create">
        ➕ Ajouter un article
      </Link>

      <hr />

      {articles.length === 0 ? (

        <p>Aucun article.</p>

      ) : (

        articles.map((article) => (

          <div
            key={article._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 10,
              padding: 20,
              marginBottom: 15,
            }}
          >

            <h3>{article.title}</h3>

            <p>{article.category}</p>

            <Link to={`/articles/edit/${article._id}`}>
              Modifier
            </Link>

            {" | "}

            <button
              onClick={() => handleDelete(article._id)}
            >
              Supprimer
            </button>

          </div>

        ))

      )}

    </div>

  );

}
