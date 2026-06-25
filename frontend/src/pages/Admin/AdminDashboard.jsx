import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard Administrateur</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <Link to="/admin/users">
          Utilisateurs
        </Link>

        <Link to="/admin/professionals">
          Professionnels
        </Link>

        <Link to="/admin/courses">
          Cours
        </Link>

        <Link to="/admin/articles">
          Articles
        </Link>
      </div>
    </div>
  );
}
