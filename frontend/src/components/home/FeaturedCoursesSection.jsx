import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import CourseCard from "../CourseCard";

export default function FeaturedCoursesSection() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("/courses");
        setCourses(response.data.data.slice(0, 3));
      } catch (error) {
        console.error(error);
      }
    };
    fetchCourses();
  }, []);

  if (courses.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 mb-16">
      <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="text-4xl font-bold text-gray-900">Nos formations</h2>
          <p className="mt-2 text-lg text-gray-600">
            Développez vos connaissances à votre rythme.
          </p>
        </div>
        <Link
          to="/courses"
          className="font-semibold text-green-700 transition hover:text-green-900 hover:underline"
        >
          Voir tous les cours →
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </section>
  );
}
