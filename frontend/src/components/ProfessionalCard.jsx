import { Link } from "react-router-dom";

export default function ProfessionalCard({ professional }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 18,
        overflow: "hidden",
        boxShadow: "0 8px 25px rgba(0,0,0,.08)",
      }}
    >
      <img
        src={
          professional.profileImage ||
          "https://res.cloudinary.com/ddvpdcluh/image/upload/v1782576119/online-marketing-hIgeoQjS_iE-unsplash_x4mvni.jpg"
        }
        alt={professional.user?.firstName}
        style={{
          width: "100%",
          height: 220,
          objectFit: "cover",
        }}
      />

      <div style={{ padding: 20 }}>
        <h3>
          {professional.user?.firstName}{" "}
          {professional.user?.lastName}
        </h3>

        <p
          style={{
            color: "#5E7A4D",
            fontWeight: 600,
          }}
        >
          {professional.specialty}
        </p>

        <p>{professional.city}</p>

        <Link
          to={`/professionals/${professional._id}`}
        >
          Voir le profil →
        </Link>
      </div>
    </div>
  );
}
