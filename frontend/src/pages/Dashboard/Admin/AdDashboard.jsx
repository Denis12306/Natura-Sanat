import { Link } from "react-router-dom";

export default function AdDashboard() {
  const cards = [
    {
      title: "Utilisateurs",
      description: "Gérer les comptes utilisateurs",
      link: "/admin/users",
    },
    {
      title: "Cours",
      description: "Gérer les formations",
      link: "/admin/courses",
    },
    {
      title: "Articles",
      description: "Gérer les articles du blog",
      link: "/admin/articles",
    },
    {
      title: "Professionnels",
      description: "Gérer les professionnels",
      link: "/admin/professionals",
    },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>Administration Natura Sanat</h1>

      <p>
        Bienvenue dans le panneau d'administration.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
          gap: "25px",
          marginTop: "40px",
        }}
      >
        {cards.map((card) => (
          <Link
            key={card.title}
            to={card.link}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "25px",
                minHeight: "140px",
                transition: ".2s",
                cursor: "pointer",
              }}
            >
              <h2>{card.title}</h2>

              <p>{card.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
