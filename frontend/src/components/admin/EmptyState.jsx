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
