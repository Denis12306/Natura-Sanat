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
          <p>Développez votre savoir en Naturopathie.</p>

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
    <section className="mx-auto max-w-7xl px-6 py-32 mb-32">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">

        {items.map((item) => (

          <div
            key={item.title}
            className="group rounded-4xl border border-green-100 bg-white p-12 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
          >

            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-green-100 text-green-700 transition group-hover:scale-110">

              {item.icon}

            </div>

            <h3 className="mb-5 text-3xl font-bold text-gray-900">
              {item.title}
            </h3>

            <div className="space-y-6 text-lg leading-8 text-gray-600">

              {item.text}

            </div>

          </div>

        ))}

      </div>
    </section>
  );
}
