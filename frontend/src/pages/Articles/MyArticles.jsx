import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import axios from "../../api/axios";

export default function MyArticles() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {

    loadArticles();

  }, []);

  async function loadArticles() {

    const response =
      await axios.get("/articles");

    setArticles(response.data.data);

  }

  async function deleteArticle(id) {

    const confirmation = window.confirm(
      "Supprimer cet article ?"
    );

    if (!confirmation) return;

    try {

      await axios.delete(`/articles/${id}`);

      loadArticles();

    } catch (error) {

      console.error(error);

    }

  }

  return (

    <div>

      <h1>Mes articles</h1>

      <Link to="/dashboard/professional/articles/create">

        ➕ Ajouter un article

      </Link>

      <hr />

      {articles.map((article) => (

        <div
          key={article._id}
          style={{
            border: "1px solid #ddd",
            padding: 20,
            marginBottom: 20,
            borderRadius: 10,
          }}
        >

          <h3>{article.title}</h3>

          <p>{article.category}</p>

          <div
            style={{
              display: "flex",
              gap: 15,
            }}
          >

            <Link
              to={`/dashboard/professional/articles/edit/${article._id}`}
            >
              Modifier
            </Link>

            <button
              onClick={() => deleteArticle(article._id)}
            >
              Supprimer
            </button>

          </div>

        </div>

      ))}

    </div>

  );

}
