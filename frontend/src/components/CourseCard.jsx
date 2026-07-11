import { Link } from "react-router-dom";
import { images } from "@/assets/images";

function truncateText(text, maxLength = 120) {
  if (!text) return "";
  if (text.length <= maxLength) return text;

  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  return truncated.slice(0, lastSpace) + "...";
}

const levelLabels = {
  beginner: "Débutant",
  intermediate: "Intermédiaire",
  advanced: "Avancé",
};

export default function CourseCard({ course }) {
  return (
    <Link
      to={`/courses/${course._id}`}
      style={{
        textDecoration: "none",
        color: "#1f2937",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 8px 25px rgba(0,0,0,.08)",
          border: "1px solid #edf2e8",
          transition: ".25s",
          cursor: "pointer",
        }}
      >
        <img
          src={course.image || images.defaultCourse}
          alt={course.title}
          style={{
            width: "100%",
            height: "190px",
            objectFit: "cover",
          }}
        />

        <div style={{ padding: "18px" }}>
          <span
            style={{
              display: "inline-block",
              background: "#e8f1df",
              color: "#4e6f3d",
              padding: "5px 12px",
              borderRadius: "30px",
              fontSize: "12px",
              fontWeight: 600,
              marginBottom: "14px",
            }}
          >
            {course.category}
          </span>

          <h3
            style={{
              fontSize: "22px",
              marginBottom: "12px",
              lineHeight: "1.3",
            }}
          >
            {course.title}
          </h3>

          <p
            style={{
              color: "#6b7280",
              lineHeight: 1.6,
              minHeight: 70,
            }}
          >
            {truncateText(course.description)}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
              color: "#7c7c7c",
              fontSize: "14px",
            }}
          >
            <span>⏱️ {course.duration}h</span>
            <span>{levelLabels[course.level] || course.level}</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "18px",
            }}
          >
            <span
              style={{
                fontWeight: 700,
                fontSize: "18px",
                color: "#3d5d36",
              }}
            >
              {course.price !== undefined ? `${course.price} €` : "Prix non renseigné"}
            </span>
          </div>

          <button
            style={{
              marginTop: "18px",
              width: "100%",
              background: "#5c7f49",
              color: "white",
              border: "none",
              padding: "12px",
              borderRadius: "12px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Voir le cours
          </button>
        </div>
      </div>
    </Link>
  );
}
