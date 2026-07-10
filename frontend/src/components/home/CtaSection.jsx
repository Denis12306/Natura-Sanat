import { Link } from "react-router-dom";

export default function CtaSection() {
  return (
    <section className="mx-auto my-24 max-w-7xl px-6 w-full flex justify-center">
      <div className="relative w-full overflow-hidden rounded-[40px] bg-[#2F3E29] px-8 py-16 md:px-16 md:py-24 shadow-xl flex flex-col items-center justify-center text-center">

        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#5D7C50] opacity-20 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center">

          <h2 className="w-full text-center mb-8 font-serif text-4xl font-light text-[#F5F2EB] md:text-6xl leading-tight tracking-wide">
            Prêt à cultiver votre{" "}
            <span className="italic font-normal text-[#C89D65] block sm:inline">
              bien-être durable ?
            </span>
          </h2>

          <p className="text-center mx-auto mb-12 max-w-4xl text-lg md:text-xl text-[#F5F2EB]/90 leading-relaxed block w-full">
            Rejoignez une communauté bienveillante pour une santé plus naturelle. <br className="hidden md:inline" />
            Accédez aux formations et échangez avec des experts certifiés.
          </p>

          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
            <Link
              to="/register"
              className="w-full sm:w-auto min-w-60 text-center justify-center items-center flex rounded-full bg-[#5D7C50] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#4a6340] transition duration-300 border border-[#5D7C50]"
            >
              Créer un compte gratuitement
            </Link>
            <Link
              to="/professionals"
              className="w-full sm:w-auto min-w-60 text-center justify-center items-center flex rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 text-base font-semibold text-[#F5F2EB] hover:bg-white/20 transition duration-300"
            >
              Consulter l'annuaire
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
