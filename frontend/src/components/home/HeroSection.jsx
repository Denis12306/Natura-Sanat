import { ArrowRight } from "lucide-react";
import { images } from "@/config/images";

export default function HeroSection() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-badge">
          🌿 Plateforme de santé naturelle
        </span>

        <h1>
          Votre bien-être
          <br />
          naturellement.
        </h1>

        <p>
          Découvrez des professionnels qualifiés, des formations,
          des articles et des conseils pour améliorer votre santé
          grâce aux médecines naturelles.
        </p>

        <div className="hero-buttons">

          <button className="btn-primary">
            Découvrir
          </button>

          <button className="btn-secondary">
            Nos formations

            <ArrowRight size={18} />
          </button>

        </div>

      </div>

      <div className="hero-right">

        <div className="hero-image-card">

          <img
            src={images.hero}
            alt="Naturopathie"
          />

        </div>

      </div>

    </section>
  );
}
