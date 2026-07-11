import { Quote } from "lucide-react";

export default function StorySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-4">
      <div className="relative overflow-hidden rounded-3xl bg-[#F3ECDD] px-8 py-16 shadow-sm md:px-16 md:py-20">

        <Quote
          size={180}
          className="pointer-events-none absolute -top-6 -left-6 text-[#E4D8BC] opacity-60"
          strokeWidth={1}
        />

        <div className="relative text-center">
          <span className="inline-block rounded-full bg-white/60 px-5 py-2 text-xl mt-8 font-semibold text-green-700">
            🌱 Mon histoire
          </span>

          <h2 className="mt-8 mb-10 text-4xl font-bold text-gray-900">
            Pourquoi Natura Sanat ?
          </h2>
        </div>

        <p className="relative text-left text-lg leading-9 text-gray-700 md:text-xl">
          Développeur en herbe, je construis ce site pour valider mon
          cursus de développeur web et web mobile à Holberton School
          Laval. Préparateur en Pharmacie de formation et Naturothérapeute,
          l'idée de mettre à disposition mes connaissances, ainsi que celles de
          celles et ceux qui ont partagé ces trois années d'études à
          Idenat, faisait sens.
          <br /><br />
          Ce site permet de donner, sous forme d'articles et de cours,
          une compréhension du corps humain — comme ce qu'Hippocrate,
          le père de la médecine, aimait déjà prodiguer en son temps.
          <br /><br />
          Il permet également de référencer les Naturothérapeutes pour
          un suivi personnalisé.
        </p>

        <div className="relative mt-10 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-green-700/40" />
          <p className="text-base font-semibold italic text-green-800">
            Denis, fondateur de Natura Sanat
          </p>
          <span className="h-px w-12 bg-green-700/40" />
        </div>
      </div>
    </section>
  );
}
