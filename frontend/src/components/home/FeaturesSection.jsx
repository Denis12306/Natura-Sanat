import { BookOpen, UserRound, Newspaper } from "lucide-react";

export default function FeaturesSection() {

  const items = [
    {
      icon: <UserRound size={32} />,
      title: "Professionnels certifiés",
      text: "Des praticiens qualifiés proches de chez vous."
    },
    {
      icon: <BookOpen size={32} />,
      title: "Formations",
      text: "Développez vos connaissances en santé naturelle."
    },
    {
      icon: <Newspaper size={32} />,
      title: "Articles",
      text: "Des conseils fiables rédigés par des experts."
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <h2 className="mb-12 text-center text-4xl font-bold">
        Pourquoi Natura Sanat ?
      </h2>

      <div className="grid gap-8 md:grid-cols-3">

        {items.map((item) => (

          <div
            key={item.title}
            className="rounded-2xl border bg-white p-8 shadow-sm"
          >
            <div className="mb-4 text-green-600">
              {item.icon}
            </div>

            <h3 className="mb-3 text-xl font-semibold">
              {item.title}
            </h3>

            <p className="text-gray-600">
              {item.text}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}
