import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import images from "../../assets/images";

export default function HeroSection() {
  return (
    <section
      className="bg-green-50 rounded-3xl"
      style={{
        padding: "70px 60px",
        marginBottom: "70px",
      }}
    >
      <div
        className="mx-auto flex max-w-7xl flex-col lg:flex-row"
        style={{
          alignItems: "center",
          gap: "80px",
        }}
      >
        {/* Partie gauche */}
        <div className="flex-1">
          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            🌿 Santé naturelle
          </span>

          <h1
            className="font-bold text-gray-900"
            style={{
              fontSize: "50px",
              lineHeight: 1.1,
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            Prenez soin de votre
            <br />
            santé naturellement.
          </h1>

          <p
            className="text-gray-600"
            style={{
              fontSize: "22px",
              lineHeight: 1.8,
              maxWidth: "620px",
              marginBottom: "45px",
            }}
          >
            Trouvez des professionnels certifiés, découvrez des
            formations de qualité et apprenez à prendre soin de
            vous grâce à la naturopathie.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/professionals"
              style={{
                background: "#5d7d4d",
                color: "white",
                padding: "16px 28px",
                borderRadius: "14px",
                fontWeight: 600,
                textDecoration: "none",
                transition: ".25s",
              }}
            >
              Trouver un professionnel
            </Link>

            <Link
              to="/courses"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 28px",
                border: "1px solid #d7dfcf",
                borderRadius: "14px",
                textDecoration: "none",
                color: "#334155",
                fontWeight: 600,
                background: "white",
                transition: ".25s",
              }}
            >
              Voir les formations
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Partie droite */}
        <div
          className="flex-1"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={images.hero}
            alt="Santé naturelle"
            style={{
              width: "80%",
              maxWidth: "520px",
              borderRadius: "30px",
              boxShadow: "0 25px 60px rgba(0,0,0,.15)",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
}
