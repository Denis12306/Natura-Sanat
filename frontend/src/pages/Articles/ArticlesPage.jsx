import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import ArticleCard from "../../components/ArticleCard";
import { useAuth } from "../../context/AuthContext";

export default function ArticlesPage() {
  const { user } = useAuth();
  const [articles, setArticles] = useState([]);

  const canCreate =
    user && (user.role === "professional" || user.role === "admin");

  useEffect(() => {
    loadArticles();
  }, []);

  async function loadArticles() {
    try {
      const response = await axios.get("/articles");
      setArticles(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            fontSize: "34px",
            color: "#3d5d36",
            margin: 0,
          }}
        >
          Articles
        </h1>

        {canCreate && (
          <Link
            to="/articles/create"
            style={{
              backgroundColor: "#3d5d36",
              color: "white",
              padding: "12px 24px",
              borderRadius: "16px",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            + Créer un article
          </Link>
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))",
          gap: "50px",
        }}
      >
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
}
