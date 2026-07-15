import { useState } from "react";
import {
  Home,
  BookOpen,
  Newspaper,
  Users,
  Info,
  Leaf,
  Menu,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import "../../styles/sidebar.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Ouvrir le menu"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {isOpen && <div className="overlay" onClick={closeMenu} />}

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="logo">
          <Leaf size={42} />
          <div>
            <h2>NATURA</h2>
            <h2>SANAT</h2>
          </div>
        </div>

        <nav>
          <NavLink to="/" onClick={closeMenu}>
            <Home size={18} />
            Accueil
          </NavLink>
          <NavLink to="/articles" onClick={closeMenu}>
            <Newspaper size={18} />
            Articles
          </NavLink>
          <NavLink to="/courses" onClick={closeMenu}>
            <BookOpen size={18} />
            Cours
          </NavLink>
          <NavLink to="/professionals" onClick={closeMenu}>
            <Users size={18} />
            Professionnels
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            <Info size={18} />
            A propos
          </NavLink>
        </nav>

        <div className="sidebar-card">
          <h3>Devenez naturothérapeute</h3>
          <p>Partagez vos connaissances et aidez les autres.</p>
          <a
            href="https://idenat.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-card-btn"
          >
            En savoir plus
          </a>
        </div>
      </aside>
    </>
  );
}
