import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Permet de naviguer dans le menu
export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <aside
      style={{
        width: 260,
        background: "#ffffff",
        borderRight: "1px solid #e5e7eb",
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h2
          style={{
            color: "#2f855a",
            marginBottom: 40,
          }}
        >
          🌿 Natura Sanat
        </h2>

        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <Link to="/">🏠 Accueil</Link>

          <Link to="/courses">📚 Cours</Link>

          <Link to="/professionals">
            👨‍⚕️ Professionnels
          </Link>

          <Link to="/articles">
            📰 Articles
          </Link>

          {user?.role === "professional" && (
            <Link to="/dashboard/professional">
              🎓 Mon espace
            </Link>
          )}

          {user?.role === "admin" && (
            <Link to="/dashboard/admin">
              ⚙ Administration
            </Link>
          )}
        </nav>
      </div>

      {user ? (

        <div className="user-menu">

          <Link
            to="/profile"
            className="hover:text-green-600 font-semibold"
          >
            {user.firstName}
          </Link>

          <button onClick={logout}>
            Déconnexion
          </button>

        </div>

      ) : (

        <Link
          to="/login"
          className="login-btn"
        >
          Se connecter
        </Link>

      )}
    </aside >
  );
}
