import "../../styles/header.css";
import { Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import SearchBar from "../SearchBar";

export default function Header() {

  const { user, logout } = useAuth();

  return (

    <header className="header">

      <SearchBar />

      <div className="header-right">

        <Bell size={20} />

        {user ? (

          <>
            <Link
              to="/profile"
              className="font-semibold hover:text-green-600 transition"
            >
              {user.firstName}
            </Link>

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
