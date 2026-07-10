import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import { ArrowRight } from "lucide-react";
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
    <section className="mx-auto max-w-7xl px-6 py-20 my-12">
      {/* EN-TÊTE DE LA SECTION ACCUEILLANTE ET CHIC */}
      <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end border-b border-[#5D7C50]/10 pb-8">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2F3E29]">
            Nos naturopathes
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#2F3E29]/70 leading-relaxed md:whitespace-nowrap">
            Des praticiens qualifiés proches de chez vous ou presque.
          </p>
        </div>

        {/* LIEN DE NAVIGATION STYLE GALERIE */}
        <Link
          to="/professionals"
          className="group inline-flex items-center gap-2 font-medium text-sm uppercase tracking-wider text-[#5D7C50] transition-colors hover:text-[#2F3E29]"
        >
          Voir tous les naturopathes
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* GRILLE DE CARTES PARFAITEMENT ESPACÉES */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {professionals.map((professional) => (
          <ProfessionalCard key={professional._id} professional={professional} />
        ))}
      </div>
    </section>
  );
}
