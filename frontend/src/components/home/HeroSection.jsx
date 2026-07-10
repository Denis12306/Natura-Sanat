import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import images from "../../assets/images";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[40px] bg-linear-to-br from-green-50 via-white to-green-100 px-8 py-24 lg:px-20 lg:py-32">

      {/* Cercles décoratifs */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-green-200 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-300 opacity-20 blur-3xl"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-20 lg:flex-row">

        {/* TEXTE */}

        <div className="flex-1">

          <span className="inline-flex rounded-full bg-green-100 px-5 py-2 text-3xl font-semibold text-green-700">
            🌿 Santé naturelle
          </span>

          <h1 className="mt-8 max-w-3xl text-5xl font-bold leading-tight text-gray-900 xl:text-7xl">
            Prenez soin de votre santé
            <span className="block text-[#5D7C50]">
              naturellement.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-600">
            Découvrez des professionnels certifiés,
            développez vos connaissances grâce à nos
            formations et apprenez à adopter une
            approche naturelle du bien-être durablement.
          </p>

          {/* STATS */}

          <div className="mt-16 grid grid-cols-3 gap-10 max-w-xl">

            <div>
              <h2 className="text-4xl font-bold text-[#5D7C50]">
                30+
              </h2>

              <p className="mt-2 text-gray-600">
                Professionnels
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#5D7C50]">
                80+
              </h2>

              <p className="mt-2 text-gray-600">
                Formations
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#5D7C50]">
                60+
              </h2>

              <p className="mt-2 text-gray-600">
                Articles
              </p>
            </div>

          </div>

        </div>

        {/* IMAGE */}

        <div className="flex flex-1 justify-center">

          <img
            src={images.hero}
            alt="Santé naturelle"
            className="w-full max-w-md rounded-3xl shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}
