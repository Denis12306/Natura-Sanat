import { Link } from "react-router-dom";
import { BookOpen, UserRound, Newspaper } from "lucide-react";

export default function FeaturesSection() {
  const items = [
    {
      icon: <UserRound size={36} />,
      title: "Professionnels certifiés",
      text: (
        <>
          <p>Des praticiens qualifiés proches de chez vous.</p>

          <Link
            to="/professionals"
            className="mt-6 inline-flex font-semibold text-green-700 transition hover:text-green-900 hover:underline"
          >
            Découvrir →
          </Link>
        </>
      ),
    },
    {
      icon: <BookOpen size={36} />,
      title: "Formations",
      text: (
        <>
          <p>Développez vos connaissances en santé naturelle.</p>

          <Link
            to="/courses"
            className="mt-6 inline-flex font-semibold text-green-700 transition hover:text-green-900 hover:underline"
          >
            Découvrir →
          </Link>
        </>
      ),
    },
    {
      icon: <Newspaper size={36} />,
      title: "Articles",
      text: (
        <>
          <p>Des conseils fiables rédigés par des experts.</p>

          <Link
            to="/articles"
            className="mt-6 inline-flex font-semibold text-green-700 transition hover:text-green-900 hover:underline"
          >
            Découvrir →
          </Link>
        </>
      ),
    },
  ];

  return (
    <section className="mx-auto max-w-7xl bg-linear-to-b from-green-50 to-emerald-50 px-6 py-24">
      <div className="grid gap-10 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="group rounded-3xl border border-green-100 bg-white/70 p-10 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition group-hover:bg-green-200">
              {item.icon}
            </div>

            <h3 className="mb-4 text-2xl font-semibold text-green-900">
              {item.title}
            </h3>

            <div className="space-y-4 text-base leading-relaxed text-gray-600">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
