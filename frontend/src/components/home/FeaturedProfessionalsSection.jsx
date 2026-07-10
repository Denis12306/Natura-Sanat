import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import ProfessionalCard from "../ProfessionalCard";

export default function FeaturedProfessionalsSection() {
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    const fetchProfessionals = async () => {
      try {
        const response = await axios.get("/professionals");
        setProfessionals(response.data.data.slice(0, 3));
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfessionals();
  }, []);

  if (professionals.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 mb-20">
      <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="text-4xl font-bold text-gray-900">Nos naturopathes</h2>
          <p className="mt-2 text-lg text-gray-600">
            Des praticiens qualifiés proches de chez vous.
          </p>
        </div>
        <Link
          to="/professionals"
          className="font-semibold text-green-700 transition hover:text-green-900 hover:underline"
        >
          Voir tous les naturopathes →
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {professionals.map((professional) => (
          <ProfessionalCard key={professional._id} professional={professional} />
        ))}
      </div>
    </section>
  );
}
