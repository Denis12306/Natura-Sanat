import { Quote } from "lucide-react";
import images from "../../assets/images";

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

      {/* --- BLOC PHOTO CENTRÉ --- */}
      <div className="relative flex justify-center mb-10">
        <div
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "5px solid white",
            boxShadow: "0 10px 25px rgba(0,0,0,.1)",
            backgroundColor: "#f3f4f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <img
            src={images?.perso}
            alt="Mon portrait"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement.innerHTML =
                '<span style="color: #888; font-size: 14px; font-weight: 500; text-align: center; padding: 15px;">Ajoute ta photo ici 📷</span>';
            }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      {/* --------------------------- */}

      <p className="relative text-left text-lg leading-9 text-gray-700 md:text-xl">
        Développeur web en devenir, j'ai conçu Natura Sanat dans le cadre de la
        validation de mon cursus de Développeur Web et Web Mobile à Holberton School Laval.
        Ce projet est né de la rencontre entre deux univers qui me passionnent :
        le développement informatique et la santé naturelle.
        <br></br>
        Préparateur en pharmacie de formation, puis diplômé en naturopathie après
        trois années d'études à IDENAT, j'ai souhaité créer une plateforme permettant
        de rendre ces connaissances accessibles au plus grand nombre. L'objectif est
        de transmettre un savoir fiable, compréhensible et fondé sur une approche globale de la santé.
        <br></br>
        Natura Sanat propose ainsi des articles et des formations destinés à mieux comprendre
        le fonctionnement du corps humain, dans l'esprit d'Hippocrate, considéré
        comme le père de la médecine, qui plaçait déjà la prévention et l'hygiène de vie au cœur de la santé.
        <br></br>
        La plateforme permet également de découvrir et de référencer des naturothérapeutes qualifiés,
        afin de faciliter la mise en relation entre les praticiens et les personnes souhaitant bénéficier d'un accompagnement personnalisé.
        <br></br>
        Au-delà d'un simple projet de fin d'études, Natura Sanat représente la volonté de réunir mes
        compétences techniques et mon expérience dans le domaine de la santé pour proposer un outil utile,
        moderne et évolutif au service du bien-être.
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
