// Code couleur pour status
export default function StatusBadge({ role }) {
  const colors = {
    admin: "#d32f2f",
    professional: "#1976d2",
    client: "#388e3c",
  };

  return (
    <span
      style={{
        background: colors[role] || "#757575",
        color: "#fff",
        padding: "4px 10px",
        borderRadius: "20px",
        fontSize: "12px",
      }}
    >
      {role}
    </span>
  );
}
