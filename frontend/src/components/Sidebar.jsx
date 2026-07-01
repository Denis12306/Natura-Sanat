import {
  House,
  BookOpen,
  Newspaper,
  Users,
  Info,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

import images from "../assets/images";

export default function Sidebar() {

  const location = useLocation();

  const menus = [
    {
      label: "Accueil",
      icon: House,
      path: "/",
    },
    {
      label: "Articles",
      icon: Newspaper,
      path: "/articles",
    },
    {
      label: "Cours",
      icon: BookOpen,
      path: "/courses",
    },
    {
      label: "Naturopathes",
      icon: Users,
      path: "/professionals",
    },
    {
      label: "À propos",
      icon: Info,
      path: "/about",
    },
  ];

  return (

    <aside className="sidebar">

      <img
        src={images.logo}
        alt="Natura Sanat"
        className="logo"
      />

      <nav>

        {menus.map((item) => {

          const Icon = item.icon;

          return (

            <Link
              key={item.path}
              to={item.path}
              className={
                location.pathname === item.path
                  ? "active"
                  : ""
              }
            >

              <Icon size={18} />

              {item.label}

            </Link>

          );

        })}

      </nav>

    </aside>

  );

}
