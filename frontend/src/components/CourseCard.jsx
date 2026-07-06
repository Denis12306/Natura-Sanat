import { Link } from "react-router-dom";
import { images } from "@/assets/images";

function truncateText(text, maxLength = 200) {
  if (!text) return "";
  if (text.length <= maxLength) return text;

  // Coupe au dernier espace avant la limite pour ne pas couper un mot en deux
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  return truncated.slice(0, lastSpace) + "...";
}

export default function CourseCard({ course }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md flex flex-col">
      <img
        src={course.image || images.defaultCourse}
        alt={course.title}
        className="w-full h-52 object-cover"
      />
      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-xl font-bold mb-2">
          {course.title}
        </h2>

        <p className="text-gray-600 mb-4 flex-1">
          {truncateText(course.description)}
        </p>

        <div className="flex justify-between items-center">
          <span className="font-bold">
            {course.price !== undefined ? `${course.price} €` : "Prix non renseigné"}
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
