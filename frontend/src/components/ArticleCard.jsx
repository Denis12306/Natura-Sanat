import { Link } from "react-router-dom";
import images from "../assets/images";

export default function ArticleCard({ article }) {
  return (
    <Link
      to={`/articles/${article._id}`}
      style={{
        textDecoration: "none",
        color: "#1f2937",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 8px 25px rgba(0,0,0,.08)",
          border: "1px solid #edf2e8",
          transition: ".25s",
          cursor: "pointer",
        }}
      >
        <img
          src={article.image || images.defaultArticle}
          alt={article.title}
          style={{
            width: "100%",
            height: "190px",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            padding: "18px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "#e8f1df",
              color: "#4e6f3d",
              padding: "5px 12px",
              borderRadius: "30px",
              fontSize: "12px",
              fontWeight: 600,
              marginBottom: "14px",
            }}
          >
            {article.category}
          </span>

          <h3
            style={{
              fontSize: "22px",
              marginBottom: "12px",
              lineHeight: "1.3",
            }}
          >
            {article.title}
          </h3>

          <p
            style={{
              color: "#6b7280",
              lineHeight: 1.6,
              minHeight: 70,
            }}
          >
            {article.content?.slice(0, 120)}...
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
              color: "#7c7c7c",
              fontSize: "14px",
            }}
          >
            <span>
              👤 {article.author?.firstName}
            </span>

            <span>
              {new Date(article.createdAt).toLocaleDateString()}
            </span>
          </div>

          <button
            style={{
              marginTop: "18px",
              width: "100%",
              background: "#5c7f49",
              color: "white",
              border: "none",
              padding: "12px",
              borderRadius: "12px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Lire l'article
          </button>
        </div>
      </div>
    </Link>
  );
}