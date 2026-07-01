import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import images from "../../assets/images";

export default function HeroSection() {
  return (
    <section className="bg-green-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 lg:flex-row">

        <div className="flex-1">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            🌿 Santé naturelle
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
            Prenez soin de votre santé naturellement.
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Trouvez des professionnels certifiés,
            découvrez des formations de qualité
            et apprenez à prendre soin de vous.
          </p>

          <div className="mt-8 flex gap-4">

            <Link
              to="/professionals"
              className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
            >
              Trouver un professionnel
            </Link>

            <Link
              to="/courses"
              className="flex items-center gap-2 rounded-lg border px-6 py-3 hover:bg-white"
            >
              Voir les formations
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

        <div className="flex-1">

          <img
            src={images.hero}
            alt="Santé naturelle"
            className="rounded-3xl shadow-xl"
          />

        </div>

      </div>
    </section>
  );
}