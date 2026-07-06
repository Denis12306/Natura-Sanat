import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import CourseCard from "../../components/CourseCard";
import { useAuth } from "../../context/AuthContext";

export default function CoursesPage() {
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);

  const canCreate =
    user && (user.role === "professional" || user.role === "admin");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("/courses");
        setCourses(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            fontSize: "34px",
            color: "#3d5d36",
            margin: 0,
          }}
        >
          Nos cours
        </h1>

        {canCreate && (
          <Link
            to="/courses/create"
            style={{
              backgroundColor: "#3d5d36",
              color: "white",
              padding: "12px 24px",
              borderRadius: "16px",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            + Créer un cours
          </Link>
        )}
      </div>

      {courses.map((course) => (
        <CourseCard key={course._id} course={course} />
      ))}
    </div>
  );
}
