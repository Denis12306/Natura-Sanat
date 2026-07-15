import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import axios from "../../api/axios";
import CourseCard from "../CourseCard";

// Ce composant récupère la liste de 3 cours depuis l'API pour la landing page
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
    <section className="mx-auto max-w-7xl px-6 py-20 my-12">
      <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end border-b border-[#5D7C50]/10 pb-8">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2F3E29]">
            Nos cours
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#2F3E29]/70 leading-relaxed md:whitespace-nowrap">
            Développez vos connaissances et apprenez à votre rythme les secrets d'un bien-être au naturel.
          </p>
        </div>

        <Link
          to="/courses"
          className="group inline-flex items-center gap-2 font-medium text-sm uppercase tracking-wider text-[#5D7C50] transition-colors hover:text-[#2F3E29]"
        >
          Voir tous les cours
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </section>
  );
}
