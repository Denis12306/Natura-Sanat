import { Link } from "react-router-dom";

// Création page Dashboard pro
export default function ProfessionalDashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Dashboard Professionnel</h1>

      <p>
        Gérez vos contenus depuis votre espace professionnel.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <Link
          to="/dashboard/professional/courses"
          style={cardStyle}
        >
          📚
          <h3>Mes cours</h3>
        </Link>

        <Link
          to="/dashboard/professional/articles"
          style={cardStyle}
        >
          📰
          <h3>Mes articles</h3>
        </Link>

        <Link
          to="/dashboard/professional/profile"
          style={cardStyle}
        >
          👤
          <h3>Mon profil</h3>
        </Link>
      </div>
    </div>
  );
}

const cardStyle = {
  textDecoration: "none",
  border: "1px solid #ddd",
  borderRadius: "12px",
  padding: "30px",
  textAlign: "center",
  color: "#222",
};
