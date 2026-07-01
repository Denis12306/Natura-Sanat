import { useEffect, useState } from "react";
import axios from "../../api/axios";
import CourseCard from "../../components/CourseCard";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

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
      <h1
        style={{
          marginBottom: "30px",
          fontSize: "34px",
          color: "#3d5d36",
        }}
      >
        Nos cours
      </h1>

      {courses.map((course) => (
        <CourseCard key={course._id} course={course} />
      ))}
    </div>
  );
}
