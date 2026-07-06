import "../../styles/header.css";
import { Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Header() {

  const { user, logout } =useAuth();

  return (

    <header className="header">

      <div />

      <div className="header-right">

        <Bell size={20} />

        {user ? (

          <>
            <strong>{user.firstName}</strong>

            <button
              className="logout-btn"
              onClick={logout}
            >
              Déconnexion
            </button>
          </>

        ) : (

          <Link
            to="/login"
            className="login-btn"
          >
            Se connecter
          </Link>

        )}

      </div>

    </header>

  );
}
