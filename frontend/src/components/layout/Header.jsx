import "../../styles/header.css";
import { Bell } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="header">

      <div />

      <div className="header-right">

        <Bell size={20} />

        {user ? (
          <div className="user">
            <strong>
              {user.firstName}
            </strong>
          </div>
        ) : (
          <button className="login-btn">
            Se connecter
          </button>
        )}

      </div>

    </header>
  );
}
