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

      <div
        style={{
          background: "#FFDEAD",
          borderRadius: "24px",
          padding: "50px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "38px",
            marginBottom: 20,
          }}
        >
          Qui suis-je ?
        </h2>

        <p
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            lineHeight: 1.8,
            fontSize: "18px",
            color: "#555",
          }}
        >
          Développeur en herbe, je construis ce site web pour valider
          mon cursus de développeur web et web mobile à Holberton School Laval.
          De formation officinale et étant Naturothérapeute, l'idée de mettre
          à disposition mes connaissances et ainsi que de celles et ceux qui ont
          partagé ces 3 années d'études à Idenat faisait sens.
          Ce site permet de donner sous forme d'articles et de cours une
          compréhension du corps humain, comme ce que le père de la médecine
          Hippocrate aimait prodiguer de son temps. Ce site permet également
          de référencer les Naturothérapeutes pour suivi personnel.
        </p>
      </div>

    </div>
  );
}
