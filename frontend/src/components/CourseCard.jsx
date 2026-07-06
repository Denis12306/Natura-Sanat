import { Link } from "react-router-dom";
import { images } from "@/assets/images";

export default function CourseCard({ course }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img
        src={course.image || images.defaultCourse}
        alt={course.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">
          {course.title}
        </h2>

        <p className="text-gray-600 mb-4">
          {course.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="font-bold">
            {course.price} €
          </span>

          <Link
            to={`/courses/${course._id}`}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Voir
          </Link>
        </div>
      </div>
    </div>
  );
}
