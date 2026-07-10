import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import images from "../../assets/images";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F2EB] px-6 py-20 lg:px-16 lg:py-28 border-bottom-right-radius: 50px;">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#5D7C50_1px,transparent_1px)] bg-size-[16px_16px]"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row">

        <div className="flex-1 space-y-8 z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#5D7C50]/30 bg-white/60 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-[#2F3E29]">
            <span className="text-base">🌿</span> Écosystème de Santé Naturelle
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif font-normal leading-[1.15] text-[#2F3E29] xl:text-6xl">
            Prenez soin de votre santé{" "}
            <span className="italic font-light block text-[#5D7C50] mt-1">
              naturellement.
            </span>
          </h1>

          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-[#2F3E29]/80">
            Découvrez des professionnels certifiés, développez vos connaissances grâce à nos
            formations et adoptez une approche holistique du bien-être durable.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#5D7C50]/20 max-w-lg">
            {[
              { val: "30+", label: "Praticiens certifiés" },
              { val: "80+", label: "Formations bien-être" },
              { val: "60+", label: "Articles & Conseils" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl sm:text-3xl font-serif font-semibold text-[#5D7C50]">{stat.val}</div>
                <div className="text-xs uppercase tracking-wider text-[#2F3E29]/60 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-center relative w-full max-w-md lg:max-w-none">
          <div className="relative p-3 bg-white shadow-[0_20px_50px_rgba(93,124,80,0.15)] rounded-4xl rotate-2 transition-transform hover:rotate-0 duration-500">
            <img
              src={images.hero}
              alt="Santé naturelle et naturopathie"
              className="w-full h-100 object-cover rounded-3xl"
            />
            <div className="absolute -bottom-1 -left-5 bg-[#5D7C50] text-center text-white p-5 rounded-3xl shadow-lg max-w-45 hidden xl:block -rotate-3">
              <p className="text-xs font-semibold uppercase tracking-widest opacity-80">Approche</p>
              <p className="font-serif text-lg leading-tight mt-1">100% Holistique & Validée</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
