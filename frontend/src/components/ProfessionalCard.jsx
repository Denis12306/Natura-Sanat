import { Link } from "react-router-dom";

export default function ProfessionalCard({
  professional,
}) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img
        src={professional.image || images.defaultProfessional}
        alt={professional.name}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />

      <h2 className="text-xl font-bold">
        {professional.name}
      </h2>

      <p className="text-gray-600 mb-4">
        {professional.specialty}
      </p>

      <Link
        to={`/professionals/${professional._id}`}
        className="text-green-600"
      >
        Voir le profil
      </Link>
    </div>
  );
}
