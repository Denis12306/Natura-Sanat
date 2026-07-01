import { Bell } from "lucide-react";

import { Link } from "react-router-dom";

export default function Topbar() {

  return (

    <header className="topbar">

      <div />

      <div className="topbar-right">

        <Bell size={18} />

        <Link
          to="/login"
          className="login-btn"
        >
          Se connecter
        </Link>

      </div>

    </header>

  );

}
