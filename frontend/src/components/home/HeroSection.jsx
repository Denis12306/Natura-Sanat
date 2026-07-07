import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import images from "../../assets/images";

export default function HeroSection() {
  return (
    <section className="mb-16 rounded-3xl bg-green-50 px-6 py-14 md:px-10 md:py-16 lg:mb-20 lg:px-16 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-20">
        {/* Partie gauche */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-2xl font-semibold text-green-700">
            🌿 Santé naturelle
          </span>

          <h1 className="mt-8 mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Prenez soin de votre
            <br />
            santé naturellement.
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-lg leading-8 text-gray-600 md:text-xl lg:mx-0">
            Trouvez des professionnels certifiés, découvrez des
            formations de qualité et apprenez à prendre soin de
            vous grâce à la naturopathie.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/professionals"
              className="rounded-xl bg-[#5d7d4d] px-7 py-4 text-center font-semibold text-white transition hover:bg-[#4f6d41]"
            >
              Trouver un professionnel
            </Link>

            <Link
              to="/courses"
              className="flex items-center justify-center gap-2 rounded-xl border border-green-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:bg-green-50"
            >
              Voir les formations
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Partie droite */}
        <div className="flex flex-1 justify-center">
          <img
            src={images.hero}
            alt="Santé naturelle"
            className="w-full max-w-sm rounded-3xl object-cover shadow-2xl md:max-w-md lg:max-w-xl"
          />
        </div>
      </div>
    </section>
  );
}
