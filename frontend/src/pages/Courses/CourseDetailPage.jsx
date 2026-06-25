import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCourseById } from "../../api/courses";

export default function CourseDetailPage() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await getCourseById(id);
        setCourse(data);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return <p className="p-6">Chargement...</p>;
  }

  if (!course) {
    return <p className="p-6">Cours introuvable</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />

      <h1 className="text-4xl font-bold mb-4">
        {course.title}
      </h1>

      <p className="text-gray-700 mb-6">
        {course.description}
      </p>

      <p className="text-2xl font-bold text-green-600">
        {course.price} €
      </p>
    </div>
  );
}
