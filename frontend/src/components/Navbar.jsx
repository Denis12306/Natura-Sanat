import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        borderBottom: "1px solid #ddd",
        alignItems: "center",
      }}
    >
      <Link to="/">Accueil</Link>

      {user ? (
        <>
          <Link to="/courses">Cours</Link>

          <Link to="/professionals">
            Professionnels
          </Link>

          <Link to="/articles">
            Articles
          </Link>

          {user.role === "admin" && (
            <Link to="/admin">
              Administration
            </Link>
          )}

          <span>
            Bonjour {user.firstName} ({user.role})
          </span>

          <button onClick={logout}>
            Déconnexion
          </button>
        </>
      ) : (
        <Link to="/login">
          Connexion
        </Link>
      )}
    </nav>
  );
}
