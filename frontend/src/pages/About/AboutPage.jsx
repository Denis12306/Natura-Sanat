import images from "../../assets/images";

export default function AboutPage() {
  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "20px 0 60px",
      }}
    >
      <span
        style={{
          background: "#e8f3df",
          color: "#5c7f49",
          padding: "8px 18px",
          borderRadius: "30px",
          fontWeight: 600,
          display: "inline-block",
          marginBottom: 25,
        }}
      >
        🌿 À propos de Natura Sanat
      </span>

      <h1
        style={{
          fontSize: "56px",
          lineHeight: 1.1,
          marginBottom: 30,
          color: "#1f2937",
        }}
      >
        Une plateforme dédiée
        <br />
        à la santé naturelle.
      </h1>

      <p
        style={{
          fontSize: "20px",
          lineHeight: 1.8,
          color: "#555",
          maxWidth: "1200px",
          marginBottom: 60,
        }}
      >
        Natura Sanat est une plateforme qui met en relation les
        personnes souhaitant améliorer leur bien-être avec des
        professionnels certifiés en naturopathie, des formations
        spécialisées et des contenus pédagogiques fiables.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "30px",
          marginBottom: "70px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "35px",
            borderRadius: "20px",
            boxShadow: "0 10px 25px rgba(0,0,0,.06)",
          }}
        >
          <h3>🌱 Notre mission</h3>

          <p style={{ lineHeight: 1.8, marginTop: 15 }}>
            Rendre la santé naturelle accessible grâce à des
            contenus de qualité, des formations certifiées et un
            réseau de praticiens de confiance.
          </p>
        </div>

        <div
          style={{
            background: "white",
            padding: "35px",
            borderRadius: "20px",
            boxShadow: "0 10px 25px rgba(0,0,0,.06)",
          }}
        >
          <h3>🤝 Nos valeurs</h3>

          <p style={{ lineHeight: 1.8, marginTop: 15 }}>
            Transparence, bienveillance, pédagogie et respect de
            chaque parcours de santé.
          </p>
        </div>

        <div
          style={{
            background: "white",
            padding: "35px",
            borderRadius: "20px",
            boxShadow: "0 10px 25px rgba(0,0,0,.06)",
          }}
        >
          <h3>🎓 Notre objectif</h3>

          <p style={{ lineHeight: 1.8, marginTop: 15 }}>
            Créer la référence francophone pour apprendre,
            partager et développer la naturopathie de manière
            responsable.
          </p>
        </div>
      </div>

      <div
        style={{
          background: "#edf7e8",
          borderRadius: "24px",
          padding: "50px",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            fontSize: "38px",
            marginBottom: 20,
          }}
        >
          Natura Sanat évolue chaque jour 🌿
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: 1.8,
            fontSize: "18px",
            color: "#555",
          }}
        >
          Cette plateforme est développée dans le cadre d'un
          projet visant à démocratiser l'accès aux médecines
          naturelles tout en valorisant les professionnels
          qualifiés et les contenus fiables.
        </p>
      </div>

      {/* Section Qui suis-je ? modifiée */}
      <div
        style={{
          background: "#FFDEAD",
          borderRadius: "24px",
          padding: "50px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        {/* Cadre Photo */}
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

        {/* Contenu Texte */}
        <div style={{ flex: "1", minWidth: "300px", textAlign: "left" }}>
          <h2
            style={{
              fontSize: "38px",
              marginBottom: 20,
              color: "#1f2937",
            }}
          >
            Qui suis-je ?
          </h2>

          <p
            style={{
              lineHeight: 1.8,
              fontSize: "18px",
              color: "#555",
            }}
          >
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
        </div>
      </div>
    </div>
  );
}
