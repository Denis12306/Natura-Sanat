import { Link } from "react-router-dom";
import { BookOpen, UserRound, Newspaper } from "lucide-react";

// Ce composant affiche la liste des 3 features pour la landing page
export default function FeaturesSection() {
  const items = [
    {
      icon: <UserRound size={24} className="stroke-[1.5]" />,
      title: "Professionnels certifiés",
      desc: "Des praticiens qualifiés et sélectionnés avec soin proches de chez vous.",
      link: "/professionals"
    },
    {
      icon: <BookOpen size={24} className="stroke-[1.5]" />,
      title: "Formations immersives",
      desc: "Développez votre autonomie et votre savoir en Naturopathie.",
      link: "/courses"
    },
    {
      icon: <Newspaper size={24} className="stroke-[1.5]" />,
      title: "Articles & Sciences",
      desc: "Des dossiers complets et des conseils fiables rédigés par des experts.",
      link: "/articles"
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 my-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="relative flex flex-col justify-between p-10 rounded-4xl border border-[#5D7C50]/10 bg-white hover:bg-[#F5F2EB]/50 transition-all duration-300 group"
          >
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#5D7C50]/10 text-[#5D7C50] group-hover:bg-[#5D7C50] group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>

              <h3 className="mb-3 text-2xl font-serif text-[#2F3E29]">
                {item.title}
              </h3>

              <p className="text-base leading-relaxed text-[#2F3E29]/70">
                {item.desc}
              </p>
            </div>

            <div className="mt-8">
              <Link
                to={item.link}
                className="inline-flex items-center gap-1 font-semibold text-sm text-[#5D7C50] hover:text-[#2F3E29] transition-colors"
              >
                Découvrir l'espace <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
