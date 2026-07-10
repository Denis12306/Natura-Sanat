import { Link } from "react-router-dom";

export default function CtaSection() {
  return (
    <section className="mx-auto mb-20 max-w-7xl px-6">
      <div className="rounded-3xl bg-[#5D7C50] px-8 py-16 text-center md:px-16">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Prêt à prendre soin de vous ?
        </h2>
        <p className="mx-auto mb-8 max-w-6xl text-lg text-green-50">
          Rejoignez une communauté engagée pour une santé plus naturelle,
          accédez à nos formations et échangez avec des professionnels qualifiés.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/register"
            className="rounded-2xl bg-white px-8 py-4 font-semibold text-green-700 transition hover:bg-green-50"
          >
            Créer un compte
          </Link>
          <Link
            to="/professionals"
            className="rounded-2xl bg-white px-8 py-4 font-semibold text-green-700 transition hover:bg-green-50"
          >
            Découvrir les naturopathes
          </Link>
        </div>
      </div>
    </section>
  );
}
