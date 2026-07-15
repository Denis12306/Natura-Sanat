// Gérer l'affichage de manière élégante et propre lorsqu'il n'y a aucune donnée à afficher sur une page
export default function EmptyState({ text }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px",
        color: "#777",
      }}
    >
      <h3>{text}</h3>
    </div>
  );
}
